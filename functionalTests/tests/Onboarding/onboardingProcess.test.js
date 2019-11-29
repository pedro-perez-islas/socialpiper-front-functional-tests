const Login = require('../../pages/Login.js');
const SignupPage = require('../../pages/Signup.js');
const WelcomePage = require('../../pages/Welcome.js');
const Dashboard = require('../../pages/Dashboard.js');
const OnboardingProcess = require('../../pages/OnboardingProcess.js');
const testData = require('../../utils/data.json');
//const { populateSensitiveData:populateSensitiveData } = require('../../utils/populateSensitiveData.js');

const login = new Login();
const signup = new SignupPage();
const welcome = new WelcomePage();
const dashboard = new Dashboard();
const onboardingProcess = new OnboardingProcess();

function getInstantDateTime(){
  let d = new Date(),
  timeStamp = [d.getMonth()+1,
             d.getDate(),
             d.getFullYear()].join('/')+"."+
             [d.getHours(),
             d.getMinutes(),
             d.getSeconds()].join('.');
  return timeStamp;
}

const userInfo  = getInstantDateTime();
const userEmail = "mail" + userInfo + "@mail.com";

describe('Onboarding process', () => {
  it('Connect TW account and finish onboarding process', () => {
    //populateSensitiveData(testData);

    browser.url('/');
    login.signupButton.click();
    signup.signupFlow("Name" + userInfo, "LastName" + userInfo, "Business" + userInfo, userEmail, testData.signupPassword);
    browser.pause(3000); // This timer is needed due SOC-796
    // browser.url('/onboarding');
    welcome.welcomeMessage.waitForDisplayed(3000);
    welcome.startButton.click();

    // onboardingProcess.connectFacebookFlow(testData.fbUrl, testData.fbEmail, testData.fbPassword);
    onboardingProcess.connectTwitterFlow(testData.twUrl, testData.twEmail, testData.twPassword);
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
