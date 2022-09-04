
	let winH;
	let secCount = $('section').length;

	$('.menu > li > a').on('click', function () {
		let href = $(this).attr('href');
		let secTop = $(href).offset().top;
		$('html').animate({'scrollTop' : secTop});

		$('.menu > li').removeClass('on');
		$(this).parent().addClass('on')
	});

	$('section').mousewheel(function(e,delta){
		if(delta > 0) {
			let prev = $(this).prev().offset().top;
			$('html').animate({'scrollTop' : prev});
		} else if(delta < 0) {
			let next = $(this).next().offset().top;
			$('html').animate({'scrollTop' : next});
		}
	});

	$(window).scroll(function() {
		let winH = $(window).height();
		let scrTop = $(this).scrollTop();
		$('h1').text(scrTop);

		for (let i=0; i < secCount; i++) {
			if(scrTop >= winH * i  && winH * (i + 1)) {
				$('.menu > li').removeClass('on');
			    $('.menu > li').eq(i).addClass('on')
			}
		}

		$('section').each(function(i) {
			let secTop = $(this).offset().top;

			if(scrTop >= secTop) {
				$('.menu > li').removeClass('on');
				$('.menu > li').eq(i).addClass('on')
			}

			if(i===1 || i===4 ) {
				$('body>div>h1').removeClass();
				$('body > div > h1').addClass('blue')
			} else {
				$('body>div>h1').removeClass('blue');
				$('body > div > h1').addClass('black')
			}
		})
	
		

	})
