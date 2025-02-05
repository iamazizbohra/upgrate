const _ = require('lodash');

function objToString(obj, seperator = ':') {
    let formatedString = '';

    for (let [key, value] of Object.entries(obj)) {
        formatedString += `${key}${seperator}${value}, `;
    }

    return formatedString.slice(0, -2);
}

function mapPackageVerions(response) {
    const enteries = [];

    const versions = _.fromPairs(_.reverse(_.toPairs(response.versions)));
    for (let version in versions) {
        const obj = versions[version];

        let dependenciesString = objToString(obj.dependencies ? obj.dependencies : {});

        enteries.push([version, obj && obj.engines && obj.engines.node, dependenciesString]);
    }

    return enteries;
}

function mapPackageDetails(response) {
    const enteries = [];

    if (response.version) {
        enteries.push(['version', response.version]);
    }

    enteries.push(['name', response.name]);
    enteries.push(['description', response.description]);
    enteries.push(['homepage', response.homepage]);
    enteries.push(['repository', response.repository.url.replace(/^git\+/, '')]);

    if (response.engines && response.engines.node) {
        enteries.push(['engines', response.engines.node]);
    }

    if (response.dependencies) {
        let dependenciesString = objToString(response.dependencies);
        enteries.push(['dependencies', dependenciesString]);
    }

    return enteries;
}

function mapLatestVersion(response) {
    const enteries = [];

    enteries.push(['latest', (response['dist-tags'] && response['dist-tags'].latest) ? response['dist-tags'].latest : '-']);
    enteries.push(['next', (response['dist-tags'] && response['dist-tags'].next) ? response['dist-tags'].next : '-']);

    return enteries;
}

export { mapPackageVerions, mapPackageDetails, mapLatestVersion };