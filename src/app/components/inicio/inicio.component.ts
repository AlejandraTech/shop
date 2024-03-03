import { Component, OnInit } from '@angular/core';
import { CookieService } from '../../service/cookie.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  cookiesAccepted: boolean = false;

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    const hermesCookie = this.cookieService.getCookie('hermes');
    if (hermesCookie === 'si') {
      this.cookiesAccepted = true;
    }
  }

  acceptCookies() {
    this.cookieService.setCookie('hermes', 'si');
    this.cookiesAccepted = true;
  }

  rejectCookies() {
    this.cookieService.setCookie('hermes', '', -1); // Eliminar la cookie
    this.cookiesAccepted = false;
  }
}
