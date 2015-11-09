

var Tab = function( oOption){

	this.option   = oOption;

	this.iCurrent = 0;

	sOnglet = ( typeof(oOption.onglet) == 'undefined')? 'item' : oOption.onglet;
	sContent = ( typeof(oOption.onglet) == 'undefined')? 'content' : oOption.content;

	this.oOnglet  = $('#'+oOption.container+' .' + sOnglet);
	this.oParent  = $('#'+oOption.container+' .' + sContent);

	this._init();
}

/**
 * [init description]
 * @return {[type]} [description]
 */
Tab.prototype._init = function(){

	var self = this;

	this.oOnglet.click( function(){

		var iIndex    = $(this).index();

		self.iCurrent = iIndex;

		self.oParent.css('display', 'none');

		self.oParent.eq( iIndex).css('display', 'block');

	});

}