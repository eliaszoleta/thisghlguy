---
title: "How to Send SMS with GoHighLevel (Step-by-Step Guide)"
description: "Learn how to send SMS messages in GoHighLevel — manually, in bulk, and through automated workflows. Covers LC Phone setup, Twilio, compliance, and best practices."
category: "gohighlevel-tutorials"
keywords:
  - "how to send SMS with GoHighLevel"
  - "GoHighLevel SMS setup"
  - "GoHighLevel text messaging"
  - "GHL SMS tutorial"
  - "GoHighLevel LC Phone"
publishDate: 2026-03-10
author: "Editorial Team"
featured: false
relatedArticles:
  - "how-to-create-automations-in-gohighlevel"
  - "gohighlevel-automate-sms-campaigns"
  - "gohighlevel-crm-explained"
  - "how-to-set-up-gohighlevel"
faqs:
  - question: "Does GoHighLevel have built-in SMS?"
    answer: "Yes. GoHighLevel has a built-in SMS system powered by either LC Phone (GoHighLevel's native telephony) or a connected Twilio account. You can send one-on-one SMS, bulk SMS campaigns, and fully automated SMS sequences — all from inside GHL without a third-party tool."
  - question: "Do I need a Twilio account to send SMS in GoHighLevel?"
    answer: "No. GoHighLevel offers LC Phone, its own native phone system, which works without a separate Twilio account. LC Phone is the recommended option for most users. Twilio integration is still available if you prefer to manage your own Twilio account."
  - question: "How much does SMS cost in GoHighLevel?"
    answer: "SMS pricing depends on your setup. With LC Phone, outbound SMS in the US typically costs around $0.0079 per segment. GoHighLevel's SaaS plans also include monthly communication credits. Check your billing settings for current rates."
  - question: "Can GoHighLevel send SMS automatically?"
    answer: "Yes. GoHighLevel's workflow automation can send SMS messages triggered by any event — form submissions, missed calls, appointment bookings, pipeline stage changes, and more. Automated SMS is one of GHL's most powerful follow-up features."
  - question: "What is A2P 10DLC and do I need it for GoHighLevel SMS?"
    answer: "A2P 10DLC (Application-to-Person 10-digit long code) is a US carrier requirement for businesses sending SMS at scale. You must register your brand and campaign through GHL's A2P registration process to maintain deliverability. GHL walks you through this inside LC Phone settings."
---

GoHighLevel has a full SMS system built in. You can send one-on-one texts directly to contacts, blast a bulk SMS to a list, or automate entire SMS sequences that run without you lifting a finger. This guide covers all three methods from setup to first send.

## SMS Options Inside GoHighLevel

Before sending, understand your two telephony options:

| Option | Best For | Setup Required |
|---|---|---|
| **LC Phone** (native) | Most users — simplest setup | Register inside GHL settings |
| **Twilio** (bring your own) | Users who already have Twilio or need advanced control | Connect via API keys |

For most people starting out, **LC Phone is the right choice**. It's built into GHL, has competitive rates, and requires no external account management.

## Step 1: Set Up Your Phone Number

### Using LC Phone (Recommended)

1. Inside your sub-account, go to **Settings → Phone Numbers**
2. Click **Add Number**
3. Select **LC Phone**
4. Search for available local numbers by area code, or choose a toll-free number
5. Select the number you want and click **Buy**
6. The number appears in your list immediately and is ready to use

### Using Twilio

1. Go to **Settings → Phone Numbers**
2. Click **Add Number → Twilio**
3. Enter your Twilio Account SID and Auth Token
4. Purchase a number inside Twilio's dashboard first, then it will appear in GHL once connected

## Step 2: Register for A2P 10DLC (Required for US SMS)

US carriers require all businesses sending SMS from 10-digit numbers to register their brand and messaging use case. Skipping this causes messages to be filtered or blocked.

1. Go to **Settings → Phone Numbers → Trust Center** (or LC Phone Compliance)
2. Click **Register Brand**
3. Fill in your business details: legal name, EIN, business type, website, address
4. Click **Register Campaign** after brand approval
5. Select your use case (most agencies choose "Mixed" or "Marketing")
6. Describe your messaging content and opt-in process
7. Submit and wait for carrier approval — typically 1–5 business days

**Do not skip A2P registration.** Unregistered numbers have very low delivery rates in the US.

## Step 3: Send a Manual SMS to One Contact

Once your number is active, sending a manual text is straightforward.

1. Go to **Contacts** and open the contact you want to message
2. Click the **SMS** icon in the conversation panel (speech bubble)
3. Type your message in the text box at the bottom
4. Click **Send**

The message appears in the conversation thread. Replies come back to the same thread and you can respond in real time — just like a two-way text conversation.

