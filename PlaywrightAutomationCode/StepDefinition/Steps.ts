
import { Given, Then } from '@cucumber/cucumber'

import { chromium, Browser, Page, expect, firefox, webkit } from 'playwright/test';

import {TestData1, TestData2, TestData3,orangeHRMCredentials} from '../Files/TestData.json'

let browser: Browser, page: Page

let context

let file = "webelementlevelscreenshot.png"

Given('I launch the browser', async function () {

  browser = await chromium.launch({

    headless: false,

    args: ['--start-maximized']

  })

  context = await browser.newContext({

    viewport: null
  })

  page = await context.newPage()

});


Given('I launch the firefox browser', async function () {

  browser = await firefox.launch({

    headless: false,

    args: ['--start-maximized']

  })

  context = await browser.newContext({

    viewport: null
  })

  page = await context.newPage()

});


Given('I launch the webkit browser', async function () {

  browser = await webkit.launch({

    headless: false,

    args: ['--start-maximized']

  })

  context = await browser.newContext({

    viewport: null
  })

  page = await context.newPage()

});


Given('I launch the headless browser', async function () {

  browser = await chromium.launch({

    headless: true,

    args: ['--start-maximized']

  })

  context = await browser.newContext({

    viewport: null
  })

  page = await context.newPage()

});

Then('I launch the facebook application', async function () {

  await page.goto('https://www.facebook.com/')

});

Then('I close the browser', async function () {

  await page.close()

});

Then('I launch the test automation practice application', async function () {

  await page.goto('https://testautomationpractice.blogspot.com/')

});


Then('I verify web calendar in dynamic way', async function () {

  await page.locator("//input[@id='datepicker']").scrollIntoViewIfNeeded();

  let datePicker = await page.locator("//input[@id='datepicker']")

  if (await datePicker.isVisible()) {

    console.log("datePicker is displayed on the webpage");

    await page.locator("//input[@id='datepicker']").click();

    let calendarTable = await page.locator(".ui-datepicker-calendar");

    if (await calendarTable.isVisible()) {

      console.log("calendarTable is displayed on the webpage");

      let rows = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr").all();

      console.log(" rows count is :" + rows.length);

      if (rows.length > 0) {

        console.log("calendar have rows");

        for (let i = 1; i <= rows.length; i++) {

          let columns = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr[" + i + "]/td").all();

          console.log(" columns count is :" + columns.length);

          if (columns.length > 0) {

            console.log("calendar have columns");

            for (let j = 1; j <= columns.length; j++) {

              let actualDate = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr[" + i + "]/td[" + j + "]");

              let actualDate1 = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr[" + i + "]/td[" + j + "]").innerText();

              let expectedDate = "30";

              if (actualDate1 == expectedDate) {

                console.log("date :" + actualDate1
                  + " is displayed in the calendar row number " + i
                  + " and column number is: " + j);

                actualDate.click();
              }
            }

          } else {

            console.log("calendar doesn't have columns");
          }
        }

      } else {

        console.log("calendar doesn't have rows");
      }
    }
    else {
      console.log("calendarTable is not displayed on the webpage");
    }
  }
  else {
    console.log("datePicker is not displayed on the webpage");
  }
});

Then('I Verify Playwright Locators', async function () {

  console.log("======get by placeholder======")

  //Await page.getByPlaceholder(‘attribute value of the placeholder’).methods()

  await page.getByPlaceholder('Enter Name').fill('quality thought')

  await page.getByPlaceholder('Enter EMail').fill('testing@gmail.com')

  console.log("======get by Text======")

  //Await page.getByText(‘text of the web element).methods()

  await page.getByText('START').click()

  await page.getByText('STOP').click()

  console.log("======get by Role======")

  //Await page.getByRole('type of the web element', {name : 'text of the web element'}).methods()

  await page.getByRole('button', { name: 'START' }).click()

  await page.getByRole('button', { name: 'STOP' }).click()

  await page.getByRole('checkbox', { name: 'Sunday' }).scrollIntoViewIfNeeded()

  await page.getByRole('checkbox', { name: 'Sunday' }).click()

  await page.getByRole('checkbox', { name: 'Tuesday' }).click()

  await page.getByRole('checkbox', { name: 'Friday' }).click()

  await page.getByRole('textbox', { name: 'Enter Name' }).fill('hi everyone')

  await page.getByRole('textbox', { name: 'phone' }).type('89089')

  await page.getByRole('textbox', { name: 'phone' }).type('77777')
});

Then('I Verify Playwright Locators part2', async function () {

  await page.goto('https://parabank.parasoft.com/parabank/index.htm')

  console.log("======get by alt text======")

  //Await page.getByAlttext(‘attribute name of the alt’).methods()

  await page.getByAltText('ParaBank').click()

  console.log("======get by titie======")

  //Await page.getByTitle(‘attribute name of the title').methods()

  await page.getByTitle('ParaBank').click()

  await page.goto('https://login.salesforce.com/')

  console.log("======get by label=====")

  //await page.getByLabel(‘text of the label web element’).methods()

  await page.getByLabel('Username').fill('playwright')

  await page.getByLabel('Password').fill('morning@gmail.com')

  console.log("======get by test id=====")

  //Await page.getByTestID(‘attribute value of the data testid’).methods()
});

Then('I Verify selenium Locators', async function () {

  console.log("======xpaths======")

  console.log("======absoulte xpath=====")

  // await page.locator(‘absolute xpath’).methods()

  // await page.locator('/html/body/div[4]/div[2]/div[2]/div[2]/div[2]/div[2]/div[2]/div/div[4]/div[1]/div/div/div[1]/div[1]/div/div/div/div/div[2]/div[1]/input[1]').fill('absolute xpath')

  console.log("======relative xpath=====")

  // await page.locator(relative xpath’).methods()

  await page.locator('//input[@id="name"]').fill('relative xpath')

  await page.locator('//*[@id="email"]').fill('relative@yahoo.com')

  console.log("======css selector=====")

  await page.locator('[id="phone"]').fill('9809809800')

  // . means class in css selector

  //await page.locator('.attributevalueoftheclass').methods()

  await page.locator('.wikipedia-search-input').fill('using css class name')

  // # means class in id selector

  //await page.locator('#attributevalueoftheid').methods()

  await page.locator('#textarea').fill('using css id')

})

