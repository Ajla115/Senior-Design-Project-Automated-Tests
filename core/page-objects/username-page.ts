import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class UsernamePage extends BasePage {

    //Unit Tests
    private username_page = By.xpath("/html/body/div[1]/div[2]/div/main/div/div/div[1]/div[1]/h4");

    //Integration Tests
    //I.T.: Test 1
    private delete_bin_icon = By.xpath("/html/body/div[1]/div[2]/div/main/div/div/div[2]/div[1]/div[1]/div[2]/div/div/div/div/table/tbody/tr[3]/td[8]");
    private confirm_deletion_prompt = By.xpath("/html/body/div[7]/div[3]");
    private confirm_deletion_button = By.xpath("/html/body/div[7]/div[3]/div/div/button[2]");

    constructor(driver: WebDriver) {
        super(driver);
    }

    //U.T: Test 2
    async verifyUsernames(){
        await this.checkMatchingElements(this.username_page, testData.data.username_page)
    }

    //I.T: Test 2
    async openDeleteModal(){
        await this.findElementAndClick(this.delete_bin_icon);
    }

    async confirmDeletion(){
        await this.waitForElement(this.confirm_deletion_prompt, 50000);
        //await this.findElementAndClick(this.confirm_deletion_button);
    }




 
   



    

}
