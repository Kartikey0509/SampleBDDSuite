package com.runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
	@CucumberOptions(
		features = {"src/test/resources/features/Test.feature"},
		glue= {"Stepdef1"},
		monochrome= true,
		dryRun= true,
		plugin= {"pretty", "html:target/HtmlReports" , "json:taget/jsonReports/report.json" , "junit:taget/junitReports/report.xml" }
		
			)
	public class RunTest {
		
}
