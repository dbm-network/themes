window.addEventListener("load",()=> {
    const configFile = "./config_theme.json";
    var prevbodyclasslist = document.body.className,
    dont;
    var fileStream = require('fs');
    window.setInterval(() => {
        fileStream.readFile(configFile, function read(err, data) {
            if (err) throw err;
            var config = JSON.parse(data);
            if(config.playSound) {
                /*When Bot is Running*/ 
                var now = document.body.className;
                if(prevbodyclasslist != now) {
                    prevbodyclasslist = document.body.className;
                    if(now.includes("running")) {
                        if(!dont) {
                            dont=true;
                            $("#bot_onrun")[0].play();
                        }
                        
                    } else dont=false;
                }
                
            }
        });
    },100);

});