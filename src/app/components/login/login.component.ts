import { Component, EventEmitter, HostBinding, OnInit, Output } from '@angular/core';

@Component({
    selector: 'fg-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
    @Output() public goBack: EventEmitter<boolean> = new EventEmitter<
        boolean
    >();
    @HostBinding('class.fg-form') private isForm = true;
    constructor() {}

    ngOnInit(): void {}

    public onGoBack() {
        this.goBack.emit(true);
    }
}
