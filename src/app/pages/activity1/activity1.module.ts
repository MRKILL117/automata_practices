import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SideMenuModule } from 'src/app/components/side-menu/side-menu.module';
import { LanguageCreatorModule } from 'src/app/components/language-creator/language-creator.module';

import { Activity1PageRoutingModule } from './activity1-routing.module';
import { Activity1Page } from './activity1.page';

@NgModule({
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    SideMenuModule,
    ReactiveFormsModule,
    LanguageCreatorModule,
    Activity1PageRoutingModule,
  ],
  declarations: [Activity1Page]
})
export class Activity1PageModule {}
