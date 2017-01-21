var sidebar = $('#watch7-sidebar');
var sidebarContents = $('#watch7-sidebar-contents');
var buttonShow = $('<button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-menu-trigger">show sidebar</button>');
var buttonHide = $('<button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-menu-trigger">hide sidebar</button>');

var toggleAction = function () {
  buttonShow.toggle();
  buttonHide.toggle();
  sidebarContents.toggle();
};

buttonShow.click(toggleAction);
buttonHide.click(toggleAction);

sidebar.prepend(buttonShow);
sidebar.prepend(buttonHide);

sidebarContents.hide();
buttonHide.hide();

