import { Component, EventEmitter, Output } from '@angular/core';
import { ThemingService } from '../theming.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  @Output() ctaClicked = new EventEmitter<number>();
  
  constructor(public themingService: ThemingService) {}

  ctaClick() {
    this.ctaClicked.emit(1);
  }
}
