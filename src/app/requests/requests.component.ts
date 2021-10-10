import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent implements OnInit {
  constructor(private requestService: RequestsService) {}

  requests: any = {
    friendRequests: [],
    sentRequests: [],
  };

  ngOnInit(): void {
    this.requestService.getAll().subscribe((data) => {
      this.requests = data;
    });
  }

  accept(id: any) {
    this.requestService.accept(id).subscribe(() => {
      this.requests.friendRequests = this.requests.friendRequests.filter(
        (rq: any) => rq._id !== id
      );
    });
  }

  decline(id: any) {
    this.requestService.kill(id).subscribe(() => {
      this.requests.friendRequests = this.requests.friendRequests.filter(
        (rq: any) => rq._id !== id
      );
    });
  }

  cancel(id: any) {
    this.requestService.kill(id).subscribe(() => {
      this.requests.sentRequests = this.requests.sentRequests.filter(
        (rq: any) => rq._id !== id
      );
    });
  }
}
