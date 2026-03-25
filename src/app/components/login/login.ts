import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
   user = { email: '', password: '' };
 
constructor(private auth: Auth,private router: Router) {}
 login() {
    this.auth.login(this.user).subscribe({
      next: (res) => {
        this.auth.saveToken(res.token);
        this.auth.saveToken(res)
        // this.auth.saveUser(res);
        alert('Login Success');
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        alert('Invalid Credentials');
      }
    });
  }
}
