import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';

import { BsDatepickerModule, BsDropdownModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal/';
import { Ng5SliderModule } from 'ng5-slider';
import { SwiperModule } from 'ngx-swiper-wrapper';

import { HomeComponent } from './home/home.component';
import { StorageListComponent } from './storage-list/storage-list.component';
import { YourTripComponent } from './your-trip/your-trip.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { RoomRegulationComponent } from './room-regulation/room-regulation.component';
import { RoomdetailInfoComponent } from './roomdetail-info/roomdetail-info.component';
import { RoomdetailpaymentComponent } from './roomdetailpayment/roomdetailpayment.component';
import { GuestInfoComponent } from './guest-info/guest-info.component';
import { PaymentComponent } from './payment/payment.component';

import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    HomeComponent,
    StorageListComponent,
    YourTripComponent,
    RoomListComponent,
    RoomRegulationComponent,
    GuestInfoComponent,
    PaymentComponent,
    RoomDetailComponent,
    RoomdetailpaymentComponent,
    RoomdetailInfoComponent,
    RoomDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    Ng5SliderModule,
    BsDatepickerModule.forRoot(),
    AuthModule,
    ModalModule.forRoot(),
    SwiperModule,
    BsDropdownModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA3mYS53qBU6qHCKhyxke8JoYzrD5r2LJo'
    })
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class PagesModule {}
