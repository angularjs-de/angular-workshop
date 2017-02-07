import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.css']
})
export class TitleBoxComponent implements OnInit {

  @Input()
  title: string = '';

  @Output()
  titleClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onTitleClicked() {
    this.titleClicked.emit('EventData');
  }

}
