Feature: Login into ghost
    As an user I want to authenticate myself within ghost website in order to rate teachers

Scenario Outline: Login failed with wrong inputs

  Given I go to Ghost login  screen
    When I open the login screen
    And I fill with <email> and <password>
    And I try to login
    Then I expect to see <error>

    Examples:
      | email            | password | error                    |
      |                  |          | "Please fill out the form to sign in."   |
      | miso@gmail.com   |    1234  | ""      |