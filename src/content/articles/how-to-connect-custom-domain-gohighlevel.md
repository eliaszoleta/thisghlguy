---
title: "How to Connect a Custom Domain in GoHighLevel (Step-by-Step)"
description: "A complete guide to connecting a custom domain to GoHighLevel — for funnels, websites, client portals, and email sending. Includes DNS setup instructions for all major registrars."
category: "gohighlevel-tutorials"
keywords:
  - "connect custom domain GoHighLevel"
  - "GoHighLevel custom domain setup"
  - "GHL domain setup"
  - "GoHighLevel domain DNS"
  - "GoHighLevel funnel custom domain"
publishDate: 2026-03-06
author: "Editorial Team"
featured: false
relatedArticles:
  - "how-to-set-up-gohighlevel"
  - "how-to-build-funnel-in-gohighlevel"
  - "gohighlevel-funnel-builder"
  - "gohighlevel-email-marketing"
faqs:
  - question: "How do I connect a custom domain to GoHighLevel funnels?"
    answer: "Go to Settings → Domains in your sub-account, click Add Domain, enter your domain or subdomain, then add the provided CNAME record to your domain's DNS settings through your registrar. Once DNS propagates (usually 15 minutes to a few hours), the domain is connected and can be assigned to any funnel or website."
  - question: "Do I need a separate domain for each GoHighLevel sub-account?"
    answer: "Not necessarily, but it's recommended. You can use subdomains of one root domain for multiple clients (e.g., client1.yourdomain.com, client2.yourdomain.com). However, for professional presentation, most agencies buy separate domains for each client or use the client's own existing domain."
  - question: "How long does DNS propagation take for GoHighLevel?"
    answer: "DNS changes typically propagate within 15 minutes to 2 hours, though in some cases it can take up to 48 hours. Most users see their domain working in GoHighLevel within 30–60 minutes of adding the DNS record correctly."
  - question: "Can I use my existing domain with GoHighLevel without changing my main website?"
    answer: "Yes. Use a subdomain instead of your root domain. For example, if your main site is at yourbusiness.com, you can connect funnels.yourbusiness.com or go.yourbusiness.com to GoHighLevel without affecting your main website at all."
  - question: "Do I need to buy a domain through GoHighLevel?"
    answer: "No. You can use any domain you own from any registrar (GoDaddy, Namecheap, Cloudflare, Google Domains, etc.). GoHighLevel provides the DNS records you need to point your domain to their servers."
---

Connecting a custom domain to GoHighLevel is one of the first setup steps for any serious agency or business using the platform. Without it, your funnels and websites show on GoHighLevel's default subdomain — not your brand's URL.

This guide covers every type of domain connection in GoHighLevel: funnels and websites, the client portal, and email sending.

## Types of Domain Connections in GoHighLevel

There are three distinct places you connect domains in GHL, and each serves a different purpose:

1. **Funnel / Website domain** — The URL your landing pages and funnels are served from (e.g., `offers.yourbusiness.com`)
2. **Email sending domain** — A subdomain used for sending email so it comes from your brand (e.g., `mail.yourbusiness.com`)
3. **Agency white-label domain** — The domain your clients use to log into your white-label GHL portal (SaaS Mode only)

Each is configured in a different place in GoHighLevel.

## Part 1: Connect a Domain for Funnels and Websites

### Step 1: Choose Your Domain or Subdomain

Decide whether you're connecting:
- **A root domain** (`yourbusiness.com`) — Points all traffic on that domain to GHL. Good if you're building your entire site in GHL.
- **A subdomain** (`funnels.yourbusiness.com`, `go.yourbusiness.com`, `offers.yourbusiness.com`) — Keeps your main website separate. Recommended for most agencies.

Using a subdomain is generally safer and more flexible — your main website stays untouched while GHL gets its own space.

### Step 2: Add the Domain in GoHighLevel

Inside the sub-account:

1. Go to **Settings → Domains**
2. Click **Add Domain**
3. Type your domain or subdomain (e.g., `funnels.yourbusiness.com`)
4. Click **Add**

GoHighLevel will display the DNS record you need to add. It will be a **CNAME record** pointing to a GoHighLevel server address (something like `sites.msgsndr.com`).

Write down or copy:
- **Record type:** CNAME
- **Name/Host:** the subdomain part (e.g., `funnels`)
- **Value/Points to:** the GHL server address

### Step 3: Add the DNS Record at Your Registrar

Log into wherever your domain is managed (GoDaddy, Namecheap, Cloudflare, Google Domains, etc.) and add the CNAME record.

**GoDaddy:**
Domain → DNS Management → Add Record → Type: CNAME → Host: [subdomain] → Points to: [GHL address] → Save

**Namecheap:**
Domain List → Manage → Advanced DNS → Add New Record → CNAME Record → Host: [subdomain] → Value: [GHL address] → Save

**Cloudflare:**
Domain → DNS → Add Record → Type: CNAME → Name: [subdomain] → Target: [GHL address] → **Set proxy status to DNS Only (grey cloud)** → Save

**Google Domains / Squarespace DNS:**
DNS → Custom Records → Create new record → Type: CNAME → Host: [subdomain] → Data: [GHL address]

**Important for Cloudflare users:** Turn off the orange cloud proxy for this CNAME record. Set it to DNS Only (grey cloud). GoHighLevel handles its own SSL and the Cloudflare proxy can cause SSL certificate conflicts.

### Step 4: Wait for DNS Propagation

