// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Kukwac
// Created on: April 2025
// This file contains the JS functions for index.html

"use strict";
/**
 * This function will convert temperature in Fahrenheit to Celsius.
 */
function calculate() {
  // input
    let fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
  // process
    let celsius = (fahrenheit - 32) * 5 / 9;

  // output
    document.getElementById('temperature').innerHTML = fahrenheit.toFixed(1) + '°F' + ' into Celsius is ' + celsius.toFixed(1) +'°C' + '.'
}
