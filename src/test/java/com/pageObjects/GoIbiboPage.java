package com.pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class GoIbiboPage {
	public WebDriver ldriver;
	
	public GoIbiboPage(WebDriver rdriver) {
		ldriver= rdriver;
		PageFactory.initElements(rdriver, this);
	}
	//source
	
	@FindBy(xpath="//*[@id=\"gosuggest_inputSrc\"]")
	WebElement src;
	
	@FindBy(id="gosuggest_inputDest")
	WebElement dest;
	
	@FindBy(css="#departureCalendar")
	WebElement clndr;
	
	@FindBy(xpath="//*[@id='fare_20210719']")
	WebElement date;

	@FindBy(id="gi_search_btn")
	WebElement searchbtn;
	
	public void SetSource() {
		
	}
}
