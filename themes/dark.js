import * as enhancements from "./enhancements.js";

/**
 * Reverse Impact theme
 */

const deadpool = [
  ".trinity-player-iframe-wrapper",
  ".commenting-container",
  ".embed-infographic iframe",
  "#zone-el-101",
  ".gallery.slider",
  ".story-body ~ *"
];

/**
 * Include marketing zones if ads are turned off
 */

if(pageInfo["marketInfo.allow_ads"] === "false") {
  deadpool.push(
    "#zone-el-2",
    "#zone-el-102",
    "#zone-el-104",
    ".zone.grid.combo"
  );
}

/**
 * Remove nodes and notify the Performance Team
 */

enhancements.removeNodes(deadpool);
