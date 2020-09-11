---
title: "masthead (DSP)"
description: "The masthead displayed at the top of all DSP pages. Includes customer service links and a Sign Out link."
menu: "molecule"
---

The masthead displayed at the top of all DSP pages. Includes customer service links and a Sign Out link.

##### Example

<div class="dsp" style="max-width: 100%">
    <div class="flag full-bleed standard">
      <div class="paper"> 
        <div class="top flex">
            <a href="https://www.miamiherald.com" class="market-logo" aria-label="Miami Herald">
                <img src="https://www.miamiherald.com/wps/build/images/miamiherald/logo.svg" alt="Miami Herald Logo">
            </a>  
            <div class="flex links">
                <a href="#" class="button">800-555-5555</a>
                <a href="#" class="button">Contact Us</a>
                <a href="#" class="more-link">Sign Out</a>
            </div>
        </div>
      </div>
    </div>  
</div>

#### HTML
{{< highlight html >}}
<div class="flag full-bleed standard">
  <div class="paper"> 
    <div class="top flex">
        <a href="https://www.miamiherald.com" class="market-logo" aria-label="Miami Herald">
            <img src="https://www.miamiherald.com/wps/build/images/miamiherald/logo.svg" alt="Miami Herald Logo">
        </a>  
        <div class="flex links">
            <a href="#" class="button">800-555-5555</a>
            <a href="#" class="button">Contact Us</a>
            <a href="#" class="more-link">Sign Out</a>
        </div>
    </div>
  </div>
</div>   
{{< /highlight >}}