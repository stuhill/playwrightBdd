import { test, expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

let agentWorkspaceTab, controlFrame;

Given("SSO login page is accessible", async ({ page }) => {
  await page.goto("https://sso.8x8pilot.com/v2/login");
});

When("username is entered {string}", async ({ page }, username) => {
  await page.fill("id=loginId", username);
  await page.click("id=submitBtn");
});

When("password is entered {string}", async ({ page }, password) => {
  await page.fill("id=password", password);
  await page.click("id=submitBtn");
});

Then("agent login is successful", async ({ page }) => {
  await expect(page).toHaveTitle("Application Panel");
});

When(
  "agent selects {string} tile",
  async ({ page, context }, applicationTile) => {
    const tile = "//div[contains(text(), '" + applicationTile + "')]";
    const pagePromise = context.waitForEvent("page");

    await page.click(tile);
    agentWorkspaceTab = await pagePromise;
    page.close();
  }
);

Then("agent navigates to Agent Workspace", async () => {
  await expect(agentWorkspaceTab.locator("#control_frame")).toBeVisible({
    timeout: 60_000,
  });
});

When("agent changes status to {string}", async ({ page}, status) => {
  controlFrame = await agentWorkspaceTab.frame("control_frame");

  const readyToWorkButton = await controlFrame.locator(
    "data-test-id=on-break-page-button-ready-to-work"
  );
  
  await agentWorkspaceTab.locator('iframe[name="control_frame"]').contentFrame().locator('[data-test-id="on-break-page-button-ready-to-work"]').click();
});

Then("agent status is changed to {string}", async ({}, status) => {
  await expect(agentWorkspaceTab.locator('iframe[name="control_frame"]').contentFrame().getByText('Available', { exact: true })).toBeVisible();
});

When("agent logs out", async ({ page }) => {
  await agentWorkspaceTab.locator('iframe[name="control_frame"]').contentFrame().locator('[data-test-id="status-menu-trigger"]').click();
  await expect(agentWorkspaceTab.locator('iframe[name="control_frame"]').contentFrame().locator('[data-test-id="status-menu-logout-button"]')).toBeVisible();
  await agentWorkspaceTab.locator('iframe[name="control_frame"]').contentFrame().locator('[data-test-id="status-menu-logout-button"]').click();
});

Then("agent logs out successfully", async ({ page }) => {
  await expect(agentWorkspaceTab).toHaveTitle("8x8 Login");
});