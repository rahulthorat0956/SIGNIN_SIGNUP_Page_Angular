
import { Component } from '@angular/core';
import { RegistrationService} from '../../register-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private RegisterComponent: RegistrationService) { }

  onSubmit(userData: any) {
    // Call the register method from the service
    this.RegisterComponent.register(userData).subscribe(
      (response) => {
        // Handle the successful response from the backend
        console.log('Registration successful!', response);
        // Optionally, navigate to another page or perform other actions upon successful registration
      },
      (error) => {
        // Handle error responses from the backend
        console.error('Registration failed:', error);
      }
    );
  }
}