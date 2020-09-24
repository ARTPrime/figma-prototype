import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';

export const navExpand = trigger('navExpand', [
    state('void', style({ width: 0 })),
    transition(':enter, :leave', [animate(400)]),
]);

export const slideInRight = trigger('slideInRight', [
    transition(':enter', [
        query(
            '.slide-item',
            style({ transform: 'translateX(5rem)', opacity: 0 })
        ),
        query(
            '.slide-item',
            stagger(
                50,
                animate(450, style({ transform: 'translateX(0)', opacity: 1 }))
            )
        ),
    ]),
    transition(':leave', [
        query('.slide-item', style({ opacity: 1 })),
        query(
            '.slide-item',
            animate(500, style({ transform: 'translateX(5rem)', opacity: 0 }))
        ),
    ]),
]);
