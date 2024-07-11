import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { LoginPage } from "../core/page-objects/login-page";
import { LandingPage } from "../core/page-objects/landing-page";
import { UsernamePage } from "../core/page-objects/username-page";
import {  HashtagPage } from "../core/page-objects/hashtag-page";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let loginPage: LoginPage;
let landingPage: LandingPage;
let usernamePage: UsernamePage;
let hashtagPage: HashtagPage;

beforeAll(async () => {
  driver = await createDriver(testData.url.home_page);
  loginPage = new LoginPage(driver);
  landingPage = new LandingPage(driver);
  usernamePage = new UsernamePage(driver);
  hashtagPage = new HashtagPage(driver);
}, 5000);

test("hashtag form validation", async () => {
  await loginPage.inputEmail();
  await loginPage.inputPassword();
  await loginPage.loginButton();
  await landingPage.hashtagMenuOption();
  await hashtagPage.openAddDModal();
  await hashtagPage.searchHashtagButton();
  await hashtagPage.verifyErrorMessage();
}, 3500);

afterAll(async () => {
  await quitDriver(driver);
}, 2000);
