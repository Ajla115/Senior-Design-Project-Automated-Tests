import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class HomePage extends BasePage {

    //TEST 1
    private click_here_button = By.xpath("/html/body/section/div/div/div/div/div/div[1]/p/a");

    //TEST 2
    private register_page_message = By.xpath("/html/body/section/div/div/div/div/div/div[1]/h3");

    constructor(driver: WebDriver) {
        super(driver);
    }

    //TEST 1

    async goToLoginPage(){
        await this.findElementAndClick(this.click_here_button);
    }

    //TEST 2

    async verifyLogout(){
        await this.checkMatchingElements(this.register_page_message, testData.data.register_page);
    }


    
}
