const keepAlive = () => setInterval(chrome.runtime.getPlatformInfo, 20e3);
chrome.runtime.onStartup.addListener(keepAlive);
keepAlive();

var connections = {};
chrome.runtime.onConnect.addListener(function (port) {
  var extensionListener = function (message, sender, sendResponse) {
    // The original connection event doesn't include the tab ID of the
    // DevTools page, so we need to send it explicitly.
    if (message.name == "batch requests") {
      connections[message.tabId] = port;
      const urls = message?.data || [];

      for (const url of urls) {
        fetch(url)
          .then(async (res) => {
            const resClone = res.clone();
            const status = res.status;
            const content = await res.text();
            const blob = await resClone.blob();
            const contentLength =
              res.headers.get("content-length") || blob.size;

            return Promise.resolve({
              content,
              contentLength,
              status,
            });
          })
          .then(({ content, contentLength, status }) => {
            const title = content.match(/<title>(.+?)<\/title>/)[1];

            port.postMessage({ contentLength, status, url, title });
          });
      }
      return;
    }

    // other message handling
  };

  // Listen to messages sent from the DevTools page
  port.onMessage.addListener(extensionListener);

  port.onDisconnect.addListener(function (port) {
    port.onMessage.removeListener(extensionListener);

    var tabs = Object.keys(connections);
    for (var i = 0, len = tabs.length; i < len; i++) {
      if (connections[tabs[i]] == port) {
        delete connections[tabs[i]];
        break;
      }
    }
  });
});
