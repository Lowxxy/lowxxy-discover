# Lowxxy Discover - Clean Rebuild

This package is a clean reset built from the last consistent desktop design (V11.15), not from the currently mixed GitHub files.

## Why this reset
The live GitHub repo currently has a later mobile `index.html` with V11.22/V11.24 inline overrides, while `styles.css` is an older layout file. Those two files no longer match, which is why both desktop and phone behavior drifted.

## What this package does
- Restores the approved cinematic desktop hero: camera left, centered Lowxxy links, taped projected shirt photo right, and projector glow.
- Phone stays NON-STACKED: camera left, links center, taped photo right.
- Camera and photo are scaled to similar visual weight on phone.
- Projector beam starts near the mobile camera lens and runs toward the photo.
- Mobile lookbook is a smaller horizontal swipe reel with film-strip perforation styling.
- Removes the pile of conflicting inline mobile patches.

## Install
Replace the matching files in the root of `Lowxxy/lowxxy-discover` with every file in this folder.
