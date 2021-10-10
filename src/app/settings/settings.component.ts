import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  vpass = '';
  oldpassword = '';
  loading = false;
  user: any = {
    fullname: '',
    email: '',
    sexe: 'M',
    password: '',
  };

  constructor() {}

  ngOnInit(): void {}

  save() {}
}
