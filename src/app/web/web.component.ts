import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../core/services/user.service';
import { WEBSITEDATA } from '../core/constants.ts/websiteData';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss'],
})
export class WebComponent implements OnInit {
  isMenuOpen = false;
  isLoggedIn = false;
  showModal = false;
  webSiteData: any = WEBSITEDATA;

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
  goToAdmin() {
    if (this.isLoggedIn) {
      this.router.navigate(['admin']);
    } else {
      this.router.navigate(['login']);
    }
  }

  toggleMoreInfo(service: any): void {
    service.showMore = !service.showMore;
  }

  privacyPolicy() {
    this.router.navigate(['/privay_policy']);
  }
}
