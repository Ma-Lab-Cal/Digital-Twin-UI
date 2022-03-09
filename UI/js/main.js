// Global
let maxX = 10000;
let maxY = 10000;
let currObj = "obj01";
let currCat = "cat01";
function flip(b) {
    return b = !b;
}
// Global



// Reading JSON
let s = JSON.parse(sample);
console.log(s[0].name);
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

function objClick(name, x, y) {
    currObj = name;
    addPoint(x, y);
    console.log(currObj);
}

function addPoint(x, y) {
    changeImage('img/Plan 00.png');
    var button = document.createElement('div');
    button.style.position = 'fixed';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
    button.innerHTML = '<div class="circle"></div>';
    removePoint();
    if (x < maxX && y < maxY) {
        document.body.appendChild(button);
        hasCircle = true
    }
}

function removePoint() {
    if (hasCircle) {
        document.body.removeChild(document.body.lastChild);
        hasCircle = false;
    }
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



// Data Plot
var layout = [
    {
        autosize: false,
        width: 445,
        height: 300,
        margin: {
            l: 35,
            r: 25,
            b: 30,
            t: 45,
            pad: 0
        },
        paper_bgcolor: 'ffffff',
        plot_bgcolor: '#dcdcdc',
        title: {
        text:'Temperature',
        font: {
            family: 'Arial, Helvrtica, sans-serif',
            size: 30
        },
        xref: 'paper',
        x: 0.05,
        },
        xaxis: {
        title: {
            text: 'Time',
            font: {
                family: 'Arial, Helvrtica, sans-serif',
                size: 10,
                color: '#000000'
            }
        },
        },
        yaxis: {
        title: {
            text: '°C',
            font: {
                family: 'Arial, Helvrtica, sans-serif',
                size: 10,
                color: '#000000'
            }
        }
        }
    },
    {
        autosize: false,
        width: 445,
        height: 300,
        margin: {
            l: 35,
            r: 25,
            b: 30,
            t: 45,
            pad: 0
        },
        paper_bgcolor: 'ffffff',
        plot_bgcolor: '#dcdcdc',
        title: {
        text:'Humidity',
        font: {
            family: 'Arial, Helvrtica, sans-serif',
            size: 30
        },
        xref: 'paper',
        x: 0.05,
        },
        xaxis: {
        title: {
            text: 'Time',
            font: {
                family: 'Arial, Helvrtica, sans-serif',
                size: 10,
                color: '#000000'
            }
        },
        },
        yaxis: {
        title: {
            text: '%',
            font: {
                family: 'Arial, Helvrtica, sans-serif',
                size: 10,
                color: '#000000'
            }
        }
        }
    },
    {
        autosize: false,
        width: 445,
        height: 300,
        margin: {
            l: 35,
            r: 25,
            b: 30,
            t: 45,
            pad: 0
        },
        paper_bgcolor: 'ffffff',
        plot_bgcolor: '#dcdcdc',
        title: {
        text:'Noise',
        font: {
            family: 'Arial, Helvrtica, sans-serif',
            size: 30
        },
        xref: 'paper',
        x: 0.05,
        },
        xaxis: {
        title: {
            text: 'Time',
            font: {
                family: 'Arial, Helvrtica, sans-serif',
                size: 10,
                color: '#000000'
            }
        },
        },
        yaxis: {
        title: {
            text: 'dB',
            font: {
                family: 'Arial, Helvrtica, sans-serif',
                size: 10,
                color: '#000000'
            }
        }
        }
    },
];

var data = [
    [
      {
        x: [],
        y: [],
        name: "Room 1",
        mode: "lines",
        type: "scatter",
      },
      {
        x: [],
        y: [],
        name: "Room 2",
        mode: "lines",
        type: "scatter",
      },
      {
        x: [],
        y: [],
        name: "Room 3",
        mode: "lines",
        type: "scatter",
      },
    ],
    [
      {
        x: [],
        y: [],
        name: "Room 1",
        mode: "lines",
        type: "scatter",
      },
      {
        x: [],
        y: [],
        name: "Room 2",
        mode: "lines",
        type: "scatter",
      },
      {
        x: [],
        y: [],
        name: "Room 3",
        mode: "lines",
        type: "scatter",
      },
    ],
    [
      {
        x: [],
        y: [],
        name: "Room 1",
        mode: "lines",
        type: "scatter",
      },
      {
        x: [],
        y: [],
        name: "Room 2",
        mode: "lines",
        type: "scatter",
      },
      {
        x: [],
        y: [],
        name: "Room 3",
        mode: "lines",
        type: "scatter",
      },
    ],
];

let numPlots = 3;
let numRooms = 3;

function getData() {
    return Math.random();
}

let grow = 0;
function growth() {
    grow ++;
    return grow;
}

for (var i = 0; i < numPlots; i ++) {
        Plotly.plot('chart' + i, data[i], layout[i]);
    }

setInterval(function() {
    for (var i = 0; i < numPlots; i ++) {
        for (var j = 0; j < numRooms; j ++){
            data[i][j].x.push(growth());
            data[i][j].y.push(getData());
            data[i][j].x = data[i][j].x.slice(-10);
            data[i][j].y = data[i][j].y.slice(-10);
        }
    }

    if (!paused) {
        for (var i = 0; i < numPlots; i ++) {
            Plotly.redraw('chart' + i);
        }
    }
}, 1000);
// Data Plot



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
var word_mapping = [
      ["Ø", "phi"],
      ["µm", "um"],
      ["°", "deg"]
    ]

var raw_entries = [
  "Raspberry Pi 4 Computer Model B",
  "Adafruit FT232H Breakout - General Purpose USB to GPIO, SPI, I2C - USB C & Stemma QT",
  "Adafruit Feather M4 Express - Featuring ATSAMD51 - ATSAMD51 Cortex M4",
  "Adafruit LSM6DS33 + LIS3MDL - 9 DoF IMU with Accel / Gyro / Mag - STEMMA QT Qwiic",
  "Adafruit BMP280 I2C or SPI Barometric Pressure & Altitude Sensor - STEMMA QT",
  "Adafruit LIS2MDL Triple Axis Magnetometer",
  "Adafruit AirLift FeatherWing – ESP32 WiFi Co-Processor",
  "Adafruit Ethernet FeatherWing",
  "Adafruit Triple-axis Magnetometer - LIS3MDL - STEMMA QT / Qwiic",
  "Adafruit Feather STM32F405 Express",
  "Adafruit Feather nRF52840 Express",
  "NeoPixel FeatherWing - 4x8 RGB LED Add-on For All Feather Boards",
  "Adafruit DS3231 Precision RTC Breakout",
  "Adafruit 9-DOF LSM9DS1 Breakout Board - STEMMA QT / Qwiic",
  "Triple-axis Accelerometer+Magnetometer (Compass) Board - LSM303",
  "Assembled Adafruit FeatherWing OLED - 128x32 OLED Add-on For Feather",
  "Adafruit BME680 - Temperature, Humidity, Pressure and Gas Sensor - STEMMA QT",
  "Adafruit MCP4728 Quad DAC with EEPROM - STEMMA QT / Qwiic",
  "ADS1115 16-Bit ADC - 4 Channel with Programmable Gain Amplifier",
  "WitMotion High-Precision RM3100 Military-grade Magnetometer Sensor Magnetic Field Module Digital Electronic Compass For MCU",
  "Adafruit ItsyBitsy nRF52840 Express - Bluetooth LE",
  "Adafruit Feather nRF52840 Sense",
  "CP30Q CP30Q: 30 mm to 30 mm Cage System Snap-On Right-Angle Adapter",
  "CSNK100: Kinematic Nosepiece for 1 Objective, M32 x 0.75 Threads, 60 mm Cage Compatible",
  "RM1FA: 1\" Construction Cube with 8-32 Tapped Holes",
  "CA2106: RG-174/U Coaxial Cable, Screw Terminal Pins to BNC Female, 6\" (152.5 mm)",
  "FBH1400-12: Premium Bandpass Filter, Ø25 mm, CWL = 1400 nm, FWHM = 12 nm",
  "FBH1500-12: Premium Bandpass Filter, Ø25 mm, CWL = 1500 nm, FWHM = 12 nm",
  "FBH1600-12: Premium Bandpass Filter, Ø25 mm, CWL = 1600 nm, FWHM = 12 nm",
  "FKBV40: Visible Hard-Coated Bandpass Filter Kit (40 nm FWHM), Mounted, Set of 10",
  "RXM38AF: Single Mode Ultrafast Receiver, 800 - 1650 nm, 45 kHz - 38 GHz, FC/PC",
  "BP209IR1/M: Dual Scanning Slit Beam Profiler, 500 - 1700 nm, Ø2.5 µm - Ø9 mm, Metric",
  "BP209IR1: Dual Scanning Slit Beam Profiler, 500 - 1700 nm, Ø2.5 µm - Ø9 mm",
  "M450LP2: 450 nm, 2118.1 mW (Min) Mounted LED, 2000 mA",
  "M450D4: 450 nm, 2118.1 mW (Min) LED on Metal-Core PCB, 2000 mA",
  "PA4FL: Piezo Chip, 150 V, 6.1 µm Displacement, 5.0 x 5.0 x 5.0 mm, Bare Narrow Electrodes",
  "P3-980PMP-2: High-ER PM Patch Cable, PANDA, 980 nm, FC/APC, 2 m",
  "ERSCB05-P4: Rod Adapter for Ø6 mm ER Rods, L = 0.50\", 4 Pack",
  "N8S0340: 8-32 Stainless Steel Nut, 50 Pack",
  "SS4MS10: M4 x 0.7 Stainless Steel Setscrew, 10 mm Long, 50 Pack",
  "M1450L4: 1450 nm, 81.8 mW (Min) Mounted LED, 1000 mA",
  "M1450F1: 1450 nm, 0.86 mW (Min), Fiber-Coupled LED, 1000 mA, SMA",
  "KPS201: 15 V, 2.66 A Power Supply Unit with 3.5 mm Jack Connector for One K- or T-Cube",
  "AOK8/M: Adaptive Optics Kit with Protected Silver-Coated Piezoelectric DM (40 Actuators) and CMOS Shack-Hartmann WFS, Metric",
  "ZBE21: 1X - 4X UVFS Zoom Beam Expander, 980 - 1130 nm V Coating",
  "TC300: Heater Temperature Controller",
  "I405R5: 45° Faraday Rotator, CWL = 405 nm",
  "M30X/M: Kinesis® 30 mm Motorized Linear Translation Stage, M6 x 1.0 Tapped Holes",
  "CFC2A-C: Adjustable Fiber Collimator, FC/APC, f = 2.0 mm, 1050 - 1700 nm AR Coating",
  "CV2G07AE: 700 µL Enhanced Chemical Resistance Micro Cuvette with Stopper, Borosilicate Glass, 2 mm Path Length, 2 Pack",
  "GPXM45: GPX Insert with 45 Degree Mirror",
  "LCP33/M: 30 mm to 60 mm Cage Plate Adapter, M4 Tap",
  "NDC-100C-2-B: Unmounted Continuously Variable ND Filter, Ø100 mm, OD: 0.04 - 2.0, ARC: 650 - 1050 nm",
  "LCM10: CO2 Laser Fiber Cutter",
  "LCM10CF: Replacement Carbon Air Filters for LCM10 Laser Cutter, 4 Pack",
  "NDC-25C-2M-B: Mounted Continuously Variable ND Filter, Ø25 mm, OD: 0.04 - 2.0, ARC: 650 - 1050 nm",
  "M280L6: 280 nm, 78 mW (Min) Mounted LED, 500 mA",
  "2P10: Input Port Plug for Ø50 mm Integrating Sphere",
  "QSLB1: Base and Riser for Q-Switched Picosecond Microchip Laser",
  "POLARIS-K2VS2L: Polaris® Left-Handed Ø2\" Mirror Mount, 2 Vertical-Drive Hex Adjusters, Monolithic Optic Retention",
  "POLARIS-K2VS2: Polaris® Right-Handed Ø2\" Mirror Mount, 2 Vertical-Drive Hex Adjusters, Monolithic Optic Retention",
  "C280TMD-1064: f = 18.4 mm, NA = 0.2, Mounted Aspheric Lens, AR: 1064 nm",
  "C110TMD-1064: f = 6.2 mm, NA = 0.4, Mounted Aspheric Lens, AR: 1064 nm",
  "CC126MU: Kiralux 12.3 MP Monochrome CMOS Camera, Hermetically Sealed Cooled Package, USB 3.0 Interface, 1/4\"-20 Taps",
  "MCWHLP2: 6500 K, 942 mW (Min), Mounted LED, 1300 mA",
  "M430F1: 430 nm, 5.3 mW (Min) Fiber-Coupled LED, 500 mA, SMA",
  "ECH1V: Ø1.0 mm End-Cap Holder for Vacuum Suction",
  "RSBC1/M: Raman Spectroscopy Kit, Cuvette Front End, Metric",
  "RSBR1/M: Raman Spectroscopy Kit, Reflective Front End, Metric",
  "RSBC1: Raman Spectroscopy Kit, Cuvette Front End, Imperial",
  "RSB1: Raman Spectroscopy Kit Base Unit with Coded Aperture for 785 nm Excitation and 815 nm to 915 nm Detection, Imperial",
  "OC3SM2: Optics Case, 3.07\" Canister Inner Diameter, Internal SM2-Threaded (2.035\"-40) Lid, Fits Objectives up to 75 mm Long",
  "P100MB: Ø1\" Mounted Pinhole, 100 ± 4 µm Pinhole Diameter, Molybdenum",
  "P75HMB: Ø1/2\" Mounted Pinhole, 75 ± 3 µm Pinhole Diameter, Molybdenum",
  "MGR6N: MEMS Grating Modulator, 600 - 1100 nm, Ø6 mm Clear Aperture",
  "LFELSC8: Transparent Strip Curtain Kit for Short Side of LFE1220 Frame",
  "CPMA4: Snap-On 30 mm Cage Mounting Bracket, 8-32 Tap",
  "WW11508-C: Ø1.5\" Wedged N-BK7 Window, AR Coating: 1050 - 1700 nm",
  "HPA50XAB: 50X High-Resolution Plan Apochromat VIS+ Objective, 400 - 1100 nm, 0.75 NA, 5.0 mm WD",
];

var entries = [];

var onSearchHandler = function(e) {
  words = searchbar.value.toLowerCase();

  if (!words) {
    autofill.innerHTML = "";
    for (let n=0; n<entries.length; n+=1) {
      autofill.innerHTML += "<div class=\"search-result\">" + raw_entries[n] + "</div>";
    }
    return;
  }

  tokens = words.split(" ");

  console.log(tokens);

  autofill_results = [];

  for (let i=0; i<tokens.length; i+=1) {
    if (!tokens[i]) continue;

    for (let n=0; n<entries.length; n+=1) {
      let pos = entries[n].indexOf(tokens[i]);
      if (pos != -1) {
        let display_text = raw_entries[n].substring(0, pos) + "<span class=\"highlight\">" + raw_entries[n].substring(pos, pos + tokens[i].length) + "</span>" + raw_entries[n].substring(pos + tokens[i].length);
        autofill_results.push(display_text);
      }
    }
  }

  autofill.innerHTML = "";
  for (let i=0; i<autofill_results.length; i+=1) {
    autofill.innerHTML += "<div class=\"search-result\">" + autofill_results[i] + "</div>";
  }

}

window.onload = function() {
  searchbar.addEventListener("keyup", onSearchHandler);

  for (let n=0; n<raw_entries.length; n+=1) {
    entries[n] = raw_entries[n];
    for (let i=0; i<word_mapping.length; i+=1) {
      entries[n] = entries[n].replace(word_mapping[i][0], word_mapping[i][1]);
    }
    entries[n] = entries[n].toLowerCase()
  }

  onSearchHandler();
}









