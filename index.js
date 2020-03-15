var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    var template = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>The PlanetsHeaven</title>
        </head>
        <body>
            <div class="titleDiv">
                <h1 class="title">The SolarSystem</h1>
            </div>
            <div class="Main_container">
                <div class ="planet">
                    <a href="planets/Mercury.html" title="Mercury">
                        <img id ="imagesize_mercury" src="https://i0.wp.com/freepngimages.com/wp-content/uploads/2016/05/planet-mercury-transparent-background.png?fit=680%2C680">
                    </a>
                </div>
                <div class ="planet">
                    <a href="planets/Venus.html" title="Venuus">
                        <img id ="imagesize_venus" src="venus.jpg">
                    </a>
                </div>
                <div class ="planet">
                    <a href="planets/Earth.html" title="Earth">
                        <img id ="imagesize_Earth" src="https://pngimg.com/uploads/earth/earth_PNG16.png">
                    </a>
                </div>
                <div class="planet">
                    <a href="moons/Moon.html" title="Moon">
                        <img id ="imagesize_Moon" src="https://images.squarespace-cdn.com/content/v1/53d5b207e4b0125510c263aa/1583782394966-25O4NLM86SRSM3X34Z9W/ke17ZwdGBToddI8pDm48kDjIMLKcq38uiIaARu813H5Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpy0oV5tgK88lyQv20bgMBxa0R3MJHQ9up4OBuJdMz-LmzPrhMt5z4qA5ORYwI5oXUo/31-319839_moon-png-transparent-background-full-moon-png-png+%281%29.png">
                    </a>
                </div>
                <div class ="planet">
                    <a href="planets/Mars.html" title="Mars">
                        <img id ="imagesize_mars" src="https://pngimg.com/uploads/mars_planet/mars_planet_PNG36.png">
                    </a>
                </div>
                <div class ="planet">
                    <a href="planets/Jupiter.html" title="Jupiter">
                        <img id ="imagesize_jupiter" src="https://www.nicepng.com/png/full/278-2788536_het-zonnestelsel-planet-has-the-most-moons.png">
                    </a>
                </div>
                <div class="planet">
                    <a href="moons/Europa.html" title="Europa">
                        <img id="imagesize_europa" src="https://vignette.wikia.nocookie.net/thesolarsystem6361/images/a/ab/Europa_spacepedia.png/revision/latest?cb=20180301165224">
                    </a>
                </div>
                <div class="planet">
                    <a href="moons/Ganymede.html" title="Ganymede">
                        <img id="imagesize_ganymede" src="https://i.pinimg.com/originals/9e/5e/0f/9e5e0f4d80f2be4eed2da191d30e52a9.png">
                    </a>
                </div>
                <div class="planet">
                    <a href="moons/Io.html" title="Io">
                        <img id="imagesize_io" src="moons/Io-planet.png">
                    </a>
                </div>
                <div class="planet">
                    <a href="moons/Callisto.html" title="Callisto">
                        <img id="imagesize_callisto" src="https://vignette.wikia.nocookie.net/thesolarsystem6361/images/e/ee/Callisto_spacepedia.png/revision/latest/scale-to-width-down/340?cb=20180301165343">
                    </a>
                </div>
                <div class ="planet">
                    <a href="planets/Saturn.html" title="Saturn">
                        <img id ="imagesize_saturn" src="https://i.dlpng.com/static/png/5080251-hd-saturn-planet-freetoedit-planet-transparent-png-image-saturn-png-994_406_preview.png">
                    </a>
                </div>
                <div class ="planet">
                    <a href="planets/Uranus.html" title="Uranus">
                        <img id ="imagesize_uranus" src="https://upload.wikimedia.org/wikipedia/commons/3/32/3D_Uranus.png">
                    </a>
                </div>
                <div class="planet">
                    <a href="planets/Neptune.html" title="Neptune">
                        <img id ="imagesize_neptune" src="https://i.ya-webdesign.com/images/neptune-png-image.png">
                    </a>
                </div>
            </div>
            <link rel="stylesheet" href="index_style.css">
        </body>
        </html>
    `;
    response.end(template);
 
});
app.listen(3000);