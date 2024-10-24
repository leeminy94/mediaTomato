/* faq */
$(".flip").click(function () {
    $(".panel").not($(this).next('.panel')).hide();
    $(this).next('.panel').slideToggle("slow");
});

/* 서비스 mobile */
$(".flip02").click(function () {
    $(".panel02").not($(this).next('.panel02')).hide();
    $(this).next('.panel02').slideToggle("slow");
    $(".flip02").removeClass("active");
    $(this).addClass("active");
});

/* 가이드 mobile */
$(".flip03").click(function () {
    $(".panel03").not($(this).next('.panel03')).hide();
    $(this).next('.panel03').slideToggle("slow");
    $(".flip03").removeClass("active");
    $(this).addClass("active");
});


// 서비스안내 탭
$(document).ready(function () {
    //Default Action
    $(".tab_api_content02").hide(); //Hide all content
    $("ol.tab_api02 li:first").addClass("active").show(); //Activate first tab
    $(".tab_api_content02:first").show(); //Show first tab content

    //On Click Event
    $("ol.tab_api02 li").click(function () {
        $("ol.tab_api02 li").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //Add "active" class to selected tab
        $(".tab_api_content02").hide(); //Hide all tab content
        var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active content
        return false;
    });

});


$(document).ready(function () {
    //Default Action
    $(".tab_content").hide(); //Hide all content
    $("ul.tabs li:first").addClass("active").show(); //Activate first tab
    $(".tab_content:first").show(); //Show first tab content

    //On Click Event
    $("ul.tabs li").click(function () {
        $("ul.tabs li").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //Add "active" class to selected tab
        $(".tab_content").hide(); //Hide all tab content
        var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active content
        return false;
    });

});

$(document).ready(function () {
    //Default Action
    $(".tab_api_content").hide(); //Hide all content
    $("ol.tab_api li:first").addClass("active").show(); //Activate first tab
    $(".tab_api_content:first").show(); //Show first tab content

    //On Click Event
    $("ol.tab_api li").click(function () {
        $("ol.tab_api li").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //Add "active" class to selected tab
        $(".tab_api_content").hide(); //Hide all tab content
        var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active content
        return false;
    });

});


$(document).ready(function () {

    //Default Action
    $(".tab_content02").hide(); //Hide all content
    $("ul.tabs02 li:first").addClass("active").show(); //Activate first tab
    $(".tab_content02:first").show(); //Show first tab content

    //On Click Event
    $("ul.tabs02 li").click(function () {
        $("ul.tabs02 li").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //Add "active" class to selected tab
        $(".tab_content02").hide(); //Hide all tab content
        var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active content
        return false;
    });

});

//--- 서비스안내 끝

