import React from "react";

import Title from "./Title";

export default class Header extends React.Component{

	handleChange(e){
		const txt = e.target.value;
		this.props.changeTitle(txt);
	}

	render(){
		return(
			<div>
				<textarea rows="4" cols="50" value={this.props.title} onChange={this.handleChange.bind(this)} ></textarea>
				<Title title={this.props.title}/>
			</div>
		);
	}
	
}