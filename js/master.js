let nums = document.querySelectorAll(".testimonail .services-content p[data-goal]");
let section = document.querySelector(".testimonail");
let started = false;

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5, // Adjust the threshold as needed
};

let observer = new IntersectionObserver(callback, options);

observer.observe(section);

function callback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !started) {
      nums.forEach((num) => {
        startCount(num);
      });
      started = true;
      observer.unobserve(section); // Stop observing once the section is in view
    }
  });
}

function startCount(el) {
  let goal = parseInt(el.dataset.goal);
  let currentCount = 0;
  let increment = Math.ceil(goal / 100); // Adjust the increment based on the goal value

  let count = setInterval(() => {
    currentCount += increment;
    el.textContent = currentCount;

    if (currentCount >= goal) {
      el.textContent = goal; // Set the final count to the goal value
      clearInterval(count);
    }
  }, 10);
}
////////////////////////////////////////////////////////
// Get all elements with the portfolio-lightbox class
var lightboxElements = document.querySelectorAll('.portfolio-lightbox');
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    var x_icon=document.querySelector(".lightbox .x-icon");
    var currentIndex = 0;

    lightboxElements.forEach(function(element, index) {
      element.addEventListener('click', function(event) {
        event.preventDefault();
        currentIndex = index;
        updateLightboxImage();
        lightbox.style.display = 'flex';
      });
    });

    x_icon.addEventListener('click', function() {
      lightbox.style.display = 'none';
   });
  //   lightbox.addEventListener('click', function() {
  //     lightbox.style.display = 'none';
  //  });

    function changeImage(direction) {
      currentIndex += direction;
      if (currentIndex < 0) {
        currentIndex = lightboxElements.length - 1;
      } else if (currentIndex >= lightboxElements.length) {
        currentIndex = 0;
      }
      updateLightboxImage();
    }

    function updateLightboxImage() {
      var imgSrc = lightboxElements[currentIndex].getAttribute('href');
      lightboxImg.setAttribute('src', imgSrc);
    }
//////////////////////////////////////////////////////////
window.addEventListener('scroll', function() {
  var homeSection = document.getElementById('home');
  var icon = document.querySelector('.arrow-up');

  // Calculate the viewport height
  var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  // Calculate the scroll position
  var scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;

  // If the scroll position is greater than the viewport height, show the icon
  if (scrollPosition > viewportHeight) {
    icon.style.visibility = 'visible';
  } else {
    icon.style.visibility = 'hidden';
  }
});

