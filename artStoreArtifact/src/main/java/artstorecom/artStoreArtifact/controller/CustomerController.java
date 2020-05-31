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
import artstorecom.artStoreArtifact.model.Customer;
import artstorecom.artStoreArtifact.repository.CustomerRepository;

@RestController
@RequestMapping("store_api/v1")
public class CustomerController {
	@Autowired 
	CustomerRepository customerRepository;
	
	@GetMapping("/customers")
	public List<Customer>getAllCustomers(){
		return customerRepository.findAll();
	}

	@GetMapping("/customers/{id}")
	public ResponseEntity<Customer> getCustomerById(@PathVariable(value="id") Long customerId)
	throws ResourceNotFoundException {
		Customer customer = customerRepository.findById(customerId).
				orElseThrow(()-> new ResourceNotFoundException("Customer notfound"+customerId));
		
		return ResponseEntity.ok().body(customer);
	}
	@PostMapping("/customer")
	public Customer createCustomer(@Valid @RequestBody Customer customer)
	{
		return customerRepository.save(customer);
	}
	@PutMapping("/customer/{id}")
	public ResponseEntity<Customer> updateCustomerById(@PathVariable(value="id") Long customerId,@Valid @RequestBody Customer customerDetails)
			throws ResourceNotFoundException {
		Customer customer = customerRepository.findById(customerId).
				orElseThrow(() -> new ResourceNotFoundException("Customer notfound" + customerId));
		customer.setEmail(customerDetails.getEmail());
		customer.setName(customerDetails.getName());
		customer.setPhoneNumber(customerDetails.getPhoneNumber());
		final Customer updatedCustomer = customerRepository.save(customer);
		return ResponseEntity.ok(updatedCustomer);
	}

	@DeleteMapping("/customerd/{id}")
	public Map<String,Boolean>deleteCustomer(@PathVariable(value="id") Long customerId)
			throws ResourceNotFoundException {
		Customer customer = customerRepository.findById(customerId).
				orElseThrow(() -> new ResourceNotFoundException("Customer not found" + customerId));
		customerRepository.delete(customer);
		Map<String,Boolean>response = new HashMap<>();
		response.put("deleted customer",Boolean.TRUE);
		return response;

	}
	

}
