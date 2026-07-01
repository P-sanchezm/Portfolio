const CONTACT = "cGFic2FuY2hlem1AZ21haWwuY29t";

export const getEmail = (): string => atob(CONTACT);

const CV_REQUEST_SUBJECT = "CV request from your portfolio";
const CV_REQUEST_BODY = `Hi! I'm [insert your name and where you're from],

I enjoyed your portfolio and would love to learn more about your experience. Could you please share your CV with me?

Thank you!

Best,
[Your name]`;

/** Opens a prefilled draft in the visitor's default email client. */
export const getCvRequestUrl = (): string =>
  `mailto:${getEmail()}?subject=${encodeURIComponent(
    CV_REQUEST_SUBJECT
  )}&body=${encodeURIComponent(CV_REQUEST_BODY)}`;
