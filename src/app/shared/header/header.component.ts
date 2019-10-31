import { Component, OnInit } from '@angular/core';
import { NgbTypeaheadWindow } from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarCollapsed = true;
  components = [];
  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
}
