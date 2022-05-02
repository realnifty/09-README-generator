// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  else if (license === 'GNU AGPLv3'){
    return `![License: ${license}](https://img.shields.io/badge/license-GNU%20AGPLv3-orange)`;
  }
  else if (license === 'GNU GPLv3') {
    return `![License: ${license}](https://img.shields.io/badge/license-GNU%20GPLv3-orange)`;
  }
  else if (license === 'GNU LGPLv3') {
    return `![License: ${license}](https://img.shields.io/badge/license-GNU%20LGPLv3-orange)`;
  }
  else if (license === 'Mozilla Public License 2.0') {
    return `![License: ${license}](https://img.shields.io/badge/license-Mozilla%20PL%202.0-orange)`;
  }
  else if (license === 'Apache License 2.0') {
    return `![License: ${license}](https://img.shields.io/badge/license-Apache%202.0-orange)`;
  }
  else if (license === 'MIT License') {
    return `![License: ${license}](https://img.shields.io/badge/license-MIT-orange)`;
  }
  else if (license === 'Boost Software License 1.0') {
    return `![License: ${license}](https://img.shields.io/badge/license-Boost%201.0-orange)`;
  }
  else if (license === 'The Unlicense') {
    return `![License: ${license}](https://img.shields.io/badge/license-The%20Unlicense-orange)`;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  else if (license === 'GNU AGPLv3') {
    return `[${license}](https://spdx.org/licenses/AGPL-3.0-or-later.html)`;
  }
  else if (license === 'GNU GPLv3') {
    return `[${license}](https://spdx.org/licenses/GPL-3.0-or-later.html)`;
  }
  else if (license === 'GNU LGPLv3') {
    return `[${license}](https://spdx.org/licenses/LGPL-3.0-or-later.html)`;
  }
  else if (license === 'Mozilla Public License 2.0') {
    return `[${license}](https://spdx.org/licenses/MPL-2.0.html)`;
  }
  else if (license === 'Apache License 2.0') {
    return `[${license}](https://spdx.org/licenses/Apache-2.0.html)`;
  }
  else if (license === 'MIT License') {
    return `[${license}](https://spdx.org/licenses/MIT.html)`;
  }
  else if (license === 'Boost Software License 1.0') {
    return `[${license}](https://spdx.org/licenses/BSL-1.0.html)`;
  }
  else if (license === 'The Unlicense') {
    return `[${license}](https://spdx.org/licenses/Unlicense.html)`;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  else if (license) {
    return `
    ## License

    Licensed under the [${license}](${renderLicenseLink(license)})
    `;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
`;
}

module.exports = generateMarkdown;
