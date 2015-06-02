// ==UserScript==
// @name Hide Unnecessary Info in SE Chat
// @version 1.0
// @author michaelpri
// @description Userscript to hide unecessary or cluttering information that takes up room on the chat sidebar
// @include *://chat.stackexchange.com/*
// @include *://chat.stackoverflow.com/*
// @include *://chat.meta.stackexchange.com/*
// ==/UserScript==

function hide_show($) {

    function hide_show_users() {
        var present_users = $("#present-users");
        $("<table id='users-button-table'></table>").insertAfter(present_users);
        var users_button_table = $("#users-button-table");
        users_button_table.append("<tr id='users-button-row'></tr>");
        var users_button_row = $('#users-button-row');
        users_button_row.append("<td class='users-show-hide-button' id='hide-users'>Hide Users</td>");
        users_button_row.append("<td class='users-show-hide-button' id='show-users'>Show Users</td>");
        var hide_users = $("#hide-users");
        var show_users = $('#show-users');
        var users_show_hide_buttons = $(".users-show-hide-button");

        users_button_table.css({"border-bottom":"1px dotted #cecece", "width":"100%"});
        users_show_hide_buttons.css({"color":"darkblue", "font-weight":"bold", "padding-bottom":"5px"});
        present_users.css({"margin-bottom":"5px"});
        users_show_hide_buttons.on("mouseover", function() {
            users_show_hide_buttons.css({"text-decoration":"underline", "cursor":"pointer"});
        });
        users_show_hide_buttons.on("mouseout", function() {
            users_show_hide_buttons.css({"text-decoration":"none", "cursor":"default"});
        });

        present_users.hide();
        hide_users.hide();

        show_users.on("click", function() {
            present_users.show();
            hide_users.show();
            show_users.hide();
        });
        hide_users.on("click", function() {
            present_users.hide();
            show_users.show();
            hide_users.hide();
        });
    }

    function hide_show_info() {
        var room_desc = $("#roomdesc");
        var room_tags = $('#room-tags');
        var sidebar_menu = $('#sidebar-menu');
        $("<table id='info-button-table'></table>").insertAfter(room_tags);
        var info_button_table = $("#info-button-table");
        info_button_table.append("<tr id='info-button-row'></tr>");
        var info_button_row = $('#info-button-row');
        info_button_row.append("<td class='info-show-hide-button' id='hide-info'>Hide Info</td>");
        info_button_row.append("<td class='info-show-hide-button' id='show-info'>Show Info</td>");
        var hide_info = $("#hide-info");
        var show_info = $('#show-info');
        var info_show_hide_buttons = $(".info-show-hide-button");

        info_button_table.css({"border-top":"1px dotted #cecece", "width":"100%", "border-bottom":"1px dotted #cecece"});
        info_show_hide_buttons.css({"color":"darkblue", "font-weight":"bold", "padding-top":"5px", "padding-bottom":"5px"});
        sidebar_menu.css({"padding-top":"5px"})
        info_show_hide_buttons.on("mouseover", function() {
            info_show_hide_buttons.css({"text-decoration":"underline", "cursor":"pointer"});
        });
        info_show_hide_buttons.on("mouseout", function() {
            info_show_hide_buttons.css({"text-decoration":"none", "cursor":"default"});
        });


        room_desc.hide();
        room_tags.hide();
        hide_info.hide();

        show_info.on("click", function() {
            room_desc.show();
            room_tags.show();
            hide_info.show();
            show_info.hide();
        });
        hide_info.on("click", function() {
            room_desc.hide();
            room_tags.hide();
            hide_info.hide();
            show_info.show();
        });
    }

    hide_show_users();
    hide_show_info();
}

window.addEventListener('load', function() {
    var scriptEl = document.createElement('script');
    scriptEl.type = 'text/javascript';
    scriptEl.text = '(' + hide_show + ')(jQuery);';
    document.head.appendChild(scriptEl);
});
