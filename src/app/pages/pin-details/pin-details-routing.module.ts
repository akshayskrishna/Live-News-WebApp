import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PinDetailsPage } from './pin-details.page';

const routes: Routes = [
  {
    path: '',
    component: PinDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PinDetailsPageRoutingModule {}
