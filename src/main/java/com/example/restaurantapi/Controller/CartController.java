package com.example.restaurantapi.Controller;

import com.example.restaurantapi.Model.Cart;
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

    @PostMapping("/add")
    public void addCart(@RequestBody List<Cart> cart) {
        cartService.addCart(cart);
    }

    @GetMapping("/list")
    public List<Cart> allCarts(){
        return cartService.allCarts();
    }


}
