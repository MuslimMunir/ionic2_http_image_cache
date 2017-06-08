import { Component, Input } from '@angular/core';

@Component({
    selector: 'loader',
    template: `
        <div class="text-center" *ngIf="loading">
            <ion-spinner name="bubbles"></ion-spinner>
        <div>`
})
export class LoaderComponent {
    @Input() loading;
}
