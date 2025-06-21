Create a chat app from a template
Click this Google Apps Script link to open the Google Apps Script online editor.
Click Untitled project (the current name).
In the Edit project name dialog, rename the project , and then click Rename.
Task 2. Publish the bot
Go to OAuth consent screen from here
Set User Type to Internal, and click Create.

On the next page, (the OAuth consent screen), configure the following:

Field	Value
App name	Chat Bot
User support email	Select the email ID from the dropdown
Developer contact information	Your user email address
Go to Google Chat API Configuration Page from here

In the Configuration dialog, set the fields with the following values:

Field	Value
App name	 Bot
Avatar URL	https://goo.gl/kv2ENA
Description	Apps Script  bot
Functionality	Select Receive 1:1 messages and Join spaces and group conversations
Connection settings	Check Apps Script project and paste the Head Deployment ID into the Deployment ID field
Visibility	Your user email address
After the changes are saved, scroll to the top of the Configuration dialog to update the App Status to LIVE – available to users

Click the Google Chat link to open Google Chat.

Select Start a chat in the Chat section.

Search for  bot

From the results, select the Bot, Apps Script lab that you created, and click Start chat ![image](https://github.com/user-attachments/assets/75417fa4-1f18-4978-a45d-e64724a02ff3)
