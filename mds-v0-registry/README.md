# MDS v0 Registry

A standalone registry for the Medallion Design System (MDS), enabling v0.dev to generate UI using MDS components instead of shadcn/ui defaults.

## How it works

This project serves a static `registry.json` that v0 reads to understand the MDS component API. When v0 generates code, it imports from your actual MDS component paths rather than shadcn.

---

## Deploy to Vercel (one-time setup)

1. Create a new GitHub repo (public or private) and push this folder to it
2. Go to [vercel.com](https://vercel.com) → New Project → Import that repo
3. No build config needed — Vercel will serve the `public/` folder as-is
4. Once deployed, your registry URL will be: `https://your-project.vercel.app/registry.json`

---

## Connect to v0

1. Go to [v0.dev](https://v0.dev) → Settings → **Custom Registry**
2. Paste your registry URL: `https://your-project.vercel.app/registry.json`
3. Save — v0 will now recognise MDS components

---

## Add to a project via shadcn CLI

Once deployed, anyone can pull MedallionButton into a project with:

```bash
npx shadcn add https://your-project.vercel.app/registry.json/medallion-button
```

This copies `medallion-button.tsx` and `medallion-button.css` into `components/mds/`.

---

## Using MedallionButton in v0

Prompt v0 with:
> "Use MedallionButton from the MDS registry. Create a form footer with a primary Save button and secondary Cancel button."

v0 will generate:
```tsx
import { MedallionButton, ButtonVariant } from '@/components/mds/medallion-button'

<MedallionButton label="Save" variant="primary" onClick={handleSave} />
<MedallionButton label="Cancel" variant="secondary" onClick={handleCancel} />
```

---

## Component API: MedallionButton

| Prop | Type | Default | Notes |
|---|---|---|---|
| `label` | `string` | — | Button text. Omit when using `icon` |
| `variant` | `'primary' \| 'secondary' \| 'tertiary' \| 'destructive'` | `'secondary'` | |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | |
| `active` | `boolean` | `false` | Secondary/tertiary only |
| `leadingIcon` | `ReactNode` | — | Icon before label |
| `trailingIcon` | `ReactNode` | — | Icon after label |
| `icon` | `ReactNode` | — | Icon-only mode. Requires `aria-label` |
| `loading` | `boolean` | `false` | |
| `disabled` | `boolean` | `false` | |
| `onClick` | `() => void` | — | |
| `htmlType` | `'button' \| 'submit' \| 'reset'` | `'button'` | |

---

## Adding more MDS components

To add another component (e.g. MedallionInput):

1. Copy the component to `public/registry/medallion-input.tsx`
2. Copy any styles to `public/registry/medallion-input.css`
3. Add an entry to `public/registry.json` following the same pattern as `medallion-button`
4. Redeploy — v0 picks up changes automatically

---

## Notes on styling

The `.css` file in this registry has all MDS SCSS design tokens resolved to their actual hex/px values. If MDS token values change, regenerate the CSS from the source SCSS files in `frontend_service/src/assets/styles/mds/`.
