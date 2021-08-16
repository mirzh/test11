import {ok, badRequest} from 'wix-http-functions';

// URL to call this HTTP function from your published site looks like: 
// Premium site - https://mysite.com/_functions/example/multiply?leftOperand=3&rightOperand=4
// Free site - https://username.wixsite.com/mysite/_functions/example/multiply?leftOperand=3&rightOperand=4

// URL to test this HTTP function from your saved site looks like:
// Premium site - https://mysite.com/_functions-dev/example/multiply?leftOperand=3&rightOperand=4
// Free site - https://username.wixsite.com/mysite/_functions-dev/example/multiply?leftOperand=3&rightOperand=4

export function get_example(request) {
	const response = {
		"headers": {
			"Content-Type": "application/json"
		}
	};

	// Get operation from the request path
	const operation = request.path[0]; // "multiply"
	const leftOperand = parseInt(request.query["leftOperand"], 10); // 3
	const rightOperand = parseInt(request.query["rightOperand"], 10); // 4

	// Perform the requested operation and return an OK response
	// with the answer in the response body
	switch (operation) {
	case 'add':
		response.body = {
			"sum": leftOperand + rightOperand
		};
		return ok(response);
	case 'multiply':
		response.body = {
			"product": leftOperand * rightOperand
		};
		return ok(response);
	default:
		// If the requested operation was not found, return a Bad Request
		// response with an error message in the response body
		response.body = {
			"error": "unknown operation"
		};
		return badRequest(response);
	}
}

export function get_dummy(request) {
	const response = {
		"headers": {
			"Content-Type": "application/json"
		}
	};

	return ok(response);
}

export function get_cpu(request) {
    function wait_ms(ms){
        var start = new Date().getTime();
        var end = start;
        while(end < start + ms) {
            end = new Date().getTime();
        }
    }

	const response = {
		"headers": {
			"Content-Type": "application/json"
		}
	};

    wait_ms(5000);
    
	return ok(response);
}

export async function get_wait(request) {
    function delay(t, v) {
        return new Promise(function(resolve) { 
            setTimeout(resolve.bind(null, v), t)
        });
    }

	const response = {
		"headers": {
			"Content-Type": "application/json"
		}
	};

    await delay(5000);

	return ok(response);
}