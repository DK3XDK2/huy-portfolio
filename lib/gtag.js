export const GA_TRACKING_ID = "G-R49PTG8TEG";

export const event = (action, params) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, params);
  }
};
