import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RequestsService } from '../services/requests.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}
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

  unfriend(id: any) {
    this.userService.unfriend(id).subscribe(() => {
      this.me.friends = this.me.friends.filter(({ _id }: any) => _id !== id);
    });
  }

  logout() {
    this.authService.logout();
  }
}
