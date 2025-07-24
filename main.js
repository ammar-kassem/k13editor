let btnMenu = document.getElementById('btn-menu');
let Menu = document.querySelector('.nav-links');
let btn = document.getElementById('scrolling');
let header = document.querySelector('header');
let skills = document.querySelector('.skills');
let spans = document.querySelectorAll('.skill-fill')
let img = document.querySelector('.about-img img')
let nums = document.querySelectorAll(".num");
let section = document.querySelector(".stat");
let started = false; // Function Started ? No


function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

window.onscroll = function() {
  if (this.scrollY >= 150) {
    header.classList.add('active')
    btn.style.display = 'block';
    img.style.opacity = '1';
  }
  else {
    header.classList.remove('active')
    btn.style.display = 'none';
  }
  btnMenu.classList.remove('fa-times')
  Menu.classList.remove('active')
  if (window.scrollY >= skills.offsetTop - 250) {

    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  };

  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
}





btnMenu.onclick = function() {
  btnMenu.classList.toggle('fa-times');
  Menu.classList.toggle('active')
}
btn.onclick = function() {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: 'smooth',

  })
}


function sentMs() {
  let number = '+963986258215';
  let name = document.getElementById('name').value + document.getElementById('lastName').value;
  let phone = document.getElementById('phone').value || 'Unknown';
  let email = document.getElementById('email').value || 'Unknown';
  let massege = document.getElementById('massege').value;


  var url = "https://wa.me/" + number + "?text=" +
    "Name : " + name + "%0a" +
    "Phone : " + phone + "%0a" +
    "Email : " + email + "%0a" +
    "Message : " + massege + "%0a%0a";

  window.open(url, '_blank').focus();

}