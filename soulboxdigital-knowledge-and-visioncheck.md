# SoulBox Digital — Knowledge + Visioncheck (Combined)

This file consolidates internal notes that were previously spread across multiple markdown files in this repository, to be reused as context for related projects.

---

## visionheck.md

Vision Check

SOULBOX menurut kamu. . .
Kalau kamu jelasin SOULBOX ke orang lain, SOULBOX itu apa?
A digital wellness platform that connects mind, body, and spirit
Tempat Latihan
Lifestyle
Mbak Andin: 

urban Wellness place.

provide way of living,

punya fasilitas yang lebih upgrade dari tempat lain.

dengan prime location, terkoneksi dengan tempat wellness recovery sendiri sebagai benefit

punya studio yang provide functional training dan welllness training untuk healing

(stretch and release)
Mbak Uthe

Mostly sama dengan mbak Andin plus private


Via

Coach professional dan sport and science graduate (certificated)
Firman

Tempat membentuk badan, olahraga

untuk jiwa dan raga


Apa yang bikin SOULBOX beda dari gym lain?
Hal apa yang bikin SOULBOX beda, walaupun kecil. . . .
Vibes
Coach yang care
Firman

booking harusnya canggih, alat-alat . modern, memenuhi kebutuhan customer
Via

Harga lebih terjangkau, gym lain lebih mahal
Mbak Andin

One stop wellness,
bio hacking place

(semuanya langsung terintegrasi)

antara soulbox dan sisternya saling bikin mengingat untuk usernya masing-masing


Mbak Uthe

lebih menjaga privacy,

bersih,

terkoneksi dengan wellness sendiri (soulbox recharge)
Tas

Tempat bersih, akses mudah

---

## fitur.md

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

---

## pain_point_check.md

Pain Point check

Capek karena. . .
Chat berulang
Info beda-beda
Mbak Uthe:

Mitigasi cancel
konfirmasi PT schedule, 
schedule jadi tabrakan
schedule keskip
maintain VIP client

Mbak Andin:

waiting list PT
sulit untuk announce event, kurang space untuk event
placeholder untuk social event
tidak ada customer engagement
Last minute change
Firman

Nyari data:
payment (narik data dari beberapa tempat)
dealpos (scaterred ke mana mana)
pivot data
struktur data tidak seragam
pembayaran, keuangan

Via
last minut cancel
produk luar 1 sistem dengan sistem soulbox

tasa

banyak saat datang kelas tidak absen
weiver tidak tersupply dengan maksimal karena kita tidak tau mana member yang belum lama dan baru.
banyak member terdaftar 2x di sistem


Tidak nyaman karena. . .
Member marah-marah
CS disalahin
Mbak Uthe

complain bookingan, karena konfirmasi booking skip


cancel dari client mepet,
cancel bisa kapan pun

tidak bisa secara cepat assign waktu PT ke customer baru



Mbak Andin

Koordinasi untuk activation

(sudah mulai utilisasi meta ads)


gym rules yang kurang diperhatikan oleh member
Via
jadwal bentrok/rebutan jadwal
member complain dengan ketidak available trainer pada jam yang mereka mau

---

## road_map.md

Road Map

Menuju SOULBOX baru
Phase - 1 = Rapih
Booking & Schedule
Member Basic Data
Coach & Class Visibility
Online Payment 
Basic Reporting
Booking jelas
Aturan main tegas
Data tidak tercecer
CS & Operation tidak menjadi bottleneck
Phase - 2 = Terukur
Reporting lanjutan
Member behavior
Coach performance
Revenue & Package tracking
Semua aktivitas terbaca
Owner & Manager tahu apa yang terjadi
Pola mulai terlihat dan bisa dibentuk
Phase - 3 = Pintar
Personalisasi Member
Smart scheduling
Member Performance journey
Recharge & Groceries integration
Personalisasi
Antisipasi, bukan reaktif
Upsell yang natural
Phase - 4 = Berdaya
Community & Ecosystem platform
Coach Empowerment
Brand & Partner Activation
Scalable model
“Value” lebih tinggi untuk brand & community
Lebih siap untuk “scale” dan kolaborasi

---

## layoutidea.md

Layout Idea

🎯 PRINSIP DOKUMEN UNTUK OWNER

Sebelum masuk layout, ini rule-nya:

❌ Jangan tampilkan semua sticky / chaos FigJam

✅ Tampilkan hasil keputusan

❌ Jangan teknis

✅ Tunjukkan kenapa ini penting buat bisnis

❌ Jangan terlalu panjang

✅ 1 halaman = 1 ide besar

🧱 STRUKTUR DOKUMEN (RECOMMENDED)
1️⃣ COVER / EXECUTIVE SNAPSHOT (1 halaman)

