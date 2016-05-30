webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	__webpack_require__(3);

	(() => {
	    const $timelineLabel = $('.timeline-label');
	    const $timelineLabels = $('.timeline-labels');
	    const $timelineSelector = $('.timeline-selector');
	    $('.timeline-selector').on('change', function () {
	        const selectedIndex = this.value;
	        $timelineLabel.removeClass('active');
	        var selectedLabel = $timelineLabel.get(selectedIndex);
	        $(selectedLabel).addClass('active');
	    });
	    $timelineLabels.on('click', '.timeline-label', function () {
	        const index = $timelineLabel.index(this);
	        $timelineSelector.val(index);
	        $timelineLabel.removeClass('active');
	        $(this).addClass('active');
	    });
	    initTimelineSelector();
	    function initTimelineSelector() {
	        const value = $timelineSelector.attr('value');
	        $timelineSelector.val(value).change();
	    }
	})();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);