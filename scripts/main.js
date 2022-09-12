const toggler = document.getElementsByClassName("header__toggler")[0];
const menu = document.getElementsByClassName("header__menu")[0];

let toggleState = false;

function ToggleMenu()
{
    if (!toggleState)
    {
        toggler.src = "./images/icon-close.svg";
        menu.style.scale = "1";
    }
    else
    {
        toggler.src = "./images/icon-hamburger.svg";
        menu.style.scale = "0";
    }
    toggleState = !toggleState;
}