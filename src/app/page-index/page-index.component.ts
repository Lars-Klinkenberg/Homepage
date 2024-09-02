import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'page-index',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-index.component.html',
  styleUrl: './page-index.component.scss',
})
export class PageIndexComponent {
  @Input() pageCount: number = 0;
  @Input() currentPage: number = 0;
  @Output() indexClicked = new EventEmitter<number>();
  
  getArray(length: number): number[] {
    return Array.from({ length }, (_, i) => i );
  }

  getAdditionalClasses(pageIndex: number): string {
    if (pageIndex == this.currentPage) return 'active';

    return '';
  }

  indexClick(index: number){
    this.indexClicked.emit(index)
  }
}
