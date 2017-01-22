var sidebar = $('#sidebar');

var jobs = $('#hireme');
var hot = $('#hot-network-questions');
var chat = $('#chat-feature');
var community = $('.community-bulletin');
var newsletter = $('#newsletter-ad');

var buttonShow = $('<p><button>show more sidebar content</button></p>');
var buttonHide = $('<p><button>hide more sidebar content</button></p>');

var toggleAction = function () {
  buttonShow.toggle();
  buttonHide.toggle();
  jobs.toggle();
  hot.toggle();
  chat.toggle();
  community.toggle();
  newsletter.toggle();
};

buttonShow.click(toggleAction);
buttonHide.click(toggleAction);

sidebar.prepend(buttonShow);
sidebar.prepend(buttonHide);

jobs.hide();
hot.hide();
chat.hide();
community.hide();
newsletter.hide();
buttonHide.hide();

