import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountServices } from 'src/app/Services/account.services';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  constructor(private accountService: AccountServices, private route: Router) { }

  ngOnInit(): void {
    this.accountService.user.subscribe(user => { this.isLogin = !!user });
  }

  logOut() {
    this.accountService.logOut();
    this.route.navigate(["/"]);

  }

}
