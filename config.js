// Konfigurasi Supabase untuk upload video 3 detik + QR (Accessory Filter).
// Project + bucket sama dengan Fog Glass / Block Biometrik.
// Wajib jalankan supabase-video-setup.sql dulu supaya bucket menerima video.
// PENTING: pakai anon / publishable key saja. JANGAN pernah taruh service_role / secret key di sini.
window.FILTER_SYNC_CONFIG = {
    SUPABASE_URL: 'https://fxgodohilfqabqkwrkre.supabase.co',
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4Z29kb2hpbGZxYWJxa3dya3JlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczMjYxNDMsImV4cCI6MjA4MjkwMjE0M30.9wgs6w6buzkYVsEVVJnQ6HqM2MDlzWg0eilDqVAwfTE',
    BUCKET: 'fog-glass',
    FOLDER: 'videos',       // policy video hanya mengizinkan folder "videos"
    // QR selalu mengarah ke video.html?v=<path>, lalu video.html mengambil videonya dari Supabase Storage.
    // Kosongkan = otomatis pakai video.html di folder yang sama dengan index.html (kalau sudah di-hosting).
    // Isi manual kalau index.html dijalankan lokal (localhost/file), karena HP tidak bisa membuka localhost.
    // Contoh: 'https://username.github.io/computer-vision/Accesoris%20Filter/video.html'
    VIEWER_URL: ''
};
