/**
 * Global variables
 */
"use strict";

var userAgent = navigator.userAgent.toLowerCase(),
	initialDate = new Date(),

	$document = $(document),
	$window = $(window),
	$html = $("html"),
	$body = $("body"),

	isDesktop = $html.hasClass("desktop"),
	isIE = userAgent.indexOf("msie") != -1 ? parseInt(userAgent.split("msie")[1]) : userAgent.indexOf("trident") != -1 ? 11 : userAgent.indexOf("edge") != -1 ? 12 : false,
	isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
	windowReady = false,
	isTouch = "ontouchstart" in window,
	isNoviBuilder = false,
	onloadCaptchaCallback,

	plugins = {
		pointerEvents: isIE < 11 ? "js/pointer-events.min.js" : false,
		bootstrapTabs: $(".tabs"),
		materialParallax: $('.parallax-container'),
		copyrightYear: $('.copyright-year'),
		rdVideoPlayer: $(".rd-video-player"),
		responsiveTabs: $(".responsive-tabs"),
		maps: $(".google-map-container"),
		rdInputLabel: $(".form-label"),
		rdNavbar: $(".rd-navbar"),
		rdVideoBG: $(".rd-video"),
		regula: $("[data-constraints]"),
		stepper: $("input[type='number']"),
		radio: $("input[type='radio']"),
		checkbox: $(".checkbox-custom"),
		toggles: $(".toggle-custom"),
		preloader: $('.preloader'),
		owl: $(".owl-carousel"),
		swiper: $('.swiper-container'),
		lightGallery: $('[data-lightgallery="group"]'),
		lightGalleryItem: $('[data-lightgallery="item"]'),
		lightDynamicGalleryItem: $('[data-lightgallery="dynamic"]'),
		counter: document.querySelectorAll('.counter'),
		progressLinear: document.querySelectorAll('.progress-linear'),
		countdown: document.querySelectorAll('.countdown'),
		isotope: $(".isotope-wrap"),
		stacktable: $("table[data-responsive='true']"),
		customToggle: $("[data-custom-toggle]"),
		customWaypoints: $('[data-custom-scroll-to]'),
		selectFilter: $("select"),
		calendar: $(".rd-calendar"),
		pageLoader: $(".page-loader"),
		search: $('.rd-search'),
		searchResults: $('.rd-search-results'),
		rdMailForm: $(".rd-mailform"),
		iframeEmbed: $("iframe.embed-responsive-item"),
		checkoutRDTabs: $(".checkout-tabs"),
		facebookplugin: $('#fb-root'),
		captcha: $('.recaptcha'),
		fullCalendar: $("#calendar")
	};

/**
 * @desc Check the element was been scrolled into the view
 * @param {object} elem - jQuery object
 * @return {boolean}
 */
function isScrolledIntoView(elem) {
	if (isNoviBuilder) return true;
	return elem.offset().top + elem.outerHeight() >= $window.scrollTop() && elem.offset().top <= $window.scrollTop() + $window.height();
}

/**
 * @desc Calls a function when element has been scrolled into the view
 * @param {object} element - jQuery object
 * @param {function} func - init function
 */
function lazyInit(element, func) {
	var scrollHandler = function () {
		if ((!element.hasClass('lazy-loaded') && (isScrolledIntoView(element)))) {
			func.call(element);
			element.addClass('lazy-loaded');
		}
	};

	scrollHandler();
	$window.on('scroll', scrollHandler);
}

