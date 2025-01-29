package com.example.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Models.Product;
import com.example.Repositories.SubCategoryRepository;

@Service
public class SubCategoryServiceImpl implements SubCategoryService {

    @Autowired
    private SubCategoryRepository subRepo;

    @Override
    public List<Product> getAllProductsBySubCategoryId(int subcatId, int catId) {
        return subRepo.findProductsBySubCategoryId(subcatId, catId);
    }
}
