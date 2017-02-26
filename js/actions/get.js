export default (url, type) => {
	return (dispatch) => {  
		dispatch({
			type: `${type}_LOADING`
		})
		return fetch(url)
			.then(function(response) {
				if(response.ok)
					return response.json()

				throw new Error(`Error in get: ${response.statusText}`);
			})
			.then(function(json) {
				if(type === 'ORDER') {
					json = json[0]
				}
				dispatch({
					type: `${type}_SUCCESS`,
					response: json,
					receivedAt: Date.now()
				})
			})
			.catch(function(error) {
				dispatch({
					type: `${type}_FAIL`,
					error: error.message
				})
			})
	}
}

