const httpServices = require('./http-service');

/**
 * Fetch all the versions of the package.
 *
 * This function makes an API call to retrieve all the versions of the given package.
 *
 * @param {string} packageName - The package name to fetch.
 * @returns {Promise<object>} A Promise that resolves with an object containing the list of all the versions of the given package.
 * @throws {TypeError} Throws an error.
 */
async function getPackageVersions(packageName) {
    return new Promise((resolve, reject) => {
        httpServices.get(`/${packageName}`)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

/**
 * Fetch details of a specific version of a package.
 *
 * This function makes an API call to retrieve details of a given package for a specific version.
 *
 * @param {string} packageName - The package name to fetch.
 * @param {string} version - The version to fetch.
 * @returns {Promise<object>} A Promise that resolves with an object containing the details of a given package for a specific version.
 * @throws {TypeError} Throws an error.
 */
async function getPackageDetails(packageName, version) {
    return new Promise((resolve, reject) => {
        httpServices.get(`/${packageName}/${version}`)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

export { getPackageVersions, getPackageDetails };