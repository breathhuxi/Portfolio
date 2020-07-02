export function initMagicScroll() {

    // register gsap ScrollTrigger plugin
    // if (typeof window !== "undefined") {
    //     gsap.registerPlugin(ScrollTrigger);
    //     console.log('scroll trigger registered');
    // }
    
    const controller = new ScrollMagic.Controller();
    var categories = document.querySelectorAll('.category-wrapper');
    categories.forEach(function(category){
        var parallaxTl = new gsap.timeline({ //need to new an instance
            ease: 'power3.easeInOut'
        });
    
        var title = category.querySelector('.category-title');
        parallaxTl.from(title, {duration: 1.5, autoAlpha: 0, y: '+10vh'}, 0);
    
        var projects = category.querySelectorAll('.project-thumb-wrapper');
        projects.forEach(function(project, index){
            parallaxTl.from(project, {duration: 2.5, y: '+20vh'}, 0.3 * index);
        });

        const scene = new ScrollMagic.Scene({
            triggerElement: category,
            duration: '100%', //otherwise jitter
            triggerHook: 0,
            offset: -320
        }).setTween(parallaxTl)
            // .addIndicators()
            .addTo(controller);
    
        // projects.forEach(function(project){
        //     gsap.to(project, {opacity: '0.5', ScrollTrigger: {
        //         trigger: project,
        //         start: 'bottom top',
        //         scrub: true,
        //         markers: true
        //     }});
        // });
    });
};