/**
 * ============================================================
 *  EZ GoHighLevel Webinar & Course Automation Setup Script
 *  Naming convention: [EZ-XXX] for everything created here
 * ============================================================
 *
 * What this script creates:
 *   [EZ-007] Custom Field — Zoom Join Link
 *   [EZ-008] Custom Field — Webinar Date
 *   [EZ-006] Pipeline    — Webinar Pipeline (5 stages)
 *   Tags                 — ez_webinar-registered, ez_webinar-attended,
 *                          ez_webinar-no-show, ez_customer, ez_course-member
 *   Email Templates      — All ~13 emails for the full funnel
 *   SMS Templates        — All ~7 SMS messages
 *
 * NOTE: GHL's public API does not support full Workflow creation.
 *       After running this script, follow the printed Workflow
 *       Blueprint at the end to build the 5 workflows in GHL UI.
 *
 * Usage:
 *   npm install
 *   node setup.js
 * ============================================================
 */

const axios = require('axios');

// ─── CONFIG ─────────────────────────────────────────────────
const API_KEY     = 'pit-6f9e9846-9751-4e26-9d47-3bb2fefbbaea';
const LOCATION_ID = '6VN8ayQciKYxqc2gxHI1';
const BASE_URL    = 'https://services.leadconnectorhq.com';
// ─────────────────────────────────────────────────────────────

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    Version: '2021-07-28',
    'Content-Type': 'application/json',
  },
  timeout: 15000,
});

// ─── HELPERS ─────────────────────────────────────────────────
const log   = (msg)       => console.log(`  ✅  ${msg}`);
const warn  = (msg)       => console.warn(`  ⚠️   ${msg}`);
const error = (msg, err)  => console.error(`  ❌  ${msg}`, err?.response?.data || err?.message || err);
const divider = (title)   => console.log(`\n${'─'.repeat(60)}\n  ${title}\n${'─'.repeat(60)}`);
const sleep = (ms)        => new Promise(r => setTimeout(r, ms));

async function safePost(endpoint, body, label) {
  try {
    const res = await api.post(endpoint, body);
    log(`Created: ${label}`);
    return res.data;
  } catch (err) {
    const status = err?.response?.status;
    const msg    = err?.response?.data?.message || err?.message;
    if (status === 422 || (msg && msg.toLowerCase().includes('already exist'))) {
      warn(`Already exists (skipped): ${label}`);
      return null;
    }
    error(`Failed: ${label}`, err);
    return null;
  }
}

// ─── 1. CUSTOM FIELDS ────────────────────────────────────────
async function createCustomFields() {
  divider('STEP 1 — Custom Fields');

  const fields = [
    {
      name: '[EZ-007] Zoom Join Link',
      dataType: 'TEXT',
      model: 'contact',
    },
    {
      name: '[EZ-008] Webinar Date',
      dataType: 'DATE',
      model: 'contact',
    },
  ];

  for (const field of fields) {
    await safePost(
      `/locations/${LOCATION_ID}/customFields`,
      field,
      field.name
    );
    await sleep(500);
  }
}

// ─── 2. PIPELINE ─────────────────────────────────────────────
async function createPipeline() {
  divider('STEP 2 — Pipeline');

  const pipeline = {
    name: '[EZ-006] Webinar Pipeline',
    locationId: LOCATION_ID,
    stages: [
      { name: 'Registered',   position: 0 },
      { name: 'Attended',     position: 1 },
      { name: 'No-Show',      position: 2 },
      { name: 'Offer Sent',   position: 3 },
      { name: 'Purchased',    position: 4 },
    ],
  };

  const result = await safePost(
    `/opportunities/pipelines`,
    pipeline,
    pipeline.name
  );

  if (result?.pipeline?.id) {
    log(`Pipeline ID: ${result.pipeline.id}`);
  }

  return result;
}

