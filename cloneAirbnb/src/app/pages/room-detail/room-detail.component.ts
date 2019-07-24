import { Component, OnInit, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { UrlRememberService } from 'src/app/core/service/url-remember.service';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.scss']
})
export class RoomDetailComponent implements OnInit, AfterViewInit {
  minDate: Date;
  maxDate: Date;
  modalRef: BsModalRef;
  Allcounter = 1;
  Adultcounter = 1;
  Childcounter = 0;
  Youngcounter = 0;
  price: number;
  min_stay:number;
  appUrl: string = environment.appUrl;
  totalprice:number;
  serviceprice:number;
  Accommodation:number;
  finalprice:number;


  @ViewChild('galleryTop', { static: true }) galleryTop;
  @ViewChild('galleryThumbs', { static: true }) galleryThumbs;
  isOpen = false;

  galleryTopConfig: SwiperConfigInterface = {
    spaceBetween: 10,
    effect: 'fade',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  };
  galleryThumbsConfig: SwiperConfigInterface = {
    spaceBetween: 10,
    slidesPerView: 9,
    centeredSlides: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    slideToClickedSlide: true,
  };

  config = {
    ignoreBackdropClick: true
  };

  constructor(
    private modalService: BsModalService,
    private http: HttpClient,
    private router: Router,
    private urlRemember: UrlRememberService
    ) 
    {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  roomlistopenModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  

  ngOnInit() {
    this.urlRemember.currentUrl = this.router.url;

    // this.http.get(`${this.appUrl}/rooms/`)
    //   .subscribe(res => console.log(res))

    this.http.get(`${this.appUrl}/rooms/5/`)
      .subscribe( (res: any) => { 
        console.log(res)
        this.price = res.price;
        this.min_stay = res.min_stay;
        this.totalprice = this.price* this.min_stay * this.Allcounter;
        this.serviceprice = this.totalprice * 0.13;
        this.Accommodation = this.serviceprice *0.10;
        this.finalprice = this.totalprice + this.serviceprice + this.Accommodation;
    })
  }

  increase(n: number) {
    // console.log(n)
    if(n === 1){
      this.Adultcounter++;
    } else if (n== 2) {
      this.Childcounter++;
    } else if (n==3) {
      this.Youngcounter++;
    }
    this.Allcounter = this.Adultcounter + this.Childcounter + this.Youngcounter;
    this.totalprice = this.price* this.min_stay * this.Allcounter;
    this.serviceprice = this.totalprice * 0.13;
    this.Accommodation = this.serviceprice *0.10;
    this.finalprice = this.totalprice + this.serviceprice + this.Accommodation;
  }

  decrease(n : number) {
    if(n==1){
      if (this.Adultcounter === 0) { return; }
      this.Adultcounter--;
    } else if (n==2) {
      if (this.Childcounter === 0) { return; }
      this.Childcounter--;
    } else if (n==3) {
      if (this.Youngcounter === 0) { return; }
      this.Youngcounter--;
    }
    this.Allcounter = this.Adultcounter + this.Childcounter + this.Youngcounter;
    this.totalprice = this.price* this.min_stay * this.Allcounter;
    this.serviceprice = this.totalprice * 0.13;
    this.Accommodation = this.serviceprice *0.10;
    this.finalprice = this.totalprice + this.serviceprice + this.Accommodation;
  }

  ngAfterViewInit() {
    this.galleryTop.nativeElement.swiper.controller.control = this.galleryThumbs.nativeElement.swiper;
    this.galleryThumbs.nativeElement.swiper.controller.control = this.galleryTop.nativeElement.swiper;
  }
}
