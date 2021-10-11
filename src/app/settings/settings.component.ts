import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

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
    bio: '',
    title: '',
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  save() {
    console.log(Object.keys(this.user).filter((key) => this.user[key] !== ''));
  }

  logout() {
    this.authService.logout();
  }
}
