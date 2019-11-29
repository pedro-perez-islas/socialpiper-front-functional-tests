const Login = require('../../pages/Login.js');
const Dashboard = require('../../pages/Dashboard.js');
const OnboardingProcess = require('../../pages/OnboardingProcess.js');
const testData = require('../../utils/data.json');
//const { populateSensitiveData:populateSensitiveData } = require('../../utils/populateSensitiveData.js');

const login = new Login();
const dashboard = new Dashboard();
const onboardingProcess = new OnboardingProcess();

describe('Onboarding process', () => {
  it('Connect TW account and finish onboarding process', () => {
    //populateSensitiveData(testData);
    browser.url('/');
    login.loginFlow(testData.validUsername, testData.validPassword);
    dashboard.dashboardTitle.waitForDisplayed();
    browser.url('/onboarding');
    onboardingProcess.connectFacebookFlow(testData.fbUrl, testData.fbEmail, testData.fbPassword);
    onboardingProcess.continueButton.waitForEnabled(3000);
    onboardingProcess.continueButton.click();
    onboardingProcess.businessInformationFlow(testData.bsnssInfoCategory, testData.bsnssInfoLocation);
    onboardingProcess.clientsInformationFlow(testData.clientsInfoLocation, testData.clientsInfoInterests);
    onboardingProcess.addFbCompetitorsFlow(testData.fbCompetitors);
    onboardingProcess.continueButton.click();
    dashboard.dashboardTitle.waitForDisplayed(3000);
    assert.equal('Dashboard Component', dashboard.dashboardTitle.getText());
  }, 3);
});
