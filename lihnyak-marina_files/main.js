$(document).ready(function(){
	$('.diagnostic_ul').on('click', function(){
		$(this).find('ul').slideToggle(500);
		if ($(this).find('h3').hasClass('checked_h3')) $(this).find('h3').removeClass('checked_h3');
		else $(this).find('h3').addClass('checked_h3');
	})
	$('.for_line').on('click', function(){
		$(this).next('ul').slideToggle(500);
		$(this).next('div').slideToggle(500);
		if ($(this).hasClass('rotated_footer')) $(this).removeClass('rotated_footer');
		else $(this).addClass('rotated_footer');
	});
	$('#show_menu').on('click', function(){
		$('#top3').slideToggle(500);
	})
	$('#agree_label').on('click', function(){
		if ($('#agree_label').hasClass('agree_no')) $('#agree_label').attr('class', 'agree_yes');
		else $('#agree_label').attr('class', 'agree_no');
	})
	$('.selectable_radio').on('click', function(){
			// $('.selectable_radio').removeClass('no_select_radio');
			$('.selectable_radio').removeClass('select_radio');
			$('.selectable_radio').addClass('no_select_radio');
			$(this).addClass('select_radio');
			switch ($(this).html()){
				case 'Доктор':
					$('#after_reg_1').html('Разместить полную информацию о себе и своих услугах и привлекать больше клиентов;');
					$('#after_reg_2').html('Получить доступ в личный кабинет и принимать онлайн-заявки на консультацию от пациентов;');
					$('#after_reg_3').html('Просматривать статистику ваших записей и отзывов в личном кабинете.');l
					break;
				case 'Представитель клиники':
					$('#after_reg_1').html('Создавать и редактировать страницы клиники, отделений и врачей;');
					$('#after_reg_2').html('Бесплатно информировать клиентов об акциях, новостях и программах лояльности;');
					$('#after_reg_3').html('Получить доступ к статистике о просмотрах страницы и записях пациентов в вашем личном кабинете.');
					break;
				case 'Пациент':
					$('#after_reg_1').html('Записываться к врачу в удобное для вас время абсолютно бесплатно;');
					$('#after_reg_2').html('Участвовать в оценивании докторов и клиник;');
					$('#after_reg_3').html('Составлять свои списки избранных докторов и клиник.');
					break;
			}
	})
	$(window).resize(function(){
		// console.log($('#right_2').height());
		$('#width_window').html($(document).width() + 17);
	})

	var shift_background = '128px';
	$('#main_search_doctor').on('click', function(){
		var hide_doctor = $('#search_doctor_click').val();
		if (hide_doctor == 0){
			$('.hideble').removeClass('hidden');
			$('#search_doctor_click').val(1)
		}
		else{
			$('.hideble').addClass('hidden');
			$('#search_doctor_click').val(0)
		}
	})
	$('.select_doctor').on('click', function(){
		$('#main_search_doctor').html($(this).html());
		switch($(this).html()){
			case 'Поиск&nbsp;клиники':
				$('#search_doctor div:nth-child(2)').html('Поиск&nbsp;врача');
				$('#search_doctor div:nth-child(3)').html('Поиск&nbsp;диагностики');
				$('#search_2 input[name=special]').attr('placeholder', 'Введите направление или название клиник');
				$('#search_2 input[type=submit]').val('Искать клинику');
				break;
			case 'Поиск&nbsp;врача':
				$('#search_doctor div:nth-child(2)').html('Поиск&nbsp;клиники');
				$('#search_doctor div:nth-child(3)').html('Поиск&nbsp;диагностики');
				$('#search_2 input[name=special]').attr('placeholder', 'Введите специальность или фамилию врача');
				$('#search_2 input[type=submit]').val('Искать врача');
				break;
			case 'Поиск&nbsp;диагностики':
				$('#search_doctor div:nth-child(2)').html('Поиск&nbsp;врача');
				$('#search_doctor div:nth-child(3)').html('Поиск&nbsp;клиники');
				$('#search_2 input[name=special]').attr('placeholder', 'Введите вид диагностики или название центра');
				$('#search_2 input[type=submit]').val('Искать');
				break;
		}
		$('.hideble').addClass('hidden');
		$('#search_doctor_click').val(0)
	})
	$('#icons_telefon').hover(function(){
		$('#more_telefon').attr('style', 'display: block');
	}, function(){
		$('#more_telefon').attr('style', 'display: none');
	});
	$('#icons_telefon img').hover(function(){
		var val_img = $(this).attr('val');
		val_img = parseInt(val_img);
		switch (val_img){
			case 1:
				$('#topli_1').css('background', 'url(/images/top_1.jpg) 8px  center no-repeat #eeeef3');
				$('#topli_1').css('cursor', 'pointer');
				break;
			case 2:
				$('#topli_2').css('background', 'url(/images/top_2.jpg) 8px  center no-repeat #eeeef3');
				$('#topli_2').css('cursor', 'pointer');
				break;
			case 3:
				$('#topli_3').css('background', 'url(/images/top_3.jpg) 8px  center no-repeat #eeeef3');
				$('#topli_3').css('cursor', 'pointer');
				break;
			case 4:
				$('#topli_4').css('background', 'url(/images/top_4.jpg) 8px  center no-repeat #eeeef3');
				$('#topli_4').css('cursor', 'pointer');
				break;
		}
	}, function(){
			var val_img = $(this).attr('val');
			val_img = parseInt(val_img);
			switch (val_img){
				case 1:
					$('#topli_1').css('background', 'url(/images/top_1.jpg) 8px  center no-repeat');
					break;
				case 2:
					$('#topli_2').css('background', 'url(/images/top_2.jpg) 8px  center no-repeat');
					break;
				case 3:
					$('#topli_3').css('background', 'url(/images/top_3.jpg) 8px  center no-repeat');
					break;
				case 4:
					$('#topli_4').css('background', 'url(/images/top_4.jpg) 8px  center no-repeat');
					break;
			}
		}
	);
	$('.dark').hover(function(){
		$(this).css('background', 'rgba(10, 10, 10, 0.4) none repeat scroll 0% 0%;');
		$(this).find('a').css('text-decoration', 'underline');
	}, function(){
		$(this).css('background', '');
		$(this).find('a').css('text-decoration', 'none');
	});
	$('#more_telefon li').hover(function(){
		var per = $(this).attr('imgvalue');
		var per_hover = 'url(/images/top_' + per + '.jpg) 8px  center no-repeat #eeeef3';
		$(this).css('background', per_hover);
	}, function(){
		var per = $(this).attr('imgvalue');
		var per_over = 'url(/images/top_' + per + '.jpg) 8px  center no-repeat';
		$(this).css('background', per_over);
	});
	$('#table_col .img_span').each(function(){
		var width_elem = $(this).find('.span_div').width()+65;
		$(this).width(width_elem);
	})
	$('.hiddeble_sort').on('click', function(){
		if (parseInt($('#hidden_sort_show').val()) == 1){
			var curr = $('#main_type_sort').html();
			$('#main_type_sort').html($(this).html());
			switch ($(this).html()){
				case 'по цене (от меньшего)':
					shift_background = '170px';
					break;
				case 'по стажу':
					shift_background = '73px';
					break;
				case 'по цене (от большего)':
				case 'по количеству отзывов':
					shift_background = '165px';
					break;
				case 'по рейтингу':
					shift_background = '92px';
					break;
				case 'по популярности':
					shift_background = '130px';
					break;
			}
			// alert($(this).html());
			$(this).html(curr);
			$('#main_type_sort').css('background', 'url(/images/sort_top.png) ' + shift_background +  ' 10px no-repeat');
			$('.hiddeble_sort').addClass('hidden_sort');
			$('#hidden_sort_show').val(0);
		}
	})
	$('#main_type_sort').on('click', function(){
		var hidden_sort_show = parseInt($('#hidden_sort_show').val());
		if (hidden_sort_show == 0){
			$('.hiddeble_sort').removeClass('hidden_sort');
			$('#hidden_sort_show').val(1);
			$(this).css('background', 'url(/images/sort_down.png) ' + shift_background +  ' 10px no-repeat white');
		}
		else{
			$('.hiddeble_sort').addClass('hidden_sort');
			$('#hidden_sort_show').val(0);
			$(this).css('background', 'url(/images/sort_top.png) ' + shift_background +  ' 10px no-repeat');
		}
	})
})