const request = require('request-promise');
const config = require('config');

const listOrganizationProjects = () => {
	const options = {
    uri: config.sempahore.v2BaseUrl + '/orgs/' + config.sempahore.organization,
    headers: {
			authorization: 'Token ' + config.semaphore.authToken
    },
    json: true
	};

	return request(options);
};

const createWebHook = (projectId) => {
	const options = {
		method: 'POST',
    uri: config.sempahore.v1BaseUrl + '/projects/' + projectId,
    headers: {
			authorization: 'Token ' + config.semaphore.authToken
    },
		body: {
			url: config.publicHost + config.webhooksPath + projectId,
			hook_type: "all"
		},
    json: true
	};

	return request(options);
};

const deleteWebHook = (projectId, hookId) => {
	const options = {
		method: 'DELETE',
    uri: config.sempahore.baseUrl + '/projects/' + projectId + '/hooks/' + hookId,
    headers: {
			authorization: 'Token ' + config.semaphore.authToken
    },
    json: true
	};

	return request(options);
};


module.exports = {
	listOrganizationProjects,
	createWebHook,
	deleteWebHook
};