import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Activity1PageRoutingModule } from './activity1-routing.module';

import { Activity1Page } from './activity1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    Activity1PageRoutingModule
  ],
  declarations: [Activity1Page]
})
export class Activity1PageModule {}
