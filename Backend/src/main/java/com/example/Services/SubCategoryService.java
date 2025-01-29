package com.example.Services;

import java.util.List;

import com.example.Models.Product;

public interface SubCategoryService {
    List<Product> getAllProductsBySubCategoryId(int subcatId, int catId);
}
