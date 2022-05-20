console.log('Ура! Заработало!!!');
$(document).ready(function(){
    /*Добавить плавную прокрутку до всех ссылок*/
    $("a").on('click', function(event) {
  
      // *Убедись в этом что .hash имеет значение перед переопределением поведения по умолчанию*/
      if (this.hash !== "") {
        // Запретить поведение щелчка якоря по умолчанию*/
        event.preventDefault();
  
        // Хранить хэш
        var hash = this.hash;
  
        // Использование метода animate() jQuery для добавления плавной прокрутки страницы
        // Необязательное число (800) указывает количество миллисекунд, необходимых для прокрутки до указанной области
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Добавить хэш (#) для URL-адреса после завершения прокрутки (поведение щелчка по умолчанию)
          window.location.hash = hash;
        });
      } // Конец, если
    });
  });

  // каруселька

  let offset = 0;
  const sliderLine = document.querySelector('.sliderLine');

  document.querySelector('.sliderNext').addEventListener('click', function(){
    offset = offset + 256;
    if (offset > 768) {
      offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
  });

  document.querySelector('.sliderPrev').addEventListener('click', function(){
    offset = offset - 256;
    if (offset < 0) {
      offset = 768;
    }
    sliderLine.style.left = -offset + 'px';
  });


  let cards = document.querySelectorAll('.card');

VanillaTilt.init(cards, {
    max: 15,  // Максимальный угол поворота карточки
    glare: true,  // Включаем эффект блика
    'max-glare': 0.5,  // Регулируем интенсивность блика
});