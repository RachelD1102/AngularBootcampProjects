import { Component, Injectable } from '@angular/core';
import { WilipediaService } from './wilipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages = [];

  constructor(private wilipedia: WilipediaService,){}
  
  onTerm(term: string){
    this.wilipedia.search(term).subscribe( (response: any) => {
      this.pages = response.query.search;
    });
  }
}
