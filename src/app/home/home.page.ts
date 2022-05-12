import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  darkMode = false;

  constructor() {}

  toggleTheme(){
    this.darkMode = !this.darkMode;
    if (this.darkMode){
      document.body.setAttribute('color-theme', 'dark')
    }
    else{ 
      document.body.setAttribute('color-theme', 'light')
    }
  }
}
