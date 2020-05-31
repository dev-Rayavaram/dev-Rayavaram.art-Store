package artstorecom.artStoreArtifact.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import artstorecom.artStoreArtifact.model.Orders;

public interface OrdersRepository extends JpaRepository<Orders, Long>{
}
