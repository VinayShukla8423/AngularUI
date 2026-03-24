import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  api = 'https://localhost:7030/api/auth/login';
  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post<any>(this.api, data);
  }

  saveToken(token: string) {
    debugger
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }
  logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}
}