// Initialize scripts that require a loaded window
$window.on('load', function () {
	// Page loader & Page transition
	if (plugins.preloader.length && !isNoviBuilder) {
		pageTransition({
			target:            document.querySelector('.page'),
			delay:             0,
			duration:          500,
			classIn:           'fadeIn',
			classOut:          'fadeOut',
			classActive:       'animated',
			conditions:        function (event, link) {
				return link && !/(\#|javascript:void\(0\)|callto:|tel:|mailto:|:\/\/)/.test(link) && !event.currentTarget.hasAttribute('data-lightgallery');
			},
			onTransitionStart: function (options) {
				setTimeout(function () {
					plugins.preloader.removeClass('loaded');
				}, options.duration * .75);
			},
			onReady:           function () {
				plugins.preloader.addClass('loaded');
				windowReady = true;
			}
		});
	}

	// Progress Bar
	if (plugins.progressLinear) {
		for (var i = 0; i < plugins.progressLinear.length; i++) {
			var
				container = plugins.progressLinear[i],
				counter = aCounter({
					node:     container.querySelector('.progress-linear-counter'),
					duration: container.getAttribute('data-duration') || 1000,
					onStart:  function () {
						this.custom.bar.style.width = this.params.to + '%';
					}
				});

			counter.custom = {
				container: container,
				bar:       container.querySelector('.progress-linear-bar'),
				onScroll:  (function () {
					if ((Util.inViewport(this.custom.container) && !this.custom.container.classList.contains('animated')) || isNoviBuilder) {
						this.run();
						this.custom.container.classList.add('animated');
					}
				}).bind(counter),
				onBlur:    (function () {
					this.params.to = parseInt(this.params.node.textContent, 10);
					this.run();
				}).bind(counter)
			};

			if (isNoviBuilder) {
				counter.run();
				counter.params.node.addEventListener('blur', counter.custom.onBlur);
			} else {
				counter.custom.onScroll();
				document.addEventListener('scroll', counter.custom.onScroll);
			}
		}
	}



	// Material Parallax
	if (plugins.materialParallax.length) {
		if (!isNoviBuilder && !isIE && !isMobile) {
			plugins.materialParallax.parallax();
		} else {
			for (var i = 0; i < plugins.materialParallax.length; i++) {
				var $parallax = $(plugins.materialParallax[i]);

				$parallax.addClass('parallax-disabled');
				$parallax.css({"background-image": 'url(' + $parallax.data("parallax-img") + ')'});
			}
		}
	}

	// Isotope
	if (plugins.isotope.length) {
		for (var i = 0; i < plugins.isotope.length; i++) {
			var
				wrap = plugins.isotope[i],
				filterHandler = function (event) {
					event.preventDefault();
					for (var n = 0; n < this.isoGroup.filters.length; n++) this.isoGroup.filters[n].classList.remove('active');
					this.classList.add('active');
					this.isoGroup.isotope.arrange({filter: this.getAttribute("data-isotope-filter") !== '*' ? '[data-filter*="' + this.getAttribute("data-isotope-filter") + '"]' : '*'});
				},
				resizeHandler = function () {
					this.isoGroup.isotope.layout();
				};

			wrap.isoGroup = {};
			wrap.isoGroup.filters = wrap.querySelectorAll('[data-isotope-filter]');
			console.log( '[data-filter="'+ wrap.isoGroup.filters[0].getAttribute("data-isotope-filter") +'"]' );
			wrap.isoGroup.node = wrap.querySelector('.isotope');
			wrap.isoGroup.layout = wrap.isoGroup.node.getAttribute('data-isotope-layout') ? wrap.isoGroup.node.getAttribute('data-isotope-layout') : 'masonry';
			wrap.isoGroup.isotope = new Isotope(wrap.isoGroup.node, {
				itemSelector: '.isotope-item',
				layoutMode:   wrap.isoGroup.layout,
				filter:       wrap.isoGroup.filters[0].getAttribute("data-isotope-filter") === '*' ? '*' : '[data-filter="'+ wrap.isoGroup.filters[0].getAttribute("data-isotope-filter") +'"]',
				columnWidth:  (function () {
					if (wrap.isoGroup.node.hasAttribute('data-column-class')) return wrap.isoGroup.node.getAttribute('data-column-class');
					if (wrap.isoGroup.node.hasAttribute('data-column-width')) return parseFloat(wrap.isoGroup.node.getAttribute('data-column-width'));
				}())
			});

			for (var n = 0; n < wrap.isoGroup.filters.length; n++) {
				var filter = wrap.isoGroup.filters[n];
				filter.isoGroup = wrap.isoGroup;
				filter.addEventListener('click', filterHandler);
			}

			window.addEventListener('resize', resizeHandler.bind(wrap));
		}
	}

	/*if (plugins.isotope.length) {
		var i, j, isogroup = [];
		for (i = 0; i < plugins.isotope.length; i++) {
			var isotopeItem = plugins.isotope[i],
				filterItems = $(isotopeItem).closest('.isotope-wrap').find('[data-isotope-filter]'),
				iso = new Isotope(isotopeItem,
					{
						itemSelector: '.isotope-item',
						layoutMode: isotopeItem.getAttribute('data-isotope-layout') ? isotopeItem.getAttribute('data-isotope-layout') : 'masonry',
						filter: '*',
					}
				);

			isogroup.push(iso);

			filterItems.on("click", function (e) {
				e.preventDefault();
				var filter = $(this),
					iso = $('.isotope[data-isotope-group="' + this.getAttribute("data-isotope-group") + '"]'),
					filtersContainer = filter.closest(".isotope-filters");

				filtersContainer
					.find('.active')
					.removeClass("active");
				filter.addClass("active");

				iso.isotope({
					itemSelector: '.isotope-item',
					layoutMode: iso.attr('data-isotope-layout') ? iso.attr('data-isotope-layout') : 'masonry',
					filter: this.getAttribute("data-isotope-filter") == '*' ? '*' : '[data-filter*="' + this.getAttribute("data-isotope-filter") + '"]'
				});

				$window.trigger('resize');

				// If d3Charts contains in isotop, resize it on click.
				if (filtersContainer.hasClass('isotope-has-d3-graphs') && c3ChartsArray != undefined) {
					setTimeout(function () {
						for (var j = 0; j < c3ChartsArray.length; j++) {
							c3ChartsArray[j].resize();
						}
					}, 500);
				}

			}).eq(0).trigger("click");
		}

		$(window).on('load', function () {
			setTimeout(function () {
				var i;
				for (i = 0; i < isogroup.length; i++) {
					isogroup[i].element.className += " isotope--loaded";
					isogroup[i].layout();
				}
			}, 600);
		});
	}*/
});

/**
 * Initialize All Scripts
 */
$document.ready(function () {
	var isNoviBuilder = window.xMode;

	/**
	 * Wrapper to eliminate json errors
	 * @param {string} str - JSON string
	 * @returns {object} - parsed or empty object
	 */
	function parseJSON ( str ) {
		try {
			if ( str )  return JSON.parse( str );
			else return {};
		} catch ( error ) {
			return {};
		}
	}

	/**
	 * @desc Sets the actual previous index based on the position of the slide in the markup. Should be the most recent action.
	 * @param {object} swiper - swiper instance
	 */
	function setRealPrevious(swiper) {
		var element = swiper.$wrapperEl[0].children[swiper.activeIndex];
		swiper.realPrevious = Array.prototype.indexOf.call(element.parentNode.children, element);
	}

	/**
	 * @desc Sets slides background images from attribute 'data-slide-bg'
	 * @param {object} swiper - swiper instance
	 */
	function setBackgrounds(swiper) {
		var swipersBg = swiper.el.querySelectorAll('[data-slide-bg]');

		for (var i = 0; i < swipersBg.length; i++) {
			var swiperBg = swipersBg[i];
			swiperBg.style.backgroundImage = 'url(' + swiperBg.getAttribute('data-slide-bg') + ')';
		}
	}

	/**
	 * @desc Animate captions on active slides
	 * @param {object} swiper - swiper instance
	 */
	function initCaptionAnimate(swiper) {
		var
			animate = function (caption) {
				return function () {
					var duration;
					if (duration = caption.getAttribute('data-caption-duration')) caption.style.animationDuration = duration + 'ms';
					caption.classList.remove('not-animated');
					caption.classList.add(caption.getAttribute('data-caption-animate'));
					caption.classList.add('animated');
				};
			},
			initializeAnimation = function (captions) {
				for (var i = 0; i < captions.length; i++) {
					var caption = captions[i];
					caption.classList.remove('animated');
					caption.classList.remove(caption.getAttribute('data-caption-animate'));
					caption.classList.add('not-animated');
				}
			},
			finalizeAnimation = function (captions) {
				for (var i = 0; i < captions.length; i++) {
					var caption = captions[i];
					if (caption.getAttribute('data-caption-delay')) {
						setTimeout(animate(caption), Number(caption.getAttribute('data-caption-delay')));
					} else {
						animate(caption)();
					}
				}
			};

		// Caption parameters
		swiper.params.caption = {
			animationEvent: 'slideChangeTransitionEnd'
		};

		initializeAnimation(swiper.$wrapperEl[0].querySelectorAll('[data-caption-animate]'));
		finalizeAnimation(swiper.$wrapperEl[0].children[swiper.activeIndex].querySelectorAll('[data-caption-animate]'));

		if (swiper.params.caption.animationEvent === 'slideChangeTransitionEnd') {
			swiper.on(swiper.params.caption.animationEvent, function () {
				initializeAnimation(swiper.$wrapperEl[0].children[swiper.previousIndex].querySelectorAll('[data-caption-animate]'));
				finalizeAnimation(swiper.$wrapperEl[0].children[swiper.activeIndex].querySelectorAll('[data-caption-animate]'));
			});
		} else {
			swiper.on('slideChangeTransitionEnd', function () {
				initializeAnimation(swiper.$wrapperEl[0].children[swiper.previousIndex].querySelectorAll('[data-caption-animate]'));
			});

			swiper.on(swiper.params.caption.animationEvent, function () {
				finalizeAnimation(swiper.$wrapperEl[0].children[swiper.activeIndex].querySelectorAll('[data-caption-animate]'));
			});
		}
	}

	/**
	 * @desc Google map function for getting latitude and longitude
	 */
	function getLatLngObject(str, marker, map, callback) {
		var coordinates = {};
		try {
			coordinates = JSON.parse(str);
			callback(new google.maps.LatLng(
				coordinates.lat,
				coordinates.lng
			), marker, map)
		} catch (e) {
			map.geocoder.geocode({'address': str}, function (results, status) {
				if (status === google.maps.GeocoderStatus.OK) {
					var latitude = results[0].geometry.location.lat();
					var longitude = results[0].geometry.location.lng();

					callback(new google.maps.LatLng(
						parseFloat(latitude),
						parseFloat(longitude)
					), marker, map)
				}
			})
		}
	}

	/**
	 * @desc Initialize Google maps
	 */
	function initMaps() {
		var key;

		for (var i = 0; i < plugins.maps.length; i++) {
			if (plugins.maps[i].hasAttribute("data-key")) {
				key = plugins.maps[i].getAttribute("data-key");
				break;
			}
		}

		$.getScript('//maps.google.com/maps/api/js?' + (key ? 'key=' + key + '&' : '') + 'libraries=geometry,places&v=quarterly', function () {
			var head = document.getElementsByTagName('head')[0],
				insertBefore = head.insertBefore;

			head.insertBefore = function (newElement, referenceElement) {
				if (newElement.href && newElement.href.indexOf('//fonts.googleapis.com/css?family=Roboto') !== -1 || newElement.innerHTML.indexOf('gm-style') !== -1) {
					return;
				}
				insertBefore.call(head, newElement, referenceElement);
			};
			var geocoder = new google.maps.Geocoder;
			for (var i = 0; i < plugins.maps.length; i++) {
				var zoom = parseInt(plugins.maps[i].getAttribute("data-zoom"), 10) || 11;
				var styles = plugins.maps[i].hasAttribute('data-styles') ? JSON.parse(plugins.maps[i].getAttribute("data-styles")) : [];
				var center = plugins.maps[i].getAttribute("data-center") || "New York";

				// Initialize map
				var map = new google.maps.Map(plugins.maps[i].querySelectorAll(".google-map")[0], {
					zoom:        zoom,
					styles:      styles,
					scrollwheel: false,
					center:      {
						lat: 0,
						lng: 0
					}
				});

				// Add map object to map node
				plugins.maps[i].map = map;
				plugins.maps[i].geocoder = geocoder;
				plugins.maps[i].keySupported = true;
				plugins.maps[i].google = google;

				// Get Center coordinates from attribute
				getLatLngObject(center, null, plugins.maps[i], function (location, markerElement, mapElement) {
					mapElement.map.setCenter(location);
				});

				// Add markers from google-map-markers array
				var markerItems = plugins.maps[i].querySelectorAll(".google-map-markers li");

				if (markerItems.length) {
					var markers = [];
					for (var j = 0; j < markerItems.length; j++) {
						var markerElement = markerItems[j];
						getLatLngObject(markerElement.getAttribute("data-location"), markerElement, plugins.maps[i], function (location, markerElement, mapElement) {
							var icon = markerElement.getAttribute("data-icon") || mapElement.getAttribute("data-icon");
							var activeIcon = markerElement.getAttribute("data-icon-active") || mapElement.getAttribute("data-icon-active");
							var info = markerElement.getAttribute("data-description") || "";
							var infoWindow = new google.maps.InfoWindow({
								content: info
							});
							markerElement.infoWindow = infoWindow;
							var markerData = {
								position: location,
								map:      mapElement.map
							}
							if (icon) {
								markerData.icon = icon;
							}
							var marker = new google.maps.Marker(markerData);
							markerElement.gmarker = marker;
							markers.push({
								markerElement: markerElement,
								infoWindow:    infoWindow
							});
							marker.isActive = false;
							// Handle infoWindow close click
							google.maps.event.addListener(infoWindow, 'closeclick', (function (markerElement, mapElement) {
								var markerIcon = null;
								markerElement.gmarker.isActive = false;
								markerIcon = markerElement.getAttribute("data-icon") || mapElement.getAttribute("data-icon");
								markerElement.gmarker.setIcon(markerIcon);
							}).bind(this, markerElement, mapElement));


							// Set marker active on Click and open infoWindow
							google.maps.event.addListener(marker, 'click', (function (markerElement, mapElement) {
								var markerIcon;
								if (markerElement.infoWindow.getContent().length === 0) return;
								var gMarker, currentMarker = markerElement.gmarker, currentInfoWindow;
								for (var k = 0; k < markers.length; k++) {
									if (markers[k].markerElement === markerElement) {
										currentInfoWindow = markers[k].infoWindow;
									}
									gMarker = markers[k].markerElement.gmarker;
									if (gMarker.isActive && markers[k].markerElement !== markerElement) {
										gMarker.isActive = false;
										markerIcon = markers[k].markerElement.getAttribute("data-icon") || mapElement.getAttribute("data-icon")
										gMarker.setIcon(markerIcon);
										markers[k].infoWindow.close();
									}
								}

								currentMarker.isActive = !currentMarker.isActive;
								if (currentMarker.isActive) {
									if (markerIcon = markerElement.getAttribute("data-icon-active") || mapElement.getAttribute("data-icon-active")) {
										currentMarker.setIcon(markerIcon);
									}

									currentInfoWindow.open(map, marker);
								} else {
									if (markerIcon = markerElement.getAttribute("data-icon") || mapElement.getAttribute("data-icon")) {
										currentMarker.setIcon(markerIcon);
									}
									currentInfoWindow.close();
								}
							}).bind(this, markerElement, mapElement))
						})
					}
				}
			}
		});
	}

	/**
	 * @desc Create live search results
	 * @param {object} options
	 */
	function liveSearch(options, handler) {
		$('#' + options.live).removeClass('cleared').html();
		options.current++;
		options.spin.addClass('loading');
		$.get(handler, {
			s:          decodeURI(options.term),
			liveSearch: options.live,
			dataType:   "html",
			liveCount:  options.liveCount,
			filter:     options.filter,
			template:   options.template
		}, function (data) {
			options.processed++;
			var live = $('#' + options.live);
			if ((options.processed === options.current) && !live.hasClass('cleared')) {
				live.find('> #search-results').removeClass('active');
				live.html(data);
				setTimeout(function () {
					live.find('> #search-results').addClass('active');
				}, 50);
			}
			options.spin.parents('.rd-search').find('.input-group-addon').removeClass('loading');
		})
	}

	/**
	 * attachFormValidator
	 * @description  attach form validation to elements
	 */
	function attachFormValidator(elements) {
		for (var i = 0; i < elements.length; i++) {
			var o = $(elements[i]), v;
			o.addClass("form-control-has-validation").after("<span class='form-validation'></span>");
			v = o.parent().find(".form-validation");
			if (v.is(":last-child")) {
				o.addClass("form-control-last-child");
			}
		}

		elements
			.on('input change propertychange blur', function (e) {
				var $this = $(this), results;

				if (e.type != "blur") {
					if (!$this.parent().hasClass("has-error")) {
						return;
					}
				}

				if ($this.parents('.rd-mailform').hasClass('success')) {
					return;
				}

				if ((results = $this.regula('validate')).length) {
					for (i = 0; i < results.length; i++) {
						$this.siblings(".form-validation").text(results[i].message).parent().addClass("has-error")
					}
				} else {
					$this.siblings(".form-validation").text("").parent().removeClass("has-error")
				}
			})
			.regula('bind');
	}

	/**
	 * isValidated
	 * @description  check if all elemnts pass validation
	 */
	function isValidated(elements, captcha) {
		var results, errors = 0;

		if (elements.length) {
			for (var j = 0; j < elements.length; j++) {

				var $input = $(elements[j]);
				if ((results = $input.regula('validate')).length) {
					for (var k = 0; k < results.length; k++) {
						errors++;
						$input.siblings(".form-validation").text(results[k].message).parent().addClass("has-error");
					}
				} else {
					$input.siblings(".form-validation").text("").parent().removeClass("has-error")
				}
			}

			if (captcha) {
				if (captcha.length) {
					return validateReCaptcha(captcha) && errors == 0
				}
			}

			return errors == 0;
		}
		return true;
	}

	/**
	 * @desc Validate google reCaptcha
	 * @param {object} captcha - captcha object for validation
	 * @return {boolean}
	 */
	function validateReCaptcha(captcha) {
		var captchaToken = captcha.find('.g-recaptcha-response').val();

		if (captchaToken.length === 0) {
			captcha
				.siblings('.form-validation')
				.html('Please, prove that you are not robot.')
				.addClass('active');
			captcha
				.closest('.form-wrap')
				.addClass('has-error');

			captcha.on('propertychange', function () {
				var $this = $(this),
					captchaToken = $this.find('.g-recaptcha-response').val();

				if (captchaToken.length > 0) {
					$this
						.closest('.form-wrap')
						.removeClass('has-error');
					$this
						.siblings('.form-validation')
						.removeClass('active')
						.html('');
					$this.off('propertychange');
				}
			});

			return false;
		}

		return true;
	}

	/**
	 * @desc Initialize Google reCaptcha
	 */
	window.onloadCaptchaCallback = function () {
		for (var i = 0; i < plugins.captcha.length; i++) {
			var
				$captcha = $(plugins.captcha[i]),
				resizeHandler = (function () {
					var
						frame = this.querySelector('iframe'),
						inner = this.firstElementChild,
						inner2 = inner.firstElementChild,
						containerRect = null,
						frameRect = null,
						scale = null;

					inner2.style.transform = '';
					inner.style.height = 'auto';
					inner.style.width = 'auto';

					containerRect = this.getBoundingClientRect();
					frameRect = frame.getBoundingClientRect();
					scale = containerRect.width / frameRect.width;

					if (scale < 1) {
						inner2.style.transform = 'scale(' + scale + ')';
						inner.style.height = (frameRect.height * scale) + 'px';
						inner.style.width = (frameRect.width * scale) + 'px';
					}
				}).bind(plugins.captcha[i]);

			grecaptcha.render(
				$captcha.attr('id'),
				{
					sitekey:  $captcha.attr('data-sitekey'),
					size:     $captcha.attr('data-size') ? $captcha.attr('data-size') : 'normal',
					theme:    $captcha.attr('data-theme') ? $captcha.attr('data-theme') : 'light',
					callback: function () {
						$('.recaptcha').trigger('propertychange');
					}
				}
			);

			$captcha.after("<span class='form-validation'></span>");

			if (plugins.captcha[i].hasAttribute('data-auto-size')) {
				resizeHandler();
				window.addEventListener('resize', resizeHandler);
			}
		}
	};

	/**
	 * makeUniqueRandom
	 * @description  make random for gallery tabs
	 */
	function makeUniqueRandom(count) {
		if (!uniqueRandoms.length) {
			for (var i = 0; i < count; i++) {
				uniqueRandoms.push(i);
			}
		}
		var index = Math.floor(Math.random() * uniqueRandoms.length);
		var val = uniqueRandoms[index];
		uniqueRandoms.splice(index, 1);
		return val;
	}

	/**
	 * makeVisible
	 * @description  set class to gallery tabs to make it visible
	 */
	function makeVisible(el) {
		var count = el.length,
			k = 0,
			step = 2.5;
		for (var i = 0; i < count; i++) {
			timer = setTimeout(function () {
				var rand = makeUniqueRandom(count);
				el.eq(rand).addClass('visible');
			}, k * 35);
			k += step;
		}
		timer2 = setTimeout(function () {
			el.not('.visible').addClass('visible');
		}, count * step * 35)
	}

	/**
	 * makeInVisible
	 * @description  set class to gallery tabs to make it invisible
	 */
	function makeInvisible() {
		var el = $('.image.visible');
		el.removeClass('visible');
		uniqueRandoms = [];
		clearTimeout(timer);
		clearTimeout(timer2);
	}

	/**
	 * initOwlCarousel
	 * @description  Init owl carousel plugin
	 */
	function initOwlCarousel(c) {
		var aliaces = ["-", "-xs-", "-sm-", "-md-", "-lg-"],
			values = [0, 480, 768, 992, 1200],
			responsive = {},
			j, k;

		for (j = 0; j < values.length; j++) {
			responsive[values[j]] = {};
			for (k = j; k >= -1; k--) {
				if (!responsive[values[j]]["items"] && c.attr("data" + aliaces[k] + "items")) {
					responsive[values[j]]["items"] = k < 0 ? 1 : parseInt(c.attr("data" + aliaces[k] + "items"), 10);
				}
				if (!responsive[values[j]]["stagePadding"] && responsive[values[j]]["stagePadding"] !== 0 && c.attr("data" + aliaces[k] + "stage-padding")) {
					responsive[values[j]]["stagePadding"] = k < 0 ? 0 : parseInt(c.attr("data" + aliaces[k] + "stage-padding"), 10);
				}
				if (!responsive[values[j]]["margin"] && responsive[values[j]]["margin"] !== 0 && c.attr("data" + aliaces[k] + "margin")) {
					responsive[values[j]]["margin"] = k < 0 ? 30 : parseInt(c.attr("data" + aliaces[k] + "margin"), 10);
				}
			}
		}

		// Enable custom pagination
		if (c.attr('data-dots-custom')) {
			c.on("initialized.owl.carousel", function (event) {
				var carousel = $(event.currentTarget),
					customPag = $(carousel.attr("data-dots-custom")),
					active = 0;

				if (carousel.attr('data-active')) {
					active = parseInt(carousel.attr('data-active'), 10);
				}

				carousel.trigger('to.owl.carousel', [active, 300, true]);
				customPag.find("[data-owl-item='" + active + "']").addClass("active");

				customPag.find("[data-owl-item]").on('click', function (e) {
					e.preventDefault();
					carousel.trigger('to.owl.carousel', [parseInt(this.getAttribute("data-owl-item"), 10), 300, true]);
				});

				carousel.on("translate.owl.carousel", function (event) {
					customPag.find(".active").removeClass("active");
					customPag.find("[data-owl-item='" + event.item.index + "']").addClass("active")
				});
			});
		}

		c.owlCarousel({
			autoplay: isNoviBuilder ? false: c.attr("data-autoplay") === "true",
			loop: isNoviBuilder ? false : c.attr("data-loop") !== "false",
			items: 1,
			dotsContainer: c.attr("data-pagination-class") || false,
			navContainer: c.attr("data-navigation-class") || false,
			mouseDrag: isNoviBuilder ? false : c.attr("data-mouse-drag") !== "false",
			nav: c.attr("data-nav") === "true",
			dots: ( isNoviBuilder && c.attr("data-nav") !== "true" ) ? true : c.attr("data-dots") === "true",
			dotsEach: c.attr("data-dots-each") ? parseInt(c.attr("data-dots-each"), 10) : false,
			animateIn: c.attr('data-animation-in') ? c.attr('data-animation-in') : false,
			animateOut: c.attr('data-animation-out') ? c.attr('data-animation-out') : false,
			responsive: responsive
		});
	}

	/**
	 * @desc Initialize the gallery with set of images
	 * @param {object} itemsToInit - jQuery object
	 * @param {string} [addClass] - additional gallery class
	 */
	function initLightGallery(itemsToInit, addClass) {
		if (!isNoviBuilder) {
			$(itemsToInit).lightGallery({
				thumbnail: $(itemsToInit).attr("data-lg-thumbnail") !== "false",
				selector:  "[data-lightgallery='item']",
				autoplay:  $(itemsToInit).attr("data-lg-autoplay") === "true",
				pause:     parseInt($(itemsToInit).attr("data-lg-autoplay-delay")) || 5000,
				addClass:  addClass,
				mode:      $(itemsToInit).attr("data-lg-animation") || "lg-slide",
				loop:      $(itemsToInit).attr("data-lg-loop") !== "false"
			});
		}
	}

	/**
	 * @desc Initialize the gallery with dynamic addition of images
	 * @param {object} itemsToInit - jQuery object
	 * @param {string} [addClass] - additional gallery class
	 */
	function initDynamicLightGallery(itemsToInit, addClass) {
		if (!isNoviBuilder) {
			$(itemsToInit).on("click", function () {
				$(itemsToInit).lightGallery({
					thumbnail: $(itemsToInit).attr("data-lg-thumbnail") !== "false",
					selector:  "[data-lightgallery='item']",
					autoplay:  $(itemsToInit).attr("data-lg-autoplay") === "true",
					pause:     parseInt($(itemsToInit).attr("data-lg-autoplay-delay")) || 5000,
					addClass:  addClass,
					mode:      $(itemsToInit).attr("data-lg-animation") || "lg-slide",
					loop:      $(itemsToInit).attr("data-lg-loop") !== "false",
					dynamic:   true,
					dynamicEl: JSON.parse($(itemsToInit).attr("data-lg-dynamic-elements")) || []
				});
			});
		}
	}

	/**
	 * @desc Initialize the gallery with one image
	 * @param {object} itemToInit - jQuery object
	 * @param {string} [addClass] - additional gallery class
	 */
	function initLightGalleryItem(itemToInit, addClass) {
		if (!isNoviBuilder) {
			$(itemToInit).lightGallery({
				selector:            "this",
				addClass:            addClass,
				counter:             false,
				youtubePlayerParams: {
					modestbranding: 1,
					showinfo:       0,
					rel:            0,
					controls:       0
				},
				vimeoPlayerParams:   {
					byline:   0,
					portrait: 0
				}
			});
		}
	}

	/**
	 * IE Polyfills
	 * @description  Adds some loosing functionality to IE browsers
	 */
	if (isIE) {
		if (isIE < 10) {
			$html.addClass("lt-ie-10");
		}

		if (isIE < 11) {
			if (plugins.pointerEvents) {
				$.getScript(plugins.pointerEvents)
					.done(function () {
						$html.addClass("ie-10");
						PointerEventsPolyfill.initialize({});
					});
			}
		}

		if (isIE === 11) {
			$("html").addClass("ie-11");
		}

		if (isIE === 12) {
			$("html").addClass("ie-edge");
		}
	}

	// Swiper
	if (plugins.swiper.length) {

		for (var i = 0; i < plugins.swiper.length; i++) {

			var
				node = plugins.swiper[i],
				params = parseJSON(node.getAttribute('data-swiper')),
				defaults = {
					speed:      1000,
					loop:       true,
					pagination: {
						el:        '.swiper-pagination',
						clickable: true
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
					autoplay:   {
						delay: 5000
					}
				},
				xMode = {
					autoplay:      false,
					loop:          false,
					simulateTouch: false
				};

			params.on = {
				init: function () {
					setBackgrounds(this);
					setRealPrevious(this);
					initCaptionAnimate(this);

					// Real Previous Index must be set recent
					this.on('slideChangeTransitionEnd', function () {
						setRealPrevious(this);
					});
				}
			};

			new Swiper( node, Util.merge( isNoviBuilder ? [ defaults, params, xMode ] : [ defaults, params ] ) );
		}
	}

	// Copyright Year (Evaluates correct copyright year)
	if (plugins.copyrightYear.length) {
		plugins.copyrightYear.text(initialDate.getFullYear());
	}

	/**
	 * Bootstrap tabs
	 * @description Activate Bootstrap Tabs
	 */
	if (plugins.bootstrapTabs.length) {
		var i;
		for (i = 0; i < plugins.bootstrapTabs.length; i++) {
			var bootstrapTab = $(plugins.bootstrapTabs[i]);

			bootstrapTab.on("click", "a", function (event) {
				event.preventDefault();
				$(this).tab('show');
			});
		}
	}

	/**
	 * RD Video Player
	 * @description Enables RD Video player plugin
	 */
	function hidePlaylist() {
		$(".rd-video-player").removeClass("playlist-show");
	}

	function showPlaylist() {
		$(".rd-video-player").addClass("playlist-show");
	}

	if (plugins.rdVideoPlayer.length) {
		var i;
		for (i = 0; i < plugins.rdVideoPlayer.length; i++) {
			var videoItem = $(plugins.rdVideoPlayer[i]);

			$window.on("scroll", $.proxy(function () {
				var video = $(this);
				if (isDesktop && !video.hasClass("played") && video.hasClass('play-on-scroll') && isScrolledIntoView(video)) {
					video.find("video")[0].play();
					video.addClass("played");
				}
			}, videoItem));

			videoItem.RDVideoPlayer({
				callbacks: {
					onPlay: hidePlaylist,
					onPaused: showPlaylist,
					onEnded: showPlaylist
				}
			});
			$window.on('load', showPlaylist);

			var volumeWrap = $(".rd-video-volume-wrap");

			volumeWrap.on("mouseenter", function () {
				$(this).addClass("hover")
			});

			volumeWrap.on("mouseleave", function () {
				$(this).removeClass("hover")
			});

			if (isTouch) {
				volumeWrap.find(".rd-video-volume").on("click", function () {
					$(this).toggleClass("hover")
				});
				$document.on("click", function (e) {
					if (!$(e.target).is(volumeWrap) && $(e.target).parents(volumeWrap).length == 0) {
						volumeWrap.find(".rd-video-volume").removeClass("hover")
					}
				})
			}
		}
	}

	/**
	 * Responsive Tabs
	 * @description Enables Responsive Tabs plugin
	 */
	if (plugins.responsiveTabs.length) {
		var i = 0;
		for (i = 0; i < plugins.responsiveTabs.length; i++) {
			var $this = $(plugins.responsiveTabs[i]);
			$this.easyResponsiveTabs({
				type: $this.attr("data-type"),
				tabidentify: $this.find(".resp-tabs-list").attr("data-group") || "tab"
			});
		}
	}

	// Google maps
	if (plugins.maps.length) {
		lazyInit(plugins.maps, initMaps);
	}

	/**
	 * RD Input Label
	 * @description Enables RD Input Label Plugin
	 */
	if (plugins.rdInputLabel.length) {
		plugins.rdInputLabel.RDInputLabel();
	}

	/**
	 * Stepper
	 * @description Enables Stepper Plugin
	 */
	if (plugins.stepper.length) {
		plugins.stepper.stepper({
			labels: {
				up: "",
				down: ""
			}
		});
	}

	/**
	 * Radio
	 * @description Add custom styling options for input[type="radio"]
	 */
	if (plugins.radio.length) {
		var i;
		for (i = 0; i < plugins.radio.length; i++) {
			var $this = $(plugins.radio[i]);
			$this.addClass("radio-custom").after("<span class='radio-custom-dummy'></span>")
		}
	}

	/**
	 * Checkbox
	 * @description Add custom styling options for input[type="checkbox"]
	 */
	if (plugins.checkbox.length) {
		var i;
		for (i = 0; i < plugins.checkbox.length; i++) {
			var $this = $(plugins.checkbox[i]);
			$this.after("<span class='checkbox-custom-dummy'></span>")
		}
	}

	/**
	 * Toggles
	 * @description Make toggles from input[type="checkbox"]
	 */
	if (plugins.toggles.length) {
		var i;
		for (i = 0; i < plugins.toggles.length; i++) {
			var $this = $(plugins.toggles[i]);
			$this.after("<span class='toggle-custom-dummy'></span>")
		}
	}

	/**
	 * Regula
	 * @description Enables Regula plugin
	 */
	if (plugins.regula.length) {
		attachFormValidator(plugins.regula);
	}

	/**
	 * WOW
	 * @description Enables Wow animation plugin
	 */
	if ($html.hasClass('desktop') && $html.hasClass("wow-animation") && $(".wow").length) {
		new WOW().init();
	}

	/**
	 * Owl carousel
	 * @description Enables Owl carousel plugin
	 */
	if (plugins.owl.length) {
		for (var i = 0; i < plugins.owl.length; i++) {
			var c = $(plugins.owl[i]);
			plugins.owl[i] = c;

			//skip owl in bootstrap tabs
			if (!c.parents('.tab-content').length) {
				initOwlCarousel(c);
			}
		}
	}

	/**
	 * RD Video
	 * @description Enables RD Video plugin
	 */
	if (plugins.rdVideoBG.length) {
		for (i = 0; i < plugins.rdVideoBG.length; i++) {
			var videoItem = $(plugins.rdVideoBG[i]);
			videoItem.RDVideo({});
		}
	}

	// RD Navbar
	if (plugins.rdNavbar.length) {
		var
			navbar = plugins.rdNavbar,
			aliases = {
				'-':     0,
				'-sm-':  576,
				'-md-':  768,
				'-lg-':  992,
				'-xl-':  1200,
				'-xxl-': 1600
			},
			responsive = {};

		for (var alias in aliases) {
			var link = responsive[aliases[alias]] = {};
			if (navbar.attr('data' + alias + 'layout')) link.layout = navbar.attr('data' + alias + 'layout');
			if (navbar.attr('data' + alias + 'device-layout')) link.deviceLayout = navbar.attr('data' + alias + 'device-layout');
			if (navbar.attr('data' + alias + 'hover-on')) link.focusOnHover = navbar.attr('data' + alias + 'hover-on') === 'true';
			if (navbar.attr('data' + alias + 'auto-height')) link.autoHeight = navbar.attr('data' + alias + 'auto-height') === 'true';
			if (navbar.attr('data' + alias + 'stick-up-offset')) link.stickUpOffset = navbar.attr('data' + alias + 'stick-up-offset');
			if (navbar.attr('data' + alias + 'stick-up')) link.stickUp = navbar.attr('data' + alias + 'stick-up') === 'true';
			if (isNoviBuilder) link.stickUp = false;
			else if (navbar.attr('data' + alias + 'stick-up')) link.stickUp = navbar.attr('data' + alias + 'stick-up') === 'true';
		}

		plugins.rdNavbar.RDNavbar({
			anchorNav:    !isNoviBuilder,
			stickUpClone: (plugins.rdNavbar.attr("data-stick-up-clone") && !isNoviBuilder) ? plugins.rdNavbar.attr("data-stick-up-clone") === 'true' : false,
			responsive:   responsive,
			callbacks:    {
				onStuck:        function () {
					var navbarSearch = this.$element.find('.rd-search input');

					if (navbarSearch) {
						navbarSearch.val('').trigger('propertychange');
					}
				},
				onDropdownOver: function () {
					return !isNoviBuilder;
				},
				onUnstuck:      function () {
					if (this.$clone === null)
						return;

					var navbarSearch = this.$clone.find('.rd-search input');

					if (navbarSearch) {
						navbarSearch.val('').trigger('propertychange');
						navbarSearch.trigger('blur');
					}

				}
			}
		});
	}

	// lightGallery
	if (plugins.lightGallery.length) {
		for (var i = 0; i < plugins.lightGallery.length; i++) {
			initLightGallery(plugins.lightGallery[i]);
		}
	}

	// lightGallery item
	if (plugins.lightGalleryItem.length) {
		// Filter carousel items
		var notCarouselItems = [];

		for (var z = 0; z < plugins.lightGalleryItem.length; z++) {
			if (!$(plugins.lightGalleryItem[z]).parents('.owl-carousel').length &&
				!$(plugins.lightGalleryItem[z]).parents('.swiper-slider').length &&
				!$(plugins.lightGalleryItem[z]).parents('.slick-slider').length) {
				notCarouselItems.push(plugins.lightGalleryItem[z]);
			}
		}

		plugins.lightGalleryItem = notCarouselItems;

		for (var i = 0; i < plugins.lightGalleryItem.length; i++) {
			initLightGalleryItem(plugins.lightGalleryItem[i]);
		}
	}

	// Dynamic lightGallery
	if (plugins.lightDynamicGalleryItem.length) {
		for (var i = 0; i < plugins.lightDynamicGalleryItem.length; i++) {
			initDynamicLightGallery(plugins.lightDynamicGalleryItem[i]);
		}
	}

	/**
	 * Stacktable
	 * @description Enables Stacktable plugin
	 */
	if (plugins.stacktable.length) {
		var i;
		for (i = 0; i < plugins.stacktable.length; i++) {
			var stacktableItem = $(plugins.stacktable[i]);
			stacktableItem.stacktable();
		}
	}

	/**
	 * Select2
	 * @description Enables select2 plugin
	 */
	if (plugins.selectFilter.length) {
		var i;
		for (i = 0; i < plugins.selectFilter.length; i++) {
			var select = $(plugins.selectFilter[i]);

			select.select2({
				theme: "bootstrap"
			}).next().addClass(select.attr("class").match(/(input-sm)|(input-lg)|($)/i).toString().replace(new RegExp(",", 'g'), " "));
		}
	}

	/**
	 * RD Calendar
	 * @description Enables RD Calendar plugin
	 */
	if (plugins.calendar.length) {
		for (i = 0; i < plugins.calendar.length; i++) {
			var calendarItem = $(plugins.calendar[i]);

			calendarItem.rdCalendar({
				days: calendarItem.attr("data-days") ? c.attr("data-days").split(/\s?,\s?/i) : ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
				month: calendarItem.attr("data-months") ? c.attr("data-months").split(/\s?,\s?/i) : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
			});
		}
	}

	/**
	 * Page loader
	 * @description Enables Page loader
	 */
	if (plugins.pageLoader.length > 0) {

		$window.on("load", function () {
			var loader = setTimeout(function () {
				plugins.pageLoader.addClass("loaded");
				$window.trigger("resize");
			}, 200);
		});

	}

	// RD Search
	if (plugins.search.length || plugins.searchResults) {
		var handler = "bat/rd-search.php";
		var defaultTemplate = '<h5 class="search-title"><a target="_top" href="#{href}" class="search-link">#{title}</a></h5>' +
			'<p>...#{token}...</p>' +
			'<p class="match"><em>Terms matched: #{count} - URL: #{href}</em></p>';
		var defaultFilter = '*.html';

		if (plugins.search.length) {
			for (var i = 0; i < plugins.search.length; i++) {
				var searchItem = $(plugins.search[i]),
					options = {
						element:   searchItem,
						filter:    (searchItem.attr('data-search-filter')) ? searchItem.attr('data-search-filter') : defaultFilter,
						template:  (searchItem.attr('data-search-template')) ? searchItem.attr('data-search-template') : defaultTemplate,
						live:      (searchItem.attr('data-search-live')) ? searchItem.attr('data-search-live') : false,
						liveCount: (searchItem.attr('data-search-live-count')) ? parseInt(searchItem.attr('data-search-live'), 10) : 4,
						current:   0,
						processed: 0,
						timer:     {}
					};

				var $toggle = $('.rd-navbar-search-toggle');
				if ($toggle.length) {
					$toggle.on('click', (function (searchItem) {
						return function () {
							if (!($(this).hasClass('active'))) {
								searchItem.find('input').val('').trigger('propertychange');
							}
						}
					})(searchItem));
				}

				if (options.live) {
					var clearHandler = false;

					searchItem.find('input').on("input propertychange", $.proxy(function () {
						this.term = this.element.find('input').val().trim();
						this.spin = this.element.find('.input-group-addon');

						clearTimeout(this.timer);

						if (this.term.length > 2) {
							this.timer = setTimeout(liveSearch(this, handler), 200);

							if (clearHandler === false) {
								clearHandler = true;

								$body.on("click", function (e) {
									if ($(e.toElement).parents('.rd-search').length === 0) {
										$('#rd-search-results-live').addClass('cleared').html('');
									}
								})
							}

						} else if (this.term.length === 0) {
							$('#' + this.live).addClass('cleared').html('');
						}
					}, options, this));
				}

				searchItem.submit($.proxy(function () {
					$('<input />').attr('type', 'hidden')
						.attr('name', "filter")
						.attr('value', this.filter)
						.appendTo(this.element);
					return true;
				}, options, this))
			}
		}

		if (plugins.searchResults.length) {
			var regExp = /\?.*s=([^&]+)\&filter=([^&]+)/g;
			var match = regExp.exec(location.search);

			if (match !== null) {
				$.get(handler, {
					s:        decodeURI(match[1]),
					dataType: "html",
					filter:   match[2],
					template: defaultTemplate,
					live:     ''
				}, function (data) {
					plugins.searchResults.html(data);
				})
			}
		}
	}

	/**
	 * UI To Top
	 * @description Enables ToTop Button
	 */
	if (isDesktop && !isNoviBuilder) {
		$().UItoTop({
			easingType: 'easeOutQuart',
			containerClass: 'ui-to-top icon icon-xs icon-circle icon-darker-filled mdi mdi-chevron-up'
		});
	}

	/**
	 * Google ReCaptcha
	 * @description Enables Google ReCaptcha
	 */
	if (plugins.captcha.length) {
		var i;
		$.getScript("//www.google.com/recaptcha/api.js?onload=onloadCaptchaCallback&render=explicit&hl=en");
	}

	// RD Mailform
	if (plugins.rdMailForm.length) {
		var i, j, k,
			msg = {
				'MF000': 'Successfully sent!',
				'MF001': 'Recipients are not set!',
				'MF002': 'Form will not work locally!',
				'MF003': 'Please, define email field in your form!',
				'MF004': 'Please, define type of your form!',
				'MF254': 'Something went wrong with PHPMailer!',
				'MF255': 'Aw, snap! Something went wrong.'
			};

		for (i = 0; i < plugins.rdMailForm.length; i++) {
			var $form = $(plugins.rdMailForm[i]),
				formHasCaptcha = false;

			$form.attr('novalidate', 'novalidate').ajaxForm({
				data:         {
					"form-type": $form.attr("data-form-type") || "contact",
					"counter":   i
				},
				beforeSubmit: function (arr, $form, options) {
					if (isNoviBuilder)
						return;

					var form = $(plugins.rdMailForm[this.extraData.counter]),
						inputs = form.find("[data-constraints]"),
						output = $("#" + form.attr("data-form-output")),
						captcha = form.find('.recaptcha'),
						captchaFlag = true;

					output.removeClass("active error success");

					if (isValidated(inputs, captcha)) {

						// veify reCaptcha
						if (captcha.length) {
							var captchaToken = captcha.find('.g-recaptcha-response').val(),
								captchaMsg = {
									'CPT001': 'Please, setup you "site key" and "secret key" of reCaptcha',
									'CPT002': 'Something wrong with google reCaptcha'
								};

							formHasCaptcha = true;

							$.ajax({
								method: "POST",
								url:    "bat/reCaptcha.php",
								data:   {'g-recaptcha-response': captchaToken},
								async:  false
							})
								.done(function (responceCode) {
									if (responceCode !== 'CPT000') {
										if (output.hasClass("snackbars")) {
											output.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' + captchaMsg[responceCode] + '</span></p>')

											setTimeout(function () {
												output.removeClass("active");
											}, 3500);

											captchaFlag = false;
										} else {
											output.html(captchaMsg[responceCode]);
										}

										output.addClass("active");
									}
								});
						}

						if (!captchaFlag) {
							return false;
						}

						form.addClass('form-in-process');

						if (output.hasClass("snackbars")) {
							output.html('<p><span class="icon text-middle fa fa-circle-o-notch fa-spin icon-xxs"></span><span>Sending</span></p>');
							output.addClass("active");
						}
					} else {
						return false;
					}
				},
				error:        function (result) {
					if (isNoviBuilder)
						return;

					var output = $("#" + $(plugins.rdMailForm[this.extraData.counter]).attr("data-form-output")),
						form = $(plugins.rdMailForm[this.extraData.counter]);

					output.text(msg[result]);
					form.removeClass('form-in-process');

					if (formHasCaptcha) {
						grecaptcha.reset();
						window.dispatchEvent( new Event( 'resize' ) );
					}
				},
				success:      function (result) {
					if (isNoviBuilder)
						return;

					var form = $(plugins.rdMailForm[this.extraData.counter]),
						output = $("#" + form.attr("data-form-output")),
						select = form.find('select');

					form
						.addClass('success')
						.removeClass('form-in-process');

					if (formHasCaptcha) {
						grecaptcha.reset();
						window.dispatchEvent( new Event( 'resize' ) );
					}

					result = result.length === 5 ? result : 'MF255';
					output.text(msg[result]);

					if (result === "MF000") {
						if (output.hasClass("snackbars")) {
							output.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' + msg[result] + '</span></p>');
						} else {
							output.addClass("active success");
						}
					} else {
						if (output.hasClass("snackbars")) {
							output.html(' <p class="snackbars-left"><span class="icon icon-xxs mdi mdi-alert-outline text-middle"></span><span>' + msg[result] + '</span></p>');
						} else {
							output.addClass("active error");
						}
					}

					form.clearForm();

					if (select.length) {
						select.select2("val", "");
					}

					form.find('input, textarea').trigger('blur');

					setTimeout(function () {
						output.removeClass("active error success");
						form.removeClass('success');
					}, 3500);
				}
			});
		}
	}

	/**
	 * Custom Toggles
	 */
	if (plugins.customToggle.length) {
		var i;
		for (i = 0; i < plugins.customToggle.length; i++) {
			var $this = $(plugins.customToggle[i]);
			$this.on('click', function (e) {
				e.preventDefault();
				$("#" + $(this).attr('data-custom-toggle')).add(this).toggleClass('active');
			});

			if ($this.attr("data-custom-toggle-disable-on-blur") === "true") {
				$("body").on("click", $this, function (e) {
					if (e.target !== e.data[0] && $("#" + e.data.attr('data-custom-toggle')).find($(e.target)).length == 0 && e.data.find($(e.target)).length == 0) {
						$("#" + e.data.attr('data-custom-toggle')).add(e.data[0]).removeClass('active');
					}
				})
			}
		}
	}

	// jQuery Count To
	if (plugins.counter.length) {
		for (var i = 0; i < plugins.counter.length; i++) {
			var $counterNotAnimated = $(plugins.counter[i]).not('.animated');
			$document.on("scroll", $.proxy(function () {
				var $this = this;

				if ((!$this.hasClass("animated")) && (isScrolledIntoView($this))) {
					$this.countTo({
						refreshInterval: 40,
						from: 0,
						to: parseInt($this.text(), 10),
						speed: $this.attr("data-speed") || 1000
					});
					$this.addClass('animated');
				}
			}, $counterNotAnimated))
				.trigger("scroll");
		}
	}

	/**
	 * Custom Waypoints
	 */
	if (plugins.customWaypoints.length) {
		var i;
		$document.delegate("[data-custom-scroll-to]", "click", function (e) {
			e.preventDefault();
			$("body, html").stop().animate({
				scrollTop: $("#" + $(this).attr('data-custom-scroll-to')).offset().top - 70
			}, 1000, function () {
				$(window).trigger("resize");
			});
		});
	}

	/**
	 * Checkout RD Material Tabs
	 */
	if (plugins.checkoutRDTabs.length) {
		var i, step = 0;
		for (i = 0; i < plugins.checkoutRDTabs.length; i++) {
			var checkoutTab = $(plugins.checkoutRDTabs[i]);

			checkoutTab.RDMaterialTabs({
				dragList: true,
				dragContent: false,
				items: 1,
				marginContent: 10,
				margin: 0,
				responsive: {
					480: {
						items: 2
					},
					768: {
						dragList: false,
						items: 3
					}
				},
				callbacks: {
					onChangeStart: function (active, indexTo) {
						if (indexTo > step + 1) {
							return false;
						} else if (indexTo == step + 1) {
							for (var j = 0; j < this.$content.find(".rd-material-tab").length; j++) {
								if (j <= step) {
									var inputs = this.$content.find(".rd-material-tab").eq(j).find("[data-constraints]");

									if (!isValidated(inputs)) {
										this.setContentTransition(this, this.options.speed)
										this.moveTo(j);
										return false
									}
								}
							}
							if (indexTo > step) step = indexTo;
						}

					},
					onChangeEnd: function () {

					},
					onInit: function (tabs) {
						attachFormValidator(tabs.$element.find("[data-constraints]"));

						$('.checkout-step-btn').on("click", function (e) {
							e.preventDefault();
							var index = this.getAttribute("data-index-to"),
								inputs = tabs.$content.find(".rd-material-tab").eq(index - 1).find("[data-constraints]");

							if (isValidated(inputs)) {
								tabs.setContentTransition(tabs, tabs.options.speed);
								tabs.moveTo(parseInt(index));
								if (index > step) step = index;
							}
						});
					}
				}
			});
		}
	}

	/**
	 *  Enable Faceboock iframe
	 */
	if (plugins.facebookplugin.length) {
		for (i = 0; i < plugins.facebookplugin.length; i++) {

			(function (d, s, id) {
				var js, fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id)) return;
				js = d.createElement(s);
				js.id = id;
				js.src = "//connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.5";
				fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));
		}
	}

	// Countdown
	if (plugins.countdown.length) {
		for (var i = 0; i < plugins.countdown.length; i++) {
			var
				node = plugins.countdown[i],
				countdown = aCountdown({
					node:  node,
					from:  node.getAttribute('data-from'),
					to:    node.getAttribute('data-to'),
					count: node.getAttribute('data-count'),
					tick:  100,
				});
		}
	}
});

