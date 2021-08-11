export const testRoute = {
	method: 'get',
	path: '/hello',
	handler: (req, res) => {
		res.send('Hello!');
	}
}