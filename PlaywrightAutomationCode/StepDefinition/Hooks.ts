// import { BeforeAll, AfterAll, After, Before, Status } from '@cucumber/cucumber';
// import { chromium, Browser, BrowserContext, Page } from '@playwright/test';
// import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

// import { pageFixture } from "../hooks/pageFixture";
// import path from 'path';
// import process from 'process';

// let page: Page;
// let browser: Browser;
// let context: BrowserContext;

// setDefaultTimeout(60000) // 60 seconds, if any step takes more than 60 seconds, it will be failed due to timeout error

// BeforeAll(async function () {

//     browser = await chromium.launch({
//         headless: false,
//         args: ["--start-maximized"],
//     });

//     console.log("BeforeAll")

// });

// Before(async function () {

//     context = await browser.newContext({
//         recordVideo: { dir: 'test-result/videos' },
//         viewport: null
//     });

//     // 3. Start tracing before navigating or creating a page
//     await context.tracing.start({
//         screenshots: true,
//         snapshots: true,
//         sources: true
//     });

//     page = await context.newPage();

//     pageFixture.page = page

//     console.log("Before")
// });


// After(async function (scenario) {
//     // Sanitize scenario name to use as a filename
//     const traceName = scenario.pickle.name.replace(/[^a-zA-Z0-9]/g, '_');
//     const tracePath = path.join(process.cwd(), `reports/traces/${traceName}.zip`);

//     // 5. Close the page
//     await pageFixture.page.close();

//     // 6. Stop tracing and save the file
//     // Tip: You can wrap this in an if condition to save only on failure
//     await context.tracing.stop({ path: tracePath });

//     // 7. Clean up the context and browser
//     // await context.close();
//     // await browser.close();
// });

// AfterAll(async function () {

//     //close the page
//     //await pageFixture.page.close();

//     //browser.close/context.close 

//     //await context.close()

//     console.log("afterAll")

//     console.log("==============================")
// });


// Then('i close the browser in hooks', async function () {

//     //await browser.close()
// });


// Then('I launch the test automation practice application in hooks', async function () {

//     await pageFixture.page.goto('https://testautomationpractice.blogspot.com/')

// });

// Then('verify reading the testdata1 from the feature file in hooks {string},{string},{string},{string},{string}', async function (name, email, phone, address, wikipedia) {
  
//     await page.getByPlaceholder('Enter Name').fill(name)

//   await page.getByPlaceholder('Enter EMail').fill(email)

//   await page.getByRole('textbox', { name: 'phone' }).fill(phone)

//   await page.locator('#textarea').fill(address)

//   await page.locator('.wikipedia-search-input').fill(wikipedia)
// });
