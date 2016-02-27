import AppDispatcher from '../dispatcher/AppDispatcher'

var CounterActions = {
	increaseCount: function() {
		AppDispatcher.dispatch({
			actionType: 'INCREASE_COUNT'
		})
	}
}

module.exports = CounterActions