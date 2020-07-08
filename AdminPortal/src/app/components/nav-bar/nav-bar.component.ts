import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
   LoggedIn=false;
  toggleDisplayDivIf(){
    this.LoggedIn=!this.LoggedIn;
  }
  constructor() { }
  
  ngOnInit(): void {
  }

}
