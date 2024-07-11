import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class UsernamePage extends BasePage {

    //Unit Tests
    private username_page = By.xpath("/html/body/div[1]/div[2]/div/main/div/div/div[1]/div[1]/h4");


    constructor(driver: WebDriver) {
        super(driver);
    }

    //U.T: Test 2

    async verifyUsernames(){
        await this.checkMatchingElements(this.username_page, testData.data.username_page)
    }


 
   



    

}
