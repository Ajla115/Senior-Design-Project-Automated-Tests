import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { LoginPage } from "../core/page-objects/login-page";
import { LandingPage } from "../core/page-objects/landing-page";
import { DMPage } from "../core/page-objects/dm-page";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let loginPage: LoginPage;
let landingPage: LandingPage;
let dmPage: DMPage;

beforeAll(async () => {
  driver = await createDriver(testData.url.home_page);
  loginPage = new LoginPage(driver);
  landingPage = new LandingPage(driver);
  dmPage = new DMPage(driver);
}, 5000);

test("write DM", async () => {
  await loginPage.inputEmail();
  await loginPage.inputPassword();
  await loginPage.loginButton();
  await landingPage.dmMenuOption();
  await dmPage.openAddDMModal();
  await dmPage.enterEmail();
  await dmPage.enterPassword();
  await dmPage.enterRecipient();
  await dmPage.enterMessage();
  await dmPage.sendDM();
  await dmPage.verifyUsername();
}, 50000);

afterAll(async () => {
  await quitDriver(driver);
}, 2000);
