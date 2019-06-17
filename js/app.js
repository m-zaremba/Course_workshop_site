document.addEventListener('DOMContentLoaded', function () {


// Task 1 - show/hide submenu

  var menu = document.querySelectorAll('.nav_list>li');


  for (var i = 0; i < menu.length; i++) {

    menu[i].addEventListener('mouseover', function () {

      if (this.querySelector('li>ul')) {
        this.querySelector('li>ul').style.visibility = 'visible';

      }
    });

    menu[i].addEventListener('mouseout', function () {

      if (this.querySelector('li>ul')) {
        this.querySelector('li>ul').style.visibility = 'hidden';
      }

    });

  }

// Task 2 - hide photo description on hover

  var photoDescription = document.querySelectorAll('.gallery_photo');

  for (var i = 0; i < photoDescription.length; i++) {
    photoDescription[i].addEventListener('mouseover', function () {
      this.querySelector('.box_text').style.opacity = '0';
    });
    photoDescription[i].addEventListener('mouseout', function () {
      this.querySelector('.box_text').style.opacity = '1';
    });
  }

// Task 3 - slider gallery

  var prevPhoto = document.querySelector('.button_left');
  var nextPhoto = document.querySelector('.button_right');
  var galleryElements = document.querySelectorAll('.main_photo img');
  var index = 0;

  galleryElements[index].classList.add('visible');

  nextPhoto.addEventListener('click', function () {
    index++;
    if (index >= galleryElements.length) {
      index = 0;
    }
    refreshImageStatus();
  });

  prevPhoto.addEventListener('click', function () {
    index--;
    if (index < 0) {
      index = galleryElements.length - 1;
    }
    refreshImageStatus();
  });

  function refreshImageStatus() {
    var visible = document.querySelector('.visible');
    visible.classList.remove('visible');
    galleryElements[index].classList.add('visible');
  }

// Additional task - total price calculator


  var dropdownArrow = document.querySelectorAll('.list_arrow');

  for (var i = 0; i < dropdownArrow.length; i++) {
    dropdownArrow[i].parentElement.querySelector('ul').style.display = 'none';

    dropdownArrow[i].addEventListener('click', function () {

      var dropdown = this.parentElement.querySelector('ul');

      if (dropdown.style.display === 'none') {
        dropdown.style.display = 'block';
      } else {
        dropdown.style.display = 'none';
      }
    })

  }

  var chairType = document.querySelectorAll('.chair_type li');

  var clairPrice = 200;
  var margaritaPrice = 220;
  var selenaPrice = 280;

  var chairRed = 0;
  var chairBlack = 40;
  var chairOrange = 60;

  var chairFabric = 0;
  var chairLeather = 300;


  for (var i = 0; i < chairType.length; i++) {

    chairType[i].addEventListener('click', function () {

      document.querySelector('.title').innerText = 'Chair ' + this.innerText;
      document.querySelector('.chair_type').parentElement.querySelector('.list_label').innerText = this.innerText;

      if (this.innerText === 'Clair') {
        document.querySelector('.panel_right .value').innerText = clairPrice;
      } else if (this.innerText === 'Margarita') {
        document.querySelector('.panel_right .value').innerText = margaritaPrice;
      } else if (this.innerText === 'Selena') {
        document.querySelector('.panel_right .value').innerText = selenaPrice;
      } else {
        document.querySelector('.panel_right .value').innerText = '';
      }

      this.parentElement.style.display = 'none';
      calculator();
    })
  }

  var chairColor = document.querySelectorAll('.chair_color li');

  for (var i = 0; i < chairColor.length; i++) {

    chairColor[i].addEventListener('click', function () {

      document.querySelector('.color').innerText = this.innerText;
      document.querySelector('.chair_color').parentElement.querySelector('.list_label').innerText = this.innerText;

      if (this.innerText === 'Czerwony') {
        document.querySelector('.panel_right .color').innerText = chairRed;
      } else if (this.innerText === 'Czarny') {
        document.querySelector('.panel_right .color').innerText = chairBlack;
      } else if (this.innerText === 'Pomarańczowy') {
        document.querySelector('.panel_right .color').innerText = chairOrange;
      } else {
        document.querySelector('.panel_right .color').innerText = '';
      }

      this.parentElement.style.display = 'none';
      calculator();
    })
  }

  var chairUpholstery = document.querySelectorAll('.chair_upholstery li');

  for (var i = 0; i < chairUpholstery.length; i++) {

    chairUpholstery[i].addEventListener('click', function () {

      document.querySelector('.pattern').innerText = this.innerText;
      document.querySelector('.chair_upholstery').parentElement.querySelector('.list_label').innerText = this.innerText;

      if (this.innerText === 'Tkanina') {
        document.querySelector('.panel_right .pattern').innerText = chairFabric;
      } else if (this.innerText === 'Skóra') {
        document.querySelector('.panel_right .pattern').innerText = chairLeather;
      } else {
        document.querySelector('.panel_right .pattern').innerText = '';
      }

      this.parentElement.style.display = 'none';
      calculator();
    })
  }

  var checkbox = document.querySelector('#transport');

  checkbox.addEventListener('click', function () {

    if (checkbox.checked) {
      document.querySelector('.transport').innerText = 'Transport';
      document.querySelector('.panel_right .transport').innerText = checkbox.getAttribute('data-transport-price');
    } else {
      document.querySelector('.transport').innerText = '';
      document.querySelector('.panel_right .transport').innerText = '';
    }

    calculator();
  });

  function calculator() {

    var typeCost = document.querySelector('.panel_right .value').innerText;
    var colorCost = document.querySelector('.panel_right .color').innerText;
    var fabricCost = document.querySelector('.panel_right .pattern').innerText;
    var transportCost = document.querySelector('.panel_right .transport').innerText;

    var totalSum = Number(typeCost) + Number(colorCost) + Number(fabricCost) + Number(transportCost);

    if (totalSum !== 0) {
      document.querySelector('.sum').lastElementChild.innerText = totalSum;
    } else {
      document.querySelector('.sum').lastElementChild.innerText = '';
    }
  }


  var planButton = document.querySelectorAll('.join_button');

  for (var i = 0; i < planButton.length; i++) {

    planButton[i].addEventListener('click', function () {

      removeMarked();

      this.parentElement.classList.toggle('marked');
      this.classList.toggle('marked');
      this.previousElementSibling.classList.toggle('marked');
      this.previousElementSibling.previousElementSibling.classList.toggle('marked');
      this.parentElement.getElementsByTagName('div')[0].classList.toggle('marked');
      this.parentElement.getElementsByTagName('div')[1].classList.toggle('marked');
      this.parentElement.getElementsByTagName('div')[2].getElementsByTagName('span')[1].classList.toggle('marked');

    })
  }

  function removeMarked() {

    var marked = document.querySelectorAll('.marked');

    for (var i = 0; i < marked.length; i++) {
      marked[i].classList.remove('marked');
    }
  }

});
