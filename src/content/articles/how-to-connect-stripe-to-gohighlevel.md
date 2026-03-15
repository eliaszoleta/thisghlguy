---
title: "How to Connect Stripe to GoHighLevel (Step-by-Step Guide)"
description: "A complete step-by-step guide to connecting Stripe to GoHighLevel — how to set up payments, create invoices, add order bumps to funnels, and enable SaaS billing for your sub-accounts."
category: "gohighlevel-tutorials"
keywords:
  - "connect Stripe to GoHighLevel"
  - "GoHighLevel Stripe integration"
  - "GoHighLevel payments setup"
  - "GHL Stripe setup"
  - "GoHighLevel Stripe tutorial"
publishDate: 2026-02-12
author: "Editorial Team"
featured: false
relatedArticles:
  - "how-to-set-up-gohighlevel"
  - "how-to-build-funnel-in-gohighlevel"
  - "what-is-gohighlevel-saas-mode"
  - "gohighlevel-funnel-builder"
faqs:
  - question: "Does GoHighLevel work with Stripe?"
    answer: "Yes. Stripe is GoHighLevel's primary payment integration. You can connect a Stripe account to any sub-account to accept payments through funnels, invoices, and order forms. GoHighLevel also supports NMI and Authorize.net as alternative payment processors."
  - question: "Is there a fee to use Stripe with GoHighLevel?"
    answer: "GoHighLevel does not charge an additional transaction fee on top of Stripe's standard rates. You pay Stripe's processing fee (2.9% + 30 cents per transaction in the US) and nothing extra to GoHighLevel for using the integration."
  - question: "Can I accept recurring payments in GoHighLevel with Stripe?"
    answer: "Yes. GoHighLevel supports recurring subscriptions via Stripe. You can create subscription products, set billing intervals (monthly, annually, etc.), and offer free trials. For SaaS Mode, GoHighLevel also handles subscription management for your white-label clients automatically through Stripe Connect."
  - question: "What happens if a payment fails in GoHighLevel?"
    answer: "If a Stripe payment fails (declined card, insufficient funds, etc.), GoHighLevel can trigger automation workflows on the payment failure event. You can automatically send a dunning SMS or email asking the client to update their payment method, helping recover failed payments before accounts lapse."
  - question: "Can I use GoHighLevel to send invoices?"
    answer: "Yes. GoHighLevel has a built-in Invoicing feature that connects to Stripe. You can create one-time or recurring invoices, send them to contacts via email, and track payment status — all within the platform."
---

Stripe is the backbone of payments in GoHighLevel. Whether you're selling products through a funnel, sending invoices to clients, or billing sub-accounts for your white-label SaaS, Stripe is how money moves through the platform.

This guide walks through every step of the setup and covers the different ways you'll use payments in GHL.

## Before You Start

You'll need:
- A Stripe account (free to create at stripe.com — Stripe charges processing fees per transaction, not monthly fees)
- A GoHighLevel account with at least one sub-account set up
- A verified business or personal identity in Stripe (required to receive payouts)

**Important:** Stripe must be connected separately to each sub-account where you want to accept payments. Connecting Stripe to your Agency account does not automatically connect it to sub-accounts.

## Part 1: Connect Stripe to a Sub-Account

This is the standard setup for collecting payments from clients or customers of a specific business.

### Step 1: Open the Sub-Account Settings

Log into your GoHighLevel Agency dashboard, switch into the sub-account where you want to accept payments, then go to **Settings → Payments → Integrations**.

### Step 2: Connect Stripe

Click **Connect with Stripe**. You'll be redirected to Stripe's OAuth flow.

- If you already have a Stripe account: log in and select the account to connect
- If you don't have a Stripe account: click **Create account** and follow Stripe's signup process

After authorizing, you'll be redirected back to GoHighLevel. The Payments Integrations page should now show your Stripe account as connected with a green status.

### Step 3: Set Your Currency

Go to **Settings → Payments → Settings** and confirm the currency is set correctly for your business. This affects how prices display and how Stripe processes charges.

### Step 4: Test the Connection (Recommended)

Before going live, test with a Stripe test card:
1. Go to **Payments → Products** and create a $1 test product
2. Add it to a test funnel or create a test order form
3. Use Stripe's test card number `4242 4242 4242 4242` (any future expiry, any CVV)
4. Confirm the test charge appears in your Stripe dashboard under **Test mode**

## Part 2: Create Products and Prices

Before you can sell anything, create your products in GHL.

Go to **Payments → Products → Add Product**:

