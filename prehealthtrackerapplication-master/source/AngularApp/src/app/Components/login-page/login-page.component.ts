import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {PrehealthdbService} from '../../services/prehealthdb.service';
import { Router} from "@angular/router";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
  constructor(private db: PrehealthdbService, private router: Router) { }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  // matcher = new MyErrorStateMatcher();
  hide = true;

  public usrname: string;
  public passwrd: string;
  private isCorrectLogin;


  ngOnInit(): void {

  }

  onSubmit(){
    console.log(this.usrname);
    console.log(this.passwrd);

    this.db.login(this.usrname, this.passwrd).subscribe(posts => {
      this.isCorrectLogin = posts;
    });
    if(this.isCorrectLogin === true) {
      this.router.navigate(['/about']);
    }
    else
    {
      console.log("Wrong username/password");
    }
  }

  getUserName()
  {
    return this.usrname;
  }

}
