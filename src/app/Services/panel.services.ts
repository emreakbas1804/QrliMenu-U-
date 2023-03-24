import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, Subject, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { Category } from "../Models/Category";
import { Product } from "../Models/Product";
import { UserModel } from "../Models/UserModel";
import { AccountServices } from "./account.services";


@Injectable({ providedIn: "root" })
export class PanelServices {


  constructor(private http: HttpClient, private accountService: AccountServices) { }

  private readonly apiUrl = environment.apiUrl;
  private user = this.accountService.user.value;


  private headers_object = new HttpHeaders({
    // "Content-Type": "application/json",
    "Authorization": "Bearer " + this.user?.jwtCode
  });

  httpOptions = {
    headers: this.headers_object
  }



  userTotalCategories() {
    return this.http.get(this.apiUrl + "panel/get-categories-count", this.httpOptions);
  }
  userTotalProducts() {
    return this.http.get(this.apiUrl + "panel/get-products-count", this.httpOptions);
  }

  addCategory(formData: FormData) {
    return this.http.post(this.apiUrl + "panel/add-category",formData, this.httpOptions).pipe(
      catchError(this.handleError)
    )
  }

  addProduct(formData: FormData) {
    return this.http.post(this.apiUrl + "panel/add-product", formData, this.httpOptions);
  }

  getCategories() {
    return this.http.get<Category[]>(this.apiUrl + "panel/get-categories", this.httpOptions)

  }

  getProducts() {
    return this.http.get<Product[]>(this.apiUrl + "panel/get-products", this.httpOptions)
  }

  getCategory(categoryId: number) {
    return this.http.get<Category>(this.apiUrl + "panel/get-category?categoryId="+ categoryId,this.httpOptions);
  }
  getProduct(productId: number) {
    return this.http.get<Product>(this.apiUrl + "panel/get-product?productId="+ productId,this.httpOptions);
  }

  editCategory(formData: FormData) {
    return this.http.put(this.apiUrl + "panel/update-category", formData, this.httpOptions);
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
        case "CATEGORY_NOT_FOUND":
          message = "Böyle bir kategori bulunamadı"
          break
      }
    }

    return throwError(() => message);
  }





}
