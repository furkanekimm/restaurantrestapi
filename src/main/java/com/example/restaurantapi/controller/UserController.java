package com.example.restaurantapi.controller;

import com.example.restaurantapi.entity.User;
import com.example.restaurantapi.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/person")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/add")
    private void addPerson(@RequestBody User user){
        userService.addPerson(user);
    }

    @PutMapping("/update")
    private User updatePerson(@RequestBody User user){
        return userService.updatePerson(user);
    }

    @DeleteMapping("/delete/{id}")
    private void deletePerson(@PathVariable Long id){
        userService.deletePerson(id);
    }

    @GetMapping("/{id}")
    private User findById(@PathVariable Long id){
        return userService.getPersonById(id);
    }

    @GetMapping("/")
    private List<User> findAllPerson(){
        return userService.listAllPerson();
    }

}
