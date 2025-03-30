const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static('style'));
app.use(express.static('script')); // Menyediakan folder public untuk file statis

// Halaman Utama
app.get('/', (req, res) => {
    res.send(`
       <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Allyssa, Cantikku</title>
    <link rel="stylesheet" href="/style.css" />
    <link rel="shortcut icon" type="image/png" href="/assets/moon.png" />
  </head>

  <body>
    <div class="container">
      <div class="one">
        <h1 class="one">Dear De IcHaaa🍦😼</h1>
        <p class="two" id="greetingText">My lovely Sunflower💗🌻!</p>
      </div>
      <div class="three">
        <p>mmm, jadi di hari kemenangan ini aku mau bilang 👉👈</p>
      </div>
      <div class="four">
        <div class="text-box">
          <p class="hbd-chatbox">
            template ucapan lebaran untuk orang tersayang 2025
          </p>
          <p class="fake-btn">Send</p>
        </div>
      </div>
      <div class="five">
        <p class="idea-1">That a common thing someone could've done</p>
        <p class="idea-2">But I tried to make you something special hehe.</p>
        <p class="idea-3">
          yaa coba-coba buat ini karna aku kan cowomu yang <strong>(lucu) ;)</strong>.
        </p>
        <p class="idea-4">So thats why,</p>
        <p class="idea-5">
          A special n beautiful girl deserves a special greeting cards
          <span>:)</span>
        </p>
        <p class="idea-6">
          <span>S</span>
          <span>O</span>
        </p>
      </div>
      <div class="six">
        <img src="/assets/lebaran.jpg" alt="" class="girl-dp" id="imagePath" />
        <div class="wish">
          <h3 class="wish-hbd">FORMYKINDBEAUTIFULSMARTCLINGYANDCARINGSWEETYCHOCOLATECAKE</h3>
          <h5 id="wishText">Minal aidzin wal faidzin, mohon maaf lahir dan batin YAA CANTIKKU💗🙋🏻. Semoga di hari kemenangan ini kamu sehat selalu dan enjoy ur dayy💗. Salam ya buat Mama, Papa, Mas Asad dan bocil kucing. Love U💗🙋🏻</h5>
        </div>
      </div>
      <div class="seven">
        <div class="baloons">
          <img src="/assets/drum.png" alt="" />
          <img src="/assets/lantern.png" />
          <img src="/assets/hijab.png" />
          <!-- Remove unnecessary closing comment here -->
        </div>
      </div>
      <div class="eight">
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" />
        </svg>
      </div>
      <div class="nine">
        <p>Okay, if u have a time call me back and tell me if you liked it sayangg.</p>
        <p id="replay">Or click, if you want to watch it again.</p>
        <p class="last-smile">:)</p>
      </div>
    </div>

    <audio controls id="music">
      <source src="/assets/lebaransong.mp3" type="audio/mpeg" />
    </audio>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script>
    <script>
      function PlayMusic() {
        var play = document.getElementById("music");
        play.play();
      }

      $(document).ready(function () {
        setTimeout(PlayMusic, 1000);
      });
    </script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>
    <script type="text/babel" src="/main.js"></script>
  </body>
</html>
    `);
});

// Jalankan Server
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
