package com.example.restaurantapi.Controller;

import com.example.restaurantapi.Model.Product;
import com.example.restaurantapi.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/productsControl")
@CrossOrigin(origins = "*")
public class ManagerController {

    @Autowired
    private ProductService productService;

    @PostMapping("/add")
    public void addProduct(@RequestBody Product product){
        productService.addProduct(product);
    }

    @GetMapping("/")
    public List<Product> listAllNews() {
        return productService.listAllProduct();
    }


    @GetMapping("/{id}")
    public Product getNewsById(@PathVariable Long id) {
        return productService.getProductById(id);
    }


    @DeleteMapping("/{id}")
    public void deleteNews(@PathVariable Long id) {
        productService.deleteProduct(id);
    }

    @PutMapping("/update/")
    public Product updateNews(@RequestBody Product product) {
        return productService.updateProduct(product);
    }

}
