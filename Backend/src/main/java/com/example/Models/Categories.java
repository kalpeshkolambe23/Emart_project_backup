package com.example.Models;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import java.util.Set;

@Entity
@Table(name = "Categories")
public class Categories {

    private int CategoryID;
    private String CategoryName;
    private Set<Product> CategoryProduct;
    

    public Categories(int categoryID, String categoryName) {
        super();
        CategoryID = categoryID;
        CategoryName = categoryName;
    }

    public Categories() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CategoryID")
    public int getCategoryID() {
        return CategoryID;
    }

    public void setCategoryID(int categoryID) {
        CategoryID = categoryID;
    }

    public String getCategoryName() {
        return CategoryName;
    }

    public void setCategoryName(String categoryName) {
        CategoryName = categoryName;
    }

    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL) 
    public Set<Product> getCategoryProduct() {
        return CategoryProduct;
    }

    public void setCategoryProduct(Set<Product> categoryProduct) {
        CategoryProduct = categoryProduct;
    }
    
    
//    @OneToMany(mappedBy = "subcategory", cascade = CascadeType.ALL)
//    public Set<Product> getSubcategoryProduct() {
//		return SubcategoryProduct;
//	}
//
//	public void setSubcategoryProduct(Set<Product> subcategoryProduct) {
//		SubcategoryProduct = subcategoryProduct;
//	}

	@Override
    public String toString() {
        return "Categories [CategoryID=" + CategoryID + ", CategoryNam"
        		+ "e=" + CategoryName + "]";
    }
}
