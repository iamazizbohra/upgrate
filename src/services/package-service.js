const httpServices = require('./http-service');

async function getPackageVersions(packageName) {
    return new Promise((resolve, reject) => {
        httpServices.get(`/${packageName}`)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject({
                    status: error.status,
                    code: error.code,
                    name: error.name,
                    message: error.message
                });
            });
    });
}

async function getPackageDetails(packageName, version) {
    return new Promise((resolve, reject) => {
        httpServices.get(`/${packageName}/${version}`)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject({
                    status: error.status,
                    code: error.code,
                    name: error.name,
                    message: error.message
                });
            });
    });
}

export { getPackageVersions, getPackageDetails };