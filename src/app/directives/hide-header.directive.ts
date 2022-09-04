import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appHideHeader]'
})
export class HideHeaderDirective {

  header: HTMLElement;

  private lastY = 0;

  constructor(
      private renderer: Renderer2,
      private domCtrl: DomController
  ) {
  }

  ngOnInit(): void {
    this.header = window.document.getElementById("header");
  }

  @HostListener('ionScroll', ['$event']) onContentScroll(event) {
    if (event.detail.scrollTop < this.header.clientHeight) {
      this.renderer.setStyle(this.header, 'margin-top', `-${event.detail.scrollTop}px`);
    }
    else{
      this.renderer.setStyle(this.header, 'margin-top', `-${this.header.clientHeight}px`);
    }
  }
}
