import React from "react";

export default class Title extends React.Component{
	render(){
		return (
			<div>
				<h1> This will looked like </h1><br/>
				<p><i>{this.props.title}</i></p>
			</div>
		);
	}
}