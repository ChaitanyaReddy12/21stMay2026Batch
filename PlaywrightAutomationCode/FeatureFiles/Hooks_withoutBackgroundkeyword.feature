
Feature: Hooks without Background keyword

    @regression
    Scenario: verify reading the testdata from the feature file
        Then I launch the test automation practice application in hooks
        And verify reading the testdata1 from the feature file in hooks "<Name>","<Email>","<Phone>","<Address>","<Wikipedia>"

        Examples:
            | Name     | Email                | Phone      | Address   | Wikipedia  |
            | Rajiya   | r@gmail.com          | 9090909090 | Hyderabad | Playwright |
            | Sreekar  | sree@yahoo.com       | 8908908908 | Bangalore | Typescript |
            | Sharmila | Sharmila@outlook.com | 7890789090 | Chennai   | Selenium   |
            | Quality  | qt@gmail.com         | 6789067908 | Delhi     | Typescript |
