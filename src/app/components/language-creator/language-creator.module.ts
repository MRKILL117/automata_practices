import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageCreatorComponent } from './language-creator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [LanguageCreatorComponent],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    IonicModule.forRoot()
  ],
  exports: [
    LanguageCreatorComponent
  ]
})
export class LanguageCreatorModule { }
