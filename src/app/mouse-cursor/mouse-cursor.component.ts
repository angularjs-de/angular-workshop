import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mouse-cursor',
  templateUrl: './mouse-cursor.component.html',
  styleUrls: ['./mouse-cursor.component.css']
})
export class MouseCursorComponent implements OnInit {

  x: number = 0;
  y: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onMousemove($event: MouseEvent) {

    this.x = $event.clientX;
    this.y = $event.clientY;
  }

}
