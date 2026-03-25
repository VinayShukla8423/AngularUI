import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  api = 'https://localhost:7030/api/auth/login';
  RegApi='https://localhost:7030/api/auth/register';
  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post<any>(this.api, data);
  }

  saveToken(token: any) {
    
    localStorage.setItem('data', JSON.stringify(token));
  }
  register(user: any) {
    debugger;
  return this.http.post<any>(this.RegApi, user);
}

  getToken() {
     return JSON.parse(localStorage.getItem('data') || '{}');
    // return localStorage.getItem('token');
  }
  logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}
}
