
Feature: Reading Test Data From The Json File

    Background: common steps
        Given I launch the browser
        Then I launch the test automation practice application

    @regression
    Scenario: verify reading the testdata from the feature file
        And verify reading the testdata1 from the feature file "<Name>","<Email>","<Phone>","<Address>","<Wikipedia>"
        And I close the browser

        Examples:
            | Name     | Email                | Phone      | Address   | Wikipedia  |
            | Rajiya   | r@gmail.com          | 9090909090 | Hyderabad | Playwright |
            | Sreekar  | sree@yahoo.com       | 8908908908 | Bangalore | Typescript |
            | Sharmila | Sharmila@outlook.com | 7890789090 | Chennai   | Selenium   |
            | Quality  | qt@gmail.com         | 6789067908 | Delhi     | Typescript |


    @regression
    Scenario Outline: verify reading the orageHRM data from the feature file
        And verify reading the orageHRM data from the feature file "<url>","<username>","<password>","<title>"
        And I close the browser

        Examples:
            | url                                                                | username | password | title     |
            | https://opensource-demo.orangehrmlive.com/web/index.php/auth/login | Admin    | admin123 | OrangeHRM |
















