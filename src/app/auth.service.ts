import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  loginUser(username, password) {
    return this.http.post('/api/login', {}, {headers: this.createAuthenticationHeader(username, password)})
      .subscribe(data => {
        console.log(data);
      });
  }

  private createAuthenticationHeader(username: string, password: string) {
    return new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password),
      username,
      password
    });
  }
}
