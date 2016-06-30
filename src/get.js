'use strict';

export const id = (id) => document.getElementById(id);
export const css = (selecta) => document.querySelector(selecta);
export const cssAll = (selecta) => document.querySelectorAll(selecta);
export const className = (cls) => document.getElementsByClassName(cls);
export const tag = (name) => document.getElementsByTagName(name);
export const name = (nombre) => document.getElementsByName(nombre);