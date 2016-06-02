var question = 0;
var correct = 0;
var wrong = 0;

$('#start').on('click', function() {
  $(this).addClass('hide');
  $('#q1').removeClass("hide");
});

$('.incorrect').on('click', function() {
  wrong++;
  alert('Wrong!');
});

$('.correct1').on('click', function() {
  correct++;
  alert('Correct!');
  $('#q1').addClass('hide');
  $('#q2').removeClass('hide');
});

$('.correct2').on('click', function() {
  correct++;
  alert('Correct!');
  $('#q2').addClass('hide');
  $('#q3').removeClass('hide');
});

$('.correct3').on('click', function() {
  correct++;
  alert('Correct!');
  $('#q3').addClass('hide');
  $('#q4').removeClass('hide');
});

$('.correct4').on('click', function() {
  correct++;
  $('#correct').html(correct);
  $('#wrong').html(wrong);
  alert('Correct!');
  alert('Game over!');
  $('#q4').addClass('hide');
  $('#end').removeClass('hide');
});