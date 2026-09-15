import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';

const read = (p) => readFile(new URL(p, import.meta.url), 'utf8');

test('brand, value proposition and booking CTA are present', async () => {
  const hero = await read('../components/hero.tsx');
  assert.match(hero, /Serenity Spa/);
  assert.match(hero, /<h1/);
  assert.match(hero, /Book now/);
  assert.match(hero, /href="#booking"/);
});

test('header offers an accessible booking path', async () => {
  const header = await read('../components/site-header.tsx');
  assert.match(header, /aria-label="Main navigation"/);
  assert.match(header, /aria-label="Book an appointment"/);
});

test('services section lists at least three named treatments', async () => {
  const services = await read('../components/services.tsx');
  assert.match(services, /<h2/);
  const names = services.match(/name: '/g) ?? [];
  assert.ok(names.length >= 3, `expected >= 3 services, got ${names.length}`);
  assert.match(services, /Eucalyptus Renewal Facial/);
});

test('every link points at a real target (no dead href="#")', async () => {
  const dir = new URL('../components/', import.meta.url);
  for (const f of await readdir(dir)) {
    if (!f.endsWith('.tsx')) continue;
    const src = await readFile(new URL(f, dir), 'utf8');
    const dead = src.match(/href="#(?!booking|services|about|visit|top|top-anchor)[^"]*"/g);
    assert.equal(dead, null, `${f} contains dead hrefs: ${dead}`);
  }
});

test('semantic landmarks: header, main, footer, exactly one h1', async () => {
  const page = await read('../app/page.tsx');
  assert.match(page, /<main/);
  assert.match(page, /<SiteHeader \/>/);
  assert.match(page, /<SiteFooter \/>/);
  const hero = await read('../components/hero.tsx');
  const files = ['../components/services.tsx', '../components/about.tsx', '../components/visit.tsx', '../components/booking.tsx'];
  let h1Count = (hero.match(/<h1/g) ?? []).length;
  for (const f of files) h1Count += ((await read(f)).match(/<h1/g) ?? []).length;
  assert.equal(h1Count, 1);
});

test('page has title and meta description', async () => {
  const layout = await read('../app/layout.tsx');
  assert.match(layout, /title: 'Serenity Spa/);
  assert.match(layout, /description:/);
});

test('images and decorative art carry accessible labels', async () => {
  const art = await read('../components/signature-art.tsx');
  assert.match(art, /aria-label="Illustration/);
  assert.match(art, /aria-hidden="true"/);
  const visit = await read('../components/visit.tsx');
  assert.match(visit, /aria-label="Stylized map/);
});

test('tokens are semantic — no raw hex colors in components', async () => {
  const dir = new URL('../components/', import.meta.url);
  for (const f of await readdir(dir)) {
    if (!f.endsWith('.tsx')) continue;
    const src = await readFile(new URL(f, dir), 'utf8');
    const hex = src.match(/#[0-9a-fA-F]{3,8}\b/g);
    assert.equal(hex, null, `${f} uses raw hex`);
  }
});
