import { Component, EventEmitter, HostBinding, OnInit, Output } from '@angular/core';

@Component({
    selector: 'fg-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnInit {
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
