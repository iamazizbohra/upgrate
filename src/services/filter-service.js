const _ = require('lodash');
const semver = require('semver');

function filterCompatibleVersions(enteries, version) {
    const filteredEnteries = _.filter(enteries, function (elem) {
        let pkgNodeVersion = elem[1];

        if (semver.satisfies(version, pkgNodeVersion)) {
            return true;
        }

        return false;
    });

    return filteredEnteries;
}

function filterReleaseVersions(enteries) {
    const filteredEnteries = _.filter(enteries, function (elem) {
        let pkgVersion = elem[0];

        if (semver.prerelease(pkgVersion)) {
            return false;
        }

        return true;
    });

    return filteredEnteries;
}

export { filterCompatibleVersions, filterReleaseVersions };