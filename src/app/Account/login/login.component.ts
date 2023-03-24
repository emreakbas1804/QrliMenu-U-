import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountResponse } from 'src/app/Models/AccountResponse';
import { UserModel } from 'src/app/Models/UserModel';
import { AccountServices } from 'src/app/Services/account.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  info: string = "";
  infoColor = "success";

  constructor(private accountServices: AccountServices, private route: Router) { }

  ngOnInit(): void {
  }

  LoginForm(form: NgForm) {
    if (form.invalid) {
      this.info = "Form eksiksiz ve doğru bir şekilde doldurulmalı.";
      this.infoColor = "danger"
      return;
    }

    this.accountServices.login(form.value.email, form.value.password).subscribe({
      error: err => {
        this.info = err
        this.infoColor = "danger"
        return
      },
      next: (response) => {
        this.route.navigate(["/panel"]);
      }
    });


  }



}
