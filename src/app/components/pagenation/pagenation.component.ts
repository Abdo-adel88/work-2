import { Component } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-pagenation',
  templateUrl: './pagenation.component.html',
  styleUrls: ['./pagenation.component.css']
})
export class PagenationComponent {
  customers!: Customer[];


  constructor(private customerService: CustomerService) {}

  ngOnInit() {
      this.customerService.getCustomersLarge().then((customers) => (this.customers = customers));
  }
}
