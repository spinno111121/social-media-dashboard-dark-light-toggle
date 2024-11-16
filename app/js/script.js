const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');

function GetColorFromLocalStorage(){
   return localStorage.getItem('ColorMode');
}
function GetColorFromSystemTheme(){
    return window.matchMedia('(prefers-color-scheme: dark)').matches 
? 'dark'
: 'light'
}

function GetAndApplyColor(){
    let color= GetColorFromLocalStorage() || GetColorFromSystemTheme();
    if(color== 'dark') darkButton.click();
    else lightButton.click();
}

// when the prefers-color-scheme changes, this event will be emitted
// event reflects the media query, if it matches, the new color is dark, else it is light
window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        event.matches ? darkButton.click() : lightButton.click();
      });

// when the inputs are clicked, check which radio button is checked and change the color
const radioButtons = document.querySelectorAll('.toggle__wrapper input');
radioButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    darkButton.checked ? OnDarkModeChecked() : OnLightModeChecked();
  });
});


function OnDarkModeChecked(){
    console.log('setDarkMode');
    document.querySelector('body').classList = 'dark';
    localStorage.setItem('ColorMode', 'dark')
}
function OnLightModeChecked(){

    console.log('setLightMode');
    document.querySelector('body').classList = 'light';
    localStorage.setItem('ColorMode', 'light') 
}

GetAndApplyColor();