// ─── 3. TAGS ─────────────────────────────────────────────────
async function createTags() {
  divider('STEP 3 — Tags');

  // GHL creates tags automatically when applied to a contact.
  // We create a dummy contact, apply tags, then note them.
  const tags = [
    'ez_webinar-registered',
    'ez_webinar-attended',
    'ez_webinar-no-show',
    'ez_customer',
    'ez_course-member',
    'ez_offer-sent',
  ];

  // Create a placeholder contact to seed all tags
  try {
    const contact = await api.post(`/contacts/`, {
      locationId: LOCATION_ID,
      firstName: 'EZ',
      lastName: 'TagSeed',
      email: `ez_tagseed_${Date.now()}@placeholder.invalid`,
      tags,
    });
    const contactId = contact.data?.contact?.id;
    log(`Tags seeded via placeholder contact (ID: ${contactId})`);
    log(`Tags created: ${tags.join(', ')}`);

    // Clean up — delete the placeholder contact
    if (contactId) {
      await sleep(500);
      await api.delete(`/contacts/${contactId}`);
      log('Placeholder contact deleted (tags remain in account)');
    }
  } catch (err) {
    error('Could not seed tags', err);
  }
}

// ─── 4. EMAIL TEMPLATES ──────────────────────────────────────
async function createEmailTemplates() {
  divider('STEP 4 — Email Templates');

  const templates = [
    // ── Registration ──────────────────────────────────────────
    {
      name: '[EZ-010] Registration Confirmation',
      subject: "You're registered! Here's your webinar link 🎉",
      body: `<p>Hi {{contact.first_name}},</p>
<p>You're officially registered for the webinar!</p>
<p><strong>Date & Time:</strong> {{contact.ez_008_webinar_date}}</p>
<p><strong>Your personal join link:</strong><br>
<a href="{{contact.ez_007_zoom_join_link}}">{{contact.ez_007_zoom_join_link}}</a></p>
<p>Add it to your calendar so you don't miss it.</p>
<p>Talk soon!</p>`,
    },
    // ── Reminders ─────────────────────────────────────────────
    {
      name: '[EZ-011] Reminder — 3 Days Before',
      subject: "3 days until the webinar — here's what to expect",
      body: `<p>Hi {{contact.first_name}},</p>
<p>Just a heads up — your webinar is in <strong>3 days</strong>!</p>
<p>Here's what we'll cover: [ADD YOUR AGENDA HERE]</p>
<p><strong>Join link:</strong> <a href="{{contact.ez_007_zoom_join_link}}">Click here to join</a></p>
<p>See you there!</p>`,
    },
    {
      name: '[EZ-012] Reminder — 1 Day Before',
      subject: "Tomorrow! Don't forget your webinar link",
      body: `<p>Hi {{contact.first_name}},</p>
<p>Your webinar is <strong>tomorrow</strong>! We're excited to see you.</p>
<p><strong>Date & Time:</strong> {{contact.ez_008_webinar_date}}</p>
<p><strong>Your join link:</strong> <a href="{{contact.ez_007_zoom_join_link}}">Click here to join</a></p>
<p>Make sure you're in a quiet spot with good internet. See you soon!</p>`,
    },
    {
      name: '[EZ-013] Reminder — 1 Hour Before',
      subject: "We go LIVE in 1 hour — your link is inside",
      body: `<p>Hi {{contact.first_name}},</p>
<p>We go <strong>live in 1 hour</strong>! Get comfortable and get ready.</p>
<p><strong>Your join link:</strong> <a href="{{contact.ez_007_zoom_join_link}}">Click here to join</a></p>
<p>See you in a bit!</p>`,
    },
    // ── Post-Webinar: Attended ─────────────────────────────────
    {
      name: '[EZ-014] Post-Webinar — Thank You + Replay (Attended)',
      subject: "Thank you for attending — replay inside",
      body: `<p>Hi {{contact.first_name}},</p>
<p>Thanks so much for joining today's webinar! It was great having you.</p>
<p>Here's the <strong>replay link</strong> in case you want to watch it again:<br>
<a href="[REPLAY LINK]">[REPLAY LINK]</a></p>
<p>Stay tuned — I have something special coming your way very soon.</p>`,
    },
    {
      name: '[EZ-015] Offer Email — Day 1 (Attended)',
      subject: "Here's the offer I mentioned on the webinar",
      body: `<p>Hi {{contact.first_name}},</p>
<p>As promised during the webinar, here's the full details on the course:</p>
<p><strong>[COURSE NAME]</strong> — [SHORT DESCRIPTION]</p>
<p><a href="[OFFER LINK]">👉 Get access here</a></p>
<p>This offer is only available for a limited time, so don't wait!</p>`,
    },
    {
      name: '[EZ-016] Offer Email — Day 3 (Attended)',
      subject: "Still thinking about it? Here's what's inside",
      body: `<p>Hi {{contact.first_name}},</p>
<p>I wanted to follow up and share a bit more about what you get inside <strong>[COURSE NAME]</strong>:</p>
<ul>
<li>[BENEFIT 1]</li>
<li>[BENEFIT 2]</li>
<li>[BENEFIT 3]</li>
</ul>
<p><a href="[OFFER LINK]">👉 Grab your spot before it closes</a></p>`,
    },
    {
      name: '[EZ-017] Urgency Email — Day 6 (Attended)',
      subject: "Closing tomorrow — last chance",
      body: `<p>Hi {{contact.first_name}},</p>
<p>Just a heads up — the offer for <strong>[COURSE NAME]</strong> closes <strong>tomorrow</strong>.</p>
<p>After that, the price goes up (or the doors close entirely).</p>
<p><a href="[OFFER LINK]">👉 Join now before it's too late</a></p>`,
    },
    {
      name: '[EZ-018] Last Chance Email — Day 7 (Attended)',
      subject: "⏰ Last chance — offer closes today",
      body: `<p>Hi {{contact.first_name}},</p>
<p>Today is the <strong>last day</strong> to join <strong>[COURSE NAME]</strong> at this price.</p>
<p>Once this closes, I can't guarantee when (or if) it'll be available again.</p>
<p><a href="[OFFER LINK]">👉 This is your last chance — join now</a></p>`,
    },
    // ── Post-Webinar: No-Show ─────────────────────────────────
    {
      name: '[EZ-019] Post-Webinar — Sorry We Missed You (No-Show)',
      subject: "Sorry we missed you — here's the replay",
      body: `<p>Hi {{contact.first_name}},</p>
<p>We missed you at the webinar today! Life happens — no worries.</p>
<p>Good news: you can watch the full replay here:<br>
<a href="[REPLAY LINK]">[REPLAY LINK]</a></p>
<p>It's worth watching — lots of value packed in there.</p>`,
    },
    {
      name: '[EZ-020] Offer Email — Day 2 (No-Show)',
      subject: "Watched the replay? Here's what comes next",
      body: `<p>Hi {{contact.first_name}},</p>
<p>Hope you got a chance to watch the replay! If not, here it is again:<br>
<a href="[REPLAY LINK]">[REPLAY LINK]</a></p>
<p>If you're ready to go deeper, I'd love to invite you to <strong>[COURSE NAME]</strong>:<br>
<a href="[OFFER LINK]">👉 Learn more here</a></p>`,
    },
    {
      name: '[EZ-021] Offer Email — Day 4 (No-Show)',
      subject: "Quick question for you",
      body: `<p>Hi {{contact.first_name}},</p>
<p>I just wanted to check in — did you get a chance to watch the replay?</p>
<p>If you have any questions about <strong>[COURSE NAME]</strong>, just reply to this email. I'm happy to help.</p>
<p><a href="[OFFER LINK]">👉 See everything that's included</a></p>`,
    },
    {
      name: '[EZ-022] Last Chance Email (No-Show)',
      subject: "Closing soon — don't miss out",
      body: `<p>Hi {{contact.first_name}},</p>
<p>The offer for <strong>[COURSE NAME]</strong> is closing very soon.</p>
<p>If you've been on the fence, now is the time to decide.</p>
<p><a href="[OFFER LINK]">👉 Join before it closes</a></p>`,
    },
    // ── Purchase / Onboarding ─────────────────────────────────
    {
      name: '[EZ-023] Purchase Confirmation & Course Access',
      subject: "You're in! Here's how to access your course 🎉",
      body: `<p>Hi {{contact.first_name}},</p>
<p>Welcome to <strong>[COURSE NAME]</strong>! So excited to have you.</p>
<p>Access your course here:<br>
<a href="[COURSE ACCESS LINK]">[COURSE ACCESS LINK]</a></p>
<p>Your login details:<br>
Email: {{contact.email}}<br>
[PASSWORD RESET INSTRUCTIONS IF NEEDED]</p>
<p>If you have any questions, just reply to this email. Let's go!</p>`,
    },
    {
      name: '[EZ-024] Onboarding Email — Day 2',
      subject: "How to get the most out of [COURSE NAME]",
      body: `<p>Hi {{contact.first_name}},</p>
<p>Now that you've had a day to get started, here are a few tips to help you get the most out of the course:</p>
<ul>
<li>[TIP 1]</li>
<li>[TIP 2]</li>
<li>[TIP 3]</li>
</ul>
<p><a href="[COURSE ACCESS LINK]">👉 Continue your course</a></p>`,
    },
    {
      name: '[EZ-025] Onboarding Email — Day 5',
      subject: "Checking in — how's it going?",
      body: `<p>Hi {{contact.first_name}},</p>
<p>Just checking in! How are you getting on with <strong>[COURSE NAME]</strong>?</p>
<p>If you're stuck on anything or have questions, just reply here — I'm always happy to help.</p>
<p>Keep going — you're doing great! 💪</p>`,
    },
  ];

  for (const t of templates) {
    await safePost(
      `/locations/${LOCATION_ID}/templates`,
      {
        name:       t.name,
        subject:    t.subject,
        body:       t.body,
        type:       'email',
        locationId: LOCATION_ID,
      },
      t.name
    );
    await sleep(300);
  }
}

