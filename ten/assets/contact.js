/**
 *	@package	 Loyalé - HTML5 Template - version 1.0
 *	@copyright	 Copyright (C) 7Studio 2016 - seventhemes.com  All rights reserved.
 *	@license	 https://themeforest.net/licenses/terms/regular
**/

(function ($) {
'use strict';
	$(document).ready(function() {
		// Google Maps
		var latlng = new google.maps.LatLng(24.691015, 120.890030); // Change Lat & Lng to your own location
		var title = '天廚海鮮樓'; // Change marker title
		
		// styles
		var styles = [{
			featureType: "all",
			stylers: [
				{ hue: '#d6c0a3' },
				{ saturation: -80 },
				{ lightness: 0 },
				{ invert_lightness: false }
			]
		}];
		
		// options 
		var mapOptions = {
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			center: latlng,
			panControl: true,
			zoomControl: true,
			scaleControl: false,
			mapTypeControl: true,
			streetViewControl: true,
			overviewMapControl: false,
			zoom: 19,
			scrollwheel: false,
			draggable: true	};
		
		var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
		
		map.setOptions({styles: styles});
		
		var marker = new google.maps.Marker ({
			position: latlng,
			map: map,
					icon: 'assets/images/interface/map-marker.png',
					title: title
		});
		
		// Contact form validation
		$('#contact').validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true,
				},
				message: {
					required: true
				}
			},
			messages: {
				name: {
					required: "姓名為必填欄位",
					minlength: "姓名應該至少包含兩個字"
				},
				email: {
					required: "email為必填欄位"
				},
				phone: {
					required: "聯絡電話為必填欄位"
				},
				message: {
					required: "訊息留言為必填欄位"
				}
			},
			submitHandler: function (form) {
				$(form).ajaxSubmit({
					type:"POST",
					data: $(form).serialize(),
					url:"contact.php",
					success: function() {
						$('#contact :input').attr('disabled', 'disabled');
						$('#success').removeClass('hide');
					},
					error: function() {
						$('#error').removeClass('hide');
					}
				});
			}
		});
	});
})(jQuery);