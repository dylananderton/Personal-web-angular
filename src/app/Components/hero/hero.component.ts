import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [
    trigger('fadeInOutIntroButton', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('0.6s 0.3s ease-in', style({ opacity:1, transform: 'translateX(0  )'})),
      ])
    ]),
    trigger('fadeInOutIntroText', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('0.6s 0.9s ease-in', style({opacity: 1, transform: 'translateX(0)'}))
      ])
    ])
  ]
})
export class HeroComponent implements OnInit {

  public isSmall=  false;

  constructor(private responsive: BreakpointObserver) { }

  ngOnInit(): void {
    this.responsive.observe(Breakpoints.Small).subscribe(result => {

      this.isSmall= false;

      if(result.matches){
        console.log('screen is small');
        this.isSmall= true;
      }
      else{
        console.log('screen is no longer small');
        this.isSmall = false;
      }
    });

    this.responsive.observe(Breakpoints.Small).subscribe(result => {

    })
  }

}