// ─── 5. SMS TEMPLATES ────────────────────────────────────────
async function createSmsTemplates() {
  divider('STEP 5 — SMS Templates');

  const smsList = [
    {
      name: '[EZ-030] SMS — Registration Confirmation',
      body: "Hey {{contact.first_name}}! You're registered 🎉 Webinar: {{contact.ez_008_webinar_date}}. Your link: {{contact.ez_007_zoom_join_link}} — See you there!",
    },
    {
      name: '[EZ-031] SMS — Reminder 1 Day Before',
      body: "Hi {{contact.first_name}}, your webinar is TOMORROW! 📅 Join link: {{contact.ez_007_zoom_join_link}} — Don't miss it!",
    },
    {
      name: '[EZ-032] SMS — Reminder 1 Hour Before',
      body: "We go LIVE in 1 hour, {{contact.first_name}}! 🚀 Join here: {{contact.ez_007_zoom_join_link}}",
    },
    {
      name: '[EZ-033] SMS — Reminder 15 Min Before',
      body: "15 minutes! We're almost live 🔴 Jump in now: {{contact.ez_007_zoom_join_link}}",
    },
    {
      name: '[EZ-034] SMS — Post-Webinar Offer (Attended)',
      body: "Hey {{contact.first_name}}, thanks for joining! I just sent you the special offer we talked about — check your email 📩",
    },
    {
      name: '[EZ-035] SMS — No-Show Replay Nudge',
      body: "Hey {{contact.first_name}}, missed you today! Watch the replay here: [REPLAY LINK] — Worth it, promise 😊",
    },
    {
      name: '[EZ-036] SMS — Purchase Confirmation',
      body: "You're IN, {{contact.first_name}}! 🎉 Welcome to [COURSE NAME]. Check your email for your login details. Let's go!",
    },
  ];

  for (const sms of smsList) {
    await safePost(
      `/locations/${LOCATION_ID}/templates`,
      {
        name:       sms.name,
        body:       sms.body,
        type:       'sms',
        locationId: LOCATION_ID,
      },
      sms.name
    );
    await sleep(300);
  }
}

