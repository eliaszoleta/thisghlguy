---
title: "GoHighLevel SaaS Rebilling: How to Charge Clients for Usage (2026)"
description: "Learn how to set up SaaS rebilling in GoHighLevel to automatically pass Twilio, Mailgun, and AI usage costs to your clients at a markup. Step-by-step setup guide."
category: "gohighlevel-saas"
keywords:
  - "GoHighLevel SaaS rebilling"
  - "GHL rebilling setup"
  - "GoHighLevel charge clients SMS email"
  - "GoHighLevel usage billing"
  - "GoHighLevel Twilio rebilling"
publishDate: 2026-03-13
author: "Editorial Team"
featured: false
relatedArticles:
  - "what-is-gohighlevel-saas-mode"
  - "how-to-start-saas-with-gohighlevel"
  - "gohighlevel-saas-pricing-strategy"
  - "how-to-connect-stripe-to-gohighlevel"
faqs:
  - question: "What is SaaS rebilling in GoHighLevel?"
    answer: "SaaS rebilling is a GoHighLevel feature that lets you automatically charge your sub-account clients for usage-based costs like SMS, emails, phone calls, and AI credits. You set your markup, and GHL handles the billing automatically — charging your clients' payment methods and crediting your account."
  - question: "How much markup can I add with GHL rebilling?"
    answer: "There is no cap. You set the markup percentage yourself. Common markups range from 10% to 100% over cost. For example, if an SMS costs $0.0079, you could charge your client $0.0119 (a 50% markup). The difference goes directly to you."
  - question: "Do clients need their own Twilio or Mailgun account for rebilling?"
    answer: "No. With GoHighLevel's LC Phone and LC Email (their native communication services), clients use GHL's infrastructure and you rebill them for usage. Clients never need to set up external accounts — everything is managed through your white-label platform."
  - question: "Is rebilling required to run a GoHighLevel SaaS?"
    answer: "No. You can choose to include usage costs in your monthly fee rather than rebilling. Many SaaS operators include a usage allowance (e.g., 500 SMS/month) in their plan price and rebill only when clients exceed that limit. Others pass all usage through as a separate line item."
  - question: "What payment processor does GoHighLevel use for rebilling?"
    answer: "GoHighLevel uses Stripe for all subscription billing, including SaaS rebilling. You need a Stripe account connected to your Agency settings to collect payments from sub-account clients."
---

One of the most overlooked revenue opportunities in a GoHighLevel SaaS business is rebilling — automatically charging your clients for the SMS messages, emails, phone calls, and AI usage they generate, at a markup.

Without rebilling, you absorb all those usage costs yourself. With it, you turn a cost center into another profit stream while keeping your pricing simple for clients.

This guide covers exactly how to set up rebilling, how to price it, and how to explain it to clients.

## What Gets Rebilled in GoHighLevel

GoHighLevel's rebilling system covers these usage categories:

| Service | What It Covers |
|---|---|
| **LC Phone (SMS)** | Outbound and inbound text messages |
| **LC Phone (Voice)** | Outbound and inbound phone calls |
| **LC Email** | Outbound emails sent through GHL |
| **AI / Content AI** | AI-generated content, AI chat responses |
| **Workflow AI** | AI steps in automations |
| **Phone Verification** | Phone number validation |
| **Premium Actions** | Advanced workflow actions |

Each of these has a base cost that GoHighLevel charges. You set your markup on top of those base rates and your clients are billed the marked-up amount. The markup goes to you.

## Prerequisites Before Setting Up Rebilling

Before enabling rebilling you need:

1. **Agency Unlimited or Agency Pro plan** — SaaS Mode is required
2. **Stripe connected** to your Agency account — this handles subscription billing
3. **LC Phone or LC Email enabled** — rebilling only works with GHL's native communication services (not external Twilio/Mailgun accounts)
4. **SaaS Mode configured** in your Agency settings

If you haven't connected Stripe yet, go to **Agency Settings → Payments → Connect Stripe** first.

## Step 1: Enable SaaS Mode

1. Go to your **Agency** dashboard (the top-level account, not a sub-account)
2. Click **Settings → SaaS Mode**
3. Toggle **SaaS Mode** to enabled if it isn't already
4. Connect your Stripe account if prompted

## Step 2: Configure Your Rebilling Markup

1. In **Agency Settings → SaaS Mode**, scroll to the **Rebilling** section
2. You'll see each rebillable service listed with a base cost
3. For each service, set your **markup percentage**
   - 0% = pass cost directly to client at cost
   - 20% = charge client 20% more than GHL charges you
   - 100% = double the base cost (e.g., if SMS costs $0.008, you charge $0.016)
4. Click **Save**

### Suggested markup ranges

| Service | Conservative | Aggressive |
|---|---|---|
| SMS (outbound) | 10–20% | 50–100% |
| Voice calls | 10–20% | 50% |
| Email | 10–25% | 50–75% |
| AI content | 20–50% | 100% |

