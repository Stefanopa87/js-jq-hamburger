
// con TOGGLECLASS metto e levo ogni volta che clicco
//  CON FUNZIONE ***ANONIMA***
function init1(){
  $('.fas').click(function(){
    $('.hamburger-menu').toggleClass('active');
  });
}

// init1();

// ---------------------------------

// con TOGGLECLASS metto e levo ogni volta che clicco
//  CON FUNZIONE ***DICHIARTA***
function premi(){
  $('.hamburger-menu').toggleClass('active');
}

function init2(){
  $('.fas').click(premi);
}

// init2();

// ----------------------------------

//  con ADDCLASS aggiungo una regola di css ad un elemento
//  che però rimane "fissa"
function init3(){
  $('.hamburger-menu').addClass('active');
}

// init3();

// ----------------------------------

// con HOVER metto e levo ogni volta che passo passasopra
// CON FUNZIONE ***DICHIARATA***

function passaSopra(){
  $('.hamburger-menu').toggleClass('active');
}

function init4(){
  $('.fas').hover(passaSopra);
}

// init4();

// ---------------------------------