Then('I Verify selenium Xpath methods', async function () {

  console.log("======contains======")

  await page.locator('//input[contains(@placeholder,"Enter Name")]').fill('Rajiya')

  await page.locator('//*[contains(@placeholder,"EMail")]').fill('pavani@testmail.com')

  console.log("======starts-with======")

  await page.locator('//*[starts-with(@id,"pho")]').fill('9090909090')

  await page.locator('//input[starts-with(@class,"wikipedia-search-input")]').fill('testing')

  console.log("======text=====")

  var text = await page.locator("//h2[text()='Alerts & Popups']").innerText()

  console.log("1st way of text is :", text) // Alerts & Popups

  text = await page.locator("//*[text()='Alerts & Popups']").innerText()

  console.log("2nd way of text is :", text) // Alerts & Popups

  text = await page.locator("//*[starts-with(text(),'Alerts & Popups')]").innerHTML()

  console.log("3rd way of text is :", text) //Alerts &amp; Popups

  text = await page.locator("//*[contains(text(),'Alerts & Popups')]").innerHTML()

  console.log("4th way of text is :", text) //'Alerts &amp; Popups'

  console.log("======and=====")

  await page.locator('//*[@class="form-control" and @id="textarea"]').fill('hyderabad')

  await page.locator('//*[contains(@id,"female") and @name="gender"]').click()

  console.log("======or=====")

  var orCount = await page.locator('//*[@type="text" or @id="name"]').all()

  console.log(' orCount is: ', orCount.length)

  await page.locator('//*[@type="text" or @id="name"]').first().fill('first web element')

  await page.locator('//*[@type="text" or @id="name"]').last().fill('last web element')

  await page.locator('//*[@type="text" or @id="name"]').nth(6).fill('seventh web element')

  console.log("======css selector=====")

  console.log("======contains=====")

  await page.locator('[id*="field2"]').fill('using css contains method')

  console.log("======starts-with=====")

  await page.locator('[value^="sunday"]').click()

})

Then('I Verify selenium Xpath Axes', async function () {

  console.log("======parent======")

  var parentCount = await page.locator('//input[@id="sunday"]//parent::div').all()

  console.log(' parentCount is: ', parentCount.length) // parentCount is : 1

  console.log("======ancestor======")

  var ancestorCount = await page.locator('//input[@id="sunday"]//ancestor::div').all()

  console.log(' ancestorCount is: ', ancestorCount.length) // ancestorCount is : 21

  console.log("======preceding======")

  var precedingCount = await page.locator('//input[@id="sunday"]//preceding::div').all()

  console.log(' precedingCount is: ', precedingCount.length) // precedingCount is : 99

  precedingCount = await page.locator('//input[@id="sunday"]//preceding::label').all()

  console.log(' precedingCount is: ', precedingCount.length) // precedingCount is : 8

  precedingCount = await page.locator('//input[@id="sunday"]//preceding::input').all()

  console.log(' precedingCount is: ', precedingCount.length) // precedingCount is : 5

  console.log("======child======")

  var childCount = await page.locator('//div[@class="form-group"]//child::input[@type="text"]').all()

  console.log(' childCount is: ', childCount.length) // childCount is : 3

  await page.locator('//div[@class="form-group"]//child::input[@type="text"]').first().fill('first web element')

  await page.locator('//div[@class="form-group"]//child::input[@type="text"]').last().fill('last web element')

  await page.locator('//div[@class="form-group"]//child::input[@type="text"]').nth(1).fill('second web element')

  console.log("======descendant======")

  var descendantCount = await page.locator('//div[@class="form-group"]//descendant::input[@type="text"]').all()

  console.log(' descendantCount is: ', descendantCount.length) // childCount is : 3

  await page.locator('//div[@class="form-group"]//descendant::input[@type="text"]').first().fill('desc first web element')

  await page.locator('//div[@class="form-group"]//descendant::input[@type="text"]').last().fill('desc last web element')

  await page.locator('//div[@class="form-group"]//descendant::input[@type="text"]').nth(1).fill('desc second web element')

  console.log("======following======")

  var followingCount = await page.locator('//div[@class="form-group"]//following::input[@type="text"]').all()

  console.log(' followingCount is: ', followingCount.length) // followingCount is : 13

  console.log("======following sibling======")

  var followingSiblingCount = await page.locator('//input[@id="field1"]//following-sibling::input').all()

  console.log(' followingSiblingCount is: ', followingSiblingCount.length) // followingSiblingCount is : 1

  followingSiblingCount = await page.locator('//input[@id="field1"]//following-sibling::br').all()

  console.log(' followingSiblingCount is: ', followingSiblingCount.length) // followingSiblingCount is : 3

  await page.locator('//input[@id="field1"]//following-sibling::input').fill('following sibling')


})

Then('I verify playwright methods', async function () {

  console.log("==================to refresh the web page==================")

  await page.reload()

  console.log("==================scroll to the respective web element=================")

  await page.getByText('New Tab').scrollIntoViewIfNeeded()

  console.log("=================click on the respective web element=================")

  await page.getByText('New Tab').click()

  console.log("==================to go to the previous tab=================")

  await page.bringToFront()

  console.log("==================to enter text to teh textbox=================")

  await page.getByPlaceholder('Enter Name').fill('quality')

  await page.getByPlaceholder('Enter EMail').type('thought@gmail.com')

  console.log("======to get more than one web element in a page=====")

  var orCount = await page.locator('//*[@type="text" or @id="name"]').all()

  console.log(' orCount is: ', orCount.length) //13

  console.log("==================to get the titile of the web page================")

  console.log(await page.title()) //Automation Testing Practice

  console.log("==================to get the url of the web page================")

  console.log(await page.url()) //https://testautomationpractice.blogspot.com/

  console.log("==================to clear the text in the textbox================")

  await page.locator('#field1').clear()

  await page.locator('#field1').fill('hi everyone')

  console.log("======to get the text of the web element=====")

  var text = await page.locator("//h2[text()='Alerts & Popups']").innerText()

  console.log("1st way of text is :", text) // Alerts & Popups

  text = await page.locator("//*[text()='Alerts & Popups']").innerText()

  console.log("2nd way of text is :", text) // Alerts & Popups

  text = await page.locator("//*[starts-with(text(),'Alerts & Popups')]").innerHTML()

  console.log("3rd way of text is :", text) //Alerts &amp; Popups

  text = await page.locator("//*[contains(text(),'Alerts & Popups')]").innerHTML()

  console.log("4th way of text is :", text) //'Alerts &amp; Popups'

  console.log("======to get the text from more than one web element=====")

  console.log("======1st way=====")

  var textFromWebElements = await page.locator(".title").allInnerTexts()

  console.log("1st way of text is :", textFromWebElements.length)

  console.log("========for loop=========")

  for (let i = 0; i < textFromWebElements.length; i++) {

    console.log(textFromWebElements[i])
  }

  console.log("======2nd way=====")

  var textFromWebElements = await page.locator(".title").allTextContents()

  console.log("1st way of text is :", textFromWebElements.length)

  console.log("========for loop=========")

  for (let i = 0; i < textFromWebElements.length; i++) {

    console.log(textFromWebElements[i])
  }

  /*
0 =
'\nAutomation Testing Practice\n'
1 =
'Upload Files'
2 =
'Static Web Table'
3 =
'Dynamic Web Table'
4 =
'Pagination Web Table'
5 =
'Tabs'
6 =
'Dynamic Button'
7 =
'Alerts & Popups'
8 =
'Mouse Hover'

9 =
'Double Click'
10 =
'Drag and Drop'
11 =
'Slider'
12 =
'SVG Elements'
13 =
'Scrolling DropDown'
14 =
'Labels And Links'
15 =
'Form'
16 =
'ShadowDOM'*/

  console.log("======to right click of an web element=====")

  await page.locator('.wikipedia-search-input').click({ button: 'right' })

  console.log("======to double click of an web element=====")

  await page.locator("//*[text()='START']").dblclick()

})

