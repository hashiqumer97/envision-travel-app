import { Component } from '@angular/core';
import { freeApiService } from './services/freeapi.service';
import { Comments } from './models/models';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'travel-app';
  subemail: any;

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

  subclick() {
    alert('An email has been sent successfully to confirm your subscription.');
  }

}


