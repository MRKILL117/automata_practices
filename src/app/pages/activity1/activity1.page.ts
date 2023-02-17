import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-activity1',
  templateUrl: './activity1.page.html',
  styleUrls: ['./activity1.page.scss'],
})
export class Activity1Page implements OnInit {

  language: Array<string> = ['0', '11'];
  kleeneLock: Array<string> = [];
  form: FormGroup = new FormGroup({
    word: new FormControl('', [Validators.required, Validators.minLength(1)])
  });
  form2: FormGroup = new FormGroup({
    level: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{1,}$/)])
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

  DeleteWord(idx: number) {
    this.language.splice(idx, 1);
  }

  CalculateKleeneLock() {
    if(this.form2.invalid) {
      return;
    }
    this.kleeneLock = this.GetKleeneLock(Number(this.form2.controls['level'].value));
  }

  GetKleeneLock(level: number): Array<string> {
    if(level == 1) return [...this.language];
    else return this.ConcatLanguages(this.language, this.GetKleeneLock(level - 1));
  }

  ConcatLanguages(language1: Array<string>, language2: Array<string>): Array<string> {
    let languageMerged: Array<string> = [];
    language1.forEach(lang1 => {
      language2.forEach(lang2 => {
        languageMerged.push(lang1.concat(lang2));
      });
    });
    return languageMerged;
  }

}
