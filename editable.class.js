



/**
 * [Editable description]
 * @param {[type]} oOption [description]
 */
var Editable = function( oOption){

	this.oOption = {
		element : 'editable',
		allowed : '<a><br>'
	};


	if( typeof(oOption) != 'undefined'){
		for( key in oOption){
			this.oOption[key] = oOption[key];
		}
	}

	this.aEditable = [];

	this._init();
};

/**
 * [_strip_tags description]
 * @param  {[type]} input   [description]
 * @param  {[type]} allowed [description]
 * @return {[type]}         [description]
 */
Editable.prototype._strip_tags = function( oInput, sAllowed) {

  var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
  var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;

  sAllowed = (((sAllowed || '') + '')
							    .toLowerCase()
							    .match(/<[a-z][a-z0-9]*>/g) || [])
							    .join('');

  return oInput.replace( commentsAndPhpTags, '')
    .replace(tags, function($0, $1) {
      return sAllowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
    });
}

/**
 * [_init description]
 * @return {[type]} [description]
 */
Editable.prototype._init = function(){
	this.aEditable = document.querySelectorAll('.'+this.oOption.element);

	this.preview( 'off');
};

/**
 * [_init description]
 * @return {[type]} [description]
 */
Editable.prototype.preview = function( sMode){

	var bValue = (sMode == 'off')? true : false;


	for (var i = 0; i < this.aEditable.length; i++) {
		var oElement = this.aEditable[i];
		oElement.setAttribute('contenteditable', bValue);
	}
};

/**
 * [setData description]
 * @param {[type]} oData [description]
 */
Editable.prototype.setData = function( oData){

	for (var i = 0; i < this.aEditable.length; i++) {
		var oElement       = this.aEditable[i];
		var key            = oElement.getAttribute('data-name');
		oElement.innerHTML = oData[key];
	}
};

/**
 * [getValue description]
 * @return {[type]} [description]
 */
Editable.prototype.getData = function(){
	var oResult = {};

	for (var i = 0; i < this.aEditable.length; i++) {
		var oElement = this.aEditable[i];
		var key      = oElement.getAttribute('data-name');
		oResult[key] = this._strip_tags( oElement.innerHTML, this.oOption.allowed);
	}

	return oResult;
}