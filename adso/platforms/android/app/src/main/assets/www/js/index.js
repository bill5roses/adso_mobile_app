/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
  // Application Constructor
  initialize: function() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

    var websiteHolder = document.getElementById("websiteHolder");
    var website = document.getElementById("website");
    var closeWebsite = document.getElementById("closeWebsite");
    var spinContainer = document.getElementById("spinContainer");
    var showing = false;

    function load(url) {
      website.src = url;
      spinContainer.style.display = "block";
    };

    function show() {
      if (!showing) {
        websiteHolder.style.display = "block";
        closeWebsite.style.display = "block";
        showing = true;
        spinContainer.style.display = "none";
      }
      websiteHolder.style.width = (window.innerWidth + 10) + "px";
      websiteHolder.style.height = (window.innerHeight - 80 + 10) + "px";
      window.setTimeout(function() {
        websiteHolder.style.width = window.innerWidth + "px";
        websiteHolder.style.height = (window.innerHeight + 80) + "px";
      }, 100);
    };

    function hide() {
      websiteHolder.style.display = "none";
      closeWebsite.style.display = "none";
      try {
        website.contentWindow.document.open();
        website.contentWindow.document.write("");
        website.contentWindow.document.close();
      } catch (e) {
        console.log(e);
      }
      website.src = "about:blank";
      window.setTimeout(function(){
        showing = false;
      }, 50);
    };

    closeWebsite.addEventListener("click", function(){
      hide();
    });

    document.getElementById("about").addEventListener("click", function(){
      load("https://www.theadso.org/about-the-adso/");
    });

    document.getElementById("membership").addEventListener("click", function(){
      load("https://www.theadso.org/membership/members-location");
    });

    document.getElementById("news").addEventListener("click", function(){
      load("https://www.theadso.org/news-2");
    });

    document.getElementById("education").addEventListener("click", function(){
      load("https://www.pathlms.com/adso");
    });

    document.getElementById("careers").addEventListener("click", function(){
      load("https://www.theadso.org/careers/");
    });

    document.getElementById("advocacy").addEventListener("click", function(){
      load("https://www.theadso.org/advocacy-2/");
    });

    document.getElementById("highlights").addEventListener("click", function(){
      load("https://www.theadso.org/community-highlights");
    });

    document.getElementById("events").addEventListener("click", function(){
      load("https://www.theadso.org/events/");
    });

    website.addEventListener('load', function() {
        show();
        console.log('website loaded');
    })
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function() {
    this.receivedEvent('deviceready');
    // window.location.href = "https://www.theadso.org";
  },

  // Update DOM on a Received Event
  receivedEvent: function(id) {
    // var parentElement = document.getElementById(id);
    // var listeningElement = parentElement.querySelector('.listening');
    // var receivedElement = parentElement.querySelector('.received');
    //
    // listeningElement.setAttribute('style', 'display:none;');
    // receivedElement.setAttribute('style', 'display:block;');

    console.log('Received Event: ' + id);
  }
};

app.initialize();
