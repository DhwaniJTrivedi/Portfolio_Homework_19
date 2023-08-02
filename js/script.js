// function scrollToContent(tabNumber) {
//     const content = document.getElementById(`content${tabNumber}`);
//     const contentOffset = content.getBoundingClientRect().top;
//     const navbarHeight = 100; // Adjust this to your navbar height if applicable
//     const scrollOptions = {
//       behavior: "smooth",
//       block: "start"
//     };
//     window.scrollBy({
//       top: contentOffset - navbarHeight,
//       left: 0,
//       behavior: "smooth"
//     });
//   }
document.addEventListener('DOMContentLoaded', function () {
  const particlesContainer = document.querySelector('.maincontent');
  const particleCount = 100; // Adjust this value to change the number of particles
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('span');
    particle.className = 'particle';
    particlesContainer.appendChild(particle);
    particles.push(particle);

    // Randomly position the particle
    const positionX = Math.random() * particlesContainer.clientWidth;
    const positionY = Math.random() * particlesContainer.clientHeight;
    particle.style.left = positionX + 'px';
    particle.style.top = positionY + 'px';
  }
});
$(document).ready(function() {
  $('.navbar-toggler').on('click', function() {
    $('#navbarSupportedContent').collapse('toggle');
  });
});
window.addEventListener("DOMContentLoaded", loading);

  function loading() {
    var percents = [0.25, 0.5, 0.75, 1],
      step = 0,
      truckLoopDur = 10,
      fill = function() {
        let fillEl = document.querySelector(".progress-fill");
        fillEl.style.transform = "scaleY(" + percents[step] + ")";
        ++step;

        if (step < percents.length) {
          setTimeout(fill, (truckLoopDur * 1e3) / 2);
        } else {
          // Remove the preloader after the loading animation completes
          document.querySelector(".preloader").style.display = "none";
          document.querySelector(".maincontent").style.visibility = "visible";
          var mainContent = document.querySelector(".maincontent");
          mainContent.style.display = "block";
          mainContent.style.opacity = 1;
        }
      };
    setTimeout(fill, (truckLoopDur * 1e3) / 4);
  }
   
  document.querySelector(".container_subtrack").addEventListener("click", () => {
    // Open the link in a new window
    window.open("https://docs.google.com/presentation/d/194sUtutDolPjAD480f1m5HSbz1_ydFZWQ4CVtW-dW1s/edit?usp=sharing", "_blank");
  });
  document.querySelector(".container_artscape").addEventListener("click", () => {
    // Open the link in a new window
    window.open("https://docs.google.com/presentation/d/1m3prUtj1v4DuwcZ7XicW9-4ni3KNs65TypE2CmCusFQ/edit?usp=sharing", "_blank");
  });
  document.querySelector(".container_usdoi").addEventListener("click", () => {
    // Open the link in a new window
    window.open("https://docs.google.com/presentation/d/1pl4L6lyyOs5nXY_gO50KO2ziFp5Tg-F8cURR_SLkcPg/edit?usp=sharing", "_blank");
  });
  $(document).on("scroll", function(){
    var pixels = $(document).scrollTop();
    var pageHeight = $(document).height() - $(window).height();
    var progress = 100 * pixels / pageHeight;
    
    $("div.progress").css("width", progress + "%");
  });
  $(document).ready(function() {
    $("#submitForm").submit(function(event) {
      event.preventDefault();
      // Your form submission logic here
      // You can add an AJAX request here to submit the form data to the server if needed

      // Show the success modal
      $("#exampleModal").modal("show");
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    var contactLink = document.querySelector('a[href="#contact"]');
    if (contactLink) {
      contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        var formSection = document.getElementById('contact');
        if (formSection) {
          formSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  });
  window.onscroll = function() {myFunction()};

  document.addEventListener('DOMContentLoaded', function() {
    var projectLink = document.querySelector('a[href="#heroGrid_subtrack"]');
    if (projectLink) {
      projectLink.addEventListener('click', function(event) {
        event.preventDefault();
        var projectSection = document.getElementById('heroGrid_subtrack');
        if (projectSection) {
          projectSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  });
  window.onscroll = function() {myFunction()};
