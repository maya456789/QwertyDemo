import { Component } from '@angular/core';
import { navItems } from './_nav';

@Component({
  selector: 'app-coreui-sidebar',
  templateUrl: './coreui-sidebar.component.html',
  styleUrls: ['./coreui-sidebar.component.css']
})
export class CoreuiSidebarComponent {

  public navItems = navItems;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };
  
}
