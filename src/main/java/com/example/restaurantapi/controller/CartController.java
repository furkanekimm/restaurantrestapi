package com.example.restaurantapi.controller;

import com.example.restaurantapi.entity.Cart;
import com.example.restaurantapi.services.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/carts")
@CrossOrigin(origins = "*")
public class CartController {

    @Autowired
    private CartService cartService;
    //  /carts/add   /carts/list
    @PostMapping("/add")
    public void addCart(@RequestBody List<Cart> cart) {
        cartService.addCart(cart);
    }

    @GetMapping("/list")
    public List<Cart> allCarts(){
        return cartService.allCarts();
    }


}
