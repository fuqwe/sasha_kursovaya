var Storage = {
    "ManUnited": {
        "name": "Manchester United",
        "coach": "Луи Ван Гал",
        "stadion": "Олд Траффорд",
        "year": "1878",
        "bImg": "",
        "logo": "",
        "card1": "De Gea",
        "card2": "Shaw",
        "card3": "Blind",
        "card4": "Smalling",
        "card5": "Darmian",
        "card6": "Depay",
        "card7": "Herrera",
        "card8": "Carrick",
        "card9": "Mata",
        "card10": "Rooney",
        "card11": "Martial",
        "card12": "Jones",
        "card13": "Fellaini",
        "card14": "Lingard",
        "card15": "Young",
        "card16": "Bastian",
        "card1Img": "img/players-mu/de-gea.png",
        "card2Img": "img/players-mu/Shaw.png",
        "card3Img": "img/players-mu/Blind.png",
        "card4Img": "img/players-mu/Smalling.png",
        "card5Img": "img/players-mu/Darmian.png",
        "card6Img": "img/players-mu/Depay.png",
        "card7Img": "img/players-mu/Herrera.png",
        "card8Img": "img/players-mu/Carrick.png",
        "card9Img": "img/players-mu/Mata.png",
        "card10Img": "img/players-mu/Rooney.png",
        "card11Img": "img/players-mu/Martial.png",
        "card12Img": "img/players-mu/Jones.png",
        "card13Img": "img/players-mu/Fellaini.png",
        "card14Img": "img/players-mu/Lingard.png",
        "card15Img": "img/players-mu/Young.png",
        "card16Img": "img/players-mu/Bastian.png",
    },
};

var content = [];

var selection = [];
    
function swapBlocks() {
    selection.forEach(function(el) {
        $(el).parent().toggleClass("selected");
    });
    var txt = $(selection[0]).html();
    $(selection[0]).html($(selection[1]).html());
    $(selection[1]).html(txt);
    var img = $(selection[0]).css("background-image");
    $(selection[0]).css({"background-image": $(selection[1]).css("background-image")});
    $(selection[1]).css({"background-image": img});
    selection = [];
}

function TeamCard(arg){
    this.name = arg["name"];
    this.card1 = arg["card1"];
    this.card1 = arg["card2"];
    this.card1 = arg["card3"];
    this.card1 = arg["card4"];
    this.card1 = arg["card5"];
    this.card1 = arg["card6"];
    this.card1 = arg["card7"];
    this.card1 = arg["card8"];
    this.card1 = arg["card9"];
    this.card1 = arg["card10"];
    this.card1 = arg["card11"];
    this.card1 = arg["card12"];
    this.card1 = arg["card13"];
    this.card1 = arg["card14"];
    this.card1 = arg["card15"];
    this.card1 = arg["card16"];
    
    var hidden = document.getElementById("hidden");
    
    var club_info = document.createElement("div");
    club_info.className = "club-info";
    club_info.id = "club-info";
    
    var head = document.createElement("div");
    head.className = "head";
    
    var name = document.createElement("p");
    name.innerHTML = this.name;
    
    
};

window.onload = function() {
    for(var prs in Storage)
    {
        content.push(new TeamCard(Storage[prs]));
    }
    $(".card").click(function(){
        $(this).parent().toggleClass("selected");
        selection.push(this);
        if(selection.length == 2)
            swapBlocks()
    });
};