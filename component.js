function BaseComponent(name, cfg) {
	var $base = $('<div class="h5_component"></div>'),
		cfg = cfg || {};
	if(name !== undefined) {
		$base.addClass('h5_base_component_' + name);
	}
	cfg.css && $base.css(cfg.css);
	cfg.text && $base.text(cfg.text);
	cfg.html && $base.html(cfg.html);
	cfg.onclick && $base.on('click', cfg.onclick);

	$base.on('onLoad', function() {
		setTimeout(function() {
			cfg.animateIn && cfg.animate(cfg.animateIn);
		}, cfg.delay || 0)
	})

	$base.on('onLeave', function() {
		setTimeout(function() {
			cfg.animateOut && cfg.animate(cfg.animateOut);
		}, cfg.delay || 0)
	})

	return $base;
}