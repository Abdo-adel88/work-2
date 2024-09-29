import { Component, OnInit } from '@angular/core';
import { DataServices } from 'src/app/core/service/data.service';
import { Product } from 'src/app/core/interfaces/data'; // تأكد أن لديك تعريف Product

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: any
  cols: any[] = [];
  categories: any[] = [];  // خيارات الفلاتر لفئة المنتج
  inventoryStatuses: any[] = [];  // خيارات الفلاتر لحالة المخزون

  constructor(private dataService: DataServices) {}

  ngOnInit() {
    this.products = this.dataService.getData(); // الحصول على البيانات من الخدمة

    this.cols = [
      { field: 'name', header: 'اسم المنتج' },
      { field: 'code', header: 'كود المنتج' },
      { field: 'price', header: 'السعر' },
      { field: 'category', header: 'الفئة' },
      { field: 'quantity', header: 'الكمية' },
      { field: 'inventoryStatus', header: 'حالة المخزون' },
      { field: 'rating', header: 'التقييم' },
    ];

    // إعداد خيارات الفلاتر
  

  
  }

  getSeverity(status: string): string {
    switch (status) {
      case 'unqualified':
        return 'danger';
      case 'qualified':
        return 'success';
      case 'new':
        return 'info';
      case 'negotiation':
        return 'warning';
      case 'renewal':
        return '';
    }
    return '';
  }
}
