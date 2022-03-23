// Global
var raw_entries = [];
let currObj = "obj01";
let currCat = "cat01";
function flip(b) {return b = !b;}
let objInfo = "Equipment Info";
const d = new Date();
// Global



// Reading JSON
let s = JSON.parse(sample);
for (let i = 0; i < s.length; i += 1) {raw_entries.push(s[i].Name);}
let objMap = new Map([]);
for (let i = 0; i < raw_entries.length; i += 1) {objMap.set(raw_entries[i], s[i]);}
// Reading JSON



// Dropdown List
function dropList(name, a) {
    currCat = name;
    dropDown(a);
    console.log(currCat);
}

function dropDown(a) {
    let li = a.parentElement,
        submenu = li.getElementsByTagName('ul')[0];
    if (submenu.style.display == "block") {
        submenu.style.display = "none";
    } else {
        submenu.style.display = "block";
    }
    return false;
}

function objSelect(name) {
    let location = objMap.get(name).URI;
    objInfo = location;
    currObj = name;
    console.log(currObj);
    addPoint(pointMap.get(location).x, pointMap.get(location).y);
}
// Dropdown List



// Change Image
function changeImage(img) {
    removePoint();
    // needs improvement with regex
    // document.querySelector('.location').textContent = img.substr(4, 7);
    document.querySelector('.image').src = img;
}
// Change Image



// Add/Remove/Edit Points
const pointMap = new Map([
  ["location1", {x:250, y:250}],
  ["location2", {x:250, y:500}],
  ["location3", {x:500, y:500}],
  ["location4", {x:500, y:250}],
  ["location5", {x:375, y:375}],
  ["location6", {x:400, y:600}]
]);

let pointStatus = false;
let childStatus = false;
let hasCircle = false
function pointStatusChange() {
    childStatus = false;
    pointStatus = !pointStatus;
}

document.onclick = function(e) {
    if (pointStatus && childStatus) {
        clearStyle();
        addPoint(e.pageX - 10, e.pageY - 10);
        pointStatus = false;
        childStatus = false;
    }
    childStatus = true;
}

function addPoint(x, y) {
    changeImage('img/Plan 00.png');
    var button = document.createElement('div');
    button.style.position = 'absolute';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
    button.innerHTML = '<div class="circle"></br>' + objInfo + '</div>';
    removePoint();
    document.body.appendChild(button);
    hasCircle = true
}

function freeAdd(name, num) {
    var button = document.createElement('div');
    button.style.position = 'absolute';
    button.style.left = pointMap.get(objMap.get(name).URI).x + 'px';
    button.style.top = pointMap.get(objMap.get(name).URI).y + 'px';
    button.innerHTML = '<div class="circle">' + num + '</br>' + objMap.get(name).URI + '</div>';
    document.body.appendChild(button);
    hasCircle = true
}

function removePoint() {
    document.querySelectorAll('.circle').forEach(e => e.remove());
}
// Add/Remove/Edit Points



// Add and Edit Buttons
const add = document.querySelector('.add');
const edit = document.querySelector('.edit');

add.addEventListener('click', function onClick() {
    if (pointStatus) {
        add.classList.remove("add");
        add.classList.add("clkdadd");
    } else {
        clearStyle();
    }
})

edit.addEventListener('click', function onClick() {
  if (pointStatus) {
        edit.classList.remove("edit");
        edit.classList.add("clkdedit");
    } else {
        clearStyle();
    }
})

function clearStyle() {
    add.classList.add("add");
    add.classList.remove("clkdadd");
    edit.classList.add("edit");
    edit.classList.remove("clkdedit");
}
// Add and Edit Buttons



// Pause & Switch
const pause = document.querySelector('.pause');
pause.addEventListener('click', function onClick() {
    if (paused) {
        pause.classList.remove("pause");
        pause.classList.add("clkdpause");
    } else {
        pause.classList.add("pause");
        pause.classList.remove("clkdpause");
    }
})
let paused = false;
function stopPlot() {
    paused = !paused;
}
// Pause & Switch

// Search Engine
var word_mapping = [["Ø", "phi"], ["µm", "um"], ["°", "deg"]];
var entries = [];

var onSearchHandler = function(e) {
    removePoint();

  words = searchbar.value.toLowerCase();

  if (!words) {
    autofill.innerHTML = "";
    for (let n = 0; n < entries.length; n += 1) {
        autofill.innerHTML += "<div class=\"search-result\"><a href=\"javascript: void();\" onclick=\"return objSelect('" + raw_entries[n] + "')\">" + raw_entries[n] + "</a></div>";
    }
    return;
  }

  tokens = words.split(" ");
  autofill_results = [];
  autofill_list = [];

  for (let i = 0; i < tokens.length; i += 1) {
    if (!tokens[i]) continue;

    for (let n = 0; n < entries.length; n += 1) {
      let pos = entries[n].indexOf(tokens[i]);
      if (pos != -1) {
        let display_text = raw_entries[n].substring(0, pos) + "<span class=\"highlight\">" + raw_entries[n].substring(pos, pos + tokens[i].length) + "</span>" + raw_entries[n].substring(pos + tokens[i].length);
        autofill_list.push(raw_entries[n])
        autofill_results.push(display_text);
      }
    }
  }

    autofill.innerHTML = "";
    for (let i = 0; i < autofill_results.length; i += 1) {
        autofill.innerHTML += "<div class=\"search-result\"><a href=\"javascript: void();\" onclick=\"return objSelect('" + autofill_list[i] + "')\">" + autofill_results[i] + "</a></div>";
    }
    if (autofill_results.length <= 5) {
        changeImage('img/Plan 00.png');
        for (let i = 0; i < autofill_results.length; i += 1) {
            freeAdd(autofill_list[i], i + 1);
        }
    }
}

