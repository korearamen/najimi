---
name: Modern Japanese Craft
colors:
  surface: '#fff8ef'
  surface-dim: '#e1d9cb'
  surface-bright: '#fff8ef'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf3e4'
  surface-container: '#f5edde'
  surface-container-high: '#efe7d9'
  surface-container-highest: '#e9e2d3'
  on-surface: '#1e1b13'
  on-surface-variant: '#444748'
  inverse-surface: '#343026'
  inverse-on-surface: '#f8f0e1'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#a23f00'
  on-secondary: '#ffffff'
  secondary-container: '#fc7127'
  on-secondary-container: '#5c2000'
  tertiary: '#715c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#c8a82c'
  on-tertiary-container: '#4d3e00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffdbcd'
  secondary-fixed-dim: '#ffb595'
  on-secondary-fixed: '#351000'
  on-secondary-fixed-variant: '#7c2e00'
  tertiary-fixed: '#ffe17b'
  tertiary-fixed-dim: '#e6c447'
  on-tertiary-fixed: '#231b00'
  on-tertiary-fixed-variant: '#564500'
  background: '#fff8ef'
  on-background: '#1e1b13'
  surface-variant: '#e9e2d3'
  washi-white: '#FDF5E6'
  iron-black: '#1A1A1A'
  miso-terracotta: '#D35400'
  shio-gold: '#D3B236'
  paper-shadow: '#F0F0E1'
typography:
  display-lg:
    fontFamily: ebGaramond
    fontSize: 48px
    fontWeight: '500'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: ebGaramond
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: ebGaramond
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  headline-md:
    fontFamily: ebGaramond
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: hankenGrotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: hankenGrotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: hankenGrotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: hankenGrotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The design system embodies "Modern Japanese Craft"—a philosophy that balances the precision of traditional culinary arts with a contemporary, welcoming atmosphere. It targets a discerning audience seeking both a premium dining experience and the comfort of a soul-warming bowl of ramen.

The visual style is **Minimalist** with **Tactile** influences. It utilizes heavy whitespace to allow high-quality food photography to breathe, while integrating subtle digital textures reminiscent of *washi* paper. The emotional response is one of refined warmth: sophisticated enough for a special evening, yet grounded and friendly enough for a daily ritual.

## Colors
The palette is rooted in the ingredients and tools of the craft. **Iron Black** serves as the foundation for typography and structural elements, providing a grounded, premium feel. **Miso Terracotta** is used strategically for primary actions and accents, evoking appetite and warmth. 

**Washi White** (Soft Cream) replaces pure white as the primary background color to reduce ocular strain and reinforce the organic, paper-like texture of the brand. **Shio Gold** is reserved for secondary highlights, awards, or special menu items to denote quality.

## Typography
The typographic system pairs the classical elegance of **EB Garamond** with the precision of **Hanken Grotesk**. 

Headlines use the Serif to evoke the "Craft" aspect of the brand, appearing editorial and authoritative. Body text utilizes the Sans-serif for maximum readability and a "Modern" friendly tone. Label styles should frequently employ uppercase with generous letter spacing to act as "markers" or "stamps" within the layout, mimicking traditional Japanese seals.

## Layout & Spacing
This design system employs a **Fixed Grid** for desktop (12 columns) and a **Fluid Grid** for mobile (4 columns). 

The spacing rhythm is intentional and generous, utilizing "Ma" (negative space) to create a sense of calm. Layouts should prioritize asymmetrical balance, placing high-resolution imagery against large blocks of `washi-white` space. Components are separated by a consistent 8px scale, using larger gaps (48px+) to delineate major sections.

## Elevation & Depth
Depth is created through **Tonal Layers** and **Low-contrast Outlines** rather than heavy shadows. 

1.  **Base Surface:** `washi-white` (#FDF5E6).
2.  **Elevated Cards:** Use a subtle 1px border in `paper-shadow` (#F0F0E1) or a very soft, tinted ambient shadow (0px 4px 20px rgba(26, 26, 26, 0.04)).
3.  **Active Elements:** Elements that require interaction may use a slightly darker border or a very thin 0.5px `iron-black` stroke to denote focus.

Textured overlays (grain/paper noise) should be applied to the base surface at a low opacity (3-5%) to prevent the UI from feeling "flat" or sterile.

## Shapes
The shape language is **Soft (Level 1)**. Elements feature a subtle 0.25rem (4px) corner radius, which maintains a structured, professional appearance while feeling approachable. 

Interactive elements like buttons should never be fully pill-shaped; they should remain rectangular with soft corners to reflect the geometric nature of Japanese architecture. Icons must follow a "refined hand-drawn" style—organic lines that are cleaned up for digital legibility.

## Components
-   **Buttons:** Primary buttons use `iron-black` backgrounds with `washi-white` text. Secondary buttons use `miso-terracotta` text with a thin `miso-terracotta` border.
-   **Input Fields:** Ghost-style inputs with a bottom-only 1px border in `iron-black` or `paper-shadow`, emphasizing a minimalist, "written" aesthetic.
-   **Cards:** Menu items are displayed on cards with no visible background (blending into the `washi-white` surface), defined only by high-quality photography and thin dividers.
-   **Chips/Tags:** Used for dietary labels (e.g., "Vegan," "Spicy"). These should use the `label-sm` typography and a very light `shio-gold` background tint.
-   **Dividers:** Use extremely thin (0.5px) horizontal or vertical lines in `paper-shadow` to separate content without breaking the visual flow.
-   **Icons:** Hand-drawn brush-stroke style icons for ramen bowls, chopsticks, and ingredients. The strokes should have slight variations in thickness to feel authentic.