import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/_core/service/Auth.service';

@Component({
  selector: 'app-_nav',
  templateUrl: './_nav.component.html',
  styleUrls: ['./_nav.component.scss'],

})
export class _navComponent implements OnInit {

  model: any = {};

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  Login() {
    this.authService.Login(this.model).subscribe(lg => {
      console.log("Logged in successfully")
    }, error => {
      console.log('Fail to Login')
    })
  }

}