jQuery(function ($) {
    var login1Window = $('.mw_login1');
    var login1 = $('#login1');
    var login2Window = $('.mw_login2');
    var login2 = $('#login2');
    var popupWindow = $('.mw_popup');
    var popup = $('#popup');
    var pop1Window = $('.mw_pop1');
    var pop1 = $('#pop1');
    var pop2Window = $('.mw_pop2');
    var pop2 = $('#pop2');
    var pop3Window = $('.mw_pop3');
    var pop3 = $('#pop3');
    var pop4Window = $('.mw_pop4');
    var pop4 = $('#pop4');
    var pop5Window = $('.mw_pop5');
    var pop5 = $('#pop5');
    var pop6Window = $('.mw_pop6');
    var pop6 = $('#pop6');
    var pop7Window = $('.mw_pop7');
    var pop7 = $('#pop7');
    var pop8Window = $('.mw_pop8');
    var pop8 = $('#pop8');
    var pop9Window = $('.mw_pop9');
    var pop9 = $('#pop9');
    var pop10Window = $('.mw_pop10');
    var pop10 = $('#pop10');
    var pop11Window = $('.mw_pop11');
    var pop11 = $('#pop11');

    // Show Hide
    $('.login1_trigger').click(function () {
        login1Window.addClass('open');
    });
    $('.login2_trigger').click(function () {
        login2Window.addClass('open');
    });
    $('.popup_trigger').click(function () {
        popupWindow.addClass('open');
    });
    $('.pop1_trigger').click(function () {
        pop1Window.addClass('open');
    });
    $('.pop2_trigger').click(function () {
        pop2Window.addClass('open');
    });
    $('.pop3_trigger').click(function () {
        pop3Window.addClass('open');
    });
    $('.pop4_trigger').click(function () {
        pop4Window.addClass('open');
    });
    $('.pop5_trigger').click(function () {
        pop5Window.addClass('open');
    });
    $('.pop6_trigger').click(function () {
        pop6Window.addClass('open');
    });
    $('.pop7_trigger').click(function () {
        pop7Window.addClass('open');
    });
    $('.pop8_trigger').click(function () {
        pop8Window.addClass('open');
    });
    $('#login1 .close').click(function () {
        login1Window.removeClass('open');
    });
    $('#login2 .close').click(function () {
        login2Window.removeClass('open');
    });
    $('#popup .close').click(function () {
        popupWindow.removeClass('open');
    });
    $('#pop1 .close').click(function () {
        location.href = '/default.aspx';
        pop1Window.removeClass('open');
    });
    $('#pop2 .close').click(function () {
        location.href = '/default.aspx';
        pop2Window.removeClass('open');
    });
    $('#pop2 .close02').click(function () {
        pop2Window.removeClass('open');
    });
    $('#pop3 .close').click(function () {
        pop3Window.removeClass('open');
    });
    $('#pop4 .close').click(function () {
        pop4Window.removeClass('open');
    });
    $('#pop5 .close').click(function () {
        pop5Window.removeClass('open');
    });
    $('#pop6 .close').click(function () {
        pop6Window.removeClass('open');
    });
    $('#pop7 .close').click(function () {
        pop7Window.removeClass('open');
    });
    $('#pop8 .close').click(function () {
        pop8Window.removeClass('open');
    });
    $('.pop9_trigger').click(function () {
        pop9Window.addClass('open');
    });
    $('#pop9 .close').click(function () {
        pop9Window.removeClass('open');
    });
    $('#pop9 .close02').click(function () {
        pop9Window.removeClass('open');
    });
    $('.pop10_trigger').click(function () {
        pop10Window.addClass('open');
    });
    $('#pop10 .close').click(function () {
        location.href = '/mypage.aspx';
        pop10Window.removeClass('open');
    });
    $('#pop10 .close02').click(function () {
        location.href = '/mypage.aspx';
        pop10Window.removeClass('open');
    });
    $('.pop11_trigger').click(function () {
        pop11Window.addClass('open');
    });
    $('#pop11 .close').click(function () {
        pop11Window.removeClass('open');
    });
    $('#pop11 .close02').click(function () {
        pop11Window.removeClass('open');
    });
    // g_login1
    $('.g_anchor').click(function () {
        login1.removeClass('o_login1');
        login1.addClass('g_login1');
    });
    $('.g_anchor').click(function () {
        login2.removeClass('o_login2');
        login2.addClass('g_login2');
    });
    $('.pu_anchor').click(function () {
        popup.removeClass('o_popup');
        popup.addClass('g_popup');
    });
    $('.p1_anchor').click(function () {
        pop1.removeClass('o_pop1');
        pop1.addClass('g_pop1');
    });
    $('.p2_anchor').click(function () {
        pop2.removeClass('o_pop2');
        pop2.addClass('g_pop2');
    });
    $('.p3_anchor').click(function () {
        pop3.removeClass('o_pop3');
        pop3.addClass('g_pop3');
    });
    $('.p4_anchor').click(function () {
        pop4.removeClass('o_pop4');
        pop4.addClass('g_pop4');
    });
    $('.p5_anchor').click(function () {
        pop5.removeClass('o_pop5');
        pop5.addClass('g_pop5');
    });
    $('.p6_anchor').click(function () {
        pop6.removeClass('o_pop6');
        pop6.addClass('g_pop6');
    });
    $('.p7_anchor').click(function () {
        pop7.removeClass('o_pop7');
        pop7.addClass('g_pop7');
    });
    $('.p8_anchor').click(function () {
        pop7.removeClass('o_pop8');
        pop7.addClass('g_pop8');
    });
    $('.p9_anchor').click(function () {
        pop9.removeClass('o_pop9');
        pop9.addClass('g_pop9');
    });
    $('.p10_anchor').click(function () {
        pop10.removeClass('o_pop10');
        pop10.addClass('g_pop10');
    });
    $('.p11_anchor').click(function () {
        pop11.removeClass('o_pop11');
        pop11.addClass('g_pop11');
    });

    // ESC Event
    $(document).keydown(function (event) {
        if (event.keyCode != 27) return true;
        if (login1Window.hasClass('open')) {
            login1Window.removeClass('open');
        }
        return false;
    });
    $(document).keydown(function (event) {
        if (event.keyCode != 27) return true;
        if (login2Window.hasClass('open')) {
            login2Window.removeClass('open');
        }
        return false;
    });
    $(document).keydown(function (event) {
        if (event.keyCode != 27) return true;
        if (popupWindow.hasClass('open')) {
            popupWindow.removeClass('open');
        }
        return false;
    });
    $(document).keydown(function (event) {
        if (event.keyCode != 27) return true;
        if (pop1Window.hasClass('open')) {
            location.href = "/default.aspx";
            pop1Window.removeClass('open');
        }
        return false;
    });
    $(document).keydown(function (event) {
        if (event.keyCode != 27) return true;
        if (pop2Window.hasClass('open')) {
            location.href = "/default.aspx";
            pop2Window.removeClass('open');
        }
        return false;
    });
    $(document).keydown(function (event) {
        if (event.keyCode != 27) return true;
        if (pop3Window.hasClass('open')) {
            pop3Window.removeClass('open');
        }
        return false;
    });
    $(document).keydown(function (event) {
        if (event.keyCode != 27) return true;
        if (pop4Window.hasClass('open')) {
            pop4Window.removeClass('open');
        }
        return false;
    });
    $(document).keydown(function (event) {
        if (event.keyCode != 27) return true;
        if (pop5Window.hasClass('open')) {
            pop5Window.removeClass('open');
        }
        return false;
    });
    $(document).keydown(function (event) {
        if (event.keyCode != 27) return true;
        if (pop6Window.hasClass('open')) {
            pop6Window.removeClass('open');
        }
        return false;
    });
    $(document).keydown(function (event) {
        if (event.keyCode != 27) return true;
        if (pop7Window.hasClass('open')) {
            pop7Window.removeClass('open');
        }
        return false;
    });
    $(document).keydown(function (event) {
        if (event.keyCode != 27) return true;
        if (pop8Window.hasClass('open')) {
            pop8Window.removeClass('open');
        }
        return false;
    });
    $(document).keydown(function (event) {
        if (event.keyCode != 27) return true;
        if (pop9Window.hasClass('open')) {
            pop9Window.removeClass('open');
        }
        return false;
    });
    $(document).keydown(function (event) {
        if (event.keyCode != 27) return true;
        if (pop10Window.hasClass('open')) {
            location.href = '/mypage.aspx';
            pop10Window.removeClass('open');
        }
        return false;
    });
    $(document).keydown(function (event) {
        if (event.keyCode != 27) return true;
        if (pop11Window.hasClass('open')) {
            pop11Window.removeClass('open');
        }
        return false;
    });
    // Hide Window
    login1Window.find('>.bg').mousedown(function (event) {
        login1Window.removeClass('open');
        return false;
    });
    login2Window.find('>.bg').mousedown(function (event) {
        login2Window.removeClass('open');
        return false;
    });
    popupWindow.find('>.bg').mousedown(function (event) {
        popupWindow.removeClass('open');
        return false;
    });
    pop1Window.find('>.bg').mousedown(function (event) {
        location.href = '/default.aspx';
        pop1Window.removeClass('open');
        return false;
    });
    pop2Window.find('>.bg').mousedown(function (event) {
        location.href = '/default.aspx';
        pop2Window.removeClass('open');
        return false;
    });
    pop3Window.find('>.bg').mousedown(function (event) {
        pop3Window.removeClass('open');
        return false;
    });
    pop4Window.find('>.bg').mousedown(function (event) {
        pop4Window.removeClass('open');
        return false;
    });
    pop5Window.find('>.bg').mousedown(function (event) {
        pop5Window.removeClass('open');
        return false;
    });
    pop6Window.find('>.bg').mousedown(function (event) {
        pop6Window.removeClass('open');
        return false;
    });
    pop7Window.find('>.bg').mousedown(function (event) {
        pop7Window.removeClass('open');
        return false;
    });
    pop8Window.find('>.bg').mousedown(function (event) {
        pop8Window.removeClass('open');
        return false;
    });
    pop9Window.find('>.bg').mousedown(function (event) {
        pop9Window.removeClass('open');
        return false;
    });
    pop10Window.find('>.bg').mousedown(function (event) {
        location.href = '/mypage.aspx';
        pop10Window.removeClass('open');
        return false;
    });
    pop11Window.find('>.bg').mousedown(function (event) {
        pop11Window.removeClass('open');
        return false;
    });
});