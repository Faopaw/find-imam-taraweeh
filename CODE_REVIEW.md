# Code Review & Improvement Recommendations

## 🔴 Critical Issues

### 1. Vacancy delete endpoint ignores PIN verification (server-side)
**Location:** `app/api/remove-vacancy/route.ts`
- **Issue:** The API only checks for `id` and calls `deleteVacancy` without verifying the user-supplied PIN. A malicious request with a known entry ID can delete any vacancy. The PIN check is only in the client UI prompt, so it can be bypassed.
- **Related exposure:** The PIN is persisted with the entry (`utils/uploadData.ts`) and served through the delivery API, so it can be read by any client and used to delete.
- **Fix:** Require the PIN in the DELETE body, fetch the entry, and validate the stored (ideally hashed) PIN server-side before deletion. Avoid exposing the PIN in delivery responses.

``` 
4:27:app/api/remove-vacancy/route.ts
export async function DELETE(request: NextRequest) {
  const body = await request.json();
  const { id } = body;
  ...
  await deleteVacancy(id); // No PIN verification
}
```

``` 
7:50:utils/uploadData.ts
const entry = await environment.createEntry("requestType", {
  fields: {
    ...
    pinCode: { "en-US": `${values.pinCode}` }, // PIN stored and later exposed
  },
});
```

### 2. Over-strict Contentful config gate can blank the site
**Location:** `lib/contentful/api.ts`
- **Issue:** `isContentfulConfigured` requires a preview token even when not in preview. Missing preview token returns `false`, causing all public data fetches to return empty arrays and rendering the home page blank.
- **Fix:** Only require `CONTENTFUL_SPACE_ID` and `CONTENTFUL_DELIVERY_TOKEN` for normal fetches; treat `CONTENTFUL_PREVIEW_TOKEN` as optional and only required when `preview` is true.

``` 
17:23:lib/contentful/api.ts
return Boolean(
  process.env.CONTENTFUL_SPACE_ID &&
  process.env.CONTENTFUL_DELIVERY_TOKEN &&
  process.env.CONTENTFUL_PREVIEW_TOKEN // makes preview token mandatory
);
```

## 🟡 Code Quality & UX

3. **Phone validation still lenient** — `components/VacancyForm.tsx` only checks max length; add regex/normalization for international numbers.  
4. **Deletion UX weak** — `components/ui/manage-vacancy-card.tsx` uses `any`, `prompt/alert`, and no loading/error UI; refactor to typed props and a dialog with form validation plus optimistic refresh.  
5. **FAQ content outdated** — `app/faq/page.tsx` still instructs users to email for edits/deletes; workflow now uses PIN + `/edit/:id`.  
6. **Success page inconsistencies** — `app/success/page.tsx` mixes React-Bootstrap with the shadcn/Radix stack, hardcodes domain in link, and lacks loading/error handling for missing `id/pincode`.  
7. **Hardcoded values** — Environment ID (`"master"`), content type (`"requestType"`), and validation limits are inline; move to a constants/config module.  
8. **Console logging in production paths** — `utils/uploadData.ts` and `utils/delete-vacancy.ts` log payloads/entries; replace with structured server-side logging or remove.  
9. **Commented legacy CSS import** — `app/layout.tsx` still carries commented Bootstrap import; remove or document why.  
10. **Dead/legacy landing page** — `app/_landing/page.tsx` uses React-Bootstrap and placeholder content; decide to retire or modernize to the current design system.  
11. **Hard-coded domain in success message** — `find-taraweeh-imam.com/edit/${id}` may drift from deployment base URL; derive from `NEXT_PUBLIC_SITE_URL` or router paths instead.

## 🟢 TypeScript & Data Safety

12. **Missing PIN in types** — `types/VacancyFields` omits `pinCode`, forcing `any` in deletion flow and hiding runtime shape. Add the field (or a secure hashed variant) and remove `[key: string]: any`.  
13. **Overuse of `any`** — `components/ui/manage-vacancy-card.tsx` and `ProfileComponentProps.user` rely on `any`; add explicit shapes.  
14. **Params typing bug** — `app/edit/[...slug]/page.tsx` types `params` as `Promise<{ slug: string[] }>`, which is incorrect for Next.js app router. Use `{ params: { slug: string[] } }` and remove `await params` to avoid confusion.  
15. **Env assertions without validation** — `lib/contentful/client.ts` uses non-null assertions on env vars; add startup validation and fail fast with clear errors.

## 🟣 Security & Data Handling

16. **Input not sanitized** — User-provided strings are sent directly to Contentful; sanitize/encode to mitigate XSS when rendering rich text fields.  
17. **PIN exposed in public payloads** — Delivery API responses likely include `pinCode`; do not expose secrets. Use a server-only field or hash.  
18. **Missing rate limiting/abuse protection** — API routes (`upload-vacancy`, `remove-vacancy`) have no throttling; consider middleware limits to protect Contentful tokens.

## 🔵 Performance & Reliability

19. **Suspense around synchronous data** — `app/manage-vacancies/page.tsx` wraps already-resolved data in `<Suspense>`, adding noise without benefit.  
20. **No empty/loading states** — Vacancy list and manage views render nothing when data is empty; add explicit empty/loading messaging.  
21. **React-Bootstrap import overhead** — Single-page Bootstrap usage increases bundle size; replace with existing button components to reduce JS/CSS.

## 🟠 Testing

22. **Test suite stale** — `components/VacancyCard.test.tsx` only asserts a button renders and logs to console; no coverage for VacancyCard, form validation, or API flows. Add unit tests for form schema, vacancy rendering, and API error cases.  
23. **Test naming mismatch** — Test file name implies VacancyCard coverage but tests a generic button; align tests with component under test.

## 🟡 Dependency Management

24. **Unused/legacy deps** — `@next/font` (deprecated), `formik`, `yup`, `bootstrap`, `react-bootstrap`, `@auth0/nextjs-auth0`, `@fortawesome/react-fontawesome`, `@react-hook/window-size` appear unused; prune to shrink bundle.  
25. **Version skew** — `eslint-config-next` is `13.1.6` while Next.js is `14.2.5`; upgrade lints to match framework.  
26. **Consider running `npm outdated`** — Evaluate safe upgrades for core and dev deps.

## 🟢 Documentation

27. **README outdated** — Still references `pages/` and legacy Next.js guidance; update for App Router, Contentful setup, and current scripts.  
28. **Environment docs** — Ensure `.env.example` documents required Contentful tokens and site URL; add notes about PIN handling if kept.


## 📋 Priority Action Items

**High**
1. Add server-side PIN validation and stop exposing PINs in delivery responses.  
2. Fix Contentful config gating so production doesn’t blank when preview token is absent.  
3. Prune unused/legacy dependencies and align lint config with Next 14.

**Medium**
4. Tighten phone validation and sanitize inputs.  
5. Update FAQ/Success pages to match current workflows and design system.  
6. Add missing types (PIN, params) and remove `any` usage in manage card.  
7. Replace console logs with structured logging and add empty/loading states.

**Low**
8. Clean commented/import cruft, retire legacy landing page, and refresh README.  
9. Add meaningful unit tests for VacancyCard, form schema, and API routes.
