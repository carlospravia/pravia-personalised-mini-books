---
name: Playful Discovery
colors:
  surface: '#ebffe6'
  surface-dim: '#8ef097'
  surface-bright: '#ebffe6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#d3ffd1'
  surface-container: '#b8ffba'
  surface-container-high: '#9cfea4'
  surface-container-highest: '#96f89f'
  on-surface: '#002107'
  on-surface-variant: '#5b403e'
  inverse-surface: '#003912'
  inverse-on-surface: '#c6ffc6'
  outline: '#8f6f6d'
  outline-variant: '#e4beba'
  surface-tint: '#ba1724'
  primary: '#b71422'
  on-primary: '#ffffff'
  primary-container: '#db3237'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb3ae'
  secondary: '#005db8'
  on-secondary: '#ffffff'
  secondary-container: '#4c96fe'
  on-secondary-container: '#002e60'
  tertiary: '#705d00'
  on-tertiary: '#ffffff'
  tertiary-container: '#caa800'
  on-tertiary-container: '#4c3e00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad7'
  primary-fixed-dim: '#ffb3ae'
  on-primary-fixed: '#410004'
  on-primary-fixed-variant: '#930014'
  secondary-fixed: '#d6e3ff'
  secondary-fixed-dim: '#a9c7ff'
  on-secondary-fixed: '#001b3e'
  on-secondary-fixed-variant: '#00468c'
  tertiary-fixed: '#ffe173'
  tertiary-fixed-dim: '#e8c426'
  on-tertiary-fixed: '#221b00'
  on-tertiary-fixed-variant: '#554500'
  background: '#ebffe6'
  on-background: '#002107'
  surface-variant: '#96f89f'
typography:
  headline-lg:
    fontFamily: Quicksand
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Quicksand
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Quicksand
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Nunito Sans
    fontSize: 20px
    fontWeight: '500'
    lineHeight: '1.6'
  body-md:
    fontFamily: Nunito Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  label-bold:
    fontFamily: Quicksand
    fontSize: 16px
    fontWeight: '700'
    lineHeight: '1.0'
  button-text:
    fontFamily: Quicksand
    fontSize: 22px
    fontWeight: '700'
    lineHeight: '1.0'
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  container-max: 1200px
---

## Brand & Style

This design system is built for a children’s digital environment that prioritizes joy, safety, and exploration. The personality is energetic and welcoming, using a high-contrast but soft-edged visual language to guide young users through educational and entertainment content.

The style is **Tactile & Soft**, utilizing exaggerated rounded corners, chunky interface elements, and subtle "squishy" depth to make digital interactions feel physical and approachable. It avoids sharp edges and clinical minimalism in favor of a vibrant, "toy-like" aesthetic that encourages touch and interaction while maintaining high accessibility standards for early readers and motor-skill development.

## Colors

The palette is rooted in the "Primary Trio"—a bold red for urgent or high-energy actions, a trustworthy blue for core navigation, and a sunny yellow for highlights and rewards. A soft green acts as a secondary neutral for success states and natural themes.

- **Primary (Red):** Used for "Play" buttons, active states, and critical paths.
- **Secondary (Blue):** Used for structural elements, headers, and secondary buttons.
- **Tertiary (Yellow):** Used for stars, currency, and attention-grabbing accents.
- **Background:** A warm, off-white "Cream" replaces pure white to reduce eye strain and provide a softer, more paper-like feel.
- **Text:** A deep charcoal instead of pure black maintains high contrast while feeling friendlier.

## Typography

The typography strategy focuses on legibility and friendliness. We use **Quicksand** for headlines and interactive labels due to its rounded terminals and open apertures, which mimic early handwriting styles taught to children. 

**Nunito Sans** is used for body text to provide a slightly more stable, readable experience for longer instructions. 
- **Sizing:** All text sizes are bumped up by roughly 20% compared to standard web apps to accommodate developing vision and larger tap targets.
- **Line Height:** Generous line heights prevent text from appearing crowded.
- **Weight:** Heavy weights are preferred for clarity and to maintain the "chunky" brand aesthetic.

## Layout & Spacing

This design system uses a **Fluid & Centered** layout. Content is typically housed in a large central container to prevent children from having to scan too far horizontally.

- **The 8px Rhythm:** All spacing (padding, margins, gaps) must be a multiple of 8px.
- **Large Gutters:** Generous 24px gutters ensure that interactive elements are clearly separated, preventing accidental taps.
- **Mobile First:** On mobile, layouts transition to a single-column stack with full-width buttons to make navigation easy for smaller hands.
- **Safe Areas:** Maintain a minimum 16px margin from the screen edge on all devices.

## Elevation & Depth

To achieve the tactile, toy-like feel, the design system avoids realistic shadows in favor of **Tonal Offsets** and **Hard Drop Shadows**.

- **Chunky Depth:** Buttons and cards should feature a solid, darker-toned bottom border (typically 4px to 8px) to simulate a 3D physical object that can be pressed down.
- **Inner Gloom:** When a button is "pressed," the solid bottom border disappears and the element shifts down by a few pixels, providing instant physical feedback.
- **Soft Layering:** Use low-opacity, high-blur ambient shadows only for large overlays (like modals) to separate them from the main play area.

## Shapes

The shape language is defined by the **Pill-shaped** philosophy. There are no sharp corners in the UI.

- **Standard Elements:** Use a 16px (1rem) radius for standard containers and inputs.
- **Buttons:** Always use fully rounded (pill) ends for primary action buttons.
- **Icons:** Icons should be enclosed in circular or rounded-square containers with thick strokes to match the weight of the typography.

## Components

### Buttons
Buttons are the core of the experience. They must be "chunky" with a 4px bottom offset in a darker shade of the button's color. Text should be centered and set in `button-text` style.

### Cards
Cards are used to house activities or content blocks. They should have a thick 2px colored border and a subtle background tint that matches the category of the content (e.g., Blue for Math, Red for Reading).

### Input Fields
Inputs are oversized with a 16px border radius. Use thick borders (3px) that change color when focused. Placeholders should be high-contrast to assist early readers.

### Progress Bars
Progress bars are thick and rounded. The "track" is a light neutral, while the "fill" uses a vibrant gradient or the Primary Red. Add a small character icon at the tip of the progress fill for extra delight.

### Chips/Tags
Use these for filtering activities. Chips should look like physical stickers—white background, thick colored border, and rounded corners.

### Interactive Feedback
Every interaction (click/tap) must trigger a visual "squish" or scale-down effect (scale 0.95) to confirm the action to the user.