import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Product } from 'src/app/interfaces/data';
import { DataService } from 'src/app/service/data.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  products!: Product[];

  cols!: any[];
  constructor(private productService: DataService) {}

  ngOnInit() {
    this.productService.getProductsMini().then((data) => {
      this.products = data;
  });

    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' }
    ];
  }
}