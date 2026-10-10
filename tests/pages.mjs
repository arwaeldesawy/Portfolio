import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';

const base = process.env.PAGES_URL || 'http://localhost:3002/Portfolio/';
const slugs = ['medivault', 'prompt-library', 'ai-customer-support', 'brain-tumor', 'resume-screening', 'nids'];
const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();
const errors = [];
page.on('pageerror', error => errors.push(error.message));
page.on('console', message => { if (['error', 'warning'].includes(message.type())) errors.push(message.text()); });
page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
try {
  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: width === 390 ? 844 : 1000 });
    const response = await page.goto(base, { waitUntil: 'networkidle' });
    assert.equal(response.status(), 200);
    await page.evaluate(() => document.fonts.ready);
    await page.locator('.hero-portrait img').evaluate(image => image.decode());
    assert.equal(await page.locator('h1').textContent(), 'Arwa Elsayed Eldesawy.');
    assert.equal(await page.locator('body').evaluate(element => getComputedStyle(element).backgroundColor), 'rgb(23, 23, 23)');
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    const accessibility = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    assert.deepEqual(accessibility.violations.map(violation => violation.id), []);
    await page.screenshot({ path: `docs/screenshots/pages-${width}.png` });
  }
  const cv = page.getByRole('link', { name: 'Download CV', exact: true });
  assert.equal(new URL(await cv.getAttribute('href'), base).pathname, '/Portfolio/Arwa_Eldesawy_CV.pdf');
  const downloadEvent = page.waitForEvent('download');
  await cv.click();
  assert.equal(await (await downloadEvent).failure(), null);
  const pdf = await page.request.get(new URL('Arwa_Eldesawy_CV.pdf', base).href);
  assert.equal(pdf.status(), 200);
  assert.deepEqual(await pdf.body(), await fs.readFile('public/Arwa_Eldesawy_CV.pdf'));
  await page.getByRole('link', { name: 'MediVault', exact: true }).click();
  await page.waitForURL(`${base}projects/medivault/`);
  await page.getByRole('link', { name: /Next project/ }).click();
  await page.waitForURL(`${base}projects/prompt-library/`);
  await page.reload({ waitUntil: 'networkidle' });
  assert.equal(await page.locator('h1').textContent(), 'Prompt Library');
  await page.goBack();
  await page.waitForURL(`${base}projects/medivault/`);
  await page.getByRole('link', { name: 'All projects', exact: true }).first().click();
  await page.waitForURL(`${base}#projects`);
  for (const slug of slugs) {
    const response = await page.goto(`${base}projects/${slug}/`, { waitUntil: 'networkidle' });
    assert.equal(response.status(), 200);
    assert.equal(await page.locator('h1').count(), 1);
    const imageUrl = await page.locator('meta[property="og:image"]').getAttribute('content');
    assert.ok(imageUrl.startsWith('https://arwaeldesawy.github.io/Portfolio/'));
    const image = await page.request.get(new URL(new URL(imageUrl).pathname, base).href);
    assert.equal(image.status(), 200);
    assert.equal((await image.body()).subarray(1, 4).toString(), 'PNG');
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: 'Open menu' }).click();
  await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Projects' }).click();
  await page.waitForURL(`${base}#projects`);
  await page.getByRole('button', { name: 'Next projects below gallery', exact: true }).click();
  await page.waitForFunction(() => document.querySelector('.gallery-viewport').scrollLeft > 200);
  assert.deepEqual(errors, []);
  console.log('Pages checks passed: desktop/mobile styling, portrait, fonts, accessibility, all six direct routes, client navigation, reload, browser back, OG artwork, CV download, mobile menu, gallery controls, and no broken requests.');
} finally {
  await browser.close();
}
