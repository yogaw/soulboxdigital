Fitur

BOOKING & SCHEDULE
======================
1️.  CLASS & SCHEDULE SETUP (ADMIN / OPS)
Yang perlu ada:
Daftar kelas (nama, tipe, durasi)
Kapasitas per kelas
Jadwal kelas (hari, jam)
Assigned coach/trainer
Status kelas:
aktif
penuh
dibatalkan
Alokasi tempat:
gym studio (max cap)
yoga studio 
mini gym studio

Kenapa penting: Biar tidak ada “kelas dadakan” atau info beda-beda.

terms & condition per class, ditampilkan
MEMBER VIEW (LIHAT JADWAL)
Yang member bisa lakukan:
Lihat jadwal kelas (mingguan / harian)
Lihat kapasitas tersisa
Lihat coach/ trainer yang mengajar → rajin update trainer pengganti
Lihat status:
available
full
waitlist (kelas auto waitlist, pt custom waitlist: approval mgmt)
BOOKING FLOW (INTI)
Alur minimum:
Member pilih kelas
Sistem cek slot
Booking berhasil / masuk waiting list
Member dapat konfirmasi
konfirmasi kelas yg sudah confirm

Aturan yang harus tertulis:
Booking cut-off time (konfigurasi saja, tidak perlu), selama ada kapasitas
Syarat paket aktif
WAITING LIST
Yang harus jelas:
Urutan waiting list otomatis
Slot kosong → naik otomatis
Untuk PT , waiting list masih kurasi manual
Notifikasi saat dapat slot
Waktu konfirmasi (jika ada)
Konfirmasi ke member (via email atau whatsapp manual)
pembayaran setelah konfirmasi waiting listnya

Kenapa penting: Biar tidak ada drama “katanya aku duluan”.
REMINDER & NOTIFICATION
Minimal Phase 1:
Konfirmasi booking
Reminder H-12 jam
Reminder H-2 jam
Notifikasi perubahan kelas
reminder waiting list
whatsapp manual dari list yang disediakan sistem

Channel:
WhatsApp / Email (pilih satu dulu)
CANCEL & NO-SHOW RULES
Cancel:
Batas waktu cancel (mis. H-8 jam untuk kelas)
Batas waktu cancel (mis. H-6 jam untuk PT)
waiver untuk re-schedule, konfigurasi special
Cancel setelah cut-off → dianggap no-show → kepotong paket dan tidak refund

No-show:
Definisi jelas
Konsekuensi (mis. slot hangus)

COACH/ TRAINER VIEW (BASIC)
Coach bisa lihat:
Jadwal mengajar
Daftar kelas
Perubahan jadwal
CS & ADMIN INTERVENTION
CS boleh melakukan:
Override booking (case khusus) → PT
akan dipakai untuk VIP only atau special Case
CS yang akan operate dengan id nama
ter-log 
Cancel manual (case khusus) → PT


CS tidak perlu melakukan:
Cek slot manual
Update satu-satu
Jelasin aturan berulang

MEMBER & BASIC DATA
=======================
Member & Basic Data
MEMBER PROFILE (CORE)
Data minimum:
Nama
Nomor HP
Email 
Status member (aktif / non-aktif/cuti)
definisi status member non-aktif
dorman, request tidak aktif
Tanggal lahir
Tanggal join
alamat
kontak darurat
MEMBERSHIP / PACKAGE STATUS

Data yang ditampilkan:
Tipe paket (kelas reguler, kelas yoga, paket pt)
tasa refresh paket
Jumlah sesi / akses
Masa berlaku
Status:
aktif
hampir habis
expired
CLASS HISTORY (BASIC)

Yang dicatat:
Kelas yang di-book
Hadir / cancel / no-show
Tanggal & jam

 Dipakai oleh:
CS → handle komplain
Mgmt → lihat pola kasar
NOTES / TAG (OPTIONAL TAPI BERGUNA)

Contoh:
“Prefer pagi”
“Sering telat”
“VIP”
CS & Mgmt ACTION

Apa yang bisa dilakukan ke data member.
CS / Ops bisa:
Update profil
Update status (termasuk pengajuan cuti)
berbayar, tiering berbeda
Tambah note
CS / Ops tidak bisa:
Edit history
Override detail order
 MEMBER VIEW 
