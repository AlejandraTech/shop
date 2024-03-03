import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }

  // Método para establecer una cookie
  setCookie(name: string, value: string, expireDays: number = 0) {
    let cookieValue = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    if (expireDays > 0) {
      const expireDate = new Date();
      expireDate.setDate(expireDate.getDate() + expireDays);
      cookieValue += '; expires=' + expireDate.toUTCString();
    }
    document.cookie = cookieValue + '; path=/';
  }

  // Método para obtener el valor de una cookie
  getCookie(name: string): string | null {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return decodeURIComponent(cookie.substring(name.length + 1));
      }
    }
    return null;
  }
}
