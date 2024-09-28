$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Test.feature");
formatter.feature({
  "line": 1,
  "name": "Verify and Validate Goibibo page",
  "description": "I want to use this template for validating Goibibo page",
  "id": "verify-and-validate-goibibo-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#Background, #Scenario Outline"
    }
  ],
  "line": 6,
  "name": "Validate Search button on Goibibo page",
  "description": "",
  "id": "verify-and-validate-goibibo-page;validate-search-button-on-goibibo-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User launches the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters the url",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User navigate to the test page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "searches for \"origin\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Enters Desination as \"destination\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Clicked on Search button",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "verify-and-validate-goibibo-page;validate-search-button-on-goibibo-page;",
  "rows": [
    {
      "cells": [
        "origin",
        "",
        "destination"
      ],
      "line": 15,
      "id": "verify-and-validate-goibibo-page;validate-search-button-on-goibibo-page;;1"
    },
    {
      "cells": [
        "Pune",
        "",
        "New Delhi"
      ],
      "line": 16,
      "id": "verify-and-validate-goibibo-page;validate-search-button-on-goibibo-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Validate Search button on Goibibo page",
  "description": "",
  "id": "verify-and-validate-goibibo-page;validate-search-button-on-goibibo-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User launches the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters the url",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User navigate to the test page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "searches for \"origin\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Enters Desination as \"destination\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Clicked on Search button",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});