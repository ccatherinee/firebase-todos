// import the main app 
import App from './App.svelte';

// create an instance of our app
const app = new App({
	target: document.body,
	props: {
		name: 'FireSvelte',
	}
});

// export!
export default app;