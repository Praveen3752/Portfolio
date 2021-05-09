import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SampleService } from './sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyPortfolio';

  bgcolorvalue = "url('../assets/portfolio-background.jpg')";

  constructor(private service:SampleService,private elemRef : ElementRef,private router:Router)
  {

  }

  ngOnInit()
  {
    this.router.navigateByUrl('/home');
   

  }

  changeTab(data,tabname)
  {
    let nextnodedata = data.currentTarget;
    let previousnodedata = data.currentTarget;
    while(nextnodedata)
    {
      nextnodedata = nextnodedata.nextElementSibling;
      if(nextnodedata != null)
      {
        nextnodedata.classList.remove('selectedTab');
      }
      //console.log(nodedata);
    }
    while(previousnodedata)
    {
      previousnodedata = previousnodedata.previousElementSibling;
      if(previousnodedata != null)
      {
        previousnodedata.classList.remove('selectedTab');
      }
    }
    data.currentTarget.classList.add('selectedTab');

    if(tabname == 'home')
    {
      this.bgcolorvalue = "url('../assets/portfolio-background.jpg')";
    }
    else
    {
      this.bgcolorvalue = '#222';
    }

   // console.log(data);
   // console.log(data.currentTarget.classList.add('selectedTab'));
   // console.log(data.currentTarget.previousElementSibling.classList.remove('selectedTab'));
  }

}
