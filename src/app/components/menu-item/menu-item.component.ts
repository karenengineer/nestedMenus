import { MenuItem } from "src/app/models/menu-item.model";
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})

export class MenuItemComponent {
  @Input() items: MenuItem[] | undefined;
  @Input() parentId: string = '';

  toggleSubMenu(item: MenuItem): void {
    if (item.children && item.children.length > 0) {
      item.expanded = !item.expanded;
    }
  }
}
