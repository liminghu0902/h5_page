function H5() {
	this.el = $('<div id="h5"></div>').hide();
	this.pages = [];
	$('body').append(this.el);
}

H5.prototype.addPage = function(name) {
	var $page = $('<div class="section"></div>');
	if(name !== undefined) {
		$page.addClass('h5_page_'+ name)
	}
	this.el.append($page);
	this.pages.push($page);

	return this;
}

H5.prototype.addComponent = function(name, cfg) {
	var cfg = $.extend({
				type: 'base'
			}, cfg),
		component,
		page = this.pages.slice(-1)[0];
	switch(cfg.type) {
		case  'base':
			component = new BaseComponent(name, cfg);
			break;
	}
	page.append(component);

	return this;
}

H5.prototype.init = function() {
	this.el.fullpage({
		afterLoad: function() {
			$(this).find('.h5_component').trigger('onLoad');
		},
		onLeave: function() {
			$(this).find('.h5_component').trigger('onLeave');
		}
	})
	this.pages[0].find('.h5_component').trigger('onLoad');
    this.el.show();
}