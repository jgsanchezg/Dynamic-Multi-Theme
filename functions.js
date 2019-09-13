//Import configuration json file
var config = require("./themes.json");

//Change css variables in order to update theme
changeTheme = function(theme){
  //Get container
  const appDiv = document.getElementsByTagName('body')[0];
  //Set variable values from config file
  appDiv.style.setProperty('--background',config[theme].textColor);
  appDiv.style.setProperty('--background-color-buttons',config[theme].buttonsColor);
  appDiv.style.setProperty('--body-background-color',config[theme].bodyBrackgroundColor);
}