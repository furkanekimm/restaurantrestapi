package com.example.restaurantapi.services;

import com.example.restaurantapi.entity.User;
import com.example.restaurantapi.entity.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public void addPerson(User user){
        userRepository.save(user);
    }

    public List<User> listAllPerson(){
        return userRepository.findAll();
    }

    public User updatePerson(User user){
        return userRepository.saveAndFlush(user);
    }

    public void deletePerson(Long id){
        userRepository.deleteById(id);
    }

    public User getPersonById(Long id){
        return userRepository.findById(id).get();
    }
}
