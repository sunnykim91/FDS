import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { StorageListComponent } from './storage-list/storage-list.component';
import { YourTripComponent } from './your-trip/your-trip.component';
import { RoomListComponent } from './room-list/room-list.component'
import { RoomDetailComponent } from './room-detail/room-detail.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'storageList', component: StorageListComponent },
  { path: 'yourTrip', component: YourTripComponent },
  { path: 'roomList', component: RoomListComponent },
  { path: 'roomdetail', component: RoomDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
