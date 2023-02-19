import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  isVisible: boolean = false;
  pages: Array<any> = [
    {
      title: 'Actividad 1',
      route: 'activity1',
      icon: 'code-working-outline'
    },
    {
      title: 'Actividad 2',
      route: 'activity2',
      icon: 'code-working-outline'
    },
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  GoToPage(page: any) {
    this.isVisible = false;
    setTimeout(() => {
      this.router.navigate([`/${page.route}`]);
    }, 250);
  }

  ToggleMenu() {
    this.isVisible = !this.isVisible;
  }

}
