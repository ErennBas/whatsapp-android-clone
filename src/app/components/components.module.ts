import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatsComponent } from './chats/chats.component';
import { StatusComponent } from './status/status.component';
import { CallsComponent } from './calls/calls.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RightChatsComponentTime } from '../all.pipe';
import { HideHeaderDirective } from '../directives/hide-header.directive';



@NgModule({
  declarations: [ChatsComponent, StatusComponent, CallsComponent, ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    ChatsComponent,
    StatusComponent,
    CallsComponent
  ]
})
export class ComponentsModule { }
