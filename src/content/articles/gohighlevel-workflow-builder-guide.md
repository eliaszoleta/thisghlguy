---
title: "GoHighLevel Workflow Builder Guide: How to Use It (With Screenshots Explained)"
description: "A complete guide to the GoHighLevel workflow builder — how to navigate it, add triggers and actions, use branches, set delays, and publish your first automation."
category: "gohighlevel-automation"
keywords:
  - "GoHighLevel workflow builder"
  - "GoHighLevel workflow builder guide"
  - "GHL workflow builder tutorial"
  - "GoHighLevel automation builder"
  - "how to use GoHighLevel workflows"
publishDate: 2025-03-08
author: "Editorial Team"
featured: false
relatedArticles:
  - "how-to-create-automations-in-gohighlevel"
  - "gohighlevel-automation-explained"
  - "how-gohighlevel-automations-work"
  - "gohighlevel-automation-workflows"
faqs:
  - question: "Where is the workflow builder in GoHighLevel?"
    answer: "The workflow builder is located inside any sub-account under Automation → Workflows. Click 'Create Workflow' to open the builder."
  - question: "Can I use templates in the GoHighLevel workflow builder?"
    answer: "Yes. When you create a new workflow, GoHighLevel offers a library of pre-built templates for common use cases like lead follow-up, appointment reminders, and review requests. You can also start from scratch."
  - question: "How do I test a workflow before publishing it?"
    answer: "You can test a workflow by creating a test contact and using the 'Add to Workflow' option from the contact record. This manually enrolls the contact so you can watch each step execute in real time."
  - question: "Can I duplicate a workflow in GoHighLevel?"
    answer: "Yes. In the Workflows list view, each workflow has a duplicate option. This creates an exact copy that you can modify without affecting the original."
  - question: "What is the difference between Draft and Published in GoHighLevel workflows?"
    answer: "Draft workflows are saved but not active — no contacts can be enrolled. Published workflows are live and will enroll contacts as soon as a trigger condition is met. You can switch between states at any time."
---

The GoHighLevel workflow builder is where all automation gets built. Whether you're creating a simple 3-step follow-up or a complex multi-branch nurture sequence, everything runs through this canvas-based editor.

This guide walks you through every part of the workflow builder so you can use it confidently from day one.

## How to Access the Workflow Builder

1. Log into your GoHighLevel account
2. Select or enter a **sub-account**
3. In the left sidebar, click **Automation**
4. Click **Workflows**
5. Click **+ Create Workflow**

You'll be prompted to either start from scratch or choose from a template library. For your first workflow, choose **Start from Scratch** to see how it all fits together.

## The Workflow Builder Interface

The builder has three main areas:

**Left panel — Trigger and action list:** A vertical list of every trigger and action in your workflow, in order from top to bottom.

**Center canvas:** A visual map of your workflow showing how steps connect, including branches from If/Else conditions.

**Right panel — Step configuration:** When you click any step, the configuration options appear here.

**Top bar — Workflow controls:** Workflow name, save button, Draft/Published toggle, and settings.

## Step 1: Name Your Workflow

Click the default workflow name at the top and replace it with something descriptive. Use a naming convention that will make sense when you have 20+ workflows:

**Good examples:**
- `[New Lead] Instant Follow-Up Sequence`
- `[Appointment] Reminder - 24hr + 2hr`
- `[Post-Service] Review Request`

A consistent naming format saves time when you're managing a large workflow library.

## Step 2: Add a Trigger

Click **Add New Trigger** to open the trigger selection panel.

GoHighLevel groups triggers into categories:
- **Contact** (contact created, tag added, field updated)
- **Appointments** (booked, cancelled, status changed)
- **Forms / Surveys** (submitted)
- **Opportunities / Pipeline** (stage changed, status changed)
- **Payments** (received, failed, subscription events)
- **Communications** (inbound SMS, missed call, email events)
- **Facebook / Instagram** (lead ad submitted)
- **Webhooks** (custom external triggers)

After selecting a trigger type, configure its **filters** in the right panel. Filters narrow the trigger to specific conditions — for example, "Form Submitted" filtered to only the "Contact Us" form on your website.

**Multiple triggers:** You can add more than one trigger to a single workflow. If any trigger fires, the workflow activates. This is useful for catching leads from multiple sources in one workflow.

## Step 3: Add Actions

Click the **+** button below the trigger to add your first action.

