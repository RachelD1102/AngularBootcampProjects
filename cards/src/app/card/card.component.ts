import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  //how to receive the data
  //input decorator: this property is going to be provided by the parent component
  @Input() title = '';
  @Input() imageUrl = '';
  @Input() username = '';
  @Input() content = '';

  constructor() { }

  ngOnInit(): void {
  }

}
