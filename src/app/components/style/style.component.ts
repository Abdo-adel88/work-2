import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/data';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent {
  products!: Product[];

  constructor(private productService: DataService) {}

  ngOnInit() {
      this.productService.getProductsMini().then((data) => {
          this.products = data;
      });
  }
}
