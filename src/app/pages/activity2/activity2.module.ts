import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Activity2PageRoutingModule } from './activity2-routing.module';

import { Activity2Page } from './activity2.page';
import { LanguageCreatorModule } from 'src/app/components/language-creator/language-creator.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LanguageCreatorModule,
    Activity2PageRoutingModule
  ],
  declarations: [Activity2Page]
})
export class Activity2PageModule {}
