import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PinDisplayPageRoutingModule } from './pin-display-routing.module';

import { PinDisplayPage } from './pin-display.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PinDisplayPageRoutingModule
  ],
  declarations: [PinDisplayPage]
})
export class PinDisplayPageModule {}
