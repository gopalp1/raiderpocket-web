import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private cookieService: CookieService) {}

  /**
   * Save login response object in cookies
   * @param key The cookie name
   * @param data The object to store
   * @param expirationDays The number of days before the cookie expires
   */
  setCookie(key: string, data: object, expirationDays: number): void {
    const jsonData = JSON.stringify(data);
    const expires = new Date();
    expires.setDate(expires.getDate() + expirationDays);

    this.cookieService.set(key, jsonData, expires, '/', '', true, 'Strict');
  }

  /**
   * Get login response object from cookies
   * @param key The cookie name
   * @returns The parsed object or null if not found
   */
  getCookie(key: string): object | null {
    const jsonData = this.cookieService.get(key);
    return jsonData ? JSON.parse(jsonData) : null;
  }

  /**
   * Delete a cookie
   * @param key The cookie name
   */
  deleteCookie(key: string): void {
    this.cookieService.delete(key, '/');
  }
}
