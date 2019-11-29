class DashboardPage {

  get title() { return $('.MuiToolbar-gutters'); }
  get dashboardTitle() { return $('.MuiTypography-root=Dashboard'); }
  get onboardingButton() { return $('.MuiButton-label=ONBOARDING'); }
  get profileButton() { return $('#headerProfile'); }
  get settingsButton() { return $('#menuSettings'); }
}
module.exports = DashboardPage;
