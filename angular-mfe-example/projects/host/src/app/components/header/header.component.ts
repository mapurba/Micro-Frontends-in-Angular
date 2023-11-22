import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {



  loggedInUser: any;
  constructor(  ) {
   
  }

  ngOnInit(): void { }

  openHelpPage() {
  }

  openAboutDialog() {
   
  }



  logout() {
  }
}
