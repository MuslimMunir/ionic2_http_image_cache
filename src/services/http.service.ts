import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CacheService } from "ionic-cache";

import 'rxjs/add/operator/map'

@Injectable()
export class CustomHttp {
    private base_url = "http://s3.amazonaws.com/vodassets/"
    constructor(private http: Http, private cacheService: CacheService) {
        cacheService.setDefaultTTL(60 * 60 * 24 * 7);
    }

    public get(url) {
        let cacheKey = url;
        let request = this.http.get(this.base_url + url).map(res => res.json());

        return this.cacheService.loadFromObservable(cacheKey, request);

    }


}