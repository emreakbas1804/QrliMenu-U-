import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, map, Observable, pipe, retry, tap, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { RegisterModel } from "src/app/Models/RegisterModel"
import { UserModel } from "../Models/UserModel";
import { AccountResponse } from "../Models/AccountResponse";

@Injectable({
  providedIn: 'root'
})
export class AccountServices {

  private readonly apiUrl = environment.apiUrl;
  user = new BehaviorSubject<UserModel | null>(null);


  constructor(private http: HttpClient) { }

  register(register: RegisterModel) {
    return this.http.post<RegisterModel>(this.apiUrl + "account/register", {
      Email: register.email,
      Password: register.password,
      CompanyName: register.companyName,
      CompanyAddress: register.companyAddress,
      PhoneNumber: register.phoneNumber,
      Kvkk: register.kvkk
    }).pipe(
      catchError(this.handleError)
    );
  }

  login(email: string, password: string) {
    return this.http.post<AccountResponse>(this.apiUrl + "account/login", {
      Email: email,
      Password: password
    }).pipe(
      tap(response => {
        this.handleUser(response.jwtCode, response.userRole)
      }),

      catchError(this.handleError)
    );
  }

  forgotPassword(email: string) {
    return this.http.post(this.apiUrl + "account/forgot-password?email=" + email, null).pipe(
      catchError(this.handleError)
    );
  }

  resetPassword(token: string, userId: string, password: string) {
    return this.http.post(this.apiUrl + "account/reset-password", {
      Token: token,
      UserId: userId,
      Password: password
    }).pipe(
      catchError(this.handleError)
    )
  }

  handleError(err: HttpErrorResponse) {
    let message = "Hata oluştu";
    if (err.error.header) {
      switch (err.error.header) {
        case "EMAIL_USING":
          message = "Bu mail adresi zaten kullanılıyor";
          break
        case "USER_NOT_FOUND":
          message = "Mail adresine uygun kullanıcı bulunamadı.";
          break
        case "WRONG_PASSWORD":
          message = "Geçersiz parola. Tekrar deneyiniz.";
          break
        case "EMAIL_NOT_CONFIRM":
          message = "Kullanıcı mail adresine gelen linke tıklayarak hesabını onaylamalı."
          break
        case "INVALID_TOKEN":
          message = "Geçersiz token bilgisi";
          break
      }
    }

    return throwError(() => message);
  }

  private handleUser(jwtCode: string, role:string) {
    const user = new UserModel(jwtCode,role);
    this.user.next(user);
    localStorage.setItem("user", JSON.stringify(this.user.value));
  }

  authoLogin() {
    if (localStorage.getItem("user") == null) {
      return
    }
    var authoUser = JSON.parse(localStorage.getItem("user") || '{}' );
    this.user.next(authoUser)
  }

  logOut() {
    this.user.next(null);
    localStorage.removeItem("user");
  }



}
