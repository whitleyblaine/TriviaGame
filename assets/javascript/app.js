var question = 0;
var correct = 0;
var wrong = 0;

var timeLeft = 15;

var intervalId;

var imageURL1 = "assets/images/blast_off.gif";
var imageURL2 = "assets/images/funny_face.gif";
var imageURL3 = "assets/images/funny_face_2.gif";
var imageURL4 = "assets/images/problem.gif";

var startTimer = function () {
  intervalId = setInterval(countdown, 1000);

  function countdown() {
    if (timeLeft > 0) {
      $('#timeRemaining').html(' ' + timeLeft + ' seconds remaining');
      timeLeft--;
    } else if (timeLeft == 0) {
      $('#timeRemaining').html(' ' + timeLeft + ' seconds remaining');
      clearInterval(intervalId);
      wrong++;
      alert("Too late!");
      if (question == 1) {
        showQ2();
      } else if (question == 2) {
        showQ3();
      } else if (question == 3) {
        showQ4();
      } else if (question == 4) {
        showResults();
      };
    };
  };
};

var answerPageHide = function() {
  $('.wrongAnswerPage').addClass('hide');
  $('.rightAnswerPage').addClass('hide');
  $('#funnyText2').addClass('hide');
};

var showQ1 = function () {
  question++;
  $('#start').addClass('hide');
  $('#q1').removeClass("hide");
  timeLeft = 15;
  startTimer();
};

var showQ2 = function () {
  question++;
  $('#q1').addClass('hide');
  $('#q2').removeClass('hide');
  answerPageHide();
  timeLeft = 15;
  startTimer();
};

var showQ3 = function () {
  question++;
  $('#q2').addClass('hide');
  $('#q3').removeClass('hide');
  answerPageHide();
  timeLeft = 15;
  startTimer();
};

var showQ4 = function () {
  question++;
  $('#q3').addClass('hide');
  $('#q4').removeClass('hide');
  answerPageHide();
  timeLeft = 15;
  startTimer();
};

var showResults = function() {
  $('#correct').html(correct);
  $('#wrong').html(wrong);
  alert('Game over!');
  answerPageHide();
  $('#timer').addClass('hide');
  $('#q4').addClass('hide');
  $('#end').removeClass('hide');
  var timeoutId = window.setTimeout(reset, 10 * 1000)
};

var reset = function() {
  timeLeft = 15;
  question = 0;
  correct = 0;
  wrong = 0;
  $('#timer').removeClass('hide');
  $('#end').addClass('hide');
  $('#start').removeClass('hide');
};

$('#start').on('click', function () {
  showQ1();
});

$('.incorrect').on('click', function () {
  wrong++;
  clearInterval(intervalId);
  $('.question').addClass('hide');
  $('.wrongAnswerPage').removeClass('hide');
  if (question == 1) {
    $('#funnyGif').attr('src', imageURL1);
    $('#funnyText2').removeClass('hide');
    var timeoutId = window.setTimeout(showQ2, 5 * 1000)
  } else if (question == 2) {
    $('#funnyGif').attr('src', imageURL2);
    $('#funnyText2').removeClass('hide');
    var timeoutId = window.setTimeout(showQ3, 5 * 1000)
  } else if (question == 3) {
    $('#funnyGif').attr('src', imageURL3);
    $('#funnyText2').removeClass('hide');
    var timeoutId = window.setTimeout(showQ4, 5 * 1000)
  } else if (question == 4) {
    $('#funnyGif').attr('src', imageURL4);
    $('#funnyText2').removeClass('hide');
    var timeoutId = window.setTimeout(showResults, 5 * 1000)
  };
});

$('.correct').on('click', function () {
  correct++;
  clearInterval(intervalId);
  $('#funnyGif').attr('src', imageURL2);
  $('#funnyText2').removeClass('hide');
  $('.question').addClass('hide');
  $('.rightAnswerPage').removeClass('hide');
  if (question == 1) {
    $('#funnyGif').attr('src', imageURL1);
    $('#funnyText2').removeClass('hide');
    var timeoutId = window.setTimeout(showQ2, 5 * 1000)
  } else if (question == 2) {
    $('#funnyGif').attr('src', imageURL2);
    $('#funnyText2').removeClass('hide');
    var timeoutId = window.setTimeout(showQ3, 5 * 1000)
  } else if (question == 3) {
    $('#funnyGif').attr('src', imageURL3);
    $('#funnyText2').removeClass('hide');
    var timeoutId = window.setTimeout(showQ4, 5 * 1000)
  } else if (question == 4) {
    $('#funnyGif').attr('src', imageURL4);
    $('#funnyText2').removeClass('hide');
    var timeoutId = window.setTimeout(showResults, 5 * 1000)
  };
});