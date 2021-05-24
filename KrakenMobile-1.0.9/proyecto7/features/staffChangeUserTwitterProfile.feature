  Feature: Login select staff button, select miguel user and change Twitter Profile
  
  @user1 @web
  Scenario: As the first user I want to be able to log into the application select staff button, select miguel user and change Twitter Profile
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When I navigate to page "http://localhost:2368/ghost/#/signin/"
    Then I enter "ma.zapataf@uniandes.edu.co" into input field having id "ember8"
    Then I enter "misomazf88" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "http://localhost:2368/ghost/#/staff"
    Then I navigate to page "http://localhost:2368/ghost/#/staff/miguel"
    Then I enter "" into input field having id "user-twitter"
    Then I enter "$name_1" into input field having id "user-twitter"
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-btn-icon.ember-view"
    Then I wait for 5 seconds

  @user2 @web
  Scenario: As the second user I want to be able to log into the application select staff button, select miguel user and change Twitter Profile
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When I navigate to page "http://localhost:2368/ghost/#/signin/"
    Then I enter "ma.zapataf@uniandes.edu.co" into input field having id "ember8"
    Then I enter "misomazf88" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I wait for 5 seconds
    Then I navigate to page "http://localhost:2368/ghost/#/staff"
    Then I navigate to page "http://localhost:2368/ghost/#/staff/miguel"
    Then I enter "" into input field having id "user-twitter"
    Then I enter "$name_2" into input field having id "user-twitter"
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-btn-icon.ember-view"
    Then I wait for 5 seconds

  @user3 @web
  Scenario: As the third user I want to be able to log into the application select staff button, select miguel user and change Twitter Profile
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When I navigate to page "http://localhost:2368/ghost/#/signin/"
    Then I enter "ma.zapataf@uniandes.edu.co" into input field having id "ember8"
    Then I enter "misomazf88" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I wait for 5 seconds
    Then I navigate to page "http://localhost:2368/ghost/#/staff"
    Then I navigate to page "http://localhost:2368/ghost/#/staff/miguel"
    Then I enter "" into input field having id "user-twitter"
    Then I enter "$name_3" into input field having id "user-twitter"
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-btn-icon.ember-view"
    Then I wait for 5 seconds
