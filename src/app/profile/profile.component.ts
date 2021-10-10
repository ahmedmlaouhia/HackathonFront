import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(private userService: UserService) {}
  me: any = {
    fullname: '',
    bio: '',
    title: '',
  };
  ngOnInit(): void {
    this.userService.getMe().subscribe((data) => {
      this.me = data;
    });
  }
}
