// Aturan Zod yang dipakai ulang di banyak form. Skema khusus satu fitur ditulis di file sendiri
// di folder ini (auth.ts, accounts.ts, collections.ts) dan memakai potongan di bawah.

import { z } from "zod";

/** Teks wajib: spasi di kiri dan kanan dibuang, lalu tidak boleh kosong. */
export function requiredText(message: string) {
  return z.string().trim().min(1, message);
}

/** Email: wajib diisi dulu, baru formatnya dicek (hanya satu pesan error yang tampil). */
export const emailSchema = requiredText("Email wajib diisi.").pipe(z.email("Format email tidak valid."));
