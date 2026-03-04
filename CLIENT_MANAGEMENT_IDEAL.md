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
