// Variables
const searchBar = document.querySelector(".searchbar-container");
const profileContainer = document.querySelector(".Profile-container");
const root = document.documentElement.style;
const get = (params) => document.getElementById(`${params}`);
const noresult = get("no-results");
const btnmode = get("btn-mode") 
const modetext = get("mode-text");
const nodeicon = get("mode-icon");
const btnsubmit = get("submit");
const input = get("input");
const avatar = get("avatar");
const userName = get("name");
const user = get("user");
const date = get("date");
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const bio = get("bio");
const repo = get("repo");
const follower = get("follower");
const following = get("following");
const user_location = get("location");
const page = get("page");
const twitter = get("twitter");
const company = get("company");
let darkMode = false;