/**
 * Adobe Analytics Interaction Tracking
 */

export function trackInteraction(name, now = false, targetActivity = false) {
  const prefix = targetActivity ? "Target" : "HI";

  try {
    // Interactions for Analytics
    window.mistats.interactions.custom({
      name: `${prefix}: ${name}`,
      type: null,
      count: 1,
      sendNow: now
    });
  } catch(e) {
    console.warn("Error tracking interaction:", e);
  }
}

/**
 * Adobe Target Click Event Tracking
 */

export function trackEvent(name) {
  try {
    window.adobe.target.trackEvent({
      mbox: "mboxClickTrack",
      params: {
        'target': 'clicked',
        'value': name
      }
    });
  } catch(e) {
    console.warn("Error tracking Target event:", e);
  }
}

/**
 * Passive interaction tracking
 */

const passiveObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    let name = e.target.localName;
    const po = e.target.dataset.passiveObserver;
    
    if(po) {
      name = po.replaceAll(" ", "-").toLowerCase();
    }

    // Track it
    if(e.isIntersecting) {
      trackInteraction(`${name}-viewed`);
    } else {
      if(e.boundingClientRect.bottom <= 0) {
        trackInteraction(`${name}-passed`);
      }
    }
  });
}, {
  threshold: [0,1]
});

export function trackPassive(ele) {
  passiveObserver.observe(ele)
}