Tujuan: kasih konteks dalam 30 detik

Isi:

Judul besar

Soulbox Platform – Workshop Summary

Subjudul

From Vision to Phase 1 Execution

Info kecil

Tanggal workshop

Peserta utama (Owner, Ops, CS, Coach rep)

1 paragraf ringkas (WAJIB ADA):

Workshop ini bertujuan menyamakan visi Soulbox ke depan, mengidentifikasi pain point utama operasional hari ini, dan menyepakati fokus Phase 1 platform agar operasional lebih rapi, tenang, dan scalable.

📌 Ini bikin owner langsung “nangkep”.

2️⃣ SHARED VISION & KEY PAIN POINTS (1 halaman)

Tujuan: menunjukkan bahwa keputusan Phase 1 berangkat dari realita

Layout 2 kolom:
🟢 LEFT — SHARED VISION (hasil ice breaking)

Judul:

Soulbox Ke Depan Ingin Dikenal Sebagai:

Bullet pendek (hasil cluster, contoh):

Performance-focused & intentional

Community-driven

Coach & member experience oriented

Premium but human

⚠️ Jangan terlalu banyak (max 4).

🔴 RIGHT — KEY PAIN POINTS (ringkasan)

Judul:

Pain Point Operasional Utama Hari Ini:

Bullet:

Booking & cancel sering tidak konsisten

CS jadi bottleneck informasi

Data tersebar & manual

Jadwal & perubahan kelas rawan miskomunikasi

📌 Ini menjawab: “kenapa perlu platform?”

3️⃣ PHASED PLATFORM ROADMAP (1 halaman)

Tujuan: kasih big picture tanpa bikin takut

Visual sederhana (horizontal):
PHASE 1 – RAPIH
Operasional tenang

PHASE 2 – TERUKUR
Keputusan berbasis data

PHASE 3 – PINTAR
Personalisasi & optimasi

PHASE 4 – EMPOWERED
Ecosystem & scale

Tambahan 1 kalimat per phase (pendek):

Phase 1: Booking jelas, data tidak tercecer

Phase 2: Insight & reporting mulai kebaca

Phase 3: Sistem bantu ambil keputusan

Phase 4: Soulbox jadi platform & ecosystem

📌 Owner lihat: “oh ini perjalanan, bukan langsung gede”

4️⃣ PHASE 1 – AGREED SCOPE (INTI DOKUMEN) (1–1.5 halaman)

Tujuan: ini bagian paling penting buat decision owner

Bagi jadi 4 sub-section (ringkas, bullet only)
🟢 A. Booking & Schedule

Yang disepakati:

Booking & slot real-time

Aturan cancel & waiting list jelas

Reminder otomatis

CS hanya handle exception

🟢 B. Member & Basic Data

Yang disepakati:

Profil member & status paket jelas

Eligibility booking otomatis

Riwayat kelas basic

Satu sumber data bersama

🟢 C. Coach & Class Visibility

Yang disepakati:

Jadwal & kapasitas kelas jelas

Coach assignment transparan

Status perubahan kelas tercatat

Semua pihak lihat info yang sama

🟢 D. Payment & Basic Tracking

Yang disepakati:

Status payment & paket jelas

Booking terhubung ke status paket

Reminder masa berlaku

Bukan accounting system

5️⃣ WHAT’S IN vs WHAT’S OUT (½ halaman)

Tujuan: mencegah scope creep & ekspektasi salah

Layout 2 kolom:

Included in Phase 1

Booking & ops stability

Basic visibility & reporting

Clear rules & boundaries

Not Included (Next Phases)

Advanced analytics

AI / automation

Performance scoring

Complex finance features

📌 Owner biasanya sangat appreciate bagian ini.

6️⃣ NEXT STEP & OWNER DECISION POINT (½ halaman)

Tujuan: arahkan ke aksi, bukan gantung

Isi:

Immediate next steps (proposed):

Final confirmation Phase 1 scope

Translate Phase 1 into solution design & estimation

Alignment on timeline & development approach

Decision needed from Owner:

Approve Phase 1 scope

Confirm priority & pacing

🎨 LAYOUT & STYLE RECOMMENDATION

Clean, banyak white space

Bullet pendek (1 baris)

Jangan pakai screenshot FigJam mentah

Kalau mau visual → pakai icon sederhana

📦 FORMAT YANG PALING PAS

Rekomendasi urutan:

PDF 4–6 halaman (paling aman)

Atau slide 6–8 halaman (kalau owner suka presentasi)

---

## CLIENT_MANAGEMENT_IDEAL.md

# Client Management - Ideal Capabilities

## Overview

