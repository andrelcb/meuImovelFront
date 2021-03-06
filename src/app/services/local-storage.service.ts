import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LocalStorageService {
  constructor() {}

  set(key: any, value: any) {
    window.localStorage[key] = value;
    return this;
  }

  get(key: any) {
    return window.localStorage[key] || false;
  }

  setObject(key, value: Object) {
    window.localStorage[key] = JSON.stringify(value);
    return this;
  }

  getObject(key) {
    return JSON.parse(window.localStorage[key] || null);
  }

  remove(key) {
    window.localStorage.removeItem(key);
    return this;
  }
}
