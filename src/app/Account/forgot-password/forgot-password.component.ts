import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { catchError } from 'rxjs';
import { AccountServices } from 'src/app/Services/account.services';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  info: string = '';
  infoColor: string = '';
  constructor(private accountService: AccountServices) { }

  ngOnInit(): void {
  }

  forgotPasswordForm(form: NgForm) {
    if (form.invalid) {
      this.info = "Form eksiksiz ve doğru bir şekilde doldurulmalı.";
      this.infoColor = "danger";
      return;
    }

    this.accountService.forgotPassword(form.value.email).subscribe({
      error: err => {
        this.info = err
        this.infoColor = "danger"
        return
      },
      next: response => {
        this.info = "Mail hesabınıza gelen link ile parolanızı sıfırlayabilirsiniz.";
        this.infoColor = "success";
        form.reset();
        return
      }
    });

  }

}
