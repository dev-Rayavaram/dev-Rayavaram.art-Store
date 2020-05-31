package artstorecom.artStoreArtifact.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import artstorecom.artStoreArtifact.model.Product;


public interface ProductRepository  extends JpaRepository<Product, Long>{


}