**Tips for manual SMS:**
- Keep messages conversational and short
- Personalization tokens (first name, appointment time) insert automatically — click the `{` icon in the message box
- You can attach images (MMS) using the image icon

## Step 4: Send a Bulk SMS Campaign

To text a large list of contacts at once:

1. Go to **Marketing → Campaigns** (or **Bulk Actions** depending on your GHL version)
2. Click **New Campaign → SMS**
3. Name your campaign
4. Select your **sender number**
5. Write your SMS message — keep it under 160 characters for a single segment
6. Add a **contact list** or apply filters (by tag, pipeline stage, custom field, etc.) to define your audience
7. Schedule it for a specific time or send immediately
8. Click **Send** or **Schedule**

**Bulk SMS best practices:**
- Always include an opt-out line: "Reply STOP to unsubscribe" — this is legally required in the US
- Send during business hours (9am–6pm in the recipient's time zone)
- Segment your list — targeted messages outperform blasts every time
- Keep it under 160 characters to avoid multi-segment charges

## Step 5: Automate SMS with Workflows

This is where GoHighLevel SMS becomes a real business tool. Automated texts go out 24/7 based on triggers — no manual sending required.

### Example: SMS when a new lead fills out a form

1. Go to **Automation → Workflows**
2. Click **+ New Workflow → Start from Scratch**
3. Set the trigger: **Form Submitted** → select your form
4. Click the **+** button to add an action
5. Select **Send SMS**
6. Choose your sender number
7. Write your message — use personalization tokens like `{{contact.first_name}}`
8. Set a **Wait** step before follow-up messages if needed
9. Add more SMS steps for follow-up (e.g., send again after 1 hour if no reply)
10. Click **Save** and turn the workflow **On**

### Common automated SMS use cases

| Trigger | SMS Sent |
|---|---|
| New lead form submitted | Instant "Thanks for reaching out" text |
| Appointment booked | Confirmation with date/time |
| Appointment reminder | Reminder 24 hours before |
| Missed call | "Sorry we missed you — reply here" |
| Lead goes cold (no activity 3 days) | Re-engagement follow-up |
| Payment received | Receipt and next steps |

## Step 6: Two-Way SMS Conversations

Every incoming text reply lands in **Conversations** in the left sidebar. This is GHL's unified inbox.

1. Click **Conversations** in the left sidebar
2. Filter by channel (SMS) or view all
3. Click any conversation to read and reply
4. All back-and-forth history is stored per contact

You can also assign conversations to team members, add internal notes, and see the full contact record alongside the conversation.

## Managing Opt-Outs

GoHighLevel automatically processes STOP replies and removes contacts from SMS sends. You don't need to manage this manually.

- If a contact replies **STOP**, GHL marks them as SMS-unsubscribed
- They will be excluded from all future bulk SMS sends
- Their opt-out status is visible in the contact record under **Do Not Disturb**

## Checking SMS Delivery Reports

1. Go to **Marketing → Campaigns** (for bulk sends) or **Reporting → Communication** depending on your GHL version
2. View delivery status: Delivered, Failed, Pending
3. For workflow SMS, check **Automation → Workflows → your workflow → History** to see per-contact send status

Failed messages usually indicate the number is invalid, the contact opted out, or an A2P compliance issue.

## Common Mistakes to Avoid

**Not registering for A2P 10DLC.** This is the single biggest SMS mistake. Carrier filtering means your messages never arrive. Register before sending at volume.

**Sending outside business hours.** Texts at 7am or 10pm frustrate contacts and can violate TCPA regulations. Use GHL's scheduling to stay within reasonable hours.

**No opt-out language.** Every marketing text must include a way to opt out. "Reply STOP to unsubscribe" at the end of your first message in a campaign is the minimum.

**Messages that are too long.** SMS over 160 characters is split into segments and billed per segment. Write tight, clear messages.

**Missing personalization.** A text that starts with "Hi there" when GHL has the first name is a missed opportunity. Always use `{{contact.first_name}}`.

---

SMS is one of the highest-engagement channels in GoHighLevel. Open rates for SMS regularly exceed 90%, compared to 20–30% for email. Once your number is registered and your automation is set up, you have a direct line to every lead that operates around the clock.

**[Try GoHighLevel free for 14 days →](https://www.gohighlevel.com/?fp_ref=thisghlguy)**

**Also read:**
- [How to automate SMS campaigns in GoHighLevel →](/gohighlevel-automate-sms-campaigns/)
- [How to create automations in GoHighLevel →](/how-to-create-automations-in-gohighlevel/)
- [GoHighLevel CRM explained →](/gohighlevel-crm-explained/)
