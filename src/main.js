const packageService = require('./services/package-service');
const spinnerService = require('./services/spinner-service');
const cliTableService = require('./services/cli-table-service');
const responseMapper = require('./utils/response-mapper');

async function getPackageVersions(packageName) {
	try {
		spinnerService.start();

		const response = await packageService.getPackageVersions(packageName);

		const enteries = responseMapper.mapPackageVerions(response);

		spinnerService.stop();

		cliTableService.render(['Version', 'Engine', 'Dependencies'], enteries);
	} catch (error) {
		spinnerService.stop();
		console.error(error);
	} finally {
		spinnerService.stop();
	}
}

async function getPackageDetails(packageName, version) {
	try {
		spinnerService.start();

		const response = await packageService.getPackageDetails(packageName, version);

		const enteries = responseMapper.mapPackageDetails(response);

		spinnerService.stop();

		cliTableService.render(['Title', 'Description'], enteries);
	} catch (error) {
		spinnerService.stop();
		console.error(error);
	} finally {
		spinnerService.stop();
	}
}

async function getLatestVersion(packageName, version) {
	try {
		spinnerService.start();

		const response = await packageService.getPackageVersions(packageName);

		const enteries = responseMapper.mapLatestVersion(response);

		spinnerService.stop();

		cliTableService.render(['Title', 'Version'], enteries);
	} catch (error) {
		spinnerService.stop();
		console.error(error);
	} finally {
		spinnerService.stop();
	}
}

export { getPackageVersions, getPackageDetails, getLatestVersion };