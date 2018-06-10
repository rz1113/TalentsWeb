import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Router } from "@angular/router";
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private httpClient: HttpClient) { }

  register(signupData): any {
    return this.httpClient.post('/api/v1/register', signupData);
  }

  login(loginData): any {
    return this.httpClient.post('/api/v1/login', loginData);
  }

  authenticateUser(token, email): void {
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
  }

  isUserAuthenticated(): boolean {
    return localStorage.getItem('token') !== null;
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
  }

  getEmail(): any {
    return localStorage.getItem('email');
  }

  getToken(): any {
    return localStorage.getItem('token');
  }


}