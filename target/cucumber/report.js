$(document).ready(function () {
    var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));
    formatter.uri("src/test/resources/features/story.feature");
formatter.feature({
    "line": 1,
    "name": "Story manages.",
    "description": "\nA story (called a “user story” by some practitioners) in Tracker is a short description\nof functionality or an incremental piece of capability that is of value to the customer\nor delivery team.",
    "id": "story-manages.",
  "keyword": "Feature"
});
formatter.scenario({
    "line": 8,
    "name": "I should be able to create a new Story",
  "description": "",
    "id": "story-manages.;i-should-be-able-to-create-a-new-story",
    "type": "scenario",
    "keyword": "Scenario",
    "tags": [
        {
            "line": 7,
            "name": "@Project"
        }
    ]
});
formatter.step({
    "line": 9,
    "name": "I log in with username \"yfert_0209@hotmail.com\" and password \"r6412018C\"",
  "keyword": "Given "
});
    formatter.step({
        "comments": [
            {
                "line": 10,
                "value": "#    And     I have a Project with name \"Project to add a Story\" in Dashboard page"
            },
            {
                "line": 11,
                "value": "#    When    I open this Project from Dashboard page"
            }
        ],
        "line": 12,
        "name": "I add a new Story in Current Operation and Backlog panel with the following data",
        "rows": [
            {
                "cells": [
                    "name_Story",
                    "blockers_story",
                    "description_story",
                    "labels_story",
                    "Tasks_story",
                    "Activity_story"
                ],
                "line": 13
            },
            {
                "cells": [
                    "New Story test",
                    "none",
                    "text description",
                    "none",
                    "first task",
                    "text activity"
                ],
                "line": 14
            }
        ],
        "keyword": "And "
    });
formatter.match({
    "arguments": [
        {
            "val": "yfert_0209@hotmail.com",
            "offset": 24
        },
        {
            "val": "r6412018C",
            "offset": 62
        }
    ],
    "location": "LoginSteps.logIn(String,String)"
});
formatter.result({
    "duration": 12693915608,
  "status": "passed"
});
    formatter.match({
        "location": "StorySteps.addStory(DataTable)"
    });
    formatter.result({
        "duration": 4652268982,
        "error_message": "org.openqa.selenium.WebDriverException: Failed to convert data to an object\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Pro-de-Raul-3.local\u0027, ip: \u0027fe80:0:0:0:83f:d091:fc4f:a201%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.4\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 66.0.4, javascriptEnabled: true, moz:accessibilityChecks: false, moz:geckodriverVersion: 0.24.0, moz:headless: false, moz:processID: 7462, moz:profile: /var/folders/2v/21g3_w_92dq..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: MAC, platformName: MAC, platformVersion: 18.5.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: ae1fc482-0f96-6b47-814d-9732cefcb8b3\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\"edit details new\"]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat pivotal.ui.pages.StoryForm.waitUntilPageObjectIsLoaded(StoryForm.java:27)\n\tat pivotal.ui.pages.BasePage.\u003cinit\u003e(BasePage.java:22)\n\tat pivotal.ui.pages.StoryForm.\u003cinit\u003e(StoryForm.java:14)\n\tat steps.StorySteps.\u003cinit\u003e(StorySteps.java:19)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\n\tat org.testng.TestRunner.run(TestRunner.java:632)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\n\tat org.testng.TestNG.run(TestNG.java:1064)\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:72)\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:123)\n\tat ✽.And I add a new Story in Current Operation and Backlog panel with the following data(src/test/resources/features/story.feature:12)\n",
        "status": "failed"
    });
});