import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  @Output() ctaClicked = new EventEmitter<number>();

  ctaClick() {
    this.ctaClicked.emit(1);
  }
}
