const hasBrowser = Boolean(window.browser);
const actionName = hasBrowser ? 'browserx' : 'chromex';

// Message type used for dispatch events
// from the Proxy Stores to background
export const DISPATCH_TYPE = `${actionName}.dispatch`;

// Message type for state update events from
// background to Proxy Stores
export const STATE_TYPE = `${actionName}.state`;

// Message type for state patch events from
// background to Proxy Stores
export const PATCH_STATE_TYPE = `${actionName}.patch_state`;

// Global variable for either firefox or chrome global variable
export const BROWSER = hasBrowser ? browser : chrome;
