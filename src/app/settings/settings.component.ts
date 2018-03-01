import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  age: any[] = [3, 4, 5, 6, 7];
  timeLimit: any[] = [5, 20, 40, 60, 90];
  content: any[] = ["Mix", "Entertainment", "Educational"];
  language: any[] = ["English", "Espanol", "Francis", "Portugues"];
  ageValue: any;
  timeVlaue: any;
  contentValue: any;
  langValue: any;
  off: any;
  testt: any[] = [];
  selectedAge: any;
  selectedTime: any;
  selectedContent: any;
  selectedLanguage: any;
  constructor() {
    this.off = "Off";
    this.selectedAge = localStorage.getItem('Age');
    this.selectedTime = localStorage.getItem('screenTimeLimit');
    this.selectedContent = localStorage.getItem('selectedContentType');
    this.selectedLanguage = localStorage.getItem('language');
  }
  ngOnInit() {
  }
  setAgeTick(val: any) {
    let age = localStorage.getItem('Age');
    if (val == age) {
      return true;
    }
    else {
      return false
    }
  }
  setTimeTick(val: any) {
    let time = localStorage.getItem('screenTimeLimit');
    if (val == time) {
      return true;
    } else {
      return false;
    }
  }
  setContentTick(val: any) {
    let content = localStorage.getItem('selectedContentType');
    if (val == content) {
      return true;
    } else {
      return false;
    }
  }
  setLanguageTick(val: any) {
    let language = localStorage.getItem('language');
    if (val == language) {
      return true;
    } else {
      return false;
    }
  }

  getAge(age: any) {
    localStorage.setItem('Age', age);
    this.selectedAge = age;
  }
  getTime(time: any) {
    localStorage.setItem('screenTimeLimit', time);
    this.selectedTime = time;
  }
  getContent(content: any) {
    localStorage.setItem('selectedContentType', content);
    this.selectedContent = content;
  }
  getLanguage(lang: any) {
    localStorage.setItem('language', lang);
    this.selectedLanguage = lang;
  }
}
