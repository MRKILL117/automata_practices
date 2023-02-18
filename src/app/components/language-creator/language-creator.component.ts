import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-language-creator',
  templateUrl: './language-creator.component.html',
  styleUrls: ['./language-creator.component.scss'],
})
export class LanguageCreatorComponent implements OnInit {

  @Output() onLanguageChange: EventEmitter<any> = new EventEmitter();

  language: Array<string> = [];
  form: FormGroup = new FormGroup({
    word: new FormControl('', [Validators.required, Validators.minLength(1)])
  });

  constructor() { }

  ngOnInit() {
    this.onLanguageChange.emit(this.language.slice());
  }

  AddWordToLanguage() {
    if(this.form.invalid) {
      console.log("Pendejo");
      return;
    }

    this.language.push(this.form.controls['word'].value);
    this.form.reset();
    this.onLanguageChange.emit(this.language.slice());
  }

  DeleteWord(idx: number) {
    this.language.splice(idx, 1);
    this.onLanguageChange.emit(this.language.slice());
  }

}
