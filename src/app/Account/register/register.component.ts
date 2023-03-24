import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { pipe } from 'rxjs';
import { RegisterModel } from 'src/app/Models/RegisterModel';
import { AccountServices } from 'src/app/Services/account.services';



@Component({
  selector: 'apsp-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AccountServices]
})
export class RegisterComponent implements OnInit {
  formModel: RegisterModel = {
    email: '',
    companyName: '',
    companyAddress: '',
    phoneNumber: '',
    password :'',
    kvkk: true,
  };
  info: string = "";
  infoColor: string = "danger"
  constructor(private accountServices:AccountServices ) { }

  ngOnInit(): void {
  }
  kvkkAlert() {

  }
  register(form: NgForm) {
    if (form.invalid) {
      this.info = "Form eksiksiz ve doğru doldurulmalı"
      return;
    }
    const newUser: RegisterModel = {
      email: this.formModel.email,
      companyName: this.formModel.companyName,
      companyAddress: this.formModel.companyAddress,
      phoneNumber: this.formModel.phoneNumber,
      password: this.formModel.password,
      kvkk: this.formModel.kvkk
    };

    this.accountServices.register(newUser).subscribe({
      error: err => {
        this.info = err
        this.infoColor = "danger"
        return
      },
      next: response => {
        this.info = "Kayıt başarılı. Mail hesabınıza gelen link ile hesabınızı onaylamanız gerekmektedir."
        this.infoColor = "success"
      }
    });


  }



}
