---
title: "How to Build a Funnel in GoHighLevel (Step-by-Step Tutorial)"
description: "Learn how to build a complete sales funnel in GoHighLevel from scratch. Covers opt-in pages, sales pages, order forms, upsells, and connecting automations. Beginner-friendly."
category: "gohighlevel-tutorials"
keywords:
  - "how to build a funnel in GoHighLevel"
  - "GoHighLevel funnel builder"
  - "create funnel GoHighLevel"
  - "GoHighLevel funnel tutorial"
  - "GHL funnel setup"
publishDate: 2025-03-12
updatedDate: 2026-03-15
author: "Editorial Team"
featured: false
relatedArticles:
  - "how-to-set-up-gohighlevel"
  - "gohighlevel-automation-workflows"
  - "what-is-gohighlevel"
  - "gohighlevel-crm-explained"
faqs:
  - question: "Does GoHighLevel have a funnel builder?"
    answer: "Yes. GoHighLevel has a built-in drag-and-drop funnel builder that supports opt-in pages, sales pages, order forms, upsells, downsells, confirmation pages, and membership sites. It also includes A/B testing and integrates natively with the GHL CRM and automation workflows."
  - question: "Is GoHighLevel's funnel builder as good as ClickFunnels?"
    answer: "ClickFunnels has a more polished funnel-building experience with more refined templates. GoHighLevel's funnel builder is fully capable for most use cases and has the major advantage of being connected natively to your CRM, automation, and the rest of the GHL platform. For agencies building funnels for multiple clients, GHL's approach is more practical."
  - question: "Can I connect a custom domain to my GoHighLevel funnel?"
    answer: "Yes. GoHighLevel allows you to connect custom domains to your funnels. Go to Settings → Domains, add your domain, update your DNS records with your registrar, and assign the domain to your funnel."
  - question: "Can GoHighLevel funnels accept payments?"
    answer: "Yes. GoHighLevel's order form pages integrate directly with Stripe and PayPal. You can collect one-time payments, set up subscriptions, and add order bumps and upsells within the same funnel."
  - question: "How do I connect a funnel to my GoHighLevel automation?"
    answer: "When a visitor submits a form in your funnel, their information is automatically added to your GHL CRM as a contact. You can then set up a workflow triggered by that form submission to automatically start any follow-up sequence."
---

GoHighLevel's funnel builder lets you create complete sales funnels — from opt-in pages to order forms to post-purchase upsells — all without touching a line of code. More importantly, every funnel connects directly to your CRM and automation workflows, so leads are followed up automatically the moment they opt in.

This tutorial walks you through building a complete funnel from scratch.

## What You Can Build With GoHighLevel Funnels

Before diving in, here's what the GHL funnel builder supports:

- **Opt-in / lead capture pages** — Collect name, email, and phone
- **Sales pages** — Long-form persuasive pages with video, testimonials, and CTAs
- **Order form pages** — Stripe/PayPal-connected checkout
- **Upsell and downsell pages** — One-click post-purchase offers
- **Confirmation / thank-you pages**
- **Appointment booking pages** — Inline calendar booking
- **Membership and course pages** — Gated content after purchase
- **Survey and quiz pages**

A complete funnel chains these pages together in sequence.

## Types of Funnels Most Agencies Build

| Funnel Type | Pages Included | Best For |
|---|---|---|
| Lead generation funnel | Opt-in → Thank you | Collecting leads for follow-up |
| Webinar funnel | Opt-in → Confirmation → Replay | Webinars and online events |
| Free consultation funnel | Opt-in → Booking page → Confirmation | Service businesses |
| Low-ticket sales funnel | Sales page → Order form → Upsell → Thank you | Digital products |
| Free trial funnel | Landing page → Application → Booking | SaaS and coaching |

We'll build a **lead generation funnel** (the most common) in this tutorial. The same steps apply to all funnel types.

## Step-by-Step: Building a Lead Generation Funnel

### Step 1: Navigate to Funnels

Inside your GoHighLevel sub-account:
1. Click **Sites** in the left sidebar
2. Click **Funnels** in the top navigation
3. Click **+ New Funnel**
4. Give your funnel a name (internal only) and click **Create Funnel**

### Step 2: Add Your First Step (Opt-In Page)

Every funnel is made up of "steps" — each step is one page.

1. Click **Add New Step**
2. Name the step (e.g., "Opt-In Page")
3. Choose a **template** or start blank
   - Templates are organized by industry and funnel type
   - Choose "Blank" if you want full design control
4. Click the **Edit** button (pencil icon) to open the page builder

### Step 3: Build the Opt-In Page

The page builder is a drag-and-drop editor. On the left panel you'll see elements you can add:

**Key elements for an opt-in page:**
- **Headline** — Clear statement of what they'll get
- **Sub-headline** — Supporting detail
- **Image or video** — Visual to support the offer
- **Form element** — The opt-in form (name, email, phone)
- **Button** — Submit/CTA button
- **Trust elements** — Testimonials, logos, security badges

**How to edit elements:**
1. Click any element on the canvas to select it
2. Edit content in the left panel that appears
3. Drag the resize handles to adjust size
4. Use the layout buttons to control spacing and alignment

