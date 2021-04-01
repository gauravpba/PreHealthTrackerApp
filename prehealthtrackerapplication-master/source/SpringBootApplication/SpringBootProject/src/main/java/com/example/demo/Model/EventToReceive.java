/*

  EventToReceive.java

  A class containing all the attributes required for an event.

 */


package com.example.demo.Model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.Date;
import java.util.UUID;

public class EventToReceive {

  //Attributes for a single event
    private String category;
    private String type;
    private String startDate;
    private String endDate;
    private int averageHoursWorked;
    public int totalHoursWorked;
    private String organization;
    private String contactName;
    private String contactTitle;
    private String contactInfo;
    private String activitySummary;
    private String skillsLearned;

    //Constructor
  public EventToReceive(
                  @JsonProperty("activityCategory") String category,
                  @JsonProperty("activityType") String type,
                  @JsonProperty("startDate") String startDate,
                  @JsonProperty("endDate") String endDate,
                  @JsonProperty("averageHoursWorked") int averageHoursWorked,
                  @JsonProperty("totalHoursWorked") int totalHoursWorked,
                  @JsonProperty("organization") String organization,
                  @JsonProperty("contactName") String contactName,
                  @JsonProperty("contactTitle") String contactTitle,
                  @JsonProperty("contactInfo") String contactInfo,
                  @JsonProperty("activitySummary") String activitySummary,
                  @JsonProperty("skillsLearned") String skillsLearned)
    {

        this.category = category;
        this.type = type;
        this.startDate = startDate;
        this.endDate = endDate;
        this.averageHoursWorked = averageHoursWorked;
        this.totalHoursWorked = totalHoursWorked;
        this.organization = organization;
        this.contactName = contactName;
        this.contactTitle = contactTitle;
        this.contactInfo = contactInfo;
        this.activitySummary = activitySummary;
        this.skillsLearned = skillsLearned;

    }

    //Getter Methods
    public String getCategory(){return category;}
    public String getType(){return type;}
    public String getStartDate(){return startDate;}
    public String getEndDate(){return endDate;}
    public int getAverageHoursWorked(){return averageHoursWorked;}
    public int getTotalHoursWorked(){return totalHoursWorked;}
    public String getOrganization(){return organization;}
    public String getContactName(){return contactName;}
    public String getContactTitle(){return contactTitle;}
    public String getContactInfo(){return contactInfo;}
    public String getActivitySummary(){return activitySummary;}
    public String getSkillsLearned(){return skillsLearned;}

    //Setter Methods
    public void setCategory(String newCategory){ category = newCategory;}
    public void setType(String newType){type = newType;}
    public void setStartDate(String newDate){startDate = newDate;}
    public void setEndDate(String newDate){endDate = newDate;}
    public void setAverageHoursWorked(int newHours){averageHoursWorked = newHours;}
    public void setTotalHoursWorked(int newHours){totalHoursWorked = newHours;}
    public void setOrganization(String newOrg){organization = newOrg;}
    public void setContactName(String newName){contactName = newName;}
    public void setContactTitle(String newTitle){contactTitle = newTitle;}
    public void setContactInfo(String newInfo){contactInfo = newInfo;}
    public void setActivitySummary(String newSummary){activitySummary = newSummary;}
    public void setSkillsLearned(String newSkills){skillsLearned = newSkills;}


}
