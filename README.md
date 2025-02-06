# upgrate

A simple CLI tool help you upgrade or migrate projects

## Prerequisites

```bash
nvm install 22.12.0
```
```bash
nvm use 22.12.0
```

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
> You can use upgrate with npx without installing the package at all

Example:
```bash
npx upgrate --help
```
```bash
npx upgrate --package jest 
```
```bash
npx upgrate --package jest --latest
```
```bash
npx upgrate --package jest --version 29.7.0
```
```bash
npx upgrate --package jest --node 22.12.0
```
```bash
npx upgrate --package jest --node 22.12.0 --release
```

Format:
```bash
npx upgrate --help
```
```bash
npx upgrate --package <package> 
```
```bash
npx upgrate --package <package> --latest
```
```bash
npx upgrate --package <package> --version <version>
```
```bash
npx upgrate --package <package> --node <version>
```
```bash
npx upgrate --package <package> --node <version> --release
```

## Usage

### Help

Command:
```bash
npx upgrate --help
```

Output:
```bash
Usage: upgrate [options]

Options:
  -p, --package <package>  Package name (string)
  -v, --version <version>  Package version (string)
  -n, --node <version>     Node version (string)
  -l, --latest             No argument option
  -r, --release            No argument option
  -h, --help               display help for command
```

### Get latest package

Command:
```bash
npx upgrate --package jest --latest
```

Output:
```bash
.-------------------------.
| Title  |    Version     |
|--------|----------------|
| latest | 29.7.0         |
| next   | 30.0.0-alpha.7 |
'-------------------------'
```

### Get package details

Command:
```bash
npx upgrate --package jest --version 29.7.0
```

Output:
```bash
.-----------------------------------------------------------------------------------------------.
|    Title     |                                  Description                                   |
|--------------|--------------------------------------------------------------------------------|
| version      | 29.7.0                                                                         |
| name         | jest                                                                           |
| description  | Delightful JavaScript Testing.                                                 |
| homepage     | https://jestjs.io/                                                             |
| repository   | https://github.com/jestjs/jest.git                                             |
| engines      | ^14.15.0 || ^16.10.0 || >=18.0.0                                               |
| dependencies | jest-cli:^29.7.0, @jest/core:^29.7.0, @jest/types:^29.6.3, import-local:^3.0.2 |
'-----------------------------------------------------------------------------------------------'
```

### Get all versions of the package

Command:
```bash
npx upgrate --package jest   
```

