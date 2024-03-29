**content warning**

content warning is a Google Chrome Extension for Facebook that blocks content on a user's feed based on predefined keywords they would like to avoid.


**To run this project right now:**

Add the extension to your Google Chrome browser using the following link:

https://chrome.google.com/webstore/detail/content-warning/dcolcmlgddmkilpjniccnadfdmgifjfd

Enable the extension and you should be good to go!


**Inspiration**

Mental Health is such an important, yet frequently overlooked factor in our lives. It can have a huge impact on people and some might be sensitive to certain keywords or information with regards to their mental health. For people who have been through any sort of trauma or painful experience, simply coming across an online post containing certain words can change the course of their day. Scrolling through social media is a normal, sometimes integral, part of people's lives today. We believe that no person should be worries or anxious about upsetting or triggering content online.


**What it does**

content warning asks the each user for custom keywords they find triggering or upsetting and it does its best to hide any posts with those keywords from appearing on a person's feed. Instead, the person is given a small label that informs them that a post has been hidden. Instead of having to block an entire account for one or two posts, or having to stop using Facebook altogether, content warning gives users the option to only block the specific content they would like to hide. It provides a whole new experience, free of worry for people who are anxious or worried about scrolling through social media.


**How we built it**

We built it using HTML, CSS, and JavaScript through a free Google Chrome Extension that people can download on their own computers in the near future. We built a simple form that asks them for potentially triggering subjects and used a mutationObserver to watch out for any changes in their newsfeed. We stored each user's personal keywords locally in their Google Chrome account so they can have it wherever they access Facebook through Chrome.


**Challenges we ran into**

The three challenges we ran into were:

1. Finding selectors for Facebook posts. Facebook's HTML is long and complicated so it was difficult to identify the most effective elements in the DOM to check for keywords.

2. Having the function run for each change in the DOM. It was difficult to have the function run every single time anything new appeared in the person's newsfeed and it took a while for us to figure it out. At the end, we simply used a MutationObserver that watches out for any and all changes to an element.

3. Storage. We had to find local storage on each person's computer that would save their custom keywords so that they wouldn't have to re-enter them each time they used Facebook. Luckily, we found a way to do that through Google Chrome's storage sync services.


**Accomplishments that we're proud of**

The one thing we're most proud of is creating something that may be helpful to the world and to people. It is not perfect and has a long way to go but it is a simple tool that may make at least one person's day a little better.


**What we learned**

We learned the value of collaborating in a team, innovating with new tools, and being flexible with your plans.


**What's next for content warning**

First, we want to get into the Google Web Store for people to download for free. 

Then, we want people to have the option of displaying the posts even if they contain their keywords after they have been given a warning. 

We also want to bring some machine learning into the project by scanning pictures for common topics that people find triggering or upsetting. 

We want to add more languages, involve more people, talk to real mental health experts to get their opinion, really get it out there because it can prove to be a helpful tool.


File details are as follows:<br>
**manifest.json:** Main manifest to create a Google Chrome Extension. Contains the name, details, icons, and version.<br>
**interface.html:** HTML for the pop-up interface when the icon is clicked in the Google Chrome toolbar.<br>
**interfaceScript.js:** Handles the form and storage of keywords in the interface.<br>
**interface.css:** Contains CSS style elements for the pop-up interface.<br>
**script.js:** Creates main JavaScript that removes sensitive content from the Facebook feed.<br>
**styles.css:** Contains CSS style elements for the replaced elements in the feed.



This project was a collaboration between @rupalisaini, @samauld, and @carolinepar for UNC's annual hackathon, HackNC 2019.
