---
title: "How to Import Contacts into GoHighLevel (Step-by-Step Guide)"
description: "A complete guide to importing contacts into GoHighLevel — how to format your CSV, map fields correctly, avoid duplicates, and what to do after the import is done."
category: "gohighlevel-tutorials"
keywords:
  - "import contacts GoHighLevel"
  - "GoHighLevel import contacts"
  - "GoHighLevel CSV import"
  - "upload contacts GHL"
  - "GoHighLevel contact import tutorial"
publishDate: 2026-01-22
author: "Editorial Team"
featured: false
relatedArticles:
  - "how-to-set-up-gohighlevel"
  - "gohighlevel-crm-explained"
  - "gohighlevel-automation-workflows"
  - "gohighlevel-automate-lead-followups"
faqs:
  - question: "How do I import contacts into GoHighLevel?"
    answer: "Go to Contacts → Import in any sub-account, upload a CSV file, map your column headers to GoHighLevel fields, and confirm the import. GoHighLevel processes the file and adds all contacts to your CRM. The process takes a few minutes for large lists."
  - question: "What file format does GoHighLevel accept for contact imports?"
    answer: "GoHighLevel accepts CSV (comma-separated values) files for contact imports. Excel files (.xlsx) need to be exported as CSV first. The file should have column headers in the first row."
  - question: "Does GoHighLevel handle duplicate contacts on import?"
    answer: "Yes. GoHighLevel checks for duplicates by email address during import. If an imported contact's email already exists in the CRM, GoHighLevel will update the existing record with new information rather than creating a duplicate — depending on your duplicate handling settings during the import process."
  - question: "How many contacts can I import at once in GoHighLevel?"
    answer: "GoHighLevel recommends keeping import files under 1,000 contacts at a time for reliability. For larger lists, split the file into chunks of 500–1,000 contacts and import each batch separately. There is no hard limit on total contacts — GoHighLevel supports unlimited contacts."
  - question: "Can I add tags to contacts during import?"
    answer: "Yes. During the import setup, GoHighLevel lets you apply one or more tags to all contacts in the import batch. This is useful for labeling the source of the list (e.g., 'imported-jan-2026', 'mailchimp-export', 'trade-show-leads')."
---

Moving contacts from another platform — or from a spreadsheet — into GoHighLevel is one of the first things most users need to do when setting up the platform. Done correctly, the import takes under 10 minutes and your contacts land in the CRM clean and ready to use.

Here's the complete walkthrough.

## Step 1: Prepare Your CSV File

The quality of your import depends almost entirely on how well your CSV is formatted before you upload it. Take 10 minutes here to save yourself hours of cleanup later.

### Required Columns

GoHighLevel needs at minimum one of these to identify each contact:
- **Email address** — strongly recommended, used for deduplication
- **Phone number** — used if no email is present

### Recommended Column Headers

Use these exact names (or close variants) — GoHighLevel will auto-map them:

| Column Header | GoHighLevel Field |
|---|---|
| `first_name` | First Name |
| `last_name` | Last Name |
| `email` | Email |
| `phone` | Phone |
| `company_name` | Company Name |
| `address1` | Address Line 1 |
| `city` | City |
| `state` | State |
| `postal_code` | Postal Code |
| `country` | Country |
| `source` | Lead Source |
| `notes` | Contact Notes |

Custom fields you've created in GoHighLevel can also be mapped during import — they'll appear as options in the field mapping step.

### Formatting Rules

**Phone numbers:**
- Include country code for non-US numbers: `+447911123456`
- US numbers can be formatted as `10 digits`: `5551234567` or `(555) 123-4567`
- Remove any spaces, dashes, or parentheses if possible — GoHighLevel handles most formats but clean numbers reduce errors

**Email addresses:**
- Lowercase, no spaces
- Remove any obviously invalid emails (no `@`, no domain, etc.) before importing

**Avoid special characters in text fields:**
- Commas inside field values will break CSV formatting — wrap those fields in quotes or remove commas
- Remove any HTML or line breaks from notes fields

### Exporting from Common Platforms

**From Mailchimp:** Audience → Export Audience → CSV
**From HubSpot:** Contacts → Export → All Contacts → CSV
**From ActiveCampaign:** Contacts → Export
**From a spreadsheet:** File → Download As → CSV
**From your old CRM:** Look for "Export Contacts" or "Data Export" in settings

## Step 2: Navigate to the Import Tool

Inside the sub-account where you want to add contacts:

1. Go to **Contacts** in the left sidebar
2. Click the **Import** button (top right area of the Contacts page)
3. Click **Import from CSV**

## Step 3: Upload Your File

Click **Choose File** (or drag and drop your CSV onto the upload area).

