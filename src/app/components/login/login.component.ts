// src/app/components/login/login.component.ts

import { Component } from '@angular/core';
import { LoginService } from '../../login-service.service'; // Adjust the path based on your file structure

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService) {}

  login(username: string, password: string) {
    this.loginService.login(username, password).subscribe(
      (response) => {
        // Handle successful login response
        console.log('Login successful:', response);
        // Additional logic as needed
      },
      (error) => {
        // Handle login error response
        console.error('Login failed:', error);
        // Additional error handling logic
      }
    );
  }
}
