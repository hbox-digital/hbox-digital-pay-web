import ReactGA from "react-ga4";

const initializeGA = () => {
  //Measurement ID
  // It ideally comes from an environment variable
  const measurementId = "G-49XDV9WBPJ";
  if (measurementId) {
    ReactGA.initialize(measurementId);
    // console.log("GA initialized");
  } else {
    console.error("GA Measurement ID is not defined");
  }
  // console.log("GA initialized");
};

const trackGAEvent = (category: string, action: string, label: string) => {
  // Send GA4 Event
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};

export default initializeGA;
export { initializeGA, trackGAEvent };