There's no single right answer — it depends on your niche and how price-sensitive your clients are. Most operators use 20–50% across the board as a starting point.

## Step 3: Enable Rebilling Per Sub-Account

Global markup rates are set at the Agency level, but you enable or disable rebilling on a per sub-account basis.

1. From your Agency dashboard, go to **Sub-Accounts**
2. Click on the sub-account you want to enable rebilling for
3. In the sub-account settings, find the **Rebilling** or **SaaS** tab
4. Toggle rebilling **On** for each service you want to rebill
5. Confirm the client's payment method is on file (connected via Stripe)

Repeat for each sub-account. New sub-accounts created through your SaaS white-label portal can have rebilling enabled by default via your plan settings.

## Step 4: Set Up a Payment Method for Sub-Accounts

For rebilling to work, each client sub-account needs a Stripe payment method on file.

**Option A: Client enters payment at signup**
If you use GHL's SaaS subscription checkout, clients enter their card details when they sign up. Rebilling charges hit that card automatically.

**Option B: You add a payment method manually**
1. Open the sub-account
2. Go to **Settings → Billing**
3. Add the client's card manually

Clients will receive automated billing notifications from Stripe when usage charges occur.

## Step 5: Set Usage Thresholds (Optional but Recommended)

To avoid surprise bills for your clients (and disputes with you), consider setting usage caps or alerts.

1. In the sub-account rebilling settings, look for **Wallet** or **Credit Balance**
2. You can set a minimum credit balance that triggers an automatic top-up
3. Or set a monthly usage limit to prevent runaway spending

Many GHL SaaS operators pre-load a credit balance (e.g., $10–$25) for each new client and let it auto-replenish when it falls below a threshold. Clients are charged for the top-up rather than individual messages — cleaner for the client and less friction.

## How to Explain Rebilling to Clients

Transparent communication prevents churn and disputes. Here's how most successful GHL SaaS operators explain it:

**In your sales process:**
> "Your subscription covers the platform and all the features. Outbound communication — SMS, calls, email — is billed at a small per-use rate on top of that, similar to how phone carriers work. For a typical business sending a few hundred texts per month, that's usually $10–$30/month in usage."

**In your onboarding materials:**
Include a one-page breakdown of what rebilling covers, your rates, and how to check their usage balance inside the platform.

**In your terms of service:**
Document that usage-based billing applies and what services are covered.

Most clients have no issue with rebilling once they understand it up front. Problems arise when it's not explained during the sales process and the first charge comes as a surprise.

## Monitoring Rebilling Revenue

Track your rebilling income from the Agency dashboard:

1. Go to **Agency → Reporting → Revenue** or **Billing**
2. View total rebilling revenue across all sub-accounts
3. See per-sub-account usage breakdown
4. Export reports for accounting

Rebilling revenue is separate from subscription revenue in GHL's reporting, which makes it easy to track as a distinct revenue line.

## Including Usage in Your Plan Price vs. Rebilling Separately

Both approaches work. Here's when each makes sense:

**Include usage in plan price:**
- Simpler pricing — one number, no surprises
- Works well for light-usage niches (service businesses, consultants)
- Build a buffer: if average usage is $15/month, price includes $25 worth
- Risk: heavy users eat into your margin

**Rebill usage separately:**
- More scalable — your margin is consistent regardless of usage
- Works well for high-volume niches (multi-location businesses, agencies)
- Requires more explanation during sales and onboarding
- Upside: additional revenue stream beyond subscription

Many operators do a hybrid: include a monthly usage allowance (e.g., $25 in SMS/email credits) and rebill at a markup only for usage beyond that amount. This gives clients predictability for typical usage while protecting your margin for heavy users.

## Common Mistakes to Avoid

**Not connecting Stripe before enabling rebilling.** Without Stripe, rebilling silently fails and you absorb all usage costs. Confirm the Stripe connection before onboarding your first client.

**Not disclosing rebilling before signup.** Clients who discover surprise charges after joining will churn and leave negative reviews. Make rebilling explicit in your sales materials and onboarding.

**Setting markups too low.** Some operators set 0% markup to keep things simple, which means you're processing billing for zero profit. Even a 10% markup adds meaningful recurring revenue at scale.

**Forgetting to enable rebilling per sub-account.** The global markup settings don't automatically enable rebilling for existing sub-accounts. You have to turn it on account by account.

---

Rebilling is one of the cleanest ways to add recurring revenue to your GHL SaaS business without adding clients or raising your base subscription price. Once it's configured, it runs entirely automatically — your clients use the platform, GHL tracks the usage, and Stripe handles the billing.

**[Try GoHighLevel free for 14 days →](https://www.gohighlevel.com/?fp_ref=thisghlguy)**

**Also read:**
- [What is GoHighLevel SaaS Mode →](/what-is-gohighlevel-saas-mode/)
- [How to price your GoHighLevel SaaS →](/gohighlevel-saas-pricing-strategy/)
- [How to start a SaaS business with GoHighLevel →](/how-to-start-saas-with-gohighlevel/)
