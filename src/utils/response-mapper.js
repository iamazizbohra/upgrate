const _ = require('lodash');

/**
 * Transform the object to a comma-separated string.
 *
 * This function takes an object and a seperator.
 *
 * @param {object} obj - The object to transform.
 * @param {string} seperator - Separator to use when concatenating.
 * @returns {string} A comma separated string.
 * @throws {TypeError} Throws an error.
 */
function objToString(obj, seperator = ':') {
    let formatedString = '';

    for (let [key, value] of Object.entries(obj)) {
        formatedString += `${key}${seperator}${value}, `;
    }

    return formatedString.slice(0, -2);
}

/**
 * Transform raw http response to an array.
 *
 * This function takes a raw http response and transform it into an array.
 *
 * @param {object} response - The raw http response.
 * @returns {array[][]} An array of arrays containing the package version, node version, and list of dependencies.
 * @throws {TypeError} Throws an error.
 */
function mapPackageVerions(response) {
    const enteries = [];

    const versions = _.fromPairs(_.reverse(_.toPairs(response.versions)));
    for (let version in versions) {
        const obj = versions[version];

        enteries.push([version, (obj && obj?.engines?.node) || '', objToString(obj.dependencies ? obj.dependencies : {})]);
    }

    return enteries;
}

/**
 * Transform raw http response to an array.
 *
 * This function takes a raw http response and transform it into an array.
 *
 * @param {object} response - The raw http response.
 * @returns {array[][]} An array of arrays containing the details of package.
 * @throws {TypeError} Throws an error.
 */
function mapPackageDetails(response) {
    const enteries = [];

    enteries.push(['version', response?.version || '']);
    enteries.push(['name', response.name]);
    enteries.push(['description', response.description]);
    enteries.push(['homepage', response.homepage]);
    enteries.push(['repository', response.repository.url.replace(/^git\+/, '')]);
    enteries.push(['engines', response?.engines?.node || '']);
    enteries.push(['dependencies', objToString(response.dependencies ? response.dependencies : {})]);

    return enteries;
}

/**
 * Transform raw http response to an array.
 *
 * This function takes a raw http response and transform it into an array.
 *
 * @param {object} response - The raw http response.
 * @returns {array[][]} An array of arrays containing the latest and next versions of package.
 * @throws {TypeError} Throws an error.
 */
function mapLatestVersion(response) {
    const enteries = [];

    enteries.push(['latest', (response['dist-tags'] && response['dist-tags']?.latest) || '']);
    enteries.push(['next', (response['dist-tags'] && response['dist-tags']?.next) || '']);

    return enteries;
}

export { mapPackageVerions, mapPackageDetails, mapLatestVersion };