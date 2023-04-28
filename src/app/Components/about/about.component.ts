import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('fadeInOutAbout', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('0.6s 0.3s ease-in', style({ opacity:1, transform: 'translateX(0)'})),
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
export class AboutComponent implements OnInit {

  isVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:scroll', ['$event'])
  onWindowScroll(event:any){
    const section = document.getElementById('about');
    const sectionTop = section!.offsetTop;
    const sectionBottom = sectionTop + section!.offsetHeight;
    const scrollTop = event.target.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const isSectionVisible = (scrollTop + windowHeight > sectionTop) && (scrollTop < sectionBottom);
    if (isSectionVisible) {
      this.isVisible = true;
    }
  }

}
