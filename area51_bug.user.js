// ==UserScript==
// @name Area 51 Bug Fix
// @version 1.0
// @author michaelpri
// @description Fix Area 51 Display Bug
// @include *://area51.stackexchange.com/*
// ==/UserScript==

function with_jquery(f) {
     var script = document.createElement("script");
     script.type = "text/javascript";
     script.textContent = "(" + f.toString() + ")(jQuery)";
     document.body.appendChild(script);
};


with_jquery(function($){
  $('document').ready(function(){
      $('.category-tab-all>.category-tab-name').remove();
      $('.category-tab-all>br').remove();
      $('.category-tab-all>.category-tab-proposal-count').addClass('category-tab-name').removeClass('category-tab-proposal-count');
  });
});
