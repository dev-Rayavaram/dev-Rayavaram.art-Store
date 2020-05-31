package artstorecom.artStoreArtifact.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import artstorecom.artStoreArtifact.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long>{

}
