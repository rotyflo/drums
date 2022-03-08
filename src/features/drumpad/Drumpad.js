import React from "react";

export class Drumpad extends React.Component {
	render() {
		return (
			<button
				className="drum-pad btn"
				id={this.props.name}
				onClick={() => {
					document.getElementById('current').innerText = this.props.name;
					document.getElementById(this.props.keyboardKey).play();
				}}
			>
				<audio src={this.props.sound} className="clip" id={this.props.keyboardKey}></audio>
				{this.props.keyboardKey}
			</button>
		);
	}
}