import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// prime ng modules
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    AvatarModule,
    AvatarGroupModule
  ],
  exports:[
    ButtonModule,
    AvatarModule,
    AvatarGroupModule
  ]
})
export class PrimeNgModule { }
