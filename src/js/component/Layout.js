import React from "react";

import Header from "./Header";

export default class Layout extends React.Component{
	constructor(){
		super();
		this.state = {
			title:"tanvir",
		};
	}

	changeTitle(title){
		this.setState({title});
	}


	render(){
		return (
			<Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
		);
	}
}