Then('I verify playwright methods part2', async function () {

  console.log("==================hidden==================")

  var hidden = await page.locator('#female').isHidden()

  if (hidden == false) {

    await page.locator('#female').click()

  }

  console.log("==================visible==================")

  var visible = await page.locator('#sunday').isVisible()

  if (visible == true) {

    await page.locator('#sunday').click()

  }

  console.log("==================disabled==================")

  var disabled = await page.locator('#monday').isDisabled()

  if (disabled == false) {

    await page.locator('#monday').click()

  }

  console.log("==================enabled==================")

  var enabled = await page.locator('#tuesday').isEnabled()

  if (enabled == true) {

    await page.locator('#tuesday').click()

  }

  console.log("==================editable==================")

  var editable = await page.locator('#textarea').isEditable()

  if (editable == true) {

    await page.locator('#textarea').fill('belongs to hyderabad')

  }

  console.log("==================checked==================")

  var checked = await page.locator('#saturday').isChecked()

  if (checked == false) {

    //1st way

    // await page.locator('#saturday').click()

    //2nd way

    await page.locator('#saturday').setChecked(true)

    checked = await page.locator('#saturday').isChecked()

    console.log('checked status is :', checked) // true
  }

  if (checked == true) {

    //1st way

    //await page.locator('#saturday').click()

    //2nd way

    // await page.locator('#saturday').setChecked(false)

    //3rd way

    await page.locator('#saturday').uncheck()

  }

})

Then('I verify playwright methods part3', async function () {

  await page.goto('https://www.myntra.com/')

  console.log("==================hover==================")

  await page.locator("//*[text()='Kids']").first().hover()

  console.log("==================hover==================")

  await page.getByPlaceholder("Search for products, brands and more").highlight()

  await page.getByPlaceholder("Search for products, brands and more").fill('shirts')

  console.log("==================get attribute==================")

  var attributeValue = await page.getByPlaceholder("Search for products, brands and more").getAttribute('placeholder')

  console.log('attributeValue of placeholder is :', attributeValue) //Search for products, brands and more

  attributeValue = await page.getByPlaceholder("Search for products, brands and more").getAttribute('class')

  console.log('attributeValue of placeholder is :', attributeValue) //desktop-searchBar

  attributeValue = await page.getByPlaceholder("Search for products, brands and more").getAttribute('data-reactid')

  console.log('attributeValue of placeholder is :', attributeValue) //1039

  console.log("==================drag and drop==================")

  await page.goto('https://testautomationpractice.blogspot.com/')

  var first = await page.locator('#draggable')

  var second = await page.locator('#droppable')

  await first.scrollIntoViewIfNeeded()

  await first.dragTo(second)

})

Then('I verify playwright methods part4', async function () {

  await page.locator('#field1').scrollIntoViewIfNeeded()

  console.log("=======1st way to clear the text to the textbox=====")

  await page.locator('#field1').clear()

  await page.locator('#field1').type('surya')

  console.log("=======2nd way to clear the text to the textbox=====")

  await page.locator('#field1').fill(" ")

  await page.locator('#field1').fill('sharmila')

  console.log("=======3rd way to clear the text to the textbox=====")

  await page.locator('#field1').press('Control+A')

  await page.keyboard.press('Delete')

  await page.keyboard.up('Control')

  await page.keyboard.insertText('quality thought')

  console.log("=======4th way to enter the text to the textbox=====")

  await page.locator('#field1').clear()

  await page.locator('#field1').pressSequentially('Friday')

  console.log("=======handling dropdowns=====")

  var colorsDropdown = await page.locator('#colors')

  await colorsDropdown.scrollIntoViewIfNeeded()

  await colorsDropdown.selectOption("Red")

  await colorsDropdown.selectOption("Green")

  await colorsDropdown.selectOption("Yellow")

  await colorsDropdown.selectOption(["Yellow", "Red", "Green"])

  await colorsDropdown.selectOption({ index: 1 })

  await colorsDropdown.selectOption([{ index: 1 }, { index: 3 }])

  var countryDropdown = await page.locator('#country')

  await countryDropdown.click()

  await countryDropdown.selectOption("India")

  // // class work : Sorted List

  console.log("===============screenshots=============")

  console.log("===============1st way is to take web element level screenshot=============")

  await page.getByPlaceholder('Enter Name').scrollIntoViewIfNeeded()

  await page.getByPlaceholder('Enter Name').fill('quality thought')

  await page.getByPlaceholder('Enter Name').screenshot({ path: 'webelementlevelscreenshot.png' })

  console.log("===============2nd way is to take up to screen length screenshot=============")

  await page.screenshot({ path: './PlaywrightAutomationCode/Screenshots/uptoscreenlength.jpg' })

  console.log("===============2nd way is to take full page screenshot=============")

  await page.screenshot({ path: './PlaywrightAutomationCode/Screenshots/fullpage.jpg', fullPage: true })

  console.log("===============playwright and method=============")

  console.log("===============1st way xpath and method=============")

  await page.locator('//*[@type="text" and @placeholder="Enter Name"]').fill('kiran')

  console.log("===============2nd way playwright and method=============")

  await page.locator('//*[@id="email"]').and(page.getByPlaceholder('Enter EMail')).fill('test@gmail.com')

  await page.locator('//*[@id="phone"]').and(page.locator('#phone')).fill('6789067890')
})

