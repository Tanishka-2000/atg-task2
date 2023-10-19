gsap.registerPlugin(ScrollTrigger) 

// gsap.to('.square', {
//     x: 700,
//     // duration: 3,
//     scrollTrigger: {
//         trigger: '.square',
//         start: 'top -20%',
//         end: 'top 20%',
//         scrub: 1,
//         markers: true,
//     },
// })

// gsap.to('.scroller1', {
//     y: '-151%'
// })

// gsap.fromTo(
//     '.scroller1', 
//     {
//         y: '-86%',
//     },
//     {
//         y: '156%',
//         scrollTrigger: {
//             trigger: '.div2',
//             start: 'top 0%',
//             end: 'bottom -600%',
//             scrub: true,
//         }
//     }
// )

// gsap.to('.scroller2', {
//     y: '0%',
//     scrollTrigger: {
//         trigger: '.div2',
//         start: 'top 0%',
//         end: 'top -100%',
//         scrub: 1,
//         markers: true,
//     }
// })

ScrollTrigger.create({
    trigger: '.right',
    start: 'top 1px',
    end: 'top -200px',
    toggleClass: { targets: '.main', className: 'page1'}
})

ScrollTrigger.create({
    trigger: '.right',
    start: 'top -200px',
    end: 'top -400px',
    toggleClass: { targets: '.main', className: 'page2'}
})

ScrollTrigger.create({
    trigger: '.right',
    start: 'top -400px',
    end: 'top -600px',
    toggleClass: { targets: '.main', className: 'page3'}
})

ScrollTrigger.create({
    trigger: '.right',
    start: 'top -600px',
    end: 'top -800px',
    toggleClass: { targets: '.main', className: 'page4'}
})

ScrollTrigger.create({
    trigger: '.right',
    start: 'top -800px',
    end: 'top -1000px',
    toggleClass: { targets: '.main', className: 'page5'}
})

ScrollTrigger.create({
    trigger: '.right',
    start: 'top -1000px',
    end: 'top -1200px',
    toggleClass: { targets: '.main', className: 'page6'}
})

ScrollTrigger.create({
    trigger: '.right',
    start: 'top -1200px',
    // end: 'top -1400px',
    toggleClass: { targets: '.main', className: 'page7'}
})