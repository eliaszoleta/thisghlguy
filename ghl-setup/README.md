# EZ GHL Webinar & Course Automation Setup

## What this builds
| ID | Item |
|----|------|
| [EZ-006] | Webinar Pipeline (5 stages) |
| [EZ-007] | Custom Field — Zoom Join Link |
| [EZ-008] | Custom Field — Webinar Date |
| [EZ-010–025] | All Email Templates (16 emails) |
| [EZ-030–036] | All SMS Templates (7 messages) |
| Tags | ez_webinar-registered, ez_webinar-attended, ez_webinar-no-show, ez_customer, ez_course-member, ez_offer-sent |

## How to run

```bash
cd ghl-setup
npm install
node setup.js
```

## After running

1. Go into GHL and fill in all `[PLACEHOLDERS]` in the email/SMS templates
2. Build the 5 workflows printed in the console (blueprint is shown at the end)
3. Connect Zoom: GHL → Settings → Integrations → Zoom
4. Have your boss connect Stripe: GHL → Settings → Payments → Stripe
5. Create your GHL Membership product and link it in [EZ-005]

## Workflows to build manually (GHL → Automation → Workflows)

| ID | Workflow Name |
|----|--------------|
| [EZ-001] | Webinar Registration |
| [EZ-002] | Webinar Reminder Sequence |
| [EZ-003] | Post-Webinar — Attended |
| [EZ-004] | Post-Webinar — No-Show |
| [EZ-005] | Purchase & Membership Access |
