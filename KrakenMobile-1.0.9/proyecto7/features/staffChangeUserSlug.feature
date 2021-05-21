  Feature: Login select general administration button and change password
  
  @user1 @web
  Scenario: As the first user I want to be able to log into the application select general administration button and change user slug
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When I navigate to page "http://localhost:2368/ghost/#/signin/"
    Then I enter "ma.zapataf@uniandes.edu.co" into input field having id "ember8"
    Then I enter "misomazf88" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "http://localhost:2368/ghost/#/staff"
    Then I click on element having css selector ".user-list-item-figure"
    Then I enter "$name_1" into input field having id "user-slug"
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-btn-icon.ember-view"