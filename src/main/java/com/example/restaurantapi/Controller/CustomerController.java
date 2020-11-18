package com.example.restaurantapi.Controller;


import com.example.restaurantapi.Model.Product;
import com.example.restaurantapi.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "*")
public class CustomerController {

    @Autowired
    private ProductService productService;

    @GetMapping("/")
    public List<Product> listAllProducts(){
        return productService.listAllProduct();
    }

}
