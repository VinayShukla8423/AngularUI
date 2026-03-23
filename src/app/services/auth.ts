import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  api = 'https://localhost:7269/api/auth/login';
  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post<any>(this.api, data);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
