import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  isMobile = false;
  getIsMobile(): boolean {
    const width = document.documentElement.clientWidth;
    const breakpoint = 768;
    if(width < breakpoint){
      return true;
    }
    else{
      return false;
    }
  }

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
    this.isMobile = this.getIsMobile();
    window.onresize = () =>{
      this.isMobile = this.getIsMobile();
    }
  }

  goToHangman(){

  }

  toCrypto(){
    this.router.navigateByUrl('crypto-app');
  }

}
