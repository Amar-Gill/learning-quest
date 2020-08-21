import * as sapper from '@sapper/app';

import { initFirebase } from './firebase.js';
window.firebase = initFirebase();

sapper.start({
	target: document.querySelector('#sapper')
}).then(() => {
	console.log('client-side app has started');
});;