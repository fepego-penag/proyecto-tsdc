  Feature: Login navigate Tag editor, select new tag and create tag
  
  @user1 @web
  Scenario: As the first user I want to be able to log into the application navigate Tag editor, select new tag and create tag
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When I navigate to page "http://localhost:2368/ghost/#/signin/"
    Then I enter "ma.zapataf@uniandes.edu.co" into input field having id "ember8"
    Then I enter "misomazf88" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "http://localhost:2368/ghost/#/tags"
    Then I navigate to page "http://localhost:2368/ghost/#/tags/new"
    Then I enter "$name_1" into input field having id "tag-name"
    Then I enter "$email_1" into input field having id "tag-slug"
    Then I enter "$email_2" into input field having id "tag-description"
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-btn-icon.ember-view"
    Then I navigate to page "http://localhost:2368/ghost/#/tags"
    Then I wait for 5 seconds

  @user2 @web
  Scenario: As the first user I want to be able to log into the application navigate Tag editor, select new tag and create tag
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When I navigate to page "http://localhost:2368/ghost/#/signin/"
    Then I enter "ma.zapataf@uniandes.edu.co" into input field having id "ember8"
    Then I enter "misomazf88" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "http://localhost:2368/ghost/#/tags"
    Then I wait for 5 seconds
    Then I navigate to page "http://localhost:2368/ghost/#/tags/new"
    Then I enter "$name_2" into input field having id "tag-name"
    Then I enter "$email_3" into input field having id "tag-slug"
    Then I enter "$email_4" into input field having id "tag-description"
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-btn-icon.ember-view"
    Then I navigate to page "http://localhost:2368/ghost/#/tags"
    Then I wait for 5 seconds

  @user3 @web
  Scenario: As the first user I want to be able to log into the application navigate Tag editor, select new tag and create tag
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When I navigate to page "http://localhost:2368/ghost/#/signin/"
    Then I enter "ma.zapataf@uniandes.edu.co" into input field having id "ember8"
    Then I enter "misomazf88" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "http://localhost:2368/ghost/#/tags"
    Then I wait for 5 seconds
    Then I navigate to page "http://localhost:2368/ghost/#/tags/new"
    Then I enter "$name_3" into input field having id "tag-name"
    Then I enter "$email_5" into input field having id "tag-slug"
    Then I enter "$email_6" into input field having id "tag-description"
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-btn-icon.ember-view"
    Then I navigate to page "http://localhost:2368/ghost/#/tags"
    Then I wait for 5 seconds