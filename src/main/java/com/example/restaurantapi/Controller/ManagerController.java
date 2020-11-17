package com.example.restaurantapi.Controller;

import com.example.restaurantapi.Model.Product;
import com.example.restaurantapi.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/productsControl")
@CrossOrigin(origins = "http://localhost:3000")
public class ManagerController {

    @Autowired
    private ProductService productService;

    @PostMapping("/add")
    public void addProduct(@RequestBody Product product){
        productService.addProduct(product);
    }
}
