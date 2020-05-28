import { Component } from '@angular/core';
import { freeApiService } from './services/freeapi.service';
import { Comments } from './models/models';
import { stringify } from 'querystring';
declare var jQuery: 'JQueryStatic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'travel-app';
  subemail: any;
  slideIndex: any;


  constructor(private _freeApiService: freeApiService) {

  }
  lstmodels: Comments[];

  ngOnInit() {
    this._freeApiService.getmodels()
      .subscribe(
        data => {
          this.lstmodels = data;
        }
      );

  }
  ngAfterViewInit() {
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {

      var i;
      var slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }

}

  subclick() {
    alert('An email has been sent successfully to confirm your subscription.');
  }


}




