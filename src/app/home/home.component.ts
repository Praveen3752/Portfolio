import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private elemRef : ElementRef) { }

  mySkills = ['Web Application Developer','Front End Developer','Likes playing Cricket,Badminton,chess'];

  ngOnInit() {
    let i = 0;
    setInterval(() => 
    {
      //console.log(this.elemRef.nativeElement.querySelectorAll(".myroles"));
      this.elemRef.nativeElement.querySelectorAll(".myroles")[0].innerText = this.mySkills[i];
      i = i + 1;
      if(i >= 3)
        {
        i = 0;
        }
    },3000)
  }

}