**Form configuration:**
1. Click the form element
2. In the left panel, click **Form Fields** to add/remove fields
3. Enable or disable the fields you need (name, email, phone are standard)
4. Set the form to **Submit to GHL** so leads flow directly into your CRM

**Pro tips for converting opt-in pages:**
- Your headline should state the specific outcome the visitor will get, not a vague promise
- Keep the form short — name, email, and phone is enough for most lead gen offers
- The button text matters: "Get Free Guide" converts better than "Submit"
- Add a privacy note below the form: "We respect your privacy. No spam."

### Step 4: Configure the Thank-You Page

After someone submits the form, they need to go somewhere.

1. Click **Add New Step**
2. Name it "Thank You Page"
3. Edit the page content — confirm what they'll receive and set expectations
4. Optionally: add an appointment booking calendar directly on the thank-you page to capture hot leads while they're engaged

### Step 5: Set the Redirect Between Pages

1. Go back to your opt-in step
2. Click the **Settings** gear icon on the step
3. Under **Redirect on Submit**, select your thank-you page step
4. Save

Now when someone submits the form, they're taken directly to the thank-you page.

### Step 6: Connect a Custom Domain (Optional but Recommended)

By default, your funnel URL will be a GoHighLevel subdomain. For a professional look, connect a custom domain.

1. Go to **Settings → Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `leads.yourbusiness.com`)
4. Copy the CNAME or A record provided
5. Log in to your domain registrar and add those DNS records
6. Back in GHL, click **Verify** — allow up to 24 hours for DNS propagation
7. Once verified, go back to your funnel → Settings → assign the domain

### Step 7: Connect Automation to the Funnel

This is what separates a GoHighLevel funnel from a basic landing page — every opt-in automatically fires follow-up.

1. Go to **Automation → Workflows**
2. Create a new workflow
3. Set the trigger to **Form Submitted** and select your funnel's form
4. Add your follow-up actions: immediate thank-you SMS, email sequence, internal notification, etc.

Now every lead who opts in gets followed up automatically, 24/7, without any manual work.

### Step 8: Test Your Funnel

Before driving traffic, test everything:

1. Click the **Preview** button on your funnel to see it live
2. Copy the funnel URL and open it in a new tab
3. Fill out the form with a test email/phone
4. Verify the contact appears in your CRM under Contacts
5. Verify the thank-you page loads correctly
6. Check that your automation workflow fired (go to Automation → Workflows → your workflow → History tab)
7. Confirm you received the test SMS and email

Only publish traffic once everything tests clean.

## Adding an Order Form (For Sales Funnels)

If you want to sell a product or service through your funnel:

1. Add a new step after your sales page
2. Choose **Order Form** as the page type
3. Go to **Payment → Products** in your sub-account and create a product with pricing
4. In the order form page builder, add the **Order Form** element
5. Connect the element to your product
6. Make sure Stripe is connected under **Settings → Payments**
7. After the order form step, add an upsell page (optional) and a purchase confirmation page

## Adding Upsells and Downsells

GoHighLevel supports one-click upsells natively:

1. After the order form step, add a new step and choose **Upsell** page type
2. Build the upsell offer page
3. The "Yes, add this!" button is a one-click charge — no re-entering payment details
4. Set what happens if they click "No" (downsell page or skip to confirmation)

## A/B Testing Your Funnel Pages

To test two versions of a page:

1. On any funnel step, click the **A/B** icon
2. Click **Create Variant**
3. Edit the variant (change headline, button color, layout, etc.)
4. Set the traffic split (50/50 is standard)
5. GoHighLevel will automatically split traffic and show you conversion rates for each variant

Let tests run until you have at least 100 conversions on each variant before declaring a winner.

## Funnel Analytics

Track your funnel performance under **Sites → Funnels → your funnel → Stats**:

- **Visitors** — Total page views
- **Opt-ins** — Form submissions
- **Conversion rate** — Opt-ins ÷ Visitors
- **Revenue** — For funnels with order forms

A healthy opt-in page conversion rate is 20–40% for cold traffic, 40–70%+ for warm traffic.

## Common Mistakes to Avoid

**Too many form fields.** Every extra field reduces conversions. For lead gen, collect only what you need to start a conversation.

**Generic headlines.** "Free guide" is not compelling. "Get the 5-step checklist that helped 47 dental offices get 30 more Google reviews in 30 days" is compelling.

**No mobile optimization.** Over 60% of traffic is mobile. Always preview your funnel on the mobile view and fix any layout issues before publishing.

**No automation connected.** A funnel that collects leads but doesn't follow up automatically is missing the entire point of GoHighLevel. Always connect a workflow.

**Sending traffic to an untested funnel.** Test before you advertise. A broken form that doesn't submit is a fast way to waste ad budget.

---

Building funnels is one of the highest-ROI activities in GoHighLevel. A well-built lead generation funnel, connected to a solid follow-up automation, runs 24/7 and consistently converts visitors into booked appointments or paying customers.

**[Try GoHighLevel free for 14 days →](https://www.gohighlevel.com/?fp_ref=thisghlguy)**

**Also read:**
- [How to set up GoHighLevel (full beginner guide) →](/how-to-set-up-gohighlevel/)
- [GoHighLevel automation workflows explained →](/gohighlevel-automation-workflows/)
- [GoHighLevel CRM explained →](/gohighlevel-crm-explained/)
