/**
 * Communicates with the Performance Team
 */

window.mi = window.mi || {};
window.mi.theme = {
  name: "custom",
  description: "This custom build included the enhancements file directly.",
  changes: new Map()
}

/**
 * Returns a filtered list of elements for zone insertion to improve
 * the readability of the content.
 */

export function getValidInsertionPoints() {
  let grafs = [...document.querySelectorAll("article.story-body > p")];

  return grafs.filter(p => {
    if(p.textContent.length < 100) {
      return false;
    }

    if(p.previousElementSibling.nodeName != "P" && grafs.indexOf(p) > 0) {
      return false;
    }

    return true;
  });
}

/**
 * Redistributes zones based on valid insertion points.
 *
 * It runs through the story body zones in order and places it after the 
 * child of the given index (0-based indexing). If there are more zones
 * than arguments given, excess zones will be removed. Additionally, if
 * the story is not long enough to accomodate the new position the zone
 * will also be removed.
 *
 * @param {iterable} map The new zone positions.
 *
 * example: moveZones([5,10,15,20])
 */

export function moveZones(map = [3,6,11,15,20,25,30,35]) {
  const story = document.querySelector(".story-body");
  const zones = [...document.querySelectorAll(".story-body > .zone")].filter(zone => {
    // Related content is flagged as a zone even though it isn't one
    if(zone.matches(".grid:not(.combo)")) return false;

    return true;
  });

  // Remove the zones to get new insertion points
  zones.forEach(zone => zone.remove());

  // Get the new valid insertion points and refill
  const vips = getValidInsertionPoints();
  zones.forEach((zone, index) => {
    let newPosition = map[index];
    let vip = vips[newPosition];

    if(!newPosition) {
      mi.theme.changes.set(zone, "no position specified for this zone");
    }

    if(!vip) {
      mi.theme.changes.set(zone, "no valid insertion point for this zone");
    }

    if(newPosition && vip) {
      story.insertBefore(zone, vip);
      mi.theme.changes.set(zone, "element moved to new position");
    }
  });
}

/**
 * Returns a boolean comparing an elements bounding rectangle to a set ratio
 */

export function checkRatio(ele, ratio = 1.4) {
  const bbox = ele.getBoundingClientRect();
  return bbox.width / bbox.height > ratio
}

/**
 * Makes landscape inline photos and videos use the wide option
 */

export function makePhotosWide() {
  const figures = document.querySelectorAll(".story-body figure");
  const videos = document.querySelectorAll(".story-body .inline-video");

  figures.forEach(figure => {
    let img = figure.querySelector("img");

    if(img) {
      if(img.complete && checkRatio(img)) {
        figure.classList.add("wide");
        mi.theme.changes.set(figure, "added the wide class to the figure");
      } else {
        img.addEventListener("load", (e) => {
          if(checkRatio(img)) {
            figure.classList.add("wide");
            mi.theme.changes.set(figure, "added the wide class to the figure");
          }
        });
      }
    }
  });

  videos.forEach(video => {
    video.classList.add("wide");
    mi.theme.changes.set(video, "added the wide class to this video");
  });
}

/***
 * Utility function to remove elements by selector
 *
 * Note: We will need to communicate the removal of these zones
 * to the Performance Team, so even though it's a one-liner
 * this function should handle that communication for you.
 */

export function removeNodes(nodes = []) {
  document.querySelectorAll(nodes).forEach(ele => {
    ele.remove();
    mi.theme.changes.set(ele, "element removed by the theme");
  })
}

/**
 * Utility function to replace a node by selector
 *
 * Note: We will need to communicate the removal of these zones
 * to the Performance Team, so even though it's a one-liner
 * this function should handle that communication for you.
 */

export function replaceNode(newElement, qs) {
  const oldElement = document.querySelector(qs);
  if(oldElement) {
    oldElement.parentElement.replaceChild(newElement, oldElement);
    mi.theme.changes.set(newElement, `element replaced "${qs}" by the theme`);
  }
}

/**
 * Removes all content after the story body up to the footer
 */

export function removeCardsBelowStory() {
  removeNodes([".story-body ~ *"])
}
