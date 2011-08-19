/*
 *	Small method for Alpha Numberic Generator
*/

var RandomAlphaNumGenerator = function(alphanum_length) {
   this.alphanum_length = alphanum_length || 6;
}

RandomAlphaNumGenerator.prototype._runRandomGenerator = function(alphanum) {
   var randomstring = '';
    	for (var i =0; i<this.alphanum_length; i++) {
	    var rnum = Math.floor(Math.random() * alphanum.length);
      	    randomstring += alphanum.substring(rnum, rnum+1);
    	}
   return randomstring;
};

RandomAlphaNumGenerator.prototype.generate = function() {
   this.setKeyword();
   var alphanum = this.getKeyword();
	   
   return this._runRandomGenerator(alphanum);
};


// Setter 
RandomAlphaNumGenerator.prototype.setKeyword = function() {
   var _smallchars   = "abcdefghijklmnopqrstuvwxyz";
   var _capschars    = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var _num          = "1234567890";
   var _specialchars = "!@#$%^&*()<>?/\;:[]{}-+~";
   this._alphanum    = _smallchars + _capschars + _num  + _specialchars;
};

// Getter
RandomAlphaNumGenerator.prototype.getKeyword = function() {
   return this._alphanum;
};


// Export to Module //
module.exports.version = "0.0.1";

module.exports.create = function(alphanum_length) {
   return new RandomAlphaNumGenerator(alphanum_length);
};

module.exports._class = RandomAlphaNumGenerator;
