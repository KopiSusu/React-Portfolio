export default (url, type, item) => {
	return (dispatch) => {  
		dispatch({
			type: `${type}_LOADING`
		})
		return fetch(url, {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: 'PUT',
			body: JSON.stringify(item)
		})
			.then(function(response) {
				if(response.ok) {
					return response.json()
				}
				throw new Error(`Error in put: ${response.statusText}`);
			})
			.then(function(json) {
				dispatch({
					type: `${type}_PUT_SUCCESS`,
					response: json,
					receivedAt: Date.now()
				})
			})
			.catch(function(error) {
				dispatch({
					type: `${type}_PUT_FAIL`,
					error: error.message
				})
			})
	}
}

