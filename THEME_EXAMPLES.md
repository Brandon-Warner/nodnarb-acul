# Universal Login Theme - Usage Examples

Quick reference examples for implementing the modern, colorful theme in your login screens.

---

## Basic Login Form

```tsx
import ULThemeCard from "@/components/ULThemeCard";
import ULThemeTitle from "@/components/ULThemeTitle";
import ULThemeSubtitle from "@/components/ULThemeSubtitle";
import { ULThemeFloatingLabelField } from "@/components/form/ULThemeFloatingLabelField";
import { ULThemeButton } from "@/components/ULThemeButton";
import ULThemePageLayout from "@/components/ULThemePageLayout";

function LoginScreen() {
  return (
    <ULThemePageLayout className="theme-universal">
      <ULThemeCard>
        <ULThemeTitle>Welcome Back</ULThemeTitle>
        <ULThemeSubtitle>
          Sign in to your account to continue
        </ULThemeSubtitle>

        <form className="space-y-4 mt-6">
          <ULThemeFloatingLabelField
            id="email"
            name="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
          />

          <ULThemePasswordField
            id="password"
            name="password"
            label="Password"
            placeholder="Enter your password"
          />

          <ULThemeButton
            type="submit"
            variant="primary"
            className="w-full"
          >
            Sign In
          </ULThemeButton>
        </form>
      </ULThemeCard>
    </ULThemePageLayout>
  );
}
```

**Result**: A modern login form with:
- Gradient background (indigo → pink → teal)
- White card with purple-tinted shadow
- Bold title and descriptive subtitle
- Floating label inputs
- Vibrant purple primary button

---

## Login with Social Providers

```tsx
import ULThemeSeparator from "@/components/ULThemeSeparator";
import ULThemeSocialProviderButton from "@/components/ULThemeSocialProviderButton";

function LoginWithSocial() {
  return (
    <ULThemeCard>
      <ULThemeTitle>Sign In</ULThemeTitle>

      {/* Social login buttons */}
      <div className="flex flex-col gap-3 mt-6">
        <ULThemeSocialProviderButton
          variant="outline"
          iconComponent={<GoogleIcon />}
          displayName="Google"
          buttonText="Continue with Google"
          onClick={handleGoogleLogin}
        />

        <ULThemeSocialProviderButton
          variant="outline"
          iconComponent={<GitHubIcon />}
          displayName="GitHub"
          buttonText="Continue with GitHub"
          onClick={handleGitHubLogin}
        />
      </div>

      {/* Separator */}
      <ULThemeSeparator text="OR" className="my-6" />

      {/* Email/password form */}
      <form className="space-y-4">
        <ULThemeFloatingLabelField
          id="email"
          label="Email"
          type="email"
        />

        <ULThemeButton
          type="submit"
          variant="primary"
          className="w-full"
        >
          Continue with Email
        </ULThemeButton>
      </form>
    </ULThemeCard>
  );
}
```

**Features**:
- Social buttons with teal borders
- Visual separator with "OR" text
- Consistent spacing and alignment

---

## Error Handling

```tsx
import { ULThemeAlert, ULThemeAlertTitle } from "@/components/ULThemeError";

function LoginWithError() {
  const [error, setError] = useState<string | null>(null);

  return (
    <ULThemeCard>
      <ULThemeTitle>Sign In</ULThemeTitle>

      {/* Error alert with dismiss */}
      {error && (
        <ULThemeAlert
          variant="destructive"
          onDismiss={() => setError(null)}
          className="mb-4"
        >
          <ULThemeAlertTitle>{error}</ULThemeAlertTitle>
        </ULThemeAlert>
      )}

      <form onSubmit={handleSubmit}>
        {/* Form fields... */}
      </form>
    </ULThemeCard>
  );
}
```

