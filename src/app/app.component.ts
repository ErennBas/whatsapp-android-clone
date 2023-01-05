/* eslint-disable @typescript-eslint/dot-notation */
import { Component, ElementRef, Renderer2, ViewChild, OnInit, Inject } from '@angular/core';
import { IonSegment, IonSlides } from '@ionic/angular';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { ChatsComponent } from './components/chats/chats.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [StatusBar]
})

export class AppComponent implements OnInit {
  @ViewChild('header') header: HTMLElement;
  @ViewChild('slider', { read: undefined, static: false }) slider: IonSlides;
  @ViewChild('segment', { read: undefined, static: false }) segment: IonSegment;
  @ViewChild('chats', { read: undefined, static: false }) chatListComponent: ChatsComponent;

  profileCdn: string = environment.profilePhotoCdn;
  contacts = [
    {
      contactName: 'Ali',
      contactAvatar: this.profileCdn + '1.jfif',
      snippet: 'az bak şuraya...',
      time: new Date('08/10/2022 15:35:21')
    },
    {
      contactName: 'Ali',
      contactAvatar: this.profileCdn + '1.jfif',
      snippet: 'az bak şuraya...',
      time: new Date('08/10/2022 15:35:21')
    },
    {
      contactName: 'Ali',
      contactAvatar: this.profileCdn + '1.jfif',
      snippet: 'az bak şuraya...',
      time: new Date('08/10/2022 15:35:21')
    },
    {
      contactName: 'Ali',
      contactAvatar: this.profileCdn + '1.jfif',
      snippet: 'az bak şuraya...',
      time: new Date('08/10/2022 15:35:21')
    },
    {
      contactName: 'Ali',
      contactAvatar: this.profileCdn + '1.jfif',
      snippet: 'az bak şuraya...',
      time: new Date('08/10/2022 15:35:21')
    },
    {
      contactName: 'Ali',
      contactAvatar: this.profileCdn + '1.jfif',
      snippet: 'az bak şuraya...',
      time: new Date('08/10/2022 15:35:21')
    },
    {
      contactName: 'Ali',
      contactAvatar: this.profileCdn + '1.jfif',
      snippet: 'az bak şuraya...',
      time: new Date('08/10/2022 15:35:21')
    },
    {
      contactName: 'Ali',
      contactAvatar: this.profileCdn + '1.jfif',
      snippet: 'az bak şuraya...',
      time: new Date('08/10/2022 15:35:21')
    },
    {
      contactName: 'Ali',
      contactAvatar: this.profileCdn + '1.jfif',
      snippet: 'az bak şuraya...',
      time: new Date('08/10/2022 15:35:21')
    },
    {
      contactName: 'Ali',
      contactAvatar: this.profileCdn + '1.jfif',
      snippet: 'az bak şuraya...',
      time: new Date('08/10/2022 15:35:21')
    },
    {
      contactName: 'Ali',
      contactAvatar: this.profileCdn + '1.jfif',
      snippet: 'az bak şuraya...',
      time: new Date('08/10/2022 15:35:21')
    },
    {
      contactName: 'Ali',
      contactAvatar: this.profileCdn + '1.jfif',
      snippet: 'az bak şuraya...',
      time: new Date('08/10/2022 15:35:21')
    },
    {
      contactName: 'Ali',
      contactAvatar: this.profileCdn + '1.jfif',
      snippet: 'az bak şuraya...',
      time: new Date('08/10/2022 15:35:21')
    },
    {
      contactName: 'Ali',
      contactAvatar: this.profileCdn + '1.jfif',
      snippet: 'az bak şuraya...',
      time: new Date('08/10/2022 15:35:21')
    },
    {
      contactName: 'Ali',
      contactAvatar: this.profileCdn + '1.jfif',
      snippet: 'az bak şuraya...',
      time: new Date('08/10/2022 15:35:21')
    },
    {
      contactName: 'Ali',
      contactAvatar: this.profileCdn + '1.jfif',
      snippet: 'az bak şuraya...',
      time: new Date('08/10/2022 15:35:21')
    },
    {
      contactName: 'Veli',
      contactAvatar: this.profileCdn + '2.jfif',
      snippet: 'template iyi oturuyor',
      time: new Date('08/09/2022 15:35:21')
    },
    {
      contactName: 'Kırk Dokuz',
      contactAvatar: this.profileCdn + '4.jfif',
      snippet: 'acaba gelen mesaj sayısını gösteren kısmı nasıl yapıcam',
      time: new Date('08/10/2021 15:35:21')
    },
    {
      contactName: 'Elli',
      contactAvatar: this.profileCdn + '5.jfif',
      snippet: 'Halederiz bir şekilde. Takma..',
      time: new Date('08/11/2022 15:35:21')
    }
  ];
  lastY = 0;

  slideOpts = {
    initialSlide: 1,
    speed: 100
  };

  constructor(private statusBar: StatusBar, public element: ElementRef, public renderer: Renderer2, private translate: TranslateService) {
    console.log('STATUS BAR ===>>>>', this.statusBar);
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('#008069');
    this.translate.setDefaultLang('tr');
  }

  async ngOnInit() {
  }


  async segmentChanged(event: any) {
    const slideId = +(event.detail.value as string).replace('ion-sb-', '');
    this.renderer.setStyle(this.header['el'], 'margin-top', '0');
    // this.chatListComponent.scrollTo({ top: 0 });
    this.chatListComponent.scrollToTop();
    await this.slider.slideTo(slideId, 100);
  }

  async slideChanged() {
    this.segment.value = 'ion-sb-' + (await this.slider.getActiveIndex()).toString();
  }
}
