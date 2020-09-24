import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
    selector: 'fg-logo',
    templateUrl: './logo.component.html',
    styleUrls: ['./logo.component.sass'],
})
export class LogoComponent implements OnInit {
    @Input() public size: 'small' | 'normal';
    @HostBinding('class') public sizeClass: string;

    constructor() {}

    ngOnInit(): void {
        this.sizeClass = this.size;
    }
}
