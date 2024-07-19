sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/library',
],
function (Controller, mobileLibrary) {
    "use strict";

    var URLHelper = mobileLibrary.URLHelper;

    return Controller.extend("fk.coc.s3cocapp.controller.Main", {
        onInit: function () {

        },
        onPress: function () {
            var url = "https://5e87d18ctrial-5e87d18ctrial-dev-s3fileuploadapp-srv.cfapps.us10-001.hana.ondemand.com/";
            URLHelper.redirect(url, true);
        }         
    });
});
