import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoading: boolean;
  constructor() {
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.isLoading = false;
  }
}
