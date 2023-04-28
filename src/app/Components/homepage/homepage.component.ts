import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  @ViewChild('hero')hero!: ElementRef;
  @ViewChild('about')about!: ElementRef;

  title = 'Personal-Website';

  constructor(
    private router: Router,
    private elementRef: ElementRef
  ) {}
  
  ngOnInit() {
    
  }
  
  ngAfterViewInit(): void {
    // const heroObserver = new IntersectionObserver(entries => {
    //   if (entries[0].isIntersecting) {
    //     console.log('Hero Section:', document.title);
    //   }
    // });
    // heroObserver.observe(this.hero?.nativeElement);
  
    // const aboutObserver = new IntersectionObserver(entries => {
    //   if (entries[0].isIntersecting) {
    //     console.log('About Section:', document.title);
    //   }
    // });
    // aboutObserver.observe(this.about.nativeElement);
  }

  scrollToSection(id: string){
    const section = this.elementRef.nativeElement.querySelector('#' + id);
    section.scrollIntoView({behavior:'smooth'});
    window.history.replaceState(null, '', window.location.pathname);
    this.closeNav();
  }

  // ngOnDestroy() {
  //   window.removeEventListener('scroll', this.scrollEvent, true);
  // }

  // scrollEvent = (event: any): void => {
  //   const n = event.window.scrollTop;
  //   console.log(n);
  // }

  openNav() {
    console.log('open nav is called');
    this.elementRef.nativeElement.querySelector("#myNav").style.height = '100%';
  }
  
  closeNav() {
    this.elementRef.nativeElement.querySelector("#myNav").style.height = "0%";
  }

  closeNavDelay() {
    setTimeout(() => {
      this.elementRef.nativeElement.querySelector('#myNav').style.height = '0%';
    }, 500); // delay for 500 milliseconds (0.5 seconds)
  }

}
