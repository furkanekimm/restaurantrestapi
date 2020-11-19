package com.example.restaurantapi.services;

import com.example.restaurantapi.Model.Product;
import com.example.restaurantapi.repository.ProductRepository;
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

    public Product getProductById( Long id){
        Product product = productRepository.findById(id).get();
        return product;
    }

    public void deleteProduct(Long id) {
        // allNews.removeIf(article -> article.getId() == id);
        productRepository.deleteById(id);
    }

    public Product updateProduct(Product product) {
        productRepository.saveAndFlush(product);
        return product;
    }

    public List<Product> findProductNameByCategory(String category){
        return productRepository.findProductByCategory(category);
    }

   public List<String> findAllCategory(){
        return productRepository.findAllCategory();
   }


}
