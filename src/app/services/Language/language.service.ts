import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  public ConcatLanguages(language1: Array<string>, language2: Array<string>): Array<string> {
    let languageMerged: Array<string> = [];
    language1.forEach(lang1 => {
      language2.forEach(lang2 => {
        languageMerged.push(lang1.concat(lang2));
      });
    });
    return languageMerged;
  }

  public IntersectLanguages(language1: Array<string>, language2: Array<string>): Array<string> {
    let resultLanguage: Array<string> = [];
    language1.forEach(lang1 => {
      if(language2.includes(lang1)) resultLanguage.push(lang1);
    });
    return resultLanguage;
  }

  public LanguagesDifference(language1: Array<string>, language2: Array<string>): Array<string> {
    let resultLanguage: Array<string> = [];
    language1.forEach(lang1 => {
      if(!language2.includes(lang1)) resultLanguage.push(lang1);
    });
    return resultLanguage;
  }

}
