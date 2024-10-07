import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent {
  isMenuOpen = false;

  constructor(private renderer: Renderer2, private el: ElementRef,private router: Router) {}

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



  goToAdmin() {
    this.router.navigate(['admin']);
  }
}
