#!/usr/bin/env node

const semver = require('semver');
const path = require('path');
require('dotenv').config({
    debug: process.env.DEBUG,
    path: path.resolve(__dirname, '.env')
});

const { program } = require('commander');
const {
    getPackageVersions,
    getPackageDetails,
    getLatestVersion,
    getCompatibleVersions,
    getCompatibleReleaseVersions } = require('./dist/cjs/main.js'); // Import the CommonJS bundle

// Function to validate package name
const isValidPackage = (value) => {
    if (!value || value.trim() === '') {
        throw new Error('Package name cannot be empty.');
    }
    return value;
};

// Function to validate version format
const isValidVersion = (value) => {
    if (!semver.valid(value)) {
        throw new Error(`Invalid version format: ${value}. Expected format: x.x.x (e.g., 1.0.0)`);
    }
    return value;
};

try {
    // Define command-line arguments and their validation
    program
        .option('-p, --package <package>', 'Package name (string)', isValidPackage)
        .option('-v, --version <version>', 'Package version (string)', isValidVersion)
        .option('-n, --node <version>', 'Node version (string)', isValidVersion)
        .option('-l, --latest', 'No argument option')
        .option('-r, --release', 'No argument option')
        .parse(process.argv);

    // Get the parsed arguments
    const options = program.opts();

    if (options.package) {
        if (options.version) {
            getPackageDetails(options.package, options.version);
        } else if (options.node && 'release' in options) {
            getCompatibleReleaseVersions(options.package, options.node);
        } else if (options.node) {
            getCompatibleVersions(options.package, options.node);
        } else if ('latest' in options) {
            getLatestVersion(options.package);
        } else {
            getPackageVersions(options.package);
        }
    } else {
        program.help(); // Show help if missing 'package' argument
    }
} catch (error) {
    console.error(error.message);
    process.exit(1); // Exit with error status
}

// This is a global event in Node.js that is emitted when a promise rejection occurs but is not handled by a .catch() or async/await error handler. 
process.on('unhandledRejection', (reason, promise) => {
    console.error(reason.message);
    process.exit(1); // Exit with error status
});