Output:
```bash
.-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------.
|        Version        |                    Engine                    |                                              Dependencies                                              |
|-----------------------|----------------------------------------------|--------------------------------------------------------------------------------------------------------|
| 30.0.0-alpha.7        | ^16.10.0 || ^18.12.0 || >=20.0.0             | @jest/core:30.0.0-alpha.7, @jest/types:30.0.0-alpha.7, import-local:^3.0.2, jest-cli:30.0.0-alpha.7    |
| 30.0.0-alpha.6        | ^16.10.0 || ^18.12.0 || >=20.0.0             | jest-cli:30.0.0-alpha.6, @jest/core:30.0.0-alpha.6, @jest/types:30.0.0-alpha.6, import-local:^3.0.2    |
| 30.0.0-alpha.5        | ^16.10.0 || ^18.12.0 || >=20.0.0             | jest-cli:30.0.0-alpha.5, @jest/core:30.0.0-alpha.5, @jest/types:30.0.0-alpha.5, import-local:^3.0.2    |
| 30.0.0-alpha.4        | ^16.10.0 || ^18.12.0 || >=20.0.0             | jest-cli:30.0.0-alpha.4, @jest/core:30.0.0-alpha.4, @jest/types:30.0.0-alpha.4, import-local:^3.0.2    |
| 30.0.0-alpha.3        | ^16.10.0 || ^18.12.0 || >=20.0.0             | jest-cli:30.0.0-alpha.3, @jest/core:30.0.0-alpha.3, @jest/types:30.0.0-alpha.3, import-local:^3.0.2    |
| 30.0.0-alpha.2        | ^16.10.0 || ^18.12.0 || >=20.0.0             | jest-cli:30.0.0-alpha.2, @jest/core:30.0.0-alpha.2, @jest/types:30.0.0-alpha.2, import-local:^3.0.2    |
| 30.0.0-alpha.1        | ^16.10.0 || ^18.12.0 || >=20.0.0             | jest-cli:30.0.0-alpha.1, @jest/core:30.0.0-alpha.1, @jest/types:30.0.0-alpha.1, import-local:^3.0.2    |
| 29.7.0                | ^14.15.0 || ^16.10.0 || >=18.0.0             | jest-cli:^29.7.0, @jest/core:^29.7.0, @jest/types:^29.6.3, import-local:^3.0.2                         |
| 29.6.4                | ^14.15.0 || ^16.10.0 || >=18.0.0             | jest-cli:^29.6.4, @jest/core:^29.6.4, @jest/types:^29.6.3, import-local:^3.0.2                         |
| 29.6.3                | ^14.15.0 || ^16.10.0 || >=18.0.0             | jest-cli:^29.6.3, @jest/core:^29.6.3, @jest/types:^29.6.3, import-local:^3.0.2                         |
| 29.6.2                | ^14.15.0 || ^16.10.0 || >=18.0.0             | jest-cli:^29.6.2, @jest/core:^29.6.2, @jest/types:^29.6.1, import-local:^3.0.2                         |
| 29.6.1                | ^14.15.0 || ^16.10.0 || >=18.0.0             | jest-cli:^29.6.1, @jest/core:^29.6.1, @jest/types:^29.6.1, import-local:^3.0.2                         |
| 29.6.0                | ^14.15.0 || ^16.10.0 || >=18.0.0             | jest-cli:^29.6.0, @jest/core:^29.6.0, @jest/types:^29.6.0, import-local:^3.0.2                         |
| 29.5.0                | ^14.15.0 || ^16.10.0 || >=18.0.0             | jest-cli:^29.5.0, @jest/core:^29.5.0, @jest/types:^29.5.0, import-local:^3.0.2                         |
| 29.0.0-alpha.6        | ^14.15.0 || ^16.10.0 || >=18.0.0             | jest-cli:^29.0.0-alpha.6, @jest/core:^29.0.0-alpha.6, @jest/types:^29.0.0-alpha.6, import-local:^3.0.2 |
| 29.0.0-alpha.5        | ^14.15.0 || ^16.10.0 || >=18.0.0             | jest-cli:^29.0.0-alpha.5, @jest/core:^29.0.0-alpha.5, @jest/types:^29.0.0-alpha.4, import-local:^3.0.2 |
| 29.0.0-alpha.4        | ^14.15.0 || ^16.10.0 || >=18.0.0             | jest-cli:^29.0.0-alpha.4, @jest/core:^29.0.0-alpha.4, @jest/types:^29.0.0-alpha.4, import-local:^3.0.2 |
| 29.0.0-alpha.3        | ^14.15.0 || ^16.10.0 || >=18.0.0             | jest-cli:^29.0.0-alpha.3, @jest/core:^29.0.0-alpha.3, @jest/types:^29.0.0-alpha.3, import-local:^3.0.2 |
| 29.0.0-alpha.1        | ^14.15.0 || ^16.10.0 || >=18.0.0             | jest-cli:^29.0.0-alpha.1, @jest/core:^29.0.0-alpha.1, @jest/types:^29.0.0-alpha.0, import-local:^3.0.2 |
| 29.0.0-alpha.0        | ^14.15.0 || ^16.10.0 || >=18.0.0             | jest-cli:^29.0.0-alpha.0, @jest/core:^29.0.0-alpha.0, @jest/types:^29.0.0-alpha.0, import-local:^3.0.2 |
| 28.1.3                | ^12.13.0 || ^14.15.0 || ^16.10.0 || >=17.0.0 | jest-cli:^28.1.3, @jest/core:^28.1.3, @jest/types:^28.1.3, import-local:^3.0.2                         |
| 28.1.2                | ^12.13.0 || ^14.15.0 || ^16.10.0 || >=17.0.0 | jest-cli:^28.1.2, @jest/core:^28.1.2, @jest/types:^28.1.1, import-local:^3.0.2                         |
| 28.1.1                | ^12.13.0 || ^14.15.0 || ^16.10.0 || >=17.0.0 | jest-cli:^28.1.1, @jest/core:^28.1.1, @jest/types:^28.1.1, import-local:^3.0.2                         |
| 28.1.0                | ^12.13.0 || ^14.15.0 || ^16.10.0 || >=17.0.0 | jest-cli:^28.1.0, @jest/core:^28.1.0, import-local:^3.0.2                                              |
| 28.0.3                | ^12.13.0 || ^14.15.0 || ^16.10.0 || >=17.0.0 | jest-cli:^28.0.3, @jest/core:^28.0.3, import-local:^3.0.2                                              |
| 28.0.2                | ^12.13.0 || ^14.15.0 || ^16.10.0 || >=17.0.0 | jest-cli:^28.0.2, @jest/core:^28.0.2, import-local:^3.0.2                                              |
| 28.0.1                | ^12.13.0 || ^14.15.0 || ^16.13.0 || >=17.0.0 | jest-cli:^28.0.1, @jest/core:^28.0.1, import-local:^3.0.2                                              |
| 28.0.0                | ^12.13.0 || ^14.15.0 || ^16.13.0 || >=17.0.0 | jest-cli:^28.0.0, @jest/core:^28.0.0, import-local:^3.0.2                                              |
'-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------'
```

### Get node compatible versions of the package

Command:
```bash
npx upgrate --package jest --node 22.12.0 
```

