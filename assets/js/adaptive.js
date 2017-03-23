var open = false;
function open_mobile_menu() {
	$("#menu_mobile_button").click(function () {
		if (open){
			open = false;
		} else {
			open = true;
		}

		var bg = $(this).css("background-color");
		var color = $(this).find("span").css("background-color")
		if (open){
			$(this).css({
				background: color,
				overflow: "hidden"
			});
			$(this).find("span").css({
				background: bg,
				left: "-50px"
			});
			$(this).find("span").first().css({
				transform: "rotate(405deg)",
				top: "10px",
				left: "3px",
			});
			$(this).find("span").last().css({
				transform: "rotate(-405deg)",
				top: "10px",
				left: "3px",
			});
			$("#menu_mobile").animate({
				left: 0
			})
		} else {
			$(this).css({
				background: color,
				overflow: "hidden"
			});
			$(this).find("span").css({
				transform: "rotate(0)",
				background: bg,
				top: "10px",
				left: "3px",
			});
			$(this).find("span").first().css({
				top: "4px",
				left: "3px",
			});
			$(this).find("span").last().css({
				top: "auto",
				left: "3px",
			});
			$("#menu_mobile").animate({
				left: "100%"
			})
		}
	});
}
function mobile_menu() {
	if($(window).width() < 500){
		$("#menu ul").appendTo("#menu_mobile");
		$("#login_mobile a").appendTo("#menu_mobile");
		$("#menu_mobile_button a").click(function () {
			open = true;
			$("#menu_mobile_button").click();
		});
	} else {
		$("#menu_mobile .bubblelinkh").appendTo("#login_mobile");
		$("#menu_mobile ul").appendTo("#menu");
	}
}
// function mobile_footer() {
// 	if($(window).width() < 500){
// 		$("#left_footer ul").hide();
// 		$("#middle_footer ul").hide();
// 		$("#right_footer #temp_div").hide();
// 		$("#left_footer .for_line").click(function (){
// 			$("#left_footer ul").toggle("slow");
// 		});
// 		$("#middle_footer .for_line").click(function (){
// 			$("#middle_footer ul").toggle("slow");
// 		});
// 		$("#right_footer .for_line").click(function (){
// 			$("#right_footer #temp_div").toggle("slow");
// 		});
// 		$('#table_col.main_ifograph').appendTo('.dark_theme');
// 	} else {
// 		$('#table_col.main_ifograph').appendTo('.dark_theme');
// 		$('.searchform_title').appendTo('.dark_theme');
// 	}
// }
function mobile_footer() {
	var mq = window.matchMedia( "(max-width: 500px)" );
	if(mq.matches) {
		var footerBtn = document.querySelector(".hide_footer_1");
		footerBtn.onclick = function () {
			footerBtn.classList.toggle("show_footer")
		}
		var footerBtnSecond = document.querySelector(".hide_footer_2");
		footerBtnSecond.onclick = function () {
			footerBtnSecond.classList.toggle("show_footer")
		}
		var footerBtnThird = document.querySelector(".hide_footer_3");
		footerBtnThird.onclick = function () {
			footerBtnThird.classList.toggle("show_footer")
		}
	} else {
		false
	}
}



function top3_dropdown() {
	$('.top_3-dropdown').each(function () {
		var item = $(this);
		$(item).find('.zag').click(function () {
			$(item).find('ul').toggle();
		});
	});
}
function main_seach_title() {
	if($(window).width() < 500){
		$('#searchform_title').appendTo('.dark_theme');
	} else {
		$('#searchform_title').prependTo('.dark_theme');
	}
}
function master_card() {
	if ($(window).width() < 950 ){
		$('.master').each(function () {
			$(this).find('.master_spec').prependTo($(this));
			$(this).find('.master_name').prependTo($(this));
		});
		$('.modal-right-content').each(function () {
			$(this).find('#order_date').prependTo($(this));
		});
	} else {
		$('.master').each(function () {
			$(this).find('.master_spec').prependTo($(this).find('.master_right'));
			$(this).find('.master_name').prependTo($(this).find('.master_right'));
		});
		$('.modal-right-content').each(function () {
			$(this).find('#order_contacts').prependTo($(this));
		});
	}
}
// function card() {
// 	if ($(window).width() < 732 ){
// 		$('#masters').prepend('<a class="master_zapis sparkling-modal-link" style="width:260px;" href="http://vsemastera.com.ua/zapis/kiev/soroka-maysterya-stilyu/">Записаться</a>');
// 	} else {
// 		$('#masters .master_zapis').hide();
// 	}
// }
$(document).ready(function(){
	mobile_menu();
	open_mobile_menu();
//	top3_dropdown();
	main_seach_title();
	master_card();
	mobile_footer();
	card();
});
$(window).resize(function() {
	mobile_menu();
	main_seach_title();
	master_card();
	mobile_footer();
});
