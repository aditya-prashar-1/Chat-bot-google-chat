// 🗂️ NOTEBOOK CONFIGURATION
// This map links the department names to their specific NotebookLM IDs.
// IMPORTANT: Replace the placeholder IDs below with your actual, unique NotebookLM IDs.
const NOTEBOOK_MAP = {
  "Human Resources": "afbb2022-4b54-4dc6-b2b6-67444f64784e",
  "Acquisition": "65a12678-0da6-41fb-8aa4-4816ffd01cd6",
  "Disposition": "126c6198-9059-49f5-b9ff-f74d79e88203", // <-- Replace with your actual LAM Notebook ID
  "Tech": "fb7d8bc8-890e-473f-a9cb-14fd2213091e"  // <-- Replace with your actual Tech Notebook ID
};

/**
 * The main handler for incoming messages from Google Chat.
 * Responds to any message by providing a complete list of all department links.
 * @param {Object} e The event object from Google Chat.
 * @returns {Object} A Chat message object with a card containing all links.
 */
function onMessage(e) {

  // Generate an array of button widgets, one for each department in the map.
  const departmentWidgets = Object.keys(NOTEBOOK_MAP).map(departmentName => {
    const notebookId = NOTEBOOK_MAP[departmentName];
    const notebookLink = `https://notebooklm.google.com/notebook/${notebookId}`;

    return {
      decoratedText: {
        startIcon: {
          knownIcon: "BOOKMARK"
        },
        text: `<b>${departmentName}</b>`,
        button: {
          text: "Open Notebook",
          onClick: {
            openLink: {
              url: notebookLink
            }
          }
        }
      }
    };
  });

  // Return the complete message with a card that contains all the department widgets.
  return {
    text: "Heya! Here are the NotebookLM links for all departments:",
    cardsV2: [{
      cardId: "departmentLinkList",
      card: {
        header: {
          title: "Department Notebook Access",
          subtitle: "Click a button to open the corresponding notebook.",
          imageUrl: "https://www.gstatic.com/images/branding/product/1x/notebooklm_2023_48dp.png",
          imageType: "CIRCLE"
        },
        sections: [{
          widgets: departmentWidgets // Add the array of buttons here
        }]
      }
    }]
  };
}
