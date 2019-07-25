import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { ReservationInfoService } from '../../../core/service/reservation-info.service';
import { RoomListService } from 'src/app/core/service/room-list.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isMain: boolean;
  myPage = false;

  constructor(
    private router: Router,
    public authService: AuthService,
    public reservationInfoService: ReservationInfoService,
    private roomListService: RoomListService
  ) {}

  ngOnInit() {
    this.isMain = this.router.url === '/home' ? true : false;
  }
  showroomList(val) {
    this.reservationInfoService.reservationInfoObj.destination = val;
    this.roomListService.getRoomList();
  }

  signOutBtn() {
    this.authService.signOutUser();
  }
}
