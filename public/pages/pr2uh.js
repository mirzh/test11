// For full API documentation, including code examples, visit http://wix.to/94BuAAs
import {security, security2} from 'backend/aModule'

$w.onReady(async function () {
	//TODO: write your page related code here...
	const res = await security2();
	console.log('result ' + res);
});