
import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class HashtagPage extends BasePage {

    //Unit Tests
    //U.T.: Test 3
    private add_hashtag_button = By.xpath("/html/body/div[1]/div[2]/div/main/div/div/div[1]/div[2]/button");
    private search_hashtag_button = By.xpath("/html/body/div[1]/div[2]/div/main/div/div/div[2]/div/div[2]/div[2]/div/button[2]");
    private error_message = By.xpath("/html/body/div[1]/div[2]/div/main/div/div/div[2]/div/div[2]/div[1]/div/p");
    constructor(driver: WebDriver) {
        super(driver);
    }

    //U.T: Test 3
    async openAddDModal(){
        await this.waitAndClick(this.add_hashtag_button, 3000);
    }

    async searchHashtagButton(){
        await this.waitAndClick(this.search_hashtag_button, 3000);
    }

    async verifyErrorMessage(){
        await this.waitForElement(this.error_message, 3000);
        await this.checkMatchingElements(this.error_message, testData.data.error_message);

    }




 
   



    

}
