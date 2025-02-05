# upgrate

A simple CLI tool help you upgrade or migrate projects

## Prerequisite

Node >= v22.12.0

## Installation

npm:
```bash
npm install -g upgrate
```

yarn:
```bash
yarn global add upgrate
```

> [!TIP]
> You can run upgrate with npx without installing the package at all

Example:
```bash
npx upgrate --help
npx upgrate --package react 
npx upgrate --package react --latest
npx upgrate --package react --version 18.2.0
```

## Usage

### Help

Command:
```bash
upgrate --help
```

Output:
```bash
Usage: upgrate [options]

Options:
  -p, --package <package>  Package name (string)
  -v, --version <version>  Package version (string)
  -l, --latest             No argument option
  -h, --help               display help for command
```

### Get latest package

Command:
```bash
upgrate --package react --latest
```

Output:
```bash
.------------------------------------------.
| Title  |             Version             |
|--------|---------------------------------|
| latest | 19.0.0                          |
| next   | 19.1.0-canary-0a82580b-20250203 |
'------------------------------------------'
```

### Get package details

Command:
```bash
upgrate --package react --version 18.2.0 
```

Output:
```bash
.----------------------------------------------------------------------------.
|    Title     |                         Description                         |
|--------------|-------------------------------------------------------------|
| version      | 18.2.0                                                      |
| name         | react                                                       |
| description  | React is a JavaScript library for building user interfaces. |
| homepage     | https://reactjs.org/                                        |
| repository   | https://github.com/facebook/react.git                       |
| engines      | >=0.10.0                                                    |
| dependencies | loose-envify:^1.1.0                                         |
'----------------------------------------------------------------------------'
```

### Get package versions

Command:
```bash
upgrate --package react   
```

Output:
```bash
.---------------------------------------------------------------------------------------------------------------------------------------------------------.
|    Version     |              Engine              |                                            Dependencies                                             |
|----------------|----------------------------------|-----------------------------------------------------------------------------------------------------|
| 30.0.0-alpha.1 | ^16.10.0 || ^18.12.0 || >=20.0.0 | jest-cli:30.0.0-alpha.1, @jest/core:30.0.0-alpha.1, @jest/types:30.0.0-alpha.1, import-local:^3.0.2 |
| 29.7.0         | ^14.15.0 || ^16.10.0 || >=18.0.0 | jest-cli:^29.7.0, @jest/core:^29.7.0, @jest/types:^29.6.3, import-local:^3.0.2                      |
| 29.6.4         | ^14.15.0 || ^16.10.0 || >=18.0.0 | jest-cli:^29.7.0, @jest/core:^29.7.0, @jest/types:^29.6.3, import-local:^3.0.2                      |
'---------------------------------------------------------------------------------------------------------------------------------------------------------'
```

## License

Copyright (c) [2025] [Aziz Pratapgarh Wala]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

