function scrollToContent(tabNumber) {
    const content = document.getElementById(`content${tabNumber}`);
    const contentOffset = content.getBoundingClientRect().top;
    const navbarHeight = 100; // Adjust this to your navbar height if applicable
    const scrollOptions = {
      behavior: "smooth",
      block: "start"
    };
    window.scrollBy({
      top: contentOffset - navbarHeight,
      left: 0,
      behavior: "smooth"
    });
  }
  
//   window.addEventListener("DOMContentLoaded", loading)
// function loading() {
//   var percents = [0.25,0.5,0.75,1],
//     step = 0,
//     truckLoopDur = 10,
//       fill = function() {
//       let fillEl = document.querySelector(".progress-fill");
//       fillEl.style.transform = "scaleY(" + percents[step] + ")";
//       ++step;

//       if (step < percents.length) {
//         setTimeout(fill, (truckLoopDur * 1e3)/2);
//       }
//       };
//   setTimeout(fill, (truckLoopDur * 1e3)/4);
// }

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
   
