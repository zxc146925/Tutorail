const express = require('express');
const router = express.Router();
var faker = require('faker');
var _ = require('lodash');
var querystring = require('querystring');
// const axios = require('axios');
var request = require("request");

// const API = 'http://127.0.0.1:8000/api';
// const API = 'http://192.168.1.173:8000/api';
// const API = 'http://ec2-13-59-158-92.us-east-2.compute.amazonaws.com:8000/api';
// const API ='http://ec2-13-59-158-92.us-east-2.compute.amazonaws.com:8000/api/students';
// http://ec2-13-59-158-92.us-east-2.compute.amazonaws.com:8000/api/create_student

const API ='http://ec2-13-59-158-92.us-east-2.compute.amazonaws.com:8000/api';


/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});




router.get("/students", (req, res) => {
  var options = {
    method: 'GET',
    url: `${API}/students`,
    headers:
    {
      'Content-Type': 'application/x-www-form-urlencoded'
      // 'Content-Type': 'application/json'
    },
  };

  request(options, (error, response, body) => {
    res.status(response.statusCode).send(JSON.parse(body))
  })
});

router.get("/classes", (req, res) => {
  var options = {
    method: 'GET',
    url: `${API}/classes`,
    headers:
    {
      'Content-Type': 'application/x-www-form-urlencoded'
      // 'Content-Type': 'application/json'
    },
  };

  request(options, (error, response, body) => {
    res.status(response.statusCode).send(JSON.parse(body))
  })
});

router.post("/post_student", (req, res) => {
  let postBody = querystring.stringify(req.body)
  var options = {
    method: 'POST',
    url: `${API}/create_student`,
    headers:
    {
      'Content-Type': 'application/x-www-form-urlencoded'
      // 'Content-Type': 'application/json'
    },
    body: postBody
  };

  request(options, (error, response, body) => {
    res.status(response.statusCode).send(JSON.parse(body))
  })
});

router.post("/post_class", (req, res) => {
  let postBody = querystring.stringify(req.body)
  var options = {
    method: 'POST',
    url: `${API}/create_class`,
    headers:
    {
      'Content-Type': 'application/x-www-form-urlencoded'
      // 'Content-Type': 'application/json'
    },
    body: postBody
  };

  request(options, (error, response, body) => {
    res.status(response.statusCode).send(JSON.parse(body))
  })
});




module.exports = router;
