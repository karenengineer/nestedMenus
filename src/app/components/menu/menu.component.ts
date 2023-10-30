import { MenuItem } from "src/app/models/menu-item.model";
import { MENU_ITEMS } from './../../utils/menu-data';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  navItems: MenuItem[] = MENU_ITEMS;

  toggleSubMenu(item: MenuItem): void {
    if (item.children && item.children.length > 0) {
      item.expanded = !item.expanded;
    }
  }

}