Output:
```bash
.-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------.
|        Version        |                    Engine                    |                                              Dependencies                                              |
|-----------------------|----------------------------------------------|--------------------------------------------------------------------------------------------------------|
| 30.0.0-alpha.7        | ^16.10.0 || ^18.12.0 || >=20.0.0             | @jest/core:30.0.0-alpha.7, @jest/types:30.0.0-alpha.7, import-local:^3.0.2, jest-cli:30.0.0-alpha.7    |
| 30.0.0-alpha.6        | ^16.10.0 || ^18.12.0 || >=20.0.0             | jest-cli:30.0.0-alpha.6, @jest/core:30.0.0-alpha.6, @jest/types:30.0.0-alpha.6, import-local:^3.0.2    |
| 30.0.0-alpha.5        | ^16.10.0 || ^18.12.0 || >=20.0.0             | jest-cli:30.0.0-alpha.5, @jest/core:30.0.0-alpha.5, @jest/types:30.0.0-alpha.5, import-local:^3.0.2    |
| 30.0.0-alpha.4        | ^16.10.0 || ^18.12.0 || >=20.0.0             | jest-cli:30.0.0-alpha.4, @jest/core:30.0.0-alpha.4, @jest/types:30.0.0-alpha.4, import-local:^3.0.2    |
| 30.0.0-alpha.3        | ^16.10.0 || ^18.12.0 || >=20.0.0             | jest-cli:30.0.0-alpha.3, @jest/core:30.0.0-alpha.3, @jest/types:30.0.0-alpha.3, import-local:^3.0.2    |
| 30.0.0-alpha.2        | ^16.10.0 || ^18.12.0 || >=20.0.0             | jest-cli:30.0.0-alpha.2, @jest/core:30.0.0-alpha.2, @jest/types:30.0.0-alpha.2, import-local:^3.0.2    |
| 30.0.0-alpha.1        | ^16.10.0 || ^18.12.0 || >=20.0.0             | jest-cli:30.0.0-alpha.1, @jest/core:30.0.0-alpha.1, @jest/types:30.0.0-alpha.1, import-local:^3.0.2    |
| 29.7.0                | ^14.15.0 || ^16.10.0 || >=18.0.0             | jest-cli:^29.7.0, @jest/core:^29.7.0, @jest/types:^29.6.3, import-local:^3.0.2                         |
| 29.6.4                | ^14.15.0 || ^16.10.0 || >=18.0.0             | jest-cli:^29.6.4, @jest/core:^29.6.4, @jest/types:^29.6.3, import-local:^3.0.2                         |
| 29.6.3                | ^14.15.0 || ^16.10.0 || >=18.0.0             | jest-cli:^29.6.3, @jest/core:^29.6.3, @jest/types:^29.6.3, import-local:^3.0.2                         |
| 29.6.2                | ^14.15.0 || ^16.10.0 || >=18.0.0             | jest-cli:^29.6.2, @jest/core:^29.6.2, @jest/types:^29.6.1, import-local:^3.0.2                         |
| 29.6.1                | ^14.15.0 || ^16.10.0 || >=18.0.0             | jest-cli:^29.6.1, @jest/core:^29.6.1, @jest/types:^29.6.1, import-local:^3.0.2                         |
| 29.6.0                | ^14.15.0 || ^16.10.0 || >=18.0.0             | jest-cli:^29.6.0, @jest/core:^29.6.0, @jest/types:^29.6.0, import-local:^3.0.2                         |
| 29.5.0                | ^14.15.0 || ^16.10.0 || >=18.0.0             | jest-cli:^29.5.0, @jest/core:^29.5.0, @jest/types:^29.5.0, import-local:^3.0.2                         |
'-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------'
```

### Get node compatible release versions of the package

Command:
```bash
npx upgrate --package jest --node 22.12.0 --release
```

Output:
```bash
.-----------------------------------------------------------------------------------------------------------------------------------------.
| Version |                    Engine                    |                                  Dependencies                                  |
|---------|----------------------------------------------|--------------------------------------------------------------------------------|
| 29.7.0  | ^14.15.0 || ^16.10.0 || >=18.0.0             | jest-cli:^29.7.0, @jest/core:^29.7.0, @jest/types:^29.6.3, import-local:^3.0.2 |
| 29.6.4  | ^14.15.0 || ^16.10.0 || >=18.0.0             | jest-cli:^29.6.4, @jest/core:^29.6.4, @jest/types:^29.6.3, import-local:^3.0.2 |
| 29.6.3  | ^14.15.0 || ^16.10.0 || >=18.0.0             | jest-cli:^29.6.3, @jest/core:^29.6.3, @jest/types:^29.6.3, import-local:^3.0.2 |
| 29.6.2  | ^14.15.0 || ^16.10.0 || >=18.0.0             | jest-cli:^29.6.2, @jest/core:^29.6.2, @jest/types:^29.6.1, import-local:^3.0.2 |
| 29.6.1  | ^14.15.0 || ^16.10.0 || >=18.0.0             | jest-cli:^29.6.1, @jest/core:^29.6.1, @jest/types:^29.6.1, import-local:^3.0.2 |
| 29.6.0  | ^14.15.0 || ^16.10.0 || >=18.0.0             | jest-cli:^29.6.0, @jest/core:^29.6.0, @jest/types:^29.6.0, import-local:^3.0.2 |
| 29.5.0  | ^14.15.0 || ^16.10.0 || >=18.0.0             | jest-cli:^29.5.0, @jest/core:^29.5.0, @jest/types:^29.5.0, import-local:^3.0.2 |
'-----------------------------------------------------------------------------------------------------------------------------------------'
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

