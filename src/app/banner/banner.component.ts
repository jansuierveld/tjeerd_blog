import {Component, OnInit, Input, AfterViewInit} from '@angular/core';
import { environment } from '../../environments/environment';
import { Banner } from '../shared/banner/banner.model';
@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements AfterViewInit {

    @Input() banner: Banner | undefined;
    showAd = environment.adsense.show;

    constructor() {
    }

    ngAfterViewInit() {
        setTimeout(() => {
            try {
                (window['adsbygoogle'] = window['adsbygoogle'] || []).push({
                    overlays: {bottom: true}
                });
            } catch (e) {
                console.error(e);
            }
        }, 0);
    }

}