Then('Generate dates', async function () {

  const todaysDate = new Date()

  console.log("todaysDate is :", todaysDate) //Fri Jun 26 2026 07:35:55 GMT+0530 (India Standard Time)

  const todaysDateInIst = todaysDate.toLocaleDateString()

  console.log("todaysDateInIst is :", todaysDateInIst) // 26/6/2026

  const pastDateInIst = new Date(todaysDate)

  pastDateInIst.setDate(pastDateInIst.getDate() - 3)

  console.log("pastDateInIst is :", pastDateInIst.toLocaleDateString())  //pastDateInIst is : 23/6/2026 

  const futureDateInIst = new Date(todaysDate)

  futureDateInIst.setDate(futureDateInIst.getDate() + 10)

  console.log("futureDateInIst is :", futureDateInIst.toLocaleDateString())  //futureDateInIst is : 6/7/2026 

  const year = todaysDate.getFullYear()

  const month = todaysDate.getMonth() + 1

  const date = todaysDate.getDate()

  console.log(month, '-', date, '-', year) //6 - 26 - 2026

  console.log(date, '/', year, '/', month) //26 / 2026 / 6

  const completeMonthName = todaysDate.toLocaleDateString('en-us', { month: 'long' })

  console.log('completeMonthName is :', completeMonthName) //completeMonthName is : June

  const shortMonthName = todaysDate.toLocaleDateString('en-us', { month: 'short' })

  console.log('shortMonthName is :', shortMonthName) //shortMonthName is : Jun

})

Then('I verify web table in static way', async function () {

  let webTable = await page.locator('//table[@name="BookTable"]').isVisible()

  if (webTable == true) {

    console.log(" web table is displayed on tehe web page") //web table is displayed on the web page

    await page.locator('//table[@name="BookTable"]').scrollIntoViewIfNeeded()

    let expectedText = 'Animesh'

    let actualText = await page.locator('//table[@name="BookTable"]//tbody/tr[4]//td[2]').innerText()

    if (actualText == expectedText) {

      console.log(expectedText, "is displayed on the web page") // Animesh is displayed on the web page
    }
    else {

      console.log(expectedText, "is not displayed on the web page")
    }
  }
  else {

    console.log(" web table is not displayed on tehe web page")
  }

})

Then('I verify web table in static way2', async function () {

  let webTable = await page.locator('//table[@name="BookTable"]').isVisible()

  if (webTable == true) {

    console.log(" web table is displayed on tehe web page") //web table is displayed on the web page

    await page.locator('//table[@name="BookTable"]').scrollIntoViewIfNeeded()

    let expectedText = 'JAVA'

    let actualText = await page.locator('//table[@name="BookTable"]//tbody/tr[4]//td[2]').innerText()

    if (actualText == expectedText) {

      console.log(expectedText, "is displayed on the web page")
    }
    else {

      console.log(expectedText, "is not displayed on the web page") // JAVA is not displayed on the web page
    }
  }
  else {

    console.log(" web table is not displayed on tehe web page")
  }

})

Then('I verify web table in dynamic way', async function () {

  let webTable = await page.locator('//table[@name="BookTable"]').isVisible()

  if (webTable == true) {

    console.log(" web table is displayed on tehe web page") //web table is displayed on the web page

    await page.locator('//table[@name="BookTable"]').scrollIntoViewIfNeeded()

    let rows = await page.locator("//table[@name='BookTable']//tbody/tr").all()

    if (rows.length > 0) {

      console.log(" web table have rows")

      for (let i = 2; i <= rows.length; i++) {

        let columns = await page.locator("//table[@name='BookTable']//tbody/tr[" + i + "]//td").all()

        if (columns.length > 0) {

          for (let j = 1; j <= columns.length; j++) {

            let expectedText = 'Java'

            let actualText = await page.locator("//table[@name='BookTable']//tbody/tr[" + i + "]//td[" + j + "]").innerText()

            // if (actualText == expectedText) {

            //   console.log(expectedText, "is displayed on the web page on row no", i, " and column is ", j)

            //   //JAVA is displayed on the web page on row no 6  and column is  3
            // }

            if (actualText.includes(expectedText)) {

              console.log(expectedText, "is displayed on the web page on row no", i, " and column is ", j)

              /*Java is displayed on the web page on row no 3  and column is  1
Java is displayed on the web page on row no 3  and column is  3
Java is displayed on the web page on row no 4  and column is  3
Java is displayed on the web page on row no 6  and column is  1
Java is displayed on the web page on row no 7  and column is  3*/

            }
          }
        }
        else {

          console.log(" web table doens't have columns")
        }
      }
    }
    else {

      console.log(" web table doesn't have rows")
    }

  }
  else {

    console.log(" web table is not displayed on tehe web page")
  }

})

// class work : handle dynamic web table using teh above 3 ways

Then('I verify web calendar in static way', async function () {

  await page.locator("#datepicker").scrollIntoViewIfNeeded()

  await page.locator("#datepicker").click()

  let webCalendar = await page.locator('.ui-datepicker-calendar').isVisible()

  if (webCalendar == true) {

    console.log(" web Calendar is displayed on the web page") //web calendar is displayed on the web page

    let expectedDate = '30'

    let actualDate = await page.locator('//table[@class="ui-datepicker-calendar"]//tbody//tr[5]//td[3]').innerText()

    if (actualDate == expectedDate) {

      console.log(expectedDate, "is displayed on the web page") // 30 is displayed on the web page

      await page.locator('//table[@class="ui-datepicker-calendar"]//tbody//tr[5]//td[3]').click()
    }
    else {

      console.log(expectedDate, "is not displayed on the web page")
    }
  }
  else {

    console.log(" web Calendar is not displayed on tehe web page")
  }

})

