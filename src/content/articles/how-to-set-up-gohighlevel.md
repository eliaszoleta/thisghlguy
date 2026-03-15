---
title: "How to Set Up GoHighLevel: Step-by-Step Beginner's Guide (2026)"
description: "A complete step-by-step guide to setting up GoHighLevel from scratch. Learn how to configure your account, add clients, build funnels, set up automations, and go live."
category: "gohighlevel-tutorials"
keywords:
  - "how to set up GoHighLevel"
  - "GoHighLevel setup guide"
  - "GoHighLevel getting started"
  - "GoHighLevel tutorial beginners"
  - "GoHighLevel account setup"
publishDate: 2025-02-15
author: "Editorial Team"
featured: false
relatedArticles:
  - "what-is-gohighlevel"
  - "gohighlevel-pricing"
  - "what-is-gohighlevel-saas-mode"
faqs:
  - question: "How long does it take to set up GoHighLevel?"
    answer: "A basic GoHighLevel setup — CRM configured, one funnel live, and one automation workflow running — typically takes 3–6 hours. A complete agency setup with multiple client sub-accounts, custom Snapshots, and branded assets takes 1–2 weeks."
  - question: "Do I need technical skills to set up GoHighLevel?"
    answer: "You don't need coding skills. GoHighLevel is a no-code platform with drag-and-drop builders. Basic computer literacy and familiarity with digital marketing concepts will get you through the setup process."
  - question: "What do I need before setting up GoHighLevel?"
    answer: "Before starting your GHL setup, you'll want to have: your business name and logo, a custom domain (optional but recommended), a Stripe account for payments, and your brand colors. Having your first client's information handy also helps."
  - question: "Can I import my contacts into GoHighLevel?"
    answer: "Yes. You can import contacts via CSV file, connect integrations like Zapier or native CRM connections, or manually add contacts. GoHighLevel's import tool maps your CSV columns to GHL contact fields."
  - question: "How do I connect my domain to GoHighLevel?"
    answer: "Go to Settings > Domains in your sub-account. Add your domain, then update your DNS records (typically CNAME or A records) at your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.) to point to GoHighLevel's servers."
---

Getting GoHighLevel set up properly from the start saves you hours of rework later. This guide walks you through every step — from creating your account to having a working funnel, automation, and CRM live.

Whether you're setting up GHL for your own business or for a client, follow these steps in order.

## Before You Start: What You'll Need

Gather these before opening GoHighLevel:

- **A GoHighLevel account** (start with the free 14-day trial)
- **Your business name and logo** (PNG, ideally 400x400px or larger)
- **Brand colors** (hex codes)
- **A custom domain** (optional but strongly recommended)
- **A Stripe account** (for payment processing)
- **Your first client's info** (if setting up an agency account)

## Step 1: Create Your GoHighLevel Account