GoHighLevel will preview the first few rows of your file. Verify the data looks correct — check that the first row is your header row, not a data row.

If the preview looks off (data in wrong columns, garbled text), there may be a formatting issue in your CSV. Common causes:
- File was saved as `.xlsx` instead of `.csv` — re-export as CSV
- Special characters or encoding issues — open in a text editor and save as UTF-8 CSV

## Step 4: Map Your Fields

This is the most important step. GoHighLevel will attempt to auto-map your column headers to its fields. Review every mapping carefully.

For each column in your CSV, a dropdown on the right shows which GoHighLevel field it maps to. Check each one:

- If GoHighLevel guessed correctly, leave it
- If the mapping is wrong, open the dropdown and select the correct field
- If a column doesn't map to any GHL field, select **Skip this field** — the data won't be imported

**Mapping custom fields:** If you've created custom fields in GoHighLevel (e.g., "Budget Range", "Niche", "Lead Score"), they'll appear in the dropdown alongside standard fields. Map them here.

**Don't skip the phone field.** Even if email is your primary identifier, importing phone numbers enables SMS workflows.

## Step 5: Configure Import Settings

Before confirming, GoHighLevel gives you a few options:

### Tags
Apply one or more tags to all contacts in this import. Always tag your imports — it makes it easy to:
- Find all contacts from this specific import later
- Target them with a specific workflow
- Audit the import if something goes wrong

Good import tag format: `source-name-month-year` — for example: `mailchimp-export-jan-2026` or `trade-show-orlando-feb-2026`

### Duplicate Handling
Choose how to handle contacts that already exist in the CRM (matched by email):

- **Update existing contact** — Overwrites existing fields with the imported data (use this if your import file has more up-to-date info)
- **Skip duplicates** — Leaves existing contacts untouched, only adds new ones (use this if your existing CRM data is more current)

### Workflow Enrollment
Optionally, choose a workflow to enroll all imported contacts into immediately after import. Use this carefully — only if you want every contact in this batch to enter an automation immediately.

## Step 6: Confirm and Import

Review the summary:
- Total contacts to import
- Fields being mapped
- Tags being applied
- Duplicate handling setting

Click **Import** to start the process. GoHighLevel will process the file in the background.

- Small imports (under 100 contacts): complete in seconds
- Medium imports (100–1,000 contacts): 1–5 minutes
- Large imports (1,000+ contacts): 5–20+ minutes

You'll receive a notification when the import is complete, along with a summary showing how many contacts were created, updated, and skipped.

## Step 7: Verify the Import

After the import completes, do a quick audit:

1. Go to **Contacts** and filter by the tag you applied during import
2. Spot-check 5–10 contacts to verify their data imported correctly
3. Check that phone numbers are formatted correctly (should show with country code)
4. Check that email addresses look valid
5. Open one contact and verify custom field values imported if applicable

If something looks wrong — wrong field mapping, garbled data — you can bulk select the imported contacts (filter by the import tag) and delete them, fix the CSV, and re-import.

## After the Import: What to Do Next

**Don't immediately start blasting the list.** Especially for imported contacts who didn't opt in recently, a sudden high volume of emails or SMS from a new sender domain will hurt deliverability and may generate spam complaints.

**Warm up the list gradually:**
- For email: start with 100–200 per day and ramp up over 1–2 weeks
- For SMS: ensure all contacts have explicitly opted in to receive texts from your number (required by US regulations)

**Segment the list before messaging:**
- Use smart lists or tags to separate active vs. old contacts
- Create different sequences for fresh leads vs. contacts who are months old
- Consider a re-engagement campaign for older contacts before adding them to active nurture

**Set a lead source:**
- If your CSV had a lead source column, map it during import
- If not, use a bulk action after import to set the lead source for the whole batch

## Common Import Problems and Fixes

**"Email already exists" for contacts that shouldn't be duplicates:** Check that your duplicate handling is set to Update rather than Skip if you want to refresh existing records.

**Phone numbers showing as invalid:** Format all US numbers as 10-digit with no formatting: `5551234567`. International numbers need `+` and country code.

**Only some contacts imported:** GoHighLevel skips rows with missing required data or invalid emails/phones. Export the import error report (available after import) to see which rows were skipped and why.

**Custom fields not appearing in mapping:** Custom fields must be created in GoHighLevel before the import (Settings → Custom Fields). Create the fields first, then re-import.

**Related Guides:**
- [GoHighLevel CRM explained →](/gohighlevel-crm-explained/)
- [How to automate lead follow-ups in GoHighLevel →](/gohighlevel-automate-lead-followups/)
- [How to set up GoHighLevel →](/how-to-set-up-gohighlevel/)
