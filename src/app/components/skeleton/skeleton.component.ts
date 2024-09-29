import { Component } from '@angular/core';
interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.css']
})
export class SkeletonComponent {
  first: number = 0;

  rows: number = 10;

  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
  }
}
