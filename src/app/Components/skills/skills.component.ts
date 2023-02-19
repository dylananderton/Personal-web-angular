import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  isMode2 = false;
  getIsMode2() : boolean {
    const width = document.documentElement.clientWidth;
    const breakpoint1 = 992;
    const breakpoint2 = 767;
    console.log(width);
    if(width < breakpoint1 && width > breakpoint2){
      return true;
    }
    else {
      return false;
    }
  }

  ngOnInit(): void {
    this.isMode2 = this.getIsMode2();
    window.onresize = () => {
      this.isMode2 = this.getIsMode2();
    };
  }

}