- **Name** — Product or service name as it appears on receipts
- **Description** — Optional description shown on checkout
- **Price** — Set the amount
- **Pricing type:**
  - **One-time** — Single charge
  - **Recurring** — Subscription (set interval: weekly, monthly, annually, etc.)
  - **Free trial** — Recurring with a trial period before first charge
- **Image** — Optional product image for checkout pages

Save the product. It's now available to add to funnels, order forms, and invoices.

## Part 3: Accept Payments Through Funnels

### Adding a Payment Step to a Funnel

In the GoHighLevel funnel builder:

1. Add a new funnel step of type **Order Form** or **One-Step Order**
2. Open the step and drag an **Order Form** element onto the page
3. In the Order Form settings panel, click **Add Product**
4. Select the product you created
5. Configure the checkout fields (name, email, card details)
6. Save

When visitors reach this funnel step, they'll see the checkout form connected to your Stripe account.

### Adding Order Bumps

Order bumps are additional products offered on the checkout page (like "Add X for just $Y more").

In the Order Form settings:
1. Click **Add Order Bump**
2. Select the bump product
3. Write a short headline and description for the bump offer
4. Set whether it's one-time or recurring

Order bumps are checked by default or opt-in — configure based on your preference.

### Post-Purchase Automation

After a successful payment, GoHighLevel can automatically:
- Add the buyer to a pipeline stage
- Apply a tag ("Customer", "Paid")
- Trigger a fulfillment workflow (send login details, confirmation email, etc.)
- Start an onboarding sequence

Set these up in **Automation → Workflows** with the trigger **Order Placed** or **Payment Received**.

## Part 4: Send Invoices via GoHighLevel

For service businesses or agencies billing clients manually, GoHighLevel's invoicing feature connects directly to Stripe.

Go to **Payments → Invoices → Create Invoice**:

1. Select the contact (client) to invoice
2. Add line items (services, products, or custom amounts)
3. Set the due date
4. Add any notes or terms
5. Choose **Send** (emails the invoice to the client with a Stripe-powered payment link)

The client receives an email with a **Pay Now** button. Clicking it takes them to a Stripe-hosted checkout. Once paid, the invoice status updates automatically in GoHighLevel and a receipt is sent.

**Recurring invoices:** Toggle **Recurring** and set the frequency (monthly, quarterly, etc.). GoHighLevel will auto-generate and send invoices on schedule.

## Part 5: Connect Stripe for SaaS Mode (Agency Pro)

If you're running GoHighLevel as a white-label SaaS (Agency Pro plan), you connect Stripe differently — using **Stripe Connect** — so that subscription payments from your clients flow to your Stripe account.

### Step 1: Connect Stripe at the Agency Level

Go to **Agency Settings → Stripe** and connect your Stripe account. This is your master Stripe account that receives subscription revenue from your SaaS clients.

### Step 2: Configure the SaaS Configurator

Go to **Agency Settings → SaaS Configurator**:
- Create your pricing plans (Starter, Growth, Pro, etc.)
- Set monthly/annual prices for each plan
- Configure trial periods
- Enable rebilling for usage costs (SMS, email) if desired

### Step 3: Set Up Your Checkout Page

GoHighLevel provides a checkout page for new SaaS clients to sign up and enter their payment details. Customize it with your brand, product name, and plan descriptions.

When a new client signs up through your checkout:
1. They enter their card details
2. A sub-account is automatically created for them
3. Your chosen snapshot is loaded into their account
4. Stripe begins billing them on their selected plan
5. You receive the revenue in your Stripe account

## Payments Reporting

GoHighLevel's **Payments → Reporting** section shows:
- Total revenue collected
- Transactions by date range
- Revenue per product
- Subscription metrics (active subscriptions, MRR, churn)
- Failed payments and recovery rate

Cross-reference this with your Stripe dashboard for full financial reporting.

## Common Issues and Fixes

**"Stripe not connected" error on checkout:** The Stripe connection may have expired or been disconnected. Re-authorize by going to Settings → Payments → Integrations and reconnecting.

**Payments not appearing in GHL after Stripe charge:** Check that the webhook from Stripe to GHL is active. In Stripe dashboard → Developers → Webhooks, confirm the GHL webhook endpoint is listed and receiving events.

**Can't find the payment trigger in workflows:** Make sure Stripe is connected before building workflows that use payment triggers. The trigger options only appear after an active Stripe connection is detected.

**Related Guides:**
- [How to set up GoHighLevel →](/how-to-set-up-gohighlevel/)
- [How to build a funnel in GoHighLevel →](/how-to-build-funnel-in-gohighlevel/)
- [GoHighLevel funnel builder →](/gohighlevel-funnel-builder/)
