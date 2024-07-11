import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { LoginPage } from "../core/page-objects/login-page";
import { LandingPage } from "../core/page-objects/landing-page";
import { AccountPage } from "../core/page-objects/account-page";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let loginPage: LoginPage;
let landingPage: LandingPage;
let accountPage: AccountPage;

beforeAll(async () => {
  driver = await createDriver(testData.url.home_page);
  loginPage = new LoginPage(driver);
  landingPage = new LandingPage(driver);
  accountPage = new AccountPage(driver);
}, 2000);

test("check user information", async () => {
  await loginPage.inputEmail();
  await loginPage.inputPassword();
  await loginPage.loginButton();
  await landingPage.accountMenuOption();
  await accountPage.verifyUserName();
}, 3500);

afterAll(async () => {
  await quitDriver(driver);
}, 2000);