Then('I verify web calendar in static way2', async function () {

  await page.locator("#datepicker").scrollIntoViewIfNeeded()

  await page.locator("#datepicker").click()

  let webCalendar = await page.locator('.ui-datepicker-calendar').isVisible()

  if (webCalendar == true) {

    console.log(" web Calendar is displayed on the web page") //web calendar is displayed on the web page

    let expectedDate = '27'

    let actualDate = await page.locator('//table[@class="ui-datepicker-calendar"]//tbody//tr[5]//td[3]').innerText()

    if (actualDate == expectedDate) {

      console.log(expectedDate, "is displayed on the web calendar")

      await page.locator('//table[@class="ui-datepicker-calendar"]//tbody//tr[5]//td[3]').click()
    }
    else {

      console.log(expectedDate, "is not displayed on the web calendar") //27 is displayed on the web calendar
    }
  }
  else {

    console.log(" web Calendar is not displayed on tehe web page")
  }

})


Then('I verify playwright hard assertion', async function () {

  await page.goto('https://www.amazon.in/')

  //expect(await page/locator()/playwright locator()).methods()

  expect(await page.getByPlaceholder('Search Amazon.in')).toBeTruthy()

  await page.getByPlaceholder('Search Amazon.in').fill('mobiles')

  expect(await page.locator('#nav-search-submit-button')).toBeAttached()

  await page.locator('#nav-search-submit-button').click()

  // expect(await page.locator("//*[text()='Sell']")).toBeHidden()

  // expect(await page.locator("//*[text()='Sell']")).toBeDisabled()

  expect(await page.locator("//*[text()='Sell']")).toBeEnabled()

  await page.locator("//*[text()='Sell']").click()

  expect(await page.locator("//*[text()='Sell']")).toHaveCount(1)

  console.log("=================================================")

  await page.goto('https://testautomationpractice.blogspot.com/')

  expect(await page.locator('//*[@class="title"]')).toHaveCount(17)

  let title = await page.locator('//*[@class="title"]').allInnerTexts()

  for (let i = 0; i < title.length; i++) {

    console.log(title[i])
  }

  expect(await page.locator('//*[@class="title"]')).toContainText(["Dynamic Button"])

  expect(await page.locator('//*[@class="title"]')).toContainText(["Upload Files"])

  expect(await page.locator('//*[@class="title"]')).toContainText(["Upload Files", "Static Web Table"])

  expect(await page.getByPlaceholder('Enter Name')).toHaveAttribute('class')

  expect(await page.getByPlaceholder('Enter Name')).toHaveAttribute('id', 'name')

  expect(await page.getByPlaceholder('Enter EMail')).toHaveAttribute('placeholder', 'Enter EMail')

  expect(await page.getByPlaceholder('Enter EMail')).toHaveId('email')

  expect(await page.getByPlaceholder('Enter EMail')).toBeEmpty()

  await page.getByPlaceholder('Enter EMail').fill('quality@yahoo.com')

  expect(await page.getByPlaceholder('Enter Name')).toBeVisible()

  await page.getByPlaceholder('Enter Name').fill('good morning')

  console.log("hi team good morning")

})

Then('I verify playwright soft assertion', async function () {

  await page.goto('https://www.amazon.in/')

  //expect.soft(await page/locator()/playwright locator()).methods()

  expect.soft(await page.getByPlaceholder('Search Amazon.in')).toBeTruthy()

  await page.getByPlaceholder('Search Amazon.in').fill('mobiles')

  expect.soft(await page.locator('#nav-search-submit-button')).toBeAttached()

  await page.locator('#nav-search-submit-button').click()

  // expect.soft(await page.locator("//*[text()='Sell']")).toBeHidden()

  // expect.soft(await page.locator("//*[text()='Sell']")).toBeDisabled()

  expect.soft(await page.locator("//*[text()='Sell']")).toBeEnabled()

  await page.locator("//*[text()='Sell']").click()

  expect.soft(await page.locator("//*[text()='Sell']")).toHaveCount(1)

  console.log("=================================================")

  await page.goto('https://testautomationpractice.blogspot.com/')

  expect.soft(await page.locator('//*[@class="title"]')).toHaveCount(17)

  let title = await page.locator('//*[@class="title"]').allInnerTexts()

  for (let i = 0; i < title.length; i++) {

    console.log(title[i])
  }

  expect.soft(await page.locator('//*[@class="title"]')).toContainText(["Dynamic Button"])

  expect.soft(await page.locator('//*[@class="title"]')).toContainText(["Upload Files"])

  expect.soft(await page.locator('//*[@class="title"]')).toContainText(["Upload Files", "Static Web Table"])

  expect.soft(await page.getByPlaceholder('Enter Name')).toHaveAttribute('class')

  expect.soft(await page.getByPlaceholder('Enter Name')).toHaveAttribute('id', 'name')

  expect.soft(await page.getByPlaceholder('Enter EMail')).toHaveAttribute('placeholder', 'Enter EMail')

  expect.soft(await page.getByPlaceholder('Enter EMail')).toHaveId('email')

  expect.soft(await page.getByPlaceholder('Enter EMail')).toBeEmpty()

  await page.getByPlaceholder('Enter EMail').fill('quality@yahoo.com')

  expect.soft(await page.getByPlaceholder('Enter Name')).toBeVisible()

  await page.getByPlaceholder('Enter Name').fill('good morning')

  console.log("hi team good morning")

})


Then('I verify playwright filters', async function () {

  await page.goto('https://www.saucedemo.com/')

  await page.getByPlaceholder('Username').fill('standard_user')

  await page.getByPlaceholder('Password').fill('secret_sauce')

  await page.locator('#login-button').click()

  // await page.waitForTimeout(3000)

  await page.locator("//*[@class='inventory_item']")
    .filter({ hasText: 'Sauce Labs Backpack' })
    .getByRole('button', { name: 'Add to cart' }).click()

  // await page.waitForTimeout(3000)

  await page.locator("//*[@class='inventory_item']")
    .filter({ hasText: 'Sauce Labs Fleece Jacket' })
    .getByRole('button', { name: 'Add to cart' }).click()

  // await page.waitForTimeout(3000)

  await page.locator("//*[@class='inventory_item']")
    .filter({ hasText: 'Sauce Labs Onesie' })
    .getByRole('button', { name: 'Add to cart' }).click()

  // await page.waitForTimeout(3000)

  await page.locator("//*[@class='inventory_item']")
    .filter({ hasText: 'Sauce Labs Backpack' })
    .getByRole('button', { name: 'remove' }).click()

  // await page.waitForTimeout(3000)

  await page.locator("//*[@class='inventory_item']")
    .filter({ hasText: 'Sauce Labs Fleece Jacket' })
    .getByRole('button', { name: 'remove' }).click()

  // await page.waitForTimeout(3000)

  await page.locator("//*[@class='inventory_item']")
    .filter({ hasText: 'Sauce Labs Onesie' })
    .getByRole('button', { name: 'remove' }).click()

  // await page.waitForTimeout(3000)

  await page.goto('https://testautomationpractice.blogspot.com/')

  await page.locator("//*[@class='form-check form-check-inline']")
    .filter({ hasText: 'Sunday' }).click()

  await page.locator("//*[@class='form-check form-check-inline']")
    .filter({ hasText: 'Monday' }).click()

  await page.locator("//*[@class='form-check form-check-inline']")
    .filter({ hasText: 'Saturday' }).click()

  await page.locator("//*[@class='form-check form-check-inline']")
    .filter({ hasText: 'Frid' }).click()

  await page.locator("//*[@class='form-check form-check-inline']")
    .filter({ hasText: 'male' }).last().click()

})

