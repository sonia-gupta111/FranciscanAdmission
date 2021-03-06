$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/Reports.feature");
formatter.feature({
  "line": 1,
  "name": "Admission reports",
  "description": "   As a user I would like to open all the admission reports\n   So that I can verify that there is no problem in report loading",
  "id": "admission-reports",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 12,
      "value": "#class wise admission report"
    }
  ],
  "line": 14,
  "name": "To open class wise admission report with all the filters",
  "description": "",
  "id": "admission-reports;to-open-class-wise-admission-report-with-all-the-filters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@scenario1"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "class wise admission report is opened",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user select session \"\u003csession\u003e\" on class wise admission report",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "select school \"\u003cschool\u003e\" on class wise admission report",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "select class \"\u003cclass\u003e\" on class wise admission report",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "select stream \"All Stream\" on class wise admission report",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "select subject \"All Subject\" on class wise admission report",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on class wise admission report",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "select to date as month \"April\" year \"2017\" and day \"1\" on class wise admission report",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click show to open class wise admission report",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "admission-reports;to-open-class-wise-admission-report-with-all-the-filters;",
  "rows": [
    {
      "cells": [
        "session",
        "school",
        "class"
      ],
      "line": 26,
      "id": "admission-reports;to-open-class-wise-admission-report-with-all-the-filters;;1"
    },
    {
      "cells": [
        "2017-2018",
        "Inspiration public school",
        "1"
      ],
      "line": 27,
      "id": "admission-reports;to-open-class-wise-admission-report-with-all-the-filters;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5445650128,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"admin\" and \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "admission home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyTestDefs.user_enter(String)"
});
formatter.result({
  "duration": 18476350572,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 12
    },
    {
      "val": "Admin#franciscan",
      "offset": 24
    }
  ],
  "location": "MyTestDefs.user_enter_and(String,String)"
});
formatter.result({
  "duration": 297851764,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyTestDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 62460,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.click_signin()"
});
formatter.result({
  "duration": 16975326863,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.admission_home_page_is_opened()"
});
formatter.result({
  "duration": 866652631,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "To open class wise admission report with all the filters",
  "description": "",
  "id": "admission-reports;to-open-class-wise-admission-report-with-all-the-filters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@scenario1"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "class wise admission report is opened",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user select session \"2017-2018\" on class wise admission report",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "select school \"Inspiration public school\" on class wise admission report",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "select class \"1\" on class wise admission report",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "select stream \"All Stream\" on class wise admission report",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "select subject \"All Subject\" on class wise admission report",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on class wise admission report",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "select to date as month \"April\" year \"2017\" and day \"1\" on class wise admission report",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click show to open class wise admission report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTestDefs.class_wise_admission_report_is_opened()"
});
formatter.result({
  "duration": 10050978463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2017-2018",
      "offset": 21
    }
  ],
  "location": "MyTestDefs.user_select_session_on_class_wise_admission_report(String)"
});
formatter.result({
  "duration": 110005261,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Inspiration public school",
      "offset": 15
    }
  ],
  "location": "MyTestDefs.select_school_on_class_wise_admission_report(String)"
});
formatter.result({
  "duration": 82267152,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: Inspiration public school\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:151)\r\n\tat pageObjects.ClassWiseAdmisssionReport.selectSchool(ClassWiseAdmisssionReport.java:47)\r\n\tat stepDef.MyTestDefs.select_school_on_class_wise_admission_report(MyTestDefs.java:134)\r\n\tat ✽.And select school \"Inspiration public school\" on class wise admission report(Feature/Reports.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 14
    }
  ],
  "location": "MyTestDefs.select_class_on_class_wise_admission_report(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "All Stream",
      "offset": 15
    }
  ],
  "location": "MyTestDefs.select_stream_on_class_wise_admission_report(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "All Subject",
      "offset": 16
    }
  ],
  "location": "MyTestDefs.select_subject_on_class_wise_admission_report(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 40
    },
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "MyTestDefs.select_from_date_as_month_year_and_day_on_class_wise_admission_report(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "MyTestDefs.select_to_date_as_month_year_and_day_on_class_wise_admission_report(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyTestDefs.click_show_to_open_class_wise_admission_report()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 5277849101,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 29,
      "value": "#search and import online registration"
    }
  ],
  "line": 31,
  "name": "To open search and import online registration report with all the filters",
  "description": "",
  "id": "admission-reports;to-open-search-and-import-online-registration-report-with-all-the-filters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@scenario2"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "search and import online registration report is opened",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user select session \"\u003csession\u003e\" on search and import online registration report page",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "select class \"\u003cclass\u003e\" on search and import online registration report page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on search and import online registration report page",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "select to date as month \"April\" year \"2017\" and day \"1\" on search and import online registration report page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user click show to open search and import online registration report",
  "keyword": "Then "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "admission-reports;to-open-search-and-import-online-registration-report-with-all-the-filters;",
  "rows": [
    {
      "cells": [
        "session",
        "class"
      ],
      "line": 40,
      "id": "admission-reports;to-open-search-and-import-online-registration-report-with-all-the-filters;;1"
    },
    {
      "cells": [
        "2017-2018",
        "1"
      ],
      "line": 41,
      "id": "admission-reports;to-open-search-and-import-online-registration-report-with-all-the-filters;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3502745337,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"admin\" and \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "admission home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyTestDefs.user_enter(String)"
});
formatter.result({
  "duration": 3620954645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 12
    },
    {
      "val": "Admin#franciscan",
      "offset": 24
    }
  ],
  "location": "MyTestDefs.user_enter_and(String,String)"
});
formatter.result({
  "duration": 5295170354,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyTestDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 57183,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.click_signin()"
});
formatter.result({
  "duration": 7798213625,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.admission_home_page_is_opened()"
});
formatter.result({
  "duration": 501256544,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "To open search and import online registration report with all the filters",
  "description": "",
  "id": "admission-reports;to-open-search-and-import-online-registration-report-with-all-the-filters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@scenario2"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "search and import online registration report is opened",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user select session \"2017-2018\" on search and import online registration report page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "select class \"1\" on search and import online registration report page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on search and import online registration report page",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "select to date as month \"April\" year \"2017\" and day \"1\" on search and import online registration report page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user click show to open search and import online registration report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTestDefs.search_and_import_online_registration_report_is_opened()"
});
formatter.result({
  "duration": 23828184189,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2017-2018",
      "offset": 21
    }
  ],
  "location": "MyTestDefs.user_select_session_on_search_and_import_online_registration_report_page(String)"
});
formatter.result({
  "duration": 111455639,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 14
    }
  ],
  "location": "MyTestDefs.select_class_on_search_and_import_online_registration_report_page(String)"
});
formatter.result({
  "duration": 100527954,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 40
    },
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "MyTestDefs.select_from_date_as_month_year_and_day_on_search_and_import_online_registration_report_page(String,String,String)"
});
formatter.result({
  "duration": 4642668965,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "MyTestDefs.select_to_date_as_month_year_and_day_on_search_and_import_online_registration_report_page(String,String,String)"
});
formatter.result({
  "duration": 4621010948,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.user_click_show_to_open_search_and_import_online_registration_report()"
});
formatter.result({
  "duration": 7392171478,
  "status": "passed"
});
formatter.after({
  "duration": 4777850274,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 44,
  "name": "To test import data on search and import online registration report",
  "description": "",
  "id": "admission-reports;to-test-import-data-on-search-and-import-online-registration-report",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 43,
      "name": "@scenario3"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "search and import online registration report is opened",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "user select session \"\u003csession\u003e\" on search and import online registration report page",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "select class \"\u003cclass\u003e\" on search and import online registration report page",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on search and import online registration report page",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "select to date as month \"April\" year \"2017\" and day \"30\" on search and import online registration report page",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "user click import data to import data on search and import online registration report",
  "keyword": "Then "
});
formatter.examples({
  "line": 52,
  "name": "",
  "description": "",
  "id": "admission-reports;to-test-import-data-on-search-and-import-online-registration-report;",
  "rows": [
    {
      "cells": [
        "session",
        "class"
      ],
      "line": 53,
      "id": "admission-reports;to-test-import-data-on-search-and-import-online-registration-report;;1"
    },
    {
      "cells": [
        "2017-2018",
        "1"
      ],
      "line": 54,
      "id": "admission-reports;to-test-import-data-on-search-and-import-online-registration-report;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3808513771,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"admin\" and \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "admission home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyTestDefs.user_enter(String)"
});
formatter.result({
  "duration": 2019159004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 12
    },
    {
      "val": "Admin#franciscan",
      "offset": 24
    }
  ],
  "location": "MyTestDefs.user_enter_and(String,String)"
});
formatter.result({
  "duration": 196903300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyTestDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 62167,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.click_signin()"
});
formatter.result({
  "duration": 15287087415,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.admission_home_page_is_opened()"
});
formatter.result({
  "duration": 380725635,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "To test import data on search and import online registration report",
  "description": "",
  "id": "admission-reports;to-test-import-data-on-search-and-import-online-registration-report;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 43,
      "name": "@scenario3"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "search and import online registration report is opened",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "user select session \"2017-2018\" on search and import online registration report page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "select class \"1\" on search and import online registration report page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on search and import online registration report page",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "select to date as month \"April\" year \"2017\" and day \"30\" on search and import online registration report page",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "user click import data to import data on search and import online registration report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTestDefs.search_and_import_online_registration_report_is_opened()"
});
formatter.result({
  "duration": 4722693398,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2017-2018",
      "offset": 21
    }
  ],
  "location": "MyTestDefs.user_select_session_on_search_and_import_online_registration_report_page(String)"
});
formatter.result({
  "duration": 111523671,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 14
    }
  ],
  "location": "MyTestDefs.select_class_on_search_and_import_online_registration_report_page(String)"
});
formatter.result({
  "duration": 99696025,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 40
    },
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "MyTestDefs.select_from_date_as_month_year_and_day_on_search_and_import_online_registration_report_page(String,String,String)"
});
formatter.result({
  "duration": 4651642774,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "30",
      "offset": 53
    }
  ],
  "location": "MyTestDefs.select_to_date_as_month_year_and_day_on_search_and_import_online_registration_report_page(String,String,String)"
});
formatter.result({
  "duration": 5188698666,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.user_click_import_data_to_import_data_on_search_and_import_online_registration_report()"
});
formatter.result({
  "duration": 26879619230,
  "status": "passed"
});
formatter.after({
  "duration": 4937278932,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 57,
  "name": "To test update data to erp on search and import online registration report",
  "description": "",
  "id": "admission-reports;to-test-update-data-to-erp-on-search-and-import-online-registration-report",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 56,
      "name": "@scenario4"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "search and import online registration report is opened",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "user select session \"\u003csession\u003e\" on search and import online registration report page",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "select class \"\u003cclass\u003e\" on search and import online registration report page",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on search and import online registration report page",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "select to date as month \"April\" year \"2017\" and day \"1\" on search and import online registration report page",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "user click update data to erp on search and import online registration report",
  "keyword": "Then "
});
formatter.examples({
  "line": 65,
  "name": "",
  "description": "",
  "id": "admission-reports;to-test-update-data-to-erp-on-search-and-import-online-registration-report;",
  "rows": [
    {
      "cells": [
        "session",
        "class"
      ],
      "line": 66,
      "id": "admission-reports;to-test-update-data-to-erp-on-search-and-import-online-registration-report;;1"
    },
    {
      "cells": [
        "2017-2018",
        "1"
      ],
      "line": 67,
      "id": "admission-reports;to-test-update-data-to-erp-on-search-and-import-online-registration-report;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3922933212,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"admin\" and \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "admission home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyTestDefs.user_enter(String)"
});
formatter.result({
  "duration": 6126592234,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 12
    },
    {
      "val": "Admin#franciscan",
      "offset": 24
    }
  ],
  "location": "MyTestDefs.user_enter_and(String,String)"
});
formatter.result({
  "duration": 166775558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyTestDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 63633,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.click_signin()"
});
formatter.result({
  "duration": 6598221015,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.admission_home_page_is_opened()"
});
formatter.result({
  "duration": 1341180113,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "To test update data to erp on search and import online registration report",
  "description": "",
  "id": "admission-reports;to-test-update-data-to-erp-on-search-and-import-online-registration-report;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 56,
      "name": "@scenario4"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "search and import online registration report is opened",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "user select session \"2017-2018\" on search and import online registration report page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "select class \"1\" on search and import online registration report page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on search and import online registration report page",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "select to date as month \"April\" year \"2017\" and day \"1\" on search and import online registration report page",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "user click update data to erp on search and import online registration report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTestDefs.search_and_import_online_registration_report_is_opened()"
});
formatter.result({
  "duration": 6684163962,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2017-2018",
      "offset": 21
    }
  ],
  "location": "MyTestDefs.user_select_session_on_search_and_import_online_registration_report_page(String)"
});
formatter.result({
  "duration": 97825430,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 14
    }
  ],
  "location": "MyTestDefs.select_class_on_search_and_import_online_registration_report_page(String)"
});
formatter.result({
  "duration": 105738288,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 40
    },
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "MyTestDefs.select_from_date_as_month_year_and_day_on_search_and_import_online_registration_report_page(String,String,String)"
});
formatter.result({
  "duration": 4685499095,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "MyTestDefs.select_to_date_as_month_year_and_day_on_search_and_import_online_registration_report_page(String,String,String)"
});
formatter.result({
  "duration": 4640828574,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.user_click_update_data_to_erp_on_search_and_import_online_registration_report()"
});
formatter.result({
  "duration": 6595780944,
  "status": "passed"
});
formatter.after({
  "duration": 4845974630,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 69,
      "value": "#slot report"
    }
  ],
  "line": 71,
  "name": "To test slot report with all filters",
  "description": "",
  "id": "admission-reports;to-test-slot-report-with-all-filters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 70,
      "name": "@scenario5"
    }
  ]
});
formatter.step({
  "line": 72,
  "name": "slot report is opened",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "user select session \"\u003csession\u003e\" on slot report",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "select class \"\u003cclass\u003e\" on slot report",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "select slot \"\u003cslot\u003e\" on slot report",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "user click show to open slot report",
  "keyword": "Then "
});
formatter.examples({
  "line": 78,
  "name": "",
  "description": "",
  "id": "admission-reports;to-test-slot-report-with-all-filters;",
  "rows": [
    {
      "cells": [
        "session",
        "class",
        "slot"
      ],
      "line": 79,
      "id": "admission-reports;to-test-slot-report-with-all-filters;;1"
    },
    {
      "cells": [
        "2017-2018",
        "1",
        "s1"
      ],
      "line": 80,
      "id": "admission-reports;to-test-slot-report-with-all-filters;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4567349316,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"admin\" and \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "admission home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyTestDefs.user_enter(String)"
});
formatter.result({
  "duration": 1013346056,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 12
    },
    {
      "val": "Admin#franciscan",
      "offset": 24
    }
  ],
  "location": "MyTestDefs.user_enter_and(String,String)"
});
formatter.result({
  "duration": 170282153,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyTestDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 53077,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.click_signin()"
});
formatter.result({
  "duration": 6862518203,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.admission_home_page_is_opened()"
});
formatter.result({
  "duration": 1756278764,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "To test slot report with all filters",
  "description": "",
  "id": "admission-reports;to-test-slot-report-with-all-filters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 70,
      "name": "@scenario5"
    }
  ]
});
formatter.step({
  "line": 72,
  "name": "slot report is opened",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "user select session \"2017-2018\" on slot report",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "select class \"1\" on slot report",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "select slot \"s1\" on slot report",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "user click show to open slot report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTestDefs.slot_report_is_opened()"
});
formatter.result({
  "duration": 8965584758,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2017-2018",
      "offset": 21
    }
  ],
  "location": "MyTestDefs.user_select_session_on_slot_report(String)"
});
formatter.result({
  "duration": 386947949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 14
    }
  ],
  "location": "MyTestDefs.select_class_on_slot_report(String)"
});
formatter.result({
  "duration": 336410230,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "s1",
      "offset": 13
    }
  ],
  "location": "MyTestDefs.select_slot_on_slot_report(String)"
});
formatter.result({
  "duration": 63401978,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: s1\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:151)\r\n\tat pageObjects.SlotReport.selectSlot(SlotReport.java:47)\r\n\tat stepDef.MyTestDefs.select_slot_on_slot_report(MyTestDefs.java:244)\r\n\tat ✽.And select slot \"s1\" on slot report(Feature/Reports.feature:75)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyTestDefs.user_click_show_to_open_slot_report()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4876195624,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 82,
      "value": "#admission withdrawal register"
    }
  ],
  "line": 84,
  "name": "To test admission withdrawal register report",
  "description": "",
  "id": "admission-reports;to-test-admission-withdrawal-register-report",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 83,
      "name": "@scenario6"
    }
  ]
});
formatter.step({
  "line": 85,
  "name": "admission withdrawal register report page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "user select session \"\u003csession\u003e\" on admission withdrawal register report",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "user click show to open admission withdrawal register report",
  "keyword": "Then "
});
formatter.examples({
  "line": 89,
  "name": "",
  "description": "",
  "id": "admission-reports;to-test-admission-withdrawal-register-report;",
  "rows": [
    {
      "cells": [
        "session"
      ],
      "line": 90,
      "id": "admission-reports;to-test-admission-withdrawal-register-report;;1"
    },
    {
      "cells": [
        "2017-2018"
      ],
      "line": 91,
      "id": "admission-reports;to-test-admission-withdrawal-register-report;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3597506676,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"admin\" and \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "admission home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyTestDefs.user_enter(String)"
});
formatter.result({
  "duration": 7055758024,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 12
    },
    {
      "val": "Admin#franciscan",
      "offset": 24
    }
  ],
  "location": "MyTestDefs.user_enter_and(String,String)"
});
formatter.result({
  "duration": 171683265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyTestDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 48092,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.click_signin()"
});
formatter.result({
  "duration": 6231289218,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.admission_home_page_is_opened()"
});
formatter.result({
  "duration": 1375387740,
  "status": "passed"
});
formatter.scenario({
  "line": 91,
  "name": "To test admission withdrawal register report",
  "description": "",
  "id": "admission-reports;to-test-admission-withdrawal-register-report;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 83,
      "name": "@scenario6"
    }
  ]
});
formatter.step({
  "line": 85,
  "name": "admission withdrawal register report page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "user select session \"2017-2018\" on admission withdrawal register report",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "user click show to open admission withdrawal register report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTestDefs.admission_withdrawal_register_report_page_is_opened()"
});
formatter.result({
  "duration": 8035923682,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2017-2018",
      "offset": 21
    }
  ],
  "location": "MyTestDefs.user_select_session_on_admission_withdrawal_register_report(String)"
});
formatter.result({
  "duration": 100412417,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.user_click_show_to_open_admission_withdrawal_register_report()"
});
formatter.result({
  "duration": 8793619394,
  "status": "passed"
});
formatter.after({
  "duration": 4829392642,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 93,
      "value": "#verification admission form"
    }
  ],
  "line": 95,
  "name": "To test verification admission form with all filters",
  "description": "",
  "id": "admission-reports;to-test-verification-admission-form-with-all-filters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 94,
      "name": "@scenario7"
    }
  ]
});
formatter.step({
  "line": 96,
  "name": "verification admission form is opened",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "user select class \"\u003cclass\u003e\" on verification admission form",
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "select section \"\u003csection\u003e\" on verification admission form",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "select date as month \"April\" year \"2017\" and day \"10\" on verification admission form",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "user click show to open verification admission form",
  "keyword": "Then "
});
formatter.examples({
  "line": 102,
  "name": "",
  "description": "",
  "id": "admission-reports;to-test-verification-admission-form-with-all-filters;",
  "rows": [
    {
      "cells": [
        "class",
        "section"
      ],
      "line": 103,
      "id": "admission-reports;to-test-verification-admission-form-with-all-filters;;1"
    },
    {
      "cells": [
        "1",
        "A"
      ],
      "line": 104,
      "id": "admission-reports;to-test-verification-admission-form-with-all-filters;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3607847582,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"admin\" and \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "admission home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyTestDefs.user_enter(String)"
});
formatter.result({
  "duration": 5857597300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 12
    },
    {
      "val": "Admin#franciscan",
      "offset": 24
    }
  ],
  "location": "MyTestDefs.user_enter_and(String,String)"
});
formatter.result({
  "duration": 164622277,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyTestDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 100876,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.click_signin()"
});
formatter.result({
  "duration": 4364436595,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.admission_home_page_is_opened()"
});
formatter.result({
  "duration": 752749003,
  "status": "passed"
});
formatter.scenario({
  "line": 104,
  "name": "To test verification admission form with all filters",
  "description": "",
  "id": "admission-reports;to-test-verification-admission-form-with-all-filters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 94,
      "name": "@scenario7"
    }
  ]
});
formatter.step({
  "line": 96,
  "name": "verification admission form is opened",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "user select class \"1\" on verification admission form",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "select section \"A\" on verification admission form",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "select date as month \"April\" year \"2017\" and day \"10\" on verification admission form",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "user click show to open verification admission form",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTestDefs.verification_admission_form_is_opened()"
});
formatter.result({
  "duration": 4880388113,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 19
    }
  ],
  "location": "MyTestDefs.user_select_class_on_verification_admission_form(String)"
});
formatter.result({
  "duration": 318799547,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A",
      "offset": 16
    }
  ],
  "location": "MyTestDefs.select_section_on_verification_admission_form(String)"
});
formatter.result({
  "duration": 105074974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 22
    },
    {
      "val": "2017",
      "offset": 35
    },
    {
      "val": "10",
      "offset": 50
    }
  ],
  "location": "MyTestDefs.select_date_as_month_year_and_day_on_verification_admission_form(String,String,String)"
});
formatter.result({
  "duration": 4773478614,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.user_click_show_to_open_verification_admission_form()"
});
formatter.result({
  "duration": 7955229190,
  "status": "passed"
});
formatter.after({
  "duration": 4893901317,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 106,
      "value": "#student repeater list"
    }
  ],
  "line": 108,
  "name": "To test student repeater list",
  "description": "",
  "id": "admission-reports;to-test-student-repeater-list",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 107,
      "name": "@scenario8"
    }
  ]
});
formatter.step({
  "line": 109,
  "name": "student repeater list page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "user select class \"\u003cclass\u003e\" on student repeater list page",
  "keyword": "When "
});
formatter.step({
  "line": 111,
  "name": "select section \"\u003csection\u003e\" on student repeater list page",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "user click show to open student repeater list page",
  "keyword": "Then "
});
formatter.examples({
  "line": 114,
  "name": "",
  "description": "",
  "id": "admission-reports;to-test-student-repeater-list;",
  "rows": [
    {
      "cells": [
        "class",
        "section"
      ],
      "line": 115,
      "id": "admission-reports;to-test-student-repeater-list;;1"
    },
    {
      "cells": [
        "1",
        "A"
      ],
      "line": 116,
      "id": "admission-reports;to-test-student-repeater-list;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4713558012,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"admin\" and \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "admission home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyTestDefs.user_enter(String)"
});
formatter.result({
  "duration": 13895007428,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 12
    },
    {
      "val": "Admin#franciscan",
      "offset": 24
    }
  ],
  "location": "MyTestDefs.user_enter_and(String,String)"
});
formatter.result({
  "duration": 168317720,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyTestDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 91785,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.click_signin()"
});
formatter.result({
  "duration": 4988841240,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.admission_home_page_is_opened()"
});
formatter.result({
  "duration": 2003718609,
  "status": "passed"
});
formatter.scenario({
  "line": 116,
  "name": "To test student repeater list",
  "description": "",
  "id": "admission-reports;to-test-student-repeater-list;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 107,
      "name": "@scenario8"
    }
  ]
});
formatter.step({
  "line": 109,
  "name": "student repeater list page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "user select class \"1\" on student repeater list page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 111,
  "name": "select section \"A\" on student repeater list page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "user click show to open student repeater list page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTestDefs.student_repeater_list_page_is_opened()"
});
formatter.result({
  "duration": 5843582944,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 19
    }
  ],
  "location": "MyTestDefs.user_select_class_on_student_repeater_list_page(String)"
});
formatter.result({
  "duration": 107548768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A",
      "offset": 16
    }
  ],
  "location": "MyTestDefs.select_section_on_student_repeater_list_page(String)"
});
formatter.result({
  "duration": 93021824,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.user_click_show_to_open_student_repeater_list_page()"
});
formatter.result({
  "duration": 8515443327,
  "status": "passed"
});
formatter.after({
  "duration": 4813222953,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 118,
      "value": "#merit generation list"
    }
  ],
  "line": 120,
  "name": "To test merit generation list",
  "description": "",
  "id": "admission-reports;to-test-merit-generation-list",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 119,
      "name": "@scenario9"
    }
  ]
});
formatter.step({
  "line": 121,
  "name": "merit generation list page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "user select session \"\u003csession\u003e\" on merit generation list",
  "keyword": "When "
});
formatter.step({
  "line": 123,
  "name": "user select class \"\u003cclass\u003e\" on merit generation list",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "user select merit list \"\u003cmerit list\u003e\" on merit generation list",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "user click show to open merit generation list",
  "keyword": "Then "
});
formatter.examples({
  "line": 127,
  "name": "",
  "description": "",
  "id": "admission-reports;to-test-merit-generation-list;",
  "rows": [
    {
      "cells": [
        "session",
        "class",
        "merit list"
      ],
      "line": 128,
      "id": "admission-reports;to-test-merit-generation-list;;1"
    },
    {
      "cells": [
        "2017-2018",
        "1",
        "All Merit List"
      ],
      "line": 129,
      "id": "admission-reports;to-test-merit-generation-list;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4238114145,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"admin\" and \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "admission home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyTestDefs.user_enter(String)"
});
formatter.result({
  "duration": 2565311866,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 12
    },
    {
      "val": "Admin#franciscan",
      "offset": 24
    }
  ],
  "location": "MyTestDefs.user_enter_and(String,String)"
});
formatter.result({
  "duration": 159667943,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyTestDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 55422,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.click_signin()"
});
formatter.result({
  "duration": 2432274161,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.admission_home_page_is_opened()"
});
formatter.result({
  "duration": 318086088,
  "status": "passed"
});
formatter.scenario({
  "line": 129,
  "name": "To test merit generation list",
  "description": "",
  "id": "admission-reports;to-test-merit-generation-list;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 119,
      "name": "@scenario9"
    }
  ]
});
formatter.step({
  "line": 121,
  "name": "merit generation list page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "user select session \"2017-2018\" on merit generation list",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 123,
  "name": "user select class \"1\" on merit generation list",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "user select merit list \"All Merit List\" on merit generation list",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "user click show to open merit generation list",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTestDefs.merit_generation_list_page_is_opened()"
});
formatter.result({
  "duration": 8373012476,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2017-2018",
      "offset": 21
    }
  ],
  "location": "MyTestDefs.user_select_session_on_merit_generation_list(String)"
});
formatter.result({
  "duration": 660084642,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 19
    }
  ],
  "location": "MyTestDefs.user_select_class_on_merit_generation_list(String)"
});
formatter.result({
  "duration": 236008077,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All Merit List",
      "offset": 24
    }
  ],
  "location": "MyTestDefs.user_select_merit_list_on_merit_generation_list(String)"
});
formatter.result({
  "duration": 91659125,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.user_click_show_to_open_merit_generation_list()"
});
formatter.result({
  "duration": 7024860520,
  "status": "passed"
});
formatter.after({
  "duration": 4855683891,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 131,
      "value": "#student document details"
    }
  ],
  "line": 133,
  "name": "To test student document details page",
  "description": "",
  "id": "admission-reports;to-test-student-document-details-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 132,
      "name": "@scenario10"
    }
  ]
});
formatter.step({
  "line": 134,
  "name": "student document details page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "user select class \"\u003cclass\u003e\" on student document details page",
  "keyword": "When "
});
formatter.step({
  "line": 136,
  "name": "select section \"\u003csection\u003e\" on student document details page",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "user click show to open student document details page",
  "keyword": "Then "
});
formatter.examples({
  "line": 139,
  "name": "",
  "description": "",
  "id": "admission-reports;to-test-student-document-details-page;",
  "rows": [
    {
      "cells": [
        "url",
        "uname",
        "password",
        "class",
        "section"
      ],
      "line": 140,
      "id": "admission-reports;to-test-student-document-details-page;;1"
    },
    {
      "cells": [
        "http://qaerp.franciscanecare.net",
        "admin",
        "Admin@987",
        "1",
        "A"
      ],
      "line": 141,
      "id": "admission-reports;to-test-student-document-details-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4195055285,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"admin\" and \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "admission home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyTestDefs.user_enter(String)"
});
formatter.result({
  "duration": 2195217742,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 12
    },
    {
      "val": "Admin#franciscan",
      "offset": 24
    }
  ],
  "location": "MyTestDefs.user_enter_and(String,String)"
});
formatter.result({
  "duration": 160586379,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyTestDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 60701,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.click_signin()"
});
formatter.result({
  "duration": 2277652922,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.admission_home_page_is_opened()"
});
formatter.result({
  "duration": 798202775,
  "status": "passed"
});
formatter.scenario({
  "line": 141,
  "name": "To test student document details page",
  "description": "",
  "id": "admission-reports;to-test-student-document-details-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 132,
      "name": "@scenario10"
    }
  ]
});
formatter.step({
  "line": 134,
  "name": "student document details page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "user select class \"1\" on student document details page",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 136,
  "name": "select section \"A\" on student document details page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "user click show to open student document details page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTestDefs.student_document_details_page_is_opened()"
});
formatter.result({
  "duration": 2559925000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 19
    }
  ],
  "location": "MyTestDefs.user_select_class_on_student_document_details_page(String)"
});
formatter.result({
  "duration": 401288977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A",
      "offset": 16
    }
  ],
  "location": "MyTestDefs.select_section_on_student_document_details_page(String)"
});
formatter.result({
  "duration": 117410809,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.user_click_show_to_open_student_document_details_page()"
});
formatter.result({
  "duration": 7486397944,
  "status": "passed"
});
formatter.after({
  "duration": 4868815588,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 143,
      "value": "#merit list report"
    }
  ],
  "line": 145,
  "name": "To test merit list report",
  "description": "",
  "id": "admission-reports;to-test-merit-list-report",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 144,
      "name": "@scenario11"
    }
  ]
});
formatter.step({
  "line": 146,
  "name": "merit list report page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "user select session \"\u003csession\u003e\" on merit list report page",
  "keyword": "When "
});
formatter.step({
  "line": 148,
  "name": "user select class \"\u003cclass\u003e\" on merit list report page",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "user select merit list \"\u003cmerit list\u003e\" on merit list report page",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "user click show to open merit list report page",
  "keyword": "Then "
});
formatter.examples({
  "line": 152,
  "name": "",
  "description": "",
  "id": "admission-reports;to-test-merit-list-report;",
  "rows": [
    {
      "cells": [
        "url",
        "uname",
        "password",
        "session",
        "class",
        "merit list"
      ],
      "line": 153,
      "id": "admission-reports;to-test-merit-list-report;;1"
    },
    {
      "cells": [
        "http://qaerp.franciscanecare.net",
        "admin",
        "Admin@987",
        "2017-2018",
        "1",
        "All"
      ],
      "line": 154,
      "id": "admission-reports;to-test-merit-list-report;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4653341235,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"admin\" and \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "admission home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyTestDefs.user_enter(String)"
});
formatter.result({
  "duration": 6525469291,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 12
    },
    {
      "val": "Admin#franciscan",
      "offset": 24
    }
  ],
  "location": "MyTestDefs.user_enter_and(String,String)"
});
formatter.result({
  "duration": 188209830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyTestDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 66566,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.click_signin()"
});
formatter.result({
  "duration": 2886293432,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.admission_home_page_is_opened()"
});
formatter.result({
  "duration": 321950732,
  "status": "passed"
});
formatter.scenario({
  "line": 154,
  "name": "To test merit list report",
  "description": "",
  "id": "admission-reports;to-test-merit-list-report;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 144,
      "name": "@scenario11"
    }
  ]
});
formatter.step({
  "line": 146,
  "name": "merit list report page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "user select session \"2017-2018\" on merit list report page",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 148,
  "name": "user select class \"1\" on merit list report page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "user select merit list \"All\" on merit list report page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "user click show to open merit list report page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTestDefs.merit_list_report_page_is_opened()"
});
formatter.result({
  "duration": 3528424297,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2017-2018",
      "offset": 21
    }
  ],
  "location": "MyTestDefs.user_select_session_on_merit_list_report_page(String)"
});
formatter.result({
  "duration": 282587314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 19
    }
  ],
  "location": "MyTestDefs.user_select_class_on_merit_list_report_page(String)"
});
formatter.result({
  "duration": 94972766,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All",
      "offset": 24
    }
  ],
  "location": "MyTestDefs.user_select_merit_list_on_merit_list_report_page(String)"
});
formatter.result({
  "duration": 71674057,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.user_click_show_to_open_merit_list_report_page()"
});
formatter.result({
  "duration": 11970684833,
  "status": "passed"
});
formatter.after({
  "duration": 4904634875,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 156,
      "value": "#prospectus charges report"
    }
  ],
  "line": 158,
  "name": "To test prospectus charges report",
  "description": "",
  "id": "admission-reports;to-test-prospectus-charges-report",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 157,
      "name": "@scenario12"
    }
  ]
});
formatter.step({
  "line": 159,
  "name": "prospectus charges report page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "user select session \"\u003csession\u003e\" on prospectus charges report page",
  "keyword": "When "
});
formatter.step({
  "line": 161,
  "name": "select from date as month \"April\" year \"2017\" and day \"10\" on prospectus charges report page",
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "select to date as month \"April\" year \"2017\" and day \"10\" on prospectus charges report page",
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "user select class \"\u003cclass\u003e\" on prospectus charges report page",
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "select user \"\u003cuser\u003e\" on prospectus charges report page",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "select mode \"\u003cmode\u003e\" on prospectus charges report page",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "user click show to open prospectus charges report page",
  "keyword": "Then "
});
formatter.examples({
  "line": 168,
  "name": "",
  "description": "",
  "id": "admission-reports;to-test-prospectus-charges-report;",
  "rows": [
    {
      "cells": [
        "url",
        "uname",
        "password",
        "session",
        "class",
        "user",
        "mode"
      ],
      "line": 169,
      "id": "admission-reports;to-test-prospectus-charges-report;;1"
    },
    {
      "cells": [
        "http://qaerp.franciscanecare.net",
        "admin",
        "Admin@987",
        "2017-2018",
        "1",
        "eCare Admin",
        "Offline"
      ],
      "line": 170,
      "id": "admission-reports;to-test-prospectus-charges-report;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3721757074,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"admin\" and \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "admission home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyTestDefs.user_enter(String)"
});
formatter.result({
  "duration": 1004243220,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 12
    },
    {
      "val": "Admin#franciscan",
      "offset": 24
    }
  ],
  "location": "MyTestDefs.user_enter_and(String,String)"
});
formatter.result({
  "duration": 159885823,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyTestDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 62754,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.click_signin()"
});
formatter.result({
  "duration": 4562202322,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.admission_home_page_is_opened()"
});
formatter.result({
  "duration": 7512648432,
  "status": "passed"
});
formatter.scenario({
  "line": 170,
  "name": "To test prospectus charges report",
  "description": "",
  "id": "admission-reports;to-test-prospectus-charges-report;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 157,
      "name": "@scenario12"
    }
  ]
});
formatter.step({
  "line": 159,
  "name": "prospectus charges report page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "user select session \"2017-2018\" on prospectus charges report page",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 161,
  "name": "select from date as month \"April\" year \"2017\" and day \"10\" on prospectus charges report page",
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "select to date as month \"April\" year \"2017\" and day \"10\" on prospectus charges report page",
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "user select class \"1\" on prospectus charges report page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "select user \"eCare Admin\" on prospectus charges report page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "select mode \"Offline\" on prospectus charges report page",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "user click show to open prospectus charges report page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTestDefs.prospectus_charges_report_page_is_opened()"
});
formatter.result({
  "duration": 4772943446,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2017-2018",
      "offset": 21
    }
  ],
  "location": "MyTestDefs.user_select_session_on_prospectus_charges_report_page(String)"
});
formatter.result({
  "duration": 101234082,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 40
    },
    {
      "val": "10",
      "offset": 55
    }
  ],
  "location": "MyTestDefs.select_from_date_as_month_year_and_day_on_prospectus_charges_report_page(String,String,String)"
});
formatter.result({
  "duration": 4869186246,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "10",
      "offset": 53
    }
  ],
  "location": "MyTestDefs.select_to_date_as_month_year_and_day_on_prospectus_charges_report_page(String,String,String)"
});
formatter.result({
  "duration": 4805616534,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 19
    }
  ],
  "location": "MyTestDefs.user_select_class_on_prospectus_charges_report_page(String)"
});
formatter.result({
  "duration": 157934294,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eCare Admin",
      "offset": 13
    }
  ],
  "location": "MyTestDefs.select_user_on_prospectus_charges_report_page(String)"
});
formatter.result({
  "duration": 121227947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Offline",
      "offset": 13
    }
  ],
  "location": "MyTestDefs.select_mode_on_prospectus_charges_report_page(String)"
});
formatter.result({
  "duration": 97338941,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.user_click_show_to_open_prospectus_charges_report_page()"
});
formatter.result({
  "duration": 7897453951,
  "status": "passed"
});
formatter.after({
  "duration": 4937398281,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 172,
      "value": "#merit criteria print"
    }
  ],
  "line": 174,
  "name": "To test merit criteria print report criteria wise",
  "description": "",
  "id": "admission-reports;to-test-merit-criteria-print-report-criteria-wise",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 173,
      "name": "@scenario13"
    }
  ]
});
formatter.step({
  "line": 175,
  "name": "merit criteria print report page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 176,
  "name": "user select session \"\u003csession\u003e\" on merit criteria print report page",
  "keyword": "When "
});
formatter.step({
  "line": 177,
  "name": "user select class \"\u003cclass\u003e\" on merit criteria print report page",
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "click criteria wise on merit criteria print report page",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "select criteria name \"\u003ccriteria name\u003e\" on merit criteria print report page",
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "enter criteria point \"10\" on merit criteria print report page",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "user click show to open merit criteria print report page",
  "keyword": "Then "
});
formatter.examples({
  "line": 183,
  "name": "",
  "description": "",
  "id": "admission-reports;to-test-merit-criteria-print-report-criteria-wise;",
  "rows": [
    {
      "cells": [
        "url",
        "uname",
        "password",
        "session",
        "class",
        "criteria name"
      ],
      "line": 184,
      "id": "admission-reports;to-test-merit-criteria-print-report-criteria-wise;;1"
    },
    {
      "cells": [
        "http://qaerp.franciscanecare.net",
        "admin",
        "Admin@987",
        "2017-2018",
        "1",
        "Ten"
      ],
      "line": 185,
      "id": "admission-reports;to-test-merit-criteria-print-report-criteria-wise;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4006085370,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"admin\" and \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "admission home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyTestDefs.user_enter(String)"
});
formatter.result({
  "duration": 1556150969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 12
    },
    {
      "val": "Admin#franciscan",
      "offset": 24
    }
  ],
  "location": "MyTestDefs.user_enter_and(String,String)"
});
formatter.result({
  "duration": 247121971,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyTestDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 64220,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.click_signin()"
});
formatter.result({
  "duration": 2939538659,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.admission_home_page_is_opened()"
});
formatter.result({
  "duration": 1298433850,
  "status": "passed"
});
formatter.scenario({
  "line": 185,
  "name": "To test merit criteria print report criteria wise",
  "description": "",
  "id": "admission-reports;to-test-merit-criteria-print-report-criteria-wise;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 173,
      "name": "@scenario13"
    }
  ]
});
formatter.step({
  "line": 175,
  "name": "merit criteria print report page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 176,
  "name": "user select session \"2017-2018\" on merit criteria print report page",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 177,
  "name": "user select class \"1\" on merit criteria print report page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "click criteria wise on merit criteria print report page",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "select criteria name \"Ten\" on merit criteria print report page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "enter criteria point \"10\" on merit criteria print report page",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "user click show to open merit criteria print report page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTestDefs.merit_criteria_print_report_page_is_opened()"
});
formatter.result({
  "duration": 1279070749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2017-2018",
      "offset": 21
    }
  ],
  "location": "MyTestDefs.user_select_session_on_merit_criteria_print_report_page(String)"
});
formatter.result({
  "duration": 91161786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 19
    }
  ],
  "location": "MyTestDefs.user_select_class_on_merit_criteria_print_report_page(String)"
});
formatter.result({
  "duration": 94632606,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.click_criteria_wise_on_merit_criteria_print_report_page()"
});
formatter.result({
  "duration": 93366677,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ten",
      "offset": 22
    }
  ],
  "location": "MyTestDefs.select_criteria_name_on_merit_criteria_print_report_page(String)"
});
formatter.result({
  "duration": 65466112,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: Ten\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:151)\r\n\tat pageObjects.MeritCriteriaPrint.selectCriteriaName(MeritCriteriaPrint.java:64)\r\n\tat stepDef.MyTestDefs.select_criteria_name_on_merit_criteria_print_report_page(MyTestDefs.java:492)\r\n\tat ✽.And select criteria name \"Ten\" on merit criteria print report page(Feature/Reports.feature:179)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 22
    }
  ],
  "location": "MyTestDefs.enter_criteria_point_on_merit_criteria_print_report_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyTestDefs.user_click_show_to_open_merit_criteria_print_report_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4793490660,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 188,
  "name": "To test merit criteria print report point wise",
  "description": "",
  "id": "admission-reports;to-test-merit-criteria-print-report-point-wise",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 187,
      "name": "@scenario14"
    }
  ]
});
formatter.step({
  "line": 189,
  "name": "merit criteria print report page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "user select session \"\u003csession\u003e\" on merit criteria print report page",
  "keyword": "When "
});
formatter.step({
  "line": 191,
  "name": "user select class \"\u003cclass\u003e\" on merit criteria print report page",
  "keyword": "And "
});
formatter.step({
  "line": 192,
  "name": "click point wise on merit criteria print report page",
  "keyword": "And "
});
formatter.step({
  "line": 193,
  "name": "enter total point \"10\" on merit criteria print report page",
  "keyword": "And "
});
formatter.step({
  "line": 194,
  "name": "user click show to open merit criteria print report page",
  "keyword": "Then "
});
formatter.examples({
  "line": 196,
  "name": "",
  "description": "",
  "id": "admission-reports;to-test-merit-criteria-print-report-point-wise;",
  "rows": [
    {
      "cells": [
        "url",
        "uname",
        "password",
        "session",
        "class",
        "criteria name"
      ],
      "line": 197,
      "id": "admission-reports;to-test-merit-criteria-print-report-point-wise;;1"
    },
    {
      "cells": [
        "http://qaerp.franciscanecare.net",
        "admin",
        "Admin@987",
        "2017-2018",
        "1",
        "Ten"
      ],
      "line": 198,
      "id": "admission-reports;to-test-merit-criteria-print-report-point-wise;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3910726109,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"admin\" and \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "admission home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyTestDefs.user_enter(String)"
});
formatter.result({
  "duration": 2514043974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 12
    },
    {
      "val": "Admin#franciscan",
      "offset": 24
    }
  ],
  "location": "MyTestDefs.user_enter_and(String,String)"
});
formatter.result({
  "duration": 173356801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyTestDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 111726,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.click_signin()"
});
formatter.result({
  "duration": 3768102011,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.admission_home_page_is_opened()"
});
formatter.result({
  "duration": 1002596663,
  "status": "passed"
});
formatter.scenario({
  "line": 198,
  "name": "To test merit criteria print report point wise",
  "description": "",
  "id": "admission-reports;to-test-merit-criteria-print-report-point-wise;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 187,
      "name": "@scenario14"
    }
  ]
});
formatter.step({
  "line": 189,
  "name": "merit criteria print report page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "user select session \"2017-2018\" on merit criteria print report page",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 191,
  "name": "user select class \"1\" on merit criteria print report page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 192,
  "name": "click point wise on merit criteria print report page",
  "keyword": "And "
});
formatter.step({
  "line": 193,
  "name": "enter total point \"10\" on merit criteria print report page",
  "keyword": "And "
});
formatter.step({
  "line": 194,
  "name": "user click show to open merit criteria print report page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTestDefs.merit_criteria_print_report_page_is_opened()"
});
formatter.result({
  "duration": 2622448423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2017-2018",
      "offset": 21
    }
  ],
  "location": "MyTestDefs.user_select_session_on_merit_criteria_print_report_page(String)"
});
formatter.result({
  "duration": 101787431,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 19
    }
  ],
  "location": "MyTestDefs.user_select_class_on_merit_criteria_print_report_page(String)"
});
formatter.result({
  "duration": 94316783,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.click_point_wise_on_merit_criteria_print_report_page()"
});
formatter.result({
  "duration": 118591697,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 19
    }
  ],
  "location": "MyTestDefs.enter_total_point_on_merit_criteria_print_report_page(String)"
});
formatter.result({
  "duration": 124223420,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.user_click_show_to_open_merit_criteria_print_report_page()"
});
formatter.result({
  "duration": 7745166043,
  "status": "passed"
});
formatter.after({
  "duration": 4791354094,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 200,
      "value": "#print student label"
    }
  ],
  "line": 202,
  "name": "To test print student label page",
  "description": "",
  "id": "admission-reports;to-test-print-student-label-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 201,
      "name": "@scenario15"
    }
  ]
});
formatter.step({
  "line": 203,
  "name": "print student label page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 204,
  "name": "user select class \"\u003cclass\u003e\" on  print student label page",
  "keyword": "And "
});
formatter.step({
  "line": 205,
  "name": "user select section \"\u003csection\u003e\" on  print student label page",
  "keyword": "When "
});
formatter.step({
  "line": 206,
  "name": "enter search text \"\u003cname\u003e\" on merit criteria print report page",
  "keyword": "And "
});
formatter.step({
  "line": 207,
  "name": "user click show to open print student label page",
  "keyword": "Then "
});
formatter.examples({
  "line": 209,
  "name": "",
  "description": "",
  "id": "admission-reports;to-test-print-student-label-page;",
  "rows": [
    {
      "cells": [
        "url",
        "uname",
        "password",
        "section",
        "class",
        "name"
      ],
      "line": 210,
      "id": "admission-reports;to-test-print-student-label-page;;1"
    },
    {
      "cells": [
        "http://qaerp.franciscanecare.net",
        "admin",
        "Admin@987",
        "A",
        "1",
        "sonia1"
      ],
      "line": 211,
      "id": "admission-reports;to-test-print-student-label-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4250063780,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"admin\" and \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "admission home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyTestDefs.user_enter(String)"
});
formatter.result({
  "duration": 971524972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 12
    },
    {
      "val": "Admin#franciscan",
      "offset": 24
    }
  ],
  "location": "MyTestDefs.user_enter_and(String,String)"
});
formatter.result({
  "duration": 225646644,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyTestDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 48385,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.click_signin()"
});
formatter.result({
  "duration": 2606302487,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.admission_home_page_is_opened()"
});
formatter.result({
  "duration": 334019716,
  "status": "passed"
});
formatter.scenario({
  "line": 211,
  "name": "To test print student label page",
  "description": "",
  "id": "admission-reports;to-test-print-student-label-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 201,
      "name": "@scenario15"
    }
  ]
});
formatter.step({
  "line": 203,
  "name": "print student label page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 204,
  "name": "user select class \"1\" on  print student label page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 205,
  "name": "user select section \"A\" on  print student label page",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 206,
  "name": "enter search text \"sonia1\" on merit criteria print report page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 207,
  "name": "user click show to open print student label page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTestDefs.print_student_label_page_is_opened()"
});
formatter.result({
  "duration": 1250861987,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 19
    }
  ],
  "location": "MyTestDefs.user_select_class_on_print_student_label_page(String)"
});
formatter.result({
  "duration": 1324538305,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A",
      "offset": 21
    }
  ],
  "location": "MyTestDefs.user_select_section_on_print_student_label_page(String)"
});
formatter.result({
  "duration": 124881457,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sonia1",
      "offset": 19
    }
  ],
  "location": "MyTestDefs.enter_search_text_on_merit_criteria_print_report_page(String)"
});
formatter.result({
  "duration": 1728061790,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.user_click_show_to_open_print_student_label_page()"
});
formatter.result({
  "duration": 7554361015,
  "status": "passed"
});
formatter.after({
  "duration": 4716364930,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 214,
  "name": "To test print student label page when transport is clicked",
  "description": "",
  "id": "admission-reports;to-test-print-student-label-page-when-transport-is-clicked",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 213,
      "name": "@scenario16"
    }
  ]
});
formatter.step({
  "line": 215,
  "name": "print student label page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 216,
  "name": "user select class \"\u003cclass\u003e\" on  print student label page",
  "keyword": "And "
});
formatter.step({
  "line": 217,
  "name": "user select section \"\u003csection\u003e\" on  print student label page",
  "keyword": "When "
});
formatter.step({
  "line": 218,
  "name": "click transport on print student label page",
  "keyword": "And "
});
formatter.step({
  "line": 219,
  "name": "user click show to open print student label page",
  "keyword": "Then "
});
formatter.examples({
  "line": 221,
  "name": "",
  "description": "",
  "id": "admission-reports;to-test-print-student-label-page-when-transport-is-clicked;",
  "rows": [
    {
      "cells": [
        "url",
        "uname",
        "password",
        "section",
        "class"
      ],
      "line": 222,
      "id": "admission-reports;to-test-print-student-label-page-when-transport-is-clicked;;1"
    },
    {
      "cells": [
        "http://qaerp.franciscanecare.net",
        "admin",
        "Admin@987",
        "A",
        "1"
      ],
      "line": 223,
      "id": "admission-reports;to-test-print-student-label-page-when-transport-is-clicked;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3375176605,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"admin\" and \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "admission home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyTestDefs.user_enter(String)"
});
formatter.result({
  "duration": 1754923103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 12
    },
    {
      "val": "Admin#franciscan",
      "offset": 24
    }
  ],
  "location": "MyTestDefs.user_enter_and(String,String)"
});
formatter.result({
  "duration": 225262789,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyTestDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 465376,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.click_signin()"
});
formatter.result({
  "duration": 2719778566,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.admission_home_page_is_opened()"
});
formatter.result({
  "duration": 317010181,
  "status": "passed"
});
formatter.scenario({
  "line": 223,
  "name": "To test print student label page when transport is clicked",
  "description": "",
  "id": "admission-reports;to-test-print-student-label-page-when-transport-is-clicked;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 213,
      "name": "@scenario16"
    }
  ]
});
formatter.step({
  "line": 215,
  "name": "print student label page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 216,
  "name": "user select class \"1\" on  print student label page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 217,
  "name": "user select section \"A\" on  print student label page",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 218,
  "name": "click transport on print student label page",
  "keyword": "And "
});
formatter.step({
  "line": 219,
  "name": "user click show to open print student label page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTestDefs.print_student_label_page_is_opened()"
});
formatter.result({
  "duration": 2273599723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 19
    }
  ],
  "location": "MyTestDefs.user_select_class_on_print_student_label_page(String)"
});
formatter.result({
  "duration": 1330114605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A",
      "offset": 21
    }
  ],
  "location": "MyTestDefs.user_select_section_on_print_student_label_page(String)"
});
formatter.result({
  "duration": 139286705,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.click_transport_on_print_student_label_page()"
});
formatter.result({
  "duration": 125180857,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.user_click_show_to_open_print_student_label_page()"
});
formatter.result({
  "duration": 5652488486,
  "status": "passed"
});
formatter.after({
  "duration": 4847736724,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 225,
      "value": "#collection report admission"
    }
  ],
  "line": 227,
  "name": "To test collection report admission page prospectus wise",
  "description": "",
  "id": "admission-reports;to-test-collection-report-admission-page-prospectus-wise",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 226,
      "name": "@scenario17"
    }
  ]
});
formatter.step({
  "line": 228,
  "name": "collection report admission page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 229,
  "name": "select prospectus wise on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 230,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 231,
  "name": "select to date as month \"April\" year \"2017\" and day \"30\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 232,
  "name": "user select class \"\u003cclass\u003e\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 233,
  "name": "user select session \"\u003csession\u003e\" on collection report admission page",
  "keyword": "When "
});
formatter.step({
  "line": 234,
  "name": "select board \"\u003cboard\u003e\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 235,
  "name": "select pay mode \"Cash\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 236,
  "name": "select entry mode \"Both\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 237,
  "name": "select order by \"Name\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 238,
  "name": "select group by \"Class\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 239,
  "name": "user click show to open collection report admission page",
  "keyword": "Then "
});
formatter.examples({
  "line": 241,
  "name": "",
  "description": "",
  "id": "admission-reports;to-test-collection-report-admission-page-prospectus-wise;",
  "rows": [
    {
      "cells": [
        "url",
        "uname",
        "password",
        "class",
        "session",
        "board"
      ],
      "line": 242,
      "id": "admission-reports;to-test-collection-report-admission-page-prospectus-wise;;1"
    },
    {
      "cells": [
        "http://qaerp.franciscanecare.net",
        "admin",
        "Admin@987",
        "1",
        "2017-2018",
        "ICSE"
      ],
      "line": 243,
      "id": "admission-reports;to-test-collection-report-admission-page-prospectus-wise;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3392970858,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"admin\" and \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "admission home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyTestDefs.user_enter(String)"
});
formatter.result({
  "duration": 3626342098,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 12
    },
    {
      "val": "Admin#franciscan",
      "offset": 24
    }
  ],
  "location": "MyTestDefs.user_enter_and(String,String)"
});
formatter.result({
  "duration": 168433258,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyTestDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 56889,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.click_signin()"
});
formatter.result({
  "duration": 3225051361,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.admission_home_page_is_opened()"
});
formatter.result({
  "duration": 523606614,
  "status": "passed"
});
formatter.scenario({
  "line": 243,
  "name": "To test collection report admission page prospectus wise",
  "description": "",
  "id": "admission-reports;to-test-collection-report-admission-page-prospectus-wise;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 226,
      "name": "@scenario17"
    }
  ]
});
formatter.step({
  "line": 228,
  "name": "collection report admission page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 229,
  "name": "select prospectus wise on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 230,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 231,
  "name": "select to date as month \"April\" year \"2017\" and day \"30\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 232,
  "name": "user select class \"1\" on collection report admission page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 233,
  "name": "user select session \"2017-2018\" on collection report admission page",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 234,
  "name": "select board \"ICSE\" on collection report admission page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 235,
  "name": "select pay mode \"Cash\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 236,
  "name": "select entry mode \"Both\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 237,
  "name": "select order by \"Name\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 238,
  "name": "select group by \"Class\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 239,
  "name": "user click show to open collection report admission page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTestDefs.collection_report_admission_page_is_opened()"
});
formatter.result({
  "duration": 11560680394,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.select_prospectus_wise_on_collection_report_admission_page()"
});
formatter.result({
  "duration": 102722288,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 40
    },
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "MyTestDefs.select_from_date_as_month_year_and_day_on_collection_report_admission_page(String,String,String)"
});
formatter.result({
  "duration": 4659876732,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "30",
      "offset": 53
    }
  ],
  "location": "MyTestDefs.select_to_date_as_month_year_and_day_on_collection_report_admission_page(String,String,String)"
});
formatter.result({
  "duration": 5206254512,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 19
    }
  ],
  "location": "MyTestDefs.user_select_class_on_collection_report_admission_page(String)"
});
formatter.result({
  "duration": 1151661835,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2017-2018",
      "offset": 21
    }
  ],
  "location": "MyTestDefs.user_select_session_on_collection_report_admission_page(String)"
});
formatter.result({
  "duration": 1135737590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ICSE",
      "offset": 14
    }
  ],
  "location": "MyTestDefs.select_board_on_collection_report_admission_page(String)"
});
formatter.result({
  "duration": 130552182,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cash",
      "offset": 17
    }
  ],
  "location": "MyTestDefs.select_pay_mode_on_collection_report_admission_page(String)"
});
formatter.result({
  "duration": 152569128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Both",
      "offset": 19
    }
  ],
  "location": "MyTestDefs.select_entry_mode_on_collection_report_admission_page(String)"
});
formatter.result({
  "duration": 95294747,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name",
      "offset": 17
    }
  ],
  "location": "MyTestDefs.select_order_by_on_collection_report_admission_page(String)"
});
formatter.result({
  "duration": 80138211,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Class",
      "offset": 17
    }
  ],
  "location": "MyTestDefs.select_group_by_on_collection_report_admission_page(String)"
});
formatter.result({
  "duration": 100553172,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.user_click_show_to_open_collection_report_admission_page()"
});
formatter.result({
  "duration": 7652636867,
  "status": "passed"
});
formatter.after({
  "duration": 4761532790,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 246,
  "name": "To test collection report admission page admission form wise",
  "description": "",
  "id": "admission-reports;to-test-collection-report-admission-page-admission-form-wise",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 245,
      "name": "@scenario18"
    }
  ]
});
formatter.step({
  "line": 247,
  "name": "collection report admission page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 248,
  "name": "select admission form wise on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 249,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 250,
  "name": "select to date as month \"April\" year \"2017\" and day \"30\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 251,
  "name": "user select class \"\u003cclass\u003e\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 252,
  "name": "user select session \"\u003csession\u003e\" on collection report admission page",
  "keyword": "When "
});
formatter.step({
  "line": 253,
  "name": "select board \"\u003cboard\u003e\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 254,
  "name": "select pay mode \"Cash\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 255,
  "name": "select entry mode \"Both\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 256,
  "name": "select order by \"Name\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 257,
  "name": "select group by \"Class\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 258,
  "name": "user click show to open collection report admission page",
  "keyword": "Then "
});
formatter.examples({
  "line": 260,
  "name": "",
  "description": "",
  "id": "admission-reports;to-test-collection-report-admission-page-admission-form-wise;",
  "rows": [
    {
      "cells": [
        "url",
        "uname",
        "password",
        "class",
        "session",
        "board"
      ],
      "line": 261,
      "id": "admission-reports;to-test-collection-report-admission-page-admission-form-wise;;1"
    },
    {
      "cells": [
        "http://qaerp.franciscanecare.net",
        "admin",
        "Admin@987",
        "1",
        "2017-2018",
        "ICSE"
      ],
      "line": 262,
      "id": "admission-reports;to-test-collection-report-admission-page-admission-form-wise;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3361672492,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"admin\" and \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "admission home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyTestDefs.user_enter(String)"
});
formatter.result({
  "duration": 1617097039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 12
    },
    {
      "val": "Admin#franciscan",
      "offset": 24
    }
  ],
  "location": "MyTestDefs.user_enter_and(String,String)"
});
formatter.result({
  "duration": 253325518,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyTestDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 41934,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.click_signin()"
});
formatter.result({
  "duration": 5479133738,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.admission_home_page_is_opened()"
});
formatter.result({
  "duration": 2501642451,
  "status": "passed"
});
formatter.scenario({
  "line": 262,
  "name": "To test collection report admission page admission form wise",
  "description": "",
  "id": "admission-reports;to-test-collection-report-admission-page-admission-form-wise;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 245,
      "name": "@scenario18"
    }
  ]
});
formatter.step({
  "line": 247,
  "name": "collection report admission page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 248,
  "name": "select admission form wise on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 249,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 250,
  "name": "select to date as month \"April\" year \"2017\" and day \"30\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 251,
  "name": "user select class \"1\" on collection report admission page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 252,
  "name": "user select session \"2017-2018\" on collection report admission page",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 253,
  "name": "select board \"ICSE\" on collection report admission page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 254,
  "name": "select pay mode \"Cash\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 255,
  "name": "select entry mode \"Both\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 256,
  "name": "select order by \"Name\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 257,
  "name": "select group by \"Class\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 258,
  "name": "user click show to open collection report admission page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTestDefs.collection_report_admission_page_is_opened()"
});
formatter.result({
  "duration": 4999141679,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.select_admission_form_wise_on_collection_report_admission_page()"
});
formatter.result({
  "duration": 109542817,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 40
    },
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "MyTestDefs.select_from_date_as_month_year_and_day_on_collection_report_admission_page(String,String,String)"
});
formatter.result({
  "duration": 4570461499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "30",
      "offset": 53
    }
  ],
  "location": "MyTestDefs.select_to_date_as_month_year_and_day_on_collection_report_admission_page(String,String,String)"
});
formatter.result({
  "duration": 5064034208,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 19
    }
  ],
  "location": "MyTestDefs.user_select_class_on_collection_report_admission_page(String)"
});
formatter.result({
  "duration": 1101528791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2017-2018",
      "offset": 21
    }
  ],
  "location": "MyTestDefs.user_select_session_on_collection_report_admission_page(String)"
});
formatter.result({
  "duration": 1157467745,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ICSE",
      "offset": 14
    }
  ],
  "location": "MyTestDefs.select_board_on_collection_report_admission_page(String)"
});
formatter.result({
  "duration": 122333179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cash",
      "offset": 17
    }
  ],
  "location": "MyTestDefs.select_pay_mode_on_collection_report_admission_page(String)"
});
formatter.result({
  "duration": 86881617,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Both",
      "offset": 19
    }
  ],
  "location": "MyTestDefs.select_entry_mode_on_collection_report_admission_page(String)"
});
formatter.result({
  "duration": 60628489,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name",
      "offset": 17
    }
  ],
  "location": "MyTestDefs.select_order_by_on_collection_report_admission_page(String)"
});
formatter.result({
  "duration": 62731332,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Class",
      "offset": 17
    }
  ],
  "location": "MyTestDefs.select_group_by_on_collection_report_admission_page(String)"
});
formatter.result({
  "duration": 85653224,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.user_click_show_to_open_collection_report_admission_page()"
});
formatter.result({
  "duration": 7210516207,
  "status": "passed"
});
formatter.after({
  "duration": 4674408075,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 265,
  "name": "To test collection report admission page admission entry wise",
  "description": "",
  "id": "admission-reports;to-test-collection-report-admission-page-admission-entry-wise",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 264,
      "name": "@scenario19"
    }
  ]
});
formatter.step({
  "line": 266,
  "name": "collection report admission page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 267,
  "name": "select admission entry wise on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 268,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 269,
  "name": "select to date as month \"April\" year \"2017\" and day \"30\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 270,
  "name": "user select class \"\u003cclass\u003e\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 271,
  "name": "user select session \"\u003csession\u003e\" on collection report admission page",
  "keyword": "When "
});
formatter.step({
  "line": 272,
  "name": "select board \"\u003cboard\u003e\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 273,
  "name": "select pay mode \"Cheque\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 274,
  "name": "select entry mode \"Both\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 275,
  "name": "select order by \"RegNo\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 276,
  "name": "select group by \"Date\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 277,
  "name": "user click show to open collection report admission page",
  "keyword": "Then "
});
formatter.examples({
  "line": 279,
  "name": "",
  "description": "",
  "id": "admission-reports;to-test-collection-report-admission-page-admission-entry-wise;",
  "rows": [
    {
      "cells": [
        "url",
        "uname",
        "password",
        "class",
        "session",
        "board"
      ],
      "line": 280,
      "id": "admission-reports;to-test-collection-report-admission-page-admission-entry-wise;;1"
    },
    {
      "cells": [
        "http://qaerp.franciscanecare.net",
        "admin",
        "Admin@987",
        "1",
        "2017-2018",
        "All Board"
      ],
      "line": 281,
      "id": "admission-reports;to-test-collection-report-admission-page-admission-entry-wise;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3654845862,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"admin\" and \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "admission home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyTestDefs.user_enter(String)"
});
formatter.result({
  "duration": 4022535105,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 12
    },
    {
      "val": "Admin#franciscan",
      "offset": 24
    }
  ],
  "location": "MyTestDefs.user_enter_and(String,String)"
});
formatter.result({
  "duration": 208232433,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyTestDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 51317,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.click_signin()"
});
formatter.result({
  "duration": 2429438798,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.admission_home_page_is_opened()"
});
formatter.result({
  "duration": 946467981,
  "status": "passed"
});
formatter.scenario({
  "line": 281,
  "name": "To test collection report admission page admission entry wise",
  "description": "",
  "id": "admission-reports;to-test-collection-report-admission-page-admission-entry-wise;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 264,
      "name": "@scenario19"
    }
  ]
});
formatter.step({
  "line": 266,
  "name": "collection report admission page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 267,
  "name": "select admission entry wise on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 268,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 269,
  "name": "select to date as month \"April\" year \"2017\" and day \"30\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 270,
  "name": "user select class \"1\" on collection report admission page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 271,
  "name": "user select session \"2017-2018\" on collection report admission page",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 272,
  "name": "select board \"All Board\" on collection report admission page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 273,
  "name": "select pay mode \"Cheque\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 274,
  "name": "select entry mode \"Both\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 275,
  "name": "select order by \"RegNo\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 276,
  "name": "select group by \"Date\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 277,
  "name": "user click show to open collection report admission page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTestDefs.collection_report_admission_page_is_opened()"
});
formatter.result({
  "duration": 3221099625,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.select_admission_entry_wise_on_collection_report_admission_page()"
});
formatter.result({
  "duration": 96718146,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 40
    },
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "MyTestDefs.select_from_date_as_month_year_and_day_on_collection_report_admission_page(String,String,String)"
});
formatter.result({
  "duration": 4569347471,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "30",
      "offset": 53
    }
  ],
  "location": "MyTestDefs.select_to_date_as_month_year_and_day_on_collection_report_admission_page(String,String,String)"
});
formatter.result({
  "duration": 5078826537,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 19
    }
  ],
  "location": "MyTestDefs.user_select_class_on_collection_report_admission_page(String)"
});
formatter.result({
  "duration": 1121550807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2017-2018",
      "offset": 21
    }
  ],
  "location": "MyTestDefs.user_select_session_on_collection_report_admission_page(String)"
});
formatter.result({
  "duration": 1097715464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All Board",
      "offset": 14
    }
  ],
  "location": "MyTestDefs.select_board_on_collection_report_admission_page(String)"
});
formatter.result({
  "duration": 113384295,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cheque",
      "offset": 17
    }
  ],
  "location": "MyTestDefs.select_pay_mode_on_collection_report_admission_page(String)"
});
formatter.result({
  "duration": 98126884,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Both",
      "offset": 19
    }
  ],
  "location": "MyTestDefs.select_entry_mode_on_collection_report_admission_page(String)"
});
formatter.result({
  "duration": 65160260,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RegNo",
      "offset": 17
    }
  ],
  "location": "MyTestDefs.select_order_by_on_collection_report_admission_page(String)"
});
formatter.result({
  "duration": 88187427,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Date",
      "offset": 17
    }
  ],
  "location": "MyTestDefs.select_group_by_on_collection_report_admission_page(String)"
});
formatter.result({
  "duration": 89848352,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.user_click_show_to_open_collection_report_admission_page()"
});
formatter.result({
  "duration": 8283484050,
  "status": "passed"
});
formatter.after({
  "duration": 4667316590,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 284,
  "name": "To test collection report admission page reslot wise",
  "description": "",
  "id": "admission-reports;to-test-collection-report-admission-page-reslot-wise",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 283,
      "name": "@scenario20"
    }
  ]
});
formatter.step({
  "line": 285,
  "name": "collection report admission page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 286,
  "name": "select reslot wise on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 287,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 288,
  "name": "select to date as month \"April\" year \"2017\" and day \"30\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 289,
  "name": "user select class \"\u003cclass\u003e\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 290,
  "name": "user select session \"\u003csession\u003e\" on collection report admission page",
  "keyword": "When "
});
formatter.step({
  "line": 291,
  "name": "select board \"\u003cboard\u003e\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 292,
  "name": "select pay mode \"All\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 293,
  "name": "select entry mode \"Both\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 294,
  "name": "select order by \"RegNo\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 295,
  "name": "select group by \"No\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 296,
  "name": "user click show to open collection report admission page",
  "keyword": "Then "
});
formatter.examples({
  "line": 298,
  "name": "",
  "description": "",
  "id": "admission-reports;to-test-collection-report-admission-page-reslot-wise;",
  "rows": [
    {
      "cells": [
        "url",
        "uname",
        "password",
        "class",
        "session",
        "board"
      ],
      "line": 299,
      "id": "admission-reports;to-test-collection-report-admission-page-reslot-wise;;1"
    },
    {
      "cells": [
        "http://qaerp.franciscanecare.net",
        "admin",
        "Admin@987",
        "1",
        "2017-2018",
        "All Board"
      ],
      "line": 300,
      "id": "admission-reports;to-test-collection-report-admission-page-reslot-wise;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3338691070,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"admin\" and \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "admission home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyTestDefs.user_enter(String)"
});
formatter.result({
  "duration": 1714223379,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 12
    },
    {
      "val": "Admin#franciscan",
      "offset": 24
    }
  ],
  "location": "MyTestDefs.user_enter_and(String,String)"
});
formatter.result({
  "duration": 207242153,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyTestDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 49852,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.click_signin()"
});
formatter.result({
  "duration": 3117972955,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.admission_home_page_is_opened()"
});
formatter.result({
  "duration": 368714126,
  "status": "passed"
});
formatter.scenario({
  "line": 300,
  "name": "To test collection report admission page reslot wise",
  "description": "",
  "id": "admission-reports;to-test-collection-report-admission-page-reslot-wise;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 283,
      "name": "@scenario20"
    }
  ]
});
formatter.step({
  "line": 285,
  "name": "collection report admission page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 286,
  "name": "select reslot wise on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 287,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 288,
  "name": "select to date as month \"April\" year \"2017\" and day \"30\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 289,
  "name": "user select class \"1\" on collection report admission page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 290,
  "name": "user select session \"2017-2018\" on collection report admission page",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 291,
  "name": "select board \"All Board\" on collection report admission page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 292,
  "name": "select pay mode \"All\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 293,
  "name": "select entry mode \"Both\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 294,
  "name": "select order by \"RegNo\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 295,
  "name": "select group by \"No\" on collection report admission page",
  "keyword": "And "
});
formatter.step({
  "line": 296,
  "name": "user click show to open collection report admission page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTestDefs.collection_report_admission_page_is_opened()"
});
formatter.result({
  "duration": 2141536462,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.select_reslot_wise_on_collection_report_admission_page()"
});
formatter.result({
  "duration": 110036052,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 40
    },
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "MyTestDefs.select_from_date_as_month_year_and_day_on_collection_report_admission_page(String,String,String)"
});
formatter.result({
  "duration": 4645906950,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "30",
      "offset": 53
    }
  ],
  "location": "MyTestDefs.select_to_date_as_month_year_and_day_on_collection_report_admission_page(String,String,String)"
});
formatter.result({
  "duration": 5131059491,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 19
    }
  ],
  "location": "MyTestDefs.user_select_class_on_collection_report_admission_page(String)"
});
formatter.result({
  "duration": 1110505533,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2017-2018",
      "offset": 21
    }
  ],
  "location": "MyTestDefs.user_select_session_on_collection_report_admission_page(String)"
});
formatter.result({
  "duration": 1142701515,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All Board",
      "offset": 14
    }
  ],
  "location": "MyTestDefs.select_board_on_collection_report_admission_page(String)"
});
formatter.result({
  "duration": 94442584,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All",
      "offset": 17
    }
  ],
  "location": "MyTestDefs.select_pay_mode_on_collection_report_admission_page(String)"
});
formatter.result({
  "duration": 65017451,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Both",
      "offset": 19
    }
  ],
  "location": "MyTestDefs.select_entry_mode_on_collection_report_admission_page(String)"
});
formatter.result({
  "duration": 75923142,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RegNo",
      "offset": 17
    }
  ],
  "location": "MyTestDefs.select_order_by_on_collection_report_admission_page(String)"
});
formatter.result({
  "duration": 92049725,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No",
      "offset": 17
    }
  ],
  "location": "MyTestDefs.select_group_by_on_collection_report_admission_page(String)"
});
formatter.result({
  "duration": 63248026,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.user_click_show_to_open_collection_report_admission_page()"
});
formatter.result({
  "duration": 12310269121,
  "status": "passed"
});
formatter.after({
  "duration": 4650820815,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 302,
      "value": "#sibling report"
    }
  ],
  "line": 304,
  "name": "To test sibling report",
  "description": "",
  "id": "admission-reports;to-test-sibling-report",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 303,
      "name": "@scenario21"
    }
  ]
});
formatter.step({
  "line": 305,
  "name": "sibling report page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 306,
  "name": "user select session \"\u003csession\u003e\" on sibling report page",
  "keyword": "When "
});
formatter.step({
  "line": 307,
  "name": "select school \"\u003cschool\u003e\" on sibling report page",
  "keyword": "And "
});
formatter.step({
  "line": 308,
  "name": "select class \"\u003cclass\u003e\" on sibling report page",
  "keyword": "And "
});
formatter.step({
  "line": 309,
  "name": "select show details for \"Elder\" on sibling report page",
  "keyword": "And "
});
formatter.step({
  "line": 310,
  "name": "user click show to open sibling report",
  "keyword": "Then "
});
formatter.examples({
  "line": 312,
  "name": "",
  "description": "",
  "id": "admission-reports;to-test-sibling-report;",
  "rows": [
    {
      "cells": [
        "url",
        "uname",
        "password",
        "class",
        "session",
        "school"
      ],
      "line": 313,
      "id": "admission-reports;to-test-sibling-report;;1"
    },
    {
      "cells": [
        "http://qaerp.franciscanecare.net",
        "admin",
        "Admin@987",
        "1-A",
        "2017-2018",
        "All"
      ],
      "line": 314,
      "id": "admission-reports;to-test-sibling-report;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3408823846,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"admin\" and \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "admission home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyTestDefs.user_enter(String)"
});
formatter.result({
  "duration": 1385692577,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 12
    },
    {
      "val": "Admin#franciscan",
      "offset": 24
    }
  ],
  "location": "MyTestDefs.user_enter_and(String,String)"
});
formatter.result({
  "duration": 196262565,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyTestDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 49558,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.click_signin()"
});
formatter.result({
  "duration": 2551050600,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.admission_home_page_is_opened()"
});
formatter.result({
  "duration": 897475357,
  "status": "passed"
});
formatter.scenario({
  "line": 314,
  "name": "To test sibling report",
  "description": "",
  "id": "admission-reports;to-test-sibling-report;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 303,
      "name": "@scenario21"
    }
  ]
});
formatter.step({
  "line": 305,
  "name": "sibling report page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 306,
  "name": "user select session \"2017-2018\" on sibling report page",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 307,
  "name": "select school \"All\" on sibling report page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 308,
  "name": "select class \"1-A\" on sibling report page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 309,
  "name": "select show details for \"Elder\" on sibling report page",
  "keyword": "And "
});
formatter.step({
  "line": 310,
  "name": "user click show to open sibling report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTestDefs.sibling_report_page_is_opened()"
});
formatter.result({
  "duration": 3077443605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2017-2018",
      "offset": 21
    }
  ],
  "location": "MyTestDefs.user_select_session_on_sibling_report_page(String)"
});
formatter.result({
  "duration": 1745988882,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All",
      "offset": 15
    }
  ],
  "location": "MyTestDefs.select_school_on_sibling_report_page(String)"
});
formatter.result({
  "duration": 276126594,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1-A",
      "offset": 14
    }
  ],
  "location": "MyTestDefs.select_class_on_sibling_report_page(String)"
});
formatter.result({
  "duration": 1304911872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Elder",
      "offset": 25
    }
  ],
  "location": "MyTestDefs.select_show_details_for_on_sibling_report_page(String)"
});
formatter.result({
  "duration": 64567910,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.user_click_show_to_open_sibling_report()"
});
formatter.result({
  "duration": 7482833873,
  "status": "passed"
});
formatter.after({
  "duration": 4800550768,
  "status": "passed"
});
});