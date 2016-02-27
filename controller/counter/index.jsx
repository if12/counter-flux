import React from 'react'
import Counter from '../../components/counter'
import CounterActions from '../../actions/CounterActions'
import CountStore from '../../stores/CountStore.js'

export default class CounterController extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			count: CountStore.getCount()
		}
	}

	componentDidMount() {
		CountStore.addChangeListener(this.onChange.bind(this))
	}

	componentWillUnmount() {
		CountStore.removeChangeListener(this.onChange.bind(this))
	}

	onChange() {
		this.setState({
			count: CountStore.getCount()
		})
	}

	increaseCount() {
		CounterActions.increaseCount();
	}

	render() {
		return (
			<Counter 
				count={this.state.count}
				onClick={this.increaseCount}/>
		)
	}
}