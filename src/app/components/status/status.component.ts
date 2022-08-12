import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {
  profileCdn: string = environment.profilePhotoCdn;
  contacts = [
    {
      contactName: 'Ali',
      contactAvatar: this.profileCdn + '1.jfif',
      snippet: 'az bak şuraya...',
      time: new Date(Date.now())
    },
    {
      contactName: 'Veli',
      contactAvatar: this.profileCdn + '2.jfif',
      snippet: 'template iyi oturuyor',
      time: new Date(Date.now())
    },
    {
      contactName: 'Kırk Dokuz',
      contactAvatar: this.profileCdn + '4.jfif',
      snippet: 'acaba gelen mesaj sayısını gösteren kısmı nasıl yapıcam',
      time: new Date(Date.now())
    },
    {
      contactName: 'Elli',
      contactAvatar: this.profileCdn + '5.jfif',
      snippet: 'Halederiz bir şekilde. Takma..',
      time: new Date(Date.now())
    }
  ];


  constructor() { }

  ngOnInit() {}

}
