import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RequestsService } from '../services/requests.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-others-profile',
  templateUrl: './others-profile.component.html',
  styleUrls: ['./others-profile.component.scss'],
})
export class OthersProfileComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private userService: UserService,
    private requestService: RequestsService,
    private authService: AuthService
  ) {}

  status = '';
  user: any = {
    _id: '',
    fullname: '',
    title: '',
    bio: '',
    email: '',
    sexe: '',
  };
  ngOnInit(): void {
    this.userService
      .getUser(this.router.snapshot.paramMap.get('id'))
      .subscribe((data) => {
        this.user = data;
      });
  }

  request(id: any) {
    this.requestService.create(id).subscribe(() => {
      this.status = 'SENT';
    });
  }

  unfriend(id: any) {
    this.requestService.kill(id).subscribe(() => {
      this.status = '';
    });
  }

  logout() {
    this.authService.logout();
  }
}
