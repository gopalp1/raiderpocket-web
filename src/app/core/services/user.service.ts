import { Injectable } from '@angular/core';
import { LocalStorageService } from './localstorage.service';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  token: any;
  baseUrl: any;
  userEvent = new Subject<any>();
  userEventEmitted$ = this.userEvent.asObservable();
  constructor(private localStorage: LocalStorageService) {}

  async getUserValue() {
    return this.localStorage
      .getLocalData('riderPocketWebAdminLogin')
      .then((data: any) => {
        this.token = data;
        return data;
      })
      .catch((error) => {});
  }
  async setUserValue(data: any) {
    return this.localStorage
      .setLocalData('riderPocketWebAdminLogin', data)
      .then((data: any) => {
        this.token = data;
        return data;
      })
      .catch((error) => {});
  }

  async deleteUser() {
    return this.localStorage
      .deleteAll()
      .then((data: any) => {
        this.token = data;
        return data;
      })
      .catch((error) => {});
  }

  // validateToken(token: any) {
  //   const tokenDecoded: any = '';
  //   //  jwt_decode(token);
  //   const tokenExpiryTime = moment(tokenDecoded.exp * 1000);
  //   const currentTime = moment(Date.now());
  //   return currentTime.isBefore(tokenExpiryTime);
  // }
}
