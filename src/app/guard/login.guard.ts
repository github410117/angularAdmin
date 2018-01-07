import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class loginGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(){
    let token = localStorage.getItem('token')
    console.log(token);
    if (token) {
      return true;
    }
    this.router.navigate(['login']);
    // this.router.navigateByUrl('/login');
    return false;
  }

}
