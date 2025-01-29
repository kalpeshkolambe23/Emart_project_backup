package com.example.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.Models.Product;

@Repository
public interface SubCategoryRepository extends JpaRepository<Product, Integer> {

    @Query(value = "select * from Product p where p.categoryID = :catId AND p.subcategoryID = :subcatId", nativeQuery = true)
    List<Product> findProductsBySubCategoryId(@Param("subcatId") int subcatId, @Param("catId") int catId);
}
