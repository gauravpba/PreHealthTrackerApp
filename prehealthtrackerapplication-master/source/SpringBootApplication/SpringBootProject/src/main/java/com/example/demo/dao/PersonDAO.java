/*

  PersonDAO.java

  An interface that contains the main functions for adding, modifying or removing data from the DB
 */


package com.example.demo.dao;

import java.util.*;

import com.example.demo.Model.Person;
import com.example.demo.Model.EventToReceive;

import java.util.UUID;

public interface PersonDAO {

  //Method to add a new person to the DB
    int insertPerson(UUID id, Person person);

    //Default method to make new random ID
    default int insertPerson(Person person)
    {
        UUID id = UUID.randomUUID();
        return insertPerson(id, person);
    }

    // Returns a list of all the people present in the DB
    List<Person> getAllPeople();

    // Returns the list of all the events of a particular user
    ArrayList<Object> getAllEvents(String userName);

    // Method to select a person with a given ID
    Optional<Person> selectPersonByID(UUID id);

    //Method to select a person with a given username
    Optional<Person> selectPersonByUserName(String userName);

    // Method to check if the given password matches with the one present in the DB mapped with the given username
    boolean checkPasswordMatch(String userName, String password);

    // Method to delete the person with a given ID
    int deletePersonByID(UUID id);

    // Method to add a new event to a given userName
    int updatePersonByUserName(String userName,  EventToReceive person);


    //TO ADD

  //Method to update a particular event of a user


}
