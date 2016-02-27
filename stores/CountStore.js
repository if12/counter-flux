import {
	EventEmitter
}
from 'events'

import assign from 'object-assign'

var CountStore = assign({}, EventEmitter.prototype, {
	count: 0,

	getCount: function() {
		return this.count;
	},

	increase: function() {
		this.count++;
	},

	addChangeListener: function(cb) {
		this.on('change', cb);
	},

	removeChangeListener: function(cb) {
		this.removeListener('change', cb)
	},

	emitChange: function() {
		this.emit('change');
	}
})

module.exports = CountStore;