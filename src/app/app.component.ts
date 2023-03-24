import { Component, OnInit } from '@angular/core';
import { AccountServices } from './Services/account.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private accountService: AccountServices) {}
  ngOnInit(): void {

    this.accountService.authoLogin();
  }





}
