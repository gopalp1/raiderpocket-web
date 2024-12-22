import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from './core/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'raiderpocket-web';
  isLoading = false;

  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading$.subscribe((state) => {
      this.isLoading = state;
    });
  }
}
