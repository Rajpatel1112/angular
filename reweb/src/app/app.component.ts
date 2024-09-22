import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reweb';

  
  isMobileMenuOpen = false;
  isSticky = false;
  isVisible = false;
  
  articles = [
    { image: 'assets/images/ar1.png', title: 'Article 1', excerpt: 'This is the first article.' },
    { image: 'assets/images/ar2.jpeg', title: 'Article 2', excerpt: 'This is the second article.' },
    { image: 'assets/images/ar3.jpeg', title: 'Article 3', excerpt: 'This is the third article.' },
    { image: 'assets/images/ar4.jpeg', title: 'Article 4', excerpt: 'This is the fourth article.' },
   
  ];
 
 
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

 
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible = window.scrollY > 200; 
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
