webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(4);


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

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<!DOCTYPE html>\r\n<html>\r\n    <head>\r\n        <meta charset=\"utf-8\">\r\n        <title>a</title>\r\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\r\n    </head>\r\n    <body>\r\n        <header class=\"site-header\">\r\n            <a role=\"button\" href=\"#\">\r\n                <i class=\"fa fa-long-arrow-left\" aria-hidden=\"true\"></i>\r\n                Go Back\r\n            </a>\r\n            <a href=\"#\">\r\n                <img src=\"" + __webpack_require__(5) + "\" alt=\"Logo\" width=\"102\" height=\"102\">\r\n            </a>\r\n            <a role=\"button\" href=\"#\">\r\n                <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n                Sign In\r\n            </a>\r\n        </header>\r\n        <main class=\"main-content\">\r\n            <form action=\"#\">\r\n                <div class=\"header-wrapper\">\r\n                    <section class=\"your-order-section\">\r\n                        <div class=\"your-order-wrapper\">\r\n                            <h2>Your Order</h2>\r\n                            <table class=\"your-order-parameters\">\r\n                                <tr>\r\n                                    <th>Items</th>\r\n                                    <th>Details</th>\r\n                                    <th>Price</th>\r\n                                    <th>Delivery</th>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>2 documents</td>\r\n                                    <td>2 languages</td>\r\n                                    <td>$ 696.06</td>\r\n                                    <td>48 hours<sup>*</sup></td>\r\n                                </tr>\r\n                            </table>\r\n                        </div>\r\n                        <fieldset class=\"your-order-buttons\">\r\n                            <button type=\"submit\" class=\"place-order\">Place Oreder</button>\r\n                            <button type=\"button\" class=\"print-a-quote\">Print a Quote</button>\r\n                        </fieldset>\r\n                    </section>\r\n                    <section class=\"help-center-section\">\r\n                        <h2>Help Center</h2>\r\n                        <p>\r\n                            If you need assistance while placing your order, contact\r\n                            one of our beloved Project Manager by phone or email.\r\n                        </p>\r\n                        <footer class=\"contacts\">\r\n                            <a href=\"tel:+9710555555\">+971 (0) 555 555</a>\r\n                            <a href=\"mailto:help@qtest.com\">help@qtest.com</a>\r\n                        </footer>\r\n                    </section>\r\n                </div>\r\n                <section class=\"select-what-translate\">\r\n                    <h2>Select what you want to translate</h2>\r\n                    <fieldset class=\"choose-translate-type\">\r\n                        <div class=\"switch-buttons-wrapper\">\r\n                            <label class=\"button-holder\">\r\n                                <input type=\"radio\" name=\"translate-type\">\r\n                                <a role=\"button\" class=\"button\">\r\n                                    <img src=\"" + __webpack_require__(6) + "\" alt=\"Website\" width=\"96\" height=\"108\" class=\"image\">\r\n                                    <span class=\"description\">Website</span>\r\n                                </a>\r\n                            </label>\r\n                            <label class=\"button-holder\">\r\n                                <input type=\"radio\" name=\"translate-type\" checked>\r\n                                <a role=\"button\" class=\"button\">\r\n                                    <img src=\"" + __webpack_require__(7) + "\" alt=\"Documents\" width=\"96\" height=\"108\" class=\"image\">\r\n                                    <span class=\"description\">Documents</span>\r\n                                </a>\r\n                            </label>\r\n                            <label class=\"button-holder\">\r\n                                <input type=\"radio\" name=\"translate-type\">\r\n                                <a role=\"button\" class=\"button\">\r\n                                    <img src=\"" + __webpack_require__(8) + "\" alt=\"Social Account\" width=\"96\" height=\"108\" class=\"image\">\r\n                                    <span class=\"description\">Social Account</span>\r\n                                </a>\r\n                            </label>\r\n                        </div>\r\n                    </fieldset>\r\n                </section>\r\n                <section class=\"upload-documents-section\">\r\n                    <h2 class=\"section-header\">Upload your documents</h2>\r\n                    <small>(Doc, Docx, Text, PDF, Markdown)</small>\r\n                    <label class=\"upload-file-btn\">\r\n                        <i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i>\r\n                        Upload a new file\r\n                        <input type=\"file\" class=\"upload-file\">\r\n                    </label>\r\n                    <table class=\"uploaded-files\">\r\n                        <tr>\r\n                            <th>File Name</th>\r\n                            <th>File Size</th>\r\n                            <th>Number of Words</th>\r\n                            <th>Remove</th>\r\n                        </tr>\r\n                        <tr>\r\n                            <td><i class=\"fa fa-file-text\" aria-hidden=\"true\"></i>business_operations.docx</td>\r\n                            <td>78kb</td>\r\n                            <td>842</td>\r\n                            <td><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td><i class=\"fa fa-file-text\" aria-hidden=\"true\"></i>business_financial.docx</td>\r\n                            <td>26kb</td>\r\n                            <td>2,326</td>\r\n                            <td><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></td>\r\n                        </tr>\r\n                    </table>\r\n                </section>\r\n                <section class=\"languages-pairings-section\">\r\n                    <h2 class=\"section-header\">Choose your languages pairings</h2>\r\n                    <fieldset class=\"language-from\">\r\n                        <span class=\"language-prefix\">From</span>\r\n                        <div class=\"select-wrapper\">\r\n                            <select class=\"language\">\r\n                                <option value=\"en-US\" selected>English</option>\r\n                                <option value=\"de-DE\">German</option>\r\n                                <option value=\"fr-FR\">French</option>\r\n                                <option value=\"es-ES\">Spanish</option>\r\n                                <option value=\"ar-AE\">Arabic</option>\r\n                                <option value=\"ku-Arab\">Kurdish</option>\r\n                                <option value=\"he-IL\">Hebrew</option>\r\n                                <option value=\"ru-RU\">Russian</option>\r\n                            </select>\r\n                        </div>\r\n                    </fieldset>\r\n                    <fieldset class=\"language-to\">\r\n                        <span class=\"language-prefix\">to</span>\r\n                        <div class=\"select-wrapper\">\r\n                            <select class=\"language\">\r\n                                <option value=\"en-US\">English</option>\r\n                                <option value=\"de-DE\">German</option>\r\n                                <option value=\"fr-FR\">French</option>\r\n                                <option value=\"es-ES\">Spanish</option>\r\n                                <option value=\"ar-AE\" selected>Arabic</option>\r\n                                <option value=\"ku-Arab\">Kurdish</option>\r\n                                <option value=\"he-IL\">Hebrew</option>\r\n                                <option value=\"ru-RU\">Russian</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"select-wrapper\">\r\n                            <select class=\"language\">\r\n                                <option value=\"en-US\">English</option>\r\n                                <option value=\"de-DE\">German</option>\r\n                                <option value=\"fr-FR\">French</option>\r\n                                <option value=\"es-ES\">Spanish</option>\r\n                                <option value=\"ar-AE\">Arabic</option>\r\n                                <option value=\"ku-Arab\" selected>Kurdish</option>\r\n                                <option value=\"he-IL\">Hebrew</option>\r\n                                <option value=\"ru-RU\">Russian</option>\r\n                            </select>\r\n                        </div>\r\n                        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                        <button type=\"button\" class=\"add-language\">\r\n                            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n                            add\r\n                        </button>\r\n                    </fieldset>\r\n                </section>\r\n                <div class=\"section-wrapper\">\r\n                    <section class=\"select-tone-section\">\r\n                        <h2 class=\"section-header\">Select your desired tone</h2>\r\n                        <fieldset class=\"select-tone-type\">\r\n                            <div class=\"switch-buttons-wrapper\">\r\n                                <label class=\"button-holder\">\r\n                                    <input type=\"radio\" name=\"tone-type\">\r\n                                    <a role=\"button\" class=\"button\">\r\n                                        <i class=\"fa fa-comments\" aria-hidden=\"true\"></i>\r\n                                        Friendly &frasl; Casual\r\n                                    </a>\r\n                                </label>\r\n                                <label class=\"button-holder\">\r\n                                    <input type=\"radio\" name=\"tone-type\" checked>\r\n                                    <a role=\"button\" class=\"button\">\r\n                                        <i class=\"fa fa-suitcase\" aria-hidden=\"true\"></i>\r\n                                        Corporate &frasl; Pro\r\n                                    </a>\r\n                                </label>\r\n                                <label class=\"button-holder\">\r\n                                    <input type=\"radio\" name=\"tone-type\">\r\n                                    <a role=\"button\" class=\"button\">\r\n                                        <i class=\"fa fa-bullhorn\" aria-hidden=\"true\"></i>\r\n                                        Media &frasl; Formal\r\n                                    </a>\r\n                                </label>\r\n                            </div>\r\n                        </fieldset>\r\n                    </section>\r\n                    <section class=\"how-urgent-job-section\">\r\n                        <h2 class=\"section-header\">Tell us how urgent this job is</h2>\r\n                        <div class=\"timeline-selector-wrapper\">\r\n                            <input type=\"range\" min=\"0\" max=\"2\" value=\"1\" class=\"timeline-selector\">\r\n                            <div class=\"timeline-labels\">\r\n                                <span class=\"timeline-label\">I got time</span>\r\n                                <span class=\"timeline-label active\">Average</span>\r\n                                <span class=\"timeline-label\">Yesterday</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"timeline-info\">\r\n                            <h2>Timelinr Info</h2>\r\n                            <p>\r\n                                With an <em>average</em> timeline set up, our expert\r\n                                translator can take a resonable amount of time\r\n                                perfecting your translation\r\n                            </p>\r\n\r\n                        </div>\r\n                    </section>\r\n                </div>\r\n                <section class=\"choose-payment-method-section\">\r\n                    <h2 class=\"section-header\">Sign up and choose a payment method</h2>\r\n                    <aside class=\"sign-in-propose\">Already have an account with us? <a href=\"#\" class=\"link\">Sign in</a></aside>\r\n                    <fieldset class=\"full-name-wrapper\">\r\n                        <label>\r\n                            <span class=\"prefix\">Full name</span>\r\n                            <input type=\"text\" class=\"custom-input signup-full-name\" required>\r\n                            <span class=\"validation\">&nbsp;</span>\r\n                        </label>\r\n                    </fieldset>\r\n                    <fieldset class=\"email-password-wrapper\">\r\n                        <label>\r\n                            <span class=\"prefix\">Email adress</span>\r\n                            <input type=\"email\" class=\"custom-input signup-email\" required>\r\n                            <span class=\"validation\">&nbsp;</span>\r\n                        </label>\r\n                        <label>\r\n                            <span class=\"prefix\">Chose a password</span>\r\n                            <input type=\"password\" class=\"custom-input signup-password\" required>\r\n                            <span class=\"validation\">&nbsp;</span>\r\n                        </label>\r\n                    </fieldset>\r\n                    <fieldset class=\"payment-method-wrapper\">\r\n                        <div class=\"switch-buttons-wrapper\">\r\n                            <label class=\"button-holder\">\r\n                                <input type=\"radio\" name=\"payment-method\">\r\n                                <a role=\"button\" class=\"button\">\r\n                                    <span class=\"button-image\">\r\n                                        <img src=\"" + __webpack_require__(9) + "\" alt=\"Visa\" width=\"40\" height=\"25\">\r\n                                        <img src=\"" + __webpack_require__(10) + "\" alt=\"Master Card\" width=\"40\" height=\"25\">\r\n                                    </span>\r\n                                </a>\r\n                            </label>\r\n                            <label class=\"button-holder\">\r\n                                <input type=\"radio\" name=\"payment-method\" checked>\r\n                                <a role=\"button\" class=\"button\">\r\n                                    <img src=\"" + __webpack_require__(11) + "\" alt=\"PayPal\" width=\"78\" height=\"22\" class=\"button-image\">\r\n                                </a>\r\n                            </label>\r\n                            <label class=\"button-holder\">\r\n                                <input type=\"radio\" name=\"payment-method\">\r\n                                <a role=\"button\" class=\"button\">\r\n                                    <img src=\"" + __webpack_require__(12) + "\" alt=\"Amazon\" width=\"106\" height=\"22\" class=\"button-image\">\r\n                                </a>\r\n                            </label>\r\n                        </div>\r\n                    </fieldset>\r\n                    <fieldset class=\"card-data-wrapper\">\r\n                        <label class=\"card-field-holder signup-card-number-holder\">\r\n                            <span class=\"prefix\">Card number</span>\r\n                            <input type=\"number\" class=\"custom-input signup-card-number\" required>\r\n                        </label>\r\n                        <label class=\"card-field-holder\">\r\n                            <span class=\"prefix\">Expiry date</span>\r\n                            <input type=\"date\" class=\"custom-input signup-card-expiry-date\" required>\r\n                        </label>\r\n                        <label class=\"card-field-holder\">\r\n                            <span class=\"prefix\">Code</span>\r\n                            <input type=\"number\" class=\"custom-input signup-card-code\" min=\"0\" max=\"999\" required>\r\n                        </label>\r\n                    </fieldset>\r\n                    <fieldset class=\"submit-wrapper\">\r\n                        <fieldset class=\"submit-elements-wrapper\">\r\n                            <label>\r\n                                <input type=\"checkbox\" class=\"agree-checkbox\" required>\r\n                                <span class=\"agree-text\">I agree to the</span>\r\n                            </label>\r\n                            <a href=\"#\" class=\"terms-and-conditions\">Terms &amp; Conditions</a>\r\n                        </fieldset>\r\n                        <fieldset class=\"submit-elements-wrapper\">\r\n                            <button type=\"submit\" class=\"place-order\">Place Oreder</button>\r\n                            <button type=\"button\" class=\"print-a-quote\">Print a Quote</button>\r\n                        </fieldset>\r\n                    </fieldset>\r\n                </section>\r\n            </form>\r\n        </main>\r\n        <footer class=\"site-footer\">\r\n            <section class=\"what-we-do\">\r\n                <h2 class=\"section-header\">What We Do</h2>\r\n                <strong class=\"what-we-do-text\">\r\n                    We provide a full range of language services including content development,\r\n                    document, website and social media accounts translations\r\n                </strong>\r\n            </section>\r\n            <section class=\"our-main-office\">\r\n                <h2 class=\"section-header\">Our Main Office</h2>\r\n                <address class=\"address\">\r\n                    <p>Dubai, UAE</p>\r\n                    <p>P.O. Box: 502735</p>\r\n                    <p><a href=\"tel:+971044278128\">+971 (0) 44278128</a></p>\r\n                </address>\r\n            </section>\r\n            <section class=\"connect-with-us\">\r\n                <h2 class=\"section-header\">Connect With Us</h2>\r\n                <ul class=\"social\">\r\n                    <li>\r\n                        <a href=\"#\">\r\n                            <span class=\"fa-stack fa-lg\">\r\n                                <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                                <i class=\"fa fa-facebook fa-stack-1x fa-inverse\"></i>\r\n                            </span>\r\n                            Facebook\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#\">\r\n                            <span class=\"fa-stack fa-lg\">\r\n                                <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                                <i class=\"fa fa-twitter fa-stack-1x fa-inverse\"></i>\r\n                            </span>\r\n                            Twitter\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#\">\r\n                            <span class=\"fa-stack fa-lg\">\r\n                                <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                                <i class=\"fa fa-linkedin fa-stack-1x fa-inverse\"></i>\r\n                            </span>\r\n                            Linkedin\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </section>\r\n            <img src=\"" + __webpack_require__(13) + "\" alt=\"Logo\" width=\"102\" height=\"102\" class=\"footer-logo\">\r\n        </footer>\r\n    </body>\r\n</html>\r\n";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/logo-2x.png";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/website-2x.png";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/documents-2x.png";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/social-account-2x.png";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/visa-2x.png";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/master-card-2x.png";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/paypal-2x.png";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/amazon-2x.png";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/logo-footer-2x.png";

/***/ }
]);