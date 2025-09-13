fetch('projects.json')
  .then(res => res.json())
  .then(projects => {
    const container = document.getElementById('project-list');
    projects.forEach(p => {
      const el = document.createElement('div');
      el.className = 'project-card';
      el.innerHTML = `
        ${p.image ? `<img src="${p.image}" alt="${p.title}">` : ''}
        <h3>${p.title}</h3>
        <p>${p.summary}</p>
        <p><a href="${p.link}" target="_blank">View Project</a></p>
      `;
      container.appendChild(el);
    });
  });
