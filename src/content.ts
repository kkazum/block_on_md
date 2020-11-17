chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
      sendResponse({selectText: window.getSelection()!.toString(), lang: request.lang});
  }
);