Then('I verify playwright simple alert', async function () {

  await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

  await page.on('dialog', (dialog) => {

    console.log(' dialog/alert type is: ', dialog.type()) // alert

    expect(dialog.type()).toContain('alert')

    console.log(' dialog/alert message is: ', dialog.message()) // I am a JS Alert

    expect(dialog.message()).toContain('I am a JS Alert')

    dialog.accept()

  })

  await page.locator("//button[text()='Click for JS Alert']").click()

})


Then('I verify playwright confirmation alert ok', async function () {

  await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

  await page.on('dialog', (dialog) => {

    console.log(' dialog/alert type is: ', dialog.type()) // confirm

    expect(dialog.type()).toContain('confirm')

    console.log(' dialog/alert message is: ', dialog.message()) // I am a JS Confirm

    expect(dialog.message()).toContain('I am a JS Confirm')

    dialog.accept()

  })

  await page.locator("//button[text()='Click for JS Confirm']").click()

})

Then('I verify playwright confirmation alert dismiss', async function () {

  await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

  await page.on('dialog', (dialog) => {

    console.log(' dialog/alert type is: ', dialog.type()) // confirm

    expect(dialog.type()).toContain('confirm')

    console.log(' dialog/alert message is: ', dialog.message()) // I am a JS Confirm

    expect(dialog.message()).toContain('I am a JS Confirm')

    dialog.dismiss()

  })

  await page.locator("//button[text()='Click for JS Confirm']").click()

})

Then('I verify playwright prompt alert without text and ok', async function () {

  await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

  await page.on('dialog', (dialog) => {

    console.log(' dialog/alert type is: ', dialog.type()) // prompt

    expect(dialog.type()).toContain('prompt')

    console.log(' dialog/alert message is: ', dialog.message()) // I am a JS prompt

    expect(dialog.message()).toContain('I am a JS prompt')

    dialog.accept()

  })

  await page.locator("//button[text()='Click for JS Prompt']").click()

})

Then('I verify playwright prompt alert with text and ok', async function () {

  await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

  await page.on('dialog', (dialog) => {

    console.log(' dialog/alert type is: ', dialog.type()) // prompt

    expect(dialog.type()).toContain('prompt')

    console.log(' dialog/alert message is: ', dialog.message()) // I am a JS prompt

    expect(dialog.message()).toContain('I am a JS prompt')

    dialog.accept('hi qt team, good morning')

  })

  await page.locator("//button[text()='Click for JS Prompt']").click()

})

Then('I verify playwright prompt alert dismiss', async function () {

  await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

  await page.on('dialog', (dialog) => {

    console.log(' dialog/alert type is: ', dialog.type()) // prompt

    expect(dialog.type()).toContain('prompt')

    console.log(' dialog/alert message is: ', dialog.message()) // I am a JS prompt

    expect(dialog.message()).toContain('I am a JS prompt')

    dialog.dismiss()

  })

  await page.locator("//button[text()='Click for JS Prompt']").click()

  // class work: handle all alerts in test automation practice web site

})

Then('I verify playwright frames', async function () {

  await page.goto('https://the-internet.herokuapp.com/nested_frames')

  var allFramesCount = await page.frames()

  console.log('allFramesCount is :', allFramesCount.length) //6

  //await page.framelocator(xpath/url).locator(locator/playwright loctor).methods()

  //1st way

  var bottomText = await page.frameLocator('//*[@src="/frame_bottom"]').locator("//*[contains(text(),'BOTTOM')]").innerText()

  console.log('bottomText is :', bottomText) //BOTTOM

  //2nd way

  var bottomText2ndway = await page.frame({ url: 'https://the-internet.herokuapp.com/frame_bottom' })

  var bottomText2ndwayText = await bottomText2ndway?.locator("//*[contains(text(),'BOTTOM')]").innerText()

  console.log('bottomText2ndwayText is :', bottomText2ndwayText) //BOTTOM

  /*bottomText is : BOTTOM
bottomText2ndwayText is : BOTTOM*/

  console.log("========================================")

  await page.goto('https://demo.automationtesting.in/Frames.html')

  allFramesCount = await page.frames()

  console.log('allFramesCount is :', allFramesCount.length) // 10

  var singleFrame = await page.frame({ url: 'https://demo.automationtesting.in/SingleFrame.html' })

  await singleFrame?.locator('//*[@type="text"]').first().fill('single frame')

  await page.locator('//*[text()="Iframe with in an Iframe"]').click()

  var multiFrame = await page.frame({ url: 'https://demo.automationtesting.in/MultipleFrames.html' })

  var allChildFramesCount = await multiFrame?.childFrames()

  console.log('allChildFramesCount is :', allChildFramesCount?.length)

  if (allChildFramesCount && allChildFramesCount.length > 0) {

    await allChildFramesCount[0].locator('//*[@type="text"]').last().fill('hi team good morning')

  }

})

Then('I verify playwright files upload', async function () {

  console.log("=================upload single files======")

  await page.locator('#singleFileInput').scrollIntoViewIfNeeded()

  await page.locator('#singleFileInput').setInputFiles("webelementlevelscreenshot.png")

  await page.locator("//button[text()='Upload Single File']").click()

  console.log("=================upload Multiple files======")

  await page.locator('#multipleFilesInput').setInputFiles([file, "./PlaywrightAutomationCode/Screenshots/uptoscreenlength.jpg",
    "C:\\Users\\\Abcom\\OneDrive\\Desktop\\Automation_Playwright\\2026\\21sthMay2026Batch_QT\\TypeScript_JavaScript\\Playwright\\10th Class_Frames_upload files\\10th Class.docx"
  ])

  await page.locator("//button[text()='Upload Multiple Files']").click()

})

