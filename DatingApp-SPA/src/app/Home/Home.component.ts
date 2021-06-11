import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {
  apiUrl = environment.apiUrl;
  registerModel = false;
  values: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  registerToggle() {
    this.registerModel = true;
  }

  cancleRegisterModel(registerModel: boolean) {
    console.log(registerModel)
    this.registerModel = registerModel;
  }

}
