import Highway from '@dogstudio/highway';
import Fade from './transition';
import {initMagicScroll} from './works';
import { initAbout } from './about';

function initPageTransition() {
    const H = new Highway.Core({
        // works: Fade,
        // about: Fade
    
        transitions: {
            default: Fade
        }
    });
}

window.addEventListener('load', function(){
    initPageTransition();
    initMagicScroll();
    initAbout();
});