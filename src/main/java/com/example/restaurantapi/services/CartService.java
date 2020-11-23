package com.example.restaurantapi.services;

import com.example.restaurantapi.entity.Cart;
import com.example.restaurantapi.entity.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {
    @Autowired
    private CartRepository cartRepository;

    public void addCart(List<Cart> cart){
        cartRepository.saveAll(cart);
    }

    public List<Cart> allCarts(){
        return cartRepository.findAll();
    }
}
