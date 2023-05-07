//javascript to be executed when dom is loaded

let checked_item = {};
$(document).ready(function() {
	$('input:checkbox').change(function() {
		if ($(this).is(':checked')) {
			checked_item[$(this).data('id') = $(this).data('name');
		} else {
			delete checked_item[$(this).data('id')];
		}
		$('div.amenities h4').html(function() {
			let amenities = [];
			Object.keys(checked_item).forEach(function (key) {
				amenities.push(checked_item[key]);
			});
			if (amenities === 0) {
				return('&nbsp');
			}
			return (amenities.join(', '));
		});
	});

const apiStatus = $('DIV#api_status');
$.ajax('http://0.0.0.0:5001/api/v1/status/').done(function (data) {
	if (data.status === 'OK') {
		apiStatus.addClass('avaliable');
	} else {
		apiStatus.removeClass('avaliable');
	}
	});
});
