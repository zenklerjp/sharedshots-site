---
name: SharedShots
description: A warm photo-lab system for one shared event roll.
colors:
  paper: "#f4efe5"
  paper-bright: "#fffaf0"
  paper-deep: "#e7dfd0"
  ink: "#151917"
  muted: "#5b625d"
  teal: "#0a7772"
  teal-strong: "#075e5a"
  teal-soft: "#cce9e4"
  amber: "#d59231"
  film: "#121411"
  hairline: "rgba(21, 25, 23, 0.2)"
  white: "#ffffff"
  header-glass: "rgba(247, 241, 231, 0.78)"
typography:
  display:
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    fontSize: "clamp(2.7rem, 5vw, 5rem)"
    fontWeight: 780
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  title:
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    fontSize: "1.08rem"
    fontWeight: 730
    lineHeight: 1.5
    letterSpacing: "-0.015em"
  body:
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    fontSize: "1.08rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    fontSize: "0.68rem"
    fontWeight: 780
    lineHeight: 1.35
    letterSpacing: "0.08em"
  lab-label:
    fontFamily: '"Aptos Narrow", "Bahnschrift SemiCondensed", sans-serif'
    fontSize: "0.67rem"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "0.08em"
rounded:
  focus: "4px"
  legal-icon: "8px"
  media: "12px"
  action: "14px"
  chrome: "16px"
  pill: "999px"
spacing:
  micro: "8px"
  compact: "14px"
  mobile-gutter: "18px"
  control: "22px"
  cluster: "28px"
  page-gutter: "clamp(22px, 5vw, 76px)"
  section-major: "clamp(120px, 15vw, 190px)"
components:
  site-header:
    backgroundColor: "{colors.header-glass}"
    textColor: "{colors.ink}"
    rounded: "{rounded.chrome}"
    padding: "9px 14px"
    height: "64px"
  header-action:
    backgroundColor: "{colors.teal-strong}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "42px"
  primary-action:
    backgroundColor: "{colors.teal-strong}"
    textColor: "{colors.white}"
    rounded: "{rounded.action}"
    padding: "0 24px"
    height: "58px"
  text-action:
    backgroundColor: "transparent"
    textColor: "{colors.teal-strong}"
    padding: "0"
    height: "44px"
  paper-card:
    backgroundColor: "{colors.paper-bright}"
    textColor: "{colors.ink}"
    padding: "clamp(36px, 7vw, 86px)"
  screen-frame:
    backgroundColor: "rgba(255, 250, 240, 0.58)"
    textColor: "{colors.teal-strong}"
    padding: "18px 18px 13px"
  host-chip:
    backgroundColor: "transparent"
    textColor: "{colors.paper-bright}"
    rounded: "{rounded.pill}"
    padding: "9px 13px"
---

# Design System: SharedShots

## Overview

**Creative North Star: "Afterparty Light Table"**

SharedShots should feel like the table where an event's film has just come back: warm, physical, slightly imperfect, and carefully arranged so the whole night can be read at a glance. The interface combines a calm editorial hierarchy with recognizable photo-lab materials instead of treating nostalgia as a decorative filter.

The system is spacious and host-led. Paper carries explanation, film-black surfaces hold photographic proof, and teal marks the controls and registration details that move the album forward. It rejects generic floating-phone hero compositions, sterile software chrome, fabricated social proof, and decorative effects that hide the actual product.

**Key Characteristics:**

- Warm paper, acetate, film rails, registration marks, and contact-sheet rhythm.
- Large, compact headlines paired with direct, practical body copy.
- Teal used for action and lab notation, never as an all-over wash.
- Real product screens and event imagery arranged as physical evidence.
- Restrained, spring-like motion that settles into a legible composition.

## Colors

The palette moves between warm photo paper and near-black film, with teal as the single operational accent and amber reserved for small analog marks.

### Primary

- **Darkroom Teal** (teal-strong): Primary actions, linked text, registration details, and control marks.
- **Registration Teal** (teal): Focus rings and crosshair-style registration details.
- **Washed Teal** (teal-soft): Taped notes and low-emphasis labels that need color without command weight.

### Secondary

- **Process Amber** (amber): A minor analog accent for film notation and production details, including the timing labels on the plan-ahead worksheet. It should remain rarer than teal, and it never marks something pressable - that is teal's job.

### Neutral

