import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../services/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  constructor(private notificationService: NotificationsService) {}

  ngOnInit(): void {
    this.notificationService.getAll().subscribe((data) => {
      console.log({ data });
    });
  }
}