Yang member bisa lihat:
Status paket
Sisa sesi / masa berlaku
Riwayat kelas (ringkas), transaksi

COACH & CLASS VISIBILITY
==========================
Coach & Class Visibility
1️. CLASS DEFINITION (BASIC & STABLE)

Nama kelas
Tipe kelas (strength / conditioning / hybrid, dll)
Durasi
Kapasitas
Level (optional, kalau memang dipakai)
Eligibility class bisa paket apa




4️. COACH VIEW (BASIC, HUMAN)
Coach bisa lihat:
Jadwal mengajar
Kelas 
Update perubahan jadwal
📌 Tujuan:
Coach tidak “ketinggalan info”.




2️. CLASS SCHEDULE VISIBILITY
Jadwal kelas harus:
Terlihat jelas (hari & jam)
Terhubung ke:
kapasitas
coach
status kelas

Status kelas:
Scheduled
Full
Cancelled
Rescheduled


3, COACH ASSIGNMENT
Yang harus jelas:
Coach yang mengajar kelas
Jam mengajar coach
Perubahan coach tercatat
day off
cuti

CS & OPS VISIBILITY
CS / Ops bisa lihat:
Kelas hari ini & besok
Kapasitas & booking count
Coach assignment
Status perubahan

Mengurangi:
Salah info ke member
Overbooking
Last-minute panic
6️. COACH VIEW (BASIC, HUMAN)
Coach bisa lihat:
Jadwal mengajar
Kelas yang diampu
Update perubahan jadwal

Tujuan:
Coach tidak “ketinggalan info”.
7️. CLASS CHANGE & EXCEPTION HANDLING
Aturan Phase 1:
Siapa boleh cancel kelas? (internal policy, special case)
Siapa boleh reschedule? (internal policy, special case)
Kapan member diberi notifikasi? (booking, waiting list)

Contoh aturan:
Ops: cancel / reschedule
CS: komunikasi ke member
Sistem: update status & notifikasi


PAYMENT
=============


Payment
1️. PAYMENT OBJECT (APA YANG DIBAYAR)

Yang dicatat:
Jenis pembelian:
Paket kelas (group class, yoga)
Membership/PT (PT sendiri dan PT custom)
Drop-in
Nilai transaksi (nominal)
Tanggal pembelian

📌 Kenapa penting:  Biar tidak ada “ini paket apa ya?” di belakang.


.






2️. PAYMENT STATUS (INTI PHASE 1)
Status minimum:
Paid
Pending
Debt/ outstanding
cek report


3️. LINK PAYMENT ↔ MEMBER & PACKAGE

Sistem harus tahu:
Member A punya paket apa
Status paket aktif / habis
Sisa sesi (kalau session-based)

Booking otomatis terblokir kalau:
Paket expired
Sesi habis

4️. PAYMENT VISIBILITY PER ROLE
👤 Member lihat:
Status paket
Masa berlaku
Sisa sesi (jika ada)
👤 CS / Ops lihat:
Status payment
Riwayat pembelian (ringkas)
👤 Mgmt  lihat:
Jumlah transaksi (kasar)
Active vs expired package

5️. MANUAL UPDATE & OVERRIDE (BOUNDARY)
CS / Ops boleh:
Tandai paid (manual confirmation)
Update status (case khusus)
CS / Ops tidak boleh:
Edit nominal
Ubah history tanpa alasan

➡️ Kalau override:
Harus ada note singkat (“manual confirm by CS”)
6️. REMINDER & EXPIRY ALERT (BASIC)
Minimal Phase 1:
Reminder paket hampir habis
Reminder masa berlaku mau habis
reminder ke CS untuk tahu juga
untuk CS ingetin lagi ke member

❌ Belum perlu:
Auto upsell
Campaign marketing


7️. PAYMENT METHOD (SIMPLE)
Tuliskan secara eksplisit:
Contoh:
Transfer (Rek Asiana)
Virtual Account
QRIS

❌ Phase 1 tidak perlu:
Gateway kompleks
Multi-currency
Auto reconciliation