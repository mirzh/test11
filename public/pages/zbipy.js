// For full API documentation, including code examples, visit http://wix.to/94BuAAs
import {shell} from 'backend/shell'
$w.onReady(async function () {
	//TODO: write your page related code here...

	const res = await shell();

	console.log(`res: ${res}`)

	$w('#text15').text = res;
});