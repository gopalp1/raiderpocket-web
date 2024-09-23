import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'raiderpocket-web';
  isMenuOpen = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const navElement = this.el.nativeElement.querySelector('.header-area .nav');
    const menuTrigger = document.querySelector('.menu-trigger');
    if (this.isMenuOpen) {
      menuTrigger?.classList.add('active');
      this.renderer.addClass(navElement, 'show-menu');
      this.renderer.setStyle(navElement, 'display', 'block');
    } else {
      menuTrigger?.classList.remove('active');
      this.renderer.removeClass(navElement, 'show-menu');
      this.renderer.setStyle(navElement, 'display', 'none');
    }
  }
}
