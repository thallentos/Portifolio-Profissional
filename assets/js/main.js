function updateProfileInfo(profileData) {
  const photo = document.getElementById("profile.photo");
  photo.src = profileData.photo;
  photo.alt = profileData.name;

  const name = document.getElementById("profile.name");
  name.innerText = profileData.name;

  const job = document.getElementById("profile.job");
  job.innerHTML = `<a href="https://www.linkedin.com/in/thalles-marques/">${profileData.job}</a>`;

  const location = document.getElementById("profile.location");
  location.innerText = profileData.location;

  const phone = document.getElementById("profile.phone");
  phone.innerText = profileData.phone;
  phone.href = `tel:${profileData.phone}`;

  const email = document.getElementById("profile.email");
  email.innerText = profileData.email;
  email.href = `mailto:${profileData.email}`;
}

function updateSoftSkills(profileData) {
  const softSkills = document.getElementById("profile.skills.softSkills");
  softSkills.innerHTML = profileData.skills.softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join("");
}

function updateHardSkills(profileData) {
  const hardSkills = document.getElementById("profile.skills.hardSkills");
  hardSkills.innerHTML = profileData.skills.hardSkills
    .map((skill) => {
      if (skill.name === "MySql") {
        return `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}" style="background-color:rgb(98, 101, 183); padding: 2px; border-radius: 20%;"/></li>`;
      } else if (skill.name === "Java") {
        return `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}" style="background-color:rgb(98, 101, 183); padding: 2px; border-radius: 20%; width: 57%; height: 57%;"/></li>`;
      } else {
        return `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"/></li>`;
      }
    })
    .join("");
}

function updateLanguages(profileData) {
  const languages = document.getElementById("profile.languages");
  languages.innerHTML = profileData.languages
    .map((language) => `<li>${language}</li>`)
    .join("");
}

function updatePortfolio(profileData) {
  const portfolio = document.getElementById("profile.portfolio");
  portfolio.innerHTML = profileData.portfolio
    .map((project) => {
      return `
        <li>
          <h3 ${project.github ? 'class="github"' : ""}>${project.name}</h3>
          <b><p>Link do Repositório:</p></b><a href="${project.url}" target="_blank">${project.url}</a>
          ${project.certificado ? `<b><p>Link do Certificado:</p></b><a href="${project.certificado}" target="_blank">${project.certificado}</a>` : ``}
        </li>
      `;
    })
    .join("");
}

(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updateSoftSkills(profileData);
  updateHardSkills(profileData);
  updateLanguages(profileData);
  updatePortfolio(profileData);
})();
