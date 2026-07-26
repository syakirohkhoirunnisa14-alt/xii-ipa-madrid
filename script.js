document.addEventListener('DOMContentLoaded', () => {
  // Fetch Data Anggota
  fetch('data.json')
    .then(res => res.json())
    .then(data => {
      renderCarousel(data);
      renderWishes(data);
    })
    .catch(err => console.error('Error fetching data.json:', err));

  const modal = document.getElementById('profile-modal');
  const modalBody = document.getElementById('modal-body-content');
  const closeModalBtn = document.getElementById('close-modal');

  // Render Carousel Anggota
  function renderCarousel(members) {
    const carousel = document.getElementById('people-carousel');
    if (!carousel) return;
    carousel.innerHTML = '';

    members.forEach(member => {
      const card = document.createElement('div');
      card.className = 'glass-card member-card';
      
      const fallbackImg = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=FFD8C8&color=2C2A29`;

      card.innerHTML = `
        <div class="profile-ring">
          <img src="${member.photo}" alt="${member.name}" onError="this.src='${fallbackImg}'">
        </div>
        <h3 class="member-name">${member.nickname || member.name}</h3>
        <p class="member-role">${member.role}</p>
      `;
      card.addEventListener('click', () => openModal(member));
      carousel.appendChild(card);
    });
  }

  // Buka Modal Pop-Up Detail
  function openModal(m) {
    const fallbackImg = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=FFD8C8&color=2C2A29`;
    
    let detailHTML = `
      <div style="text-align: center; margin-bottom: 20px;">
        <div class="modal-avatar">
          <img src="${m.photo}" alt="${m.name}" onError="this.src='${fallbackImg}'">
        </div>
        <h2>${m.name} ${m.nickname ? `(${m.nickname})` : ''}</h2>
        <span style="font-size: 0.85rem; color: #6B6560;">${m.role}</span>
      </div>
    `;

    // Jika Wali Kelas
    if (m.role.includes("Wali Kelas")) {
      detailHTML += `
        <div class="detail-item"><strong>Tahun Ajaran:</strong> ${m.years || '—'}</div>
        <div class="detail-item"><strong>Kesan Tentang Madrid:</strong> ${m.kesan || '—'}</div>
        <div class="detail-item"><strong>Momen Berkesan:</strong> ${m.momen || '—'}</div>
        <div class="detail-item"><strong>Pesan & Nasihat:</strong> ${m.pesan || '—'}</div>
        <div class="detail-item"><strong>Kutipan Penutup:</strong> "${m.quote || '—'}"</div>
        <div class="detail-item highlight"><strong>Harapan Masa Depan:</strong> ${m.harapan || '—'}</div>
      `;
    } else {
      // Jika Siswa
      detailHTML += `
        <div class="detail-item"><strong>TTL:</strong> ${m.ttl || '—'}</div>
        <div class="detail-item"><strong>Impian / Cita-cita:</strong> ${m.dream || '—'}</div>
        <div class="detail-item"><strong>Karakter Diri:</strong> ${m.traits ? m.traits.join(', ') : '—'}</div>
        <div class="detail-item"><strong>Hobi:</strong> ${m.hobi || '—'}</div>
        <div class="detail-item"><strong>Makanan Favorit:</strong> ${m.food || '—'}</div>
        <div class="detail-item"><strong>Lagu Favorit:</strong> ${m.song || '—'}</div>
        <div class="detail-item"><strong>Kutipan Favorit:</strong> "${m.quote || '—'}"</div>
        <hr style="margin: 15px 0; border: none; border-top: 1px dashed #ccc;">
        <div class="detail-item"><strong>Kesan di Madrid:</strong> ${m.kesan || '—'}</div>
        <div class="detail-item"><strong>Momen Tak Terlupakan:</strong> ${m.momen || '—'}</div>
        <div class="detail-item"><strong>Pesan untuk Teman:</strong> ${m.pesan || '—'}</div>
        <div class="detail-item"><strong>Surat Diri Masa Depan:</strong> ${m.futureLetter || '—'}</div>
        <div class="detail-item highlight"><strong>Harapan untuk Madrid:</strong> ${m.harapan || '—'}</div>
      `;
    }

    modalBody.innerHTML = detailHTML;
    modal.classList.add('active');
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => modal.classList.remove('active'));
  }
  window.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  // Render Wish Wall
  function renderWishes(members) {
    const wishWall = document.getElementById('wish-wall');
    if (!wishWall) return;
    wishWall.innerHTML = '';

    members.forEach(m => {
      if (m.harapan && m.harapan !== 'Belum diisi') {
        const card = document.createElement('div');
        card.className = 'glass-card wish-card';
        card.innerHTML = `
          <p class="wish-text">"${m.harapan}"</p>
          <span class="wish-author">— ${m.nickname || m.name}</span>
        `;
        wishWall.appendChild(card);
      }
    });
  }

  // Counter Animasi
  const counters = document.querySelectorAll('.counter-number');
  let animated = false;

  window.addEventListener('scroll', () => {
    const counterSec = document.getElementById('counter');
    if (!counterSec || animated) return;

    if (counterSec.getBoundingClientRect().top < window.innerHeight / 1.2) {
      counters.forEach(c => {
        const target = +c.getAttribute('data-target');
        let count = 0;
        const inc = target / 25;
        const update = () => {
          count += inc;
          if (count < target) {
            c.innerText = Math.ceil(count);
            setTimeout(update, 40);
          } else {
            c.innerText = target;
          }
        };
        update();
      });
      animated = true;
    }
  });

  // Music Player Toggle
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
        }).catch(err => console.log(err));
      } else {
        bgMusic.pause();
        musicBtn.classList.remove('playing');
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
      }
    });
  }
});
