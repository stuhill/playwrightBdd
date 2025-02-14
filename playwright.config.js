import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'tests/agui.feature',
  steps: 'tests/steps.js',
});

export default defineConfig({
  testDir,
  reporter: 'html',
});
