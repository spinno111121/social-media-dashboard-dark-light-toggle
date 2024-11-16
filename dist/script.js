"use strict";var darkButton=document.getElementById("dark"),lightButton=document.getElementById("light");function GetColorFromLocalStorage(){return localStorage.getItem("ColorMode")}function GetColorFromSystemTheme(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function GetAndApplyColor(){"dark"==(GetColorFromLocalStorage()||GetColorFromSystemTheme())?darkButton.click():lightButton.click()}window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(e){e.matches?darkButton.click():lightButton.click()}));var radioButtons=document.querySelectorAll(".toggle__wrapper input");function OnDarkModeChecked(){console.log("setDarkMode"),document.querySelector("body").classList="dark",localStorage.setItem("ColorMode","dark")}function OnLightModeChecked(){console.log("setLightMode"),document.querySelector("body").classList="light",localStorage.setItem("ColorMode","light")}radioButtons.forEach((function(e){e.addEventListener("click",(function(e){darkButton.checked?OnDarkModeChecked():OnLightModeChecked()}))})),GetAndApplyColor();//# sourceMappingURL=script.js.map