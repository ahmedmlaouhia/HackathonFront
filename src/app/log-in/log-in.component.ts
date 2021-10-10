import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  vpass = '';
  loading = false;
  user: User = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  login() {
    this.loading = true;
    this.authService
      .login({
        email: this.user.email,
        password: this.user.password,
      })
      .subscribe((token) => {
        this.loading = false;
        this.authService.loginSuccessful(token);
      });
  }
}