- **Light-Table Paper** (paper): The default page field and legal-document surface.
- **Fresh Print** (paper-bright): Copy plates, cards, and light text on film-black surfaces.
- **Aged Stock** (paper-deep): Sleeves, fallback media, table headers, and quiet code backgrounds.
- **Developed Ink** (ink): Headlines, primary text, rules, and structural borders.
- **Caption Gray** (muted): Supporting copy and explanatory text.
- **Film Black** (film): Photographic frames and the full-width host-control section.
- **Hairline Ink** (hairline): Thin dividers that organize without becoming boxes.

### Named Rules

**The One Accent, Two Jobs Rule.** Teal signals both action and photo-lab registration; do not add a second digital accent for routine interaction.

**The Paper Has Temperature Rule.** Use warm paper neutrals for reading surfaces. Pure white belongs only inside actions or supplied product imagery.

**The Black Means Film Rule.** Reserve Film Black for photographic context, proof frames, and deliberate high-contrast sections.

## Typography

**Display Font:** System UI sans serif with Apple-first fallbacks  
**Body Font:** System UI sans serif with Apple-first fallbacks  
**Label/Mono Font:** Aptos Narrow or Bahnschrift SemiCondensed for lab notes; system UI for functional labels

**Character:** The system uses one familiar interface family at unusually bold weights, then shifts to a condensed workroom voice for handwritten-style production marks. It is direct and compact rather than glossy or editorially precious.

### Hierarchy

- **Display** (780, clamp(2.7rem, 5vw, 5rem), 0.98): Section-defining statements with tight line breaks and balanced wrapping. The hero uses a smaller maximum but the same weight, tracking, and compact line-height.
- **Title** (730, 1.08rem, 1.5): Feature names, disclosure questions, and compact interface headings.
- **Body** (400, 1.08rem, 1.6): Explanations and section introductions, generally held to about 36 to 62 characters per line.
- **Label** (780, 0.68rem, 0.08em): Uppercase indices, stamps, and screen captions.
- **Lab Label** (700, 0.67rem, 0.08em): Taped notes and production marks that should feel applied by hand.

### Named Rules

**The Compressed Headline Rule.** Headlines are bold, tightly tracked, and close-set; use deliberate line breaks to create rhythm instead of adding decorative typefaces.

**The Two Voices Rule.** System UI carries meaning. The condensed lab face is only for short, nonessential marks and never for body copy or calls to action.

## Layout

The desktop layout uses wide editorial grids inside flexible gutters. Most content sections cap at 1240px, the app-screen run opens to 1480px, and the hero can span the viewport because its light-table background is part of the composition. Major sections use generous vertical intervals and pair a large statement with a narrower proof or explanation.

Above 860px, the header has three columns, the hero splits copy from a convergence stage, and the process uses a vertical annotated sequence beside one large join-code proof. The app proof is a four-screen run, while feature or control sections use two columns. Sticky section introductions are limited to long desktop comparisons. At 860px and below, navigation links disappear, the hero and feature content stack, the app proof becomes a two-column grid, and sticky copy becomes static.

At 620px and below, the page uses fluid 20–24px safe-area-aware gutters, copy appears before visual proof, multi-column lists become single columns, the host-control copy moves before its screenshot, and the final action becomes full width. The app-screen run changes to a horizontal, start-snapping strip rather than shrinking the screenshots below legibility. All layouts must remain free of horizontal page overflow even when photographic elements rotate or cross section boundaries.

**The Proof Follows the Promise Rule.** On small screens, retain the message-first order and place the convergence image immediately after it; do not interleave decorative fragments between the proposition and its proof.

## Elevation & Depth

Depth is material and structural, not a blanket card treatment. Raised paper, acetate sleeves, photographic prints, and the inset translucent header use warm, diffuse shadows. Most explanatory sections remain flat and rely on hairlines, tonal contrast, overlap, and slight rotation.

### Shadow Vocabulary

- **Soft Contact Shadow** (0 28px 70px rgba(35, 29, 21, 0.18)): Large contact sheets and photographic proof.
- **Lifted Film Shadow** (0 18px 42px rgba(35, 29, 21, 0.2)): Narrow film rails and compact proof layers.
- **Floating Header Shadow** (0 9px 30px rgba(39, 31, 21, 0.15)): The fixed translucent navigation rail.
- **Paper Plate Shadow** (14px 22px 52px rgba(46, 36, 24, 0.2)): Tactile hero copy plates.
- **Darkroom Print Shadow** (22px 30px 74px rgba(0, 0, 0, 0.46)): Light paper held over Film Black.

### Named Rules

**The Evidence Casts the Shadow Rule.** Use elevation on objects that behave like physical evidence: prints, sleeves, notes, and the navigation rail. Ordinary text groups stay flat.

## Shapes

