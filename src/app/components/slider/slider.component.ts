import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, AfterViewInit{

  @Input() heroes: any[] = [];

  public swiper: Swiper = new Swiper('');

  constructor() { }

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper', {
      loop: true,
      autoplay:{
        delay: 2500,
        disableOnInteraction: false
      }
    });
  }

  ngOnInit(): void {}

  onSlidePrev(){    
    this.swiper.slidePrev();
  }

  onSlideNext(){
    this.swiper.slideNext();
  }

}
