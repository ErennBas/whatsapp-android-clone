/* eslint-disable max-len */
import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AnimationController, IonModal, ModalController } from '@ionic/angular';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],
})

export class ChatsComponent implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  @ViewChild(IonModal) modal2: IonModal;
  
  profileCdn: string = environment.profilePhotoCdn;
  currentContact;
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

  constructor(private animationCtrl: AnimationController, private statusBar: StatusBar, private modalCtrl: ModalController) {
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
      .duration(200)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };

  ngOnInit() {}

  onWillDismiss(event){
    this.statusBar.backgroundColorByHexString('#128C7E');
  }

  async openCurrentContactAvatar(){
    console.log("fdsa");

    const contactImageModal = await this.modalCtrl.create({
      component: ViewerModalComponent,
      componentProps: {
        src: this.currentContact.contactAvatar,
        scheme: "dark",
        title: this.currentContact.contactName
      },      
      cssClass: 'ion-img-viewer',
      keyboardClose: true,
      showBackdrop: true,
      enterAnimation: this.enterAnimation,
      leaveAnimation: this.leaveAnimation,
      animated: true
    });
    this.modal.dismiss();
    contactImageModal.present();


    contactImageModal.onWillDismiss().then(res => {
      console.log("changes");
      this.statusBar.backgroundColorByHexString('#128C7E');
    });

  }

  contactImageClick(contact){
    this.currentContact = contact;
    this.modal.present();
    this.statusBar.backgroundColorByHexString('#0c5f57');
  }

  contactClick(contact){
    this.currentContact = contact;
  }

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