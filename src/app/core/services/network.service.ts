import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  private networkStatus$: BehaviorSubject<boolean>;

  constructor() {
    // Initialize the network status with the browser's current online status
    this.networkStatus$ = new BehaviorSubject<boolean>(navigator.onLine);
    this.setupNetworkListeners();
  }

  /**
   * Sets up listeners for online and offline events.
   */
  private setupNetworkListeners(): void {
    window.addEventListener('online', () => {
      this.updateNetworkStatus(true);
    });

    window.addEventListener('offline', () => {
      this.updateNetworkStatus(false);
    });
  }

  /**
   * Updates the network status and notifies subscribers.
   * @param isOnline - The current network status.
   */
  private updateNetworkStatus(isOnline: boolean): void {
    this.networkStatus$.next(isOnline);
  }

  /**
   * Retrieves the current network status.
   * @returns An observable of the network status.
   */
  getNetworkStatus(): Observable<boolean> {
    return this.networkStatus$.asObservable();
  }

  /**
   * Checks the current network availability.
   * @returns A boolean indicating whether the network is available.
   */
  isNetworkAvailable(): boolean {
    return this.networkStatus$.getValue();
  }
}
