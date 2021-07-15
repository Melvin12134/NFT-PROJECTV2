import './Theme.css';
import { BiMoon } from 'react-icons/bi'
import { BiSun } from 'react-icons/bi'
import { useState } from 'react';

export const Theme = () => {


    
    let clickedClass = "clicked";
    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme;
  
    if (localStorage) {
      theme = localStorage.getItem("theme");
    }
  
    if (theme === lightTheme || theme === darkTheme) {
      body.classList.add(theme);
    } else {
      body.classList.add(lightTheme);
    }
  
    const switchTheme = (e) => {
      if (theme === darkTheme) {
        body.classList.replace(darkTheme, lightTheme);
        e.target.classList.remove(clickedClass);
        localStorage.setItem("theme", "light");
        theme = lightTheme;
      } else {
        body.classList.replace(lightTheme, darkTheme);
        e.target.classList.add(clickedClass);
        localStorage.setItem("theme", "dark");
        theme = darkTheme;
      }
    };
  
    return (theme === "dark") ?  (
      <button
        className={theme === "dark" ? clickedClass : ""}
        id="darkMode"
        onClick={(e) => switchTheme(e)}
      ><BiMoon /></button>
    ) :   (
        <button
        className={theme === "dark" ? clickedClass : ""}
        id="darkMode"
        onClick={(e) => switchTheme(e)}
      ><BiSun /></button>
    );
  };