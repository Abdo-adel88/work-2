import { Component, OnInit } from '@angular/core';
import { Column } from 'src/app/interfaces/column';
import { Product } from 'src/app/interfaces/data';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-responsive',
  templateUrl: './responsive.component.html',
  styleUrls: ['./responsive.component.css']
})
export class ResponsiveComponent implements OnInit{
  products!: Product[];

  cols!: Column[];

  constructor(private productService: DataService) {}

  ngOnInit() {
      this.productService.getProductsMini().then((data) => {
          this.products = data;
          console.log(data);
          
      });

      this.cols = [
          { field: 'code', header: 'Code' },
          { field: 'name', header: 'Name' },
          { field: 'category', header: 'Category' },
          { field: 'quantity', header: 'Quantity' },
          { field: 'inventoryStatus', header: 'Status' },
          { field: 'rating', header: 'Rating' }
      ];
  }

  getSeverity(status: string):string {
      switch (status) {
          case 'INSTOCK':
              return 'success';
          case 'LOWSTOCK':
              return 'warning';
          case 'OUTOFSTOCK':
              return 'danger';
      }
      return '';
  }
}
