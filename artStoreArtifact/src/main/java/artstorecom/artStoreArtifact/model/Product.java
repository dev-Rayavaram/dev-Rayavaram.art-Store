package artstorecom.artStoreArtifact.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="product")
public class Product {
	
	@Id
	@GeneratedValue
	@Column(name = "id")
	private long id;
	@Column(name = "product")
	private String product;
	@Column(name = "quantity")
	private int quantity;
	@Column(name = "price")
	private float price;
	@Column(name = "url_sm")
	private String urlSm;
	@Column(name = "url_lg")
	private String urlLg;
	
	public Product() {
		super();
	}

	public Product(String product,int quantity, float price, String urlSm,String urlLg) {
		super();
		this.product = product;
		this.price = price;
		this.price = price;
		this.quantity = quantity;
		this.urlSm = urlSm;
		this.urlLg = urlLg;
	}


	
	
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}

	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public String getUrlSm() {
		return urlSm;
	}
	public void setUrlSm(String urlSm) {
		this.urlSm = urlSm;
	}
	public String getUrlLg() {
		return urlLg;
	}
	public void setUrlLg(String urlLg) {
		this.urlLg = urlLg;
	}
	public String getProduct() {
		return product;
	}
	public void setProduct(String product) {
		this.product = product;
	}
	

}
