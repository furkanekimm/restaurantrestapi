package com.example.restaurantapi.Controller;

import com.example.restaurantapi.Model.Person;
import com.example.restaurantapi.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/person")
public class PersonController {
    @Autowired
    private PersonService personService;

    @PostMapping("/add")
    private void addPerson(@RequestBody Person person){
        personService.addPerson(person);
    }

    @PutMapping("/update")
    private Person updatePerson(@RequestBody Person person){
        return personService.updatePerson(person);
    }

    @DeleteMapping("/{id}")
    private void deletePerson(@PathVariable Long id){
        personService.deletePerson(id);
    }

    @GetMapping("/{id}")
    private Person findById(@PathVariable Long id){
        return personService.getPersonById(id);
    }

    @GetMapping("/")
    private List<Person> findAllPerson(){
        return personService.listAllPerson();
    }

}
