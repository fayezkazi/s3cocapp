/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"fkcoc/s3cocapp/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
