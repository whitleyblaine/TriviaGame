var question = 0;
var correct = 0;
var wrong = 0;

var timeLeft = 15;

var intervalId;

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
  $('.wrongAnswerPage').addClass('hide');
  $('.rightAnswerPage').addClass('hide');
  timeLeft = 15;
  startTimer();
};

var showQ3 = function () {
  question++;
  $('#q2').addClass('hide');
  $('#q3').removeClass('hide');
  $('.wrongAnswerPage').addClass('hide');
  $('.rightAnswerPage').addClass('hide');
  timeLeft = 15;
  startTimer();
};

var showQ4 = function () {
  question++;
  $('#q3').addClass('hide');
  $('#q4').removeClass('hide');
  $('.wrongAnswerPage').addClass('hide');
  $('.rightAnswerPage').addClass('hide');
  timeLeft = 15;
  startTimer();
};

var showResults = function() {
  $('#correct').html(correct);
  $('#wrong').html(wrong);
  alert('Game over!');
  $('.wrongAnswerPage').addClass('hide');
  $('.rightAnswerPage').addClass('hide');
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
    var timeoutId = window.setTimeout(showQ2, 5 * 1000)
  } else if (question == 2) {
    var timeoutId = window.setTimeout(showQ3, 5 * 1000)
  } else if (question == 3) {
    var timeoutId = window.setTimeout(showQ4, 5 * 1000)
  } else if (question == 4) {
    var timeoutId = window.setTimeout(showResults, 5 * 1000)
  };
});

$('.correct').on('click', function () {
  correct++;
  clearInterval(intervalId);
  $('.question').addClass('hide');
  $('.rightAnswerPage').removeClass('hide');
  if (question == 1) {
    var timeoutId = window.setTimeout(showQ2, 5 * 1000)
  } else if (question == 2) {
    var timeoutId = window.setTimeout(showQ3, 5 * 1000)
  } else if (question == 3) {
    var timeoutId = window.setTimeout(showQ4, 5 * 1000)
  } else if (question == 4) {
    var timeoutId = window.setTimeout(showResults, 5 * 1000)
  };
});