window.onload = function() {
  searchbar.addEventListener("keyup", onSearchHandler);

  for (let n = 0; n < raw_entries.length; n += 1) {
    entries[n] = raw_entries[n];
    for (let i = 0; i < word_mapping.length; i += 1) {
      entries[n] = entries[n].replace(word_mapping[i][0], word_mapping[i][1]);
    }
    entries[n] = entries[n].toLowerCase()
  }

  onSearchHandler();
}
// Search Engine



// Data Plot
var layout = {
    colorway: ['red', 'green', 'blue', 'red', 'green', 'blue', 'red', 'green', 'blue'],
    grid: {rows: 3, columns: 1, roworder: 'bottom to top'},
    autosize: false, width: 445, height: 900, paper_bgcolor: 'ffffff', plot_bgcolor: 'ffffff',
    margin: {l: 35, r: 25, b: 30, t: 20, pad: 0},
    annotations: [
    {text: "Temperature", font: {size: 20, color: 'black'}, showarrow: false, align: 'center', x: 0, y: 1.1, xref: 'x1 domain', yref: 'y1 domain'},
    {text: "Humidity", font: {size: 20, color: 'black'}, showarrow: false, align: 'center', x: 0, y: 1.1, xref: 'x2 domain', yref: 'y2 domain'},
    {text: "Noise", font: {size: 20, color: 'black'}, showarrow: false, align: 'center', x: 0, y: 1.1, xref: 'x3 domain', yref: 'y3 domain'}
    ],
    xaxis1: {showgrid: false, showticklabels: false, matches: 'x3', zeroline: false},
    xaxis2: {showgrid: false, showticklabels: false, matches: 'x3', zeroline: false},
    xaxis3: {showgrid: false, zeroline: false, title: {text: 'Time', font: {family: 'Arial, Helvrtica, sans-serif', size: 10, color: '#000000'}}},
    yaxis1: {showgrid: false, title: {text: '°C', font: {family: 'Arial, Helvrtica, sans-serif', size: 10, color: '#000000'}}},
    yaxis2: {showgrid: false, zeroline: false, title: {text: '%', font: {family: 'Arial, Helvrtica, sans-serif', size: 10, color: '#000000'}}},
    yaxis3: {showgrid: false, zeroline: false, title: {text: 'dB', font: {family: 'Arial, Helvrtica, sans-serif', size: 10, color: '#000000'}}}
    };

var data = [
      {x: [], y: [], xaxis: "x1", yaxis: "y1", legendgroup: "1", name: "Room 1", mode: "lines", type: "scatter"},
      {x: [], y: [], xaxis: "x1", yaxis: "y1", legendgroup: "2", name: "Room 2", mode: "lines", type: "scatter"},
      {x: [], y: [], xaxis: "x1", yaxis: "y1", legendgroup: "3", name: "Room 3", mode: "lines", type: "scatter"},
      {x: [], y: [], xaxis: "x2", yaxis: "y2", legendgroup: "1", name: "Room 1", mode: "lines", type: "scatter"},
      {x: [], y: [], xaxis: "x2", yaxis: "y2", legendgroup: "2", name: "Room 2", mode: "lines", type: "scatter"},
      {x: [], y: [], xaxis: "x2", yaxis: "y2", legendgroup: "3", name: "Room 3", mode: "lines", type: "scatter"},
      {x: [], y: [], xaxis: "x3", yaxis: "y3", legendgroup: "1", name: "Room 1", mode: "lines", type: "scatter"},
      {x: [], y: [], xaxis: "x3", yaxis: "y3", legendgroup: "2", name: "Room 2", mode: "lines", type: "scatter"},
      {x: [], y: [], xaxis: "x3", yaxis: "y3", legendgroup: "3", name: "Room 3", mode: "lines", type: "scatter"},
      ];

let numPlots = 3;
let numRooms = 3;

function getData() {return Math.random();}

let grow = 0;
function growth() {
    grow += 1;
    return grow;
}

Plotly.plot('chart', data, layout);

setInterval(function() {
    for (var i = 0; i < numPlots; i += 1) {
        for (var j = 0; j < numRooms; j += 1){
            data[i * numPlots + j].x.push(growth());
            data[i * numPlots + j].y.push(getData());
            data[i * numPlots + j].x = data[i * numPlots + j].x.slice(-10);
            data[i * numPlots + j].y = data[i * numPlots + j].y.slice(-10);
        }
    }

    if (!paused) {
        Plotly.redraw('chart');
    }
}, 5000);
// Data Plot









