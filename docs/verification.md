# Local verification

TypeScript, ESLint, and production build pass. The homepage, all six project case studies, favicon, and all seven Open Graph images are statically generated. No production canonical URL is set.

The redesigned charcoal-and-wine portfolio uses centered content and six original project thumbnails. The production browser checks cover gallery arrows above and below the mobile cards, 44px control targets, project shortcuts, end states, native keyboard scrolling, all section anchors, six case-study routes, CV download byte preservation, email/phone/social links, clipboard success and failure, mobile menu keyboard behavior, focus return, menu selection, previous/next case-study navigation, browser back navigation, and reduced motion. Axe reports no WCAG A/AA violations on the homepage at desktop/mobile sizes or any case-study route.

Screenshots are saved at 360, 390, 768, 1440, and 1920 pixels in `docs/screenshots/`. The 200% check uses CSS zoom and a 720px effective viewport to validate reflow. Overflow, image loading, browser errors, and console warnings are checked programmatically.

Final mobile Lighthouse scores (local production build, standard mobile simulation):

| Route | Performance | Accessibility | SEO | Best practices | CLS |
| --- | ---: | ---: | ---: | ---: | ---: |
| Homepage | 96 | 100 | 100 | 100 | <0.001 |
| MediVault | 98 | 100 | 100 | 100 | 0 |

Full HTML and JSON audit reports are stored alongside this file. Lighthouse scores can vary by machine and run.
