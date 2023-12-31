import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sv-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vsvdev';
}
