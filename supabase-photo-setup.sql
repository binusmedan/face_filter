-- Jalankan di Supabase Dashboard > SQL Editor SETELAH Fog Glass/supabase-setup.sql (atau supabase-video-setup.sql).
-- Menambah upload foto JPEG Accessory Filter ke folder filter-photos/ di bucket yang sama.
-- Bucket fog-glass sudah mengizinkan image/jpeg dari script sebelumnya, jadi aturan bucket tidak diubah.

-- Izinkan role anon HANYA upload (insert) foto .jpg ke folder filter-photos/.
-- Tidak ada policy select/update/delete, jadi anon tidak bisa list, menimpa, atau menghapus.
-- Akses baca tetap lewat public URL.
drop policy if exists "fog-glass anon upload filter photo" on storage.objects;
create policy "fog-glass anon upload filter photo"
on storage.objects for insert
to anon
with check (
  bucket_id = 'fog-glass'
  and (storage.foldername(name))[1] = 'filter-photos'
  and lower(storage.extension(name)) = 'jpg'
);
