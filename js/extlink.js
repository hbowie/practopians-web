
/**
 * Open all external links in a new window
 */
jQuery(document).ready(function($) {
	$('a')
		.filter('[href^="http"], [href^="//"]')
		.not('[href*="' + window.location.host + '"]')
		.attr('rel', 'noopener noreferrer')
		.attr('target', '_blank')
		.attr('class', 'extlink');
});
