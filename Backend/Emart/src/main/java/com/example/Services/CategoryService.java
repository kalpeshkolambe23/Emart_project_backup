package com.example.Services;

import java.util.List;
import com.example.Models.Product;

public interface CategoryService {
    List<Product> getAllProductsByCategoryId(int cat_id);
}
