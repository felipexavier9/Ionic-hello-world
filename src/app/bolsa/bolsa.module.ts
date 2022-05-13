import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BolsaPage } from './bolsa.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { BolsaPageRoutingModule } from './bolsa-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    BolsaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [BolsaPage]
})
export class BolsaPageModule {}
