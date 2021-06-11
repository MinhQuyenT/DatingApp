import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }
  Login(model: any) {
    return this.http.post(this.apiUrl + "Auth/Login", model).pipe(
      map((res: any) => {
        const user = res;
        console.log(user)
        if (user) {
          localStorage.setItem("token", user.token);
        }
      })
    );
  }
  Register(model: any) {
    return this.http.post(this.apiUrl + "Auth/Register", model)
  }
}
