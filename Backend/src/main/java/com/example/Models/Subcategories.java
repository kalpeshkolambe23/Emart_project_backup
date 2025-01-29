package com.example.Models;

import jakarta.persistence.*;
import java.util.Set;

@Entity
@Table(name = "Subcategories")
public class Subcategories {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int subcategoryID;

    private String subcategoryName;

    @ManyToOne
    @JoinColumn(name = "CategoryID", referencedColumnName = "categoryId")
    private Categories category;

    @OneToMany(mappedBy = "subCat", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Product> products;

    public Subcategories() {
    }

    public Subcategories(int subcategoryID, String subcategoryName, Categories category) {
        this.subcategoryID = subcategoryID;
        this.subcategoryName = subcategoryName;
        this.category = category;
    }

    public int getSubcategoryID() {
        return subcategoryID;
    }

    public void setSubcategoryID(int subcategoryID) {
        this.subcategoryID = subcategoryID;
    }

    public String getSubcategoryName() {
        return subcategoryName;
    }

    public void setSubcategoryName(String subcategoryName) {
        this.subcategoryName = subcategoryName;
    }

    public Categories getCategory() {
        return category;
    }

    public void setCategory(Categories category) {
        this.category = category;
    }

    public Set<Product> getProducts() {
        return products;
    }

    public void setProducts(Set<Product> products) {
        this.products = products;
    }

    @Override
    public String toString() {
        return "Subcategories{" +
                "subcategoryID=" + subcategoryID +
                ", subcategoryName='" + subcategoryName + '\'' +
                ", category=" + category +
                '}';
    }
}
