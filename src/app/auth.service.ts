import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  loginUser(username, password) {

    const headers = this.createAuthenticationHeader(username, password);
    console.log(headers);
    return this.http.post('http://localhost:8080/login', {}, {headers})
      .subscribe(data => {
        console.log(data);
      });
  }

  private createAuthenticationHeader(username: string, password: string) {
    return new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password)
    });
  }
}
