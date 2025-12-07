# Code Review & Improvement Recommendations

## 🔴 Critical Issues

### 1. **Undefined Variable in Navbar.tsx**
**Location:** `components/Navbar.tsx:110`
- **Issue:** `setShowFAQ` is referenced but never defined
- **Impact:** This will cause a runtime error
- **Fix:** Remove the reference or implement the FAQ dialog state

```typescript
// Current (broken):
setShowFAQ(true);

// Should be:
// Either remove this onClick handler or add:
const [showFAQ, setShowFAQ] = useState(false);
```

### 2. **Double JSON Parsing Anti-pattern**
**Location:** `app/page.tsx:10` and `components/Vacancies.tsx:5`
- **Issue:** Data is stringified in `loadData()`, then stringified again in `page.tsx`, then double-parsed in `Vacancies.tsx`
- **Impact:** Unnecessary serialization overhead and confusing code
- **Fix:** Pass data directly as props without stringification

```typescript
// Current:
const returnArray = JSON.stringify(res); // In page.tsx
const dataArray: ContentfulEntry[] = JSON.parse(JSON.parse(props.data)); // In Vacancies.tsx

// Should be:
// In page.tsx: Pass res directly
// In Vacancies.tsx: Accept ContentfulEntry[] directly
```

### 3. **Missing Error Handling in Form Submission**
**Location:** `components/VacancyForm.tsx:109-110`
- **Issue:** `uploadData()` is async but not awaited, and errors are not handled. User is redirected to success page even if submission fails.
- **Impact:** Users see success message even when submission fails
- **Fix:** Make `uploadData` async, await it, and handle errors

```typescript
// Current:
uploadData(formValues);
router.push('/success');

// Should be:
try {
  await uploadData(formValues);
  router.push('/success');
} catch (error) {
  // Show error message to user
  console.error('Submission failed:', error);
}
```

### 4. **Client-Side Environment Variables**
**Location:** `utils/uploadData.ts:5-6`
- **Issue:** Using `process.env` in a client component (uploadData is called from client component)
- **Impact:** Environment variables won't be available on client-side, causing failures
- **Fix:** Create an API route to handle the upload server-side

---

## 🟡 Code Quality & Best Practices

### 5. **Inconsistent Component Patterns**
- **Issue:** Mix of default exports and named exports
- **Recommendation:** Standardize on one pattern (prefer named exports for better tree-shaking)

