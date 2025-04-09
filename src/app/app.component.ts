import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  title = 'oncart';
  showNav = true;
  showFooter = true;

  constructor (private router:Router) {}
  ngOnInit(): void {

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(()=> {
      const currentRoute = this.router.url;

      const isAuthPage = currentRoute.includes('login') || currentRoute.includes('signup')

      this.showNav = !isAuthPage
      this.showFooter = !isAuthPage
    })
  }
}
