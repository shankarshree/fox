// Gatsby settings for the environment variables
//require("dotenv").config({
//  path: `.env.${process.env.NODE_ENV}`,
//})

const express = require('express');

const serverless = require('serverless-http');

var app = express();

var router = express.Router();

const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var request    = require('request');
var rp = require('request-promise');
var apiBaseUrl = process.env.MAILGUN_API_URL;
var apiKey     = process.env.MAILGUN_API_KEY;
var from       = process.env.MAIL_FROM;
var bcc        = 'thefoxclub-allemails@starberry.tv';


let sampledata = [
  {
    a: process.env.MAIL_FROM,
    b: process.env.RECAPTCHA_KEY,
    c: process.env.MAILGUN_API_URL,
    d: process.env.MAILGUN_API_KEY,
    e: process.env.MAILGUN_DOMAIN,
    f: process.env.MAIL_FROM,
    g: process.env.MAIL_TO,
    h: process.env.MAIL_SUBJECT_DEV
  }
]


router.get('/test', function (req, res) {
  res.json(sampledata)
});


router.post('/form-send', async ({body}, res) => {

  const myformdata = (body)

  var memberdatashow = 'block';
  var member_txt = 'Non member';
  var subscribe_val = 'No';
  if ( 'yes' === myformdata.member ) {
    var memberdatashow = 'none';
    var member_txt = 'Existing Member';
  }
  if ( 'yes' === myformdata.subscribe ) {
    var subscribe_val = 'Yes';
  }

  var template = 'email goes here';

  var axios = require('axios');

  axios.defaults.baseURL = 'https://www.foxclublondon.com/';

  function titleCase(str) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   return splitStr.join(' '); 
}

  axios.all([
    axios.get('/find-us_user.txt'),
    axios.get('/find-us_admin.txt')
  ]).then(axios.spread((resp, respadmin) => {
    
      var template = (resp.data).toString('utf8');

      var template_admin = (respadmin.data).toString('utf8');

      template = template.replace(/__imgurl__/g, 'https://www.foxclublondon.com/images')
      template = template.replace(/__siteurl__/g, 'https://www.foxclublondon.com')
      template = template.replace(/__name__/g, titleCase(myformdata.name))
      template = template.replace(/__notanmemberdisplay__/g, memberdatashow)

      var d = new Date();

      template_admin = template_admin.replace(/__imgurl__/g, 'https://www.foxclublondon.com/images')
      template_admin = template_admin.replace(/__siteurl__/g, 'https://www.foxclublondon.com')
      template_admin = template_admin.replace(/__name__/g, titleCase(myformdata.name))
      template_admin = template_admin.replace(/__copyRightYear__/g, d.getFullYear())
      template_admin = template_admin.replace(/__customertype__/g, member_txt)
      template_admin = template_admin.replace(/__subscriptiontype__/g, subscribe_val)
      template_admin = template_admin.replace(/__email__/g, (myformdata.email))
      template_admin = template_admin.replace(/__telephone__/g, (myformdata.telephone))
      template_admin = template_admin.replace(/__message__/g, (myformdata.message))

      var to       = myformdata.email;
      var subject  = `The Fox Club - Find us ${process.env.MAIL_SUBJECT_DEV}`;

      var mailgunOpts = {
          url: apiBaseUrl + '/messages',
          method: 'POST',
          headers: {
              Authorization: 'Basic ' + new Buffer('api:' + apiKey).toString('base64')
          },
          form: {
              from : from, to : to, bcc : bcc, subject: subject, html : template
          }
      };

      var to_admin       = process.env.MAIL_TO; //client mail

      var mailgunOpts_admin = {
          url: apiBaseUrl + '/messages',
          method: 'POST',
          headers: {
              Authorization: 'Basic ' + new Buffer('api:' + apiKey).toString('base64')
          },
          form: {
              from : from, to : to_admin, bcc : bcc, subject: subject, html : template_admin
          }
      };

      rp(mailgunOpts)
          .then(function (body) {

            rp(mailgunOpts_admin)
              .then(function () {
                  res.send('success'); res.status(200);
              })
              .catch(function (err2) {
                  //res.send(err); res.status(500);
              });

          })
          .catch(function (err) {
              //res.send(err); res.status(500);
          });

      //res.send('success');
      //res.status(200);

  })).catch(err => {
    res.send(err);
    res.status(500);
  });

});

