import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMenuOpen = false;
  isLoggedIn = false;
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private router: Router,
    private storageService: UserService
  ) {}
  async ngOnInit() {
    const data: any = await this.storageService.getUserValue();
    console.log(data, 'data');
    this.isLoggedIn = data ? true : false;
  }
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
    if (this.isLoggedIn) {
      this.router.navigate(['admin']);
    } else {
      this.router.navigate(['login']);
    }
  }

  privacyPolicy() {
    this.router.navigate(['/privay_policy']);
  }
  contactus() {
    this.router.navigate(['/contactus']);
  }
}
