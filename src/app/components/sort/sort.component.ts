import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/data';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent {
  products!: Product[];

  constructor(private productService: DataService) {}

  ngOnInit() {
      this.productService.getProductsMini().then((data) => {
          this.products = data;
      });
  }
}
