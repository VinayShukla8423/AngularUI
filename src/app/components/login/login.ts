import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
   user = { email: '', password: '' };
constructor(private auth: Auth) {}
 login() {
    this.auth.login(this.user).subscribe({
      next: (res) => {
        this.auth.saveToken(res.token);
        alert('Login Success');
      },
      error: () => {
        alert('Invalid Credentials');
      }
    });
  }
}
