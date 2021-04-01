/*
  PersonService.java

  Class that connects the controller of the backend point with the actual methods updating and modifying the DB

 */

package com.example.demo.service;

import com.example.demo.Model.Person;
import com.example.demo.Model.EventToReceive;
import com.example.demo.dao.PersonDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PersonService {

    //Object of the personDAO interface
    private final PersonDAO personDAO;

    //Constructor
    @Autowired
    public PersonService(@Qualifier("fakeDAO") PersonDAO personDAO)
    {
        this.personDAO = personDAO;
    }

    //Methods for connecting the controller methods with the interface methods

    public int addPerson(Person person)
    {
        return personDAO.insertPerson(person);
    }

    public List<Person> getAllPeople() { return personDAO.getAllPeople();}

    public ArrayList<Object> getEvents(String userName)
    {
      return personDAO.getAllEvents(userName);
    }

    public Optional<Person> getPersonByID(UUID id)
    {
        return personDAO.selectPersonByID(id);
    }

    public boolean checkPersonInDB(String userName, String password){return personDAO.checkPasswordMatch(userName,password);}

    public Optional<Person> getPersonByUserName(String userName)
    {
        return personDAO.selectPersonByUserName(userName);
    }

    public int deletePersonByID(UUID id)
    {
        return personDAO.deletePersonByID(id);
    }

    public int updatePersonByUserName(String userName,  EventToReceive person){return personDAO.updatePersonByUserName(userName, person);}
}
