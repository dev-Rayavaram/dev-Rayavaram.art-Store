package artstorecom.artStoreArtifact.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import artstorecom.artStoreArtifact.exception.ResourceNotFoundException;
import artstorecom.artStoreArtifact.model.Orders;
import artstorecom.artStoreArtifact.repository.OrdersRepository;


@RestController
@RequestMapping("store_api/v1")
public class OrdersController {
	@Autowired
	private OrdersRepository ordersRepository;

	@GetMapping("/orders")
	public List<Orders>getAllOrderss(){
		return ordersRepository.findAll();
	}

	@GetMapping("/orders/{id}")
	public ResponseEntity<Orders> getOrdersById(@PathVariable(value="id") Long orderId)
	throws ResourceNotFoundException {
		Orders order = ordersRepository.findById(orderId).
				orElseThrow(()-> new ResourceNotFoundException("Order notfound"+orderId));
		
		return ResponseEntity.ok().body(order);
	}
	@PostMapping("/order")
	public Orders createOrders(@Valid @RequestBody Orders order)
	{
		return ordersRepository.save(order);
	}
	@PutMapping("/order/{id}")
	public ResponseEntity<Orders> updateOrdersById(@PathVariable(value="id") Long ordersId,@Valid @RequestBody Orders ordersDetails)
			throws ResourceNotFoundException {
		Orders order = ordersRepository.findById(ordersId).
				orElseThrow(() -> new ResourceNotFoundException("Order notfound" + ordersId));
				order.setPrice(ordersDetails.getPrice());
				order.setProduct((ordersDetails.getProduct()));
				order.setQuantity(ordersDetails.getQuantity());	
		final Orders updatedOrder = ordersRepository.save(order);
		return ResponseEntity.ok(updatedOrder);
	}

	@DeleteMapping("/orderd/{id}")
	public Map<String,Boolean>deleteOrder(@PathVariable(value="id") Long ordersId)
			throws ResourceNotFoundException {
		Orders order = ordersRepository.findById(ordersId).
				orElseThrow(() -> new ResourceNotFoundException("Order not found" + ordersId));
		ordersRepository.delete(order);
		Map<String,Boolean>response = new HashMap<>();
		response.put("deleted order",Boolean.TRUE);
		return response;

	}
	

}
