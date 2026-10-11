import {chromium, expect, test} from "@playwright/test";

test("Kick Start with Playwright",async({page})=>{
    // const browser = await chromium.launch()
    // const context = await browser.newContext()
    // const page = await context.newPage()

    
    await page.goto("https://www.google.com")
    await expect(page.getByRole('button', { name: 'Google apps' }))
    await page.getByRole('button', { name: 'Google apps' }).click()
    console.log("My first test")
    
})