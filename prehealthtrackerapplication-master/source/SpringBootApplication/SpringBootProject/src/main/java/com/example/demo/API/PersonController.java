/*
  PersonController.java

  Controller class that receives and sends data to and from an application that posts the requests

 */

package com.example.demo.API;

import com.example.demo.Model.Person;
import com.example.demo.Model.EventToReceive;
import com.example.demo.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RequestMapping("api/v1/person")
@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class PersonController {

    private final PersonService personService;

    @Autowired
    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    //Method that accepts the POST request to create a new user in the DB
    @PostMapping
    public void addPerson(@Valid @NotNull @RequestBody Person person)
    {
        personService.addPerson(person);
    }

    //Method that accepts the GET request to return all the users in the DB
    @GetMapping
    public List<Person> getAllPeople()
    {
      return personService.getAllPeople();
    }

    //Method that accepts the GET request to return all the events of a particular user
    @RequestMapping(value = "/{username}", method=RequestMethod.GET)
    public ArrayList<Object> getEvents(@PathVariable("username") String userName)
    {
        return personService.getEvents(userName);
    }

  //Method that accepts the GET request to return a particular person using a given ID
/*    @GetMapping(path = "{id}")
    public Person getPersonByID(@PathVariable("id") UUID id)
    {
        return personService.getPersonByID(id).orElse(null);
    }
*/

  //Method that accepts the GET request to return a particular person using a given username and password
    @RequestMapping(value = "/{username}/{password}", method=RequestMethod.GET)
    public boolean getPersonByUserName(@PathVariable("username") String userName, @PathVariable("password") String password)
    {
      return personService.checkPersonInDB(userName,password);
    }

  //Method that accepts the DELETE request to delete a particular person using a given ID
    @DeleteMapping(path = "{id}")
    public void deletePersonByID(@PathVariable("id") UUID id)
    {
        personService.deletePersonByID(id);
    }

  //Method that accepts the PUT request to update a particular person by adding a new given event to it's existing list of events
    @PutMapping(path = "{username}")
    public void updatePersonByUserName(@PathVariable("username") String userName,
                                       @Valid @RequestBody EventToReceive person)
    {
        personService.updatePersonByUserName(userName, person);
    }
}