Actions are grouped into categories in the selection panel:
- **Messaging** — Send SMS, email, voicemail drop, Facebook DM, WhatsApp
- **Internal** — Send internal notification, create task
- **Contact** — Add/remove tag, update contact field
- **Opportunities** — Create opportunity, update pipeline stage
- **Workflow** — Add to workflow, remove from workflow, go to step
- **Logic** — Wait, If/Else
- **Integrations** — Webhook, Google Sheets, Zoom

After adding an action, click it to configure the details in the right panel. For a Send SMS action, you'll write your message text, add personalization variables (like `{{contact.first_name}}`), and optionally attach media.

## Step 4: Add Wait Steps

Between actions, add a **Wait** step to control timing.

In the right panel for a Wait step, you choose:
- **Duration:** Wait for a fixed amount of time (e.g., 30 minutes, 4 hours, 2 days)
- **Until a specific time:** Wait until a particular time of day (e.g., 9:00 AM)
- **Until event occurs:** Wait until a specific trigger event happens (e.g., contact replies, appointment status changes)

For a lead follow-up sequence, typical timing looks like:
- Send SMS immediately
- Wait 30 minutes
- Check for reply (If/Else)
- Wait 4 hours
- Send email if no reply
- Wait 24 hours
- Send voicemail if still no reply

## Step 5: Add If/Else Branches

The **If/Else** action creates conditional branches — different paths for different contact behaviors.

After adding an If/Else step, the canvas splits into two branches: **Yes** (condition is true) and **No** (condition is false).

**Configuring the condition:**
1. Click the If/Else step
2. In the right panel, click **Add Condition**
3. Select the field or event to evaluate (e.g., "Contact replied to SMS")
4. Set the operator (equals, contains, is set, etc.)
5. Set the value if required

You can add multiple conditions with AND/OR logic.

**Adding actions to each branch:** Click the **+** button in either the Yes or No path to add actions specific to that branch. Each branch can have its own sequence of actions and wait steps.

## Step 6: Configure Workflow Settings

Click the **Settings** gear icon in the top bar to access:

**Stop on Response:** When enabled, the workflow pauses if the contact replies to an SMS or email. Highly recommended for all outbound messaging workflows.

**Re-entry:** Controls whether a contact can enter the workflow again after completing it. Options: allow always, allow after a time period, never allow.

**Allow multiple active enrollments:** Controls whether a contact can be in the same workflow more than once simultaneously (rare use case).

**Contact timezone:** Sets whether timing follows the account timezone or the contact's detected timezone.

## Step 7: Publish the Workflow

When you're ready to go live:

1. Click the **Draft** toggle in the top bar to switch to **Published**
2. Confirm in the prompt

Once published, the workflow is live. Any contact who meets the trigger condition from this point forward will be enrolled.

**Important:** Publishing does not retroactively enroll contacts. Only new trigger events after publication will start the workflow for contacts.

## Testing Before You Publish

Before publishing any new workflow, always test it:

1. Create a test contact with your own phone number and email
2. From the contact record, click **Add to Workflow** and select your workflow
3. Watch the workflow execute — verify SMS and email content, timing, and branching
4. Check the contact's **Activity** tab to see each step logged

This catches typos in messages, broken links, and logic errors before real leads experience them.

## Managing Your Workflow Library

Once you have multiple workflows, the Workflows list view becomes important:

- **Search and filter** by status (Draft / Published) or keyword
- **Folders** let you organize workflows by type or client
- **Duplicate** to create variations of existing workflows
- **Analytics** column shows enrollment and goal conversion rates at a glance

## Common Workflow Builder Mistakes

**Not testing before publishing.** Always test. Typos in automated messages are embarrassing and hard to undo.

**Building one massive workflow.** Keep workflows focused on one job. A 30-step workflow with multiple goals is hard to debug. Break it into smaller, linked workflows.

**Forgetting Stop on Response.** Without this, contacts who reply to your SMS will continue receiving automated follow-up, which feels tone-deaf and damages trust.

**Not naming workflows clearly.** You'll regret generic names like "Workflow 1" when you have 40 workflows.

**[Start your 14-day GoHighLevel free trial →](https://www.gohighlevel.com/?fp_ref=thisghlguy)**

**Also read:**
- [How to create an automation in GoHighLevel →](/how-to-create-automations-in-gohighlevel/)
- [How GoHighLevel automations work →](/how-gohighlevel-automations-work/)
- [GoHighLevel automation workflows →](/gohighlevel-automation-workflows/)
