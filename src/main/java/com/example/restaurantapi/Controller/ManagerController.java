package com.example.restaurantapi.Controller;

import com.example.restaurantapi.entity.Product;
import com.example.restaurantapi.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ManagerController {

    @Autowired
    private ProductService productService;

    @RequestMapping("/add")
    public Product addProduct(@RequestBody Product product){
        return productService.addProduct(product);
    }
}
