import { Component, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { ThemingService } from '../theming.service';

@Component({
    selector: 'app-home',
    imports: [],
    templateUrl: './home.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Output() ctaClicked = new EventEmitter<number>();
  
  constructor(public themingService: ThemingService) {}

  ctaClick() {
    this.ctaClicked.emit(1);
  }
}
