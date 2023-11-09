import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const url: string = state.url;

    console.log(localStorage.getItem('session'));

    let isLogin = this.checkLogin(url);
    let localStorageSesion = localStorage.getItem('session');
    let dataFromRoute = route.data['session'];
    // Check Admin session first
    if (localStorageSesion && dataFromRoute) {
      return this.checkIsAdmin(localStorageSesion, dataFromRoute);
    }
    // Check user session
    if (!isLogin) {
      return false;
    }

    return true;
  }
  checkIsAdmin(ls: any, s: any) {
    if (ls == s && ls == '0') {
      console.log('$$$$$');

      return true;
    }
    this.router.navigate(['client']);
    return false;
  }
  checkLogin(url: string): boolean | UrlTree {
    if (this.auth.IsLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['login']);

      return false;
    }
  }
}
