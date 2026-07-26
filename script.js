document.addEventListener('DOMContentLoaded', () => {
  // 1. Fetch & Render Data Anggota dari data.json
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      renderPeopleCarousel(data);
      renderWishWall(data);
    })
    .catch(error => console.error('Gagal memuat data.json:', error));

  // 2. Element Selectors
  const modal = document.getElementById('profile-modal');
  const modalBody = document.getElementById('modal-body-content');
  const closeModalBtn = document.getElementById('close-modal');

  // 3. Render Carousel Profil (33 Anggota)
  function renderPeopleCarousel(members) {
    const carousel = document.getElementById('people-carousel');
    if (!carousel) return;

    carousel.innerHTML = '';
    members.forEach(member => {
      const card = document.createElement('div');
      card.className = 'glass-card member-card';
      card.innerHTML = `
        <div class="profile-ring">
          <img src="${member.photo}" alt="${member.name}" loading="lazy" onError="this.src='https://via.placeholder.com/150?text=${member.name}'">
        </div>
        <h3 class="member-name">${member.name}</h3>
        <p class="member-role">${member.role}</p>
      `;

      // Event Klik Profil -> Buka Modal Pop-Up
      card.addEventListener('click', () => openProfileModal(member));
      carousel.appendChild(card);
    });
  }

  // 4. Buka & Tampilkan Pop-Up Modal Profil
  function openProfileModal(member) {
    if (!modal || !modalBody) return;

    modalBody.innerHTML = `
      <div class="modal-header">
        <div class="modal-avatar">
          <img src="${member.photo}" alt="${member.name}">
        </div>
        <h2>${member.name}</h2>
        <span class="badge">${member.role}</span>
      </div>
      <div class="modal-details">
        <div class="detail-item"><strong>Cita-cita / Impian:</strong> ${member.dream || '—'}</div>
        <div class="detail-item"><strong>Tentang Saya:</strong> ${member.about || '—'}</div>
        <div class="detail-item"><strong>Makanan Favorit:</strong> ${member.food || '—'}</div>
        <div class="detail-item"><strong>Lagu Favorit:</strong> ${member.song || '—'}</div>
        <div class="detail-item"><strong>Kutipan (Quote):</strong> ${member.quote || '—'}</div>
        <div class="detail-item"><strong>Momen Paling Berkesan:</strong> ${member.memorable || '—'}</div>
        <div class="detail-item"><strong>Pesan untuk Diri Sendiri di Masa Depan:</strong> ${member.futureLetter || '—'}</div>
        <div class="detail-item highlight"><strong>Harapan untuk Kelas Madrid:</strong> ${member.hope || '—'}</div>
      </div>
    `;

    modal.classList.add('active');
  }

  // Tutup Modal saat Tombol 'X' atau Luar Modal Diklik
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => modal.classList.remove('active'));
  }
  window.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  // 5. Render Wish Wall (Harapan Anggota)
  function renderWishWall(members) {
    const wishWall = document.getElementById('wish-wall');
    if (!wishWall) return;

    wishWall.innerHTML = '';
    members.forEach(member => {
      if (member.hope && member.hope !== '—') {
        const wishCard = document.createElement('div');
        wishCard.className = 'glass-card wish-card';
        wishCard.innerHTML = `
          <p class="wish-text">"${member.hope}"</p>
          <span class="wish-author">— ${member.name}</span>
        `;
        wishWall.appendChild(wishCard);
      }
    });
  }

  // 6. Memory Counter Animasi
  const counterNumbers = document.querySelectorAll('.counter-number');
  let animated = false;

  window.addEventListener('scroll', () => {
    const counterSection = document.getElementById('counter');
    if (!counterSection || animated) return;

    const sectionPos = counterSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos) {
      counterNumbers.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const speed = target / 30; // Kecepatan animasi

        const updateCount = () => {
          count += speed;
          if (count < target) {
            counter.innerText = Math.ceil(count);
            setTimeout(updateCount, 40);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
      });
      animated = true;
    }
  });

  // 7. Floating Music Player (Putar Instrumental Intro)
  const musicBtn = document.getElementById('music-toggle-btn');
  const bgMusic = document.getElementById('bg-music');
  const playIcon = document.getElementById('play-icon');
  const pauseIcon = document.getElementById('pause-icon');

  if (musicBtn && bgMusic) {
    musicBtn.addEventListener('click', () => {
      if (bgMusic.paused) {
        bgMusic.play().then(() => {
          musicBtn.classList.add('playing');
          playIcon.style.display = 'none';
          pauseIcon.style.display = 'block';
        }).catch(err => console.log("Gagal memutar audio:", err));
      } else {
        bgMusic.pause();
        musicBtn.classList.remove('playing');
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
      }
    });
  }
});
