
$(function () {
    $('.sub_menu_list').slideUp();
    $('.child_sub_menu_list').slideUp();
    $('.nest_child_sub_menu_list').slideUp();
});

var sidemenu = (id, children) => {
    $(`.main_menu`).removeClass('active')
    if (!children) {
        $(`#${id}`).toggleClass("active");
    } else {
        $(`#${id}`).toggleClass("opened");
    }

    let condition = id?.split('-')[0]

    switch (condition) {
        case 1:
            $(`#${id}`).parent().find('.child_sub_menu_list').slideToggle();
            break;
        case 2:
            $(`#${id}`).parent().find('.nest_child_sub_menu_list').slideToggle();
            break;
        default:
            $(`#${id}`).parent().find('.sub_menu_list').slideToggle();
            break;
    }

}

$(document).on('focus', '.select_box', function () {
    $(this).next('div').slideToggle('fast', 'swing');
})

$(document).on('focus', '.input_date', function () {
    $(this).next('div').slideToggle('fast', 'swing');
})

$(document).on('click', '#cancel', function () {
    $('.cal_dropdown').slideUp('fast', 'swing');
})

$(document).on('blur', '.select_box', function () {
    $(this).next('div').slideUp('fast', 'swing');
})

$(document).on('click', '.input_div', function () {
    $(this).next('div').slideToggle('fast', 'swing');
})

$(document).mouseup(function (e) {
    var container = $(".date_input_whole");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $(this).find('.cal_dropdown').slideUp('fast', 'swing');
    }
});


$(document).mouseup(function (e) {
    var container = $(".input_chips_whole");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $(this).find('.chip_dropdown').slideUp('fast', 'swing');
    }
});

$(document).on('focus', '.anim_input', function () {
    $(this).parents('.anim_textbox').addClass('active');
})

$(document).on('click', '.dropdown_item', function () {
    $(this).parents('.select_dropdown').prev('input').val($(this).text())

})

$(document).on('blur', '.anim_input', function () {
    if ($(this)?.val()?.trim() === "") {
        $(this).parents('.anim_textbox').removeClass('active');
    }
})

$(document).on('click', '.switch_active', function () {
    $(this).addClass('active').siblings().removeClass('active');
})

$(document).on('click', '.timer_icon', function () {
    $('.tab_slider').css({ transform: 'translate(100%, 0)' });
    $('.tab_element').css({ transform: 'translate(-100%, 0)' });
    
})

$(document).on('click', '.calender_icon', function () {
    $('.tab_slider').css({ transform: 'translate(0%, 0)' });
    $('.tab_element').css({ transform: 'translate(0%, 0)' });
})

