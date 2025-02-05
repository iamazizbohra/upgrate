#!/usr/bin/env node

const path = require('path');
require('dotenv').config({
    debug: process.env.DEBUG,
    path: path.resolve(__dirname, '.env')
});

const { program } = require('commander');
const { getPackageVersions, getPackageDetails, getLatestVersion } = require('./dist/cjs/main.js'); // Import the CommonJS bundle

// Function to validate package name
const isValidPackage = (value) => {
    if (!value || value.trim() === '') {
        throw new Error('Package name cannot be empty.');
    }
    return value;
};

// Function to validate version format
const isValidVersion = (value) => {
    const versionRegex = /^(\d+\.)?(\d+\.)?(\*|\d+)$/; // Basic version regex (major.minor.patch)
    if (!versionRegex.test(value)) {
        throw new Error(`Invalid version format: ${value}. Expected format: x.x.x (e.g., 1.0.0)`);
    }
    return value;
};

// Define command-line arguments and their validation
program
    .option('-p, --package <package>', 'Package name (string)', isValidPackage)
    .option('-v, --version <version>', 'Package version (string)', isValidVersion)
    .option('-l, --latest', 'No argument option')
    .parse(process.argv);

// Get the parsed arguments
const options = program.opts();

if (options.package && options.version) {
    getPackageDetails(options.package, options.version);
} else if (options.package && ('latest' in options)) {
    getLatestVersion(options.package);
} else if (options.package) {
    getPackageVersions(options.package);
} else {
    program.help(); // Show help if missing arguments
}