
import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class AccountPage extends BasePage {

    //Unit Tests
    private name_prompt = By.xpath("/html/body/div[1]/div[2]/div/main/div/div/div[2]/div[1]/h4");
    
    constructor(driver: WebDriver) {
        super(driver);
    }

    //U.T: Test 1

    async verifyUserName(){
        await this.checkMatchingElements(this.name_prompt, testData.data.user_name);
    }


 
   



    

}
