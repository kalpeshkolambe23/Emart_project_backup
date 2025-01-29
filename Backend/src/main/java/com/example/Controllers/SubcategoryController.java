package com.example.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.Models.Product;
import com.example.Services.SubCategoryService;

@RestController
public class SubcategoryController {

    @Autowired
    private SubCategoryService subService;

    @GetMapping("/api/categories/{cat_id}/{subcat_id}")
    public List<Product> getAllProductsBySubCategory(@PathVariable("subcat_id") int subcatId, @PathVariable("cat_id") int catId) {
        return subService.getAllProductsBySubCategoryId(subcatId, catId);
    }
}
