import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-activity1',
  templateUrl: './activity1.page.html',
  styleUrls: ['./activity1.page.scss'],
})
export class Activity1Page implements OnInit {

  language: Array<string> = [];
  form: FormGroup = new FormGroup({
    word: new FormControl('', [Validators.required, Validators.minLength(1)])
  });

  constructor() { }

  ngOnInit() {
  }

  AddWordToLanguage() {
    if(this.form.invalid) {
      console.log("Pendejo");
      return;
    }

    this.language.push(this.form.controls['word'].value);
    this.form.reset();
  }

}
