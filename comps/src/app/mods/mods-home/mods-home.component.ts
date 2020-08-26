import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    { title: 'Why is the ocean blue?', content: 'Because the sky is blue' },
    { title: 'What does an orange taste like?', content: 'An orange tastes like an orange' },
    { title: 'What color is that cat?', content: 'The cat is an white cat' }
  ];

  constructor() { }

  ngOnInit(){}

  onClick(){
    this.modalOpen = !this.modalOpen;
  }

}
