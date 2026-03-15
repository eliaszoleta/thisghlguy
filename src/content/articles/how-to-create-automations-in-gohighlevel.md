---
title: "How to Create Automations in GoHighLevel (Step-by-Step Guide)"
description: "Learn how to build powerful automations in GoHighLevel from scratch. This step-by-step guide covers triggers, actions, conditions, and real-world workflow examples."
category: "gohighlevel-automation"
keywords:
  - "how to create automations in GoHighLevel"
  - "GoHighLevel automation tutorial"
  - "GoHighLevel workflow builder"
  - "GoHighLevel automation examples"
  - "GoHighLevel workflows guide"
publishDate: 2025-03-01
author: "Editorial Team"
featured: false
relatedArticles:
  - "gohighlevel-automation-workflows"
  - "gohighlevel-crm-explained"
  - "how-to-set-up-gohighlevel"
  - "gohighlevel-funnel-builder"
  - "what-is-gohighlevel"
faqs:
  - question: "What triggers are available in GoHighLevel automations?"
    answer: "GoHighLevel offers dozens of triggers including form submitted, appointment booked, tag added, pipeline stage changed, payment received, email opened, link clicked, missed call, and many more. You can also use custom webhook triggers to connect external tools."
  - question: "Can GoHighLevel automations send SMS messages?"
    answer: "Yes. SMS is a native action in GoHighLevel workflows. You can send personalized SMS messages using contact data variables, set time delays, and include opt-out compliance language automatically."
  - question: "How many automations can I create in GoHighLevel?"
    answer: "There is no documented limit on the number of workflows you can create. You can build as many automations as your business needs."
  - question: "Can I use if/else conditions in GoHighLevel workflows?"
    answer: "Yes. GoHighLevel supports conditional branching using 'If/Else' actions. You can branch logic based on contact fields, tags, pipeline stage, custom values, and more."
  - question: "Does GoHighLevel have a visual workflow builder?"
    answer: "Yes. GoHighLevel uses a visual drag-and-drop workflow builder where you can see the entire automation flow on a canvas — triggers on the left branching into action sequences."
---

GoHighLevel's automation system is its most powerful feature. When set up correctly, it can follow up with leads automatically, book appointments, send review requests, nurture prospects over weeks, and handle entire client onboarding sequences — all without manual intervention.

This guide walks you through how to create automations in GoHighLevel, from your first simple workflow to multi-branch conditional sequences.

## Understanding GoHighLevel Automation Structure

Every GoHighLevel automation (called a **Workflow**) has three core components:

1. **Trigger** — The event that starts the workflow (e.g., form submitted, tag added)
2. **Actions** — What happens after the trigger (send email, send SMS, add tag, wait, etc.)
3. **Conditions** — Optional logic that branches the workflow differently depending on the contact's data

Think of a workflow as a decision tree: something happens → GoHighLevel does something → optionally checks a condition → does something else.

---

## Getting Started: Accessing the Workflow Builder

1. Log into your GoHighLevel account
2. Navigate to the sub-account you want to work in
3. Click **Automation** in the left sidebar
4. Click **Workflows**
5. Click **+ New Workflow**

You'll be prompted to start from a template or from scratch. For this guide, choose **Start from Scratch**.

---

## Step 1: Add a Trigger

The trigger is the starting point. Click **Add New Trigger** to see the full list.

**Common triggers:**

| Trigger | When to use |
|---|---|
| Form Submitted | Lead fills out a form on your funnel or website |
| Appointment Booked | Contact books a call via GHL calendar |
| Tag Added | Contact receives a specific tag (great for manual triggers) |
| Pipeline Stage Changed | Contact moves to a new stage in your CRM |
| Missed Call | Contact called but no one answered |
| Payment Received | Contact completes a purchase |
| Inbound Webhook | External tool sends data to GoHighLevel |
| Contact Created | Any new contact is added to the system |

**Example:** Select **Form Submitted**. Then choose which form triggers this workflow. You can choose a specific form or trigger on any form.

### Trigger Filters

After selecting the trigger, you can add filters to narrow down when the workflow fires. For example:

- Only fire if the form is from sub-page "Home Page"
- Only fire if the contact has no previous tag "Customer"

This prevents the same workflow from running twice on the same contact.

---

## Step 2: Add Your First Action

Click the **+** button below the trigger to add an action.

**Most-used actions:**

### Send Email
Choose a pre-built email template or write one inline. Use variables to personalize:
- `{{contact.first_name}}` — inserts the contact's first name
- `{{contact.email}}` — inserts their email
- `{{appointment.date}}` — inserts appointment date

### Send SMS
Write your SMS message. Keep it under 160 characters to avoid multi-part SMS charges. Example:
```
Hey {{contact.first_name}}, thanks for reaching out! We'll be in touch within 24 hours. - {{agency.name}}
```

### Wait
Add a delay before the next action. Options:
- Wait X minutes / hours / days
- Wait until a specific day/time (e.g., send only on weekdays between 9am–5pm)
- Wait for an event (e.g., wait until the contact opens an email)

### Add Tag
Tags organize contacts and can trigger other workflows. Use descriptive names like `lead-new`, `appointment-booked`, or `customer-active`.

### Remove Tag
Remove tags when a contact progresses to a new stage.

### Update Contact Field
Automatically update a contact's CRM field based on workflow events. Useful for tracking lead source, last contact date, or funnel stage.

### Create Task
Assigns a follow-up task to a team member inside GoHighLevel.

