const configFile = "./config_theme.json",
    CheckBoxElement = document.getElementById('showCircle'),
    PlaySoundElement = document.getElementById('playSound'),
    BgOverlayInputElement = document.getElementById('bgOverlayColor'),
    BgOverlayElement = document.getElementsByClassName("bg_overlay")[0],
    LiveCircle = document.getElementsByClassName("bg_isActive")[0];
window.addEventListener("load", function() {
    const fs = require("fs");
    if(fs.existsSync(configFile)) {
        fs.readFile(configFile, function read(err, data) {
            if (err) throw err;
            var config = JSON.parse(data);
            BgOverlayInputElement.value = BgOverlayElement.style.background = config.bg_overlay;
            CheckBoxElement.checked = config.showCircle;
            PlaySoundElement.checked = config.playSound;
            if(config.showCircle) LiveCircle.style.display = "none"; 
            else if (!config.showCircle) LiveCircle.style.display = "";
        });
    } else {
        BgOverlayInputElement.value = "rgba(0,0,0,0.4)";
        BgOverlayElement.style.background = BgOverlayInputElement.value;
        CheckBoxElement.checked = false;
        PlaySoundElement.checked = false;
        if(CheckBoxElement.checked) LiveCircle.style.display = "none";
        else if (!CheckBoxElement.checked) LiveCircle.style.display = "";
    }
});
function setThemeConfig() {
    const fs = require("fs");
    BgOverlayElement.style.background = BgOverlayInputElement.value;
    if(CheckBoxElement.checked) LiveCircle.style.display = "none";
    else if (!CheckBoxElement.checked) LiveCircle.style.display = "";
    fs.writeFile(configFile,JSON.stringify({"showCircle": CheckBoxElement.checked,"bg_overlay": BgOverlayInputElement.value, "playSound": PlaySoundElement.checked}), (err) => { if(err) throw err; });
}