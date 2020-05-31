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
import artstorecom.artStoreArtifact.model.Product;
import artstorecom.artStoreArtifact.repository.ProductRepository;

@RestController
@RequestMapping("store_api/v1")
public class ProductController {
	@Autowired
	private ProductRepository productsRepository;
	
	@GetMapping("/products")
	public List<Product>getAllProducts(){
		return productsRepository.findAll();
	}

	@GetMapping("/products/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable(value="id") Long productId)
	throws ResourceNotFoundException {
		Product product = productsRepository.findById(productId).
				orElseThrow(()-> new ResourceNotFoundException("Product notfound"+productId));
		
		return ResponseEntity.ok().body(product);
	}
	@PostMapping("/product")
	public Product createProduct(@Valid @RequestBody Product product)
	{
		return productsRepository.save(product);
	}
	@PutMapping("/product/{id}")
	public ResponseEntity<Product> updateProductById(@PathVariable(value="id") Long productId,@Valid @RequestBody Product productDetails)
			throws ResourceNotFoundException {
		Product product = productsRepository.findById(productId).
				orElseThrow(() -> new ResourceNotFoundException("Product not found" + productId));
				
		final Product updatedProduct = productsRepository.save(product);
		return ResponseEntity.ok(updatedProduct);
	}

	@DeleteMapping("/prod/{id}")
	public Map<String,Boolean>deleteProduct(@PathVariable(value="id") Long productId)
			throws ResourceNotFoundException {
		Product product = productsRepository.findById(productId).
				orElseThrow(() -> new ResourceNotFoundException("Product not found" + productId));
		productsRepository.delete(product);
		Map<String,Boolean>response = new HashMap<>();
		response.put("deleted product",Boolean.TRUE);
		return response;

	}
		

}
