particlesJS("particles-js", {
  particles: {
    number: {
      value: 210,
      density: {
        enable: true,
        value_area: 1500,
      },
    },
    color: {
      value: ['#fff'],
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 10,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: false,
        speed: 8,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "bounce",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: false,
        //mode: "repulse",
      },
      //resize: true,
    },
    // modes: {
    //   repulse: {
    //     distance: 100,
    //     duration: 0.4,
    //   },
    //   push: {
    //     particles_nb: 4,
    //   },
    //   remove: {
    //     particles_nb: 2,
    //   },
    // },
  },
  retina_detect: true,
});
