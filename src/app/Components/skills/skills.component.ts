import { state } from '@angular/animations';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, HostListener, OnInit } from '@angular/core';
import * as $ from "jquery"

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  showSkillsList1 : boolean = true;
  showSkillsList2 : boolean = false;
  showSkillsList3 : boolean = false;

  ngOnInIt(){
    this.skillsList();
    this.skillsBr();
  }

  @HostListener('window:resize',['$event'])
  @HostListener('window:load', ['$event'])
  onResize(event:any) {
    this.skillsList();
  }

  skillsList(){
    const containerWidth = window.innerWidth;
    if(containerWidth >= 767 && containerWidth <= 992){
        this.showSkillsList1 = false;
        this.showSkillsList2 = true;
        this.showSkillsList3 = false
      } 
    else if(containerWidth < 767){
        this.showSkillsList1 = false;
        this.showSkillsList2 = false;
        this.showSkillsList3 = true;
    }
    else {
      this.showSkillsList1 = true;
      this.showSkillsList2 = false;
      this.showSkillsList3 = false;
    }
  }

  skillsBr(): void {
    const containerWidth = window.innerWidth;
    if (containerWidth < 992) {
      $('#skills-list #skillbr').removeClass('brmed');
    } else {
      $('#skills-list #skillbr').addClass('brmed');
    }
  }
  
  // isMobile = false;
  // getIsMobile(): boolean {
  //   const width = document.documentElement.clientWidth;
  //   const breakpoint = 767;
  //   const breakpoint2 = 992;
  //   console.log(width);
  //   if(width < breakpoint){
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
  // }

  constructor(public breakPointObserver: BreakpointObserver){}

  // ngOnInit(): void {

  //   is767 = this.breakPointObserver.isMatched('(min-width: 767px)');
  //   is992 = this.breakPointObserver.isMatched('(max-width: 992px)');

  //   if(this.is767 && this.is992){
  //     console.log('is MOBILEEE')
  //   }
  //   else {
  //     console.log('IS NOT MOBILEE');
  //   }

    // this.isMobile= this.getIsMobile();
    // window.onresize = () => { '(min-width:767px)'
    //   this.isMobile = this.getIsMobile();
    // };
    // this.breakPointObserver
    // .observe(['(min-width:767px)&&(max-width:992px)'])
    // .subscribe((state: BreakpointState) => {
    //   if(state.matches){
    //     console.log('isMobile = true');
    //     this.isMobile = true;
    //   }
    //   else {
    //     console.log('isMobile = false');
    //     this.isMobile = false
    //   }
    // })

}