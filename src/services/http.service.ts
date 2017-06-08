import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CacheService } from "ionic-cache";

import 'rxjs/add/operator/map'

@Injectable()
export class CustomHttp {

    constructor(public http: Http, private cacheService: CacheService) {
        cacheService.setDefaultTTL(60 * 60 * 24 * 7);
    }

    public get(url) {
        let cacheKey = url;
        let request = this.http.get(url).map(res => res.json());

        return this.cacheService.loadFromObservable(cacheKey, request);

    }


}