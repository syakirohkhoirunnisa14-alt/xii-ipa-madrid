// Render setelah DOM siap
document.addEventListener('DOMContentLoaded', () => {
  initMembers();
  initTimeline();
  initGalleries();
  initVideos();
  initHopes();
});

// Fungsi pembantu: Ubah link Google Drive biasa menjadi Direct Link Gambar
function convertDriveUrl(url) {
  if (!url) return 'https://via.placeholder.com/150';
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://lh3.googleusercontent.com/d/${match[1]}`;
  }
  return url;
}

// 1. Render 33 Profil Anggota
function initMembers() {
  const container = document.getElementById('members-carousel');
  container.innerHTML = '';

  yearbookData.members.forEach((member, index) => {
    const card = document.createElement('div');
    card.className = 'member-card';
    card.onclick = () => openProfileModal(index);

    const imageUrl = convertDriveUrl(member.driveUrl);

    card.innerHTML = `
      <img src="${imageUrl}" alt="${member.name}" class="member-avatar" onerror="this.src='https://via.placeholder.com/150'">
      <h3>${member.name}</h3>
      <span class="role-badge">${member.role}</span>
    `;
    container.appendChild(card);
  });
}

// 2. Render Timeline 3 Tahun
function initTimeline() {
  const container = document.getElementById('timeline-grid');
  container.innerHTML = '';

  yearbookData.timeline.forEach(item => {
    const card = document.createElement('div');
    card.className = 'timeline-card';
    card.innerHTML = `
      <span class="year">${item.year} - ${item.phase}</span>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    `;
    container.appendChild(card);
  });
}

// 3. Render Carousel Galeri per Jenjang
function initGalleries() {
  ['sofia', 'latvia', 'madrid'].forEach(phase => {
    const container = document.getElementById(`gallery-${phase}`);
    if (!container) return;
    container.innerHTML = '';

    yearbookData.galleries[phase].forEach(item => {
      const card = document.createElement('div');
      card.className = 'gallery-card';
      card.innerHTML = `
        <img src="${item.img}" alt="${item.title}">
        <div class="caption">${item.title}</div>
      `;
      container.appendChild(card);
    });
  });
}

// 4. Render Video Kompilasi YouTube
function initVideos() {
  const container = document.getElementById('video-grid');
  container.innerHTML = '';

  yearbookData.videos.forEach(video => {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.innerHTML = `
      <iframe src="https://www.youtube.com/embed/${video.youtubeId}" allowfullscreen></iframe>
      <h4>${video.title}</h4>
    `;
    container.appendChild(card);
  });
}

// 5. Render Harapan
function initHopes() {
  const container = document.getElementById('hopes-grid');
  container.innerHTML = '';

  yearbookData.members.forEach(member => {
    const card = document.createElement('div');
    card.className = 'hope-card';
    card.innerHTML = `
      <h4>${member.name}</h4>
      <p>"${member.hope}"</p>
    `;
    container.appendChild(card);
  });
}

// Scroll Horizontal Carousel
function scrollContainer(id, amount) {
  const container = document.getElementById(id);
  if (container) {
    container.scrollBy({ left: amount, behavior: 'smooth' });
  }
}

// Open Modal Pop-up
function openProfileModal(index) {
  const member = yearbookData.members[index];
  if (!member) return;

  document.getElementById('modal-img').src = convertDriveUrl(member.driveUrl);
  document.getElementById('modal-name').innerText = member.name;
  document.getElementById('modal-role').innerText = member.role;
  document.getElementById('modal-quote').innerText = `"${member.quote}"`;
  document.getElementById('modal-hope').innerText = member.hope;

  document.getElementById('profile-modal').style.display = 'flex';
}

// Close Modal
function closeModal() {
  document.getElementById('profile-modal').style.display = 'none';
}

function closeModalOnBackdrop(event) {
  if (event.target.id === 'profile-modal') {
    closeModal();
  }
}

// Toggle Widget Spotify Music
function toggleSpotifyWidget() {
  const widget = document.getElementById('spotify-widget');
  if (widget.style.display === 'block') {
    widget.style.display = 'none';
  } else {
    widget.style.display = 'block';
  }
}
