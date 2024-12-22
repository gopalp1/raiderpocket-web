import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}
  setLocalData(key: string, value: any): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  getLocalData<T>(key: string): Promise<T | null> {
    return new Promise((resolve, reject) => {
      try {
        const data = localStorage.getItem(key);
        resolve(data ? JSON.parse(data) : null);
      } catch (error) {
        reject(error);
      }
    });
  }
  deleteAll(): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        localStorage.clear();
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  delete(key: string): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        localStorage.removeItem(key);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
}
