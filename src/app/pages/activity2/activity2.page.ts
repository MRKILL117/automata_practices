import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/Language/language.service';

@Component({
  selector: 'app-activity2',
  templateUrl: './activity2.page.html',
  styleUrls: ['./activity2.page.scss'],
})
export class Activity2Page implements OnInit {

  language1: Array<string> = [];
  language2: Array<string> = [];
  resultLanguage: Array<string> = [];

  constructor(
    private langServ: LanguageService
  ) { }

  ngOnInit() {
  }

  IntersectLanguages() {
    this.resultLanguage = this.langServ.IntersectLanguages(this.language1, this.language2);
  }

  LanguagesDifference() {
    this.resultLanguage = this.langServ.LanguagesDifference(this.language1, this.language2);
  }

  ConcatLanguages() {
    this.resultLanguage = this.langServ.ConcatLanguages(this.language1, this.language2);
  }

}
