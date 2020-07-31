// import "./home.js"
// import "../skills.js"
import "./home.js"

const root = document.documentElement;

const location = window.location.href;


const getColor = function () {
        

    const req = new XMLHttpRequest();   


    //console.log(location + "/color")

    req.open('GET', location + "../color", true);
    req.send();

    req.onload = () => {
        if (req.readyState == 4) {
            if (req.status == 200) {
                try {

                    const resJson = JSON.parse(req.responseText);

                    //console.log(resJson)

                    for (var color in resJson) {
                        //console.log("--" + color, resJson[color])
                        root.style.setProperty("--" + color, resJson[color]);
                    }
                    
                } catch (e) {
                    //console.log("error")
                }
            }
            else {
                //console.log(404)

            }
        }   
        
    }

}

window.onload = function() {
    getColor();
};




//console.log("App")