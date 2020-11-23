package com.example.restaurantapi.controller;

import com.example.restaurantapi.entity.Product;
import com.example.restaurantapi.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "*")
public class ProductController {

    @Autowired
    private ProductService productService;



    @PostMapping("/add")
    public void addProduct(@RequestBody Product product){
        productService.addProduct(product);
    }

    @GetMapping("/")
    public List<Product> listAllProduct() {
        return productService.listAllProduct();
    }


    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id) {
        return productService.getProductById(id);
    }


    @DeleteMapping("/delete/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
    }

    @PutMapping("/update/")
    public Product updateProduct(@RequestBody Product product) {
        return productService.updateProduct(product);
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
