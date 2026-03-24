import { Router } from '@angular/router';
import { Component,OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth } from '../../services/auth';
@Component({
  selector: 'app-dashboard',
  standalone: true,
   imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit{
 user: any;
  products: any[] = [];
 constructor(private auth: Auth,private router:Router) {}
  ngOnInit() {
    // user data lo
    const data = localStorage.getItem('user');
    if (data) {
      this.user = JSON.parse(data);
    }

    // dummy products (backend se bhi la sakte ho)
    this.products = [
      { name: 'Laptop', price: 50000 },
      { name: 'Mobile', price: 20000 },
      { name: 'Headphones', price: 2000 }
    ];
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/']); // back to login
  }
}
