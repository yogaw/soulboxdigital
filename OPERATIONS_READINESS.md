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
