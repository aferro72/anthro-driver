	var ProductPage = function () {

	var qtySelect = browser.addValue('#searchPhrase', sizeValue)

	this.url = function (){

	browser.url('http://www.anthropologie.com/anthro/product/clothes-new/4130257231257.jsp#/');

	};

	this.setQty = function(qty){
	qtySelect.addValue(qty);

	};

	};