/**
 * Created by Администратор on 01.06.2015.
 */



$(document).ready(function () {

	var validate_firstname = function () {
		var elem = $(".order_firstname");//1
		var value = $(".order_firstname").val();//2
		$(".order_firstname").val(value.trim());//3
		val = value.trim().length;//4
		var elem_result = $(".order_firstname").parent().next();//5
		if (val < 2 || val > 32 || value.trim().match(name_regexp) == null) {//6
			var error_text = $(".order_firstname_descr_text").text();//7
			elem_result.html(error_text);//8
			elem.addClass("input_access");//9
		} else {//10
			elem_result.html(checker);//11
			elem.removeClass("input_access");//12
		}//13
	};

    //
	//var validate_lastname = function () {
	//	var elem = $(".order_lastname");
	//	var value = $(".order_lastname").val();
	//	$(".order_lastname").val(value.trim());
	//	val = value.trim().length;
	//	var elem_result = $(".order_lastname").parent().next();
	//	if (val < 2 || val > 32 || value.trim().match(name_regexp) == null) {
	//		var error_text = $(".order_lastname_descr_text").text();
	//		elem_result.html(error_text);
	//		elem.addClass("input_access");
	//	} else {
	//		elem_result.html(checker);
	//		elem.removeClass("input_access");
	//	}
	//};
    //
	//var validate_phone = function () {
	//	var elem = $(".order_phone");
	//	var value = $(".order_phone").val();
	//	$(".order_phone").val(value.trim());
	//	val = value.trim().length;
	//	var elem_result = $(".order_phone").parent().next();
    //
	//	if (value.trim().match(phone_regexp) == null) {
	//		var error_text = $(".order_phone_descr_text").text();
	//		elem_result.html(error_text);
	//		elem.addClass("input_access");
	//	} else {
	//		elem_result.html(checker);
	//		elem.removeClass("input_access");
	//	}
	//};
    //
	//var validate_mail = function () {
	//	var elem = $(".order_mail");
	//	var value = $(".order_mail").val();
	//	$(".order_mail").val(value.trim());
	//	val = value.trim().length;
	//	var elem_result = $(".order_mail").parent().next();
    //
	//	if (value.trim().match(mail_regexp) == null) {
	//		var error_text = $(".order_mail_descr_text").text();
	//		elem_result.html(error_text);
	//		elem.addClass("input_access");
	//	} else {
	//		elem_result.html(checker);
	//		elem.removeClass("input_access");
	//	}
	//};
    //
	//var validate_country = function () {
	//	var elem = $(".order_country");
	//	var value = $("select.order_country option:selected").val();
	//	var val = value.trim();
	//	var elem_result = $(".order_country").parent().next();
    //
	//	if (value.trim().match(ids_regexp) == null) {
	//		var error_text = $(".order_country_descr_text").text();
	//		elem_result.html(error_text);
	//		elem.addClass("input_access");
	//	} else {
	//		elem_result.html(checker);
	//		elem.removeClass("input_access");
	//	}
	//};
    //
    //
	//var validate_city = function () {
	//	var elem = $(".order_city");
	//	var value = $("select.order_city option:selected").val();
	//	var val = value.trim();
	//	var elem_result = $(".order_city").parent().next();
    //
	//	if (value.trim().match(ids_regexp) == null) {
	//		var error_text = $(".order_city_descr_text").text();
	//		elem_result.html(error_text);
	//		elem.addClass("input_access");
	//	} else {
	//		elem_result.html(checker);
	//		elem.removeClass("input_access");
	//	}
	//};
    //
	//var validate_comment = function () {
	//	var elem = $(".order_comment");
	//	var value = $(".order_comment").val();
	//	val = value.trim().length;
	//	var elem_result = $(".order_comment").parent().next();
    //
	//	if (val < comment_min_size) {
	//		var error_text = $(".order_comment_descr_text").text();
	//		var error_text_symbols = $(".size_limit_text_1").text();
	//		var error_text_symbols_end = $(".size_limit_text").text();
	//		elem_result.html(error_text + "<br>" + error_text_symbols + "<b>" + (comment_min_size - val) + "</b>" + error_text_symbols_end);
	//		elem.addClass("input_access");
	//	} else if (val > comment_max_size) {
	//		var error_text = $(".order_comment_descr_text").text();
	//		var error_text_symbols = $(".size_limit_text_2").text();
	//		var error_text_symbols_end = $(".size_limit_text").text();
    //
	//		elem_result.html(error_text + "<br>" + error_text_symbols + "<b>" + (val - comment_max_size) + "</b>" + error_text_symbols_end);
	//		elem.addClass("input_access");
	//	} else {
	//		elem_result.html(checker);
	//		elem.removeClass("input_access");
	//	}
	//};
    //
	//$("form[name=full_order_form]").submit(function () {
	//	var field_access_count = $("form[name=full_order_form] .input_access").size();
	//	if (field_access_count == 0) {
	//		return true;
	//	} else {
	//		return false;
	//	}
	//});
    //
	//$(".order_firstname").on("keyup change", function () {
	//	validate_firstname();
	//});
    //
	//$(".order_lastname").on("keyup change", function () {
	//	validate_lastname();
	//});
    //
	//$(".order_mail").on("keyup change", function () {
	//	validate_mail();
	//});
    //
	//$(".order_phone").on("keyup change", function () {
	//	validate_phone();
	//});
    //
	//$(".order_country").on("change select", function () {
	//	validate_country();
	//});
    //
	//$(".order_city").on("change select", function () {
	//	validate_city();
	//});
    //
	//$(".order_comment").on("keyup change", function () {
	//	validate_comment();
	//});
    //
	//validate_firstname();
	//validate_lastname();
	//validate_phone();
	//validate_mail();
	//validate_country();
	//validate_city();
	//validate_comment();

});