The form language mixes square photographic edges with softened interactive chrome. Contact sheets and proof cards stay nearly square, while primary actions use a 14px curve, the fixed header uses 16px, app and brand media use 10px to 12px, and compact chips are fully pill-shaped. Borders are hairline and low contrast unless they are intentionally representing a black film frame.

Small rotations between -3 and 4 degrees are allowed on physical objects to create an assembled-table feel. Keep text sections level, and never rotate an object so far that reading or tapping becomes uncertain.

**The Soft Controls, Square Evidence Rule.** Round interactive chrome; keep photographs, screens, contact sheets, and lab cards rectilinear.

## Components

### Buttons

- **Header action:** A compact Darkroom Teal pill with a 42px minimum height and white text. Hover deepens the teal; active state scales to 0.97.
- **Primary action:** A Darkroom Teal rounded rectangle with a 58px minimum height and 24px horizontal padding. It becomes full width on small screens.
- **Text action:** Underlined Darkroom Teal text with a 44px minimum target. Its arrow nudges by only a few pixels on hover.
- **App Store badge:** Use the official supplied black badge without recoloring, redrawing, rounding, or animating its artwork. Render it at 48px high on desktop and 44px on mobile.
- **Focus:** Links and disclosures use a 3px Registration Teal outline with a 4px offset. Never remove this state.

### Cards / Containers

- **Paper card:** Fresh Print over the warm page field, with a fine border only when separation is needed. Padding grows with the viewport and corners remain square.
- **Screen frame:** A translucent paper sleeve with an ink hairline, compact padding, and an uppercase teal caption. Staggering and slight rotation are desktop-only.
- **Contact proof:** A Film Black frame around the contact sheet, with a compact uppercase legend. The actual image remains the visual center.
- **Dark section:** The host-control section uses Film Black as a full-width field rather than a floating card.
- **Printed table card:** Fresh Print on a square-cornered plate with an ink hairline, a Paper Plate shadow and a small rotation, standing in for a card a host prints and puts on a table. It carries the brand mark, one line of guest instruction, and the event code at display weight with wide tracking. It shows the code rather than a drawn QR: an unscannable QR printed on the section that tells hosts to print QR codes is the one promise this page must not make, so the QR is named in the copy and generated in the app. Its instruction has to match what the site can actually do - `album.html` reads the code from the query string and offers no field to type one into.

### Chips

- **Host controls:** Transparent pills on Film Black, with a low-opacity paper border and Fresh Print text.
- **Lab notes:** Washed Teal paper, Darkroom Teal condensed text, square corners, and a subtle physical rotation. They annotate; they do not act.

### Navigation

The fixed header is an inset, 64px-high translucent paper rail with 16px corners, a warm shadow, and 22px background blur. Desktop navigation sits between the brand and the App Store action. At 860px and below, keep only the brand and action.

Privacy and Terms use the same palette and brand mark in a quiet 760px reading column. The join and browser-album routes are operational guest flows with their own incumbent inline styles and deep-link behavior; preserve their URLs and functionality before any future visual convergence. The landing system must not turn those flows into marketing pages.

### Motion

State feedback lasts 160ms to 220ms. The initial convergence uses the shared ease-out curve over 1100ms to 1200ms so the loose photo prints and proof settle as one physical arrangement. When reduced motion is requested, smooth scrolling stops and transition or animation durations collapse to 0.01ms.

## Do's and Don'ts

### Do:

- **Do** lead with the event host's payoff, then show real product proof close to the claim.
- **Do** use warm paper for reading, Film Black for photographic context, and Darkroom Teal for action or lab registration.
- **Do** preserve large display type, generous section spacing, and compact supporting copy.
- **Do** use documentary event imagery with ordinary framing, imperfect flash, and natural texture; keep screenshot source files unaltered and crop them only when the surrounding App Store artwork obscures the interface.
- **Do** preserve visible focus, reduced-motion behavior, meaningful alt text, and at least 40px interactive targets.
- **Do** retain Privacy, Terms, join, and browser-album routes when extending or deploying the site.

### Don't:

- **Don't** replace the light-table world with a generic gradient, floating device mockup, or stack of interchangeable rounded cards.
- **Don't** use the condensed lab face for functional copy, long labels, or body text.
- **Don't** add fabricated ratings, review quotes, usage totals, awards, or unsupported pricing claims.
- **Don't** apply shadows to every container; depth belongs to physical evidence and deliberate chrome.
- **Don't** recolor, animate, crop, or reconstruct the official App Store badge.
- **Don't** sacrifice image legibility or introduce page-level horizontal scrolling to preserve a desktop collage on mobile.
