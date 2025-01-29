package com.example.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "Product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ProductID")
    private int productID;

    private String productName;
    private String description;
    private int price;
    private int stock;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "SubcategoryID", referencedColumnName = "subcategoryID")
    private Subcategories subCat;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "CategoryID", referencedColumnName = "categoryId")
    private Categories category;

    public Product() {
    }

    public int getProductID() {
        return productID;
    }

    public void setProductID(int productID) {
        this.productID = productID;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public Subcategories getSubCat() {
        return subCat;
    }

    public void setSubCat(Subcategories subCat) {
        this.subCat = subCat;
    }

    public Categories getCategory() {
        return category;
    }

    public void setCategory(Categories category) {
        this.category = category;
    }

	@Override
	public String toString() {
		return "Product [productID=" + productID + ", productName=" + productName + ", description=" + description
				+ ", price=" + price + ", stock=" + stock + ", subCat=" + subCat + ", category=" + category + "]";
	}

    
}
