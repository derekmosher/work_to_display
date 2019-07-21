/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bg',
                            type: 'rect',
                            rect: ['0px', '0px', '300px', '250px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Content-Small',
                            symbolName: 'Content',
                            display: 'block',
                            type: 'rect',
                            rect: ['-433px', '-493px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],['-90'],[],['0.5','0.5']]
                        },
                        {
                            id: 'magnifiedContent',
                            symbolName: 'glass',
                            display: 'block',
                            type: 'rect',
                            rect: ['328px', '-224px', '186', '186', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"]
                        },
                        {
                            id: 'magnifyingglass',
                            display: 'block',
                            type: 'image',
                            rect: ['-40px', '66px', '355px', '268px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"magnifyingglass.png",'0px','0px'],
                            transform: [[],['-116']]
                        },
                        {
                            id: 'black',
                            type: 'rect',
                            rect: ['0px', '0px', '300px', '250px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'endframe_bg',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '300px', '250px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"endframe_bg.jpg",'0px','0px']
                        },
                        {
                            id: 'copyright',
                            display: 'none',
                            type: 'image',
                            rect: ['256px', '5px', '38px', '6px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"copyright.png",'0px','0px']
                        },
                        {
                            id: 'endframe-angle',
                            symbolName: 'endframe-angle',
                            type: 'rect',
                            rect: ['11px', '212px', '317', '266', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],['90'],[],['2.25999','1.25']]
                        },
                        {
                            id: 'packshot',
                            display: 'none',
                            type: 'image',
                            rect: ['-185px', '0px', '300px', '250px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"packshot.png",'0px','0px']
                        },
                        {
                            id: 'endframe_text1',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '300px', '250px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"endframe_text1.png",'0px','0px']
                        },
                        {
                            id: 'endframe_text2',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '300px', '250px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"endframe_text2.png",'0px','0px']
                        },
                        {
                            id: 'endframe_text3',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '300px', '250px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"endframe_text3.png",'0px','0px']
                        },
                        {
                            id: 'endframe_text4',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '300px', '250px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"endframe_text4.png",'0px','0px']
                        },
                        {
                            id: 'cta',
                            symbolName: 'cta',
                            type: 'rect',
                            rect: ['308px', '154px', '186', '33', 'auto', 'auto']
                        },
                        {
                            id: 'border',
                            type: 'image',
                            rect: ['0px', '0px', '300px', '250px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"border.png",'0px','0px']
                        },
                        {
                            id: 'HitArea',
                            type: 'rect',
                            rect: ['0px', '0px', '300px', '250px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '300px', '250px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 9361.6972373582,
                    autoPlay: true,
                    labels: {
                        "end": 5907
                    },
                    data: [
                        [
                            "eid1348",
                            "display",
                            9362,
                            0,
                            "linear",
                            "${Content-Small}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1172",
                            "opacity",
                            5505,
                            0,
                            "easeInOutQuad",
                            "${endframe_text4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1189",
                            "opacity",
                            6717,
                            630,
                            "linear",
                            "${endframe_text4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1148",
                            "opacity",
                            5608,
                            2,
                            "easeInOutQuad",
                            "${copyright}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1149",
                            "opacity",
                            5611,
                            278,
                            "easeInOutQuad",
                            "${copyright}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1051",
                            "opacity",
                            0,
                            461,
                            "linear",
                            "${black}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2093",
                            "opacity",
                            2907,
                            232,
                            "easeInOutQuad",
                            "${black}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid2101",
                            "opacity",
                            3150,
                            339,
                            "easeInOutQuad",
                            "${black}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1180",
                            "opacity",
                            5483,
                            0,
                            "easeInOutQuad",
                            "${endframe_text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1183",
                            "opacity",
                            6710,
                            637,
                            "linear",
                            "${endframe_text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1169",
                            "opacity",
                            5470,
                            0,
                            "easeInOutQuad",
                            "${endframe_text1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1175",
                            "opacity",
                            6383,
                            590,
                            "linear",
                            "${endframe_text1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid86",
                            "rotateZ",
                            3063,
                            0,
                            "easeInOutQuad",
                            "${Content-Small}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid2009",
                            "rotateZ",
                            3077,
                            0,
                            "easeInOutQuad",
                            "${Content-Small}",
                            '0deg',
                            '-90deg'
                        ],
                        [
                            "eid1093",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${packshot}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1082",
                            "display",
                            5544,
                            0,
                            "easeInOutQuad",
                            "${packshot}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12",
                            "scaleX",
                            0,
                            0,
                            "easeInQuad",
                            "${Content-Small}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid2364",
                            "left",
                            6483,
                            0,
                            "easeInOutQuad",
                            "${endframe_bg}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1960",
                            "rotateZ",
                            60,
                            0,
                            "linear",
                            "${endframe-angle}",
                            '90deg',
                            '90deg'
                        ],
                        [
                            "eid2024",
                            "rotateZ",
                            447,
                            0,
                            "easeInOutQuad",
                            "${endframe-angle}",
                            '90deg',
                            '90deg'
                        ],
                        [
                            "eid2034",
                            "rotateZ",
                            2855,
                            0,
                            "easeInOutQuad",
                            "${endframe-angle}",
                            '90deg',
                            '-90deg'
                        ],
                        [
                            "eid2033",
                            "rotateZ",
                            5567,
                            0,
                            "easeInOutQuad",
                            "${endframe-angle}",
                            '-90deg',
                            '0deg'
                        ],
                        [
                            "eid43",
                            "rotateZ",
                            452,
                            725,
                            "easeInOutQuad",
                            "${magnifyingglass}",
                            '-12deg',
                            '6deg'
                        ],
                        [
                            "eid51",
                            "rotateZ",
                            1250,
                            814,
                            "easeInOutQuad",
                            "${magnifyingglass}",
                            '6deg',
                            '22deg'
                        ],
                        [
                            "eid61",
                            "rotateZ",
                            2296,
                            686,
                            "easeInOutQuad",
                            "${magnifyingglass}",
                            '22deg',
                            '-7deg'
                        ],
                        [
                            "eid76",
                            "rotateZ",
                            3287,
                            203,
                            "easeInOutQuad",
                            "${magnifyingglass}",
                            '-7deg',
                            '-107deg'
                        ],
                        [
                            "eid108",
                            "rotateZ",
                            3603,
                            563,
                            "easeInOutQuad",
                            "${magnifyingglass}",
                            '-107deg',
                            '-116deg'
                        ],
                        [
                            "eid113",
                            "rotateZ",
                            4166,
                            669,
                            "easeInOutQuad",
                            "${magnifyingglass}",
                            '-116deg',
                            '-137deg'
                        ],
                        [
                            "eid123",
                            "rotateZ",
                            4933,
                            602,
                            "easeInOutQuad",
                            "${magnifyingglass}",
                            '-137deg',
                            '-167deg'
                        ],
                        [
                            "eid1145",
                            "top",
                            5779,
                            0,
                            "easeInOutQuad",
                            "${copyright}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1083",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${copyright}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1073",
                            "display",
                            5485,
                            0,
                            "easeInOutQuad",
                            "${copyright}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1128",
                            "left",
                            6033,
                            501,
                            "easeOutQuad",
                            "${packshot}",
                            '-185px',
                            '2px'
                        ],
                        [
                            "eid1961",
                            "left",
                            60,
                            0,
                            "linear",
                            "${endframe-angle}",
                            '-10px',
                            '-15px'
                        ],
                        [
                            "eid2042",
                            "left",
                            447,
                            0,
                            "easeInOutQuad",
                            "${endframe-angle}",
                            '-15px',
                            '-15px'
                        ],
                        [
                            "eid2043",
                            "left",
                            2855,
                            0,
                            "easeInOutQuad",
                            "${endframe-angle}",
                            '-15px',
                            '1px'
                        ],
                        [
                            "eid2056",
                            "left",
                            2928,
                            0,
                            "easeInOutQuad",
                            "${endframe-angle}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid2055",
                            "left",
                            3738,
                            0,
                            "easeInOutQuad",
                            "${endframe-angle}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid2047",
                            "left",
                            5567,
                            0,
                            "easeInOutQuad",
                            "${endframe-angle}",
                            '1px',
                            '-200px'
                        ],
                        [
                            "eid1122",
                            "left",
                            5610,
                            544,
                            "easeInOutQuad",
                            "${endframe-angle}",
                            '-200px',
                            '11px'
                        ],
                        [
                            "eid1089",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${endframe_text3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1079",
                            "display",
                            5515,
                            0,
                            "easeInOutQuad",
                            "${endframe_text3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1357",
                            "display",
                            5552,
                            0,
                            "easeInOutQuad",
                            "${endframe_text3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid958",
                            "display",
                            7026,
                            0,
                            "linear",
                            "${magnifiedContent}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1221",
                            "top",
                            6730,
                            0,
                            "linear",
                            "${cta}",
                            '154px',
                            '154px'
                        ],
                        [
                            "eid1222",
                            "top",
                            8656,
                            0,
                            "linear",
                            "${cta}",
                            '154px',
                            '154px'
                        ],
                        [
                            "eid1092",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${endframe_bg}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1099",
                            "display",
                            5482,
                            0,
                            "easeInOutQuad",
                            "${endframe_bg}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13",
                            "scaleY",
                            0,
                            0,
                            "easeInQuad",
                            "${Content-Small}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid41",
                            "left",
                            452,
                            725,
                            "easeInOutQuad",
                            "${magnifyingglass}",
                            '283px',
                            '93px'
                        ],
                        [
                            "eid50",
                            "left",
                            1250,
                            814,
                            "easeInOutQuad",
                            "${magnifyingglass}",
                            '93px',
                            '48px'
                        ],
                        [
                            "eid59",
                            "left",
                            2296,
                            686,
                            "easeInOutQuad",
                            "${magnifyingglass}",
                            '48px',
                            '325px'
                        ],
                        [
                            "eid68",
                            "left",
                            2983,
                            304,
                            "easeInOutQuad",
                            "${magnifyingglass}",
                            '325px',
                            '311px'
                        ],
                        [
                            "eid71",
                            "left",
                            3287,
                            192,
                            "easeInOutQuad",
                            "${magnifyingglass}",
                            '311px',
                            '-345px'
                        ],
                        [
                            "eid106",
                            "left",
                            3603,
                            563,
                            "easeInOutQuad",
                            "${magnifyingglass}",
                            '-345px',
                            '-124px'
                        ],
                        [
                            "eid112",
                            "left",
                            4166,
                            669,
                            "easeInOutQuad",
                            "${magnifyingglass}",
                            '-124px',
                            '-94px'
                        ],
                        [
                            "eid125",
                            "left",
                            4933,
                            602,
                            "easeInOutQuad",
                            "${magnifyingglass}",
                            '-94px',
                            '-371px'
                        ],
                        [
                            "eid1161",
                            "left",
                            5505,
                            0,
                            "easeInOutQuad",
                            "${endframe_text3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1179",
                            "left",
                            5483,
                            0,
                            "easeInOutQuad",
                            "${endframe_text2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1805",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Content-Small}",
                            '-433px',
                            '-433px'
                        ],
                        [
                            "eid1806",
                            "left",
                            1912,
                            0,
                            "linear",
                            "${Content-Small}",
                            '-433px',
                            '-433px'
                        ],
                        [
                            "eid1816",
                            "left",
                            3059,
                            0,
                            "easeInOutQuad",
                            "${Content-Small}",
                            '-433px',
                            '-433px'
                        ],
                        [
                            "eid2007",
                            "left",
                            3076,
                            0,
                            "easeInOutQuad",
                            "${Content-Small}",
                            '-433px',
                            '-665px'
                        ],
                        [
                            "eid1954",
                            "top",
                            60,
                            387,
                            "linear",
                            "${endframe-angle}",
                            '212px',
                            '-213px'
                        ],
                        [
                            "eid2045",
                            "top",
                            2855,
                            0,
                            "easeInOutQuad",
                            "${endframe-angle}",
                            '-213px',
                            '-227px'
                        ],
                        [
                            "eid2060",
                            "top",
                            2964,
                            777,
                            "easeInOutQuad",
                            "${endframe-angle}",
                            '-227px',
                            '198px'
                        ],
                        [
                            "eid2048",
                            "top",
                            5567,
                            0,
                            "easeInOutQuad",
                            "${endframe-angle}",
                            '-227px',
                            '0px'
                        ],
                        [
                            "eid1118",
                            "top",
                            5610,
                            0,
                            "easeInOutQuad",
                            "${endframe-angle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1117",
                            "top",
                            6153,
                            0,
                            "easeInOutQuad",
                            "${endframe-angle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid498",
                            "rotateZ",
                            452,
                            0,
                            "easeInOutQuad",
                            "${magnifiedContent}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid543",
                            "rotateZ",
                            3423,
                            60,
                            "easeInOutQuad",
                            "${magnifiedContent}",
                            '0deg',
                            '-90deg'
                        ],
                        [
                            "eid1144",
                            "left",
                            5779,
                            0,
                            "easeInOutQuad",
                            "${copyright}",
                            '256px',
                            '256px'
                        ],
                        [
                            "eid1171",
                            "opacity",
                            5505,
                            0,
                            "easeInOutQuad",
                            "${endframe_text3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1186",
                            "opacity",
                            6715,
                            621,
                            "linear",
                            "${endframe_text3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1164",
                            "top",
                            5505,
                            0,
                            "easeInOutQuad",
                            "${endframe_text4}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1226",
                            "left",
                            6730,
                            607,
                            "easeOutSine",
                            "${cta}",
                            '308px',
                            '163px'
                        ],
                        [
                            "eid1160",
                            "top",
                            5470,
                            0,
                            "easeInOutQuad",
                            "${endframe_text1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1350",
                            "display",
                            9353,
                            0,
                            "linear",
                            "${magnifyingglass}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1088",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${endframe_text2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1356",
                            "display",
                            5546,
                            0,
                            "easeInOutQuad",
                            "${endframe_text2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1337",
                            "opacity",
                            5561,
                            337,
                            "easeInQuad",
                            "${Content-Small}",
                            '1',
                            '0'
                        ],
                        [
                            "eid519",
                            "top",
                            452,
                            727,
                            "easeInOutQuad",
                            "${magnifiedContent}",
                            '-162px',
                            '85px'
                        ],
                        [
                            "eid525",
                            "top",
                            1261,
                            804,
                            "easeInOutQuad",
                            "${magnifiedContent}",
                            '85px',
                            '99px'
                        ],
                        [
                            "eid536",
                            "top",
                            2302,
                            680,
                            "easeInOutQuad",
                            "${magnifiedContent}",
                            '99px',
                            '147px'
                        ],
                        [
                            "eid564",
                            "top",
                            3423,
                            60,
                            "easeInOutQuad",
                            "${magnifiedContent}",
                            '147px',
                            '-224px'
                        ],
                        [
                            "eid576",
                            "top",
                            3605,
                            550,
                            "easeInOutQuad",
                            "${magnifiedContent}",
                            '-224px',
                            '13px'
                        ],
                        [
                            "eid585",
                            "top",
                            4155,
                            669,
                            "easeInOutQuad",
                            "${magnifiedContent}",
                            '13px',
                            '31px'
                        ],
                        [
                            "eid591",
                            "top",
                            4938,
                            600,
                            "easeInOutQuad",
                            "${magnifiedContent}",
                            '31px',
                            '113px'
                        ],
                        [
                            "eid1101",
                            "opacity",
                            5615,
                            0,
                            "easeInOutQuad",
                            "${endframe_bg}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1124",
                            "opacity",
                            5948,
                            545,
                            "easeInOutQuad",
                            "${endframe_bg}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1952",
                            "scaleX",
                            60,
                            387,
                            "linear",
                            "${endframe-angle}",
                            '2.25999',
                            '2.20502'
                        ],
                        [
                            "eid2058",
                            "scaleX",
                            2928,
                            0,
                            "easeInOutQuad",
                            "${endframe-angle}",
                            '2.20502',
                            '2.20502'
                        ],
                        [
                            "eid2367",
                            "scaleX",
                            5286,
                            332,
                            "easeInQuad",
                            "${endframe-angle}",
                            '2.20502',
                            '1.24'
                        ],
                        [
                            "eid2368",
                            "scaleX",
                            6157,
                            0,
                            "easeInOutQuad",
                            "${endframe-angle}",
                            '1.24',
                            '1.24'
                        ],
                        [
                            "eid1163",
                            "left",
                            5505,
                            0,
                            "easeInOutQuad",
                            "${endframe_text4}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid2037",
                            "opacity",
                            60,
                            0,
                            "easeInOutQuad",
                            "${endframe-angle}",
                            '1',
                            '1'
                        ],
                        [
                            "eid2038",
                            "opacity",
                            460,
                            0,
                            "easeInOutQuad",
                            "${endframe-angle}",
                            '1',
                            '1'
                        ],
                        [
                            "eid2091",
                            "opacity",
                            2855,
                            73,
                            "easeInOutQuad",
                            "${endframe-angle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2051",
                            "opacity",
                            3738,
                            0,
                            "easeInOutQuad",
                            "${endframe-angle}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1803",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Content-Small}",
                            '-493px',
                            '-493px'
                        ],
                        [
                            "eid1804",
                            "top",
                            1912,
                            0,
                            "linear",
                            "${Content-Small}",
                            '-493px',
                            '-493px'
                        ],
                        [
                            "eid1817",
                            "top",
                            3059,
                            0,
                            "easeInOutQuad",
                            "${Content-Small}",
                            '-493px',
                            '-493px'
                        ],
                        [
                            "eid2008",
                            "top",
                            3076,
                            0,
                            "easeInOutQuad",
                            "${Content-Small}",
                            '-493px',
                            '-661px'
                        ],
                        [
                            "eid1090",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${endframe_text4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1080",
                            "display",
                            5536,
                            0,
                            "easeInOutQuad",
                            "${endframe_text4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1358",
                            "display",
                            5569,
                            0,
                            "easeInOutQuad",
                            "${endframe_text4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid42",
                            "top",
                            452,
                            725,
                            "easeInOutQuad",
                            "${magnifyingglass}",
                            '-258px',
                            '13px'
                        ],
                        [
                            "eid52",
                            "top",
                            1250,
                            814,
                            "easeInOutQuad",
                            "${magnifyingglass}",
                            '13px',
                            '53px'
                        ],
                        [
                            "eid60",
                            "top",
                            2296,
                            686,
                            "easeInOutQuad",
                            "${magnifyingglass}",
                            '53px',
                            '57px'
                        ],
                        [
                            "eid67",
                            "top",
                            2983,
                            304,
                            "easeInOutQuad",
                            "${magnifyingglass}",
                            '57px',
                            '-345px'
                        ],
                        [
                            "eid72",
                            "top",
                            3287,
                            208,
                            "easeInOutQuad",
                            "${magnifyingglass}",
                            '-345px',
                            '-331px'
                        ],
                        [
                            "eid107",
                            "top",
                            3603,
                            563,
                            "easeInOutQuad",
                            "${magnifyingglass}",
                            '-331px',
                            '-84px'
                        ],
                        [
                            "eid114",
                            "top",
                            4166,
                            669,
                            "easeInOutQuad",
                            "${magnifyingglass}",
                            '-84px',
                            '-39px'
                        ],
                        [
                            "eid124",
                            "top",
                            4933,
                            602,
                            "easeInOutQuad",
                            "${magnifyingglass}",
                            '-39px',
                            '91px'
                        ],
                        [
                            "eid1159",
                            "left",
                            5470,
                            0,
                            "easeInOutQuad",
                            "${endframe_text1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1953",
                            "scaleY",
                            60,
                            387,
                            "linear",
                            "${endframe-angle}",
                            '1.25',
                            '1.23909'
                        ],
                        [
                            "eid2059",
                            "scaleY",
                            2928,
                            0,
                            "easeInOutQuad",
                            "${endframe-angle}",
                            '1.23909',
                            '1.23909'
                        ],
                        [
                            "eid2052",
                            "scaleY",
                            3738,
                            0,
                            "easeInOutQuad",
                            "${endframe-angle}",
                            '1.23909',
                            '1.23909'
                        ],
                        [
                            "eid518",
                            "left",
                            452,
                            727,
                            "easeInOutQuad",
                            "${magnifiedContent}",
                            '294px',
                            '92px'
                        ],
                        [
                            "eid524",
                            "left",
                            1261,
                            804,
                            "easeInOutQuad",
                            "${magnifiedContent}",
                            '92px',
                            '41px'
                        ],
                        [
                            "eid535",
                            "left",
                            2302,
                            680,
                            "easeInOutQuad",
                            "${magnifiedContent}",
                            '41px',
                            '332px'
                        ],
                        [
                            "eid562",
                            "left",
                            3423,
                            60,
                            "easeInOutQuad",
                            "${magnifiedContent}",
                            '332px',
                            '328px'
                        ],
                        [
                            "eid581",
                            "left",
                            3605,
                            550,
                            "easeInOutQuad",
                            "${magnifiedContent}",
                            '-200px',
                            '30px'
                        ],
                        [
                            "eid584",
                            "left",
                            4155,
                            669,
                            "easeInOutQuad",
                            "${magnifiedContent}",
                            '30px',
                            '76px'
                        ],
                        [
                            "eid590",
                            "left",
                            4938,
                            600,
                            "easeInOutQuad",
                            "${magnifiedContent}",
                            '76px',
                            '-198px'
                        ],
                        [
                            "eid1162",
                            "top",
                            5505,
                            0,
                            "easeInOutQuad",
                            "${endframe_text3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1156",
                            "top",
                            5483,
                            0,
                            "easeInOutQuad",
                            "${endframe_text2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid116",
                            "-webkit-transform-origin",
                            4018,
                            0,
                            "easeInOutQuad",
                            "${magnifyingglass}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid2461",
                            "-moz-transform-origin",
                            4018,
                            0,
                            "easeInOutQuad",
                            "${magnifyingglass}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid2462",
                            "-ms-transform-origin",
                            4018,
                            0,
                            "easeInOutQuad",
                            "${magnifyingglass}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid2463",
                            "msTransformOrigin",
                            4018,
                            0,
                            "easeInOutQuad",
                            "${magnifyingglass}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid2464",
                            "-o-transform-origin",
                            4018,
                            0,
                            "easeInOutQuad",
                            "${magnifyingglass}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid2465",
                            "transform-origin",
                            4018,
                            0,
                            "easeInOutQuad",
                            "${magnifyingglass}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1087",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${endframe_text1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1077",
                            "display",
                            5550,
                            0,
                            "easeInOutQuad",
                            "${endframe_text1}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "Content": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1235px', '1626px', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            id: 'xRay_magnified3',
                            type: 'image',
                            rect: ['422px', '46px', '639px', '1253px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/xRay_magnified.jpg', '0px', '0px']
                        },
                        {
                            rect: ['297px', '471px', '397px', '106px', 'auto', 'auto'],
                            id: 'titletreatment_large',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/titletreatment_large.png', '0px', '0px']
                        },
                        {
                            rect: ['358px', '1266px', '311px', '119px', 'auto', 'auto'],
                            transform: [[], ['90']],
                            id: 'messaging_large',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/messaging_large.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1235px', '1626px']
                        }
                    }
                },
                timeline: {
                    duration: 4446.9438271801,
                    autoPlay: true,
                    data: [
                        [
                            "eid1793",
                            "left",
                            0,
                            0,
                            "linear",
                            "${titletreatment_large}",
                            '297px',
                            '297px'
                        ],
                        [
                            "eid1813",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${messaging_large}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid1821",
                            "opacity",
                            3527,
                            920,
                            "easeInOutQuad",
                            "${messaging_large}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1799",
                            "top",
                            0,
                            0,
                            "linear",
                            "${titletreatment_large}",
                            '471px',
                            '471px'
                        ],
                        [
                            "eid1677",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${titletreatment_large}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1681",
                            "opacity",
                            554,
                            944,
                            "linear",
                            "${titletreatment_large}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            },
            "glass": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            opacity: '1',
                            display: 'block',
                            symbolName: 'Content',
                            rect: ['-538px', '-1153px', null, null, 'auto', 'auto'],
                            id: 'Content'
                        },
                        {
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '186px', '186px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            overflow: 'hidden',
                            id: 'Ellipse2',
                            opacity: '0',
                            type: 'ellipse',
                            fill: ['rgba(240,44,44,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '186px', '186px'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 7847,
                    autoPlay: true,
                    data: [
                        [
                            "eid700",
                            "top",
                            574,
                            91,
                            "easeInOutQuad",
                            "${Content}",
                            '-6px',
                            '-37px'
                        ],
                        [
                            "eid694",
                            "top",
                            665,
                            512,
                            "easeOutQuad",
                            "${Content}",
                            '-37px',
                            '-462px'
                        ],
                        [
                            "eid721",
                            "top",
                            1260,
                            812,
                            "easeInOutQuad",
                            "${Content}",
                            '-462px',
                            '-483px'
                        ],
                        [
                            "eid737",
                            "top",
                            2314,
                            674,
                            "easeInOutQuad",
                            "${Content}",
                            '-483px',
                            '-561px'
                        ],
                        [
                            "eid759",
                            "top",
                            3614,
                            547,
                            "easeInOutQuad",
                            "${Content}",
                            '-561px',
                            '-1063px'
                        ],
                        [
                            "eid762",
                            "top",
                            4162,
                            666,
                            "easeInOutQuad",
                            "${Content}",
                            '-1063px',
                            '-1153px'
                        ],
                        [
                            "eid768",
                            "top",
                            4932,
                            600,
                            "easeInOutQuad",
                            "${Content}",
                            '-1153px',
                            '-830px'
                        ],
                        [
                            "eid770",
                            "top",
                            7845,
                            0,
                            "easeInOutQuad",
                            "${Content}",
                            '-830px',
                            '-751px'
                        ],
                        [
                            "eid701",
                            "left",
                            574,
                            91,
                            "easeInOutQuad",
                            "${Content}",
                            '-806px',
                            '-768px'
                        ],
                        [
                            "eid695",
                            "left",
                            665,
                            512,
                            "easeOutQuad",
                            "${Content}",
                            '-768px',
                            '-485px'
                        ],
                        [
                            "eid722",
                            "left",
                            1260,
                            812,
                            "easeInOutQuad",
                            "${Content}",
                            '-485px',
                            '-365px'
                        ],
                        [
                            "eid738",
                            "left",
                            2314,
                            674,
                            "easeInOutQuad",
                            "${Content}",
                            '-365px',
                            '-978px'
                        ],
                        [
                            "eid758",
                            "left",
                            3614,
                            547,
                            "easeInOutQuad",
                            "${Content}",
                            '-978px',
                            '-538px'
                        ],
                        [
                            "eid763",
                            "left",
                            4162,
                            666,
                            "easeInOutQuad",
                            "${Content}",
                            '-538px',
                            '-496px'
                        ],
                        [
                            "eid769",
                            "left",
                            4932,
                            600,
                            "easeInOutQuad",
                            "${Content}",
                            '-496px',
                            '-423px'
                        ],
                        [
                            "eid771",
                            "left",
                            7845,
                            0,
                            "easeInOutQuad",
                            "${Content}",
                            '-423px',
                            '-218px'
                        ],
                        [
                            "eid791",
                            "display",
                            7847,
                            0,
                            "easeInOutQuad",
                            "${Content}",
                            'block',
                            'none'
                        ],
                        [
                            "eid654",
                            "opacity",
                            1177,
                            0,
                            "easeInOutQuad",
                            "${Ellipse2}",
                            '0',
                            '0'
                        ]
                    ]
                }
            },
            "EndframeReveal": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'backup_endframe2',
                            type: 'image',
                            rect: ['-54px', '-230px', '300px', '250px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/backup_endframe.jpg', '0px', '0px']
                        },
                        {
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '186px', '186px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            overflow: 'hidden',
                            id: 'Ellipse2',
                            opacity: '1',
                            type: 'ellipse',
                            fill: ['rgba(240,44,44,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '186px', '186px'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 9311,
                    autoPlay: true,
                    data: [
                        [
                            "eid923",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${backup_endframe2}",
                            '223px',
                            '181px'
                        ],
                        [
                            "eid928",
                            "left",
                            7113,
                            936,
                            "linear",
                            "${backup_endframe2}",
                            '181px',
                            '0px'
                        ],
                        [
                            "eid944",
                            "left",
                            8126,
                            430,
                            "linear",
                            "${backup_endframe2}",
                            '0px',
                            '-103px'
                        ],
                        [
                            "eid951",
                            "left",
                            8556,
                            754,
                            "linear",
                            "${backup_endframe2}",
                            '-103px',
                            '-54px'
                        ],
                        [
                            "eid922",
                            "top",
                            0,
                            0,
                            "easeInOutQuad",
                            "${backup_endframe2}",
                            '245px',
                            '-217px'
                        ],
                        [
                            "eid926",
                            "top",
                            7113,
                            937,
                            "linear",
                            "${backup_endframe2}",
                            '-217px',
                            '-50px'
                        ],
                        [
                            "eid1057",
                            "top",
                            8126,
                            0,
                            "linear",
                            "${backup_endframe2}",
                            '-50px',
                            '-50px'
                        ],
                        [
                            "eid950",
                            "top",
                            8554,
                            757,
                            "linear",
                            "${backup_endframe2}",
                            '-50px',
                            '-230px'
                        ],
                        [
                            "eid1136",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Ellipse2}",
                            '0',
                            '0.01'
                        ]
                    ]
                }
            },
            "endframe-angle": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '300px', '250px', 'auto', 'auto'],
                            type: 'image',
                            filter: [0, 0, 1.5961044520548, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'darktriangle',
                            opacity: '0.71',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/darktriangle.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '300px', '250px', 'auto', 'auto'],
                            id: 'goldangle',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/goldangle.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '317px', '266px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid1091",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${goldangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1450",
                            "filter.contrast",
                            0,
                            0,
                            "linear",
                            "${darktriangle}",
                            '1.5961044520548',
                            '1.5961044520548'
                        ],
                        [
                            "eid1086",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${darktriangle}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "cta": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'cta_off',
                            rect: ['0px', '0px', '186px', '33px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cta_off.jpg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '186px', '33px', 'auto', 'auto'],
                            id: 'cta_on',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cta_on.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '186px', '33px']
                        }
                    }
                },
                timeline: {
                    duration: 10784,
                    autoPlay: false,
                    labels: {
                        "ready": 0,
                        "over": 501,
                        "stay": 893,
                        "off": 1319
                    },
                    data: [
                        [
                            "eid1203",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${cta_on}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1206",
                            "opacity",
                            493,
                            305,
                            "linear",
                            "${cta_on}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1209",
                            "opacity",
                            1322,
                            281,
                            "linear",
                            "${cta_on}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("bones_300x250_edgeActions.js");
})("EDGE-12860637");
