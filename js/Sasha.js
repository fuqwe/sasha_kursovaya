var Storage = {
    "ManUnited": {
        "name": "Manchester United",
        "coach": "Луи Ван Гал",
        "stadion": "Олд Траффорд",
        "year": "1878",
        "bImg": "img/main-card/mu.png",
        "logo": "img/main-card/mu-but.png",
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

var blocks = [];

var selection = [];

function TeamCard(arg){
    this.name = arg["name"];
    this.card1 = arg["card1"];
    this.card2 = arg["card2"];
    this.card3 = arg["card3"];
    this.card4 = arg["card4"];
    this.card5 = arg["card5"];
    this.card6 = arg["card6"];
    this.card7 = arg["card7"];
    this.card8 = arg["card8"];
    this.card9 = arg["card9"];
    this.card10 = arg["card10"];
    this.card11 = arg["card11"];
    this.card12 = arg["card12"];
    this.card13 = arg["card13"];
    this.card14 = arg["card14"];
    this.card15 = arg["card15"];
    this.card16 = arg["card16"];
    
    var hidden = document.getElementById("hidden");
    
    var club_info = document.createElement("div");
    club_info.className = "club-info";
    club_info.id = "club-info";
    
    var head = document.createElement("div");
    head.className = "head";
    
    var name = document.createElement("p");
    name.innerHTML = this.name;
    
    var card1 = document.createElement("div");
    card1.className = "card-1 card";
    
    var player1 = document.createElement("p");
    player1.className = "card-player";
    player1.innerHTML = this.card1;
    
    var card2 = document.createElement("div");
    card2.className = "card-2 card";
    
    var player2 = document.createElement("p");
    player2.className = "card-player";
    player2.innerHTML = this.card2;
    
    var card3 = document.createElement("div");
    card3.className = "card-3 card";
    
    var player3 = document.createElement("p");
    player3.className = "card-player";
    player3.innerHTML = this.card3;
    
    var card4 = document.createElement("div");
    card4.className = "card-4 card";
    
    var player4 = document.createElement("p");
    player4.className = "card-player";
    player4.innerHTML = this.card4;
    
    var card5 = document.createElement("div");
    card5.className = "card-5 card";
    
    var player5 = document.createElement("p");
    player5.className = "card-player";
    player5.innerHTML = this.card5;
    
    var card6 = document.createElement("div");
    card6.className = "card-6 card";
    
    var player6 = document.createElement("p");
    player6.className = "card-player";
    player6.innerHTML = this.card6;
    
    var card7 = document.createElement("div");
    card7.className = "card-7 card";
    
    var player7 = document.createElement("p");
    player7.className = "card-player";
    player7.innerHTML = this.card7;
    
    var card8 = document.createElement("div");
    card8.className = "card-8 card";
    
    var player8 = document.createElement("p");
    player8.className = "card-player";
    player8.innerHTML = this.card8;
    
    var card9 = document.createElement("div");
    card9.className = "card-9 card";
    
    var player9 = document.createElement("p");
    player9.className = "card-player";
    player9.innerHTML = this.card9;
    
    var card10 = document.createElement("div");
    card10.className = "card-10 card";
    
    var player10 = document.createElement("p");
    player10.className = "card-player";
    player10.innerHTML = this.card10;
    
    var card11 = document.createElement("div");
    card11.className = "card-11 card";
    
    var player11 = document.createElement("p");
    player11.className = "card-player";
    player11.innerHTML = this.card11;
    
    var replace = document.createElement("div");
    replace.className = "replace";
    
    var card12 = document.createElement("div");
    card12.className = "card-12 card";
    
    var player12 = document.createElement("p");
    player12.className = "card-player";
    player12.innerHTML = this.card12;
    
    var card13 = document.createElement("div");
    card13.className = "card-13 card";
    
    var player13 = document.createElement("p");
    player13.className = "card-player";
    player13.innerHTML = this.card13;
    
    var card14 = document.createElement("div");
    card14.className = "card-14 card";
    
    var player14 = document.createElement("p");
    player14.className = "card-player";
    player14.innerHTML = this.card14;
    
    var card15 = document.createElement("div");
    card15.className = "card-15 card";
    
    var player15 = document.createElement("p");
    player15.className = "card-player";
    player15.innerHTML = this.card15;
    
    var card16 = document.createElement("div");
    card16.className = "card-16 card";
    
    var player16 = document.createElement("p");
    player16.className = "card-player";
    player16.innerHTML = this.card16;
    
    hidden.appendChild(club_info);
    club_info.appendChild(head);
    head.appendChild(name);
    club_info.appendChild(card1);
    card1.appendChild(player1);
    club_info.appendChild(card2);
    card2.appendChild(player2);
    club_info.appendChild(card3);
    card3.appendChild(player3);
    club_info.appendChild(card4);
    card4.appendChild(player4);
    club_info.appendChild(card5);
    card5.appendChild(player5);
    club_info.appendChild(card6);
    card6.appendChild(player6);
    club_info.appendChild(card7);
    card7.appendChild(player7);
    club_info.appendChild(card8);
    card8.appendChild(player8);
    club_info.appendChild(card9);
    card9.appendChild(player9);
    club_info.appendChild(card10);
    card10.appendChild(player10);
    club_info.appendChild(card11);
    card11.appendChild(player11);
    club_info.appendChild(replace);
    replace.appendChild(card12);
    card12.appendChild(player12);
    replace.appendChild(card13);
    card13.appendChild(player13);
    replace.appendChild(card14);
    card14.appendChild(player14);
    replace.appendChild(card15);
    card15.appendChild(player15);
    replace.appendChild(card16);
    card16.appendChild(player16);
};

function TeamBlock(arg){
    this.name = arg["name"];
    this.coach = arg["coach"];
    this.stadion = arg["stadion"];
    this.year = arg["year"];
    this.bImg = arg["bImg"];
    this.logo = arg["logo"];
    
    var main = document.getElementById("main-content");
    
    var main_card = document.createElement("div");
    main_card.className = "main-card";
    
    var name_card = document.createElement("div");
    name_card.className = "name-card";
    name_card.innerHTML = this.name;
    
    var coach = document.createElement("p");
    coach.className = "info-card";
    coach.innerHTML = "Тренер: " + this.coach;
    
    var stadion = document.createElement("p");
    stadion.className = "info-card";
    stadion.innerHTML = "Стадион: " + this.stadion;
    
    var year = document.createElement("p");
    year.className = "info-card";
    year.innerHTML = ">Основан: " + this.year;
    
    var club_info = document.createElement("a");
    club_info.className = "fancybox fanc";
    club_info.setAttribute("href", "#club-info");
    
    var button_info = document.createElement("div");
    button_info.className = "button-info";
    
    var imgLogo = document.createElement("img");
    imgLogo.setAttribute("src", this.logo);
    
    main.appendChild(main_card);
    main_card.appendChild(name_card);
    main_card.appendChild(coach);
    main_card.appendChild(stadion);
    main_card.appendChild(year);
    main_card.appendChild(club_info);
    club_info.appendChild(button_info);
    button_info.appendChild(imgLogo);
}

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

window.onload = function() {
    
    for(var prs in Storage)
    {
        content.push(new TeamCard(Storage[prs]));
    }
    for(var prs in Storage)
    {
        blocks.push(new TeamBlock(Storage[prs]));
    }
    $(".card").click(function(){
        $(this).parent().toggleClass("selected");
        selection.push(this);
        if(selection.length == 2)
            swapBlocks()
    });
};