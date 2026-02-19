# Universal Login Theme - Component Styling Guide

This guide provides a quick reference for how each component applies the modern, colorful theme.

---

## Core Components

### ULThemeButton

**Purpose**: Primary and secondary action buttons

**Theme Variables Used**:
- `--ul-theme-color-primary-button`: Background color (#7C3AED)
- `--ul-theme-color-primary-button-label`: Text color (#FFFFFF)
- `--ul-theme-color-secondary-button-border`: Border color for outline variant (#14B8A6)
- `--ul-theme-color-secondary-button-label`: Text color for outline variant (#0F766E)
- `--ul-theme-border-button-border-radius`: Corner rounding (12px)
- `--ul-theme-font-buttons-text-size`: Font size (1rem)
- `--ul-theme-font-buttons-text-weight`: Font weight (600)

**Variants**:
- `primary`: Purple background, white text
- `outline`: Teal border, deep teal text
- `link`: Text-only with purple color

**File**: `src/components/ULThemeButton.tsx`

---

### ULThemeCard

**Purpose**: Container widget for login/signup forms

**Theme Variables Used**:
- `--ul-theme-color-widget-background`: Background color (#FFFFFF)
- `--ul-theme-color-widget-border`: Border color (#E0E7FF)
- `--ul-theme-border-widget-corner-radius`: Corner rounding (20px)
- `--ul-theme-border-show-widget-shadow`: Drop shadow (purple-tinted)
- `--ul-theme-border-widget-border-weight`: Border width (1px)

**Styling**:
- Generous padding (px-10, py-10)
- Floats above gradient background
- Purple-tinted shadow for modern depth

**File**: `src/components/ULThemeCard.tsx`

---

### ULThemeFloatingLabelField

**Purpose**: Input fields with floating label animation

**Theme Variables Used**:
- `--ul-theme-color-input-background`: Background color (#F8FAFC)
- `--ul-theme-color-input-border`: Border color (#CBD5E1)
- `--ul-theme-color-input-filled-text`: Text color (#1E1B4B)
- `--ul-theme-color-input-labels-placeholders`: Label/placeholder color (#64748B)
- `--ul-theme-color-base-focus-color`: Focus border color (#8B5CF6)
- `--ul-theme-border-input-border-radius`: Corner rounding (10px)
- `--ul-theme-border-input-border-weight`: Border width (2px)
- `--ul-theme-font-body-text-size`: Text size (0.9375rem)
- `--ul-theme-font-input-labels-size`: Label size (0.9375rem)

**States**:
- **Default**: Light gray background, medium gray border
- **Focus**: Purple border with ring effect
- **Error**: Red border and text
- **Filled**: Label floats above input

**File**: `src/components/form/ULThemeFloatingLabelField.tsx`

---

### ULThemeTitle

**Purpose**: Main page heading

**Theme Variables Used**:
- `--ul-theme-color-header`: Text color (#1E1B4B)
- `--ul-theme-font-title-size`: Font size (2rem)
- `--ul-theme-font-title-weight`: Font weight (700)
- `--ul-theme-widget-header-text-alignment`: Text alignment (center)

**Styling**:
- Bold, prominent typography
- Deep indigo color for hierarchy
- Center-aligned by default

**File**: `src/components/ULThemeTitle.tsx`

---

### ULThemeSubtitle

**Purpose**: Secondary heading or description

**Theme Variables Used**:
- `--ul-theme-color-body-text`: Text color (#334155)
- `--ul-theme-font-subtitle-size`: Font size (1rem)
- `--ul-theme-font-subtitle-weight`: Font weight (500)

**Styling**:
- Medium weight for clear hierarchy
- Slate gray for softer appearance
- Used for explanatory text below titles

**File**: `src/components/ULThemeSubtitle.tsx`

---

### ULThemeLink

**Purpose**: Hyperlinks and text-based navigation

**Theme Variables Used**:
- `--ul-theme-color-links-focused-components`: Link color (#8B5CF6)
- `--ul-theme-color-base-focus-color`: Focus ring color (#8B5CF6)
- `--ul-theme-font-links-size`: Font size (0.9375rem)
- `--ul-theme-font-links-weight`: Font weight (600)
- `--ul-theme-font-links-style`: Underline style (normal/underline)
- `--ul-theme-border-links-border-radius`: Focus ring rounding (6px)

**States**:
- **Default**: Purple text
- **Hover**: 80% opacity
- **Focus**: Purple ring with light background
- **Disabled**: Gray with reduced opacity

**File**: `src/components/ULThemeLink.tsx`

---

### ULThemeError (ULThemeAlert)

**Purpose**: Error and notification messages

**Theme Variables Used**:
- `--ul-theme-color-error`: Background color (#EF4444)
- `--ul-theme-color-primary-button-label`: Text color (#FFFFFF)
- `--ul-theme-border-button-border-radius`: Corner rounding (12px)
- `--ul-theme-font-body-text-size`: Text size (0.9375rem)

**Styling**:
- Red background for attention
- White text for contrast
- Rounded corners matching buttons
- Optional dismiss button

**File**: `src/components/ULThemeError.tsx`

---

### ULThemeCheckbox

**Purpose**: Checkbox input with custom styling

**Theme Variables Used**:
- `--ul-theme-color-primary-button`: Checked background (#7C3AED)
- `--ul-theme-border-input-border-radius`: Corner rounding (10px)
- `--ul-theme-color-base-focus-color`: Focus ring color (#8B5CF6)

**States**:
- **Unchecked**: Gray border
- **Checked**: Purple background with white checkmark
- **Focus**: Purple ring
- **Hover**: Purple border

**File**: `src/components/ULThemeCheckbox.tsx`

---

### ULThemePasswordField

**Purpose**: Password input with show/hide toggle

**Theme Variables Used**:
- Inherits all from `ULThemeFloatingLabelField`
- `--ul-theme-color-input-labels-placeholders`: Icon color (#64748B)
- `--ul-theme-color-base-focus-color`: Focus states (#8B5CF6)

**Features**:
- Eye icon toggle for visibility
- Tooltip on hover
- Inherits input field theming
- Smooth icon transitions

**File**: `src/components/ULThemePasswordField.tsx`

---

### ULThemeSeparator

**Purpose**: Visual divider between sections

**Theme Variables Used**:
- `--ul-theme-color-input-border`: Line color (#CBD5E1)
- `--ul-theme-color-body-text`: Text color if label present (#334155)
- `--ul-theme-font-body-text-size`: Text size (0.9375rem)

**Usage**:
- Horizontal rule between sections
- Optional text label (e.g., "OR")
- Matches input border styling

**File**: `src/components/ULThemeSeparator.tsx`

---

### ULThemeSocialProviderButton

**Purpose**: Social login buttons (Google, GitHub, etc.)

**Theme Variables Used**:
- `--ul-theme-color-secondary-button-border`: Border color (#14B8A6)
- `--ul-theme-color-secondary-button-label`: Text color (#0F766E)
- `--ul-theme-border-button-border-radius`: Corner rounding (12px)
- `--ul-theme-border-button-border-weight`: Border width (0px - borderless modern style)
- `--ul-theme-font-buttons-text-weight`: Font weight (600)

**Styling**:
- Icon + text layout
- Teal border for secondary action
- Left-aligned text for longer provider names
- Consistent width (320px max)

**File**: `src/components/ULThemeSocialProviderButton.tsx`

---

### ULThemeSpinner

**Purpose**: Loading indicator

**Theme Variables Used**:
- `--ul-theme-color-spinner`: Spinner color (#8B5CF6)

**Variants**:
- `solid`: Circular spinner
- `dots`: Three bouncing dots
- `pulse`: Pulsing circle

**Sizes**: sm, md, lg

**File**: `src/components/ULThemeSpinner.tsx`

---

### ULThemePageLayout

**Purpose**: Full-page container with background

**Theme Variables Used**:
- `--ul-theme-page-bg-background-color`: Background color (#F5F3FF)
- `--ul-theme-page-bg-background-image-url`: Background image (gradient)
- `--ul-theme-page-bg-page-layout`: Content alignment (center)

**Styling**:
- Full viewport height
- Gradient background (indigo → pink → teal)
- Fixed background attachment
- Centered content by default

**File**: `src/components/ULThemePageLayout.tsx`

---

## Component Hierarchy

```
ULThemePageLayout (Page background & layout)
└─ ULThemeCard (Widget container)
   ├─ ULThemeLogo (Brand logo)
   ├─ ULThemeTitle (Main heading)
   ├─ ULThemeSubtitle (Description)
   ├─ ULThemeError (Error messages)
   ├─ ULThemeFloatingLabelField (Input fields)
   │  └─ ULThemePasswordField (Password input variant)
   ├─ ULThemeCheckbox (Checkbox inputs)
   ├─ ULThemeButton (Primary actions)
   ├─ ULThemeSeparator (Visual divider)
   ├─ ULThemeSocialProviderButton (Social login)
   ├─ ULThemeLink (Text links)
   └─ ULThemeSpinner (Loading states)
```

---

## Theme Customization Flow

### 1. CSS Variables (Base Level)

All theme values are defined in `src/index.css` under `:root`:

```css
:root {
  --ul-theme-color-primary-button: #7C3AED;
  --ul-theme-color-header: #1E1B4B;
  /* ... more variables */
}
```

### 2. Tailwind Theme Mapping

CSS variables are mapped to Tailwind utilities in the `@theme` section:

```css
@theme {
  --color-primary-button: var(--ul-theme-color-primary-button);
  --radius-button: var(--ul-theme-border-button-border-radius);
}
```

### 3. Component Application

Components apply theme utilities using the `theme-universal:` variant:

```tsx
className="theme-universal:bg-primary-button"
```

### 4. Dynamic Updates

The theme engine (`src/utils/theme/themeEngine.ts`) can update CSS variables at runtime:

```typescript
applyAuth0Theme(screenInstance);
```

---

## Consistency Checklist

When creating new themed components:

- [ ] Use `theme-universal:` variant for all theme-dependent styles
- [ ] Apply consistent border radius using `rounded-button`, `rounded-input`, or `rounded-widget`
- [ ] Use semantic color variables (`bg-primary-button`, `text-header`, etc.)
- [ ] Include focus states with `focus:ring-base-focus/15`
- [ ] Add smooth transitions with 200ms duration
- [ ] Follow typography hierarchy (title > subtitle > body)
- [ ] Ensure WCAG AA contrast compliance
- [ ] Test both hover and focus states
- [ ] Support disabled states where applicable
- [ ] Add appropriate spacing (match existing components)

---

## Quick Color Reference

| Token | Color | Usage |
|-------|-------|-------|
| `primary-button` | #7C3AED (Purple) | Primary actions |
| `secondary-button-border` | #14B8A6 (Teal) | Secondary borders |
| `base-focus` | #8B5CF6 (Light Purple) | Focus states |
| `header` | #1E1B4B (Deep Indigo) | Headings |
| `body-text` | #334155 (Slate Gray) | Body content |
| `input-labels` | #64748B (Medium Gray) | Labels/placeholders |
| `error` | #EF4444 (Red) | Error messages |
| `success` | #10B981 (Green) | Success messages |
| `icons` | #8B5CF6 (Purple) | Icon colors |

---

## Development Tips

### Adding a New Component

1. Import `cn` utility from `@/lib/utils`
2. Define theme classes using `theme-universal:` variant
3. Reference color tokens (never hard-code colors)
4. Test against `THEME_DESIGN.md` color palette
5. Ensure accessibility (contrast, focus states)

### Modifying Existing Component

1. Read the component file first
2. Identify theme variables in use
3. Update variables in `src/index.css` if needed
4. Test changes across all screen sizes
5. Verify hover/focus/disabled states

### Debugging Theme Issues

1. Check browser DevTools for applied CSS variables
2. Verify `theme-universal` class is present on root
3. Inspect `:root` styles for variable definitions
4. Use theme engine to dynamically update values
5. Check console for theme-related errors

---

**Guide Version**: 1.0
**Last Updated**: 2025
**Related Files**:
- `src/index.css` - Theme variables
- `src/utils/theme/themeEngine.ts` - Theme application logic
- `THEME_DESIGN.md` - Design system documentation
