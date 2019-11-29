const Login = require('../../pages/Login.js');
const Dashboard = require('../../pages/Dashboard.js');
const OnboardingProcess = require('../../pages/OnboardingProcess.js');
const testData = require('../../utils/data.json');
//const { populateSensitiveData:populateSensitiveData } = require('../../utils/populateSensitiveData.js')

const login = new Login();
const dashboard = new Dashboard();
const onboardingProcess = new OnboardingProcess();

describe('Onboarding process', () => {
  it('Onboarding process connecting a TW account', () => {
    //populateSensitiveData(testData);
    browser.url('/');
    login.loginFlow(testData.validUsername, testData.validPassword);
    dashboard.dashboardTitle.waitForDisplayed();
    browser.url('/onboarding');
    onboardingProcess.connectTwitterFlow(testData.twUrl, testData.twEmail, testData.twPassword);
    onboardingProcess.disconnectTwButton.waitForDisplayed(3000);
    onboardingProcess.continueButton.waitForEnabled(3000);
    onboardingProcess.continueButton.click();
    onboardingProcess.continueButton.click();
    onboardingProcess.continueButton.click();
    onboardingProcess.continueButton.click();
    dashboard.dashboardTitle.waitForDisplayed(5000);
    assert.exists(dashboard.dashboardTitle);
  }, 3);
});
