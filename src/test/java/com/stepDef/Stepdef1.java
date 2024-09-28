package com.stepDef;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Stepdef1 {
	
	WebDriver driver =null;
	@Before
	@Given("^User launches the browser$")
	public void user_launches_the_browser() throws Throwable {
	    
	}

	@Given("^User enters the url$")
	public void user_enters_the_url() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	
	}

	@When("^User navigate to the test page$")
	public void user_navigate_to_the_test_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("^searches for \"([^\"]*)\"$")
	public void searches_for(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions

	}

	@When("^Enters Desination as \"([^\"]*)\"$")
	public void enters_Desination_as(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   
	}

	@Then("^Clicked on Search button$")
	public void clicked_on_Search_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	  
	}
	@After
	public void killBrowser(Scenario scenario) {
		System.out.println("TearDown Scenario");
		try {
			String screenshotName = scenario.getName().replaceAll(" ", " _");
			if(scenario.isFailed()) {
				scenario.log("Failure msg");
				TakesScreenshot ts=(TakesScreenshot)driver;
				byte[] screenshot = ts.getScreenshotAs(OutputType.BYTES);
				scenario.attach(screenshot,"img/png", screenshotName);
				
				
			}
		}catch(Exception e) {
			e.printStackTrace();
		}
		driver.close();
	}



}
