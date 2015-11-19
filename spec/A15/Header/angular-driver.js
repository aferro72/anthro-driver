var webdriverjsAngular = require('webdriverjs-angular');
var options = {

	desiredCapabilities: {
		browserName: 'chrome'
	},
ngRoot: '#ng-app', // main application selector

waitforTimeout: 18000,
coloredLogs: true,
screenshotPath: './errorShots/',
reporter: 'spec'
};
jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
exports.createDriver = function () {
	var url = 'http://localhost:9020';
	var driver = webdriverjsAngular 
	.remote(options)
	.init()
	.url(url);
	console.log('createDriver');
	return driver;
};