# nepal-official-alerts

A small site that displays official Nepal emergency contacts — nothing more.

**Status: not live yet.** Numbers are not personally verified. Do not publish or share this link until `data.json` is filled in and checked.

## The one rule this project follows

This site never writes its own content. It only displays numbers and information that come from an official, named source — government ministries, NDRRMA, Nepal Red Cross, or the official rescue portal. If a fact can't be traced to a named source, it does not go in `data.json`.

## What it does right now (Phase 1)

Shows four national emergency numbers:

- Disaster hotline (1234) — auto-routes to your district's own emergency center
- Police (100)
- Ambulance (102)
- NDRRMA (1155)

Plus a link to the official government portal for anything beyond these numbers (missing persons, relief updates): https://rescue.opmcm.gov.np

## Files

| File         | What it's for                                                              |
| ------------ | -------------------------------------------------------------------------- |
| `index.html` | Page structure                                                             |
| `style.css`  | Styling                                                                    |
| `script.js`  | Reads `data.json` and builds the contact list on the page                  |
| `data.json`  | The actual contact data — the only file you should need to edit day to day |

## How to update a contact

Open `data.json`. Each contact looks like this:

```json
{
  "name": "Police",
  "number": "100",
  "source": "Nepal Police",
  "source_url": "https://rescue.opmcm.gov.np",
  "verified_on": ""
}
```

After you personally confirm a number is correct, fill in `verified_on` with today's date, like `"2026-10-02"`. Until that field has a real date, the page shows a visible "Not yet personally verified" warning instead of pretending it's checked.

## Before going live — checklist

- [ ] Call or confirm all four national numbers against the official source
- [ ] Fill in a real `verified_on` date for each contact
- [ ] Double check `data.json` is valid (no trailing commas, no missing quotes)
- [ ] Decide on a re-verification schedule (e.g. weekly during active flood season)

## Roadmap

- **Phase 2** — add year-round weather/flood-risk advisories from the Department of Hydrology and Meteorology, so the site stays useful outside flood season
- **Phase 3** — bring in trusted local verifiers so accuracy doesn't depend on one person
