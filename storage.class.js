

var Storage = function(){
	this.prefix = 'test';
}


/**
 * [get description]
 * @param  {[type]} sKey [description]
 * @return {[type]}      [description]
 */
Storage.prototype.get = function( sKey) {
    var key = this.prefix + sKey;

    var results = localStorage.getItem( key);
   	oResults     = JSON.parse( results);

    return oResults;
};

/**
 * [set description]
 * @param {[type]} sKey   [description]
 * @param {[type]} mValue [description]
 */
Storage.prototype.set = function( sKey, oValue) {
    var key = this.prefix + sKey;

    sValue = JSON.stringify( oValue);

    localStorage.setItem( key, sValue);

    return this;
};

/**
 * [remove description]
 * @param  {[type]} sKey [description]
 * @return {[type]}      [description]
 */
Storage.prototype.remove = function( sKey){
	 var key = this.prefix + sKey;
	localStorage.removeItem( key);
	return this;
}