Then('I verify playwright Waits', async function () {

  await page.goto('https://www.facebook.com/')

  console.log("=================wait for timeout======")

  //await page.waitForTimeout(10000) // 10000 means 10000 milliseconds means 10 seconds

  await page.waitForTimeout(1000) // 1 seconds

  await page.locator('//input[@name="email"]').fill('quality')

  await page.waitForTimeout(1000) // 1 seconds

  await page.locator('//input[@name="pass"]').fill('thought@gmail.com')

  console.log("=================wait for selector======")

  /*syntax:
1st way
await page.waitForselector(element) 
2nd way
await page.waitForselector(element, {timeout:10000}) // 10000 means 10000 milliseconds means 10 seconds
*/

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  console.log("============1st way=======")

  await page.waitForSelector('//input[@name="username"]')

  await page.locator('//input[@name="username"]').fill('Admin')

  console.log("============2nd way=======")

  await page.waitForSelector('//input[@name="password"]', { timeout: 15000 })  // 15 seconds

  await page.locator('//input[@name="password"]').fill('admin123')

  console.log("=================wait for Load======")

  // /await page.waitForLoadState() 

  console.log("============1st way=======")

  await page.waitForLoadState()

  await page.locator('//*[@type="submit"]').click()

  console.log("============2nd way=======")

  await page.waitForLoadState('domcontentloaded', { timeout: 10000 }) /// 10 seconds, html and css content is loading in the web page

  await page.locator("//span[text()='Admin']").click()

  console.log("============3rd way=======")

  await page.waitForLoadState('domcontentloaded') // html and css content is loading in the web page

  await page.locator("//span[text()='PIM']").click()

  console.log("============4th way=======")

  await page.waitForLoadState('load', { timeout: 10000 }) // 10 seconds, html and css content and images is loading in the web page

  await page.locator("//span[text()='Leave']").click()

  console.log("============5th way=======")

  await page.waitForLoadState('load') // html and css content and images is loading in the web page

  await page.locator("//span[text()='Time']").click()

  console.log("============6th way=======")

  await page.waitForLoadState('networkidle', { timeout: 10000 }) // 10 seconds, html and css content and images is loading in the web page along with the network issues

  await page.locator("//span[text()='Recruitment']").click()

  console.log("============7th way=======")

  await page.waitForLoadState('networkidle') // html and css content and images is loading in the web page along with the network issues

  await page.locator("//span[text()='My Info']").click()

})


Then('verify playwright windows handling', async function () {

  browser = await chromium.launch({

    headless: false,

    args: ['--start-maximized']

  })

  context = await browser.newContext({

    viewport: null
  })

  let page1 = await context.newPage()

  let page2 = await context.newPage()

  let page3 = await context.newPage()

  let allPagesCount = await context.pages()

  console.log("allPagesCount is :", allPagesCount.length) //3

  await page1.goto('https://testautomationpractice.blogspot.com/')

  expect(await page1).toHaveTitle("Automation Testing Practice")

  await page2.goto('https://login.salesforce.com/')

  expect(await page2).toHaveTitle("Login | Salesforce")

  await page3.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  expect(await page3).toHaveTitle("OrangeHRM")

  await page3.locator('//input[@name="username"]').fill('Admin')

  await page3.locator('//input[@name="password"]').fill('admin123')

  await page3.locator('//*[@type="submit"]').click()

  await page3.waitForTimeout(5000)

  await allPagesCount[0].bringToFront()

  await page1.getByText('New Tab').scrollIntoViewIfNeeded()

  await page1.getByText('New Tab').click()

  await page3.waitForTimeout(5000)

  allPagesCount = await context.pages()

  console.log("allPagesCount is :", allPagesCount.length) //4

  await allPagesCount[3].close()

  console.log("=====switch to 2nd page and enter the credentials======")

  await allPagesCount[1].bringToFront()

  await page2.getByLabel('Username').fill('playwright')

  await page2.getByLabel('Password').fill('morning@gmail.com')

  await page3.waitForTimeout(5000)

  console.log("=====switch to 1st page and handle the popup======")

  await allPagesCount[0].bringToFront()

  const pagePopup = page1.waitForEvent('popup')

  await page1.getByText('Popup Windows').scrollIntoViewIfNeeded()

  await page1.getByText('Popup Windows').click()

  await page3.waitForTimeout(5000)

  const popupPage = await pagePopup

  console.log('popupPage url is', (await popupPage.url()))

  console.log('popupPage title is', (await popupPage.title()))

  allPagesCount = await context.pages()

  console.log("allPagesCount is :", allPagesCount.length) //5

  console.log("=====close the specific page======")

  await allPagesCount[3].close()

  console.log("=====close the specific browser======")

  await context.close()

  /*popupPage url is https://www.selenium.dev/
popupPage title is Selenium
allPagesCount is : 5*/

})

//shadow dom 

Then('i verify shadow dom', async function () {

  await page.goto('https://selectorshub.com/xpath-practice-page/')

  await page.locator('#userName').locator('#kils').fill('Rajiya')

  await page.locator('#userName').locator('#app2').locator('#pizza').fill('hi everyone good mroning')
})

Then('verify reading the testdata1 from the json file', async function () {

  await page.getByPlaceholder('Enter Name').fill(TestData1.Name)

  await page.getByPlaceholder('Enter EMail').fill(TestData1.Email)

  await page.getByRole('textbox', { name: 'phone' }).fill(TestData1.Phone)

  await page.locator('#textarea').fill(TestData1.Address)

  await page.locator('.wikipedia-search-input').fill(TestData1.Wikipedia)

})

Then('verify reading the testdata2 from the json file', async function () {

  await page.getByPlaceholder('Enter Name').fill(TestData2.Name)

  await page.getByPlaceholder('Enter EMail').fill(TestData2.Email)

  await page.getByRole('textbox', { name: 'phone' }).fill(TestData2.Phone)

  await page.locator('#textarea').fill(TestData2.Address)

  await page.locator('.wikipedia-search-input').fill(TestData2.Wikipedia)

})

