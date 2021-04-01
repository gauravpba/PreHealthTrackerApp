import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {PrehealthdbService} from '../../services/prehealthdb.service';
import { Router} from "@angular/router";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-create-account-page',
  templateUrl: './create-account-page.component.html',
  styleUrls: ['./create-account-page.component.css']
})

export class CreateAccountPageComponent implements OnInit {
  constructor(private db: PrehealthdbService, private router: Router) { }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new MyErrorStateMatcher();
  hide = true;

  public usr: string;
  public pass: string;

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('Username: ' + this.usr);
    console.log('Password: ' + this.pass);
    this.db.register(this.usr, this.pass); //sends username and password to the db using the service
    this.router.navigate(['/login-page']); //redirects to login page
  }
}
