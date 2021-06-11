import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/_core/service/Auth.service';
import { CustomNgSnotifyService } from 'src/_core/service/custom-ng-snotify.service';

@Component({
  selector: 'app-_nav',
  templateUrl: './_nav.component.html',
  styleUrls: ['./_nav.component.scss'],

})
export class _navComponent implements OnInit {

  model: any = {};

  constructor(
    private authService: AuthService,
    private customNgSnotifyService: CustomNgSnotifyService,
  ) { }

  ngOnInit() {
  }

  Login() {
    this.authService.Login(this.model).subscribe(lg => {
      console.log("Logged in successfully")
      if (lg === null) {
        this.customNgSnotifyService.warning("Login fail", "Account does not exist");
      }
      this.customNgSnotifyService.success("login", "login succes");
      console.log(this.model)
    }, error => {
      console.log(error);
    })
  }

  LoggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  Logout() {
    localStorage.removeItem('token');
    this.customNgSnotifyService.warning("Logout", "Logout succes");
    console.log('logged out!')

  }

}
