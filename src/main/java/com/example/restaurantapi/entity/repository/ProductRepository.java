package com.example.restaurantapi.entity.repository;

import com.example.restaurantapi.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product,Long> {

    @Query("Select p from Product p where p.category=:category")
    List<Product> findProductByCategory(String category);

    @Query("Select DISTINCT category from Product")
    List<String> findAllCategory();

}
