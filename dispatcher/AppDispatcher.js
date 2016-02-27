var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();
var CountStore = require('../stores/CountStore.js')

AppDispatcher.register(function(action) {
	switch (action.actionType) {
		case 'INCREASE_COUNT':
			CountStore.increase();
			CountStore.emitChange();
			break;
		default:
	}
});

module.exports = AppDispatcher;