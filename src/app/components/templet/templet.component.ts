import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/data';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-templet',
  templateUrl: './templet.component.html',
  styleUrls: ['./templet.component.css']
})
export class TempletComponent {
  products!: Product[];

  constructor(private productService: DataService) {}

  ngOnInit() {
      this.productService.getProductsMini().then((data) => {
          this.products = data;
      });
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
