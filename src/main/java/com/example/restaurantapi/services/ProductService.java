package com.example.restaurantapi.services;

import com.example.restaurantapi.entity.Product;
import com.example.restaurantapi.entity.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    public List<Product> listAllProduct() {
        return productRepository.findAll();
    }


}
