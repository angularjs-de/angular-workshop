import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.css']
})
export class TitleBoxComponent implements OnInit {

  @Input()
  title: string = '';

  constructor() { }

  ngOnInit() {
  }

}
