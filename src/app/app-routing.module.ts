import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Account/login/login.component';
import { RegisterComponent } from './Account/register/register.component';
import { AdminGuard } from './Account/Guards/Admin.guard';
import { IndexComponent } from './Home/index/index.component';
import { PanelIndexComponent } from './Panel/panel-index/panel-index.component';
import { NotFoundComponent } from './Shared/not-found/not-found.component';
import { ForgotPasswordComponent } from './Account/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Account/reset-password/reset-password.component';
import { CategoryCreateComponent } from './Panel/category-create/category-create.component';
import { ProductCreateComponent } from './Panel/product-create/product-create.component';
import { CategoryListComponent } from './Panel/category-list/category-list.component';
import { ProductListComponent } from './Panel/product-list/product-list.component';
import { EditCategoryComponent } from './Panel/edit-category/edit-category.component';

const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "kayit-ol", component: RegisterComponent },
  { path: "giris-yap", component: LoginComponent },
  { path: "parolami-unuttum", component: ForgotPasswordComponent },
  { path: "sifremi-sifirla", component: ResetPasswordComponent },
  { path: "panel", component: PanelIndexComponent, canActivate: [AdminGuard] },
  { path: "kategori-ekle", component: CategoryCreateComponent, canActivate: [AdminGuard] },
  { path: "kategoriler", component: CategoryListComponent, canActivate: [AdminGuard] },
  { path: "urun-ekle", component: ProductCreateComponent, canActivate: [AdminGuard] },
  { path: "urunler", component: ProductListComponent, canActivate: [AdminGuard] },
  { path: "kategoriler/:categoryId", component: EditCategoryComponent, canActivate: [AdminGuard] },
  { path: "**", component: NotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
