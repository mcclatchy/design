/**
 * Series nav still points to the original publication only.
 * This file will check the domain on those links and swap to the
 * current one if it isn't the same. This logic is extremely brittle, 
 * as all stories have to be desked (home) to the exact same section
 * on all sites. 
 *
 * This is a temporary fix while development looks into the issue.
 */

const stories = document.querySelectorAll("#story-series .card");
stories.forEach((s) => {
  // Multiple links per card
  let links = s.querySelectorAll("a");
  links.forEach((l) => {
    // Swap the host and port
    if(l.hostname != window.location.hostname) {
      l.hostname = window.location.hostname;
      l.port = window.location.port;
    }
  });
})
