let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');

let jsonDatabase = [
  {
    "name" : "HolyBang",
    "color" : "#8467D7",
    "picture_url" : "holybang1.jfif",
    "members" : ["HoneyJ", "Lo-A", "Jane", "Hertz", "Taro", "Mull", "Belle", "Eevee", "Becca"],
  },
  {
    "name" : "Hook",
    "color" : "#ff0000",
    "picture_url" : "hook1.jpg",
    "members" : ["Aiki", "Rageon", "Odd", "Born", "Hyowoo", "Ji Yeon Seong", "Yoon Kyung Seon"],
  },
  {
    "name" : "LaChica",
    "color" : "#ffb8cc",
    "picture_url" : "lachica1.jpeg",
    "members" : ["Gabee", "Rian", "Simeez", "Peanut", "H_1"],
  },
  {
    "name" : "CocaNButter",
    "color" : "#FCEA4C",
    "picture_url" : "coca1.jfif",
    "members" : ["Rihey", "ZSUN", "GAGA", "BICKI", "JILLIN", "BEEBI"],
  },
  {
    "name" : "YGX",
    "color" : "#efefef", // #fff?
    "picture_url" : "ygx1.png",
    "members" : ["Leejung", "Yeojin", "Jihyo", "Yell", "Isak"],
  },
  {
    "name" : "PROWDMON",
    "color" : "#f86704",
    "picture_url" : "prowdmon1.jfif",
    "members" : ["Monika", "LipJ", "KayDay", "Ham.G", "Dia", "Rosy", "Hyeily"],
  },
  {
    "name" : "WANT",
    "color" : "#00F2C6",
    "picture_url" : "want1.jpg",
    "members" : ["Hyojin Choi", "Chaeyeon Lee", "Moana", "Rozalin", "Emma"],
  },
  {
    "name" : "WayB",
    "color" : "#7ED0FE",
    "picture_url" : "wayb1.jpg",
    "members" : ["NO:ZE", "Leesu", "Gyurian", "Ansso", "Dolla"],
  }
];

for (var i = 0; i < jsonDatabase.length; i++) {
  createElement(jsonDatabase[i]);
};

function createElement(incomingJSON) {
  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['color'];
  newContentElement.classList.add('contentItem');

  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['name'];
  newContentElement.appendChild(newContentHeading);

  // let newFlagImage = document.createElement("IMG");
  // newFlagImage.classList.add("footerImage")
  // newFlagImage.src = incomingJSON['flag'];
  // let newVideoLink = document.createElement("A");
  // newVideoLink.setAttribute("href", incomingJSON['video']);
  // newVideoLink.appendChild(newFlagImage);
  // newContentElement.appendChild(newVideoLink);

  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['picture_url'];
  newContentElement.appendChild(newImage);

  let newMemberList = document.createElement("UL");
  newContentElement.appendChild(newMemberList);

  for (var i = 0; i < incomingJSON['members'].length; i++) {
    var currentMemberString = incomingJSON['members'][i];
    var newMemberItem = document.createElement("LI");

    if (i == 0) {
      newMemberItem.style.fontWeight = "bold";
    }

    newMemberItem.innerText = currentMemberString;
    newMemberList.appendChild(newMemberItem);
  };

  contentGridElement.appendChild(newContentElement);
}

/*
 영상 링크 임베드
 떨어진 팀들?
 장르? 컬러 오브 크루!!
*/
