import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-product',
   standalone: true,   // 👈 MUST
  imports: [CommonModule,FormsModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
// export class Product {

// }
export class Product implements OnInit {

  products: any[] = [];
  newProduct = { name: '', price: 0 };

  constructor(private service: ProductService) {} // 👈 inject here

  ngOnInit() {
    this.load();
  }

  // ✅ Edit variables
editId: number | null = null;
editProduct: any = {};

// ✅ Load data
load() {
  this.service.getProducts().subscribe((res: any) => {
    this.products = res;
  });
}

// ✅ Add
add() {
  this.service.addProduct(this.newProduct).subscribe(() => {
    this.load();
    this.newProduct = { name: '', price: 0 };
  });
}

// ✅ Edit click
edit(p: any) {
  this.editId = p.id;
  this.editProduct = { ...p }; // clone
}

// ✅ Update
update() {
  this.service.updateProduct(this.editProduct).subscribe(() => {
    this.load();
    this.cancel();
  });
}

// ✅ Cancel edit
cancel() {
  this.editId = null;
}

// ✅ Delete
delete(id: number) {
  this.service.deleteProduct(id).subscribe(() => {
    this.load();
  });
}
}