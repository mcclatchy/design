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
