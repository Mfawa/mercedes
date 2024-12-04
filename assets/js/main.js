/**
* Template Name: MyResume
* Updated: Jun 13 2023 with Bootstrap v5.3.0
* Template URL: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  // on('click', '.mobile-nav-toggle', function(e) {
  //   select('body').classList.toggle('mobile-nav-active')
  //   this.classList.toggle('bi-list', openNav())
  //   this.classList.toggle('bi-x')
  // })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  // on('click', '.scrollto', function(e) {
  //   if (select(this.hash)) {
  //     e.preventDefault()

  //     let body = select('body')
  //     if (body.classList.contains('mobile-nav-active')) {
  //       body.classList.remove('mobile-nav-active')
  //       let navbarToggle = select('.mobile-nav-toggle')
  //       navbarToggle.classList.toggle('bi-list')
  //       navbarToggle.classList.toggle('bi-x')
  //     }
  //     scrollto(this.hash)
  //   }
  // }, true)

  // /**
  //  * Scroll with ofset on page load with hash links in the url
  //  */
  // window.addEventListener('load', () => {
  //   if (window.location.hash) {
  //     if (select(window.location.hash)) {
  //       scrollto(window.location.hash)
  //     }
  //   }
  // });

  // /**
  //  * Preloader
  //  */
  // let preloader = select('#preloader');
  // if (preloader) {
  //   window.addEventListener('load', () => {
  //     preloader.remove()
  //   });
  // }

  // /**
  //  * Hero type effect
  //  */
  // const typed = select('.typed')
  // if (typed) {
  //   let typed_strings = typed.getAttribute('data-typed-items')
  //   typed_strings = typed_strings.split(',')
  //   new Typed('.typed', {
  //     strings: typed_strings,
  //     loop: true,
  //     typeSpeed: 100,
  //     backSpeed: 50,
  //     backDelay: 2000
  //   });
  // }

  // /**
  //  * Skills animation
  //  */
  // let skilsContent = select('.skills-content');
  // if (skilsContent) {
  //   new Waypoint({
  //     element: skilsContent,
  //     offset: '80%',
  //     handler: function(direction) {
  //       let progress = select('.progress .progress-bar', true);
  //       progress.forEach((el) => {
  //         el.style.width = el.getAttribute('aria-valuenow') + '%'
  //       });
  //     }
  //   })
  // }

  // /**
  //  * Porfolio isotope and filter
  //  */
  // window.addEventListener('load', () => {
  //   let portfolioContainer = select('.portfolio-container');
  //   if (portfolioContainer) {
  //     let portfolioIsotope = new Isotope(portfolioContainer, {
  //       itemSelector: '.portfolio-item'
  //     });

  //     let portfolioFilters = select('#portfolio-flters li', true);

  //     on('click', '#portfolio-flters li', function(e) {
  //       e.preventDefault();
  //       portfolioFilters.forEach(function(el) {
  //         el.classList.remove('filter-active');
  //       });
  //       this.classList.add('filter-active');

  //       portfolioIsotope.arrange({
  //         filter: this.getAttribute('data-filter')
  //       });
  //       portfolioIsotope.on('arrangeComplete', function() {
  //         AOS.refresh()
  //       });
  //     }, true);
  //   }

  // });

  // /**
  //  * Initiate portfolio lightbox 
  //  */
  // const portfolioLightbox = GLightbox({
  //   selector: '.portfolio-lightbox'
  // });

  // /**
  //  * Initiate portfolio details lightbox 
  //  */
  // const portfolioDetailsLightbox = GLightbox({
  //   selector: '.portfolio-details-lightbox',
  //   width: '90%',
  //   height: '90vh'
  // });

  // /**
  //  * Portfolio details slider
  //  */
  // new Swiper('.portfolio-details-slider', {
  //   speed: 400,
  //   loop: true,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false
  //   },
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true
  //   }
  // });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });


  
})()

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

function dropdown() {
  let drop = document.getElementById('drop');
  let drop2 = document.getElementById('drop2');
  if (drop2.style.display == "block") {
    cancel()
    drop.style.display = "block";
  } else {
    drop.style.display = "block";
  }
}

function dropdown2() {
  let drop = document.getElementById('drop');
  let drop2 = document.getElementById('drop2');
  if (drop.style.display == "block") {
    cancel()
    drop2.style.display = "block";
  } else {
    drop2.style.display = "block";
  }
}

function cancel() {
  let drop = document.getElementById('drop');
  let drop2 = document.getElementById('drop2');
  drop.style.display = "none";
  drop2.style.display = "none";
}


function openNav() {
  let nav = document.getElementById('navbar');
  let menu = document.getElementById('open');
  let block = document.getElementById('close');
  if (nav.style.width = "0") {
    nav.style.width = "360px"
    block.style.display = "block"
    menu.style.display = "none"
  } else {
    closeNav()
  }
}

function closeNav() {
  let nav = document.getElementById('navbar');
  let menu = document.getElementById('open');
  let block = document.getElementById('close');
  nav.style.width = "0"
  block.style.display = "none"
    menu.style.display = "block"
}

function change(nav) {
  nav.classList.toggle('bi-x')
}

   
function test() {
  var uid = document.getElementById('username').value;
  var pw = document.getElementById('password').value;
  var email = document.getElementById('email').value;


  var user = localStorage.setItem("uid", uid);
  var pass = localStorage.setItem("password", pw);
  var em = localStorage.setItem("email", email);


  var user = localStorage.getItem("uid", uid);
  var pass = localStorage.getItem("password", pw);
  var em = localStorage.getItem("email", email);

  var a,b,c;
  a = "additional";
  b = 12345;
  c = "additional"

  if (a==user && b==pass && c==em) {
    alert("login successful");
    // fs.writeFile('output.txt',"daa",
    //   (err) => {
    //     if(err) throw err;
    //   }
    // )
  } else {
    alert("invalid ")
  }

  function CreateText() {
    var blob = new blob([user],{
      type: "text/plin';charset=utf-8"
    });
    saveAs(blob, "download.txt");
  }

}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}