// ─── 6. WORKFLOW BLUEPRINT (manual) ──────────────────────────
function printWorkflowBlueprint() {
  divider('STEP 6 — Workflow Blueprints (Build These Manually in GHL)');

  console.log(`
GHL's API does not support creating full Workflows programmatically.
Build these 5 workflows in GHL → Automation → Workflows:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[EZ-001] Webinar Registration
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TRIGGER : Form Submitted (your registration form)
ACTIONS :
  1. Add Tag            → ez_webinar-registered
  2. Create Opportunity → Pipeline: [EZ-006] | Stage: Registered
  3. Zoom: Add Registrant (use Zoom integration, store join link)
  4. Update Field       → [EZ-007] Zoom Join Link = {{zoom.join_url}}
  5. Send Email         → [EZ-010] Registration Confirmation
  6. Send SMS           → [EZ-030] SMS — Registration Confirmation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[EZ-002] Webinar Reminder Sequence
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TRIGGER : Tag Added → ez_webinar-registered
ACTIONS :
  1. Wait until 3 days before [EZ-008] Webinar Date
     Send Email → [EZ-011] Reminder — 3 Days Before
  2. Wait until 1 day before [EZ-008] Webinar Date
     Send Email → [EZ-012] Reminder — 1 Day Before
     Send SMS   → [EZ-031] SMS — Reminder 1 Day Before
  3. Wait until 1 hour before [EZ-008] Webinar Date
     Send Email → [EZ-013] Reminder — 1 Hour Before
     Send SMS   → [EZ-032] SMS — Reminder 1 Hour Before
  4. Wait until 15 min before [EZ-008] Webinar Date
     Send SMS   → [EZ-033] SMS — Reminder 15 Min Before

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[EZ-003] Post-Webinar — Attended
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TRIGGER : Tag Added → ez_webinar-attended
           (set this tag via Zoom webhook or manually after webinar)
ACTIONS :
  1. Update Opportunity Stage → Attended
  2. Send Email  → [EZ-014] Post-Webinar — Thank You + Replay
  3. Add Tag     → ez_offer-sent
  4. Wait 1 day
  5. Send Email  → [EZ-015] Offer Email — Day 1
     Send SMS    → [EZ-034] SMS — Post-Webinar Offer
  6. Wait 2 days
  7. Send Email  → [EZ-016] Offer Email — Day 3
  8. Wait 3 days (Day 6 total)
  9. Update Opportunity Stage → Offer Sent
     Send Email → [EZ-017] Urgency Email — Day 6
  10. Wait 1 day (Day 7)
      Send Email → [EZ-018] Last Chance Email — Day 7

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[EZ-004] Post-Webinar — No-Show
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TRIGGER : Tag Added → ez_webinar-no-show
           (set this tag via Zoom webhook or manually after webinar)
ACTIONS :
  1. Update Opportunity Stage → No-Show
  2. Send Email  → [EZ-019] Post-Webinar — Sorry We Missed You
  3. Wait 2 days
  4. Send Email  → [EZ-020] Offer Email — Day 2 (No-Show)
     Send SMS    → [EZ-035] SMS — No-Show Replay Nudge
  5. Wait 2 days (Day 4 total)
  6. Send Email  → [EZ-021] Offer Email — Day 4 (No-Show)
  7. Wait 2 days (Day 6 total)
  8. Send Email  → [EZ-022] Last Chance Email (No-Show)
     Update Opportunity Stage → Offer Sent

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[EZ-005] Purchase & Membership Access
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TRIGGER : Order Form Submitted (or Stripe payment success tag)
ACTIONS :
  1. Add Tag              → ez_customer, ez_course-member
  2. Remove Tag           → ez_offer-sent
  3. Update Opportunity Stage → Purchased
  4. Grant Membership Access → [Your GHL Membership Product]
  5. Send Email           → [EZ-023] Purchase Confirmation & Course Access
  6. Send SMS             → [EZ-036] SMS — Purchase Confirmation
  7. Wait 1 day
  8. Send Email           → [EZ-024] Onboarding Email — Day 2
  9. Wait 3 days
  10. Send Email          → [EZ-025] Onboarding Email — Day 5

  ⚡ IMPORTANT: Remove contact from [EZ-003] or [EZ-004] workflows
     when this trigger fires (use "Remove from workflow" action).
`);
}

// ─── MAIN ─────────────────────────────────────────────────────
async function main() {
  console.log('\n🚀  EZ GHL Webinar Setup — Starting...\n');

  await createCustomFields();
  await createPipeline();
  await createTags();
  await createEmailTemplates();
  await createSmsTemplates();
  printWorkflowBlueprint();

  console.log('\n✅  Setup complete!\n');
  console.log('Next steps:');
  console.log('  1. Fill in all [PLACEHOLDERS] in your email/SMS templates inside GHL');
  console.log('  2. Build the 5 workflows listed above in GHL → Automation → Workflows');
  console.log('  3. Connect Zoom integration in GHL → Settings → Integrations');
  console.log('  4. Have your boss connect Stripe in GHL → Settings → Payments');
  console.log('  5. Create your GHL Membership product and link it in [EZ-005]\n');
}

main().catch(err => {
  console.error('\n💥  Unexpected error:', err?.message || err);
  process.exit(1);
});
