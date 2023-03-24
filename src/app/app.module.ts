import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountModule } from './Account/Account.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './Home/Home.module';
import { SharedModule } from './Shared/Shared.modules';
import { HttpClientModule } from '@angular/common/http';
import { PanelModule } from './Panel/Panel.module';
import { CKEditor4, CKEditorModule } from 'ckeditor4-angular';





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    CKEditorModule,
    HomeModule,
    AccountModule,
    PanelModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
