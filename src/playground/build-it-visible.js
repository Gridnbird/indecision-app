class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props);
		this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
		this.state = {
			visibility: false
		}
	}
	handleToggleVisibility() {
		this.setState((prevState) => {
			return {
				visibility: !prevState.visibility
			}
		})
	}
	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.handleToggleVisibility}>
				{this.state.visibility ? 'Hide Details' : 'Show Details'}
			  </button>
			{this.state.visibility && (
				<div>
					<p>Hey. There are some details!</p>
				</div>
      )}
			</div>
		)
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const appRoot = document.getElementById('app');

// let visibility = false;

// const onShowDetails = () => {
// 	visibility = !visibility;
// 	renderApp();
// }

// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
            // <button onClick={onShowDetails}>
						// 	{visibility ? 'Hide Details' : 'Show Details'}
            // </button>
						// {visibility && (
						// 	<div>
						// 		<p>Hey. There are some details!</p>
						// 	</div>
// 						)}

//         </div>
//     )

//     ReactDOM.render(template, appRoot);
// }

// renderApp();