### 6. **Unused Dependencies**
**Location:** `package.json`
- **Issues:**
  - `@next/font` (deprecated, use `next/font` instead)
  - `formik` (not used, you're using react-hook-form)
  - `yup` (not used, you're using zod)
  - `bootstrap` and `react-bootstrap` (only used in success page, inconsistent with rest of app)
  - `@auth0/nextjs-auth0` (not used anywhere)
  - `@fortawesome/react-fontawesome` (not used)
  - `@react-hook/window-size` (not used)
- **Recommendation:** Remove unused dependencies to reduce bundle size

### 7. **Hardcoded Values**
**Location:** Multiple files
- **Issues:**
  - `ENVIRONMENTID = "master"` hardcoded in `uploadData.ts`
  - Character limits hardcoded in validation schema
  - Content type `"requestType"` hardcoded
- **Recommendation:** Move to environment variables or constants file

### 8. **Poor Type Safety**
**Location:** `utils/loadData.ts:9`
- **Issue:** Using `any[]` instead of proper types
- **Fix:**
```typescript
let returnArray: ContentfulEntry[];
```

### 9. **Missing Input Validation**
**Location:** `components/VacancyForm.tsx`
- **Issue:** Phone number validation is too lenient (just max length)
- **Recommendation:** Add proper phone number regex validation

### 10. **Inconsistent Error Handling**
**Location:** `utils/loadData.ts:19-21`
- **Issue:** Errors are logged but not thrown, returning empty array silently
- **Recommendation:** Consider throwing errors or returning a Result type

### 11. **Console.log in Production Code**
**Location:** Multiple files
- **Issues:**
  - `uploadData.ts:15` - `console.log("Theses are the values: ", values);` (also typo: "Theses")
  - `uploadData.ts:47` - `console.log(entry)`
  - `VacancyCard.test.tsx:15` - `console.log(titleElement)`
- **Recommendation:** Remove or use proper logging library

### 12. **Accessibility Issues**
- **Issue:** `VacancyCard.tsx:58` - `aria-label='detailsbutton'` is not descriptive
- **Fix:** Use descriptive aria-label: `aria-label='View more details about this vacancy'`

### 13. **Missing Loading States**
- **Issue:** No loading indicators for async operations (data fetching, form submission)
- **Recommendation:** Add loading states for better UX

### 14. **Missing Empty States**
- **Issue:** No handling for when no vacancies are found
- **Recommendation:** Add empty state component

---

## 🟢 TypeScript Improvements

### 15. **Type Definitions**
**Location:** `types/index.ts`
- **Issue:** `[key: string]: any` used in multiple places reduces type safety
- **Recommendation:** Define proper types for all Contentful fields

### 16. **Missing Return Type Annotations**
**Location:** Multiple functions
- **Issue:** Some functions lack explicit return types
- **Recommendation:** Add explicit return types for better type inference

### 17. **Type Assertions**
**Location:** `utils/loadData.ts:6-7, 13`
- **Issue:** Using `as string` type assertions without validation
- **Recommendation:** Validate environment variables at startup

---

## 🔵 Performance Issues

### 18. **Inefficient Data Serialization**
**Location:** `app/page.tsx:10`
- **Issue:** Serializing entire data array on every page load
- **Recommendation:** Consider caching or using Next.js ISR (Incremental Static Regeneration)

### 19. **No Image Optimization**
**Location:** `app/success/page.tsx:13-19`
- **Issue:** SVG loaded but could be optimized
- **Note:** Using Next.js Image component is good, but ensure all images follow this pattern

### 20. **Missing React.memo for List Items**
**Location:** `components/Vacancies.tsx:6-7`
- **Issue:** VacancyCard components not memoized
- **Recommendation:** Consider memoizing if list grows large

### 21. **Key Prop Using Index**
**Location:** `components/Vacancies.tsx:7`
- **Issue:** Using array index as key
- **Recommendation:** Use unique ID from Contentful entry

---

## 🟣 Security Concerns

### 22. **Client-Side API Calls**
**Location:** `components/VacancyForm.tsx:109`
- **Issue:** Contentful management API called from client (if uploadData runs client-side)
- **Impact:** Exposes API tokens to client
- **Fix:** Move to API route (`/app/api/vacancies/route.ts`)

### 23. **No Input Sanitization**
- **Issue:** User input not sanitized before sending to Contentful
- **Recommendation:** Sanitize inputs to prevent XSS

### 24. **Environment Variables Not Validated**
- **Issue:** No validation that required env vars exist at startup
- **Recommendation:** Add startup validation

---

## 🟠 Testing

### 25. **Minimal Test Coverage**
**Location:** `components/VacancyCard.test.tsx`
- **Issue:** Only one test, and it's testing a button component, not VacancyCard
- **Recommendation:** 
  - Add tests for VacancyCard component
  - Add tests for VacancyForm validation
  - Add tests for data loading utilities
  - Test error cases

### 26. **Test File Naming**
- **Issue:** Test file named `VacancyCard.test.tsx` but doesn't test VacancyCard
- **Recommendation:** Fix test or rename file

---

## 🟡 Project Structure

### 27. **Inconsistent File Organization**
- **Issue:** Mix of `app/` and `components/` at root, `src/styles/` but styles could be co-located
- **Recommendation:** Consider organizing by feature or following Next.js 13+ app directory conventions more strictly

### 28. **Missing Constants File**
- **Issue:** Magic strings scattered throughout codebase
- **Recommendation:** Create `lib/constants.ts` for:
  - Content type names
  - Environment IDs
  - Validation limits
  - API endpoints

### 29. **Commented Out Code**
**Location:** `app/layout.tsx:4`
- **Issue:** `// import "bootstrap/dist/css/bootstrap.min.css";`
- **Recommendation:** Remove commented code or add TODO if needed later

---

## 🔵 Accessibility

### 30. **Missing Semantic HTML**
- **Issue:** Some components could use better semantic HTML
- **Recommendation:** Use `<main>`, `<article>`, `<section>` appropriately

### 31. **Missing Focus Management**
- **Issue:** Dialog doesn't trap focus properly (though Radix UI should handle this)
- **Recommendation:** Verify focus management works correctly

### 32. **Color Contrast**
- **Issue:** Need to verify color contrast meets WCAG standards
- **Recommendation:** Audit with accessibility tools

---

## 🟢 Documentation

### 33. **Outdated README**
**Location:** `README.md:45`
- **Issue:** References `pages/index.js` but using app directory
- **Recommendation:** Update README with current structure

### 34. **Missing Code Comments**
- **Issue:** Complex logic lacks explanation
- **Recommendation:** Add JSDoc comments for utility functions

### 35. **Missing Environment Variable Documentation**
- **Issue:** No `.env.example` file
- **Recommendation:** Create `.env.example` with required variables

---

## 🟡 Dependency Management

### 36. **Version Mismatches**
- **Issue:** Next.js 14.2.5 but eslint-config-next 13.1.6
- **Recommendation:** Update eslint-config-next to match Next.js version

### 37. **Outdated Packages**
- **Issue:** Some packages may have newer versions
- **Recommendation:** Run `npm outdated` and update where safe

---

## 📋 Priority Action Items

### High Priority (Fix Immediately)
1. Fix `setShowFAQ` undefined variable
2. Fix double JSON parsing
3. Add proper error handling to form submission
4. Move Contentful API calls to server-side API routes
5. Remove unused dependencies

### Medium Priority (Fix Soon)
6. Add loading states
7. Improve type safety
8. Add input validation
9. Remove console.logs
10. Fix test coverage

### Low Priority (Nice to Have)
11. Refactor component patterns
12. Add constants file
13. Improve documentation
14. Add empty states
15. Optimize performance

---

## ✅ What's Done Well

1. **Good use of TypeScript** - Type definitions are present
2. **Modern Next.js patterns** - Using App Router correctly
3. **Component library** - Good use of Radix UI components
4. **Form validation** - Using Zod with react-hook-form is excellent
5. **Code formatting** - Prettier and ESLint configured
6. **Responsive design** - Tailwind classes show mobile-first approach
7. **Accessibility basics** - Using semantic components from Radix UI

---

## 🎯 Recommended Next Steps

1. **Create API routes** for server-side operations
2. **Set up proper error boundaries** for error handling
3. **Add environment variable validation** at startup
4. **Implement proper logging** (replace console.logs)
5. **Add comprehensive tests** for critical paths
6. **Set up CI/CD** with linting and testing
7. **Add monitoring/error tracking** (e.g., Sentry)
8. **Create `.env.example`** file
9. **Update README** with setup instructions
10. **Consider adding Storybook** for component documentation
