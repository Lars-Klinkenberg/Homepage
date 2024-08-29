import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

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

  getArray(length: number): number[] {
    return Array.from({ length }, (_, i) => i + 1);
  }

  getAdditionalClasses(pageIndex: number): string {
    if (pageIndex == this.currentPage) return 'active';

    return '';
  }
}