This document outlines the complete/ideal capabilities for the Client Management admin tool to support full operational readiness.

---

## 1. CLIENT LIST VIEW

### 1.1 Data Table Columns
| Column | Description | Sortable |
|--------|-------------|----------|
| Checkbox | Select for bulk actions | - |
| Client ID | Auto-generated (e.g., #CLT-0001) | Yes |
| Avatar | Initials or photo | - |
| Name | Full name | Yes |
| Email | Email address | Yes |
| Phone | Phone number | Yes |
| Membership | Tier badge (Premium/Standard/Basic/Trial) | Yes |
| Status | Active/Inactive/Pending/Suspended | Yes |
| Package | Current active package name | Yes |
| Sessions Left | Remaining sessions count | Yes |
| Expiry | Package expiry date (with warning if soon) | Yes |
| Last Visit | Date of last class attended | Yes |
| Join Date | When client joined | Yes |
| Actions | View, Edit, Book, More options | - |

### 1.2 Search & Filters
| Filter | Options |
|--------|---------|
| Search | By name, email, phone, client ID |
| Status | All, Active, Inactive, Pending, Suspended |
| Membership | All, Premium, Standard, Basic, Trial |
| Package | All, Group Class Pack, PT Pack, Combo, None |
| Expiry | All, Expired, Expiring Soon (7 days), Active |
| Last Visit | All, Today, This Week, This Month, 3+ Months Ago |
| Tags | Custom tags (VIP, At Risk, New, etc.) |

### 1.3 Bulk Actions
When clients selected, show action bar:
- **Send Email** - Open email composer with selected clients
- **Send SMS/WhatsApp** - Open message composer
- **Change Status** - Set Active/Inactive/Pending/Suspended
- **Assign Package** - Select package to assign to all selected
- **Add Tags** - Apply tags to selected clients
- **Export Selected** - Download as CSV/Excel
- **Print** - Print client cards or list

### 1.4 Quick Actions (Per Client)
- 👁️ View Details
- ✏️ Edit
- 📅 Book Class
- 📦 Manage Package
- 💬 Send Message
- ⋮ More (Suspend, Delete, View History)

---

## 2. ADD/EDIT CLIENT MODAL

### 2.1 Personal Information
| Field | Type | Required |
|-------|------|----------|
| First Name | Text | Yes |
| Last Name | Text | Yes |
| Email | Email | Yes |
| Phone | Phone | Yes |
| Date of Birth | Date | No |
| Gender | Dropdown | No |
| ID Card/KTP Number | Text | No |
| Profile Photo | Upload | No |

### 2.2 Address Information
| Field | Type | Required |
|-------|------|----------|
| Address Line 1 | Text | No |
| Address Line 2 | Text | No |
| City | Text | No |
| State/Province | Dropdown | No |
| Postal Code | Text | No |
| Country | Dropdown | No |

### 2.3 Emergency Contact
| Field | Type | Required |
|-------|------|----------|
| Emergency Contact Name | Text | **Yes** |
| Emergency Contact Phone | Phone | **Yes** |
| Emergency Contact Relationship | Dropdown | **Yes** |

### 2.4 Membership & Status
| Field | Type | Required |
|-------|------|----------|
| Membership Type | Dropdown (Premium/Standard/Basic/Trial) | Yes |
| Status | Dropdown (Active/Inactive/Pending/Suspended) | Yes |
| Join Date | Date | Yes |
| Referred By | Dropdown (existing client or "Other") | No |

### 2.5 Health Information
| Field | Type | Required |
|-------|------|----------|
| Health Conditions | Textarea | No |
| Injuries | Textarea | No |
| Allergies | Textarea | No |
| Medications | Textarea | No |
| Fitness Goals | Multi-select | No |
| Preferred Class Types | Multi-select | No |
| Preferred Trainers | Multi-select | No |

### 2.6 Waiver & Documents
| Field | Type | Required |
|-------|------|----------|
| Liability Waiver | Checkbox + Date Signed | Yes |
| Health Declaration | Checkbox + Date Signed | Yes |
| Terms & Conditions | Checkbox + Date Signed | Yes |
| Documents | File Upload (multiple) | No |

### 2.7 Internal Notes
| Field | Type | Required |
|-------|------|----------|
| Notes | Textarea | No |
| Tags | Multi-select/Tag input | No |
| Internal Rating | Stars (1-5) | No |

---

## 3. VIEW CLIENT MODAL (Detailed View)

### 3.1 Header Section
- Profile photo + Name
- Client ID
- Membership badge
- Status badge
- Quick action buttons: Edit, Book, Message, Suspend

### 3.2 Tab: Overview
**Summary Cards:**
| Card | Content |
|------|---------|
| Active Package | Package name, sessions left, expiry |
| This Month | Classes attended, PT sessions, total visits |
| Streak | Current attendance streak |
| Next Booking | Upcoming class/session |

**Quick Stats:**
- Total classes attended (all time)
- Total PT sessions
- Member since date
- Last visit date

### 3.3 Tab: Information
Same as Add/Edit modal, but in read-only view with Edit button.

### 3.4 Tab: Packages & Credits
**Active Packages:**
| Package | Sessions | Used | Remaining | Expiry | Status |
|---------|----------|------|-----------|--------|--------|
| Group Class 10-Pack | 10 | 7 | 3 | Mar 15, 2024 | Active |
| PT 4-Pack | 4 | 2 | 2 | Feb 28, 2024 | Expiring Soon |

**Actions:**
- ➕ Assign New Package
- ➕ Add Sessions
- 🔄 Extend Expiry
- 📋 View Usage History

**Package History:**
| Date | Package | Action | Sessions | Expiry | Notes |
|------|---------|--------|----------|--------|-------|
| Jan 15, 2024 | Group Class 10-Pack | Purchased | 10 | Mar 15, 2024 | Promo 20% off |
| Dec 20, 2023 | PT 4-Pack | Purchased | 4 | Feb 28, 2024 | - |

### 3.5 Tab: Bookings
**Filters:** All | Upcoming | Completed | Cancelled | No-show

**Upcoming Bookings:**
| Class | Date & Time | Trainer | Location | Status | Actions |
|-------|-------------|---------|----------|--------|---------|
| HIIT Circuit | Today, 1:00 PM | John | Studio A | Confirmed | Cancel, Reschedule |
| Yoga Flow | Tomorrow, 9:00 AM | Ankie | Studio B | Confirmed | Cancel, Reschedule |

**Booking History (Past 30 Days):**
| Class | Date & Time | Trainer | Status | Credits Used |
|-------|-------------|---------|--------|--------------|
| BODYCAMP | Feb 10, 8:00 AM | Aldi | Completed | 1 |
| Personal Training | Feb 8, 2:00 PM | Delpas | Completed | 1 |

**Actions:**
- ➕ Book Group Class
- ➕ Book PT Session
- 📅 View Full History

### 3.6 Tab: PT Sessions
**For operations to manage Personal Training:**

**Current PT Package:**
- Package: PT 8-Pack
- Sessions Remaining: 6
- Expiry: Apr 30, 2024
- Default Trainer: John

**Upcoming PT Sessions:**
| Date | Time | Trainer | Status | Notes | Actions |
|------|------|---------|--------|-------|---------|
| Feb 15 | 2:00 PM | John | Scheduled | - | Reschedule, Cancel |
| Feb 22 | 2:00 PM | John | Scheduled | - | Reschedule, Cancel |

**Create New PT Session:**
- Select Trainer
- Select Date
- Select Time Slot
- Recurring? (Weekly/Bi-weekly)
- Notes
- Notes

**PT Session History:**
| Date | Time | Trainer | Status | Notes |
|------|------|---------|--------|-------|
| Feb 8 | 2:00 PM | John | Completed | Focused on strength |
| Feb 1 | 2:00 PM | John | Completed | - |
| Jan 25 | 2:00 PM | John | Cancelled | Client sick |

### 3.7 Tab: Billing & Payments
**Payment Methods:**
| Type | Details | Status | Actions |
|------|---------|--------|---------|
| Credit Card | Visa ****4242 | Primary | Edit, Remove |
| GoPay | +62 812-xxx-xxxx | Active | Remove |

**Recent Transactions:**
| Date | Description | Amount | Method | Status |
|------|-------------|--------|--------|--------|
| Feb 1, 2024 | PT 4-Pack | Rp 1,200,000 | Credit Card | Paid |
| Jan 15, 2024 | Group Class 10-Pack | Rp 1,500,000 | GoPay | Paid |

**Actions:**
- 💳 Add Payment Method
- 📋 View All Transactions
- 🧾 Generate Invoice

### 3.8 Tab: Communication
**Communication Log:**
| Date | Type | Summary | By | Actions |
|------|------|---------|-----|---------|
| Feb 10 | Email | Booking confirmation sent | System | View |
| Feb 8 | Call | Discussed package renewal | Admin Jane | View, Edit |
| Feb 5 | Note | Client interested in nutrition coaching | Admin John | Edit, Delete |
| Jan 20 | WhatsApp | Class reminder sent | System | View |

**Add Communication:**
- Type: Call / Email / WhatsApp / In-Person / Note
- Date & Time
- Summary/Notes
- Follow-up Required? (Yes/No + Date)

### 3.9 Tab: Progress
**Attendance Chart:**
- Monthly attendance bar chart
- Filter: 3 months / 6 months / 1 year

**Fitness Metrics:**
| Metric | Current | Previous | Change | Date |
|--------|---------|----------|--------|------|
| Weight | 78 kg | 80 kg | -2 kg | Feb 1 |
| Body Fat | 18% | 20% | -2% | Feb 1 |
| Muscle Mass | 62 kg | 61 kg | +1 kg | Feb 1 |

**Goals:**
| Goal | Target | Progress | Status |
|------|--------|----------|--------|
| Weight Loss | 75 kg by Jun 2024 | 60% | On Track |
| 5K Run | Under 25 min | 40% | In Progress |

**Actions:**
- ➕ Add Metric Entry
- ➕ Add Goal
- 📊 View Full Progress Report

---

## 4. MANAGE PACKAGE MODAL

### 4.1 Assign New Package
| Field | Type |
|-------|------|
| Select Package | Dropdown (from package catalog) |
| Sessions | Auto-filled (editable) |
| Start Date | Date |
| Expiry Date | Date (auto-calculated based on validity) |
| Price | Auto-filled (editable for discounts) |
| Payment Status | Paid / Pending / Free / Complimentary |
| Notes | Textarea |

### 4.2 Modify Existing Package
| Action | Description |
|--------|-------------|
| Add Sessions | Add extra sessions to package |
| Remove Sessions | Deduct sessions (with reason) |
| Extend Expiry | Extend expiry date |
| Transfer Sessions | Move sessions to another package |
| Cancel Package | Cancel with refund option |

### 4.3 Package Usage History
| Date | Class/Session | Trainer | Credits Used | Remaining After |
|------|---------------|---------|--------------|-----------------|
| Feb 10 | HIIT Circuit | John | 1 | 3 |
| Feb 8 | PT Session | Delpas | 1 | 2 |
| Feb 5 | BODYCAMP | Aldi | 1 | 1 |

---

## 5. IMPORT CLIENTS MODAL

### 5.1 Upload Step
- Upload CSV file
- Download template
- Supported formats: CSV, XLSX

### 5.2 Map Columns Step
| CSV Column | Maps To Field |
|------------|---------------|
| Column A | First Name |
| Column B | Last Name |
| Column C | Email |
| ... | ... |

### 5.3 Preview Step
- Show first 10 rows
- Highlight errors (invalid email, missing required fields)
- Total rows to import
- Warnings count

### 5.4 Import Step
- Progress bar
- Success/error count
- Download error report

---

## 6. COMMUNICATION MODALS

### 6.1 Send Email
| Field | Type |
|-------|------|
| To | Auto-filled (selected clients) |
| Subject | Text |
| Template | Dropdown (optional) |
| Body | Rich text editor |
| Attachments | File upload |
| Schedule | Send now / Schedule for later |

### 6.2 Send SMS/WhatsApp
| Field | Type |
|-------|------|
| To | Auto-filled (selected clients) |
| Message | Text (with character count) |
| Template | Dropdown (optional) |
| Schedule | Send now / Schedule for later |

---

## 7. SETTINGS & CONFIGURATION

### 7.1 Client Statuses
- Define custom statuses
- Set default status for new clients
- Configure status workflows

### 7.2 Membership Tiers
- Define tiers (Premium, Standard, Basic, Trial)
- Set tier benefits and pricing
- Configure upgrade/downgrade rules

### 7.3 Tags
- Create custom tags
- Assign colors to tags
- Set tag categories

### 7.4 Communication Templates
- Email templates
- SMS/WhatsApp templates
- Booking confirmations
- Reminders
- Welcome emails

---

## 8. REPORTING (Future)

### 8.1 Client Reports
- New clients per month
- Client retention rate
- Membership distribution
- Package utilization
- Attendance patterns
- At-risk clients (low attendance)

### 8.2 Export Options
- Export to CSV
- Export to Excel
- Export to PDF
- Schedule automated reports

---

## Summary: Implementation Priority

### Phase 1: Critical (Launch Ready)
1. ✅ Client list with enhanced columns
2. ✅ Emergency contact fields
3. ✅ Package/Credit management
4. ✅ PT Session creation
5. ✅ Enhanced search & filters

### Phase 2: High Priority
1. Bulk actions
2. Import clients
3. Communication log
4. Waiver tracking

### Phase 3: Medium Priority
1. Tags & segmentation
2. Payment methods
3. Progress tracking
4. Reporting

---

*This document represents the ideal state. Implementation should be prioritized based on operational needs.*

---

## OPERATIONS_READINESS.md

# Operations Readiness Plan - SoulBox Digital

## Context

Over the past sessions, a comprehensive customer-facing platform has been built including:
- Booking entry point & promotional system
- Group class booking with waitlist
- Personal training rescheduling
- Package purchasing flow
- Customer profile & booking management

**This document outlines what Operations needs to prepare** to support these customer-facing features.

---

## 1. MASTER DATA SETUP (Must Complete Before Launch)

### 1.1 Trainer Database
**Where to manage:** `trainer-management.html`

| Data Required | Details |
|---------------|---------|
| Trainer profiles | Name, email, phone, bio, photo |
| Specialties | HIIT, Yoga, BodyCamp, TRX, Pilates, Boxing, etc. |
| Certifications | Name, issuing org, issue date, expiry date |
| Status | Active / On Leave / Inactive |
| Availability | Weekly schedule, blocked dates |

**Action Items:**
- [ ] Create all 15+ trainer profiles
- [ ] Upload trainer photos
- [ ] Set specialties for each trainer
- [ ] Define weekly availability per trainer
- [ ] Input certification documents

### 1.2 Class Catalog
**Where to manage:** `class-management.html`

| Data Required | Details |
|---------------|---------|
| Class types | BODYCAMP, HIIT, Yoga Flow, TRX, RBT, Pilates, Boxing, Abs & Core |
| Class metadata | Duration, intensity level, description |
| Default capacity | Per class type per studio |
| Pricing | Per class credit cost |

**Action Items:**
- [ ] Define all class types with descriptions
- [ ] Set intensity levels (Beginner/Intermediate/Advanced)
- [ ] Configure default durations
- [ ] Set credit cost per class type

### 1.3 Schedule Configuration
**Where to manage:** `class-management.html`

| Data Required | Details |
|---------------|---------|
| Weekly schedule | Recurring classes Mon-Sun |
| Time slots | 08:00 - 20:00 operating hours |
| Studio assignment | Studio A, Studio B, Gym Floor, Outdoor |
| Trainer assignment | Primary trainer per class |

**Action Items:**
- [ ] Build out weekly recurring schedule
- [ ] Assign trainers to all classes
- [ ] Configure studio capacities
- [ ] Set up class instances for next 4 weeks

### 1.4 Studio/Space Setup
**Where to manage:** `class-management.html` (implied)

| Data Required | Details |
|---------------|---------|
| Studio names | Studio A, Studio B, Main Hall, Outdoor |
| Capacity limits | Max participants per space |
| Equipment | Available equipment per space |
| Operating hours | When each space is available |

**Action Items:**
- [ ] Define all physical spaces
- [ ] Set capacity per space
- [ ] Document equipment available

---

## 2. PRICING & PACKAGES SETUP

### 2.1 Package Catalog
**Where to manage:** `packages.html` (display), needs backend configuration

| Package Type | Examples |
|--------------|----------|
| Group Class Packs | Trial (1), Starter (5), Regular (10), Premium (20) |
| PT Packs | 4-session, 8-session, 12-session |
| Combo Packs | Group + PT combinations |

**Data per package:**
- Name, session count, price (IDR)
- Validity period (days)
- Features list
- Popular/Premium badges
- Package images

**Action Items:**
- [ ] Define all package tiers and pricing
- [ ] Set validity periods
- [ ] Write feature descriptions
- [ ] Upload package images
- [ ] Configure promotional pricing (if any)

### 2.2 Promotional Content
**Where to manage:** `booking-entry.html` (display), needs CMS

| Content Type | Details |
|--------------|---------|
| Promotional banners | "First Class Free", "20% Off PT" |
| Limited offers | Start/end dates, discount amounts |
| Weekend specials | Recurring weekend promotions |

**Action Items:**
- [ ] Create promotional banner images
- [ ] Write promotional copy
- [ ] Set offer start/end dates
- [ ] Configure discount rules

---

## 3. CLIENT DATA MIGRATION

### 3.1 Client Profiles
**Where to manage:** `client-management.html`

| Data Required | Details |
|---------------|---------|
| Personal info | Name, email, phone |
| Membership | Type (Premium/Regular), status, join date |
| Emergency contact | Name, phone, relationship |
| Active packages | Current credits, expiry dates |

**Action Items:**
- [ ] Export existing client data
- [ ] Clean and format data
- [ ] Import client profiles
- [ ] Set up active packages per client
- [ ] Assign membership tiers

### 3.2 Initial PT Sessions
**Context:** Operations creates initial PT sessions; users can only reschedule

| Data Required | Details |
|---------------|---------|
| PT packages | Which clients have PT packages |
| Assigned trainer | Default trainer per client |
| Initial schedule | Pre-booked sessions |
| Session credits | Remaining sessions per client |

**Action Items:**
- [ ] Identify clients with PT packages
- [ ] Assign default trainers
- [ ] Create initial PT session schedule
- [ ] Set session counts and expiry dates

---

## 4. OPERATIONAL PROCESSES TO ESTABLISH

### 4.1 Daily Operations Checklist

| Task | Frequency | Tool |
|------|-----------|------|
| Review today's schedule | Daily | `admin-dashboard.html` |
| Check pending bookings | Daily | `admin-bookings.html` |
| Monitor waitlists | Daily | `admin-bookings.html` |
| Handle cancellations | Daily | `admin-bookings.html` |
| Process new clients | As needed | `client-management.html` |
| Update trainer availability | Weekly | `trainer-management.html` |

### 4.2 Booking Management Rules

| Scenario | Action Required |
|----------|-----------------|
| Class full | Monitor waitlist, consider adding class |
| Waitlist spot opens | Auto-promote or manually assign |
| Client cancels | Process credit refund per policy |
| Trainer no-show | Find substitute, notify clients |
| Class cancelled | Notify all booked clients, refund credits |

### 4.3 Credit/Refund Policies to Define

| Policy | Decision Needed |
|--------|-----------------|
| Cancellation window | How many hours before class? |
| Refund type | Full credit? Partial? No refund? |
| No-show policy | Credit forfeited? Warning system? |
| Late cancellation | Within X hours = no refund? |

---

## 5. MISSING TOOLS TO BUILD (Priority Order)

### 5.1 Critical - Needed for Launch

| Tool | Purpose | Estimated Effort |
|------|---------|------------------|
| **Settings Page** | Business hours, policies, rules config | Medium |
| **Notification System** | Booking confirmations, reminders, cancellations | High |
| **Waitlist Auto-Promotion** | Automatic promotion when spots open | Medium |
| **Credit Management** | Add/deduct/refund credits per client | Medium |

### 5.2 High Priority - Soon After Launch

| Tool | Purpose | Estimated Effort |
|------|---------|------------------|
| **Payment Integration** | Process package purchases | High |
| **Reports Page** | Revenue, attendance, utilization reports | Medium |
| **Bulk Actions** | Mass approve/cancel/notify | Low |
| **Substitute Trainer Workflow** | Assign substitutes, notify clients | Medium |

### 5.3 Medium Priority - Future Enhancement

| Tool | Purpose | Estimated Effort |
|------|---------|------------------|
| Trainer self-service portal | Trainers manage own availability | High |
| Client communication hub | Email/SMS campaigns | High |
| Equipment/inventory tracking | Resource management | Medium |
| Advanced analytics | Predictive insights, trends | High |

---

## 6. INTEGRATIONS REQUIRED

### 6.1 Payment Gateway
- Process package purchases
- Handle refunds
- Support Indonesian payment methods (GoPay, OVO, bank transfer)

### 6.2 Communication
- **Email:** Booking confirmations, reminders, receipts
- **SMS/WhatsApp:** Class reminders, cancellation notices
- **Push notifications:** Mobile app (future)

### 6.3 Calendar Sync
- Export class schedules
- Trainer calendar integration
- Client calendar invites

---

## 7. TRAINING & DOCUMENTATION

### 7.1 Operations Team Training

| Topic | Content |
|-------|---------|
| Admin Dashboard | Navigation, daily tasks, alerts |
| Booking Management | Approve, cancel, waitlist, refund |
| Trainer Management | Add trainers, set availability, certifications |
| Class Management | Create classes, recurring schedules, capacity |
| Client Management | Add clients, manage packages, view history |
| Troubleshooting | Common issues, escalation paths |

### 7.2 Documentation to Create

| Document | Purpose |
|----------|---------|
| Operations Manual | Step-by-step daily procedures |
| Policy Reference | Cancellation, refund, waitlist policies |
| FAQ for Operations | Common scenarios and resolutions |
| Escalation Guide | When/how to escalate issues |

---

## 8. LAUNCH CHECKLIST

### Pre-Launch (Week Before)
- [ ] All trainers profiled and scheduled
- [ ] Weekly class schedule complete (4 weeks out)
- [ ] Packages configured with correct pricing
- [ ] Client data migrated with active packages
- [ ] Initial PT sessions created for PT clients
- [ ] Promotional content uploaded
- [ ] Operations team trained
- [ ] Cancellation/refund policies finalized

### Launch Day
- [ ] Final schedule verification
- [ ] Monitor booking flow end-to-end
- [ ] Stand by for customer support
- [ ] Track any issues in real-time

### Post-Launch (First Week)
- [ ] Daily schedule reviews
- [ ] Monitor booking patterns
- [ ] Collect customer feedback
- [ ] Address any operational gaps
- [ ] Document lessons learned

---

## 9. VERIFICATION

To verify operational readiness:

1. **Trainer Data:** Open `trainer-management.html` → Verify all trainers visible with correct details
2. **Class Schedule:** Open `class-management.html` → Verify weekly schedule populated
3. **Client Data:** Open `client-management.html` → Verify clients imported with packages
4. **Booking Flow:** Open `group-class.html` → Test booking a class end-to-end
5. **PT Reschedule:** Open `personal-training.html` → Verify PT sessions visible and reschedulable
6. **Package Purchase:** Open `packages.html` → Verify packages display correctly

---

## 10. DATA MODELS REFERENCE

### 10.1 Booking Data Model
```javascript
{
  id: 'BK-2024-001',
  member: { name, email, phone, avatar },
  class: { name, type, subtext },
  dateTime: '2024-11-27T07:00:00',
  trainer: 'Aldi',
  status: 'confirmed', // confirmed|pending|cancelled|waitlist
  payment: 'Paid',      // Paid|Pending|Refunded
  spots: 1,
  totalPrice: 150000,
  bookingDate: '2024-11-26T14:30:00'
}
```

### 10.2 Trainer Data Model
```javascript
{
  id: 'john-smith',
  name: 'Muhammad Arif (John)',
  title: 'Senior Fitness Trainer',
  avatar: 'path/to/image.jpg',
  status: 'active', // active|on-leave|inactive
  specialties: ['HIIT', 'Body Camp', 'Strength'],
  metrics: { classesPerMonth: 24, rating: 4.9, attendance: 98 },
  certifications: [],
  schedule: []
}
```

### 10.3 Client Data Model
```javascript
{
  id: 'client-001',
  name: 'Client Name',
  email: 'client@email.com',
  phone: '+62 xxx-xxxx-xxxx',
  status: 'active',
  membership: 'premium',
  membershipStatus: 'active',
  avatar: 'CN',
  joinDate: '2024-01-01',
  bookings: [],
  packageBalance: 5,
  totalSpent: 1500000
}
```

### 10.4 Class/Session Data Model
```javascript
{
  id: 'class-001',
  name: 'Yoga Flow',
  type: 'yoga',
  subType: 'personal', // personal|group
  time: '09:00 - 10:30',
  day: 'Monday',
  trainer: 'John',
  capacity: { current: 12, max: 15 },
  space: 'Studio A',
  price: 150000,
  status: 'scheduled'
}
```

### 10.5 Package Data Model
```javascript
{
  id: 'package-001',
  name: '10 Session Pack',
  type: 'group', // group|personal
  sessions: 10,
  price: 1500000,
  validity: 90, // days
  features: ['Access to all group classes', 'Free locker access'],
  popular: true
}
```

### 10.6 User Profile Data Model
```javascript
{
  id: 'user-001',
  name: 'Andin',
  email: 'andin@email.com',
  phone: '+62 xxx-xxxx-xxxx',
  avatar: 'path/to/image',
  joinDate: '2023-06-15',
  membershipType: 'Premium',
  memberSince: 'June 2023',
  totalClasses: 156,
  currentStreak: 5,
  goals: ['Strength', 'HYROX Race', 'Endurance'],
  preferences: {
    preferredTrainers: ['John', 'Ankie'],
    preferredClasses: ['HIIT', 'Bodycamp']
  }
}
```

---

## 11. CUSTOMER-FACING PAGES REFERENCE

| Page | File | Purpose |
|------|------|---------|
| Booking Entry | `booking-entry.html` | Main entry point, promos |
| Group Classes | `group-class.html` | Browse & book group classes |
| Personal Training | `personal-training.html` | View & reschedule PT sessions |
| My Bookings | `my-bookings.html` | View/cancel bookings |
| My Profile | `my-profile.html` | Profile & package overview |
| Packages | `packages.html` | Browse & purchase packages |

---

## 12. ADMIN/OPERATIONS PAGES REFERENCE

| Page | File | Purpose |
|------|------|---------|
| Admin Dashboard | `admin-dashboard.html` | Overview, stats, today's schedule |
| Booking Management | `admin-bookings.html` | Manage all bookings |
| Trainer Management | `trainer-management.html` | Add/edit trainers |
| Class Management | `class-management.html` | Schedule & manage classes |
| Client Management | `client-management.html` | Manage client profiles |

---

## Summary

**Total Action Items:** 35+ tasks across 12 categories

**Critical Path for Launch:**
1. Master data setup (trainers, classes, schedule)
2. Pricing & packages configuration
3. Client data migration
4. Policy definitions
5. Operations team training

**Estimated Operations Prep Time:** 1-2 weeks depending on data volume and team size
