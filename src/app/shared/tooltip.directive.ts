import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {

  @Input()
  tooltip: string;

  constructor() { }

  @HostListener('mouseenter')
  onMouseEnter() {

    console.log(this.tooltip);
  }

  @HostListener('mouseleave')
  onMouseLeave() {

    console.log(this.tooltip);
  }

}
