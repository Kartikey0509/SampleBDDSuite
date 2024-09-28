Feature: Verify and Validate Goibibo page
  I want to use this template for validating Goibibo page

  #Background, #Scenario Outline
  @Smoke
  Scenario Outline: Validate Search button on Goibibo page
    Given User launches the browser
    And User enters the url
    When User navigate to the test page
    And searches for "origin"
    And Enters Desination as "destination"
    Then Clicked on Search button

    Examples: 
      | origin |  | destination |
      | Pune   |  | New Delhi   |
