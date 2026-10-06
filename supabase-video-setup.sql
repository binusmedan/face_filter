-- Jalankan di Supabase Dashboard > SQL Editor SETELAH Fog Glass/supabase-setup.sql.
-- Menambah dukungan video (Accessory Filter) ke bucket yang sama, tanpa mengubah aturan foto.

-- 1. Bucket fog-glass: izinkan JPEG + MP4 + WebM, batas 20 MB per file.
--    (Batas ini berlaku untuk semua file di bucket. Jangan jalankan ulang supabase-setup.sql
--     sesudah ini, karena script itu mengembalikan batas ke 5 MB dan JPEG saja.)
update storage.buckets
set file_size_limit = 20971520,
    allowed_mime_types = array['image/jpeg', 'video/mp4', 'video/webm']
where id = 'fog-glass';

-- 2. Izinkan role anon HANYA upload (insert) video ke folder videos/ dengan ekstensi .mp4 / .webm.
--    Sama seperti foto: tidak ada policy select/update/delete, jadi anon tidak bisa list,
--    menimpa, atau menghapus. Akses baca tetap lewat public URL.
drop policy if exists "fog-glass anon upload video" on storage.objects;
create policy "fog-glass anon upload video"
on storage.objects for insert
to anon
with check (
  bucket_id = 'fog-glass'
  and (storage.foldername(name))[1] = 'videos'
  and lower(storage.extension(name)) in ('mp4', 'webm')
);
