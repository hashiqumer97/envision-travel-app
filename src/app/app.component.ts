import { Component } from '@angular/core';
import { freeApiService } from './services/freeapi.service';
import { Comments } from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'travel-app';

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
}


