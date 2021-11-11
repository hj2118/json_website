let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGridElement');

let jsonDatabase = [
  {
    "name" : "HolyBang",
    "flag" : "holybang.png",
    "color" : "#8467D7",
    "picture_url" : "holybang1.jfif",
    "leader" : "HoneyJ",
    "members" : ["Lo-A", "Jane", "Hertz", "Taro", "Mull", "Belle", "Eevee", "Becca"]
  },
  {
    "name" : "Hook",
    "flag" : "hook.jpg",
    "color" : "#ff0000",
    "picture_url" : "hook1.jpg",
    "leader" : "Aiki",
    "members" : ["Rageon", "Odd", "Born", "Hyowoo", "Ji Yeon Seong", "Yoon Kyung Seon"]
  },
  {
    "name" : "LaChica",
    "flag" : "lachica.jfif",
    "color" : "ffb8cc",
    "picture_url" : "lachica1.jpeg",
    "leader" : "Gabee",
    "members" : ["Rian", "Simeez", "Peanut", "H_1"]
  },
  {
    "name" : "CocaNButter",
    "flag" : "coca.png",
    "color" : "#FCEA4C",
    "picture_url" : "coca1.jfif",
    "leader" : "Rihey",
    "members" : ["ZSUN", "GAGA", "BICKI", "JILLIN", "BEEBI"]
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

  let newFlagImage = document.createElement("IMG");
  newFlagImage.classList.add("footerImage")
  newFlagImage.src = incomingJSON['flag'];
  newContentElement.appendChild(newFlagImage);

  let newContentSubhead = document.createElement("H4");
  newContentSubhead.innerText = "Leader: " + incomingJSON['leader'];
  newContentElement.appendChild(newContentSubhead);

  let newMemberList = document.createElement("UL");
  newContentElement.appendChild(newMemberList);

  for (var i = 0; i < incomingJSON['members'].length; i++) {
    var currentMemberString = incomingJSON['members'][i];
    var newMemberItem = document.createElement("LI");
    newMemberItem.innerText = currentMemberString;
    newMemberList.appendChild(newMemberItem);
  };

  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['picture_url'];
  newContentElement.appendChild(newImage);

  contentGridElement.appendChild(newContentElement);
}
