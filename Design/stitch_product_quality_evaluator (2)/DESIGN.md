---
name: Vivid Bento
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#434655'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#a200ba'
  on-secondary: '#ffffff'
  secondary-container: '#ea57ff'
  on-secondary-container: '#580066'
  tertiary: '#943700'
  on-tertiary: '#ffffff'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#ffd6fd'
  secondary-fixed-dim: '#fbabff'
  on-secondary-fixed: '#36003e'
  on-secondary-fixed-variant: '#7c008e'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-md:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-card:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 28px
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  headline-card-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  grid-margin: 2rem
  grid-gutter: 1.5rem
  card-padding: 2rem
  card-padding-sm: 1.25rem
  stack-gap: 0.75rem
---

## Brand & Style
The design system is centered on a vibrant, information-dense "Bento" layout. It balances high-energy colors with a systematic, professional structure. The brand personality is confident, modern, and highly organized, designed to make complex information digestible and engaging. 

The style blends **Minimalism** (clean lines, generous negative space within cards) with **High-Contrast** elements. It utilizes subtle background patterns—abstract organic linework—to add texture without compromising readability. The emotional response is one of clarity and technical sophistication.

## Colors
The color strategy employs a "High-Accessibility Bento" approach. Each card utilizes a deep, saturated base color from the palette to define its category. 

To ensure WCAG AA compliance for small text, secondary elements (like badges and icons) use semi-transparent white overlays (`rgba(255, 255, 255, 0.2)`) or high-contrast solid fills. The background of the application is a very light neutral to allow the vibrant cards to pop. 

**Color Roles:**
- **Primary/Neutral:** Used for the global interface and background.
- **Categorical Palette:** Saturated tones for card backgrounds, optimized for white text overlays.

## Typography
**Hanken Grotesk** is selected for its sharp, contemporary geometry and exceptional legibility at various weights. 

The type hierarchy is designed to contrast against the bold card backgrounds. Headlines within larger cards use a medium-to-bold weight with tight letter spacing for a punchy, editorial feel. Smaller cards prioritize clarity, utilizing slightly smaller font sizes but maintaining a medium weight to ensure the text remains legible against colored backgrounds. All text on colored cards should be pure white (#FFFFFF) for maximum contrast.

## Layout & Spacing
This design system utilizes a **Fluid Bento Grid** model. The layout is based on a 12-column grid on desktop, which reflows to a 1-column or 2-column stack on mobile.

**Grid Logic:**
- Cards should have aspect ratios that align to a square or a golden-ratio rectangle.
- **Gutters:** A consistent 24px (1.5rem) gap is maintained between all cards to ensure the "Bento" tiles feel distinct but unified.
- **Margins:** Within cards, a generous 32px padding is used for large tiles, dropping to 20px for smaller tiles to maximize content area.
- **Reflow:** On tablet, 3-column configurations transition to 2-column. On mobile, all cards span full width, with their height adjusted to fit content.

## Elevation & Depth
Depth is achieved through **Tonal Layers** and subtle **Ambient Shadows**. Instead of heavy shadows, the system uses "Soft Depth":
- **Base Level:** The background is a flat, light neutral.
- **Card Level:** Each card has a very subtle, large-radius shadow (15% opacity of the card's own hue) to give it a slight lift from the background.
- **Patterning:** Subtle, low-contrast SVG patterns (circles or waves) are layered at 10% opacity behind the card text to create a sense of texture and sophistication.
- **Interactions:** On hover, cards should scale slightly (1.02x) and increase shadow density to signal interactivity.

## Shapes
The shape language is "Friendly-Technical." Large corner radii are used to soften the high-density grid. 

- **Cards:** Use a consistent `rounded-xl` (1.5rem / 24px) corner radius.
- **Inner Components:** Badges and buttons use a `pill-shaped` (full round) radius to contrast against the card's rectangular frame.
- **Icons:** Should follow a 2px stroke weight with slightly rounded terminals to match the font's aesthetic.

## Components

### Bento Cards
The core component. Each card must contain a header (label), a main content area (typography-focused), and an optional footer (badge). Backgrounds are solid color from the palette with a subtle overlay pattern.

### Badges (Chips)
Used for tagging and categorization. Inside colored cards, badges should be styled with a "Glass" effect: a white border (1px, 30% opacity) and a semi-transparent white fill. This ensures they are visible without introducing competing colors.

### Iconography
Icons should be refined, using linear styles. Within smaller cards, icons are placed in the top right or bottom right at a reduced size (20px) to prevent crowding text.

### Inputs & Buttons
Interactive elements inside cards should maintain high contrast. Primary actions use a solid white background with text in the card's specific theme color. Secondary actions use the "Glass" style defined for badges.

### Text Groups
Vertical rhythm is strictly enforced. Labels are always placed at the top, followed by the main headline, then body text or badges at the bottom, creating a consistent scanning pattern across the grid.