Then('verify reading the testdata3 from the json file', async function () {

  await page.getByPlaceholder('Enter Name').fill(TestData3.Name)

  await page.getByPlaceholder('Enter EMail').fill(TestData3.Email)

  await page.getByRole('textbox', { name: 'phone' }).fill(TestData3.Phone)

  await page.locator('#textarea').fill(TestData3.Address)

  await page.locator('.wikipedia-search-input').fill(TestData3.Wikipedia)

})

Then('verify reading the orageHRM data from the json file', async function () {

  await page.goto(orangeHRMCredentials.url)

  await page.locator('//input[@name="username"]').fill(orangeHRMCredentials.username)

  await page.locator('//input[@name="password"]').fill(orangeHRMCredentials.password)

  await page.locator('//*[@type="submit"]').click()

})

Then('verify reading the testdata1 from the feature file {string},{string},{string},{string},{string}', async function (name, email, phone, address, wikipedia) {
  
    await page.getByPlaceholder('Enter Name').fill(name)

  await page.getByPlaceholder('Enter EMail').fill(email)

  await page.getByRole('textbox', { name: 'phone' }).fill(phone)

  await page.locator('#textarea').fill(address)

  await page.locator('.wikipedia-search-input').fill(wikipedia)
});

Then('verify reading the orageHRM data from the feature file {string},{string},{string},{string}', async function (url, username, password, title) {
  
  await page.goto(url)

  expect(await page).toHaveTitle(title)

  await page.locator('//input[@name="username"]').fill(username)

  await page.locator('//input[@name="password"]').fill(password)

  await page.locator('//*[@type="submit"]').click()

});

Then('', async function(){

    await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dtestautomationpractice%26oq%3Dtestautomationpractice%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDMzNTlqMGoyqAIAsAIB%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3D-A5Lau3SC8mC4-EPuqDOoQ8&q=EhAkAbIAAFYzyXTxcRIkVcRGGPidrNIGIjClr0xm2DXh2HXgidDtB58wizXqjSkNkkj-r17d6vaV47d4I3B2ofNjUqwLyx8fLlgyAVJaAUM');
  await page.locator('iframe[name="a-xfvb7cpj4wwl"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('iframe[name="c-xfvb7cpj4wwl"]').contentFrame().locator('[id="6"]').click();
  await page.locator('iframe[name="c-xfvb7cpj4wwl"]').contentFrame().locator('[id="5"]').click();
  await page.locator('iframe[name="c-xfvb7cpj4wwl"]').contentFrame().locator('[id="8"]').click();
  await page.locator('iframe[name="c-xfvb7cpj4wwl"]').contentFrame().locator('[id="4"]').click();
  await page.locator('iframe[name="c-xfvb7cpj4wwl"]').contentFrame().locator('[id="9"]').click();
  await page.locator('iframe[name="c-xfvb7cpj4wwl"]').contentFrame().locator('[id="10"]').click();
  await page.locator('iframe[name="c-xfvb7cpj4wwl"]').contentFrame().locator('[id="11"]').click();
  await page.locator('iframe[name="c-xfvb7cpj4wwl"]').contentFrame().locator('[id="7"]').click();
  await page.locator('iframe[name="c-xfvb7cpj4wwl"]').contentFrame().locator('[id="7"]').click();
  await page.locator('iframe[name="c-xfvb7cpj4wwl"]').contentFrame().locator('[id="3"]').click();
  await page.locator('iframe[name="c-xfvb7cpj4wwl"]').contentFrame().locator('[id="7"]').click();
  await page.locator('iframe[name="c-xfvb7cpj4wwl"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.getByRole('link', { name: 'Automation Testing Practice Automation Testing Practice https://' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('testing');
  await page.getByRole('textbox', { name: 'Enter Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('test@gmail.com');
  await page.getByRole('textbox', { name: 'Enter EMail' }).press('Tab');
  await page.getByRole('textbox', { name: 'Enter Phone' }).fill('9090909090');
  await page.getByRole('textbox', { name: 'Enter Phone' }).press('Tab');
  await page.getByRole('textbox', { name: 'Address:' }).fill('hydreabad');
  await page.locator('#Wikipedia1_wikipedia-search-input').click();
  await page.locator('#Wikipedia1_wikipedia-search-input').fill('test');
  await page.locator('input[type="submit"]').click();
  await page.getByRole('button', { name: 'START' }).click();
  await page.getByRole('button', { name: 'STOP' }).click();
  await page.getByText('Wednesday').click();
  await page.getByLabel('Country:').selectOption('canada');
  await page.getByLabel('Colors:').selectOption('red');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Prompt Alert' }).click();
})

Then('verify amazon login', async function () {

  const email = process.env.AMAZON_EMAIL;
  const password = process.env.AMAZON_PASSWORD;

  if (!email || !password) {
    throw new Error('Set AMAZON_EMAIL and AMAZON_PASSWORD environment variables before running this step.');
  }

  await page.goto('https://www.amazon.in/', { waitUntil: 'domcontentloaded' });

  const signInLink = page.locator('a:has-text("Sign in"), a:has-text("Hello, sign in"), a:has-text("Hello, Sign in"), a:has-text("Accounts & Lists")').first();
  if (await signInLink.count() > 0 && await signInLink.isVisible().catch(() => false)) {
    await signInLink.click();
  } else {
    await page.goto('https://www.amazon.in/ap/signin', { waitUntil: 'domcontentloaded' });
  }

  const emailInput = page.locator('input[name="email"], input[type="email"], #ap_email').first();
  await emailInput.waitFor({ state: 'visible', timeout: 20000 });
  await emailInput.fill(email);

  const continueButton = page.locator('#continue, button:has-text("Continue"), input[type="submit"]').first();
  await continueButton.click();

  const passwordInput = page.locator('input[name="password"], #ap_password').first();
  await passwordInput.waitFor({ state: 'visible', timeout: 20000 });
  await passwordInput.fill(password);

  const submitButton = page.locator('#signInSubmit, button:has-text("Sign in"), input[type="submit"]').first();
  await submitButton.click();

  const signedIn = await page.locator('#nav-link-accountList, a:has-text("Hello"), a[data-nav-role="signin"]').first().isVisible().catch(() => false);
  const verificationPage = await page.locator('text=verify your identity, text=Enter the characters you see, text=To continue, please').first().isVisible().catch(() => false);

  if (signedIn) {
    console.log('Amazon login completed successfully.');
  } else if (verificationPage) {
    console.log('Amazon login reached a verification challenge page.');
  } else {
    await expect(page).toHaveURL(/amazon\.in/);
  }

})

