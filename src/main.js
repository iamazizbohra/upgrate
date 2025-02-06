const packageService = require('./services/package-service');
const spinnerService = require('./services/spinner-service');
const cliTableService = require('./services/cli-table-service');
const responseMapper = require('./utils/response-mapper');
const filterService = require('./services/filter-service');

async function getPackageVersions(packageName) {
	try {
		spinnerService.start();

		const response = await packageService.getPackageVersions(packageName);

		const enteries = responseMapper.mapPackageVerions(response);

		spinnerService.stop();

		cliTableService.render(['Version', 'Engine', 'Dependencies'], enteries);
	} catch (error) {
		spinnerService.fail(error.message);
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
		spinnerService.fail(error.message);
	}
}

async function getLatestVersion(packageName) {
	try {
		spinnerService.start();

		const response = await packageService.getPackageVersions(packageName);

		const enteries = responseMapper.mapLatestVersion(response);

		spinnerService.stop();

		cliTableService.render(['Title', 'Version'], enteries);
	} catch (error) {
		spinnerService.fail(error.message);
	}
}

async function getCompatibleVersions(packageName, version) {
	try {
		spinnerService.start();

		const response = await packageService.getPackageVersions(packageName);

		const enteries = responseMapper.mapPackageVerions(response);

		const filteredEnteries = filterService.filterCompatibleVersions(enteries, version);

		spinnerService.stop();

		cliTableService.render(['Version', 'Engine', 'Dependencies'], filteredEnteries);
	} catch (error) {
		spinnerService.fail(error.message);
	}
}

async function getCompatibleReleaseVersions(packageName, version) {
	try {
		spinnerService.start();

		const response = await packageService.getPackageVersions(packageName);

		const enteries = responseMapper.mapPackageVerions(response);

		let filteredEnteries = filterService.filterCompatibleVersions(enteries, version);
		filteredEnteries = filterService.filterReleaseVersions(enteries);

		spinnerService.stop();

		cliTableService.render(['Version', 'Engine', 'Dependencies'], filteredEnteries);
	} catch (error) {
		spinnerService.fail(error.message);
	}
}

export { getPackageVersions, getPackageDetails, getLatestVersion, getCompatibleVersions, getCompatibleReleaseVersions };