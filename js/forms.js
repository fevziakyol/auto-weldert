(function ($) {

	"use strict";

	var $document = $(document),
		$window = $(window),
		forms = {
			contactForm: $('#contactform'),
			appointmentForm: $('#appointment-form') ,
      quoteForm: $('#quote-form')
		};

	$document.ready(function () {

		// contact page form
		if (forms.contactForm.length) {
			var $contactform = forms.contactForm;
			const FORM_SUBMIT_RAMA_AJAX_URL = "https://formsubmit.co/ajax/37d44ec5fa203d86dcfaac9d035764f7";

			$contactform.validate({
				rules: {
					name: { required: true, minlength: 2 },
					phone: { required: true, digits: true, minlength: 10 },
					email: { required: true, email: true },
					message: { required: true, minlength: 20 }
				},
				messages: {
					name: {
						required: "Please enter your name.",
						minlength: "Your name must be at least 2 characters long."
					},
					phone: {
						required: "Please enter your phone number.",
						digits: "The phone number must contain only digits."
					},
					email: {
						required: "Please enter your email address.",
						email: "Please enter a valid email address."
					},
					message: {
						required: "Please enter your message.",
						minlength: "Your message must be at least 20 characters long."
					}
				},
				submitHandler: function (form) {
					var formData = convertFormToJSON(form);
					$.ajax({
						type: "POST",
						url: FORM_SUBMIT_RAMA_AJAX_URL,
						data: JSON.stringify(formData),
						contentType: "application/json",
						dataType: "json",
						headers: {
							'Accept': 'application/json'
						},

						success: function () {
							$('#success').fadeIn();
							$(form).each(function () {
								this.reset();
							});
						},
						error: function (xhr, status, error) {
							$('#contactform').fadeTo("slow", 0, function () {
								$('#error').fadeIn();
							});
							console.error("AJAX Hata:", xhr.responseText);
						}
					});
				}
			});
		}
		// datepicker
			if ($('.datetimepicker').length) {
				$('.datetimepicker').datetimepicker({
					format: 'DD/MM/YYYY',
					icons: {
						time: 'icon icon-clock',
						date: 'icon icon-calendar',
						up: 'icon icon-arrow_up',
						down: 'icon icon-arrow_down',
						previous: 'icon icon-arrow-left',
						next: 'icon icon-arrow-right',
						today: 'icon icon-today',
						clear: 'icon icon-trash',
						close: 'icon icon-cancel-music'
					}
				});
			}
			if ($('.timepicker').length) {
				$('.timepicker').datetimepicker({
					format: 'LT',
					icons: {
						time: 'icon icon-clock',
						up: 'icon icon-arrow_up',
						down: 'icon icon-arrow_down',
						previous: 'icon icon-arrow-left',
						next: 'icon icon-arrow-right'
					}
				});
			}

	});

  function convertFormToJSON(form) {
    var array = $(form).serializeArray();
    var json = {};

    $.each(array, function() {
      json[this.name] = this.value || '';
    });
    return json;
  }

})(jQuery);