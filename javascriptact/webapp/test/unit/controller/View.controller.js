/*global QUnit*/

sap.ui.define([
	"com/acn/training/javascriptact/controller/View.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View Controller");

	QUnit.test("I should test the View controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
