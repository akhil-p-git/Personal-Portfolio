---
version: alpha
name: Akhil Pinnani Portfolio
description: Personal site for a full-stack engineer, read by hiring managers and recruiters. Procedure-document and site-signage vocabulary, one hi-vis accent.
colors:
  ink: "#0F211D"
  paper: "#F2F5F1"
  muted: "#44564F"
  rule: "#BCC9C2"
  surface: "#E6ECE6"
  hivis: "#F4C20D"
  on-hivis: "#0F211D"
  dark-paper: "#0B1A17"
  dark-ink: "#E9F0EC"
typography:
  display:
    fontFamily: Archivo
    fontSize: 88px
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: -0.02em
  heading:
    fontFamily: Archivo
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.1
  body:
    fontFamily: Source Serif 4
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: Archivo
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.4
rounded:
  sm: 2px
  md: 4px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
components:
  button-primary:
    backgroundColor: "{colors.hivis}"
    textColor: "{colors.on-hivis}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: 12px 20px
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: 12px 20px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: 24px
---

## Overview
A procedure document for a working engineer. Left-aligned, strong grid, signage-style condensed headlines over a readable serif. The single memorable element is the hi-vis band in the hero. Everything else stays quiet.

## Colors
Cool green-grey paper and green-black ink, never neutral black. Hi-vis yellow is a fill or a highlight, never text on the light theme (it fails contrast there). Dark mode is a separate palette on the same hue with the same yellow, which works as text on dark.

## Typography
Archivo at condensed width for headings. Source Serif 4 for body, with extra leading, measure under 70 characters. Labels use Archivo at normal width in sentence case.

## Layout
Section titles in a left column, content on the right from the md breakpoint. Max width 72rem. Mobile is a single column with a 16px gutter.

## Shapes
2px on buttons and chips, 4px on cards. No pills.

## Motion
Hero headline reveals once on load. Scroll reveals are small (12px, opacity) and only on project cards and timeline entries. Hover changes color or underline, never position. All motion is off under prefers-reduced-motion.

## Do's and Don'ts
- Do show real screenshots only. No screenshot means no image, not a placeholder.
- Do keep every fact traceable to master-resume.md or the project's README.
- Don't use cream with terracotta, a serif display, a near-black page with neon, gradients, glass, pills or tracked all-caps eyebrows.
- Don't number things that are not a sequence, or accent one word of a headline.
- Don't add an arrow to every link, or lift every card on hover.
