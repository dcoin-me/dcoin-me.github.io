
	(function ($) {
		$.fn.spin = function (opts, color) {
			var presets = {
				"tiny": {
					lines: 8,
					length: 2,
					width: 2,
					radius: 3
				},
				"small": {
					lines: 8,
					length: 4,
					width: 3,
					radius: 5
				},
				"large": {
					lines: 10,
					length: 8,
					width: 4,
					radius: 8
				}
			};
			if (Spinner) {
				return this.each(function () {
					var $this = $(this),
							data = $this.data();

					if (data.spinner) {
						data.spinner.stop();
						delete data.spinner;
					}
					if (opts !== false) {
						if (typeof opts === "string") {
							if (opts in presets) {
								opts = presets[opts];
							} else {
								opts = {};
							}
							if (color) {
								opts.color = color;
							}
						}
						data.spinner = new Spinner($.extend({
							color: $this.css('color')
						}, opts)).spin(this);
					}
				});
			} else {
				throw "Spinner class not available.";
			}
		};
	})(jQuery);


$('#save_email').bind('click', function () {

        $('#main1').spin();
	$.get( 'http://107.181.161.141/dcoin/free/free_coins_save_email.php', {
			'email' : $("#email").val(),
			'ref' : ref,
			}, function (data) {
			    if (data.string_id) {			    
				$("#int_id").text(data.int_id);	
				$("#string_id").text(data.string_id);	
				$("#main1").css("display", "none");	
				$("#main2").css("display", "block");
				$("#tw_link").attr("href", "http://twitter.com/home?status=Can%27t+wait+to+get+the+wallet+with+coins+from+%23dcoin+for+free.+Follow+the+new+distribution%3A+http%3A%2F%2Fdcoin.club%2Ffree-coins%2F%3Fref%3D"+data.string_id);
				$("#fb_link").attr("href", "http://www.facebook.com/share.php?u=http://dcoin.club/free-coins/?ref="+data.string_id+"&title=Can%27t+wait+to+get+the+wallet+with+coins+from+%23dcoin+for+free.+Follow+the+new+distribution%21");
			    }
			    else {
				$("#email_error").html('<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>'+data.error+'</div>');	
			    }
			    $('#main1').spin(false);
			}, 'JSON' );
} );

    var ref = '';
    $( document ).ready(function() {
	  var urlVar = window.location.search;
	  var regex = /ref\=(\w+)/;
	  var match = regex.exec(urlVar.substr(1));
	  ref = match[1];
    });