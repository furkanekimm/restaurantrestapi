package com.example.restaurantapi.services;

import com.example.restaurantapi.Model.Person;
import com.example.restaurantapi.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonService {
    @Autowired
    private PersonRepository personRepository;

    public void addPerson(Person person){
        personRepository.save(person);
    }

    public List<Person> listAllPerson(){
        return personRepository.findAll();
    }

    public Person updatePerson(Person person){
        return personRepository.saveAndFlush(person);
    }

    public void deletePerson(Long id){
        personRepository.deleteById(id);
    }

    public Person getPersonById(Long id){
        return personRepository.findById(id).get();
    }
}
