import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-scroll-slider',
  templateUrl: './scroll-slider.component.html',
  styleUrls: ['./scroll-slider.component.css']
})
export class ScrollSliderComponent implements OnInit, AfterViewInit {

  @Input() items: any[] = [];

  public swiper: Swiper = new Swiper('');

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper', {
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15,
    });
  }
}
