var question = 0;

$('#start').click(function() {
  question++;
  $(this).addClass('hide');
  $('#question').removeClass("hide");
  $('#question').html(
    '<p>Question 1!</p>' +
    '<p>Who said THIS?!</p>' +
    '<p>"Part of the beauty of me is that I\'m very rich."</p>' +
    "<div id='answer1' class='correct choice'><p>Donald Trump</p></div>" +
    "<div id='answer2' class='incorrect choice'><p>Scrooge McDuck</p></div>" +
    "<div id='answer3' class='incorrect choice'><p>Mr. Krabs</p></div>" +
    "<div id='answer4' class='incorrect choice'><p>Charles Montgomery Plantagenet Schicklgruber Burns</p></div>"
  );

  $('.correct').click(function() {
    if(question==1) {
      alert("Correct!");
      $('#question').html(
        '<p>Question 2!</p>' +
        '<p>Who said THIS?!</p>' +
        '<p>“I have a great relationship with the blacks. I’ve always had a great relationship with the blacks.”</p>' +
        "<div id='answer1' class='incorrect2 choice'><p>Martin Luther King</p></div>" +
        "<div id='answer2' class='correct2 choice'><p>Donald Trump</p></div>" +
        "<div id='answer3' class='incorrect2 choice'><p>Jesse Jackson</p></div>" +
        "<div id='answer4' class='incorrect2 choice'><p>George Bush</p></div>"
      );
      question++;
    };
  });
});

$('.correct2').click(function() {
  if(question==2) {
    alert("Correct!");
    $('#question').html(
      '<p>Question 3!</p>' +
      '<p>Who said THIS?!</p>' +
      '<p>“All of the women on The Apprentice flirted with me — consciously or unconsciously. That’s to be expected.”</p>' +
      "<div id='answer1' class='incorrect3 choice'><p>Martin Luther King</p></div>" +
      "<div id='answer2' class='correct3 choice'><p>Donald Trump</p></div>" +
      "<div id='answer3' class='incorrect3 choice'><p>Jesse Jackson</p></div>" +
      "<div id='answer4' class='incorrect3 choice'><p>George Bush</p></div>"
    );
    question++;
  };
});