1. Go to [GoHighLevel.com](https://www.gohighlevel.com/?fp_ref=thisghlguy) and click **Start Free Trial**
2. Choose your plan (Starter for 1–3 clients, Agency Unlimited for more)
3. Enter your agency name, email, and password
4. Complete the onboarding questionnaire (be honest — it helps GHL customize your setup)

After signup, you'll land in your **Agency Dashboard**. This is the top-level view where you manage sub-accounts (client accounts).

## Step 2: Configure Your Agency Settings

Before creating sub-accounts, configure your agency profile:

1. Click **Settings** in the left sidebar
2. Under **Agency Settings**, upload your logo and add your business details
3. Set your timezone (critical for automations and appointment scheduling)
4. Add your billing information if you haven't already

### Connect Your Communication Channels

GoHighLevel handles email, SMS, and phone calls through its LeadConnector (LC) system or your own Twilio/Mailgun accounts.

**For most users, LC is the simplest option:**
1. Go to **Settings > Phone Numbers**
2. Purchase a phone number for your sub-account ($1.15/mo)
3. Set up **LC Email** under Settings > Email Services (add your sending domain via Mailgun)

Setting up a verified sending domain is important — it significantly improves email deliverability.

## Step 3: Create Your First Sub-Account

A sub-account is an individual client account (or your own business account).

1. From the Agency Dashboard, click **+ Add Account**
2. Choose **Create New Account** (or **Use Snapshot** if you have one)
3. Enter the account name, address, timezone, and contact details
4. Click **Save**

You'll be taken into the sub-account. Everything from here happens inside this account.

## Step 4: Set Up Your CRM

### Import Existing Contacts

If you have an existing contact list:
1. Go to **Contacts** in the left sidebar
2. Click **Import Contacts**
3. Upload your CSV file
4. Map your CSV columns to GoHighLevel fields (First Name, Last Name, Email, Phone, etc.)
5. Click **Import**

### Configure Custom Fields

GHL has default contact fields, but you can add custom fields for your business:
1. Go to **Settings > Custom Fields**
2. Click **+ Add Field**
3. Create fields relevant to your business (e.g. "Lead Source," "Service Interested In," "Budget Range")

### Set Up Pipelines

Pipelines are your visual sales stages:
1. Go to **Opportunities** in the sidebar
2. Click **Settings** (gear icon) or **Pipelines**
3. Click **+ Add Pipeline**
4. Name your pipeline (e.g. "Sales Pipeline" or "New Leads")
5. Add stages (e.g. New Lead → Contacted → Appointment Set → Proposal Sent → Closed Won / Closed Lost)

## Step 5: Build Your First Funnel

1. Go to **Sites > Funnels** in the sidebar
2. Click **+ New Funnel**
3. Choose a template or start from scratch
4. Name your funnel and set the domain/path (e.g. `yoursite.com/offer`)
5. Click **Add Step** to create pages:
   - **Step 1:** Opt-in / Landing page
   - **Step 2:** Thank you page (or sales page if applicable)

### Customize Your Pages

Click on any page to open the drag-and-drop builder:
- Edit text by clicking on it
- Add sections, rows, and elements from the left panel
- Upload images and set backgrounds
- Add your form element to capture leads

### Connect Your Form to a CRM Tag

When editing your opt-in form:
1. Click the form element
2. Under **Settings**, scroll to **On Submit**
3. Set it to redirect to your thank-you page
4. Add a tag to the contact (e.g. "Funnel Lead") — this tag can trigger automations

## Step 6: Create Your First Automation Workflow

This is where GoHighLevel becomes truly powerful.

1. Go to **Automation > Workflows**
2. Click **+ New Workflow**
3. Choose **Start from Scratch** or select a recipe (pre-built workflow template)

### Build a Simple Lead Follow-Up Workflow

**Trigger:** Contact tag added → Tag: "Funnel Lead"

**Actions:**
1. **Wait 0 minutes** (immediate)
2. **Send Email** — Welcome email thanking them for opting in
3. **Wait 10 minutes**
4. **Send SMS** — Brief intro text message
5. **Wait 1 day**
6. **Send Email** — Follow-up with value content
7. **Wait 2 days**
8. **Send SMS** — Soft ask / next step CTA
9. **Add to Opportunity** — Create a deal in your pipeline

Click **Publish** when your workflow is ready. It will now trigger automatically whenever a contact receives the "Funnel Lead" tag.

## Step 7: Set Up Your Calendar

1. Go to **Calendars** in the sidebar
2. Click **+ Create Calendar**
3. Choose **Event (Round Robin)** for teams or **Simple** for solo booking
4. Configure:
   - Calendar name and description
   - Meeting duration (15, 30, 45, or 60 minutes)
   - Availability windows (days and times)
   - Buffer time between meetings
   - Booking page URL slug
5. Connect to Google Calendar for sync

### Add Appointment Reminders (Automation)

Create a workflow triggered by **Appointment Status → Confirmed** to send:
- Immediate confirmation SMS and email
- 24-hour reminder email
- 1-hour reminder SMS

This alone can cut no-show rates by 50%.

## Step 8: Connect Stripe for Payments

1. Go to **Settings > Integrations**
2. Click **Stripe** and connect your account
3. Once connected, you can add order forms to your funnels and charge for products/services

## Step 9: Set Up Reputation Management

1. Go to **Reputation** in the sidebar
2. Click **Get More Reviews**
3. Set up your Google Business Profile link and Facebook Page link
4. Configure automated review request messages (sent via SMS and email after service completion)
5. Enable review monitoring to get alerts for new reviews

## Step 10: Test Everything Before Going Live

Before sending real traffic to your funnel or automation:

1. **Submit a test lead** through your funnel form (use a personal email/phone)
2. **Check the contact** was created in your CRM with the correct tags
3. **Verify the workflow triggered** (check Automation > History)
4. **Confirm you received** the test emails and SMS messages
5. **Book a test appointment** and verify the reminder workflow fires
6. **Check email deliverability** using GHL's built-in spam score checker

## Common Setup Mistakes to Avoid

- **Not verifying your email sending domain** — unverified domains kill deliverability
- **Skipping pipeline setup** — you won't be able to track opportunities
- **Publishing a workflow before testing** — always test with a real lead first
- **Not setting your timezone** — automations will fire at the wrong times
- **Using a shared phone number** — always get a dedicated number for each sub-account

## You're Live — What's Next?

Once your basic setup is complete:

1. **Add your first real lead** or start driving traffic to your funnel
2. **Monitor your workflows** in Automation > History to catch any issues
3. **Refine your sequences** based on open rates and response rates
4. **Explore Snapshots** — GoHighLevel's marketplace has pre-built setups for dozens of industries
5. **Join the GHL Community** on Facebook for tips, templates, and support

**Related Guides:**
- [What is GoHighLevel? Platform overview →](/what-is-gohighlevel/)
- [GoHighLevel pricing — which plan to choose? →](/gohighlevel-pricing/)
- [GoHighLevel SaaS Mode explained →](/what-is-gohighlevel-saas-mode/)
