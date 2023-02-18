import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LanguageService } from 'src/app/services/Language/language.service';

@Component({
  selector: 'app-activity1',
  templateUrl: './activity1.page.html',
  styleUrls: ['./activity1.page.scss'],
})
export class Activity1Page implements OnInit {

  language: Array<string> = [];
  kleeneLock: Array<string> = [];
  form: FormGroup = new FormGroup({
    level: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{1,}$/)])
  });

  constructor(
    private langServ: LanguageService
  ) { }

  ngOnInit() {
  }

  CalculateKleeneLock() {
    if(this.form.invalid) {
      return;
    }
    this.kleeneLock = this.GetKleeneLock(Number(this.form.controls['level'].value));
  }

  GetKleeneLock(level: number): Array<string> {
    if(level == 1) return this.language;
    else return this.langServ.ConcatLanguages(this.language, this.GetKleeneLock(level - 1));
  }

}
