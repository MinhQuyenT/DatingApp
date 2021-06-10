import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss']
})
export class ValueComponent implements OnInit {
  values: any;
  apiUrl = environment.apiUrl;
  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.getvalue()
  }

  getvalue() {
    this.http.get(this.apiUrl + "value").subscribe(res => {
      this.values = res;
      console.log(res)
    }, error => {
      console.log(error)
    })
  }

}
