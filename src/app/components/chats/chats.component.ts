/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],
})
export class ChatsComponent implements OnInit {
  profileCdn: string = environment.profilePhotoCdn;
  contacts = [
    {
      contactName: 'Ali',
      contactAvatar: this.profileCdn + '1.jfif',
      snippet: 'az bak şuraya...',
      time: new Date("08/10/2022 15:35:21")
    },
    {
      contactName: 'Ali',
      contactAvatar: this.profileCdn + '1.jfif',
      snippet: 'az bak şuraya...',
      time: new Date("08/10/2022 15:35:21")
    },
    {
      contactName: 'Ali',
      contactAvatar: this.profileCdn + '1.jfif',
      snippet: 'az bak şuraya...',
      time: new Date("08/10/2022 15:35:21")
    },
    {
      contactName: 'Ali',
      contactAvatar: this.profileCdn + '1.jfif',
      snippet: 'az bak şuraya...',
      time: new Date("08/10/2022 15:35:21")
    },
    {
      contactName: 'Ali',
      contactAvatar: this.profileCdn + '1.jfif',
      snippet: 'az bak şuraya...',
      time: new Date("08/10/2022 15:35:21")
    },
    {
      contactName: 'Ali',
      contactAvatar: this.profileCdn + '1.jfif',
      snippet: 'az bak şuraya...',
      time: new Date("08/10/2022 15:35:21")
    },
    {
      contactName: 'Ali',
      contactAvatar: this.profileCdn + '1.jfif',
      snippet: 'az bak şuraya...',
      time: new Date("08/10/2022 15:35:21")
    },
    {
      contactName: 'Ali',
      contactAvatar: this.profileCdn + '1.jfif',
      snippet: 'az bak şuraya...',
      time: new Date("08/10/2022 15:35:21")
    },
    {
      contactName: 'Ali',
      contactAvatar: this.profileCdn + '1.jfif',
      snippet: 'az bak şuraya...',
      time: new Date("08/10/2022 15:35:21")
    },
    {
      contactName: 'Ali',
      contactAvatar: this.profileCdn + '1.jfif',
      snippet: 'az bak şuraya...',
      time: new Date("08/10/2022 15:35:21")
    },
    {
      contactName: 'Ali',
      contactAvatar: this.profileCdn + '1.jfif',
      snippet: 'az bak şuraya...',
      time: new Date("08/10/2022 15:35:21")
    },
    {
      contactName: 'Ali',
      contactAvatar: this.profileCdn + '1.jfif',
      snippet: 'az bak şuraya...',
      time: new Date("08/10/2022 15:35:21")
    },
    {
      contactName: 'Ali',
      contactAvatar: this.profileCdn + '1.jfif',
      snippet: 'az bak şuraya...',
      time: new Date("08/10/2022 15:35:21")
    },
    {
      contactName: 'Ali',
      contactAvatar: this.profileCdn + '1.jfif',
      snippet: 'az bak şuraya...',
      time: new Date("08/10/2022 15:35:21")
    },
    {
      contactName: 'Ali',
      contactAvatar: this.profileCdn + '1.jfif',
      snippet: 'az bak şuraya...',
      time: new Date("08/10/2022 15:35:21")
    },
    {
      contactName: 'Ali',
      contactAvatar: this.profileCdn + '1.jfif',
      snippet: 'az bak şuraya...',
      time: new Date("08/10/2022 15:35:21")
    },
    {
      contactName: 'Veli',
      contactAvatar: this.profileCdn + '2.jfif',
      snippet: 'template iyi oturuyor',
      time: new Date("08/09/2022 15:35:21")
    },
    {
      contactName: 'Kırk Dokuz',
      contactAvatar: this.profileCdn + '4.jfif',
      snippet: 'acaba gelen mesaj sayısını gösteren kısmı nasıl yapıcam',
      time: new Date("08/10/2021 15:35:21")
    },
    {
      contactName: 'Elli',
      contactAvatar: this.profileCdn + '5.jfif',
      snippet: 'Halederiz bir şekilde. Takma..',
      time: new Date("08/11/2022 15:35:21")
    }
  ];

  constructor(private animationCtrl: AnimationController) {
    this.contacts.sort(this.compare);
  }

  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };

  ngOnInit() {}

  compare( a, b ) {
    if ( a.time < b.time ){
      return 1;
    }
    if ( a.time > b.time ){
      return -1;
    }
    return 0;
  }

}
