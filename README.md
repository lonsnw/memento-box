# Memento Box

## Description

_Duration: 3.5 Week Sprint, working part time_

Memento Box is a collaboration platform for groups to put together digital “boxes” around celebrations for loved ones. Collect videos, photos, voice memos and more to package into a digital box and send to someone.
Memento is there for any occasion you want to celebrate - birthdays, anniversaries, weddings, retirements, you name it!
What’s inside Memento box? That’s up to you!!

Users can:

* Create an account
* Design a box by choosing box color and from a number of ribbon colors and styles
* Solicit collaboration on a box by inviting their friends or act as a collaborator by contributing to an existing box
* Review box contents and schedule the box to be sent to its recipient
* Recipients receive an email and click the box to open the site, where they can then view its contents by clicking through the box
* Recipients can send thank you notes to some or all senders and collaborators

The app stores all users, content, and recipient information on a database until they are deleted.  Documentation provides sample content for the database in addition to the queries needed to properly structure the database.

This app was built as a collaborative capstone project for a full-stack software engineering program at Prime Digital Academy.  Here are the [assignment instructions](./INSTRUCTIONS.md).

[Memento Box has been deployed on Heroku.](https://mementobox-880f810cd07a.herokuapp.com/#/home)

## Development team

This was a collaborative project.  Our development team was:

[Mohamed Ali](https://github.com/Mohagosaar)
<br> [Matt Gilbertson](https://github.com/mgilbertsonund)
<br> [Ken Grina](https://github.com/Kern89)
<br> [Sean Harrison](https://github.com/Iskander789)
<br> [Michael Kenyon](https://github.com/DeadstockFox)
<br> [Zoe Lindman](https://github.com/zlindman)
<br> [Sarah McCartney](https://github.com/smmc16)
<br> [Lons Nadziejka Waller](https://github.com/lonsnw)
<br> [Erik Silcox](https://github.com/Erik651)
<br> [David Smith](https://github.com/Djsmith611)

## Screen shots

Home page:
<br />
<center><image src=public/readme/user-landing.png width=50%></center>
<br />
Box build forms:
<br />
<center><image src=public/readme/box-setup.png width=50%></center>
<br />
<center><image src=public/readme/box-selection.png width=50%></center>
<br />
Recipient email:
<br />
<center><image src=public/readme/recipient-email.png width=50%></center>
<br />
Recipient view of box:
<br />
<center><image src=public/readme/recipient-landing.png width=50%></center>
<br />
Contents popup:
<br />
<center><image src=public/readme/content-popup.png width=50%></center>
<br />
Thank you page:
<br />
<center><image src=public/readme/thank-you-page.png width=50%></center>
<br />

## Prerequisites

* [Node.js](https://nodejs.org/en/)
* [Postgres](https://www.postgresql.org/download/)
* [Nodemon](https://nodemon.io)

## Setup instructions

The application has been tested and run on a local machine using the browser. It may be deployed in the future but currently is only available locally.

1. Clone down a version of this repository
1. Create a database named `prime-app`
1. Create and populate the tables needed for the database
   * This project is built on [Postgres](https://www.postgresql.org/download/), which you will need to install to use the app
   * The `database.sql` file contained in this repository provides all of the necessary queries for creating the table needed to run the app
   * The queries will also populate some tables with necessary information to enable styling and occasion selections in the application
1. Create a `.env` file at the root of the project.  Generate and add a `SERVER_SESSION_SECRET`.  For example:

  `SERVER_SESSION_SECRET=X5hooooSAMPLEAPIKEYoooodN6v`

  If you don't add a `.env` file and secret or create a secret with less than eight characters, you will get a warning when you try to use the application.
1. Open in your editor of choice and run an `npm install`
1. Run `npm run server` in your terminal
1. Run `npm run client` in your terminal
1. Navigate to the localhost port provided by your terminal when you initiate your client.  The default port when running Vite, for example, is `http://localhost:5173/`

__Note:__ You will need to set up MailChimp to use this application.  [Instructions for working with MailChimp and the Memento Box application](#mailchimp-email) can be found at the end of this document.

## Usage
See this video walkthrough of application useage.

Once everything is installed and running it should open in your default browser
  - if not, navigate to: http://localhost:5173/

1. On homepage, a user can see sample Memento Boxes, read about what goes into a Memento Box and watch a video introduction of Memento Box. Then when ready they can click get started to begin building their box.
2. Upon getting started building their box, the user will be rbought to a form that will ask them to input:
  - The occasion, from drop down menu.
  - Who they are celebrating
  - Date of occasion
  - anyone else that will be collaborating on the box
     - a brief message to any collaborators if they want
3. Next the user will be prompted to choose the style of the box:
  - Black or white box
  - a variety of ribbons
  From here they will "finish" the box, which will bring them to the build & edit section of the app.
4. From the build & edit view the user will add all the content they and their collaborators want inside the box.
5. Once all content has been added user can select the admin overview tab in the build & edit menu, from there the user will be prompted to to set up the delivery of the digital box to their recipient.

## Technologies

* [hamburger-react](https://www.npmjs.com/package/hamburger-react)
* [Material UI](https://mui.com/)
* [Moment](https://momentjs.com/)
* [Multer](https://www.npmjs.com/package/multer)
* [Slick Carousel](https://kenwheeler.github.io/slick/)
* React
* Redux
* Sagas
* HTML
* CSS
* JavaScript
* Node.js
* Express
* [MailChimp](https://mailchimp.com/)
* [Cloudinary](https://cloudinary.com/)
* [Passport](https://www.passportjs.org/)
* PostgreSQL

## Tools

* [DB Designer](https://www.dbdesigner.net/)
* [Figma](https://www.figma.com)
* GitHub
* Google Workspace
* Slack
* Zoom

## Documentation
This project included scope documentation.

This documentation was built following a [provided template](https://github.com/PrimeAcademy/readme-template/blob/main/README.md).   It has been edited for style,  consistency, and to provide all relevant details.

## Future development
The following features are planned for development:

* Security: the application needs to apply unique keys to boxes in order to be secure for users and recipients
* Pricing tiers: box build out will be priced according to the number of collaborators
* Photo scanning feature: users will be able to use their phones to take pictures of documents and upload them as scanned documents
* Data collection and flow: for full functionality, data flow through the app will need to be standardized
* Newsletter: visitors to the site will be able to provide their email address in a field in the footer and will be registered to receive the Memento Box Newsletter

----
----

## MailChimp email

MailChimp has a [breakdown of when you should use which of their APIs](https://mailchimp.com/developer/transactional/guides/send-first-email/#transactional-vs-marketing-email).

The following is a step-by-step guide for how MailChimp is or will be integrated with this application and how you can implement it in your own instance.

### Marketing email (newsletter) setup using MailChimp -- FUTURE STATE

* If you have not already created a `.env` file at the root of the project, create one.
* Create a MailChimp account.  You should be able to use a [free account](https://login.mailchimp.com/signup/?plan=free_monthly_plan_v0&locale=en&subscribers=500) for the basic functionality of this application.
* [Create an API key in your account](https://mailchimp.com/help/about-api-keys/#Generate_an_API_key).
* Insert your API key into your `.env` file with the name `MARKETING_KEY`.  For example:

```plaintext
MARKETING_KEY=FooVX5hooooSAMPLEAPIKEYooood4mXV7RUt2N6v
```

* Find your MailChimp data center.  It's at the start of the URL you visit when you're on your dashboard.  [Here's more information](https://mailchimp.com/developer/marketing/docs/fundamentals/#connecting-to-the-api).
* Insert your data center into your `.env` file with the name `MARKETING_DC`.  For example:

```plaintext
MARKETING_DC=us12
```

* Find your MailChimp Audience ID by following the following path or using their [help center instructions](https://mailchimp.com/help/find-audience-id/):
  * "Audience" > "Audience dashboard" > "Manage Audience" > "Settings"
* Insert your data center into your `.env` file with the name `MARKETING_AUD_ID`.  For example:

```plaintext
MARKETING_AUD_ID=304g5398t4
```

### Transactional email (gift emails, etc.) setup using MailChimp

1. If you have not already created a `.env` file at the root of the project, create one.
1. Create a MailChimp account.  You should be able to use a [free account](https://login.mailchimp.com/signup/?plan=free_monthly_plan_v0&locale=en&subscribers=500) for the basic functionality of this application. <br>
__NOTE:__ The free version of MailChimp Transactional/Mandrill will ONLY send to email addresses at the domain that you have registered.  This means you cannot effectively use the free version for more than testing/demos.

1. Navigate to Transactional email from the dashboard sidebar: "Automations" > "Transactional email"
1. Select "Try for free" if you are using a free account.
1. Select "Launch App" to sign into Mandrill using MailChimp.
1. Set up your sending domain
1. [Authenticate your sending domain](https://mailchimp.com/developer/transactional/docs/authentication-delivery/#configure-your-dns)
1. Navigate to Settings from the Mandrill dashboard sidebar
1. Create a new API key by selecting "+ New API Key"
1. Insert your API key into your `.env` file with the name `TRANSACTIONAL_KEY`.  For example:

```plaintext
TRANSACTIONAL_KEY=X5hooooSAMPLEAPIKEYoooodN6v
```

#### Using the email template:

1. Create template for email in MailChimp account using template provided in this folder
   1. Log into Mandrill using MailChimp account information (can access Mandrill from the MailChimp dashboard by navigating to "Automations" > "Transactional email" in the sidebar)
   1. Navigate to email templates from the dashboard: "Outbound" > "Templates" > "+ Create a Template"
   1. Name the template "Memento Box Gift Notif"
      1. You can use another name, but you will then need to take note of the provided "Template Slug" and insert it into the API call, where it is referred to as the "template_name"
   1. Select "Start Coding"
   1. Copy/paste the provided emailTemplate.html into the HTML field.
   1. Set template defaults as preferred.  Some suggestions:
      1. From Address: your business email, possibly a designated account for administrative emails.  This email __must__ use the same domain as the domain you have registered with MailChimp/Mandrill for your transactional emails.
      1. From Name: "Memento Box"
      1. Subject: "You've received a Memento Box!"
   1. You can preview the content by selecting "Preview and Test".  Testing will allow you to input your email address and you will receive a test version of your email to your inbox, assuming that you have authenticated your domain properly. You can also either save the template as a draft ("Save Draft"), in which case the API call will not work, or publish it ("Publish") when it's final.
1. Once your email is saved as a template, the API should correctly prompt the template to send with the appropriate dynamic content pulled from the application database and plugged in.
   1. __NOTE:__ Emails MUST come from the same domain that's associated with the account/API key.  The API request requires a from email.  Because the project does not currently have a domain, this parameter is specified as  `` "from_email": `${process.env.FROM_EMAIL}` `` in order that the tester can use their own domain.  To use your domain, insert the from email in your `.env` file as `FROM_EMAIL=youremail@yourdomain.com` and use the current setup.  Alternately, you can replace `${process.env.FROM_EMAIL}` with `"youremail@yourdomain.com"` within the API request.



