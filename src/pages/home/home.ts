import { Component } from '@angular/core';
import { CustomHttp } from '../../services/http.service';

import { Movie } from '../../models/movie';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public loading = false;
  public movies = Array<Movie>();
  constructor(public customHttp: CustomHttp) {

    this.loading = true;
    this.customHttp.get('http://s3.amazonaws.com/vodassets/showcase.json').subscribe(data => {
      this.loading = false;
      this.movies = data;
    })


  }
}
