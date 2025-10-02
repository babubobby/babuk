particlesJS("particles-js", {
  particles: {
    number: {
      value: 100, // increase for more particles
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#000000" // dark particles
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5, // more visible
      random: false,
      anim: {
        enable: false
      }
    },
    size: {
      value: 4, // slightly bigger
      random: true,
      anim: {
        enable: false
      }
    },
    line_linked: {
      enable: true,
      distance: 130,
      color: "#000000", // black connecting lines
      opacity: 0.4, // more visible lines
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse" // optional interactive effect
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});
