export const GA_MEASUREMENT_ID = process.env.gaMeasurementId;
export const env = process.env.NODE_ENV;

export const pageview = (url: any) => {
  // @ts-ignore
  if (window['gtag'] && env !== 'development') {
    // @ts-ignore
    window['gtag']('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

export const event = ({action, category, label, value}: any) => {
  // @ts-ignore
  if (window['gtag'] && env !== 'development') {
    // @ts-ignore
    window['gtag']('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};