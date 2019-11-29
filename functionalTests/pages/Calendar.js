class CalendarPage {

    get calendarTitle() { return $('.MuiGrid-root=My Calendar'); }
    get createPostMonday() { return $('#Monday'); }
    get createPostTuesday() { return $('#Tuesday'); }
    get createPostWednesday() { return $('#Wednesday'); }
    get createPostThursday() { return $('#Thursday'); }
    get createPostFriday() { return $('#Friday'); }
    get createPostSaturday() { return $('#Saturday'); }
    get createPostSunday() { return $('#Sunday'); }
    get todayButton() { return $('#todayBtn'); }
    get specificWeekButton() { return $('#weekBtn'); }
    get previousWeekButton() { return $('#prevWeekBtn'); }
    get netxWeekButton() { return $('#nextWeekBtn'); }
    get menuMonday() { return $('svg[id="cardDropDown"]'); }
}
module.exports = CalendarPage;
