// Database Utama Yearbook - Painted Memories
const yearbookData = {
  // 1. Data 33 Anggota (2 Wali Kelas + 31 Siswa)
  members: [
    { name: "Zah Eed", role: "Wali Kelas X Sofia & XI Latvia", driveUrl: "https://drive.google.com/file/d/1N3IU7XweiOMZdMOdUb5sXIEG5hwPPrPx/view?usp=drive_link", quote: "Teruslah bertumbuh dan mewarnai dunia dengan kebaikan.", hope: "Semoga kalian menjadi insan yang sukses dan tak pernah lupa masa-masa indah ini." },
    { name: "Zah Iput", role: "Wali Kelas XII Madrid", driveUrl: "https://drive.google.com/file/d/1y7VytDPBSTpzg5Mk6EWFKZ9G_WjS2A4E/view?usp=drive_link", quote: "Akhir dari sekolah adalah awal dari petualangan yang sesungguhnya.", hope: "Semoga Kelas Madrid lulus dengan hasil terbaik dan meraih semua cita-citanya!" },
    { name: "Ipeh", role: "Siswa", driveUrl: "https://drive.google.com/file/d/19Y9lBacQ6RtmZCthTwgE5CfilE4OqWuX/view?usp=drive_link", quote: "Setiap kenangan adalah warna di kanvas kita.", hope: "Semoga Madrid tetap solid dan sukses di jalan masing-masing!" },
    { name: "ATM", role: "Siswa", driveUrl: "https://drive.google.com/file/d/1h54Cp1mvpoxSOegRFVaxihnNq9GoXNAa/view?usp=drive_link", quote: "Proses tak pernah mengkhianati hasil.", hope: "Semoga kita semua bisa kumpul lagi saat sudah sukses nanti." },
    { name: "Icaza", role: "Siswa", driveUrl: "https://drive.google.com/file/d/1hokFI5q9yLpOFJ5Z5R0eg5p5Trp3bpLa/view?usp=drive_link", quote: "Keceriaan masa SMA takkan tergantikan.", hope: "Semoga persahabatan kita melintasi waktu." },
    { name: "Malik", role: "Siswa", driveUrl: "https://drive.google.com/file/d/1Ja-7JHbS94bntby-I9vG32rnWasQYyuV/view?usp=drive_link", quote: "Nikmati setiap detik sebelum menjadi kenangan.", hope: "Semoga makin kompak dan sukses menggapai mimpi." },
    { name: "Amal", role: "Siswa", driveUrl: "https://drive.google.com/file/d/1vhAx1X45-5xzKv12wVjfkwBnNihEOEwj/view?usp=drive_link", quote: "Painted Memories akan selalu di hati.", hope: "Semoga Madrid angkatan terbaik selamanya!" },
    { name: "Qomah", role: "Siswa", driveUrl: "https://drive.google.com/file/d/1vJJWSJ5CZFMwvCSKCS5DS58p37WGUXcT/view?usp=drive_link", quote: "Jangan takut bermimpi tinggi.", hope: "Semoga kita semua masuk PTN/karir impian." },
    { name: "Amoy", role: "Siswa", driveUrl: "https://drive.google.com/file/d/1FjS8WRWJo5lDyssn2ZQiV1nrDRZ4_PIw/view?usp=drive_link", quote: "Tertawa bersama kalian adalah obat terbaik.", hope: "Semoga ga ada yang lupa sama kenangan di Madrid." },
    { name: "Celis", role: "Siswa", driveUrl: "https://drive.google.com/file/d/1gPjtqQXDqTCaJkHMTOyD7H0_i4HbRZlt/view?usp=drive_link", quote: "3 tahun singkat tapi sangat bermakna.", hope: "Semoga tali silaturahmi kita tidak terputus." },
    { name: "Kolok", role: "Siswa", driveUrl: "https://drive.google.com/file/d/1B9xR8HaQNds3PpiFWMsummJMe2D8J2a0/view?usp=drive_link", quote: "Pantang menyerah sebelum berusaha.", hope: "Semoga sukses di perguruan tinggi dan dunia kerja." },
    { name: "Diana", role: "Siswa", driveUrl: "https://drive.google.com/file/d/1hMRaZEDEzoCbGlGoPcLgpTvt5_6o7PP2/view?usp=drive_link", quote: "Simpan kenangan ini rapat-rapat.", hope: "Semoga kita selalu diberi kemudahan ke depannya." },
    { name: "Ara", role: "Siswa", driveUrl: "https://drive.google.com/file/d/1OkNfwvT46P55Rf58kCqD5roAmT9N5jeR/view?usp=drive_link", quote: "Belajar dari kemarin, hidup untuk hari ini.", hope: "Semoga Madrid terus menebar kebaikan." },
    { name: "Aza", role: "Siswa", driveUrl: "https://drive.google.com/file/d/1rwrD_3riFMpoulBjFb9hpkahE2yRZBYt/view?usp=drive_link", quote: "Bersyukur atas setiap tawa dan cerita.", hope: "Semoga impian kita semua terwujud nyata." },
    { name: "Haura", role: "Siswa", driveUrl: "https://drive.google.com/file/d/1LBiENtKgSzhAX1jedlQQT90-Y050YYpp/view?usp=drive_link", quote: "Sofia, Latvia, Madrid, sampai selamanya.", hope: "Semoga kenangan ini selalu jadi penguat saat lelah." },
    { name: "BJ", role: "Siswa", driveUrl: "https://drive.google.com/file/d/1bAL_hfN4N0prjgeQy6QQbhpVKKhLyfh2/view?usp=drive_link", quote: "Jadilah versi terbaik dari dirimu sendiri.", hope: "Semoga kita jadi orang-orang hebat kelak." },
    { name: "Nadhira", role: "Siswa", driveUrl: "https://drive.google.com/file/d/1xlLFeT1oH0aR2EzKiscpAD2fguvrV7Ok/view?usp=drive_link", quote: "Setiap momen bersama kalian sangat berharga.", hope: "Semoga selalu bahagia dimanapun berada." },
    { name: "Picah", role: "Siswa", driveUrl: "https://drive.google.com/file/d/1bzrwl-k4YVLBQo5mUt8ijvmYxfXhH6ch/view?usp=drive_link", quote: "Terima kasih atas 3 tahun yang luar biasa.", hope: "Semoga sukses berjemaah untuk Madrid!" },
    { name: "Nasywa", role: "Siswa", driveUrl: "https://drive.google.com/file/d/1pGUSwqy-Obs6jPe8E_Oju_mIYu9mur3U/view?usp=drive_link", quote: "Kenangan manis akan selalu hidup.", hope: "Semoga persahabatan ini tetap hangat selamanya." },
    { name: "k’Nau", role: "Siswa", driveUrl: "https://drive.google.com/file/d/1y8XH7bmw62GllWo2fR5Th5KUysxyll-6/view?usp=drive_link", quote: "Terus melangkah walau jalan terjal.", hope: "Semoga kita bertemu lagi di puncak kesuksesan." },
    { name: "Nazu", role: "Siswa", driveUrl: "https://drive.google.com/file/d/1C81Aj2TNx9FY-dFEHIf_949N02mRg7Ty/view?usp=drive_link", quote: "Satu langkah kecil menuju masa depan besar.", hope: "Semoga semua harapan anak Madrid dikabulkan." },
    { name: "Nila", role: "Siswa", driveUrl: "https://drive.google.com/file/d/1HZ5W-rtpxmBCDrYixoiEjQPyulX0ykHf/view?usp=drive_link", quote: "Lukisan kenangan ini takkan luntur.", hope: "Semoga masa depan kita secerah warna-warna ini." },
    { name: "Fifi", role: "Siswa", driveUrl: "https://drive.google.com/file/d/1SIO8UHAzFItzpnWhKhXgRzsW4G7FGET5/view?usp=drive_link", quote: "Semua perjuangan ini pasti berbuah manis.", hope: "Semoga tidak ada kata saling melupakan." },
    { name: "Ajonk", role: "Siswa", driveUrl: "https://drive.google.com/file/d/1lHTqPpYE3h-j1QhbGktRD5NpLwlR2HbI/view?usp=drive_link", quote: "Nikmati perjalanan hidup ini.", hope: "Semoga kelas Madrid selalu diberkahi." },
    { name: "Nuna", role: "Siswa", driveUrl: "https://drive.google.com/file/d/1JZLYbLAUZSTqWOrtsJiQUMlRfYNC3V2Z/view?usp=drive_link", quote: "Keceriaan kelas adalah momen favoritku.", hope: "Semoga karier & pendidikan kita lancar mulus." },
    { name: "Reva", role: "Siswa", driveUrl: "https://drive.google.com/file/d/1Qxr_AgKvuV1rujYDPOGzGTnikN4lqqUx/view?usp=drive_link", quote: "Jadikan kenangan ini kompas masa depan.", hope: "Semoga Madrid melahirkan pahlawan-pahlawan masa depan." },
    { name: "Ipak", role: "Siswa", driveUrl: "https://drive.google.com/file/d/1yo1CZhIo_VCQCiOcvXq7xHUQbhpC8Eqb/view?usp=drive_link", quote: "Bersama kita ukir sejarah.", hope: "Semoga Madrid jadi angkatan yang selalu dikenang baik." },
    { name: "Bita", role: "Siswa", driveUrl: "https://drive.google.com/file/d/1Ix-92lpt2hwnSmDUP5QSzGBcrSJUOTEw/view?usp=drive_link", quote: "Terima kasih telah mewarnai hariku.", hope: "Semoga persaudaraan kita abadi." },
    { name: "Isyah", role: "Siswa", driveUrl: "https://drive.google.com/file/d/1kbNjUiEexj1FYeDDVCKiitWqK2buIvhC/view?usp=drive_link", quote: "Setiap akhir adalah awal yang baru.", hope: "Semoga semangat Madrid tak pernah padam." },
    { name: "Syakiroh", role: "Siswa", driveUrl: "https://drive.google.com/file/d/1eVPsMZzPtulOXBZMvHlRWFazdhtrlkSa/view?usp=drive_link", quote: "Melangkah mantap menggapai asa.", hope: "Semoga kita semua menjadi orang yang berguna." },
    { name: "Kiaa", role: "Siswa", driveUrl: "https://drive.google.com/file/d/1VYsDAHgC5xH3JLHgcDEn9GW1wzbvv0bQ/view?usp=drive_link", quote: "Cerita 3 tahun yang penuh keajaiban.", hope: "Semoga kita bisa reuni penuh dengan senyuman." },
    { name: "Berbi", role: "Siswa", driveUrl: "https://drive.google.com/file/d/13-uRhJJJLWXLBhBIZ59Fkv_wQIzpvH3J/view?usp=drive_link", quote: "Selalu tersenyum menghadapi tantangan.", hope: "Semoga keberhasilan menyertai setiap langkah kita." },
    { name: "Zizi", role: "Siswa", driveUrl: "https://drive.google.com/file/d/1SdeW0aKxjBJa20bwFqg5Q_GTVM9qbEeI/view?usp=drive_link", quote: "Painted Memories, kisah terbaik sepanjang masa.", hope: "Semoga Madrid berjaya di masa depan!" }
  ],

  // 2. Timeline Perjalanan 3 Tahun
  timeline: [
    { year: "2023 - 2024", phase: "X Sofia", title: "Awal Mula Perjalanan", desc: "Awal terbentuknya persahabatan di bawah bimbingan Zah Eed. Penuh keceriaan dan adaptasi." },
    { year: "2024 - 2025", phase: "XI Latvia", title: "Merajut Kebersamaan", desc: "Makin solid di tahun kedua bersama Zah Eed. Banyak momen seru dan pengalaman tak terlupakan." },
    { year: "2025 - 2026", phase: "XII Madrid", title: "Puncak Perjuangan", desc: "Tahun terakhir bersama Zah Iput. Berjuang bersama meraih masa depan dan mengukir Painted Memories." }
  ],

  // 3. Galeri Foto per Jenjang
  galleries: {
    sofia: [
      { title: "Momen Awal X Sofia", img: "https://picsum.photos/400/300?random=1" },
      { title: "Keceriaan Kelas Sofia", img: "https://picsum.photos/400/300?random=2" },
      { title: "Aktivitas Bersama Zah Eed", img: "https://picsum.photos/400/300?random=3" },
      { title: "Kebersamaan Sofia", img: "https://picsum.photos/400/300?random=4" }
    ],
    latvia: [
      { title: "Keseruan XI Latvia", img: "https://picsum.photos/400/300?random=5" },
      { title: "Acara Bersama Latvia", img: "https://picsum.photos/400/300?random=6" },
      { title: "Momen Unik Kelas Latvia", img: "https://picsum.photos/400/300?random=7" },
      { title: "Keluarga XI Latvia", img: "https://picsum.photos/400/300?random=8" }
    ],
    madrid: [
      { title: "Foto Bersama XII Madrid", img: "https://picsum.photos/400/300?random=9" },
      { title: "Persiapan Kelulusan", img: "https://picsum.photos/400/300?random=10" },
      { title: "Momen Terakhir Bersama Zah Iput", img: "https://picsum.photos/400/300?random=11" },
      { title: "Painted Memories Madrid", img: "https://picsum.photos/400/300?random=12" }
    ]
  },

  // 4. Video Kompilasi Kenangan (YouTube Embed IDs)
  videos: [
    { title: "Kompilasi Kenangan 1", youtubeId: "o3f4lJ96aM0" },
    { title: "Kompilasi Kenangan 2", youtubeId: "4vaRWogBwVo" },
    { title: "Kompilasi Kenangan 3", youtubeId: "lYPWcfJohT0" }
  ]
};
