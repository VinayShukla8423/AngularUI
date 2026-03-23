import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './components/product/product'; 
import { Login} from './components/login/login';
import { Header} from '../app/components/header/header';
import { Footer } from '../app/components/footer/footer';
@Component({
  selector: 'app-root',
  standalone: true,                // 👈 important
  imports: [RouterOutlet,Header,Footer],
  // imports: [Product], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('clean-arch-ui');
  
}