### Add to Pipeline
Moves the contact into a specific pipeline and stage — visible in your CRM board view.

### Internal Notification
Sends an email or SMS to your team when something happens (e.g., "New lead came in from the website").

---

## Step 3: Add Conditions (If/Else Branches)

For more sophisticated workflows, add conditional logic. Click **+** and select **If/Else**.

You'll see a branch in the canvas: one path for "True" (condition met), one for "False" (condition not met).

**Example condition:** Check if the contact has the tag "Existing Customer"
- **True path:** Send a returning-customer welcome email
- **False path:** Send a new-lead introductory sequence

**You can condition on:**
- Contact fields (name, email, phone, custom fields)
- Tags present or absent
- Pipeline stage
- Appointment status
- Custom values
- Time of day / day of week

You can stack multiple conditions using AND / OR logic.

---

## Step 4: Configure Workflow Settings

Before activating, review these settings at the top of the workflow:

- **Workflow Name** — Give it a clear, descriptive name (e.g., "New Lead - Website Form - Follow-Up Sequence")
- **Allow Re-Entry** — Should a contact enter this workflow again if they trigger it twice? Usually set to No for one-time sequences.
- **Stop on Response** — If the contact replies to an SMS or email, should the workflow pause? Yes is usually best practice to avoid awkward automated messages after a human conversation starts.

---

## Step 5: Test the Workflow

Before going live, test it:

1. Create a test contact in your CRM
2. Manually trigger the workflow on that contact (Actions → Add to Workflow)
3. Watch the **Execution Logs** to verify each step fires correctly
4. Check that emails and SMS arrive and look correct

---

## Step 6: Publish the Workflow

Toggle the workflow status from **Draft** to **Published**. The workflow is now live and will fire automatically whenever the trigger condition is met.

---

## Real-World Automation Examples

### Example 1: New Lead Follow-Up Sequence

**Trigger:** Form Submitted (lead capture form)

1. Send Email: "Thanks for reaching out — here's what to expect"
2. Send SMS: "Hey {{contact.first_name}}, got your message! I'll be in touch shortly."
3. Internal Notification: Email team member "New lead from website"
4. Wait: 1 day
5. Send Email: "A quick case study you might find helpful"
6. Wait: 2 days
7. Send SMS: "Did you get a chance to check your email? Happy to answer any questions."
8. Wait: 3 days
9. If/Else: Has tag "Appointment Booked"?
   - True: End workflow (contact already booked)
   - False: Send final follow-up email with booking link

### Example 2: Appointment Reminder Sequence

**Trigger:** Appointment Booked

1. Send Email: Booking confirmation with calendar invite
2. Add Tag: `appointment-booked`
3. Wait: Until 24 hours before appointment
4. Send SMS: "Reminder: your call is tomorrow at {{appointment.time}}. Reply STOP to cancel."
5. Wait: Until 1 hour before appointment
6. Send SMS: "Your call starts in 1 hour. Join here: {{appointment.join_link}}"

### Example 3: Missed Call Text-Back

**Trigger:** Missed Call

1. Wait: 1 minute
2. Send SMS: "Hi {{contact.first_name}}, sorry we missed your call! We'll call back shortly. In the meantime, book a time here: [link]"
3. Add Tag: `missed-call`
4. Internal Notification: Alert team member of missed call

### Example 4: Post-Purchase Review Request

**Trigger:** Pipeline Stage Changed to "Project Completed"

1. Wait: 2 days
2. Send Email: Thank-you email + review request link
3. Wait: 3 days
4. If/Else: Has tag "Left Review"?
   - True: End workflow
   - False: Send SMS follow-up asking for review

---

## Common Mistakes to Avoid

**1. Not setting "Stop on Response"**
Without this, a contact who replies to your SMS will keep receiving automated messages — very bad for the client relationship.

**2. No tag-based exit conditions**
Always build in a way for contacts to exit the workflow if they take the desired action (book, buy, respond). Otherwise they get the full sequence even after converting.

**3. Sending too fast**
A sequence that fires 3 messages in 10 minutes feels spammy. Use Wait steps to space messages naturally.

**4. Generic messages**
Use contact variables (`{{contact.first_name}}`) in every message. "Hey John" outperforms "Hey there" every time.

**5. Not testing before publishing**
Always run a test contact through before going live. Small mistakes (broken links, typos, wrong attachments) are easy to catch and costly to miss.

---

## Tips for More Effective Automations

- **Keep workflows focused** — one workflow per goal. Don't build one massive workflow that tries to do everything.
- **Name tags clearly** — Use a consistent naming convention like `status-lead`, `status-customer`, `source-facebook-ad`
- **Use internal notifications** — Keep your team informed about high-value triggers
- **Review execution logs regularly** — Check for workflow errors or contacts getting stuck
- **Clone and modify** — Use the Clone function to copy a working workflow and adapt it for a new use case

---

## The Bottom Line

GoHighLevel's workflow builder is genuinely powerful once you understand the trigger → action → condition structure. Start with a simple follow-up sequence, test it thoroughly, then expand to more complex branching workflows as you grow comfortable.

The goal is to build automations that handle the repetitive parts of lead nurturing and follow-up — so you can focus on the conversations that actually close deals.

**Related Guides:**
- [GoHighLevel automation workflows explained →](/gohighlevel-automation-workflows/)
- [How to set up GoHighLevel →](/how-to-set-up-gohighlevel/)
- [GoHighLevel CRM explained →](/gohighlevel-crm-explained/)
