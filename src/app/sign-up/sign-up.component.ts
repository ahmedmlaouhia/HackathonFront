import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit, OnDestroy {
  // test: Observable<any> null;
  // private testSubscriber: Subscription = null;

  vpass = '';
  loading = false;
  user: any = {
    fullname: '',
    email: '',
    sexe: 'M',
    password: '',
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    /* this.test = this.authService.testSocket;
    this.testSubscriber = this.authService.testSocket.subscribe(
      (gotFromSocket) => {
        console.log('socket: ', gotFromSocket);
      }
    );*/
  }

  ngOnDestroy() {
    // this.testSubscriber.unsubscribe();
  }

  signup() {
    this.loading = true;
    this.authService.signup(this.user).subscribe((token) => {
      this.loading = false;
      this.authService.signupSuccessful();
    });
    /* 
    this.loading = true;
    if (this.verifyPass()) {
      this.authService.signup(this.user).subscribe(
        (data) => {
          console.log({ data });
          this.error = null;
        },
        (error) => {
          this.error = error;
        }
      );
    }
    this.loading = false;*/
  }

  /*verifyPass(): boolean {
    if (this.user.password !== this.vpass) {
      this.error = "password doesn't match!";
      return false;
    } else this.error = null;
    return true;
  }*/
}
