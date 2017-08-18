import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {

  @Input()
  set tooltip(value: string) {
    this.tooltipElement.innerText = value;
  }

  tooltipElement: HTMLDivElement = document.createElement('div');

  constructor(elementRef: ElementRef) {

    this.tooltipElement.hidden = true;

    elementRef.nativeElement.appendChild(this.tooltipElement);
  }

  @HostListener('mouseenter')
  onMouseEnter() {

    this.tooltipElement.hidden = null;
  }

  @HostListener('mouseleave')
  onMouseLeave() {

    this.tooltipElement.hidden = true;
  }
}
