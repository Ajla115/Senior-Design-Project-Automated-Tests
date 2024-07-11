import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { LoginPage } from "../core/page-objects/login-page";
import { LandingPage } from "../core/page-objects/landing-page";
import { UsernamePage } from "../core/page-objects/username-page";
import { HelpDeskPage } from "../core/page-objects/help-desk-page";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let loginPage: LoginPage;
let landingPage: LandingPage;
let usernamePage: UsernamePage;
let helpDeskPage: HelpDeskPage;

beforeAll(async () => {
  driver = await createDriver(testData.url.home_page);
  loginPage = new LoginPage(driver);
  landingPage = new LandingPage(driver);
  usernamePage = new UsernamePage(driver);
  helpDeskPage = new HelpDeskPage(driver);
}, 5000);

test("send email", async () => {
  await loginPage.inputEmail();
  await loginPage.inputPassword();
  await loginPage.loginButton();
  await landingPage.HelpDeskMenuOption();
  await helpDeskPage.enterTitle();
  await helpDeskPage.enterDescription();
  await helpDeskPage.sendEmail();
}, 50000);

afterAll(async () => {
  await quitDriver(driver);
}, 2000);