**Styling**:
- Red background (#EF4444)
- White text for contrast
- Dismissible with X button
- Rounded corners matching buttons

---

## Form with Validation

```tsx
import { ULThemeFloatingLabelField } from "@/components/form/ULThemeFloatingLabelField";
import { ULThemeFormMessage } from "@/components/form/ULThemeFormMessage";

function SignupForm() {
  const [emailError, setEmailError] = useState<string>("");

  return (
    <form className="space-y-4">
      <div>
        <ULThemeFloatingLabelField
          id="email"
          name="email"
          label="Email"
          type="email"
          error={emailError}
          placeholder="Enter your email"
        />
        {emailError && (
          <ULThemeFormMessage error>
            {emailError}
          </ULThemeFormMessage>
        )}
      </div>

      <ULThemeButton
        type="submit"
        variant="primary"
        className="w-full"
      >
        Create Account
      </ULThemeButton>
    </form>
  );
}
```

**Error States**:
- Red border on input field
- Red text for error message
- Maintains focus ring color

---

## Checkbox with Terms

```tsx
import { ULThemeCheckbox } from "@/components/ULThemeCheckbox";
import ULThemeLink from "@/components/ULThemeLink";

function TermsAcceptance() {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="flex items-start gap-3">
      <ULThemeCheckbox
        checked={accepted}
        onCheckedChange={setAccepted}
        id="terms"
      />
      <label
        htmlFor="terms"
        className="text-sm text-body-text cursor-pointer"
      >
        I agree to the{" "}
        <ULThemeLink href="/terms">Terms of Service</ULThemeLink>
        {" "}and{" "}
        <ULThemeLink href="/privacy">Privacy Policy</ULThemeLink>
      </label>
    </div>
  );
}
```

**Features**:
- Purple checkbox when checked
- Purple links inline with text
- Clickable label

---

## Multi-Step Form with Progress

```tsx
import ULThemeSpinner from "@/components/ULThemeSpinner";

function MultiStepSignup() {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  return (
    <ULThemeCard>
      {/* Progress indicator */}
      <div className="flex justify-center gap-2 mb-6">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={cn(
              "h-2 w-12 rounded-full transition-colors",
              s <= step
                ? "bg-primary-button"
                : "bg-input-border"
            )}
          />
        ))}
      </div>

      <ULThemeTitle>
        {step === 1 && "Account Details"}
        {step === 2 && "Personal Info"}
        {step === 3 && "Verification"}
      </ULThemeTitle>

      {/* Form content... */}

      <div className="flex gap-3 mt-6">
        {step > 1 && (
          <ULThemeButton
            variant="outline"
            onClick={() => setStep(step - 1)}
          >
            Back
          </ULThemeButton>
        )}

        <ULThemeButton
          variant="primary"
          className="flex-1"
          onClick={() => setStep(step + 1)}
          disabled={loading}
        >
          {loading ? (
            <ULThemeSpinner size="sm" variant="solid" />
          ) : step === 3 ? (
            "Complete"
          ) : (
            "Continue"
          )}
        </ULThemeButton>
      </div>
    </ULThemeCard>
  );
}
```

**Features**:
- Purple progress bars
- Primary and outline button combination
- Loading spinner in button

---

## Password Strength Indicator

```tsx
import { ULThemePasswordField } from "@/components/ULThemePasswordField";
import { ULThemePasswordValidator } from "@/components/ULThemePasswordValidator";

function SignupWithPasswordStrength() {
  const [password, setPassword] = useState("");

  return (
    <div className="space-y-2">
      <ULThemePasswordField
        id="password"
        name="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <ULThemePasswordValidator
        password={password}
        policy={{
          minLength: 8,
          requireUppercase: true,
          requireLowercase: true,
          requireNumber: true,
          requireSpecial: true,
        }}
      />
    </div>
  );
}
```

**Features**:
- Show/hide password toggle
- Real-time validation feedback
- Color-coded requirements

---

## Full-Width Layout

```tsx
function FullScreenLogin() {
  return (
    <ULThemePageLayout className="theme-universal">
      <div className="w-full max-w-md px-4">
        <ULThemeCard className="w-full">
          {/* Card content */}
        </ULThemeCard>

        {/* Footer links */}
        <div className="mt-6 text-center">
          <ULThemeLink href="/signup">
            Don't have an account? Sign up
          </ULThemeLink>
        </div>
      </div>
    </ULThemePageLayout>
  );
}
```

**Layout**:
- Centered content with max-width
- Gradient background fills viewport
- Footer links outside card

---

## Custom Color Override

```tsx
// For special cases, override theme colors
function BrandedLogin() {
  return (
    <div
      style={{
        "--ul-theme-color-primary-button": "#FF6B6B",
        "--ul-theme-color-base-focus-color": "#FF6B6B",
      } as React.CSSProperties}
    >
      <ULThemePageLayout className="theme-universal">
        <ULThemeCard>
          {/* Components will use red instead of purple */}
        </ULThemeCard>
      </ULThemePageLayout>
    </div>
  );
}
```

**Note**: Inline style overrides CSS variables for the component tree.

---

## Responsive Layout

```tsx
function ResponsiveLogin() {
  return (
    <ULThemePageLayout className="theme-universal">
      <ULThemeCard className="w-full max-w-[90vw] md:max-w-md">
        <ULThemeTitle className="text-xl md:text-2xl">
          Welcome Back
        </ULThemeTitle>

        <form className="space-y-3 md:space-y-4 mt-4 md:mt-6">
          {/* Form fields with responsive spacing */}
        </form>

        {/* Stack buttons on mobile, inline on desktop */}
        <div className="flex flex-col md:flex-row gap-3 mt-6">
          <ULThemeButton
            variant="outline"
            className="w-full md:w-auto"
          >
            Cancel
          </ULThemeButton>
          <ULThemeButton
            variant="primary"
            className="w-full md:w-auto md:flex-1"
          >
            Sign In
          </ULThemeButton>
        </div>
      </ULThemeCard>
    </ULThemePageLayout>
  );
}
```

**Breakpoints**:
- Mobile: Stacked layout, smaller text
- Desktop: Inline buttons, larger text

---

## Accessibility Example

```tsx
function AccessibleLogin() {
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Auto-focus first field
    emailRef.current?.focus();
  }, []);

  return (
    <ULThemeCard>
      <ULThemeTitle id="login-title">
        Sign In
      </ULThemeTitle>

      <form
        aria-labelledby="login-title"
        onSubmit={handleSubmit}
      >
        <ULThemeFloatingLabelField
          ref={emailRef}
          id="email"
          name="email"
          label="Email"
          type="email"
          required
          aria-required="true"
          aria-invalid={!!emailError}
          aria-describedby={emailError ? "email-error" : undefined}
        />
        {emailError && (
          <div
            id="email-error"
            role="alert"
            className="text-error text-sm mt-1"
          >
            {emailError}
          </div>
        )}

        <ULThemeButton
          type="submit"
          variant="primary"
          className="w-full mt-4"
          aria-label="Sign in to your account"
        >
          Sign In
        </ULThemeButton>
      </form>
    </ULThemeCard>
  );
}
```

**Accessibility Features**:
- Auto-focus management
- ARIA labels and descriptions
- Error announcements
- Semantic HTML

---

## Dynamic Theme from API

```tsx
import { applyAuth0Theme } from "@/utils/theme/themeEngine";

function DynamicThemedLogin() {
  const { screenInstance } = useScreenManager();

  useEffect(() => {
    // Apply theme from Auth0 branding API
    if (screenInstance) {
      applyAuth0Theme(screenInstance);
    }
  }, [screenInstance]);

  return (
    <ULThemePageLayout className="theme-universal">
      <ULThemeCard>
        {/* Components automatically use dynamic theme */}
      </ULThemeCard>
    </ULThemePageLayout>
  );
}
```

**Features**:
- Fetches theme from Auth0 tenant settings
- Updates CSS variables dynamically
- Components auto-update with new colors

---

## Testing Theme Components

```tsx
import { render, screen } from "@testing-library/react";
import { ULThemeButton } from "@/components/ULThemeButton";

describe("ULThemeButton", () => {
  it("applies theme classes", () => {
    render(
      <div className="theme-universal">
        <ULThemeButton variant="primary">
          Click Me
        </ULThemeButton>
      </div>
    );

    const button = screen.getByRole("button");
    expect(button).toHaveClass("theme-universal:bg-primary-button");
  });

  it("supports custom colors", () => {
    render(
      <div
        style={{ "--ul-theme-color-primary-button": "#FF0000" }}
      >
        <ULThemeButton variant="primary">Click</ULThemeButton>
      </div>
    );

    const button = screen.getByRole("button");
    const styles = getComputedStyle(button);
    expect(styles.backgroundColor).toBe("rgb(255, 0, 0)");
  });
});
```

---

## Best Practices

### ✅ Do:

1. **Always wrap with theme-universal**
   ```tsx
   <ULThemePageLayout className="theme-universal">
   ```

2. **Use semantic color tokens**
   ```tsx
   className="bg-primary-button text-header"
   ```

3. **Leverage existing components**
   ```tsx
   <ULThemeButton variant="primary">
   ```

4. **Maintain consistent spacing**
   ```tsx
   <form className="space-y-4">
   ```

5. **Test accessibility**
   ```tsx
   <ULThemeButton aria-label="Close dialog">
   ```

### ❌ Don't:

1. **Don't hardcode colors**
   ```tsx
   // ❌ Bad
   className="bg-purple-600"

   // ✅ Good
   className="bg-primary-button"
   ```

2. **Don't skip theme wrapper**
   ```tsx
   // ❌ Bad - theme won't apply
   <ULThemeCard>

   // ✅ Good
   <div className="theme-universal">
     <ULThemeCard>
   ```

3. **Don't mix design systems**
   ```tsx
   // ❌ Bad - mixing raw Tailwind with theme
   <button className="bg-blue-500 rounded-lg">

   // ✅ Good - use themed button
   <ULThemeButton variant="primary">
   ```

4. **Don't ignore responsive design**
   ```tsx
   // ❌ Bad - fixed width
   <ULThemeCard className="w-[400px]">

   // ✅ Good - responsive width
   <ULThemeCard className="w-full max-w-md">
   ```

---

## Quick Reference

### Import Paths

```tsx
// Layout
import ULThemePageLayout from "@/components/ULThemePageLayout";
import ULThemeCard from "@/components/ULThemeCard";

// Typography
import ULThemeTitle from "@/components/ULThemeTitle";
import ULThemeSubtitle from "@/components/ULThemeSubtitle";

// Forms
import { ULThemeFloatingLabelField } from "@/components/form/ULThemeFloatingLabelField";
import { ULThemePasswordField } from "@/components/ULThemePasswordField";
import { ULThemeCheckbox } from "@/components/ULThemeCheckbox";

// Actions
import { ULThemeButton } from "@/components/ULThemeButton";
import ULThemeLink from "@/components/ULThemeLink";
import ULThemeSocialProviderButton from "@/components/ULThemeSocialProviderButton";

// Feedback
import { ULThemeAlert } from "@/components/ULThemeError";
import ULThemeSpinner from "@/components/ULThemeSpinner";
import ULThemeSeparator from "@/components/ULThemeSeparator";
```

### Common Classnames

```tsx
// Spacing
"space-y-4"     // Vertical spacing between elements
"mt-6 mb-4"     // Margin top/bottom
"px-4 py-6"     // Padding horizontal/vertical

// Layout
"w-full"        // Full width
"max-w-md"      // Max width medium
"flex gap-3"    // Flex with gap

// Colors (use theme tokens)
"bg-primary-button"
"text-header"
"border-input-border"

// Theme variant
"theme-universal:bg-primary-button"
```

---

**Examples Version**: 1.0
**Last Updated**: 2025
**Related Files**:
- `THEME_DESIGN.md` - Design system documentation
- `THEME_COMPONENT_GUIDE.md` - Component styling reference
