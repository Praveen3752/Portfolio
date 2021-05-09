import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openChatApp()
  {
    console.log("opened");
    window.open("https://chatapp-angular.netlify.app/","_blank");
  }

  openHousieApp()
  {
    console.log("entered");
    window.open("https://housieproject-angular.netlify.app/","_blank");
  }

}
