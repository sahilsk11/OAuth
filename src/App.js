import * as React from 'react'
import * as ReactDOM from 'react-dom'
import GoogleLogin from 'react-google-login';

function App() {
	const clientId = "test"
	const gBtn = <GoogleLogin
		clientId={clientId}
		buttonText="Login with Google"
		onSuccess={handleLogin}
		onFailure={(response) => { console.log(response) }}
		cookiePolicy={'single_host_origin'}
		isSignedIn={true}
	/>;
	return (
		<div>
			{gBtn}
	  	</div>
	);
}

const handleLogin = () => {

}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
