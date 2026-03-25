import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';


@Component({
  selector: 'app-signup',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
user = {
    name: '',
    email: '',
    password: '',
    
  };
    confirmPassword: string = '';
  router: any;
constructor(private auth: Auth) {}
register(form:any) {
    if (this.user.password !== this.confirmPassword) {
    alert('Password not match');
    return;
  }
    this.auth.register(this.user).subscribe({
      next: (res: any) => {
       alert(res.message);
       form.reset();
        // this.router.navigate(['login']);
      },
      error: (err) => {
       alert(err.error.message);
      }

    });
  }

}
