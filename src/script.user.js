// ==UserScript==
// @name        CanvasStudentDisableBlur
// @version     1.1
// @author      Alejandro Akbal
// @description Disables blur on a Canvas Student website
// @namespace   https://github.com/AlejandroAkbal/Canvas-Student-Disable-Blur
// @homepage    https://github.com/AlejandroAkbal/Canvas-Student-Disable-Blur
// @supportURL  https://github.com/AlejandroAkbal/Canvas-Student-Disable-Blur/issues
// @downloadURL https://raw.githubusercontent.com/AlejandroAkbal/Canvas-Student-Disable-Blur/master/src/script.user.js
// @match       https://campus.ilerna.es/*
// @grant       none
// ==/UserScript==

function startup() {
  const HtmlElement = document.querySelector('html');

  HtmlElement.style.opacity = '1';
  HtmlElement.style.filter = 'none';
  HtmlElement.style.pointerEvents = 'auto';
}

window.addEventListener('load', startup);
