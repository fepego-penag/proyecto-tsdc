var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
var {expect} = require('chai');

Given('I go to Ghost login  screen', () => {
  browser.url('/ghost/#/signin/');
  if($('button=Cerrar').isDisplayed()) {
    $('button=Cerrar').click();
  }
});

When('I open the login screen', () => {
  $('button.login').waitForExist(500);
  $('button.login').waitForDisplayed(500);
});

When(/^I fill with (.*) and (.*)$/ , (email, password) => {


    var mailInput = $('input.email');
    mailInput.click();
    mailInput.keys(email);
 
    var passwordInput = $('input.password');
    passwordInput.click();
    passwordInput.keys(password)
 });
 
 Then('I expect to see {string}', error => {
    $('.main-error').waitForDisplayed(5000);
    var alertText = browser.$('.main-error').getText();
    expect(alertText).to.include(error);
 });

When('I try to login', () => {
  $('.login').click();
});

Then('I expect to not be able to login', () => {
  $('.notice.alert.alert-danger').waitForDisplayed(5000);
});