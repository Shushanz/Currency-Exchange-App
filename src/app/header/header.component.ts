import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  path;

  constructor(private location: Location) {
    this.path = this.location.path()
  }

  ngOnInit(): void {
  }
}