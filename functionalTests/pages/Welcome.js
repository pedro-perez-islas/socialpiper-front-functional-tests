class WelcomePage {
    get welcomeMessage() { return $('.MuiTypography-root=Welcome to SocialPiper'); }
    // get welcomeMessage() { return $('.MuiGrid-root:nth-child(2) > .MuiGrid-root:nth-child(1) span'); }
    get startButton() { return $('#startButton'); }
}
module.exports = WelcomePage;
