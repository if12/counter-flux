require('./index.less')
import React from 'react'

export default class Counter extends React.Component {
	render() {
		const { onClick, count} = this.props; 
		return (
			<div className="counter-component">
				<h4 className="title">请点击Increase按钮</h4>
		        <p className="show">{count}</p> {' '}
		        <button className="btn" onClick={onClick}>Increase</button>
	        </div>
		)
	}
}