router.post('/form-contact', async ({body}, res) => {

  const myformdata = (body)

  var memberdatashow = 'block';
  var member_txt = 'Non member';
  var subscribe_val = 'No';
  if ( 'yes' === myformdata.member ) {
    var memberdatashow = 'none';
    var member_txt = 'Existing Member';
  }
  if ( 'yes' === myformdata.subscription ) {
    var subscribe_val = 'Yes';
  }

  var childrenvalue = 'None';
  if ( myformdata.childrens ) {
    var childrenvalue = myformdata.childrens;
  }

  var business_namedisplay = 'none';
  if ( myformdata.business_name ) {
    var business_namedisplay = 'block';
  }

  var interest_typedisplay = 'none';
  if ( 'rooms' === myformdata.interest_type  ) {
    var interest_typedisplay = 'block';
  }

  var interest_type_food_display = 'none';
  if ( 'food' === myformdata.interest_type  ) {
    var interest_type_food_display = 'block';
  }

  var interest_type_event_display = 'none';
  if ( 'events' === myformdata.interest_type  ) {
    var interest_type_event_display = 'block';
  }

  var interest_type_food_event_display = 'none';
  if ( 'events' === myformdata.interest_type || 'food' === myformdata.interest_type ) {
    var interest_type_food_event_display = 'block';
  }

  var selectedtype; var timedate; var adminselectedtype;

  if ('events' === myformdata.interest_type) {
    selectedtype = myformdata.event_type;
    adminselectedtype = 'Event';
    timedate = "Time and Date: "+myformdata.preferred_date+"<br /><br />Number/s: "+myformdata.numbers;
  }
  if ('rooms' === myformdata.interest_type) {
    selectedtype = myformdata.room_type;
    adminselectedtype = 'Room';

    if(myformdata.childrens === '')
    {
    timedate = "Arrival Date: "+myformdata.arrival_date+"<br /><br />Departure Date: "+myformdata.departure_date+"<br /><br />Number of Rooms: "+myformdata.rooms+"<br /><br />Number of Adults: "+myformdata.adults;
    }
    else
    {
    timedate = "Arrival Date: "+myformdata.arrival_date+"<br /><br />Departure Date: "+myformdata.departure_date+"<br /><br />Number of Rooms: "+myformdata.rooms+"<br /><br />Number of Adults: "+myformdata.adults+"<br /><br />Number of Children: "+myformdata.childrens;
    }

  }
  if ('food' === myformdata.interest_type) {
    selectedtype = myformdata.menu_type;
    adminselectedtype = 'Table';
    timedate = "Time and Date: "+myformdata.preferred_date+"<br /><br />Number/s: "+myformdata.numbers;
  }

  var template = 'email goes here';

  var axios = require('axios');

  axios.defaults.baseURL = 'https://www.foxclublondon.com/';


  function titleCase(str) {
     var splitStr = str.toLowerCase().split(' ');
     for (var i = 0; i < splitStr.length; i++) {
         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
     }
     return splitStr.join(' '); 
  }

  axios.all([
    axios.get('/contact-us_user.txt'),
    axios.get('/contact-us_admin.txt')
  ]).then(axios.spread((resp, respadmin) => {
    

      var template = (resp.data).toString('utf8');


      var template_admin = (respadmin.data).toString('utf8');


      template = template.replace(/__imgurl__/g, 'https://www.foxclublondon.com/images/')
      template = template.replace(/__siteurl__/g, 'https://www.foxclublondon.com/')
      template = template.replace(/__name__/g, titleCase(myformdata.name))
      template = template.replace(/__notanmemberdisplay__/g, memberdatashow)
      template = template.replace(/__selectedtype__/g, selectedtype)
      template = template.replace(/__timedate__/g, timedate)

      var d = new Date();

      template_admin = template_admin.replace(/__imgurl__/g, 'https://www.foxclublondon.com/images/')
      template_admin = template_admin.replace(/__siteurl__/g, 'https://www.foxclublondon.com/')
      template_admin = template_admin.replace(/__name__/g, titleCase(myformdata.name))
      template_admin = template_admin.replace(/__copyRightYear__/g, d.getFullYear())
      template_admin = template_admin.replace(/__customertype__/g, member_txt)
      template_admin = template_admin.replace(/__subscriptiontype__/g, subscribe_val)
      template_admin = template_admin.replace(/__email__/g, (myformdata.email))
      template_admin = template_admin.replace(/__phone__/g, (myformdata.phone))
      template_admin = template_admin.replace(/__business_name__/g, (myformdata.business_name))
      template_admin = template_admin.replace(/__arrival_date__/g, (myformdata.arrival_date))
      template_admin = template_admin.replace(/__departure_date__/g, (myformdata.departure_date))
      template_admin = template_admin.replace(/__room_type__/g, (myformdata.room_type))
      template_admin = template_admin.replace(/__rooms__/g, (myformdata.rooms))
      template_admin = template_admin.replace(/__adults__/g, (myformdata.adults))
      template_admin = template_admin.replace(/__menu_type__/g, (myformdata.menu_type))
      template_admin = template_admin.replace(/__event_type__/g, (myformdata.event_type))
      template_admin = template_admin.replace(/__preferred_date__/g, (myformdata.preferred_date))
      template_admin = template_admin.replace(/__numbers__/g, (myformdata.numbers))
      template_admin = template_admin.replace(/__message__/g, (myformdata.message))

      template_admin = template_admin.replace(/__childrenvalue__/g, (childrenvalue))
      template_admin = template_admin.replace(/__selectedtype__/g, (adminselectedtype))

      template_admin = template_admin.replace(/__business_namedisplay__/g, (business_namedisplay))
      template_admin = template_admin.replace(/__interest_typedisplay__/g, (interest_typedisplay))
      template_admin = template_admin.replace(/__interest_type_food_display__/g, (interest_type_food_display))
      template_admin = template_admin.replace(/__interest_type_event_display__/g, (interest_type_event_display))
      template_admin = template_admin.replace(/__interest_type_food_event_display__/g, (interest_type_food_event_display))


      if(myformdata.room_type === '')
      {
        var contact_email_subject = 'The Fox Club - Contact us'
      }
      else
      {
        var contact_email_subject = 'The Fox Club - Contact us - '+myformdata.room_type
      }

      var to       = myformdata.email;
      var subject  = contact_email_subject;

      var mailgunOpts = {
          url: apiBaseUrl + '/messages',
          method: 'POST',
          headers: {
              Authorization: 'Basic ' + new Buffer('api:' + apiKey).toString('base64')
          },
          form: {
              from : from, to : to, bcc : bcc, subject: subject, html : template
          }
      };

      var to_admin       = process.env.MAIL_TO;

      var mailgunOpts_admin = {
          url: apiBaseUrl + '/messages',
          method: 'POST',
          headers: {
              Authorization: 'Basic ' + new Buffer('api:' + apiKey).toString('base64')
          },
          form: {
              from : from, to : to_admin, bcc : bcc, subject: subject, html : template_admin
          }
      };

      rp(mailgunOpts)
          .then(function (body) {

            rp(mailgunOpts_admin)
                .then(function () {
                    res.send('success'); res.status(200);
                })
                .catch(function (err2) {
                    //res.send(err); res.status(500);
                });

          })
          .catch(function (err) {
              //res.send(err); res.status(500);
          });


  })).catch(err => {
    res.send(err);
    res.status(500);
  });

});

