import { semesterData, companyData } from './data';

const semesterCardHolder = document.getElementById('semester-card-holder');
for (let i = 0; i < 3; i += 1) {
  const semester = semesterData[i];

  const divContainer = document.createElement('div');
  divContainer.setAttribute('class', 'card');
  divContainer.innerHTML = `
    <h3>${semester.year}</h3>
    <p>${semester.description}</p>
  `;

  semesterCardHolder.appendChild(divContainer);
}

const professionalCardHolder = document.getElementById('professional-card-holder');
for (let i = 0; i < 3; i += 1) {
  const company = companyData[i];

  const divContainer = document.createElement('div');
  divContainer.setAttribute('class', 'card');
  divContainer.innerHTML = `
    <h3>${company.name}</h3>
    <a href="${company.externalLink}" target="_blank">Learn More</a>
    <p>${company.description}</p>
  `;

  professionalCardHolder.appendChild(divContainer);
}
