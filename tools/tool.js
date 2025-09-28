$(document).ready(function () {
	function clearColor() {
		$('body').removeClass('color-green color-blue color-indigo color-turquoise color-darkorange color-orange color-red')
	}
	
	$('.js-colorswatch, .js-layoutswatch').on('click',function (e){
		$(this).parent().toggleClass('opened');
	})

	$('a[class*="color"]').on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		$this.siblings().removeClass('active');
		$this.addClass('active');
		if ($this.hasClass('color-green')) {
			clearColor();
			$('body').addClass('color-green')
		}
		if ($this.hasClass('color-blue')) {
			clearColor();
			$('body').addClass('color-blue')
		}
		if ($this.hasClass('color-indigo')) {
			clearColor();
			$('body').addClass('color-indigo')
		}
		if ($this.hasClass('color-turquoise')) {
			clearColor();
			$('body').addClass('color-turquoise')
		}
		if ($this.hasClass('color-orange')) {
			clearColor();
			$('body').addClass('color-orange')
		}
		if ($this.hasClass('color-darkorange')) {
			clearColor();
			$('body').addClass('color-darkorange')
		}
		if ($this.hasClass('color-red')) {
			clearColor();
			$('body').addClass('color-red')
		}
		if ($this.hasClass('color-yellow')) {
			clearColor();
		}
	})

})