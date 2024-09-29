import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/data';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.css']
})
export class RadiobuttonComponent {
  products!: Product[];

    selectedProduct!: Product;

    constructor(private productService: DataService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
    } 
}
