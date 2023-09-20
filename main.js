//Таймер
let time = 18000;
const countDownEl = document.getElementById
("countdown");
setInterval(updateCountdown, 1000);
function updateCountdown() {
  let hours = Math.floor(time / 3600);
  if(hours < 10) hours = '0' + hours
  let minutes = Math.floor((time-((hours)*3600))/60);
  if(minutes < 10) minutes = '0' + minutes
  let seconds = Math.floor(time % 60);
  seconds = seconds < 10 ? "0" + seconds : seconds;
  clock.textContent = `${hours}:${minutes}:${seconds}`;
  time--;

  //Изменение цены при истечении времени скидки 
  if(hours == '00' && (minutes == '00' && seconds == '00')) {
    document.querySelector('.header_h3').innerHTML = 'R 250.00';
    document.querySelector('.header_h3').style.paddingTop = '12px';
    document.querySelector('.header_h4').hidden = true
  }
}


//слайдер
  let btns = document.querySelectorAll('.slider_item')
  for(let btn of btns) {
    btn.onclick = function() {
      document.querySelector('.slider_breadcrumbs .active').classList.remove('active')
      this.classList.add('active')
      document.querySelector('.content_img').setAttribute('src', `img/img/${this.innerHTML}.png`);
    }
  }


//кликабельные превьюшки
let imgs = document.querySelectorAll('.conent_flex-item')
for(let img of imgs) {
    img.onclick = function() { 
        document.querySelector('.content_img-flex .active').classList.remove('active') 
        this.classList.add('active')
    }
}


//Кнопка BUY NOW со ссылкой на youtube.com
document.querySelector('.form_btn').onclick = function(e) {
    window.location = 'https://www.youtube.com/';
  };
