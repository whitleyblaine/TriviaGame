var question = 0;
var correct = 0;
var wrong = 0;

var timeLeft = 10;

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
  timeLeft = 10;
  startTimer();
};

var showQ2 = function () {
  question++;
  $('#q1').addClass('hide');
  $('#q2').removeClass('hide');
  timeLeft = 10;
  startTimer();
};

var showQ3 = function () {
  question++;
  $('#q2').addClass('hide');
  $('#q3').removeClass('hide');
  timeLeft = 10;
  startTimer();
};

var showQ4 = function () {
  question++;
  $('#q3').addClass('hide');
  $('#q4').removeClass('hide');
  timeLeft = 10;
  startTimer();
};

var showResults = function() {
  $('#correct').html(correct);
  $('#wrong').html(wrong);
  alert('Game over!');
  $('#timer').addClass('hide');
  $('#q4').addClass('hide');
  $('#end').removeClass('hide');
  var timeoutId = window.setTimeout(reset, 10 * 1000)
};

var reset = function() {
  timeLeft = 10;
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
  alert('Wrong! Try again.');
});

$('.correct1').on('click', function () {
  correct++;
  clearInterval(intervalId);
  alert('Correct!');
  showQ2();
});

$('.correct2').on('click', function () {
  correct++;
  clearInterval(intervalId);
  alert('Correct!');
  showQ3();
});

$('.correct3').on('click', function () {
  correct++;
  clearInterval(intervalId);
  alert('Correct!');
  showQ4();
});

$('.correct4').on('click', function () {
  correct++;
  clearInterval(intervalId);
  alert('Correct!');
  showResults();
});