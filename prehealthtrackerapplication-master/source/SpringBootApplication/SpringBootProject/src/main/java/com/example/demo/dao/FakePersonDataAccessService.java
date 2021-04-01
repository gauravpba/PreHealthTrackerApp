/*

  FakePersonDataAccessService.java

  A class implementing the interface PersonDAO containing all the main methods needed to modify the DB

 */

package com.example.demo.dao;

import com.example.demo.Model.Person;
import com.example.demo.Model.EventToReceive;
import org.springframework.stereotype.Repository;

import java.util.*;


@Repository("fakeDAO")
public class FakePersonDataAccessService implements PersonDAO {


  // A list of all the users in the DB
  private static List<Person> DB = new ArrayList<Person>();

  // Method to insert a new user into the DB
  @Override
  public int insertPerson(UUID id, Person person) {
      ArrayList<Object> events = new ArrayList<>();
      if(person.getEvents() != null)
        events.add(person.getEvents());
      Person newPersonToAdd = new Person(id,
              person.getUserName(),
              person.getPassword(),
              events);
      DB.add(newPersonToAdd);

      return 1;
  }

    //Method to return a list of all the users in the DB
  @Override
  public List<Person> getAllPeople() {
      return DB;
  }

  //Method to return a list of all the events of a particular user
  @Override
  public ArrayList<Object> getAllEvents(String userName) {
    return selectPersonByUserName(userName)
      .map(person ->{
        return person.getEvents();
      }).orElse(null);
    }


  // Method to select a user from the DB using a given ID
  @Override
  public Optional<Person> selectPersonByID(UUID id) {
      return DB.stream().filter(person -> person.getID().equals(id)).findFirst();
  }

  // Method to select a user from the DB using a given username
  @Override
  public Optional<Person> selectPersonByUserName(String userName) {
    return DB.stream().filter(person -> person.getUserName().equals(userName)).findFirst();
  }

  // Method to check if the given password matches with the one present in the DB mapped with the given username
  @Override
  public boolean checkPasswordMatch(String userName, String password)
  {
    return selectPersonByUserName(userName)
      .map(person ->{
          if(userName.equals(person.getUserName()))
          {
            if(password.equals(person.getPassword()))
              return true;
            else
              return false;
          }
          else
            return false;
      }).orElse(false);


  }

  // Method to delete the person with a given ID
  @Override
  public int deletePersonByID(UUID id) {
      Optional<Person> personMayBe = selectPersonByID(id);
      if(personMayBe.isEmpty())
      {
          return 0;
      }
      DB.remove(personMayBe.get());
      return 1;
  }

  // Method to add a new event to a given userName
  @Override
  public int updatePersonByUserName(String userNameToFind,  EventToReceive newPerson) {
      return selectPersonByUserName(userNameToFind)
              .map(personToUpdate ->{
                  UUID id;
                  String name, userName, password;
                  ArrayList<Object> events = personToUpdate.getEvents();

                  id = personToUpdate.getID();
                  userName = userNameToFind;
                  password = personToUpdate.getPassword();

                  //if(personToUpdate.getPassword().equals(passwordToMatch)) {
                    if (newPerson != null) {
                      events.add(newPerson);
                    }
                  //}
                  int indexOfPersonToUpdate = DB.indexOf(personToUpdate);
                  if (indexOfPersonToUpdate >= 0) {
                      DB.set(indexOfPersonToUpdate, new Person(id,
                        userName,
                        password,
                        events));
                      return 1;
                  }
                  return 0;
              })
              .orElse(0);
  }
}
