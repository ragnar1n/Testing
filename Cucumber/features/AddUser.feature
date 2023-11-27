Feature: User Management

  Scenario Outline: Adding a user and checking if they have been added to the list
    Given the user is on the registration page
    When they fill in the username with "<username>" and age with "<age>"
    And they submit the form
    Then the user should be added to the list

    Examples:
      | username | age |
      | John Doe | 30  |
