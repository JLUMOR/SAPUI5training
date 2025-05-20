sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  return Controller.extend("com.acn.training.simpleform.controller.View1", {
    onClearPress: function () {
      this.byId("inputName").setValue("");
      this.byId("inputStreet").setValue("");
      this.byId("inputNo").setValue("");
      this.byId("inputZip").setValue("");
      this.byId("inputCity").setValue("");
      this.byId("comboCountry").setSelectedKey("");
    },

    onSavePress: function () {
      sap.m.MessageToast.show("Data Saved!");
    }
  });
});
