import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountServices } from 'src/app/Services/account.services';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  info: string = "";
  infoColor: string = "";
  constructor(private accountService: AccountServices, private route : Router) { }

  ngOnInit(): void {
  }

  resetPasswordForm(form: NgForm) {
    if (form.invalid) {
      this.info = "Form doğru bir şekilde doldurulmalıdır.";
      this.infoColor = "danger";
      return;
    }
    // Get token from url. and decoded. But if is there space char replace all it +
    var token = decodeURIComponent(this.route.url.split("?")[1].split("&")[0].split("=")[1]).replace(/\ /gi, "+");
    var userId = this.route.url.split("?")[1].split("&")[1].split("=")[1];
    this.accountService.resetPassword(token, userId, form.value.password).subscribe({
      error: err => {
        this.info = err;
        this.infoColor = "danger";
        return
      },
      next: response => {
        this.info = "Şifre güncellendi";
        this.infoColor = "success"
      }
    })


  }

}