router.post('/form-membership', async ({body}, res) => {

  const myformdata = (body)

  var membershiptype = 'none';
  var memarr = []
  if ( 'yes' === myformdata.mayfair_individual ) {
    memarr.push("Mayfair Individual");
  }
  if ( 'yes' === myformdata.mayfair_joint ) {
    memarr.push("Mayfair Joint");
  }
  if ( 'yes' === myformdata.mayfair_overseas ) {
    memarr.push("Mayfair Overseas");
  }
  if ( 'yes' === myformdata.country_individual ) {
    memarr.push("Country Individual");
  }
  if ( 'yes' === myformdata.country_joint ) {
    memarr.push("Country Joint");
  }
  if ( 'yes' === myformdata.corporate ) {
    memarr.push("Corporate");
  }
  if ( 'yes' === myformdata.sme_membership ) {
    memarr.push("SME Membership");
  }
  if ( 'yes' === myformdata.young_fox ) {
    memarr.push("Young Fox (Under 30)");
  }
  if ( 'yes' === myformdata.monthly_membership ) {
    memarr.push("Monthly Membership");
  }

  membershiptype = memarr.join();

  var subscribe_val = 'No';
  if ( 'yes' === myformdata.subscription ) {
    var subscribe_val = 'Yes';
  }

  var emailtype = '';
  if ( 'yes' === myformdata.business_member ) {
    var emailtype = 'Business';
  }
  if ( 'yes' === myformdata.home_member ) {
    var emailtype = 'Home';
  }
  if ( 'yes' === myformdata.business_member && 'yes' === myformdata.home_member ) {
    var emailtype = 'Business / Home';
  }

  var template = 'email goes here';

  var axios = require('axios');

  axios.defaults.baseURL = 'https://www.foxclublondon.com/';

  function titleCase(str) {
     var splitStr = str.toLowerCase().split(' ');
     for (var i = 0; i < splitStr.length; i++) {
         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
     }
     return splitStr.join(' '); 
  }

  axios.all([
    axios.get('/membership_user.txt'),
    axios.get('/membership_admin.txt')
  ]).then(axios.spread((resp, respadmin) => {

      var template = (resp.data).toString('utf8');


      var template_admin = (respadmin.data).toString('utf8');


      template = template.replace(/__imgurl__/g, 'https://www.foxclublondon.com/images/')
      template = template.replace(/__siteurl__/g, 'https://www.foxclublondon.com/')
      template = template.replace(/__name__/g, titleCase(myformdata.firstname))
      template = template.replace(/__membershiptype__/g, membershiptype)

      var d = new Date();

      template_admin = template_admin.replace(/__imgurl__/g, 'https://www.foxclublondon.com/images/')
      template_admin = template_admin.replace(/__siteurl__/g, 'https://www.foxclublondon.com/')
      template_admin = template_admin.replace(/__firstname__/g, titleCase(myformdata.firstname))
      template_admin = template_admin.replace(/__copyRightYear__/g, d.getFullYear())
      template_admin = template_admin.replace(/__title__/g, (myformdata.title))
      template_admin = template_admin.replace(/__surname__/g, (myformdata.surname))
      template_admin = template_admin.replace(/__subscriptiontype__/g, subscribe_val)
      template_admin = template_admin.replace(/__gender__/g, (myformdata.gender))
      template_admin = template_admin.replace(/__birth_date__/g, (myformdata.birth_date))
      template_admin = template_admin.replace(/__nationality__/g, titleCase(myformdata.nationality))
      template_admin = template_admin.replace(/__occupation__/g, (myformdata.occupation))
      template_admin = template_admin.replace(/__home_address__/g, (myformdata.home_address))
      template_admin = template_admin.replace(/__address2__/g, (myformdata.address2))
      template_admin = template_admin.replace(/__city__/g, (myformdata.city))
      template_admin = template_admin.replace(/__postcode__/g, (myformdata.postcode))
      template_admin = template_admin.replace(/__country__/g, (myformdata.country))
      template_admin = template_admin.replace(/__telephone__/g, (myformdata.telephone))
      template_admin = template_admin.replace(/__email__/g, (myformdata.email))
      template_admin = template_admin.replace(/__businessname__/g, (myformdata.businessname))
      template_admin = template_admin.replace(/__business_street_address__/g, (myformdata.business_street_address))
      template_admin = template_admin.replace(/__business_address__/g, (myformdata.business_address))
      template_admin = template_admin.replace(/__business_city__/g, (myformdata.business_city))
      template_admin = template_admin.replace(/__business_postcode__/g, (myformdata.business_postcode))
      template_admin = template_admin.replace(/__business_country__/g, (myformdata.business_country))
      template_admin = template_admin.replace(/__business_telephone__/g, (myformdata.business_telephone))
      template_admin = template_admin.replace(/__business_email__/g, (myformdata.business_email))
      template_admin = template_admin.replace(/__hear_about__/g, (myformdata.hear_about))
      template_admin = template_admin.replace(/__current_member__/g, (myformdata.current_member))
      template_admin = template_admin.replace(/__payment_method__/g, (myformdata.payment_method))

      template_admin = template_admin.replace(/__membershiptype__/g, (membershiptype))
      template_admin = template_admin.replace(/__emailtype__/g, (emailtype))

      var to       = myformdata.email;
      var subject  = 'The Fox Club - Membership';

      var to_admin       = process.env.MAIL_TO;

      var mailgunOpts = {
          url: apiBaseUrl + '/messages',
          method: 'POST',
          headers: {
              Authorization: 'Basic ' + new Buffer('api:' + apiKey).toString('base64')
          },
          form: {
              from : from, to : to, bcc : bcc, subject: subject, html : template
          }
      };

      var mailgunOpts_admin = {
          url: apiBaseUrl + '/messages',
          method: 'POST',
          headers: {
              Authorization: 'Basic ' + new Buffer('api:' + apiKey).toString('base64')
          },
          form: {
              from : from, to : to_admin, bcc : bcc, subject: subject, html : template_admin
          }
      };

      rp(mailgunOpts)
          .then(function (body) {

          rp(mailgunOpts_admin)
              .then(function () {
                  res.send('success'); res.status(200);
              })
              .catch(function (err2) {
                  //res.send(err); res.status(500);
              });

          })
          .catch(function (err) {
              //res.send(err); res.status(500);
          });

  })).catch(err => {
    res.send(err);
    res.status(500);
  });

});


app.use('/.netlify/functions/server',router);

module.exports.handler = serverless(app);