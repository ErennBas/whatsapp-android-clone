import { Component, ViewChild } from '@angular/core';
import { IonSegment, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild('slider', { read: undefined, static: false }) slider: IonSlides;
  @ViewChild('segment', { read: undefined, static: false }) segment: IonSegment;

  slideOpts = {
    initialSlide: 1,
    speed: 100
  };

  constructor() {}

  async segmentChanged(event: any) {
    const slideId = +(event.detail.value as string).replace('ion-sb-', '');
    await this.slider.slideTo(slideId, 100);
  }

  async slideChanged() {
    this.segment.value =
      'ion-sb-' + (await this.slider.getActiveIndex()).toString();
  }
}
