import Highway from '@dogstudio/highway';
import {TimelineLite} from 'gsap';
// import {TweenLite} from 'gsap';
import {initMagicScroll} from './works';
import { initAbout } from './about';

class Fade extends Highway.Transition {
    in ({from, to, done}) {

        const tl = new TimelineLite();
        // console.log(from.querySelector("nav"));
        // const t = from.querySelector("nav").getBoundingClientRect().top; //fixed always 0
        // const t = document.documentElement.scrollTop || document.body.scrollTop;
        const t = window.pageYOffset;
        // console.log(t);
        console.log(to);
        const h = window.getComputedStyle(to).getPropertyValue('min-height');
        console.log(h);

        if (from.className === 'works') {
            sessionStorage.setItem('worksScrollY', t);
        }

        tl
            .fromTo(to, .5, {left: '-100%', top: t, height: '0.5vh'}, {left: '0%', height: '0.5vh'})
            .fromTo(to, .5, {height: '0.5vh', top: t}, {height: h, onComplete: function(){
                from.remove();

                to.style.top = 0;
                
                console.log(to.className);
                let worksScrollY = sessionStorage.getItem('worksScrollY');
                if (to.className === 'works') {
                    // console.log(worksScrollY);
                    window.scroll(0, worksScrollY); // does not work??? needs to store the scrollY across pages
                    initMagicScroll(); // need to reinitialize magic scroll when coming back to works page
                } else if (window.scrollY) {
                    window.scroll(0, 0); // reset the scroll position to the top left of the document.
                }
                if (to.className === 'about') {
                    initAbout();
                    console.log('about init');
                }

                document.querySelector('.' + to.className).style.minHeight = h;
                document.querySelector('.' + to.className).style.height = 'auto';
                // let H = window.getComputedStyle(document.querySelector("body")).getPropertyValue('height'); //never set always 0
                // console.log(H);
                
                done();
            }})
            .fromTo(to.children[0], 0.5, {opacity: 0}, {opacity: 1})
            .fromTo(to.lastElementChild, 0.5, {opacity: 0}, {opacity: 1});

    }
    out ({from, done}) {
        done();
    }
}

export default Fade;