import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>{{ title }}</h1>
  <!--<nav>
  <a routerLink="/home">Home</a>
  <a routerLink="/contacts">Contacts</a>
</nav>-->`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'My Notes';
 }
