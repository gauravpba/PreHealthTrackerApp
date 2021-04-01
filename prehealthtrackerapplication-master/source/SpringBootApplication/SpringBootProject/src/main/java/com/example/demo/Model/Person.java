/*
  Person.java

  Class containing the attributes required for a user to be added in the database
 */

package com.example.demo.Model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.Date;
import java.util.UUID;

public class Person {

    // Random ID for each person
    private final UUID id;

    //user name given by the user while registering
    @NotBlank
    private final String userName;
    //password given by the user while registering
    @NotBlank
    private final String password;

    //List of events that the user adds
    private final ArrayList<Object> events;

    //Constructor
    public Person(@JsonProperty("id") UUID id,
                  @JsonProperty("username")String userName,
                  @JsonProperty("password")String password,
                  @JsonProperty("events") ArrayList<Object> events)

    {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.events = events;

    }

    //Getter methods
    public UUID getID()
    {
        return id;
    }
    public String getUserName(){return userName;}
    public String getPassword(){return password;}
    public ArrayList<Object> getEvents(){return events;}


}
