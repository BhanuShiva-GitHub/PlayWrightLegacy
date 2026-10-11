import {expect, test} from "@playwright/test"

test("saucedemo",async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.locator("//input[@name='user-name']").fill("standard_user")
    await page.locator("input#password").fill("secret_sauce")
    await page.locator(".submit-button").click()
    await page.locator("text=Sauce LABS Backpack").click()

})

test("My second check", async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.locator(".form_group",{ has: page.locator("input#user-name")}).click()
    await page.locator(".form_group",{ has: page.locator("//input[@name='user-name']")}).pressSequentially("standard_user")


})

test("My third test", async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.getByPlaceholder("Search Amazon.in").fill("iPhone")
    await page.getByRole("button",{ name: "Go" , exact:true }).click()
    await page.getByRole("button", { name : "Add to cart"}).click

})


test("fourth",async({page})=>{
   // const title = page.locator("app_logo098765")
     await page.goto("https://www.saucedemo.com/")
    // await expect(page,"It has a title Swag Labs").not.toHaveTitle("Swag Labs" )
     await page.getByRole("textbox",{name: "Username"}).fill("standard_user")
     await page.getByRole("textbox",{name: "Password"}).fill("secret_sauce")
     await page.locator(".submit-button").click()
    


})