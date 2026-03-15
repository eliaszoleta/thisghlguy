---
title: "How to Create Pipelines in GoHighLevel (Step-by-Step Guide)"
description: "Learn how to create and manage sales pipelines in GoHighLevel. Covers pipeline setup, stages, moving deals, automation triggers, and reporting. Step-by-step for beginners."
category: "gohighlevel-tutorials"
keywords:
  - "how to create pipelines in GoHighLevel"
  - "GoHighLevel pipeline setup"
  - "GoHighLevel CRM pipeline"
  - "GHL pipeline tutorial"
  - "GoHighLevel sales pipeline"
publishDate: 2026-03-12
author: "Editorial Team"
featured: false
relatedArticles:
  - "gohighlevel-crm-explained"
  - "how-to-create-automations-in-gohighlevel"
  - "how-to-set-up-gohighlevel"
  - "how-to-import-contacts-gohighlevel"
faqs:
  - question: "What is a pipeline in GoHighLevel?"
    answer: "A pipeline in GoHighLevel is a visual board that tracks where each lead or deal is in your sales process. It's organized as columns (stages), and each contact appears as a card that moves from stage to stage as they progress — similar to a Kanban board. Pipelines help you see your entire sales funnel at a glance."
  - question: "How many pipelines can you create in GoHighLevel?"
    answer: "GoHighLevel does not limit the number of pipelines per sub-account. You can create as many pipelines as you need — one per service line, one per client type, or any other structure that fits your business."
  - question: "Can GoHighLevel automatically move contacts through a pipeline?"
    answer: "Yes. GoHighLevel's workflow automation can automatically move contacts from one pipeline stage to another based on triggers — such as a form submission, a tag being added, or an appointment being booked. This keeps your pipeline updated without manual intervention."
  - question: "What is the difference between a contact and an opportunity in GoHighLevel?"
    answer: "A contact is a person stored in your CRM (name, email, phone). An opportunity is the specific deal or lead associated with that contact in a pipeline. One contact can have multiple opportunities across different pipelines — for example, a contact who is both a current client and a new upsell prospect."
  - question: "Can I use GoHighLevel pipelines for client fulfillment, not just sales?"
    answer: "Yes. Many agencies build fulfillment pipelines in GoHighLevel alongside their sales pipelines. For example: Onboarding → Setup → In Progress → Review → Delivered → Done. Pipelines work for any process with defined stages, not just selling."
---

GoHighLevel's pipeline feature gives you a visual, real-time view of where every lead and deal stands in your sales process. Instead of chasing contacts through a spreadsheet or relying on memory, you see each opportunity as a card on a board — and you can move it, automate it, and report on it.

This guide walks through creating your first pipeline and using it effectively.

## What Is a Pipeline in GoHighLevel?

A pipeline is a Kanban-style board with columns representing stages in your sales process. Each contact (or deal) appears as a card in one column and moves right as they progress.

**Example pipeline for a marketing agency:**

| New Lead | Contacted | Proposal Sent | Negotiating | Closed Won | Closed Lost |
|---|---|---|---|---|---|
| 12 leads | 8 leads | 5 leads | 3 leads | 2 clients | 4 leads |

At a glance, you know you have 12 new leads you haven't contacted yet, 5 proposals outstanding, and 3 deals in negotiation. That visibility is what a pipeline gives you.

## Step 1: Create a New Pipeline

1. Inside your sub-account, go to **CRM** in the left sidebar (sometimes labeled **Opportunities**)
2. Click the **Pipelines** tab at the top or look for **+ New Pipeline**
3. Click **+ Create Pipeline**
4. Give your pipeline a name — be specific: "Agency Sales", "Client Onboarding", "Facebook Leads"
5. Click **Create**

You now have a blank pipeline with no stages.

## Step 2: Add Stages to Your Pipeline

Stages are the columns in your pipeline. Design them to match your actual sales process.

1. Inside your new pipeline, click **+ Add Stage**
2. Name the stage (e.g., "New Lead")
3. Repeat to add all stages in your process

**Click and drag stages** to reorder them at any time.

### Common pipeline stage structures

**For agencies selling marketing services:**
- New Lead → Contacted → Discovery Call Booked → Proposal Sent → Negotiating → Closed Won → Closed Lost

**For local service businesses:**
- Inquiry → Quote Sent → Follow Up → Booked → Job Completed → Invoice Sent → Paid

**For SaaS or software demos:**
- Trial Signup → Demo Booked → Demo Completed → Proposal → Contract Sent → Onboarding

**For fulfillment tracking:**
- Kickoff → Strategy → In Production → Client Review → Revision → Delivered → Done

Keep stages actionable — each one should represent a specific point in the process with a clear next step.

## Step 3: Add Opportunities (Deals) to Your Pipeline

An opportunity is the deal card inside the pipeline. Each opportunity is linked to a contact.

### Manually adding an opportunity:

1. Click the **+** button at the top of any pipeline stage column
2. Fill in the opportunity details:
   - **Contact** — search and select an existing contact, or create a new one
   - **Opportunity Name** — usually the service or deal type (e.g., "SEO Package", "Website Build")
   - **Value** — the deal amount (optional but useful for revenue reporting)
   - **Pipeline** — confirm which pipeline
   - **Stage** — which column to place it in
   - **Close Date** — expected close date (optional)
   - **Assigned To** — which team member owns this deal
