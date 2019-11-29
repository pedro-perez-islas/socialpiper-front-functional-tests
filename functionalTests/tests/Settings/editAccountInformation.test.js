const Login = require('../../pages/Login.js');
const Dashboard = require('../../pages/Dashboard.js');
const Settings = require('../../pages/Settings.js');
const testData = require('../../utils/data.json');
//const { populateSensitiveData:populateSensitiveData } = require('../../utils/populateSensitiveData.js')

const login = new Login();
const dashboard = new Dashboard();
const settings = new Settings();

beforeEach(function() {
  //populateSensitiveData(testData);
  browser.url('/');
  login.loginFlow(testData.validUsername, testData.validPassword);
  dashboard.dashboardTitle.waitForDisplayed(3000);
});

describe('Settings tests', () => {
  it('Edit account information', () => {
    dashboard.profileButton.waitForDisplayed(3000);
    dashboard.profileButton.click();
    dashboard.settingsButton.click();
    settings.editAccountInfo(testData.firstNameEdit, testData.lastNameEdit);
    browser.pause(3000);
  }, 3);
});
