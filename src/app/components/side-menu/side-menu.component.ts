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
      title: 'Cerradura Kleene',
      route: 'activity1',
      icon: 'code-working-outline'
    },
    {
      title: 'Operaciones con conjuntos',
      route: 'activity2',
      icon: 'code-working-outline'
    },
  ];
  currentPage: any = this.pages[0];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  GoToPage(page: any) {
    this.isVisible = false;
    this.currentPage = page;
    this.router.navigate([`/${page.route}`]);
  }

  ToggleMenu() {
    this.isVisible = !this.isVisible;
  }

}
