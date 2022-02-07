/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],
})
export class ChatsComponent implements OnInit {
  profileCdn: string = environment.profilePhotoCdn;
  contacts = [
    {
      contactName: 'Finn',
      contactAvatar: this.profileCdn + '1.jfif',
      snippet: 'Listen, I\'ve had a pretty messed up day...',
      time: new Date(Date.now())
    },
    {
      contactName: 'Han',
      contactAvatar: this.profileCdn + '2.jfif',
      snippet: 'I\'ve got enough on my plate as it is, and I...',
      time: new Date(Date.now())
    },
    {
      contactName: 'Rey',
      contactAvatar: this.profileCdn + '4.jfif',
      snippet: 'You will remove these restraints and leave...',
      time: new Date(Date.now())
    },
    {
      contactName: 'Luke',
      contactAvatar: this.profileCdn + '5.jfif',
      snippet: 'I feel the good in you, the conflict...',
      time: new Date(Date.now())
    }
  ];

  constructor() { }

  ngOnInit() {}

}
