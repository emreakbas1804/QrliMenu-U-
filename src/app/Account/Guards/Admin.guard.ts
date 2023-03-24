import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable, tap } from "rxjs";
import { UserModel } from "../../Models/UserModel";
import { AccountServices } from "../../Services/account.services";

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {


  constructor(private accountService: AccountServices, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {


    return this.accountService.user.pipe(

      map(user => {
       return !!user
      }),
      tap(isCanLogin => {
        if (!isCanLogin) {
          this.router.navigate(["/giris-yap"]);
        }
      })
    )


  }


}
