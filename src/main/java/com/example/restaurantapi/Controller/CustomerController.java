package com.example.restaurantapi.Controller;


import com.example.restaurantapi.Model.Product;
import com.example.restaurantapi.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/category/product")
    public List<Product> findProductByCategory(@RequestParam String category){
        return productService.findProductNameByCategory(category);
    }
    @GetMapping("/category")
    public List<String> findAllCategory(){
        return productService.findAllCategory();
    }

}
