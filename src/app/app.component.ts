import { Component, HostBinding, OnInit } from '@angular/core';

import { navExpand, slideInRight } from './animations/navbar.animations';

@Component({
    selector: 'fg-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
    animations: [navExpand, slideInRight],
})
export class AppComponent implements OnInit {
    public user: {
        name: string;
        displayName: string;
        image: string;
    };
    @HostBinding('class.action-selected') public action: 'login' | 'register';

    public ngOnInit(): void {
        this.user = {
            name: '@pam_beesly',
            displayName: 'Pam Beesly',
            image: 'assets/images/pam.jpg',
        };
    }

    public onActionClick(action: 'login' | 'register') {
        this.action = this.action && this.action === action ? null : action;
    }
}
