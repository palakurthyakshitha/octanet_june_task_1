window.onload = yourCode;
function yourCode() {
   // Navbar
  let menu = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  menu.onclick  = (open) => {
      navbar.classList.toggle('active');
  }

  window.onscroll = () => {
      navbar.classList.remove('active');
  }
}
gsap.from('.logo',{opacity: 0, duration: 1, delay:2, y:10})
gsap.from('.navbar a',{opacity: 0, duration: 1, delay:2.1, y:30, stagger:0.2})
gsap.from('.home h4',{opacity: 0, duration: 1, delay:1, y:20, stagger:0.2})
gsap.from('.home h1',{opacity: 0, duration: 1, delay:2, y:20, stagger:0.2})
gsap.from('.getintouch',{opacity: 0, duration: 1, delay:1, y:20, stagger:0.2})
gsap.from('.right img',{opacity: 0, duration: 1, delay:2, y:10})
gsap.from('.middle h1',{opacity: 0, duration: 1, delay:1.5, y:10})
gsap.from('.middle p',{opacity: 0, duration: 1, delay:2, y:10})
gsap.from('.middle button',{opacity: 0, duration: 1, delay:2.2, y:30, stagger:0.3})
gsap.from('.left',{opacity: 0, duration: 1, delay:1, y:30, stagger:0.3})
gsap.from('.inclusion h1',{opacity: 0, duration: 1, delay:1, y:30, stagger:0.3})
gsap.from('.inclusion h4',{opacity: 0, duration: 1, delay:1.5, y:30, stagger:0.3})
gsap.from('.inclusion button',{opacity: 0, duration: 1, delay:1.7, y:30, stagger:0.3})