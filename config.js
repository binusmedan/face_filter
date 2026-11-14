// Konfigurasi Supabase untuk upload foto + QR (Accessory Filter).
// Project + bucket sama dengan Fog Glass / Block Biometrik.
// Wajib jalankan supabase-photo-setup.sql dulu supaya anon boleh upload foto ke folder FOLDER.
// PENTING: pakai anon / publishable key saja. JANGAN pernah taruh service_role / secret key di sini.
window.FILTER_SYNC_CONFIG = {
    SUPABASE_URL: 'https://fxgodohilfqabqkwrkre.supabase.co',
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4Z29kb2hpbGZxYWJxa3dya3JlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczMjYxNDMsImV4cCI6MjA4MjkwMjE0M30.9wgs6w6buzkYVsEVVJnQ6HqM2MDlzWg0eilDqVAwfTE',
    BUCKET: 'fog-glass',
    FOLDER: 'filter-photos',    // policy foto hanya mengizinkan folder "filter-photos" (lihat supabase-photo-setup.sql)
    // QR selalu mengarah ke photo.html?p=<path>, lalu photo.html mengambil fotonya dari Supabase Storage.
    // Kosongkan = otomatis pakai photo.html di folder yang sama dengan index.html (kalau sudah di-hosting).
    // Isi manual kalau index.html dijalankan lokal (localhost/file), karena HP tidak bisa membuka localhost.
    // Contoh: 'https://username.github.io/computer-vision/Accesoris%20Filter/photo.html'
    VIEWER_URL: ''
};
