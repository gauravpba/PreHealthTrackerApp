import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RequestModel } from '../../models/request-model';
import { HttpClientModule } from '@angular/common/http';
import { PrehealthdbService} from '../../services/prehealthdb.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-enter-info-page',
  templateUrl: './enter-info-page.component.html',
  styleUrls: ['./enter-info-page.component.css']
})
export class EnterInfoPageComponent implements OnInit{

  constructor(private prehealthdbService: PrehealthdbService, private router: Router) {
  }

  public department: string;

  public name: string;
  public title: string;
  public contactInfo: string;
  public activitySummary: string;
  public skillsLearned: string;
  public startDate: string;
  public endDate: string;

  public activity: string;
  public activityOther = 'Other';

  public type: string;
  public typeOther = 'Other';

  public avgHours: string;
  public totalHours: string;

  // creates request model that gets the info from the text boxes and puts them into the request model
  userModel = new RequestModel(
    'Activity category',
    'Activity type',
    'Start date',
    'End date',
    0,
    0,
    'Organization',
    'Name',
    'Title',
    'Contact Info',
    'Activity summary',
    'Skills learned'
  );


  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.userModel);
    this.prehealthdbService.postPerson(this.userModel); //sends the requestmodel to the db using the service
    this.router.navigate(['/about']); // redirects to the about page using a router
  }
}





