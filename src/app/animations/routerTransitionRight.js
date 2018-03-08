// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style, query, group } from '@angular/animations';
 
export const routerTransitionRight =  
// trigger name for attaching this animation to an element using the [@triggerName] syntax
trigger('routerTransitionRight', [

    // end state styles for route container (host)
    state('*', style({
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    })),

    // route 'enter' transition
    transition(':enter', [

        // styles at start of transition
        style({
            // start with the content positioned off the right of the screen,
            // -400% is required instead of -100% because the negative position adds to the width of the element
            right: '-400%',
        }),

        // animation and styles at end of transition
        animate('2s ease-in-out', style({
            // transition the right position to 0 which slides the content into view
            right: 0,
        }))
    ]),

    // route 'leave' transition
    transition(':leave', [
        // animation and styles at end of transition
        animate('2s ease-in-out', style({
            // transition the right position to -400% which slides the content out of view
            right: '-400%',
        }))
    ])
]);