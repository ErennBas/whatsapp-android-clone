import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-contact-image-modal',
  templateUrl: './contact-image-modal.component.html',
  styleUrls: ['./contact-image-modal.component.scss'],
})
export class ContactImageModalComponent implements OnInit {
  @Input('currentContact') currentContact;
  
  constructor(private modalCtrl: ModalController) {}

  cancel() {
    console.log("close");
    this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
  }
  
  ngOnInit() {}

}