DNS changes take 15 minutes to a few hours to propagate globally. You can check propagation status at [dnschecker.org](https://dnschecker.org) — enter your domain and look for the CNAME record to show the GHL address.

### Step 5: Verify in GoHighLevel

Return to **Settings → Domains** in the sub-account. The domain status should show **Verified** or **Active** once DNS has propagated. If it still shows as pending after a few hours, recheck that the CNAME record was added correctly.

### Step 6: Assign the Domain to a Funnel or Website

Connecting a domain makes it available — assigning it activates it for a specific funnel or website:

**For funnels:**
1. Go to **Sites → Funnels → [Select Funnel]**
2. Click **Settings** (top right)
3. Under **Domain**, select your connected domain from the dropdown
4. Set the path (e.g., `/free-estimate` or leave blank for root)
5. Save

**For websites:**
1. Go to **Sites → Websites → [Select Website]**
2. Click **Settings**
3. Select the domain
4. Save

Your funnel or website is now live at your custom domain with SSL (HTTPS) automatically configured by GoHighLevel.

## Part 2: Connect a Sending Domain for Email

A sending domain (sometimes called an email domain) is what your emails appear to come from. Without it, your emails send from a GoHighLevel shared domain — which hurts deliverability.

This is one of the most important setups for any account that sends marketing emails.

### Step 1: Choose Your Sending Subdomain

Use a subdomain of your business domain:
- `mail.yourbusiness.com`
- `em.yourbusiness.com`
- `news.yourbusiness.com`

Don't use your root domain for sending — use a dedicated subdomain. This protects your root domain's reputation if sending issues occur.

### Step 2: Add the Sending Domain in GoHighLevel

Go to **Settings → Email Services → Dedicated Sending Domain**:

1. Click **Add Domain**
2. Enter your chosen subdomain
3. GoHighLevel will generate three DNS records you need to add:
   - **SPF record** (TXT record) — tells receiving servers that GHL is authorized to send from your domain
   - **DKIM record** (TXT record) — cryptographic signature that verifies email authenticity
   - **DMARC record** (TXT record) — policy for handling emails that fail SPF/DKIM

### Step 3: Add the Three DNS Records

Add all three TXT records to your domain's DNS at your registrar. The exact values are provided by GoHighLevel on the setup screen — copy them exactly.

**SPF example:**
- Type: TXT
- Host: `@` or `mail` (depending on which subdomain)
- Value: `v=spf1 include:sendgrid.net ~all` (GHL provides the exact value)

**DKIM example:**
- Type: TXT
- Host: `em._domainkey.mail` (GHL provides exact host)
- Value: a long string starting with `v=DKIM1;`

**DMARC example:**
- Type: TXT
- Host: `_dmarc`
- Value: `v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com`

### Step 4: Verify the Records

Back in GoHighLevel, click **Verify Records**. GoHighLevel checks each record and shows a green checkmark when found. If any record fails verification:
- Double-check you copied the value exactly (no extra spaces)
- Confirm DNS has propagated (check with dnschecker.org)
- Ensure you added it to the correct domain/subdomain

Once all three records verify, your sending domain is active. Emails from this sub-account will now send from your domain.

## Part 3: Connect a White-Label Domain (SaaS Mode)

If you're running a white-label GoHighLevel SaaS (Agency Pro plan), you need a custom domain for your client login portal — so clients log in at `app.yoursaas.com` instead of `app.gohighlevel.com`.

### Step 1: Choose Your Portal Domain

This should be a subdomain of your SaaS brand domain:
- `app.yoursaasname.com`
- `portal.yoursaasname.com`
- `login.yoursaasname.com`

### Step 2: Configure in Agency Settings

Go to **Agency Settings → White Label Mobile App** or **Agency Settings → SaaS Configurator** → locate the custom domain field.

Enter your subdomain and GoHighLevel will provide a CNAME record to add.

### Step 3: Add the CNAME at Your Registrar

Same process as the funnel domain CNAME setup above. Add the CNAME record, wait for propagation, and verify in GoHighLevel.

Once active, your clients access their GoHighLevel sub-accounts through your branded portal URL.

## Troubleshooting Common Issues

**Domain shows "pending" for more than 24 hours:**
- Verify the CNAME record exists using dnschecker.org
- Check that you added it to the correct domain (easy to accidentally add to the wrong subdomain)
- If using Cloudflare, make sure the proxy is disabled (grey cloud, not orange)

**SSL certificate error on your custom domain:**
- GoHighLevel provisions SSL certificates automatically but it can take up to 24 hours after DNS propagation
- If it's been more than 24 hours, try removing and re-adding the domain in GHL settings

**Emails going to spam after setting up sending domain:**
- Verify all three records (SPF, DKIM, DMARC) are correctly verified in GoHighLevel
- Check your DMARC policy — start with `p=none` while monitoring, then tighten to `p=quarantine` or `p=reject` over time
- Warm up the domain gradually (don't send thousands of emails on day one)

**Funnel URL shows blank page after domain connection:**
- Make sure you've assigned the domain to the funnel in the funnel settings (connecting the domain and assigning it to a funnel are two separate steps)

**Related Guides:**
- [How to set up GoHighLevel →](/how-to-set-up-gohighlevel/)
- [GoHighLevel email marketing →](/gohighlevel-email-marketing/)
- [How to build a funnel in GoHighLevel →](/how-to-build-funnel-in-gohighlevel/)
