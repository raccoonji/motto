const words = gsap.utils.toArray('.blur-word');

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: container,
    start: "top top",
    end: "+=100%",
    scrub: true,
    pin: true,
  }
});

words.forEach(word => {
  tl.to(word, {filter: 'blur(0px)', duration: 0.3, delay: 0.001 }, '+=0.2');
});

// youtube player
/*
let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '315',
        width: '560',
        videoId: 'dQw4w9WgXcQ', 
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
} */