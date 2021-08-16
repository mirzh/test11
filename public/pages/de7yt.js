import {slowMultiply} from 'backend/aModule';

$w.onReady(function () {
	
	slowMultiply(4,5).then(product => {
	    console.log(product);

		$w('#text15').text = product.toString();
	      // Logs: 20
	})
	.catch(error => {
		console.log(error);
	});
});