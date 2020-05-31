import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PinDetailsPageRoutingModule } from './pin-details-routing.module';

import { PinDetailsPage } from './pin-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PinDetailsPageRoutingModule
  ],
  declarations: [PinDetailsPage]
})
export class PinDetailsPageModule {}