3. Click **Save**

The opportunity card appears in the correct stage column.

### Moving contacts from your CRM to a pipeline:

1. Go to **Contacts**
2. Open a contact record
3. Scroll to find the **Opportunities** section
4. Click **+ Add Opportunity**
5. Select the pipeline and stage

## Step 4: Move Opportunities Through Stages

As a lead progresses, drag their card to the next stage.

1. Click and hold the opportunity card
2. Drag it to the new stage column
3. Release to drop it there

That's it. The contact's pipeline history updates automatically, so you can always see when they moved and from which stage.

You can also open the opportunity card and change the stage from the dropdown inside — useful on mobile or when editing details at the same time.

## Step 5: Automate Pipeline Movement with Workflows

Manually moving cards works, but the real power comes from automation. GoHighLevel can move contacts through your pipeline automatically based on what they do.

### Example: Auto-move to "Contacted" when you send a first message

1. Go to **Automation → Workflows**
2. Click **+ New Workflow**
3. Set the trigger: **Outbound Message Sent** (or **SMS Sent**, depending on your version)
4. Add an action: **Move Opportunity to Stage → Contacted**
5. Save and activate

### Common pipeline automation triggers

| Trigger | Automated Action |
|---|---|
| Form submitted | Create opportunity in "New Lead" stage |
| Appointment booked | Move to "Discovery Call Booked" |
| Appointment completed | Move to "Proposal Sent" |
| Tag added: "Interested" | Move to "Negotiating" |
| Payment received | Move to "Closed Won" |
| No response after 14 days | Move to "Closed Lost" |

This keeps your pipeline accurate without anyone having to remember to update it.

### Auto-create an opportunity when a form is submitted:

1. New Workflow → Trigger: **Form Submitted**
2. Action: **Create or Update Opportunity**
3. Set: Pipeline = "Agency Sales", Stage = "New Lead", Value = your average deal size
4. Save and activate

Now every new lead automatically appears in your pipeline the moment they opt in.

## Step 6: Use Opportunity Filters and Views

As your pipeline fills up, filtering helps you focus.

In the pipeline view, use the top filter bar to show only:
- Opportunities assigned to a specific team member
- Opportunities in a specific date range
- Opportunities above/below a certain deal value
- Opportunities with a specific tag or status

You can also switch between **Kanban view** (columns) and **List view** (table) depending on what you're doing. List view is better for bulk actions and sorting; Kanban is better for visual pipeline management.

## Step 7: Track Pipeline Revenue

GoHighLevel shows pipeline value totals at the top of each stage column — the sum of all opportunity values in that stage.

For a complete revenue report:

1. Go to **Reporting → Opportunities** (or **Dashboard → Opportunity Report**)
2. View:
   - Total pipeline value (all open deals)
   - Won revenue (closed won)
   - Lost revenue (closed lost)
   - Conversion rate by stage
   - Average deal size
   - Average time in each stage

This data tells you where deals are stalling and where your pipeline is healthy.

## Step 8: Set Up Multiple Pipelines

One pipeline is rarely enough for a growing agency. Create separate pipelines for:

- **Sales pipeline** — inbound and outbound lead tracking
- **Onboarding pipeline** — new client setup progress
- **Fulfillment pipeline** — active project status
- **Renewal pipeline** — clients whose contracts are expiring

To switch between pipelines, use the pipeline selector dropdown at the top of the Opportunities view.

## Customizing Opportunity Fields

Each opportunity can store more than just name and value. Add custom fields to track what matters for your business.

1. Go to **Settings → Custom Fields**
2. Click **+ Add Field**
3. Choose the field type: text, number, dropdown, date, checkbox
4. Assign it to **Opportunities**
5. Name it (e.g., "Lead Source", "Contract Length", "Service Type")

Custom fields appear inside each opportunity card and can be used as filters and in automation conditions.

## Common Mistakes to Avoid

**Too many stages.** More than 8–10 stages becomes unwieldy. Combine stages that happen close together or automatically. You want visibility, not complexity.

**No automation connected.** A pipeline you update manually is better than nothing, but a pipeline that updates itself keeps you honest. Connect at least the entry and exit automations.

**Not assigning opportunities to team members.** Without ownership, nobody knows whose job it is to follow up. Every opportunity should have an assigned user.

**Ignoring the "Closed Lost" stage.** Tracking why deals are lost is as valuable as tracking wins. Add a "lost reason" custom field and fill it in — the data will tell you where your sales process is breaking down.

**One pipeline for everything.** Sales and fulfillment are different processes. Mix them together and your pipeline becomes noise. Keep them separate from the start.

---

A well-maintained pipeline changes how you run your business. Instead of reacting to whoever contacted you most recently, you manage by data — you know exactly how many leads are in each stage, what the total pipeline value is, and which deals need attention today.

**[Try GoHighLevel free for 14 days →](https://www.gohighlevel.com/?fp_ref=thisghlguy)**

**Also read:**
- [GoHighLevel CRM explained →](/gohighlevel-crm-explained/)
- [How to create automations in GoHighLevel →](/how-to-create-automations-in-gohighlevel/)
- [How to import contacts into GoHighLevel →](/how-to-import-contacts-gohighlevel/)
