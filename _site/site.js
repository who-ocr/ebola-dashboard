$(document).ready(function() {

    var globalData = [{
        "epiweek": "2014-W01",
        "total": 2,
        "probable": 2,
        "suspected": 0,
        "confirmed": 0
    }, {
        "epiweek": "2014-W02",
        "total": 9,
        "probable": 0,
        "suspected": 1,
        "confirmed": 8
    }, {
        "epiweek": "2014-W04",
        "total": 5,
        "probable": 5,
        "suspected": 0,
        "confirmed": 0
    }, {
        "epiweek": "2014-W05",
        "total": 3,
        "probable": 3,
        "suspected": 0,
        "confirmed": 0
    }, {
        "epiweek": "2014-W06",
        "total": 15,
        "probable": 7,
        "suspected": 0,
        "confirmed": 8
    }, {
        "epiweek": "2014-W07",
        "total": 3,
        "probable": 3,
        "suspected": 0,
        "confirmed": 0
    }, {
        "epiweek": "2014-W08",
        "total": 5,
        "probable": 5,
        "suspected": 0,
        "confirmed": 0
    }, {
        "epiweek": "2014-W09",
        "total": 7,
        "probable": 6,
        "suspected": 0,
        "confirmed": 1
    }, {
        "epiweek": "2014-W10",
        "total": 16,
        "probable": 5,
        "suspected": 0,
        "confirmed": 11
    }, {
        "epiweek": "2014-W11",
        "total": 27,
        "probable": 16,
        "suspected": 0,
        "confirmed": 11
    }, {
        "epiweek": "2014-W12",
        "total": 20,
        "probable": 7,
        "suspected": 2,
        "confirmed": 11
    }, {
        "epiweek": "2014-W13",
        "total": 28,
        "probable": 5,
        "suspected": 0,
        "confirmed": 23
    }, {
        "epiweek": "2014-W14",
        "total": 30,
        "probable": 7,
        "suspected": 0,
        "confirmed": 23
    }, {
        "epiweek": "2014-W15",
        "total": 45,
        "probable": 6,
        "suspected": 2,
        "confirmed": 37
    }, {
        "epiweek": "2014-W16",
        "total": 16,
        "probable": 0,
        "suspected": 0,
        "confirmed": 16
    }, {
        "epiweek": "2014-W17",
        "total": 10,
        "probable": 0,
        "suspected": 0,
        "confirmed": 10
    }, {
        "epiweek": "2014-W18",
        "total": 11,
        "probable": 8,
        "suspected": 0,
        "confirmed": 3
    }, {
        "epiweek": "2014-W19",
        "total": 24,
        "probable": 4,
        "suspected": 1,
        "confirmed": 19
    }, {
        "epiweek": "2014-W20",
        "total": 8,
        "probable": 2,
        "suspected": 0,
        "confirmed": 6
    }, {
        "epiweek": "2014-W21",
        "total": 26,
        "probable": 4,
        "suspected": 0,
        "confirmed": 22
    }, {
        "epiweek": "2014-W22",
        "total": 52,
        "probable": 12,
        "suspected": 1,
        "confirmed": 39
    }, {
        "epiweek": "2014-W23",
        "total": 37,
        "probable": 3,
        "suspected": 2,
        "confirmed": 32
    }, {
        "epiweek": "2014-W24",
        "total": 122,
        "probable": 25,
        "suspected": 6,
        "confirmed": 91
    }, {
        "epiweek": "2014-W25",
        "total": 119,
        "probable": 1,
        "suspected": 7,
        "confirmed": 111
    }, {
        "epiweek": "2014-W26",
        "total": 77,
        "probable": 6,
        "suspected": 2,
        "confirmed": 69
    }, {
        "epiweek": "2014-W27",
        "total": 102,
        "probable": 6,
        "suspected": 5,
        "confirmed": 91
    }, {
        "epiweek": "2014-W28",
        "total": 152,
        "probable": 10,
        "suspected": 10,
        "confirmed": 132
    }, {
        "epiweek": "2014-W29",
        "total": 156,
        "probable": 49,
        "suspected": 24,
        "confirmed": 83
    }, {
        "epiweek": "2014-W30",
        "total": 272,
        "probable": 76,
        "suspected": 27,
        "confirmed": 169
    }, {
        "epiweek": "2014-W31",
        "total": 323,
        "probable": 132,
        "suspected": 55,
        "confirmed": 136
    }, {
        "epiweek": "2014-W32",
        "total": 182,
        "probable": 62,
        "suspected": 7,
        "confirmed": 113
    }, {
        "epiweek": "2014-W33",
        "total": 396,
        "probable": 155,
        "suspected": 35,
        "confirmed": 206
    }, {
        "epiweek": "2014-W34",
        "total": 665,
        "probable": 195,
        "suspected": 128,
        "confirmed": 342
    }, {
        "epiweek": "2014-W35",
        "total": 536,
        "probable": 163,
        "suspected": 43,
        "confirmed": 330
    }, {
        "epiweek": "2014-W36",
        "total": 749,
        "probable": 160,
        "suspected": 81,
        "confirmed": 508
    }, {
        "epiweek": "2014-W37",
        "total": 878,
        "probable": 268,
        "suspected": 186,
        "confirmed": 424
    }, {
        "epiweek": "2014-W38",
        "total": 1005,
        "probable": 233,
        "suspected": 329,
        "confirmed": 443
    }, {
        "epiweek": "2014-W39",
        "total": 842,
        "probable": 202,
        "suspected": 235,
        "confirmed": 405
    }, {
        "epiweek": "2014-W40",
        "total": 951,
        "probable": 159,
        "suspected": 307,
        "confirmed": 485
    }, {
        "epiweek": "2014-W41",
        "total": 1023,
        "probable": 126,
        "suspected": 322,
        "confirmed": 575
    }];


    var mapData = [{
        "confirmed": 0,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 0,
            "country": "Guinea",
            "hcw": 0,
            "probable": 2,
            "suspected": 0,
            "total_cases": 2
        }],
        "epiweek": "2014-W01",
        "probable": 2,
        "suspected": 0,
        "total": 2
    }, {
        "confirmed": 8,
        "countries": [{
            "centroid": [-11.7921028963,
                8.560340924
            ],
            "confirmed": 8,
            "country": "Sierra Leone",
            "hcw": 0,
            "probable": 0,
            "suspected": 1,
            "total_cases": 9
        }],
        "epiweek": "2014-W02",
        "probable": 0,
        "suspected": 1,
        "total": 9
    }, {
        "confirmed": 0,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 0,
            "country": "Guinea",
            "hcw": 1,
            "probable": 5,
            "suspected": 0,
            "total_cases": 5
        }],
        "epiweek": "2014-W04",
        "probable": 5,
        "suspected": 0,
        "total": 5
    }, {
        "confirmed": 0,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 0,
            "country": "Guinea",
            "hcw": 1,
            "probable": 3,
            "suspected": 0,
            "total_cases": 3
        }],
        "epiweek": "2014-W05",
        "probable": 3,
        "suspected": 0,
        "total": 3
    }, {
        "confirmed": 8,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 0,
            "country": "Guinea",
            "hcw": 0,
            "probable": 5,
            "suspected": 0,
            "total_cases": 5
        }, {
            "centroid": [-9.30784656357,
                6.44811846319
            ],
            "confirmed": 0,
            "country": "Liberia",
            "hcw": 2,
            "probable": 2,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": [-11.7921028963,
                8.560340924
            ],
            "confirmed": 8,
            "country": "Sierra Leone",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 8
        }],
        "epiweek": "2014-W06",
        "probable": 7,
        "suspected": 0,
        "total": 15
    }, {
        "confirmed": 0,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 0,
            "country": "Guinea",
            "hcw": 1,
            "probable": 3,
            "suspected": 0,
            "total_cases": 3
        }],
        "epiweek": "2014-W07",
        "probable": 3,
        "suspected": 0,
        "total": 3
    }, {
        "confirmed": 0,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 0,
            "country": "Guinea",
            "hcw": 1,
            "probable": 5,
            "suspected": 0,
            "total_cases": 5
        }],
        "epiweek": "2014-W08",
        "probable": 5,
        "suspected": 0,
        "total": 5
    }, {
        "confirmed": 1,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 1,
            "country": "Guinea",
            "hcw": 0,
            "probable": 6,
            "suspected": 0,
            "total_cases": 7
        }],
        "epiweek": "2014-W09",
        "probable": 6,
        "suspected": 0,
        "total": 7
    }, {
        "confirmed": 11,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 2,
            "country": "Guinea",
            "hcw": 1,
            "probable": 5,
            "suspected": 0,
            "total_cases": 7
        }, {
            "centroid": [-11.7921028963,
                8.560340924
            ],
            "confirmed": 9,
            "country": "Sierra Leone",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 9
        }],
        "epiweek": "2014-W10",
        "probable": 5,
        "suspected": 0,
        "total": 16
    }, {
        "confirmed": 11,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 11,
            "country": "Guinea",
            "hcw": 1,
            "probable": 16,
            "suspected": 0,
            "total_cases": 27
        }],
        "epiweek": "2014-W11",
        "probable": 16,
        "suspected": 0,
        "total": 27
    }, {
        "confirmed": 11,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 11,
            "country": "Guinea",
            "hcw": 2,
            "probable": 6,
            "suspected": 0,
            "total_cases": 17
        }, {
            "centroid": [-9.30784656357,
                6.44811846319
            ],
            "confirmed": 0,
            "country": "Liberia",
            "hcw": 0,
            "probable": 1,
            "suspected": 2,
            "total_cases": 3
        }],
        "epiweek": "2014-W12",
        "probable": 7,
        "suspected": 2,
        "total": 20
    }, {
        "confirmed": 23,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 23,
            "country": "Guinea",
            "hcw": 7,
            "probable": 4,
            "suspected": 0,
            "total_cases": 27
        }, {
            "centroid": [-9.30784656357,
                6.44811846319
            ],
            "confirmed": 0,
            "country": "Liberia",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 1
        }],
        "epiweek": "2014-W13",
        "probable": 5,
        "suspected": 0,
        "total": 28
    }, {
        "confirmed": 23,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 23,
            "country": "Guinea",
            "hcw": 3,
            "probable": 5,
            "suspected": 0,
            "total_cases": 28
        }, {
            "centroid": [-9.30784656357,
                6.44811846319
            ],
            "confirmed": 0,
            "country": "Liberia",
            "hcw": 0,
            "probable": 2,
            "suspected": 0,
            "total_cases": 2
        }],
        "epiweek": "2014-W14",
        "probable": 7,
        "suspected": 0,
        "total": 30
    }, {
        "confirmed": 37,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 27,
            "country": "Guinea",
            "hcw": 4,
            "probable": 0,
            "suspected": 0,
            "total_cases": 27
        }, {
            "centroid": [-9.30784656357,
                6.44811846319
            ],
            "confirmed": 2,
            "country": "Liberia",
            "hcw": 1,
            "probable": 6,
            "suspected": 0,
            "total_cases": 8
        }, {
            "centroid": [-11.7921028963,
                8.560340924
            ],
            "confirmed": 8,
            "country": "Sierra Leone",
            "hcw": 0,
            "probable": 0,
            "suspected": 2,
            "total_cases": 10
        }],
        "epiweek": "2014-W15",
        "probable": 6,
        "suspected": 2,
        "total": 45
    }, {
        "confirmed": 16,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 16,
            "country": "Guinea",
            "hcw": 2,
            "probable": 0,
            "suspected": 0,
            "total_cases": 16
        }],
        "epiweek": "2014-W16",
        "probable": 0,
        "suspected": 0,
        "total": 16
    }, {
        "confirmed": 10,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 10,
            "country": "Guinea",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 10
        }],
        "epiweek": "2014-W17",
        "probable": 0,
        "suspected": 0,
        "total": 10
    }, {
        "confirmed": 3,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 3,
            "country": "Guinea",
            "hcw": 0,
            "probable": 8,
            "suspected": 0,
            "total_cases": 11
        }],
        "epiweek": "2014-W18",
        "probable": 8,
        "suspected": 0,
        "total": 11
    }, {
        "confirmed": 19,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 9,
            "country": "Guinea",
            "hcw": 0,
            "probable": 3,
            "suspected": 0,
            "total_cases": 12
        }, {
            "centroid": [-9.30784656357,
                6.44811846319
            ],
            "confirmed": 2,
            "country": "Liberia",
            "hcw": 1,
            "probable": 1,
            "suspected": 0,
            "total_cases": 3
        }, {
            "centroid": [-11.7921028963,
                8.560340924
            ],
            "confirmed": 8,
            "country": "Sierra Leone",
            "hcw": 0,
            "probable": 0,
            "suspected": 1,
            "total_cases": 9
        }],
        "epiweek": "2014-W19",
        "probable": 4,
        "suspected": 1,
        "total": 24
    }, {
        "confirmed": 6,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 6,
            "country": "Guinea",
            "hcw": 0,
            "probable": 2,
            "suspected": 0,
            "total_cases": 8
        }],
        "epiweek": "2014-W20",
        "probable": 2,
        "suspected": 0,
        "total": 8
    }, {
        "confirmed": 22,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 22,
            "country": "Guinea",
            "hcw": 2,
            "probable": 4,
            "suspected": 0,
            "total_cases": 26
        }],
        "epiweek": "2014-W21",
        "probable": 4,
        "suspected": 0,
        "total": 26
    }, {
        "confirmed": 39,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 35,
            "country": "Guinea",
            "hcw": 0,
            "probable": 12,
            "suspected": 0,
            "total_cases": 47
        }, {
            "centroid": [-9.30784656357,
                6.44811846319
            ],
            "confirmed": 4,
            "country": "Liberia",
            "hcw": 3,
            "probable": 0,
            "suspected": 1,
            "total_cases": 5
        }],
        "epiweek": "2014-W22",
        "probable": 12,
        "suspected": 1,
        "total": 52
    }, {
        "confirmed": 32,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 24,
            "country": "Guinea",
            "hcw": 2,
            "probable": 2,
            "suspected": 0,
            "total_cases": 26
        }, {
            "centroid": [-9.30784656357,
                6.44811846319
            ],
            "confirmed": 1,
            "country": "Liberia",
            "hcw": 0,
            "probable": 0,
            "suspected": 2,
            "total_cases": 3
        }, {
            "centroid": [-11.7921028963,
                8.560340924
            ],
            "confirmed": 7,
            "country": "Sierra Leone",
            "hcw": 1,
            "probable": 1,
            "suspected": 0,
            "total_cases": 8
        }],
        "epiweek": "2014-W23",
        "probable": 3,
        "suspected": 2,
        "total": 37
    }, {
        "confirmed": 91,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 29,
            "country": "Guinea",
            "hcw": 1,
            "probable": 3,
            "suspected": 0,
            "total_cases": 32
        }, {
            "centroid": [-9.30784656357,
                6.44811846319
            ],
            "confirmed": 19,
            "country": "Liberia",
            "hcw": 5,
            "probable": 0,
            "suspected": 3,
            "total_cases": 22
        }, {
            "centroid": [-11.7921028963,
                8.560340924
            ],
            "confirmed": 43,
            "country": "Sierra Leone",
            "hcw": 7,
            "probable": 22,
            "suspected": 3,
            "total_cases": 68
        }],
        "epiweek": "2014-W24",
        "probable": 25,
        "suspected": 6,
        "total": 122
    }, {
        "confirmed": 111,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 18,
            "country": "Guinea",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 18
        }, {
            "centroid": [-9.30784656357,
                6.44811846319
            ],
            "confirmed": 17,
            "country": "Liberia",
            "hcw": 2,
            "probable": 0,
            "suspected": 7,
            "total_cases": 24
        }, {
            "centroid": [-11.7921028963,
                8.560340924
            ],
            "confirmed": 76,
            "country": "Sierra Leone",
            "hcw": 7,
            "probable": 1,
            "suspected": 0,
            "total_cases": 77
        }],
        "epiweek": "2014-W25",
        "probable": 1,
        "suspected": 7,
        "total": 119
    }, {
        "confirmed": 69,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 22,
            "country": "Guinea",
            "hcw": 0,
            "probable": 2,
            "suspected": 0,
            "total_cases": 24
        }, {
            "centroid": [-9.30784656357,
                6.44811846319
            ],
            "confirmed": 12,
            "country": "Liberia",
            "hcw": 3,
            "probable": 2,
            "suspected": 2,
            "total_cases": 16
        }, {
            "centroid": [-11.7921028963,
                8.560340924
            ],
            "confirmed": 35,
            "country": "Sierra Leone",
            "hcw": 5,
            "probable": 2,
            "suspected": 0,
            "total_cases": 37
        }],
        "epiweek": "2014-W26",
        "probable": 6,
        "suspected": 2,
        "total": 77
    }, {
        "confirmed": 91,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 2,
            "country": "Guinea",
            "hcw": 0,
            "probable": 2,
            "suspected": 0,
            "total_cases": 4
        }, {
            "centroid": [-9.30784656357,
                6.44811846319
            ],
            "confirmed": 6,
            "country": "Liberia",
            "hcw": 1,
            "probable": 4,
            "suspected": 4,
            "total_cases": 14
        }, {
            "centroid": [-11.7921028963,
                8.560340924
            ],
            "confirmed": 83,
            "country": "Sierra Leone",
            "hcw": 11,
            "probable": 0,
            "suspected": 1,
            "total_cases": 84
        }],
        "epiweek": "2014-W27",
        "probable": 6,
        "suspected": 5,
        "total": 102
    }, {
        "confirmed": 132,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 6,
            "country": "Guinea",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 7
        }, {
            "centroid": [-9.30784656357,
                6.44811846319
            ],
            "confirmed": 19,
            "country": "Liberia",
            "hcw": 5,
            "probable": 8,
            "suspected": 7,
            "total_cases": 34
        }, {
            "centroid": [-11.7921028963,
                8.560340924
            ],
            "confirmed": 107,
            "country": "Sierra Leone",
            "hcw": 7,
            "probable": 1,
            "suspected": 3,
            "total_cases": 111
        }],
        "epiweek": "2014-W28",
        "probable": 10,
        "suspected": 10,
        "total": 152
    }, {
        "confirmed": 83,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 5,
            "country": "Guinea",
            "hcw": 0,
            "probable": 3,
            "suspected": 0,
            "total_cases": 8
        }, {
            "centroid": [-9.30784656357,
                6.44811846319
            ],
            "confirmed": 11,
            "country": "Liberia",
            "hcw": 9,
            "probable": 43,
            "suspected": 24,
            "total_cases": 78
        }, {
            "centroid": [-11.7921028963,
                8.560340924
            ],
            "confirmed": 67,
            "country": "Sierra Leone",
            "hcw": 11,
            "probable": 3,
            "suspected": 0,
            "total_cases": 70
        }],
        "epiweek": "2014-W29",
        "probable": 49,
        "suspected": 24,
        "total": 156
    }, {
        "confirmed": 169,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 75,
            "country": "Guinea",
            "hcw": 1,
            "probable": 17,
            "suspected": 1,
            "total_cases": 93
        }, {
            "centroid": [-9.30784656357,
                6.44811846319
            ],
            "confirmed": 12,
            "country": "Liberia",
            "hcw": 18,
            "probable": 59,
            "suspected": 26,
            "total_cases": 97
        }, {
            "centroid": [-11.7921028963,
                8.560340924
            ],
            "confirmed": 82,
            "country": "Sierra Leone",
            "hcw": 14,
            "probable": 0,
            "suspected": 0,
            "total_cases": 82
        }],
        "epiweek": "2014-W30",
        "probable": 76,
        "suspected": 27,
        "total": 272
    }, {
        "confirmed": 136,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 12,
            "country": "Guinea",
            "hcw": 0,
            "probable": 14,
            "suspected": 3,
            "total_cases": 29
        }, {
            "centroid": [-9.30784656357,
                6.44811846319
            ],
            "confirmed": 27,
            "country": "Liberia",
            "hcw": 11,
            "probable": 115,
            "suspected": 21,
            "total_cases": 163
        }, {
            "centroid": [
                8.10532486357,
                9.59363567392
            ],
            "confirmed": 5,
            "country": "Nigeria",
            "hcw": 4,
            "probable": 0,
            "suspected": 0,
            "total_cases": 5
        }, {
            "centroid": [-11.7921028963,
                8.560340924
            ],
            "confirmed": 92,
            "country": "Sierra Leone",
            "hcw": 14,
            "probable": 3,
            "suspected": 31,
            "total_cases": 126
        }],
        "epiweek": "2014-W31",
        "probable": 132,
        "suspected": 55,
        "total": 323
    }, {
        "confirmed": 113,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 16,
            "country": "Guinea",
            "hcw": 1,
            "probable": 0,
            "suspected": 0,
            "total_cases": 16
        }, {
            "centroid": [-9.30784656357,
                6.44811846319
            ],
            "confirmed": 7,
            "country": "Liberia",
            "hcw": 9,
            "probable": 62,
            "suspected": 7,
            "total_cases": 76
        }, {
            "centroid": [
                8.10532486357,
                9.59363567392
            ],
            "confirmed": 5,
            "country": "Nigeria",
            "hcw": 4,
            "probable": 0,
            "suspected": 0,
            "total_cases": 5
        }, {
            "centroid": [-11.7921028963,
                8.560340924
            ],
            "confirmed": 85,
            "country": "Sierra Leone",
            "hcw": 7,
            "probable": 0,
            "suspected": 0,
            "total_cases": 85
        }],
        "epiweek": "2014-W32",
        "probable": 62,
        "suspected": 7,
        "total": 182
    }, {
        "confirmed": 206,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 31,
            "country": "Guinea",
            "hcw": 11,
            "probable": 5,
            "suspected": 0,
            "total_cases": 36
        }, {
            "centroid": [-9.30784656357,
                6.44811846319
            ],
            "confirmed": 93,
            "country": "Liberia",
            "hcw": 46,
            "probable": 149,
            "suspected": 35,
            "total_cases": 277
        }, {
            "centroid": [
                8.10532486357,
                9.59363567392
            ],
            "confirmed": 2,
            "country": "Nigeria",
            "hcw": 1,
            "probable": 0,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": [-11.7921028963,
                8.560340924
            ],
            "confirmed": 80,
            "country": "Sierra Leone",
            "hcw": 17,
            "probable": 1,
            "suspected": 0,
            "total_cases": 81
        }],
        "epiweek": "2014-W33",
        "probable": 155,
        "suspected": 35,
        "total": 396
    }, {
        "confirmed": 342,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 90,
            "country": "Guinea",
            "hcw": 14,
            "probable": 2,
            "suspected": 0,
            "total_cases": 92
        }, {
            "centroid": [-9.30784656357,
                6.44811846319
            ],
            "confirmed": 90,
            "country": "Liberia",
            "hcw": 39,
            "probable": 189,
            "suspected": 109,
            "total_cases": 388
        }, {
            "centroid": [
                8.10532486357,
                9.59363567392
            ],
            "confirmed": 2,
            "country": "Nigeria",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 3
        }, {
            "centroid": [-11.7921028963,
                8.560340924
            ],
            "confirmed": 160,
            "country": "Sierra Leone",
            "hcw": 20,
            "probable": 3,
            "suspected": 19,
            "total_cases": 182
        }],
        "epiweek": "2014-W34",
        "probable": 195,
        "suspected": 128,
        "total": 665
    }, {
        "confirmed": 330,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 93,
            "country": "Guinea",
            "hcw": 8,
            "probable": 8,
            "suspected": 1,
            "total_cases": 102
        }, {
            "centroid": [-9.30784656357,
                6.44811846319
            ],
            "confirmed": 64,
            "country": "Liberia",
            "hcw": 22,
            "probable": 155,
            "suspected": 32,
            "total_cases": 251
        }, {
            "centroid": [
                8.10532486357,
                9.59363567392
            ],
            "confirmed": 2,
            "country": "Nigeria",
            "hcw": 1,
            "probable": 0,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": [-14.4681770794,
                14.3669795383
            ],
            "confirmed": 1,
            "country": "Senegal",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-11.7921028963,
                8.560340924
            ],
            "confirmed": 170,
            "country": "Sierra Leone",
            "hcw": 1,
            "probable": 0,
            "suspected": 10,
            "total_cases": 180
        }],
        "epiweek": "2014-W35",
        "probable": 163,
        "suspected": 43,
        "total": 536
    }, {
        "confirmed": 508,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 99,
            "country": "Guinea",
            "hcw": 3,
            "probable": 3,
            "suspected": 0,
            "total_cases": 102
        }, {
            "centroid": [-9.30784656357,
                6.44811846319
            ],
            "confirmed": 255,
            "country": "Liberia",
            "hcw": 8,
            "probable": 157,
            "suspected": 66,
            "total_cases": 478
        }, {
            "centroid": [
                8.10532486357,
                9.59363567392
            ],
            "confirmed": 3,
            "country": "Nigeria",
            "hcw": 1,
            "probable": 0,
            "suspected": 0,
            "total_cases": 3
        }, {
            "centroid": [-11.7921028963,
                8.560340924
            ],
            "confirmed": 151,
            "country": "Sierra Leone",
            "hcw": 3,
            "probable": 0,
            "suspected": 15,
            "total_cases": 166
        }],
        "epiweek": "2014-W36",
        "probable": 160,
        "suspected": 81,
        "total": 749
    }, {
        "confirmed": 424,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 69,
            "country": "Guinea",
            "hcw": 0,
            "probable": 10,
            "suspected": 2,
            "total_cases": 81
        }, {
            "centroid": [-9.30784656357,
                6.44811846319
            ],
            "confirmed": 158,
            "country": "Liberia",
            "hcw": 0,
            "probable": 258,
            "suspected": 165,
            "total_cases": 581
        }, {
            "centroid": [-11.7921028963,
                8.560340924
            ],
            "confirmed": 197,
            "country": "Sierra Leone",
            "hcw": 3,
            "probable": 0,
            "suspected": 19,
            "total_cases": 216
        }],
        "epiweek": "2014-W37",
        "probable": 268,
        "suspected": 186,
        "total": 878
    }, {
        "confirmed": 443,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 105,
            "country": "Guinea",
            "hcw": 2,
            "probable": 4,
            "suspected": 2,
            "total_cases": 111
        }, {
            "centroid": [-9.30784656357,
                6.44811846319
            ],
            "confirmed": 77,
            "country": "Liberia",
            "hcw": 1,
            "probable": 229,
            "suspected": 286,
            "total_cases": 592
        }, {
            "centroid": [-11.7921028963,
                8.560340924
            ],
            "confirmed": 261,
            "country": "Sierra Leone",
            "hcw": 0,
            "probable": 0,
            "suspected": 41,
            "total_cases": 302
        }],
        "epiweek": "2014-W38",
        "probable": 233,
        "suspected": 329,
        "total": 1005
    }, {
        "confirmed": 405,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 54,
            "country": "Guinea",
            "hcw": 1,
            "probable": 3,
            "suspected": 2,
            "total_cases": 59
        }, {
            "centroid": [-9.30784656357,
                6.44811846319
            ],
            "confirmed": 45,
            "country": "Liberia",
            "hcw": 6,
            "probable": 199,
            "suspected": 193,
            "total_cases": 437
        }, {
            "centroid": [-11.7921028963,
                8.560340924
            ],
            "confirmed": 306,
            "country": "Sierra Leone",
            "hcw": 0,
            "probable": 0,
            "suspected": 40,
            "total_cases": 346
        }],
        "epiweek": "2014-W39",
        "probable": 202,
        "suspected": 235,
        "total": 842
    }, {
        "confirmed": 485,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 94,
            "country": "Guinea",
            "hcw": 5,
            "probable": 6,
            "suspected": 27,
            "total_cases": 127
        }, {
            "centroid": [-9.30784656357,
                6.44811846319
            ],
            "confirmed": 12,
            "country": "Liberia",
            "hcw": 12,
            "probable": 153,
            "suspected": 186,
            "total_cases": 351
        }, {
            "centroid": [-11.7921028963,
                8.560340924
            ],
            "confirmed": 379,
            "country": "Sierra Leone",
            "hcw": 0,
            "probable": 0,
            "suspected": 94,
            "total_cases": 473
        }],
        "epiweek": "2014-W40",
        "probable": 159,
        "suspected": 307,
        "total": 951
    }, {
        "confirmed": 575,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 141,
            "country": "Guinea",
            "hcw": 1,
            "probable": 10,
            "suspected": 60,
            "total_cases": 211
        }, {
            "centroid": [-9.30784656357,
                6.44811846319
            ],
            "confirmed": 9,
            "country": "Liberia",
            "hcw": 2,
            "probable": 116,
            "suspected": 176,
            "total_cases": 301
        }, {
            "centroid": [-11.7921028963,
                8.560340924
            ],
            "confirmed": 425,
            "country": "Sierra Leone",
            "hcw": 0,
            "probable": 0,
            "suspected": 86,
            "total_cases": 511
        }],
        "epiweek": "2014-W41",
        "probable": 126,
        "suspected": 322,
        "total": 1023
    }, {
        "confirmed": 10,
        "countries": [{
            "centroid": [-10.9418254246,
                10.4385409412
            ],
            "confirmed": 0,
            "country": "Guinea",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-9.30784656357,
                6.44811846319
            ],
            "confirmed": 8,
            "country": "Liberia",
            "hcw": 3,
            "probable": 12,
            "suspected": 22,
            "total_cases": 42
        }, {
            "centroid": [-11.7921028963,
                8.560340924
            ],
            "confirmed": 2,
            "country": "Sierra Leone",
            "hcw": 1,
            "probable": 0,
            "suspected": 0,
            "total_cases": 2
        }],
        "epiweek": "NA",
        "probable": 13,
        "suspected": 22,
        "total": 45
    }];


    var districtData = [{
        "confirmed": 0,
        "districts": [{
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 0,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 0,
            "probable": 2,
            "suspected": 0,
            "total_cases": 2
        }],
        "epiweek": "2014-W01",
        "probable": 2,
        "suspected": 0,
        "total": 2
    }, {
        "confirmed": 8,
        "districts": [{
            "centroid": [-13.2516184791,
                8.46161143374
            ],
            "confirmed": 5,
            "country": "Sierra Leone",
            "district": "Freetown",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 5
        }, {
            "centroid": [-10.7177144281,
                8.09228705936
            ],
            "confirmed": 3,
            "country": "Sierra Leone",
            "district": "Kailahun",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 3
        }, {
            "centroid": [-12.7583542486,
                8.73493804628
            ],
            "confirmed": 0,
            "country": "Sierra Leone",
            "district": "Port Loko",
            "hcw": 0,
            "probable": 0,
            "suspected": 1,
            "total_cases": 1
        }],
        "epiweek": "2014-W02",
        "probable": 0,
        "suspected": 1,
        "total": 9
    }, {
        "confirmed": 0,
        "districts": [{
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 0,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 1,
            "probable": 5,
            "suspected": 0,
            "total_cases": 5
        }],
        "epiweek": "2014-W04",
        "probable": 5,
        "suspected": 0,
        "total": 5
    }, {
        "confirmed": 0,
        "districts": [{
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 0,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 1,
            "probable": 3,
            "suspected": 0,
            "total_cases": 3
        }],
        "epiweek": "2014-W05",
        "probable": 3,
        "suspected": 0,
        "total": 3
    }, {
        "confirmed": 8,
        "districts": [{
            "centroid": [-13.2516184791,
                8.46161143374
            ],
            "confirmed": 4,
            "country": "Sierra Leone",
            "district": "Freetown",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 4
        }, {
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 0,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 0,
            "probable": 5,
            "suspected": 0,
            "total_cases": 5
        }, {
            "centroid": [-10.7177144281,
                8.09228705936
            ],
            "confirmed": 1,
            "country": "Sierra Leone",
            "district": "Kailahun",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Monrovia",
            "hcw": 2,
            "probable": 2,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": [-12.7583542486,
                8.73493804628
            ],
            "confirmed": 3,
            "country": "Sierra Leone",
            "district": "Port Loko",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 3
        }],
        "epiweek": "2014-W06",
        "probable": 7,
        "suspected": 0,
        "total": 15
    }, {
        "confirmed": 0,
        "districts": [{
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 0,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 0,
            "probable": 2,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": [-9.33932375244,
                8.45053527378
            ],
            "confirmed": 0,
            "country": "Guinea",
            "district": "Macenta",
            "hcw": 1,
            "probable": 1,
            "suspected": 0,
            "total_cases": 1
        }],
        "epiweek": "2014-W07",
        "probable": 3,
        "suspected": 0,
        "total": 3
    }, {
        "confirmed": 0,
        "districts": [{
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 0,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 0,
            "probable": 3,
            "suspected": 0,
            "total_cases": 3
        }, {
            "centroid": [-9.33932375244,
                8.45053527378
            ],
            "confirmed": 0,
            "country": "Guinea",
            "district": "Macenta",
            "hcw": 1,
            "probable": 2,
            "suspected": 0,
            "total_cases": 2
        }],
        "epiweek": "2014-W08",
        "probable": 5,
        "suspected": 0,
        "total": 5
    }, {
        "confirmed": 1,
        "districts": [{
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 0,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 0,
            "probable": 5,
            "suspected": 0,
            "total_cases": 5
        }, {
            "centroid": [-9.33932375244,
                8.45053527378
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Macenta",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 2
        }],
        "epiweek": "2014-W09",
        "probable": 6,
        "suspected": 0,
        "total": 7
    }, {
        "confirmed": 11,
        "districts": [{
            "centroid": [-13.2516184791,
                8.46161143374
            ],
            "confirmed": 6,
            "country": "Sierra Leone",
            "district": "Freetown",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 6
        }, {
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 0,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 0,
            "probable": 3,
            "suspected": 0,
            "total_cases": 3
        }, {
            "centroid": [-10.7177144281,
                8.09228705936
            ],
            "confirmed": 3,
            "country": "Sierra Leone",
            "district": "Kailahun",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 3
        }, {
            "centroid": [-10.0272901436,
                9.24280287002
            ],
            "confirmed": 0,
            "country": "Guinea",
            "district": "Kissidougo",
            "hcw": 0,
            "probable": 2,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": [-9.33932375244,
                8.45053527378
            ],
            "confirmed": 2,
            "country": "Guinea",
            "district": "Macenta",
            "hcw": 1,
            "probable": 0,
            "suspected": 0,
            "total_cases": 2
        }],
        "epiweek": "2014-W10",
        "probable": 5,
        "suspected": 0,
        "total": 16
    }, {
        "confirmed": 11,
        "districts": [{
            "centroid": null,
            "confirmed": 1,
            "country": "Guinea",
            "district": "Conakry",
            "hcw": 1,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 7,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 0,
            "probable": 12,
            "suspected": 0,
            "total_cases": 19
        }, {
            "centroid": [-10.0272901436,
                9.24280287002
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Kissidougo",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": [-10.1012791495,
                10.5819899535
            ],
            "confirmed": 0,
            "country": "Guinea",
            "district": "Kouroussa",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-9.33932375244,
                8.45053527378
            ],
            "confirmed": 2,
            "country": "Guinea",
            "district": "Macenta",
            "hcw": 0,
            "probable": 2,
            "suspected": 0,
            "total_cases": 4
        }],
        "epiweek": "2014-W11",
        "probable": 16,
        "suspected": 0,
        "total": 27
    }, {
        "confirmed": 11,
        "districts": [{
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Bong",
            "hcw": 0,
            "probable": 0,
            "suspected": 1,
            "total_cases": 1
        }, {
            "centroid": [-11.0627538709,
                10.7299012426
            ],
            "confirmed": 0,
            "country": "Guinea",
            "district": "Dabola",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 10,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 2,
            "probable": 4,
            "suspected": 0,
            "total_cases": 14
        }, {
            "centroid": [-10.0272901436,
                9.24280287002
            ],
            "confirmed": 0,
            "country": "Guinea",
            "district": "Kissidougo",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Lofa",
            "hcw": 0,
            "probable": 0,
            "suspected": 1,
            "total_cases": 1
        }, {
            "centroid": [-9.33932375244,
                8.45053527378
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Macenta",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Monrovia",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 1
        }],
        "epiweek": "2014-W12",
        "probable": 7,
        "suspected": 2,
        "total": 20
    }, {
        "confirmed": 23,
        "districts": [{
            "centroid": null,
            "confirmed": 11,
            "country": "Guinea",
            "district": "Conakry",
            "hcw": 5,
            "probable": 0,
            "suspected": 0,
            "total_cases": 11
        }, {
            "centroid": [-11.0627538709,
                10.7299012426
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Dabola",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-10.7262027524,
                11.6069674927
            ],
            "confirmed": 0,
            "country": "Guinea",
            "district": "Dinguiraye",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 7,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 2,
            "probable": 2,
            "suspected": 0,
            "total_cases": 9
        }, {
            "centroid": [-9.33932375244,
                8.45053527378
            ],
            "confirmed": 4,
            "country": "Guinea",
            "district": "Macenta",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 5
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Monrovia",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 1
        }],
        "epiweek": "2014-W13",
        "probable": 5,
        "suspected": 0,
        "total": 28
    }, {
        "confirmed": 23,
        "districts": [{
            "centroid": null,
            "confirmed": 9,
            "country": "Guinea",
            "district": "Conakry",
            "hcw": 3,
            "probable": 2,
            "suspected": 0,
            "total_cases": 11
        }, {
            "centroid": [-11.0627538709,
                10.7299012426
            ],
            "confirmed": 0,
            "country": "Guinea",
            "district": "Dabola",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 11,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 0,
            "probable": 2,
            "suspected": 0,
            "total_cases": 13
        }, {
            "centroid": [-10.0272901436,
                9.24280287002
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Kissidougo",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Lofa",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-9.33932375244,
                8.45053527378
            ],
            "confirmed": 2,
            "country": "Guinea",
            "district": "Macenta",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Monrovia",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 1
        }],
        "epiweek": "2014-W14",
        "probable": 7,
        "suspected": 0,
        "total": 30
    }, {
        "confirmed": 37,
        "districts": [{
            "centroid": null,
            "confirmed": 8,
            "country": "Guinea",
            "district": "Conakry",
            "hcw": 4,
            "probable": 0,
            "suspected": 0,
            "total_cases": 8
        }, {
            "centroid": [-13.2516184791,
                8.46161143374
            ],
            "confirmed": 5,
            "country": "Sierra Leone",
            "district": "Freetown",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 5
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Grand Cape Mount",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 19,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 19
        }, {
            "centroid": [-10.7177144281,
                8.09228705936
            ],
            "confirmed": 3,
            "country": "Sierra Leone",
            "district": "Kailahun",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 3
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Lofa",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Margibi",
            "hcw": 0,
            "probable": 3,
            "suspected": 0,
            "total_cases": 3
        }, {
            "centroid": null,
            "confirmed": 2,
            "country": "Liberia",
            "district": "Monrovia",
            "hcw": 1,
            "probable": 1,
            "suspected": 0,
            "total_cases": 3
        }, {
            "centroid": [-12.7583542486,
                8.73493804628
            ],
            "confirmed": 0,
            "country": "Sierra Leone",
            "district": "Port Loko",
            "hcw": 0,
            "probable": 0,
            "suspected": 1,
            "total_cases": 1
        }, {
            "centroid": [-11.5724206143,
                7.32219946466
            ],
            "confirmed": 0,
            "country": "Sierra Leone",
            "district": "Pujehun",
            "hcw": 0,
            "probable": 0,
            "suspected": 1,
            "total_cases": 1
        }],
        "epiweek": "2014-W15",
        "probable": 6,
        "suspected": 2,
        "total": 45
    }, {
        "confirmed": 16,
        "districts": [{
            "centroid": null,
            "confirmed": 9,
            "country": "Guinea",
            "district": "Conakry",
            "hcw": 2,
            "probable": 0,
            "suspected": 0,
            "total_cases": 9
        }, {
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 7,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 7
        }],
        "epiweek": "2014-W16",
        "probable": 0,
        "suspected": 0,
        "total": 16
    }, {
        "confirmed": 10,
        "districts": [{
            "centroid": null,
            "confirmed": 2,
            "country": "Guinea",
            "district": "Conakry",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 8,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 8
        }],
        "epiweek": "2014-W17",
        "probable": 0,
        "suspected": 0,
        "total": 10
    }, {
        "confirmed": 3,
        "districts": [{
            "centroid": null,
            "confirmed": 0,
            "country": "Guinea",
            "district": "Conakry",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 3,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 0,
            "probable": 6,
            "suspected": 0,
            "total_cases": 9
        }, {
            "centroid": [-13.3591246619,
                10.9192552488
            ],
            "confirmed": 0,
            "country": "Guinea",
            "district": "Telimele",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 1
        }],
        "epiweek": "2014-W18",
        "probable": 8,
        "suspected": 0,
        "total": 11
    }, {
        "confirmed": 19,
        "districts": [{
            "centroid": [-13.2516184791,
                8.46161143374
            ],
            "confirmed": 8,
            "country": "Sierra Leone",
            "district": "Freetown",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 8
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Grand Cape Mount",
            "hcw": 1,
            "probable": 1,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 9,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 0,
            "probable": 3,
            "suspected": 0,
            "total_cases": 12
        }, {
            "centroid": null,
            "confirmed": 1,
            "country": "Liberia",
            "district": "Lofa",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": null,
            "confirmed": 1,
            "country": "Liberia",
            "district": "Monrovia",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-11.5724206143,
                7.32219946466
            ],
            "confirmed": 0,
            "country": "Sierra Leone",
            "district": "Pujehun",
            "hcw": 0,
            "probable": 0,
            "suspected": 1,
            "total_cases": 1
        }],
        "epiweek": "2014-W19",
        "probable": 4,
        "suspected": 1,
        "total": 24
    }, {
        "confirmed": 6,
        "districts": [{
            "centroid": null,
            "confirmed": 0,
            "country": "Guinea",
            "district": "Conakry",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 6,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 6
        }, {
            "centroid": [-13.3591246619,
                10.9192552488
            ],
            "confirmed": 0,
            "country": "Guinea",
            "district": "Telimele",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 1
        }],
        "epiweek": "2014-W20",
        "probable": 2,
        "suspected": 0,
        "total": 8
    }, {
        "confirmed": 22,
        "districts": [{
            "centroid": [-14.0545378494,
                10.3704523359
            ],
            "confirmed": 0,
            "country": "Guinea",
            "district": "Boffa",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": null,
            "confirmed": 1,
            "country": "Guinea",
            "district": "Conakry",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 10,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 10
        }, {
            "centroid": [-10.1012791495,
                10.5819899535
            ],
            "confirmed": 0,
            "country": "Guinea",
            "district": "Kouroussa",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-9.33932375244,
                8.45053527378
            ],
            "confirmed": 7,
            "country": "Guinea",
            "district": "Macenta",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 7
        }, {
            "centroid": [-13.3591246619,
                10.9192552488
            ],
            "confirmed": 4,
            "country": "Guinea",
            "district": "Telimele",
            "hcw": 2,
            "probable": 1,
            "suspected": 0,
            "total_cases": 5
        }],
        "epiweek": "2014-W21",
        "probable": 4,
        "suspected": 0,
        "total": 26
    }, {
        "confirmed": 39,
        "districts": [{
            "centroid": [-14.0545378494,
                10.3704523359
            ],
            "confirmed": 2,
            "country": "Guinea",
            "district": "Boffa",
            "hcw": 0,
            "probable": 2,
            "suspected": 0,
            "total_cases": 4
        }, {
            "centroid": null,
            "confirmed": 3,
            "country": "Guinea",
            "district": "Conakry",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 3
        }, {
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 7,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 0,
            "probable": 6,
            "suspected": 0,
            "total_cases": 13
        }, {
            "centroid": [-10.1012791495,
                10.5819899535
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Kouroussa",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": null,
            "confirmed": 4,
            "country": "Liberia",
            "district": "Lofa",
            "hcw": 3,
            "probable": 0,
            "suspected": 0,
            "total_cases": 4
        }, {
            "centroid": [-9.33932375244,
                8.45053527378
            ],
            "confirmed": 6,
            "country": "Guinea",
            "district": "Macenta",
            "hcw": 0,
            "probable": 4,
            "suspected": 0,
            "total_cases": 10
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Monrovia",
            "hcw": 0,
            "probable": 0,
            "suspected": 1,
            "total_cases": 1
        }, {
            "centroid": [-13.3591246619,
                10.9192552488
            ],
            "confirmed": 16,
            "country": "Guinea",
            "district": "Telimele",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 16
        }],
        "epiweek": "2014-W22",
        "probable": 12,
        "suspected": 1,
        "total": 52
    }, {
        "confirmed": 32,
        "districts": [{
            "centroid": [-14.0545378494,
                10.3704523359
            ],
            "confirmed": 7,
            "country": "Guinea",
            "district": "Boffa",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 8
        }, {
            "centroid": null,
            "confirmed": 8,
            "country": "Guinea",
            "district": "Conakry",
            "hcw": 1,
            "probable": 0,
            "suspected": 0,
            "total_cases": 8
        }, {
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 6,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 1,
            "probable": 1,
            "suspected": 0,
            "total_cases": 7
        }, {
            "centroid": [-10.7177144281,
                8.09228705936
            ],
            "confirmed": 5,
            "country": "Sierra Leone",
            "district": "Kailahun",
            "hcw": 1,
            "probable": 1,
            "suspected": 0,
            "total_cases": 6
        }, {
            "centroid": [-11.2257628471,
                7.94214556432
            ],
            "confirmed": 1,
            "country": "Sierra Leone",
            "district": "Kenema",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": null,
            "confirmed": 1,
            "country": "Liberia",
            "district": "Lofa",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-9.33932375244,
                8.45053527378
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Macenta",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Monrovia",
            "hcw": 0,
            "probable": 0,
            "suspected": 2,
            "total_cases": 2
        }, {
            "centroid": [-12.7583542486,
                8.73493804628
            ],
            "confirmed": 1,
            "country": "Sierra Leone",
            "district": "Port Loko",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-13.3591246619,
                10.9192552488
            ],
            "confirmed": 2,
            "country": "Guinea",
            "district": "Telimele",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 2
        }],
        "epiweek": "2014-W23",
        "probable": 3,
        "suspected": 2,
        "total": 37
    }, {
        "confirmed": 91,
        "districts": [{
            "centroid": [-14.0545378494,
                10.3704523359
            ],
            "confirmed": 3,
            "country": "Guinea",
            "district": "Boffa",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 3
        }, {
            "centroid": null,
            "confirmed": 1,
            "country": "Guinea",
            "district": "Conakry",
            "hcw": 1,
            "probable": 2,
            "suspected": 0,
            "total_cases": 3
        }, {
            "centroid": [-13.2516184791,
                8.46161143374
            ],
            "confirmed": 7,
            "country": "Sierra Leone",
            "district": "Freetown",
            "hcw": 0,
            "probable": 0,
            "suspected": 1,
            "total_cases": 8
        }, {
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 24,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 25
        }, {
            "centroid": [-10.7177144281,
                8.09228705936
            ],
            "confirmed": 36,
            "country": "Sierra Leone",
            "district": "Kailahun",
            "hcw": 7,
            "probable": 22,
            "suspected": 0,
            "total_cases": 58
        }, {
            "centroid": null,
            "confirmed": 15,
            "country": "Liberia",
            "district": "Lofa",
            "hcw": 5,
            "probable": 0,
            "suspected": 1,
            "total_cases": 16
        }, {
            "centroid": null,
            "confirmed": 4,
            "country": "Liberia",
            "district": "Monrovia",
            "hcw": 0,
            "probable": 0,
            "suspected": 2,
            "total_cases": 6
        }, {
            "centroid": [-12.7583542486,
                8.73493804628
            ],
            "confirmed": 0,
            "country": "Sierra Leone",
            "district": "Port Loko",
            "hcw": 0,
            "probable": 0,
            "suspected": 2,
            "total_cases": 2
        }, {
            "centroid": [-13.3591246619,
                10.9192552488
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Telimele",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }],
        "epiweek": "2014-W24",
        "probable": 25,
        "suspected": 6,
        "total": 122
    }, {
        "confirmed": 111,
        "districts": [{
            "centroid": [-11.750688035,
                7.9935946161
            ],
            "confirmed": 1,
            "country": "Sierra Leone",
            "district": "Bo",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-14.0545378494,
                10.3704523359
            ],
            "confirmed": 3,
            "country": "Guinea",
            "district": "Boffa",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 3
        }, {
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 15,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 15
        }, {
            "centroid": [-10.7177144281,
                8.09228705936
            ],
            "confirmed": 54,
            "country": "Sierra Leone",
            "district": "Kailahun",
            "hcw": 5,
            "probable": 1,
            "suspected": 0,
            "total_cases": 55
        }, {
            "centroid": [-11.2257628471,
                7.94214556432
            ],
            "confirmed": 21,
            "country": "Sierra Leone",
            "district": "Kenema",
            "hcw": 2,
            "probable": 0,
            "suspected": 0,
            "total_cases": 21
        }, {
            "centroid": null,
            "confirmed": 14,
            "country": "Liberia",
            "district": "Lofa",
            "hcw": 1,
            "probable": 0,
            "suspected": 4,
            "total_cases": 18
        }, {
            "centroid": null,
            "confirmed": 3,
            "country": "Liberia",
            "district": "Monrovia",
            "hcw": 1,
            "probable": 0,
            "suspected": 3,
            "total_cases": 6
        }],
        "epiweek": "2014-W25",
        "probable": 1,
        "suspected": 7,
        "total": 119
    }, {
        "confirmed": 69,
        "districts": [{
            "centroid": [-14.0545378494,
                10.3704523359
            ],
            "confirmed": 2,
            "country": "Guinea",
            "district": "Boffa",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": null,
            "confirmed": 4,
            "country": "Guinea",
            "district": "Conakry",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 5
        }, {
            "centroid": [-13.2516184791,
                8.46161143374
            ],
            "confirmed": 1,
            "country": "Sierra Leone",
            "district": "Freetown",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 16,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 17
        }, {
            "centroid": [-10.7177144281,
                8.09228705936
            ],
            "confirmed": 18,
            "country": "Sierra Leone",
            "district": "Kailahun",
            "hcw": 0,
            "probable": 2,
            "suspected": 0,
            "total_cases": 20
        }, {
            "centroid": [-11.2257628471,
                7.94214556432
            ],
            "confirmed": 16,
            "country": "Sierra Leone",
            "district": "Kenema",
            "hcw": 5,
            "probable": 0,
            "suspected": 0,
            "total_cases": 16
        }, {
            "centroid": null,
            "confirmed": 3,
            "country": "Liberia",
            "district": "Lofa",
            "hcw": 1,
            "probable": 0,
            "suspected": 2,
            "total_cases": 5
        }, {
            "centroid": null,
            "confirmed": 1,
            "country": "Liberia",
            "district": "Margibi",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": null,
            "confirmed": 8,
            "country": "Liberia",
            "district": "Monrovia",
            "hcw": 2,
            "probable": 2,
            "suspected": 0,
            "total_cases": 10
        }],
        "epiweek": "2014-W26",
        "probable": 6,
        "suspected": 2,
        "total": 77
    }, {
        "confirmed": 91,
        "districts": [{
            "centroid": [-11.750688035,
                7.9935946161
            ],
            "confirmed": 1,
            "country": "Sierra Leone",
            "district": "Bo",
            "hcw": 1,
            "probable": 0,
            "suspected": 1,
            "total_cases": 2
        }, {
            "centroid": [-12.1955446453,
                9.32328913639
            ],
            "confirmed": 1,
            "country": "Sierra Leone",
            "district": "Bombali",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": null,
            "confirmed": 1,
            "country": "Guinea",
            "district": "Conakry",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 0,
            "probable": 2,
            "suspected": 0,
            "total_cases": 3
        }, {
            "centroid": [-10.7177144281,
                8.09228705936
            ],
            "confirmed": 46,
            "country": "Sierra Leone",
            "district": "Kailahun",
            "hcw": 4,
            "probable": 0,
            "suspected": 0,
            "total_cases": 46
        }, {
            "centroid": [-12.8268555724,
                9.17121326335
            ],
            "confirmed": 1,
            "country": "Sierra Leone",
            "district": "Kambia",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-11.2257628471,
                7.94214556432
            ],
            "confirmed": 34,
            "country": "Sierra Leone",
            "district": "Kenema",
            "hcw": 6,
            "probable": 0,
            "suspected": 0,
            "total_cases": 34
        }, {
            "centroid": null,
            "confirmed": 1,
            "country": "Liberia",
            "district": "Lofa",
            "hcw": 0,
            "probable": 1,
            "suspected": 1,
            "total_cases": 3
        }, {
            "centroid": null,
            "confirmed": 4,
            "country": "Liberia",
            "district": "Monrovia",
            "hcw": 1,
            "probable": 3,
            "suspected": 3,
            "total_cases": 10
        }, {
            "centroid": null,
            "confirmed": 1,
            "country": "Liberia",
            "district": "Nimba",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }],
        "epiweek": "2014-W27",
        "probable": 6,
        "suspected": 5,
        "total": 102
    }, {
        "confirmed": 132,
        "districts": [{
            "centroid": [-11.750688035,
                7.9935946161
            ],
            "confirmed": 1,
            "country": "Sierra Leone",
            "district": "Bo",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-14.0545378494,
                10.3704523359
            ],
            "confirmed": 0,
            "country": "Guinea",
            "district": "Boffa",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-11.0627538709,
                10.7299012426
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Dabola",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-13.2516184791,
                8.46161143374
            ],
            "confirmed": 2,
            "country": "Sierra Leone",
            "district": "Freetown",
            "hcw": 0,
            "probable": 0,
            "suspected": 1,
            "total_cases": 3
        }, {
            "centroid": null,
            "confirmed": 1,
            "country": "Liberia",
            "district": "Gbarpolu",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Grand Bassa",
            "hcw": 0,
            "probable": 0,
            "suspected": 1,
            "total_cases": 1
        }, {
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 5,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 5
        }, {
            "centroid": [-10.7177144281,
                8.09228705936
            ],
            "confirmed": 83,
            "country": "Sierra Leone",
            "district": "Kailahun",
            "hcw": 5,
            "probable": 1,
            "suspected": 0,
            "total_cases": 84
        }, {
            "centroid": [-11.2257628471,
                7.94214556432
            ],
            "confirmed": 18,
            "country": "Sierra Leone",
            "district": "Kenema",
            "hcw": 1,
            "probable": 0,
            "suspected": 0,
            "total_cases": 18
        }, {
            "centroid": null,
            "confirmed": 6,
            "country": "Liberia",
            "district": "Lofa",
            "hcw": 3,
            "probable": 4,
            "suspected": 0,
            "total_cases": 10
        }, {
            "centroid": null,
            "confirmed": 11,
            "country": "Liberia",
            "district": "Monrovia",
            "hcw": 2,
            "probable": 4,
            "suspected": 3,
            "total_cases": 18
        }, {
            "centroid": null,
            "confirmed": 1,
            "country": "Liberia",
            "district": "Nimba",
            "hcw": 0,
            "probable": 0,
            "suspected": 3,
            "total_cases": 4
        }, {
            "centroid": [-12.7583542486,
                8.73493804628
            ],
            "confirmed": 2,
            "country": "Sierra Leone",
            "district": "Port Loko",
            "hcw": 1,
            "probable": 0,
            "suspected": 1,
            "total_cases": 3
        }, {
            "centroid": [-11.5724206143,
                7.32219946466
            ],
            "confirmed": 1,
            "country": "Sierra Leone",
            "district": "Pujehun",
            "hcw": 0,
            "probable": 0,
            "suspected": 1,
            "total_cases": 2
        }],
        "epiweek": "2014-W28",
        "probable": 10,
        "suspected": 10,
        "total": 152
    }, {
        "confirmed": 83,
        "districts": [{
            "centroid": [-11.750688035,
                7.9935946161
            ],
            "confirmed": 1,
            "country": "Sierra Leone",
            "district": "Bo",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": null,
            "confirmed": 3,
            "country": "Liberia",
            "district": "Bomi",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 3
        }, {
            "centroid": null,
            "confirmed": 5,
            "country": "Liberia",
            "district": "Bong",
            "hcw": 7,
            "probable": 5,
            "suspected": 4,
            "total_cases": 14
        }, {
            "centroid": [-12.2848428855,
                7.50414610209
            ],
            "confirmed": 1,
            "country": "Sierra Leone",
            "district": "Bonthe",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-13.2516184791,
                8.46161143374
            ],
            "confirmed": 2,
            "country": "Sierra Leone",
            "district": "Freetown",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 4,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 0,
            "probable": 3,
            "suspected": 0,
            "total_cases": 7
        }, {
            "centroid": [-10.7177144281,
                8.09228705936
            ],
            "confirmed": 35,
            "country": "Sierra Leone",
            "district": "Kailahun",
            "hcw": 3,
            "probable": 3,
            "suspected": 0,
            "total_cases": 38
        }, {
            "centroid": [-11.2257628471,
                7.94214556432
            ],
            "confirmed": 27,
            "country": "Sierra Leone",
            "district": "Kenema",
            "hcw": 7,
            "probable": 0,
            "suspected": 0,
            "total_cases": 27
        }, {
            "centroid": [-10.9664252552,
                8.69471402857
            ],
            "confirmed": 1,
            "country": "Sierra Leone",
            "district": "Kono",
            "hcw": 1,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Lofa",
            "hcw": 0,
            "probable": 17,
            "suspected": 17,
            "total_cases": 34
        }, {
            "centroid": [-9.33932375244,
                8.45053527378
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Macenta",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": null,
            "confirmed": 2,
            "country": "Liberia",
            "district": "Monrovia",
            "hcw": 2,
            "probable": 21,
            "suspected": 3,
            "total_cases": 26
        }, {
            "centroid": null,
            "confirmed": 1,
            "country": "Liberia",
            "district": "Nimba",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }],
        "epiweek": "2014-W29",
        "probable": 49,
        "suspected": 24,
        "total": 156
    }, {
        "confirmed": 169,
        "districts": [{
            "centroid": [-11.750688035,
                7.9935946161
            ],
            "confirmed": 6,
            "country": "Sierra Leone",
            "district": "Bo",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 6
        }, {
            "centroid": [-12.1955446453,
                9.32328913639
            ],
            "confirmed": 3,
            "country": "Sierra Leone",
            "district": "Bombali",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 3
        }, {
            "centroid": null,
            "confirmed": 2,
            "country": "Liberia",
            "district": "Bomi",
            "hcw": 1,
            "probable": 9,
            "suspected": 0,
            "total_cases": 11
        }, {
            "centroid": null,
            "confirmed": 2,
            "country": "Liberia",
            "district": "Bong",
            "hcw": 7,
            "probable": 9,
            "suspected": 14,
            "total_cases": 25
        }, {
            "centroid": null,
            "confirmed": 18,
            "country": "Guinea",
            "district": "Conakry",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 18
        }, {
            "centroid": [-13.0627260644,
                9.41630127096
            ],
            "confirmed": 0,
            "country": "Guinea",
            "district": "Forecariah",
            "hcw": 0,
            "probable": 2,
            "suspected": 1,
            "total_cases": 3
        }, {
            "centroid": [-13.2516184791,
                8.46161143374
            ],
            "confirmed": 2,
            "country": "Sierra Leone",
            "district": "Freetown",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": null,
            "confirmed": 1,
            "country": "Liberia",
            "district": "Grand Bassa",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 8,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 0,
            "probable": 11,
            "suspected": 0,
            "total_cases": 19
        }, {
            "centroid": [-10.7177144281,
                8.09228705936
            ],
            "confirmed": 24,
            "country": "Sierra Leone",
            "district": "Kailahun",
            "hcw": 10,
            "probable": 0,
            "suspected": 0,
            "total_cases": 24
        }, {
            "centroid": [-11.2257628471,
                7.94214556432
            ],
            "confirmed": 43,
            "country": "Sierra Leone",
            "district": "Kenema",
            "hcw": 1,
            "probable": 0,
            "suspected": 0,
            "total_cases": 43
        }, {
            "centroid": [-10.1012791495,
                10.5819899535
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Kouroussa",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": null,
            "confirmed": 5,
            "country": "Liberia",
            "district": "Lofa",
            "hcw": 2,
            "probable": 25,
            "suspected": 1,
            "total_cases": 31
        }, {
            "centroid": [-9.33932375244,
                8.45053527378
            ],
            "confirmed": 42,
            "country": "Guinea",
            "district": "Macenta",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 42
        }, {
            "centroid": null,
            "confirmed": 1,
            "country": "Liberia",
            "district": "Margibi",
            "hcw": 3,
            "probable": 0,
            "suspected": 5,
            "total_cases": 6
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Monrovia",
            "hcw": 5,
            "probable": 16,
            "suspected": 6,
            "total_cases": 22
        }, {
            "centroid": [-12.4546600261,
                8.08506816093
            ],
            "confirmed": 1,
            "country": "Sierra Leone",
            "district": "Moyamba",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-8.7967554244,
                7.9546695681
            ],
            "confirmed": 3,
            "country": "Guinea",
            "district": "N'Zerekore",
            "hcw": 0,
            "probable": 4,
            "suspected": 0,
            "total_cases": 7
        }, {
            "centroid": null,
            "confirmed": 1,
            "country": "Liberia",
            "district": "Nimba",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-12.7583542486,
                8.73493804628
            ],
            "confirmed": 2,
            "country": "Sierra Leone",
            "district": "Port Loko",
            "hcw": 2,
            "probable": 0,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": [-9.4666501767,
                11.6823785627
            ],
            "confirmed": 3,
            "country": "Guinea",
            "district": "Siguiri",
            "hcw": 1,
            "probable": 0,
            "suspected": 0,
            "total_cases": 3
        }, {
            "centroid": [-11.9021619466,
                8.6944297019
            ],
            "confirmed": 1,
            "country": "Sierra Leone",
            "district": "Tonkolili",
            "hcw": 1,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }],
        "epiweek": "2014-W30",
        "probable": 76,
        "suspected": 27,
        "total": 272
    }, {
        "confirmed": 136,
        "districts": [{
            "centroid": [-11.750688035,
                7.9935946161
            ],
            "confirmed": 3,
            "country": "Sierra Leone",
            "district": "Bo",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 3
        }, {
            "centroid": [-12.1955446453,
                9.32328913639
            ],
            "confirmed": 0,
            "country": "Sierra Leone",
            "district": "Bombali",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": null,
            "confirmed": 1,
            "country": "Liberia",
            "district": "Bomi",
            "hcw": 2,
            "probable": 3,
            "suspected": 0,
            "total_cases": 4
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Bong",
            "hcw": 1,
            "probable": 3,
            "suspected": 14,
            "total_cases": 17
        }, {
            "centroid": null,
            "confirmed": 1,
            "country": "Guinea",
            "district": "Conakry",
            "hcw": 0,
            "probable": 0,
            "suspected": 2,
            "total_cases": 3
        }, {
            "centroid": [-13.2516184791,
                8.46161143374
            ],
            "confirmed": 0,
            "country": "Sierra Leone",
            "district": "Freetown",
            "hcw": 1,
            "probable": 1,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Grand Bassa",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": null,
            "confirmed": 3,
            "country": "Liberia",
            "district": "Grand Cape Mount",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 4
        }, {
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 3,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 0,
            "probable": 13,
            "suspected": 1,
            "total_cases": 17
        }, {
            "centroid": [-10.7177144281,
                8.09228705936
            ],
            "confirmed": 40,
            "country": "Sierra Leone",
            "district": "Kailahun",
            "hcw": 10,
            "probable": 0,
            "suspected": 0,
            "total_cases": 40
        }, {
            "centroid": [-11.2257628471,
                7.94214556432
            ],
            "confirmed": 44,
            "country": "Sierra Leone",
            "district": "Kenema",
            "hcw": 3,
            "probable": 0,
            "suspected": 0,
            "total_cases": 44
        }, {
            "centroid": [-10.9664252552,
                8.69471402857
            ],
            "confirmed": 0,
            "country": "Sierra Leone",
            "district": "Kono",
            "hcw": 0,
            "probable": 1,
            "suspected": 31,
            "total_cases": 32
        }, {
            "centroid": [
                3.39823109352,
                6.4615001567
            ],
            "confirmed": 5,
            "country": "Nigeria",
            "district": "Lagos Island",
            "hcw": 4,
            "probable": 0,
            "suspected": 0,
            "total_cases": 5
        }, {
            "centroid": null,
            "confirmed": 20,
            "country": "Liberia",
            "district": "Lofa",
            "hcw": 3,
            "probable": 71,
            "suspected": 3,
            "total_cases": 94
        }, {
            "centroid": [-9.33932375244,
                8.45053527378
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Macenta",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Margibi",
            "hcw": 0,
            "probable": 1,
            "suspected": 1,
            "total_cases": 2
        }, {
            "centroid": null,
            "confirmed": 1,
            "country": "Liberia",
            "district": "Monrovia",
            "hcw": 4,
            "probable": 31,
            "suspected": 1,
            "total_cases": 33
        }, {
            "centroid": [-12.4546600261,
                8.08506816093
            ],
            "confirmed": 1,
            "country": "Sierra Leone",
            "district": "Moyamba",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-8.7967554244,
                7.9546695681
            ],
            "confirmed": 4,
            "country": "Guinea",
            "district": "N'Zerekore",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 4
        }, {
            "centroid": null,
            "confirmed": 1,
            "country": "Liberia",
            "district": "Nimba",
            "hcw": 1,
            "probable": 4,
            "suspected": 2,
            "total_cases": 7
        }, {
            "centroid": [-12.6356583491,
                10.8964798332
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Pita",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": [-12.7583542486,
                8.73493804628
            ],
            "confirmed": 2,
            "country": "Sierra Leone",
            "district": "Port Loko",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": [-11.5724206143,
                7.32219946466
            ],
            "confirmed": 2,
            "country": "Sierra Leone",
            "district": "Pujehun",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": null,
            "confirmed": 1,
            "country": "Liberia",
            "district": "Rivercess",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-9.4666501767,
                11.6823785627
            ],
            "confirmed": 2,
            "country": "Guinea",
            "district": "Siguiri",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 2
        }],
        "epiweek": "2014-W31",
        "probable": 132,
        "suspected": 55,
        "total": 323
    }, {
        "confirmed": 113,
        "districts": [{
            "centroid": [-11.750688035,
                7.9935946161
            ],
            "confirmed": 7,
            "country": "Sierra Leone",
            "district": "Bo",
            "hcw": 2,
            "probable": 0,
            "suspected": 0,
            "total_cases": 7
        }, {
            "centroid": [-12.1955446453,
                9.32328913639
            ],
            "confirmed": 1,
            "country": "Sierra Leone",
            "district": "Bombali",
            "hcw": 1,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": null,
            "confirmed": 1,
            "country": "Liberia",
            "district": "Bomi",
            "hcw": 0,
            "probable": 10,
            "suspected": 0,
            "total_cases": 11
        }, {
            "centroid": null,
            "confirmed": 3,
            "country": "Guinea",
            "district": "Conakry",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 3
        }, {
            "centroid": [-13.2516184791,
                8.46161143374
            ],
            "confirmed": 10,
            "country": "Sierra Leone",
            "district": "Freetown",
            "hcw": 3,
            "probable": 0,
            "suspected": 0,
            "total_cases": 10
        }, {
            "centroid": null,
            "confirmed": 1,
            "country": "Liberia",
            "district": "Grand Bassa",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 10,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 10
        }, {
            "centroid": [-10.7177144281,
                8.09228705936
            ],
            "confirmed": 19,
            "country": "Sierra Leone",
            "district": "Kailahun",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 19
        }, {
            "centroid": [-11.2257628471,
                7.94214556432
            ],
            "confirmed": 36,
            "country": "Sierra Leone",
            "district": "Kenema",
            "hcw": 1,
            "probable": 0,
            "suspected": 0,
            "total_cases": 36
        }, {
            "centroid": [
                3.39823109352,
                6.4615001567
            ],
            "confirmed": 5,
            "country": "Nigeria",
            "district": "Lagos Island",
            "hcw": 4,
            "probable": 0,
            "suspected": 0,
            "total_cases": 5
        }, {
            "centroid": null,
            "confirmed": 5,
            "country": "Liberia",
            "district": "Lofa",
            "hcw": 0,
            "probable": 41,
            "suspected": 4,
            "total_cases": 50
        }, {
            "centroid": [-9.33932375244,
                8.45053527378
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Macenta",
            "hcw": 1,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Margibi",
            "hcw": 3,
            "probable": 2,
            "suspected": 3,
            "total_cases": 5
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Monrovia",
            "hcw": 6,
            "probable": 9,
            "suspected": 0,
            "total_cases": 9
        }, {
            "centroid": [-12.4546600261,
                8.08506816093
            ],
            "confirmed": 3,
            "country": "Sierra Leone",
            "district": "Moyamba",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 3
        }, {
            "centroid": [-8.7967554244,
                7.9546695681
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "N'Zerekore",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-12.7583542486,
                8.73493804628
            ],
            "confirmed": 8,
            "country": "Sierra Leone",
            "district": "Port Loko",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 8
        }, {
            "centroid": [-11.5724206143,
                7.32219946466
            ],
            "confirmed": 1,
            "country": "Sierra Leone",
            "district": "Pujehun",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-9.10432690304,
                7.53675677824
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Yomou",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }],
        "epiweek": "2014-W32",
        "probable": 62,
        "suspected": 7,
        "total": 182
    }, {
        "confirmed": 206,
        "districts": [{
            "centroid": [-11.750688035,
                7.9935946161
            ],
            "confirmed": 3,
            "country": "Sierra Leone",
            "district": "Bo",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 4
        }, {
            "centroid": [-12.1955446453,
                9.32328913639
            ],
            "confirmed": 2,
            "country": "Sierra Leone",
            "district": "Bombali",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": null,
            "confirmed": 2,
            "country": "Liberia",
            "district": "Bomi",
            "hcw": 2,
            "probable": 0,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": null,
            "confirmed": 11,
            "country": "Liberia",
            "district": "Bong",
            "hcw": 8,
            "probable": 8,
            "suspected": 13,
            "total_cases": 32
        }, {
            "centroid": null,
            "confirmed": 3,
            "country": "Guinea",
            "district": "Conakry",
            "hcw": 2,
            "probable": 0,
            "suspected": 0,
            "total_cases": 3
        }, {
            "centroid": [-13.4939931579,
                10.1206853671
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Dubreka",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-13.2516184791,
                8.46161143374
            ],
            "confirmed": 4,
            "country": "Sierra Leone",
            "district": "Freetown",
            "hcw": 4,
            "probable": 0,
            "suspected": 0,
            "total_cases": 4
        }, {
            "centroid": null,
            "confirmed": 4,
            "country": "Liberia",
            "district": "Grand Bassa",
            "hcw": 1,
            "probable": 1,
            "suspected": 4,
            "total_cases": 9
        }, {
            "centroid": null,
            "confirmed": 1,
            "country": "Liberia",
            "district": "Grand Cape Mount",
            "hcw": 1,
            "probable": 2,
            "suspected": 0,
            "total_cases": 3
        }, {
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 4,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 0,
            "probable": 5,
            "suspected": 0,
            "total_cases": 9
        }, {
            "centroid": [-10.7177144281,
                8.09228705936
            ],
            "confirmed": 20,
            "country": "Sierra Leone",
            "district": "Kailahun",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 20
        }, {
            "centroid": [-11.2257628471,
                7.94214556432
            ],
            "confirmed": 41,
            "country": "Sierra Leone",
            "district": "Kenema",
            "hcw": 13,
            "probable": 0,
            "suspected": 0,
            "total_cases": 41
        }, {
            "centroid": [
                3.39823109352,
                6.4615001567
            ],
            "confirmed": 2,
            "country": "Nigeria",
            "district": "Lagos Island",
            "hcw": 1,
            "probable": 0,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": null,
            "confirmed": 42,
            "country": "Liberia",
            "district": "Lofa",
            "hcw": 1,
            "probable": 58,
            "suspected": 1,
            "total_cases": 101
        }, {
            "centroid": [-9.33932375244,
                8.45053527378
            ],
            "confirmed": 12,
            "country": "Guinea",
            "district": "Macenta",
            "hcw": 5,
            "probable": 0,
            "suspected": 0,
            "total_cases": 12
        }, {
            "centroid": null,
            "confirmed": 24,
            "country": "Liberia",
            "district": "Margibi",
            "hcw": 19,
            "probable": 22,
            "suspected": 11,
            "total_cases": 57
        }, {
            "centroid": null,
            "confirmed": 8,
            "country": "Liberia",
            "district": "Monrovia",
            "hcw": 10,
            "probable": 42,
            "suspected": 0,
            "total_cases": 50
        }, {
            "centroid": [-12.4546600261,
                8.08506816093
            ],
            "confirmed": 1,
            "country": "Sierra Leone",
            "district": "Moyamba",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-8.7967554244,
                7.9546695681
            ],
            "confirmed": 3,
            "country": "Guinea",
            "district": "N'Zerekore",
            "hcw": 1,
            "probable": 0,
            "suspected": 0,
            "total_cases": 3
        }, {
            "centroid": null,
            "confirmed": 1,
            "country": "Liberia",
            "district": "Nimba",
            "hcw": 4,
            "probable": 16,
            "suspected": 6,
            "total_cases": 23
        }, {
            "centroid": [-12.6356583491,
                10.8964798332
            ],
            "confirmed": 3,
            "country": "Guinea",
            "district": "Pita",
            "hcw": 1,
            "probable": 0,
            "suspected": 0,
            "total_cases": 3
        }, {
            "centroid": [-12.7583542486,
                8.73493804628
            ],
            "confirmed": 8,
            "country": "Sierra Leone",
            "district": "Port Loko",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 8
        }, {
            "centroid": [-9.4666501767,
                11.6823785627
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Siguiri",
            "hcw": 1,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-11.9021619466,
                8.6944297019
            ],
            "confirmed": 1,
            "country": "Sierra Leone",
            "district": "Tonkolili",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-9.10432690304,
                7.53675677824
            ],
            "confirmed": 4,
            "country": "Guinea",
            "district": "Yomou",
            "hcw": 1,
            "probable": 0,
            "suspected": 0,
            "total_cases": 4
        }],
        "epiweek": "2014-W33",
        "probable": 155,
        "suspected": 35,
        "total": 396
    }, {
        "confirmed": 342,
        "districts": [{
            "centroid": [-11.750688035,
                7.9935946161
            ],
            "confirmed": 12,
            "country": "Sierra Leone",
            "district": "Bo",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 12
        }, {
            "centroid": [-14.0545378494,
                10.3704523359
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Boffa",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-12.1955446453,
                9.32328913639
            ],
            "confirmed": 10,
            "country": "Sierra Leone",
            "district": "Bombali",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 10
        }, {
            "centroid": null,
            "confirmed": 12,
            "country": "Liberia",
            "district": "Bomi",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 12
        }, {
            "centroid": null,
            "confirmed": 2,
            "country": "Liberia",
            "district": "Bong",
            "hcw": 1,
            "probable": 5,
            "suspected": 18,
            "total_cases": 25
        }, {
            "centroid": null,
            "confirmed": 15,
            "country": "Guinea",
            "district": "Conakry",
            "hcw": 10,
            "probable": 0,
            "suspected": 0,
            "total_cases": 15
        }, {
            "centroid": [-13.4939931579,
                10.1206853671
            ],
            "confirmed": 7,
            "country": "Guinea",
            "district": "Dubreka",
            "hcw": 3,
            "probable": 0,
            "suspected": 0,
            "total_cases": 7
        }, {
            "centroid": [-13.2516184791,
                8.46161143374
            ],
            "confirmed": 20,
            "country": "Sierra Leone",
            "district": "Freetown",
            "hcw": 5,
            "probable": 0,
            "suspected": 0,
            "total_cases": 20
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Grand Gedeh",
            "hcw": 0,
            "probable": 0,
            "suspected": 2,
            "total_cases": 2
        }, {
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 7,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 1,
            "probable": 0,
            "suspected": 0,
            "total_cases": 7
        }, {
            "centroid": [-10.7177144281,
                8.09228705936
            ],
            "confirmed": 40,
            "country": "Sierra Leone",
            "district": "Kailahun",
            "hcw": 0,
            "probable": 2,
            "suspected": 14,
            "total_cases": 56
        }, {
            "centroid": [-11.2257628471,
                7.94214556432
            ],
            "confirmed": 39,
            "country": "Sierra Leone",
            "district": "Kenema",
            "hcw": 15,
            "probable": 0,
            "suspected": 4,
            "total_cases": 43
        }, {
            "centroid": [-10.0272901436,
                9.24280287002
            ],
            "confirmed": 0,
            "country": "Guinea",
            "district": "Kissidougo",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [
                3.39823109352,
                6.4615001567
            ],
            "confirmed": 2,
            "country": "Nigeria",
            "district": "Lagos Island",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 3
        }, {
            "centroid": null,
            "confirmed": 55,
            "country": "Liberia",
            "district": "Lofa",
            "hcw": 2,
            "probable": 50,
            "suspected": 0,
            "total_cases": 105
        }, {
            "centroid": [-9.33932375244,
                8.45053527378
            ],
            "confirmed": 54,
            "country": "Guinea",
            "district": "Macenta",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 54
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Margibi",
            "hcw": 8,
            "probable": 24,
            "suspected": 65,
            "total_cases": 89
        }, {
            "centroid": null,
            "confirmed": 1,
            "country": "Liberia",
            "district": "Monrovia",
            "hcw": 26,
            "probable": 86,
            "suspected": 19,
            "total_cases": 106
        }, {
            "centroid": [-12.4546600261,
                8.08506816093
            ],
            "confirmed": 3,
            "country": "Sierra Leone",
            "district": "Moyamba",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 3
        }, {
            "centroid": [-8.7967554244,
                7.9546695681
            ],
            "confirmed": 2,
            "country": "Guinea",
            "district": "N'Zerekore",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 3
        }, {
            "centroid": null,
            "confirmed": 19,
            "country": "Liberia",
            "district": "Nimba",
            "hcw": 1,
            "probable": 24,
            "suspected": 3,
            "total_cases": 46
        }, {
            "centroid": [-12.6356583491,
                10.8964798332
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Pita",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-12.7583542486,
                8.73493804628
            ],
            "confirmed": 25,
            "country": "Sierra Leone",
            "district": "Port Loko",
            "hcw": 0,
            "probable": 1,
            "suspected": 1,
            "total_cases": 27
        }, {
            "centroid": [-11.5724206143,
                7.32219946466
            ],
            "confirmed": 2,
            "country": "Sierra Leone",
            "district": "Pujehun",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "River Gee",
            "hcw": 1,
            "probable": 0,
            "suspected": 1,
            "total_cases": 1
        }, {
            "centroid": null,
            "confirmed": 1,
            "country": "Liberia",
            "district": "Sinoe",
            "hcw": 0,
            "probable": 0,
            "suspected": 1,
            "total_cases": 2
        }, {
            "centroid": [-11.9021619466,
                8.6944297019
            ],
            "confirmed": 9,
            "country": "Sierra Leone",
            "district": "Tonkolili",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 9
        }, {
            "centroid": [-9.10432690304,
                7.53675677824
            ],
            "confirmed": 3,
            "country": "Guinea",
            "district": "Yomou",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 3
        }],
        "epiweek": "2014-W34",
        "probable": 195,
        "suspected": 128,
        "total": 665
    }, {
        "confirmed": 330,
        "districts": [{
            "centroid": [-11.750688035,
                7.9935946161
            ],
            "confirmed": 15,
            "country": "Sierra Leone",
            "district": "Bo",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 15
        }, {
            "centroid": [-14.0545378494,
                10.3704523359
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Boffa",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-12.1955446453,
                9.32328913639
            ],
            "confirmed": 27,
            "country": "Sierra Leone",
            "district": "Bombali",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 27
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Bomi",
            "hcw": 1,
            "probable": 6,
            "suspected": 0,
            "total_cases": 6
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Bong",
            "hcw": 0,
            "probable": 6,
            "suspected": 12,
            "total_cases": 18
        }, {
            "centroid": null,
            "confirmed": 12,
            "country": "Guinea",
            "district": "Conakry",
            "hcw": 7,
            "probable": 0,
            "suspected": 0,
            "total_cases": 12
        }, {
            "centroid": null,
            "confirmed": 1,
            "country": "Senegal",
            "district": "Dakar",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-13.4939931579,
                10.1206853671
            ],
            "confirmed": 11,
            "country": "Guinea",
            "district": "Dubreka",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 11
        }, {
            "centroid": [-13.0627260644,
                9.41630127096
            ],
            "confirmed": 6,
            "country": "Guinea",
            "district": "Forecariah",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 6
        }, {
            "centroid": [-13.2516184791,
                8.46161143374
            ],
            "confirmed": 38,
            "country": "Sierra Leone",
            "district": "Freetown",
            "hcw": 1,
            "probable": 0,
            "suspected": 1,
            "total_cases": 39
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Gbarpolu",
            "hcw": 0,
            "probable": 0,
            "suspected": 1,
            "total_cases": 1
        }, {
            "centroid": null,
            "confirmed": 5,
            "country": "Liberia",
            "district": "Grand Bassa",
            "hcw": 2,
            "probable": 8,
            "suspected": 11,
            "total_cases": 24
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Grand Cape Mount",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Grand Gedeh",
            "hcw": 0,
            "probable": 0,
            "suspected": 1,
            "total_cases": 1
        }, {
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 9,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 0,
            "probable": 8,
            "suspected": 0,
            "total_cases": 17
        }, {
            "centroid": [-10.7177144281,
                8.09228705936
            ],
            "confirmed": 30,
            "country": "Sierra Leone",
            "district": "Kailahun",
            "hcw": 0,
            "probable": 0,
            "suspected": 1,
            "total_cases": 31
        }, {
            "centroid": [-11.2257628471,
                7.94214556432
            ],
            "confirmed": 36,
            "country": "Sierra Leone",
            "district": "Kenema",
            "hcw": 0,
            "probable": 0,
            "suspected": 5,
            "total_cases": 41
        }, {
            "centroid": [-9.10499016737,
                9.26366627328
            ],
            "confirmed": 9,
            "country": "Guinea",
            "district": "Kerouane",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 9
        }, {
            "centroid": [-10.9664252552,
                8.69471402857
            ],
            "confirmed": 3,
            "country": "Sierra Leone",
            "district": "Kono",
            "hcw": 0,
            "probable": 0,
            "suspected": 1,
            "total_cases": 4
        }, {
            "centroid": null,
            "confirmed": 41,
            "country": "Liberia",
            "district": "Lofa",
            "hcw": 2,
            "probable": 47,
            "suspected": 0,
            "total_cases": 88
        }, {
            "centroid": [-9.33932375244,
                8.45053527378
            ],
            "confirmed": 43,
            "country": "Guinea",
            "district": "Macenta",
            "hcw": 1,
            "probable": 0,
            "suspected": 0,
            "total_cases": 43
        }, {
            "centroid": null,
            "confirmed": 3,
            "country": "Liberia",
            "district": "Margibi",
            "hcw": 5,
            "probable": 28,
            "suspected": 1,
            "total_cases": 32
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Monrovia",
            "hcw": 10,
            "probable": 55,
            "suspected": 0,
            "total_cases": 55
        }, {
            "centroid": null,
            "confirmed": 15,
            "country": "Liberia",
            "district": "Nimba",
            "hcw": 2,
            "probable": 4,
            "suspected": 2,
            "total_cases": 21
        }, {
            "centroid": [-12.6356583491,
                10.8964798332
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Pita",
            "hcw": 0,
            "probable": 0,
            "suspected": 1,
            "total_cases": 2
        }, {
            "centroid": [-12.7583542486,
                8.73493804628
            ],
            "confirmed": 15,
            "country": "Sierra Leone",
            "district": "Port Loko",
            "hcw": 0,
            "probable": 0,
            "suspected": 1,
            "total_cases": 16
        }, {
            "centroid": [
                7.0216484586,
                4.7776303994
            ],
            "confirmed": 2,
            "country": "Nigeria",
            "district": "Port-Harcourt",
            "hcw": 1,
            "probable": 0,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": [-11.5724206143,
                7.32219946466
            ],
            "confirmed": 2,
            "country": "Sierra Leone",
            "district": "Pujehun",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "River Gee",
            "hcw": 0,
            "probable": 0,
            "suspected": 4,
            "total_cases": 4
        }, {
            "centroid": [-11.9021619466,
                8.6944297019
            ],
            "confirmed": 4,
            "country": "Sierra Leone",
            "district": "Tonkolili",
            "hcw": 0,
            "probable": 0,
            "suspected": 1,
            "total_cases": 5
        }, {
            "centroid": [-9.10432690304,
                7.53675677824
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Yomou",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }],
        "epiweek": "2014-W35",
        "probable": 163,
        "suspected": 43,
        "total": 536
    }, {
        "confirmed": 508,
        "districts": [{
            "centroid": [-11.750688035,
                7.9935946161
            ],
            "confirmed": 15,
            "country": "Sierra Leone",
            "district": "Bo",
            "hcw": 0,
            "probable": 0,
            "suspected": 5,
            "total_cases": 20
        }, {
            "centroid": [-12.1955446453,
                9.32328913639
            ],
            "confirmed": 23,
            "country": "Sierra Leone",
            "district": "Bombali",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 23
        }, {
            "centroid": null,
            "confirmed": 12,
            "country": "Liberia",
            "district": "Bomi",
            "hcw": 0,
            "probable": 1,
            "suspected": 1,
            "total_cases": 14
        }, {
            "centroid": null,
            "confirmed": 16,
            "country": "Liberia",
            "district": "Bong",
            "hcw": 0,
            "probable": 5,
            "suspected": 8,
            "total_cases": 29
        }, {
            "centroid": null,
            "confirmed": 3,
            "country": "Guinea",
            "district": "Conakry",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 3
        }, {
            "centroid": [-13.3159837156,
                9.73536465349
            ],
            "confirmed": 5,
            "country": "Guinea",
            "district": "Coyah",
            "hcw": 2,
            "probable": 0,
            "suspected": 0,
            "total_cases": 5
        }, {
            "centroid": [-13.4939931579,
                10.1206853671
            ],
            "confirmed": 2,
            "country": "Guinea",
            "district": "Dubreka",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": [-13.2516184791,
                8.46161143374
            ],
            "confirmed": 4,
            "country": "Sierra Leone",
            "district": "Freetown",
            "hcw": 3,
            "probable": 0,
            "suspected": 0,
            "total_cases": 4
        }, {
            "centroid": null,
            "confirmed": 2,
            "country": "Liberia",
            "district": "Grand Bassa",
            "hcw": 0,
            "probable": 1,
            "suspected": 3,
            "total_cases": 6
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Grand Cape Mount",
            "hcw": 1,
            "probable": 1,
            "suspected": 2,
            "total_cases": 3
        }, {
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 14,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 14
        }, {
            "centroid": [-10.7177144281,
                8.09228705936
            ],
            "confirmed": 35,
            "country": "Sierra Leone",
            "district": "Kailahun",
            "hcw": 0,
            "probable": 0,
            "suspected": 1,
            "total_cases": 36
        }, {
            "centroid": [-11.2257628471,
                7.94214556432
            ],
            "confirmed": 28,
            "country": "Sierra Leone",
            "district": "Kenema",
            "hcw": 0,
            "probable": 0,
            "suspected": 9,
            "total_cases": 37
        }, {
            "centroid": [-9.10499016737,
                9.26366627328
            ],
            "confirmed": 2,
            "country": "Guinea",
            "district": "Kerouane",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": [-10.9664252552,
                8.69471402857
            ],
            "confirmed": 8,
            "country": "Sierra Leone",
            "district": "Kono",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 8
        }, {
            "centroid": [
                3.39823109352,
                6.4615001567
            ],
            "confirmed": 1,
            "country": "Nigeria",
            "district": "Lagos Island",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": null,
            "confirmed": 34,
            "country": "Liberia",
            "district": "Lofa",
            "hcw": 0,
            "probable": 34,
            "suspected": 0,
            "total_cases": 68
        }, {
            "centroid": [-9.33932375244,
                8.45053527378
            ],
            "confirmed": 69,
            "country": "Guinea",
            "district": "Macenta",
            "hcw": 0,
            "probable": 3,
            "suspected": 0,
            "total_cases": 72
        }, {
            "centroid": null,
            "confirmed": 3,
            "country": "Liberia",
            "district": "Margibi",
            "hcw": 3,
            "probable": 51,
            "suspected": 4,
            "total_cases": 58
        }, {
            "centroid": null,
            "confirmed": 181,
            "country": "Liberia",
            "district": "Monrovia",
            "hcw": 4,
            "probable": 51,
            "suspected": 41,
            "total_cases": 273
        }, {
            "centroid": [-12.4546600261,
                8.08506816093
            ],
            "confirmed": 6,
            "country": "Sierra Leone",
            "district": "Moyamba",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 6
        }, {
            "centroid": [-8.7967554244,
                7.9546695681
            ],
            "confirmed": 3,
            "country": "Guinea",
            "district": "N'Zerekore",
            "hcw": 1,
            "probable": 0,
            "suspected": 0,
            "total_cases": 3
        }, {
            "centroid": null,
            "confirmed": 7,
            "country": "Liberia",
            "district": "Nimba",
            "hcw": 0,
            "probable": 10,
            "suspected": 6,
            "total_cases": 23
        }, {
            "centroid": [-12.7583542486,
                8.73493804628
            ],
            "confirmed": 25,
            "country": "Sierra Leone",
            "district": "Port Loko",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 25
        }, {
            "centroid": [
                7.0216484586,
                4.7776303994
            ],
            "confirmed": 2,
            "country": "Nigeria",
            "district": "Port-Harcourt",
            "hcw": 1,
            "probable": 0,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": [-11.5724206143,
                7.32219946466
            ],
            "confirmed": 2,
            "country": "Sierra Leone",
            "district": "Pujehun",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "River Gee",
            "hcw": 0,
            "probable": 3,
            "suspected": 1,
            "total_cases": 4
        }, {
            "centroid": [-11.9021619466,
                8.6944297019
            ],
            "confirmed": 5,
            "country": "Sierra Leone",
            "district": "Tonkolili",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 5
        }, {
            "centroid": [-9.10432690304,
                7.53675677824
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Yomou",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }],
        "epiweek": "2014-W36",
        "probable": 160,
        "suspected": 81,
        "total": 749
    }, {
        "confirmed": 424,
        "districts": [{
            "centroid": [-11.750688035,
                7.9935946161
            ],
            "confirmed": 7,
            "country": "Sierra Leone",
            "district": "Bo",
            "hcw": 0,
            "probable": 0,
            "suspected": 4,
            "total_cases": 11
        }, {
            "centroid": [-12.1955446453,
                9.32328913639
            ],
            "confirmed": 46,
            "country": "Sierra Leone",
            "district": "Bombali",
            "hcw": 0,
            "probable": 0,
            "suspected": 1,
            "total_cases": 47
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Bomi",
            "hcw": 0,
            "probable": 9,
            "suspected": 6,
            "total_cases": 15
        }, {
            "centroid": null,
            "confirmed": 14,
            "country": "Liberia",
            "district": "Bong",
            "hcw": 0,
            "probable": 7,
            "suspected": 23,
            "total_cases": 44
        }, {
            "centroid": null,
            "confirmed": 11,
            "country": "Guinea",
            "district": "Conakry",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 11
        }, {
            "centroid": [-13.3159837156,
                9.73536465349
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Coyah",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-12.1402794081,
                10.9131793497
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Dalaba",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-13.0627260644,
                9.41630127096
            ],
            "confirmed": 2,
            "country": "Guinea",
            "district": "Forecariah",
            "hcw": 0,
            "probable": 0,
            "suspected": 1,
            "total_cases": 3
        }, {
            "centroid": [-13.2516184791,
                8.46161143374
            ],
            "confirmed": 31,
            "country": "Sierra Leone",
            "district": "Freetown",
            "hcw": 2,
            "probable": 0,
            "suspected": 0,
            "total_cases": 31
        }, {
            "centroid": null,
            "confirmed": 5,
            "country": "Liberia",
            "district": "Grand Bassa",
            "hcw": 0,
            "probable": 5,
            "suspected": 0,
            "total_cases": 10
        }, {
            "centroid": null,
            "confirmed": 2,
            "country": "Liberia",
            "district": "Grand Cape Mount",
            "hcw": 0,
            "probable": 0,
            "suspected": 2,
            "total_cases": 4
        }, {
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 4,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 4
        }, {
            "centroid": [-10.7177144281,
                8.09228705936
            ],
            "confirmed": 26,
            "country": "Sierra Leone",
            "district": "Kailahun",
            "hcw": 0,
            "probable": 0,
            "suspected": 2,
            "total_cases": 28
        }, {
            "centroid": [-12.8268555724,
                9.17121326335
            ],
            "confirmed": 2,
            "country": "Sierra Leone",
            "district": "Kambia",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": [-11.2257628471,
                7.94214556432
            ],
            "confirmed": 24,
            "country": "Sierra Leone",
            "district": "Kenema",
            "hcw": 1,
            "probable": 0,
            "suspected": 5,
            "total_cases": 29
        }, {
            "centroid": [-9.10499016737,
                9.26366627328
            ],
            "confirmed": 8,
            "country": "Guinea",
            "district": "Kerouane",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 8
        }, {
            "centroid": [-10.0272901436,
                9.24280287002
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Kissidougo",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-10.9664252552,
                8.69471402857
            ],
            "confirmed": 3,
            "country": "Sierra Leone",
            "district": "Kono",
            "hcw": 0,
            "probable": 0,
            "suspected": 5,
            "total_cases": 8
        }, {
            "centroid": null,
            "confirmed": 10,
            "country": "Liberia",
            "district": "Lofa",
            "hcw": 0,
            "probable": 28,
            "suspected": 0,
            "total_cases": 38
        }, {
            "centroid": [-9.33932375244,
                8.45053527378
            ],
            "confirmed": 37,
            "country": "Guinea",
            "district": "Macenta",
            "hcw": 0,
            "probable": 0,
            "suspected": 1,
            "total_cases": 38
        }, {
            "centroid": null,
            "confirmed": 1,
            "country": "Liberia",
            "district": "Margibi",
            "hcw": 0,
            "probable": 91,
            "suspected": 14,
            "total_cases": 106
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Maryland",
            "hcw": 0,
            "probable": 4,
            "suspected": 2,
            "total_cases": 6
        }, {
            "centroid": null,
            "confirmed": 126,
            "country": "Liberia",
            "district": "Monrovia",
            "hcw": 0,
            "probable": 97,
            "suspected": 114,
            "total_cases": 337
        }, {
            "centroid": [-12.4546600261,
                8.08506816093
            ],
            "confirmed": 2,
            "country": "Sierra Leone",
            "district": "Moyamba",
            "hcw": 0,
            "probable": 0,
            "suspected": 2,
            "total_cases": 4
        }, {
            "centroid": [-8.7967554244,
                7.9546695681
            ],
            "confirmed": 4,
            "country": "Guinea",
            "district": "N'Zerekore",
            "hcw": 0,
            "probable": 10,
            "suspected": 0,
            "total_cases": 14
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Nimba",
            "hcw": 0,
            "probable": 17,
            "suspected": 3,
            "total_cases": 20
        }, {
            "centroid": [-12.7583542486,
                8.73493804628
            ],
            "confirmed": 45,
            "country": "Sierra Leone",
            "district": "Port Loko",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 45
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Sinoe",
            "hcw": 0,
            "probable": 0,
            "suspected": 1,
            "total_cases": 1
        }, {
            "centroid": [-11.9021619466,
                8.6944297019
            ],
            "confirmed": 11,
            "country": "Sierra Leone",
            "district": "Tonkolili",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 11
        }],
        "epiweek": "2014-W37",
        "probable": 268,
        "suspected": 186,
        "total": 878
    }, {
        "confirmed": 443,
        "districts": [{
            "centroid": [-11.750688035,
                7.9935946161
            ],
            "confirmed": 7,
            "country": "Sierra Leone",
            "district": "Bo",
            "hcw": 0,
            "probable": 0,
            "suspected": 8,
            "total_cases": 15
        }, {
            "centroid": [-12.1955446453,
                9.32328913639
            ],
            "confirmed": 35,
            "country": "Sierra Leone",
            "district": "Bombali",
            "hcw": 0,
            "probable": 0,
            "suspected": 5,
            "total_cases": 40
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Bomi",
            "hcw": 0,
            "probable": 2,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": null,
            "confirmed": 3,
            "country": "Liberia",
            "district": "Bong",
            "hcw": 0,
            "probable": 16,
            "suspected": 45,
            "total_cases": 64
        }, {
            "centroid": [-12.2848428855,
                7.50414610209
            ],
            "confirmed": 0,
            "country": "Sierra Leone",
            "district": "Bonthe",
            "hcw": 0,
            "probable": 0,
            "suspected": 2,
            "total_cases": 2
        }, {
            "centroid": null,
            "confirmed": 14,
            "country": "Guinea",
            "district": "Conakry",
            "hcw": 2,
            "probable": 2,
            "suspected": 0,
            "total_cases": 16
        }, {
            "centroid": [-13.3159837156,
                9.73536465349
            ],
            "confirmed": 2,
            "country": "Guinea",
            "district": "Coyah",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": [-11.0627538709,
                10.7299012426
            ],
            "confirmed": 0,
            "country": "Guinea",
            "district": "Dabola",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-12.1402794081,
                10.9131793497
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Dalaba",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-13.0627260644,
                9.41630127096
            ],
            "confirmed": 3,
            "country": "Guinea",
            "district": "Forecariah",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 3
        }, {
            "centroid": [-13.2516184791,
                8.46161143374
            ],
            "confirmed": 101,
            "country": "Sierra Leone",
            "district": "Freetown",
            "hcw": 0,
            "probable": 0,
            "suspected": 12,
            "total_cases": 113
        }, {
            "centroid": null,
            "confirmed": 23,
            "country": "Liberia",
            "district": "Grand Bassa",
            "hcw": 0,
            "probable": 18,
            "suspected": 10,
            "total_cases": 51
        }, {
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 6,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 7
        }, {
            "centroid": [-10.7177144281,
                8.09228705936
            ],
            "confirmed": 1,
            "country": "Sierra Leone",
            "district": "Kailahun",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-12.8268555724,
                9.17121326335
            ],
            "confirmed": 7,
            "country": "Sierra Leone",
            "district": "Kambia",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 7
        }, {
            "centroid": [-11.2257628471,
                7.94214556432
            ],
            "confirmed": 8,
            "country": "Sierra Leone",
            "district": "Kenema",
            "hcw": 0,
            "probable": 0,
            "suspected": 7,
            "total_cases": 15
        }, {
            "centroid": [-9.10499016737,
                9.26366627328
            ],
            "confirmed": 3,
            "country": "Guinea",
            "district": "Kerouane",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 3
        }, {
            "centroid": [-12.7488142039,
                10.0983904021
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Kindia",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-10.9664252552,
                8.69471402857
            ],
            "confirmed": 3,
            "country": "Sierra Leone",
            "district": "Kono",
            "hcw": 0,
            "probable": 0,
            "suspected": 2,
            "total_cases": 5
        }, {
            "centroid": null,
            "confirmed": 11,
            "country": "Liberia",
            "district": "Lofa",
            "hcw": 0,
            "probable": 29,
            "suspected": 0,
            "total_cases": 40
        }, {
            "centroid": [-9.33932375244,
                8.45053527378
            ],
            "confirmed": 71,
            "country": "Guinea",
            "district": "Macenta",
            "hcw": 0,
            "probable": 0,
            "suspected": 2,
            "total_cases": 73
        }, {
            "centroid": null,
            "confirmed": 4,
            "country": "Liberia",
            "district": "Margibi",
            "hcw": 0,
            "probable": 47,
            "suspected": 29,
            "total_cases": 80
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Maryland",
            "hcw": 0,
            "probable": 1,
            "suspected": 1,
            "total_cases": 2
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Monrovia",
            "hcw": 0,
            "probable": 73,
            "suspected": 186,
            "total_cases": 259
        }, {
            "centroid": [-12.4546600261,
                8.08506816093
            ],
            "confirmed": 25,
            "country": "Sierra Leone",
            "district": "Moyamba",
            "hcw": 0,
            "probable": 0,
            "suspected": 3,
            "total_cases": 28
        }, {
            "centroid": [-8.7967554244,
                7.9546695681
            ],
            "confirmed": 3,
            "country": "Guinea",
            "district": "N'Zerekore",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 3
        }, {
            "centroid": null,
            "confirmed": 30,
            "country": "Liberia",
            "district": "Nimba",
            "hcw": 1,
            "probable": 40,
            "suspected": 6,
            "total_cases": 76
        }, {
            "centroid": [-12.7583542486,
                8.73493804628
            ],
            "confirmed": 44,
            "country": "Sierra Leone",
            "district": "Port Loko",
            "hcw": 0,
            "probable": 0,
            "suspected": 1,
            "total_cases": 45
        }, {
            "centroid": [-11.5724206143,
                7.32219946466
            ],
            "confirmed": 3,
            "country": "Sierra Leone",
            "district": "Pujehun",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 3
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "River Gee",
            "hcw": 0,
            "probable": 0,
            "suspected": 3,
            "total_cases": 3
        }, {
            "centroid": null,
            "confirmed": 3,
            "country": "Liberia",
            "district": "Rivercess",
            "hcw": 0,
            "probable": 3,
            "suspected": 3,
            "total_cases": 9
        }, {
            "centroid": null,
            "confirmed": 3,
            "country": "Liberia",
            "district": "Sinoe",
            "hcw": 0,
            "probable": 0,
            "suspected": 3,
            "total_cases": 6
        }, {
            "centroid": [-11.9021619466,
                8.6944297019
            ],
            "confirmed": 27,
            "country": "Sierra Leone",
            "district": "Tonkolili",
            "hcw": 0,
            "probable": 0,
            "suspected": 1,
            "total_cases": 28
        }, {
            "centroid": [-9.10432690304,
                7.53675677824
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Yomou",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }],
        "epiweek": "2014-W38",
        "probable": 233,
        "suspected": 329,
        "total": 1005
    }, {
        "confirmed": 405,
        "districts": [{
            "centroid": [-8.33509894591,
                8.89499658308
            ],
            "confirmed": 2,
            "country": "Guinea",
            "district": "Beyla",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": [-11.750688035,
                7.9935946161
            ],
            "confirmed": 8,
            "country": "Sierra Leone",
            "district": "Bo",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 8
        }, {
            "centroid": [-12.1955446453,
                9.32328913639
            ],
            "confirmed": 79,
            "country": "Sierra Leone",
            "district": "Bombali",
            "hcw": 0,
            "probable": 0,
            "suspected": 4,
            "total_cases": 83
        }, {
            "centroid": null,
            "confirmed": 13,
            "country": "Liberia",
            "district": "Bong",
            "hcw": 0,
            "probable": 4,
            "suspected": 28,
            "total_cases": 45
        }, {
            "centroid": null,
            "confirmed": 27,
            "country": "Guinea",
            "district": "Conakry",
            "hcw": 1,
            "probable": 0,
            "suspected": 0,
            "total_cases": 27
        }, {
            "centroid": [-13.3159837156,
                9.73536465349
            ],
            "confirmed": 2,
            "country": "Guinea",
            "district": "Coyah",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": [-12.1402794081,
                10.9131793497
            ],
            "confirmed": 4,
            "country": "Guinea",
            "district": "Dalaba",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 4
        }, {
            "centroid": [-13.0627260644,
                9.41630127096
            ],
            "confirmed": 0,
            "country": "Guinea",
            "district": "Forecariah",
            "hcw": 0,
            "probable": 0,
            "suspected": 1,
            "total_cases": 1
        }, {
            "centroid": [-13.2516184791,
                8.46161143374
            ],
            "confirmed": 88,
            "country": "Sierra Leone",
            "district": "Freetown",
            "hcw": 0,
            "probable": 0,
            "suspected": 9,
            "total_cases": 97
        }, {
            "centroid": null,
            "confirmed": 4,
            "country": "Liberia",
            "district": "Grand Bassa",
            "hcw": 0,
            "probable": 7,
            "suspected": 2,
            "total_cases": 13
        }, {
            "centroid": null,
            "confirmed": 6,
            "country": "Liberia",
            "district": "Grand Kru",
            "hcw": 0,
            "probable": 7,
            "suspected": 3,
            "total_cases": 16
        }, {
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 4,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 5
        }, {
            "centroid": [-12.8268555724,
                9.17121326335
            ],
            "confirmed": 4,
            "country": "Sierra Leone",
            "district": "Kambia",
            "hcw": 0,
            "probable": 0,
            "suspected": 1,
            "total_cases": 5
        }, {
            "centroid": [-11.2257628471,
                7.94214556432
            ],
            "confirmed": 10,
            "country": "Sierra Leone",
            "district": "Kenema",
            "hcw": 0,
            "probable": 0,
            "suspected": 3,
            "total_cases": 13
        }, {
            "centroid": [-9.10499016737,
                9.26366627328
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Kerouane",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-10.9664252552,
                8.69471402857
            ],
            "confirmed": 0,
            "country": "Sierra Leone",
            "district": "Kono",
            "hcw": 0,
            "probable": 0,
            "suspected": 1,
            "total_cases": 1
        }, {
            "centroid": null,
            "confirmed": 13,
            "country": "Liberia",
            "district": "Lofa",
            "hcw": 1,
            "probable": 26,
            "suspected": 4,
            "total_cases": 43
        }, {
            "centroid": [-9.33932375244,
                8.45053527378
            ],
            "confirmed": 13,
            "country": "Guinea",
            "district": "Macenta",
            "hcw": 0,
            "probable": 2,
            "suspected": 1,
            "total_cases": 16
        }, {
            "centroid": null,
            "confirmed": 2,
            "country": "Liberia",
            "district": "Margibi",
            "hcw": 2,
            "probable": 39,
            "suspected": 46,
            "total_cases": 87
        }, {
            "centroid": null,
            "confirmed": 5,
            "country": "Liberia",
            "district": "Monrovia",
            "hcw": 3,
            "probable": 97,
            "suspected": 105,
            "total_cases": 207
        }, {
            "centroid": [-12.4546600261,
                8.08506816093
            ],
            "confirmed": 13,
            "country": "Sierra Leone",
            "district": "Moyamba",
            "hcw": 0,
            "probable": 0,
            "suspected": 7,
            "total_cases": 20
        }, {
            "centroid": [-8.7967554244,
                7.9546695681
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "N'Zerekore",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Nimba",
            "hcw": 0,
            "probable": 18,
            "suspected": 2,
            "total_cases": 20
        }, {
            "centroid": [-12.7583542486,
                8.73493804628
            ],
            "confirmed": 82,
            "country": "Sierra Leone",
            "district": "Port Loko",
            "hcw": 0,
            "probable": 0,
            "suspected": 7,
            "total_cases": 89
        }, {
            "centroid": [-11.5724206143,
                7.32219946466
            ],
            "confirmed": 6,
            "country": "Sierra Leone",
            "district": "Pujehun",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 6
        }, {
            "centroid": null,
            "confirmed": 2,
            "country": "Liberia",
            "district": "River Gee",
            "hcw": 0,
            "probable": 1,
            "suspected": 2,
            "total_cases": 5
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Sinoe",
            "hcw": 0,
            "probable": 0,
            "suspected": 1,
            "total_cases": 1
        }, {
            "centroid": [-11.9021619466,
                8.6944297019
            ],
            "confirmed": 16,
            "country": "Sierra Leone",
            "district": "Tonkolili",
            "hcw": 0,
            "probable": 0,
            "suspected": 8,
            "total_cases": 24
        }],
        "epiweek": "2014-W39",
        "probable": 202,
        "suspected": 235,
        "total": 842
    }, {
        "confirmed": 485,
        "districts": [{
            "centroid": [-11.750688035,
                7.9935946161
            ],
            "confirmed": 16,
            "country": "Sierra Leone",
            "district": "Bo",
            "hcw": 0,
            "probable": 0,
            "suspected": 6,
            "total_cases": 22
        }, {
            "centroid": [-12.1955446453,
                9.32328913639
            ],
            "confirmed": 67,
            "country": "Sierra Leone",
            "district": "Bombali",
            "hcw": 0,
            "probable": 0,
            "suspected": 24,
            "total_cases": 91
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Bomi",
            "hcw": 0,
            "probable": 2,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": null,
            "confirmed": 4,
            "country": "Liberia",
            "district": "Bong",
            "hcw": 0,
            "probable": 5,
            "suspected": 42,
            "total_cases": 51
        }, {
            "centroid": null,
            "confirmed": 15,
            "country": "Guinea",
            "district": "Conakry",
            "hcw": 4,
            "probable": 0,
            "suspected": 0,
            "total_cases": 15
        }, {
            "centroid": [-13.3159837156,
                9.73536465349
            ],
            "confirmed": 2,
            "country": "Guinea",
            "district": "Coyah",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": [-12.1402794081,
                10.9131793497
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Dalaba",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-13.2516184791,
                8.46161143374
            ],
            "confirmed": 154,
            "country": "Sierra Leone",
            "district": "Freetown",
            "hcw": 0,
            "probable": 0,
            "suspected": 32,
            "total_cases": 186
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Grand Bassa",
            "hcw": 0,
            "probable": 4,
            "suspected": 7,
            "total_cases": 11
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Grand Cape Mount",
            "hcw": 0,
            "probable": 2,
            "suspected": 2,
            "total_cases": 4
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Grand Kru",
            "hcw": 0,
            "probable": 1,
            "suspected": 3,
            "total_cases": 4
        }, {
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 5,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 1,
            "probable": 1,
            "suspected": 2,
            "total_cases": 8
        }, {
            "centroid": [-10.7177144281,
                8.09228705936
            ],
            "confirmed": 3,
            "country": "Sierra Leone",
            "district": "Kailahun",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 3
        }, {
            "centroid": [-12.8268555724,
                9.17121326335
            ],
            "confirmed": 7,
            "country": "Sierra Leone",
            "district": "Kambia",
            "hcw": 0,
            "probable": 0,
            "suspected": 2,
            "total_cases": 9
        }, {
            "centroid": [-11.2257628471,
                7.94214556432
            ],
            "confirmed": 5,
            "country": "Sierra Leone",
            "district": "Kenema",
            "hcw": 0,
            "probable": 0,
            "suspected": 10,
            "total_cases": 15
        }, {
            "centroid": [-9.10499016737,
                9.26366627328
            ],
            "confirmed": 2,
            "country": "Guinea",
            "district": "Kerouane",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": [-10.9664252552,
                8.69471402857
            ],
            "confirmed": 7,
            "country": "Sierra Leone",
            "district": "Kono",
            "hcw": 0,
            "probable": 0,
            "suspected": 8,
            "total_cases": 15
        }, {
            "centroid": null,
            "confirmed": 4,
            "country": "Liberia",
            "district": "Lofa",
            "hcw": 1,
            "probable": 11,
            "suspected": 0,
            "total_cases": 15
        }, {
            "centroid": [-8.32663691342,
                7.99102302963
            ],
            "confirmed": 2,
            "country": "Guinea",
            "district": "Lola",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": [-9.33932375244,
                8.45053527378
            ],
            "confirmed": 48,
            "country": "Guinea",
            "district": "Macenta",
            "hcw": 0,
            "probable": 3,
            "suspected": 23,
            "total_cases": 74
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Margibi",
            "hcw": 0,
            "probable": 37,
            "suspected": 8,
            "total_cases": 45
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Monrovia",
            "hcw": 9,
            "probable": 87,
            "suspected": 121,
            "total_cases": 208
        }, {
            "centroid": [-12.4546600261,
                8.08506816093
            ],
            "confirmed": 13,
            "country": "Sierra Leone",
            "district": "Moyamba",
            "hcw": 0,
            "probable": 0,
            "suspected": 6,
            "total_cases": 19
        }, {
            "centroid": [-8.7967554244,
                7.9546695681
            ],
            "confirmed": 18,
            "country": "Guinea",
            "district": "N'Zerekore",
            "hcw": 0,
            "probable": 2,
            "suspected": 2,
            "total_cases": 22
        }, {
            "centroid": null,
            "confirmed": 1,
            "country": "Liberia",
            "district": "Nimba",
            "hcw": 1,
            "probable": 1,
            "suspected": 1,
            "total_cases": 3
        }, {
            "centroid": [-12.6356583491,
                10.8964798332
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Pita",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-12.7583542486,
                8.73493804628
            ],
            "confirmed": 76,
            "country": "Sierra Leone",
            "district": "Port Loko",
            "hcw": 0,
            "probable": 0,
            "suspected": 3,
            "total_cases": 79
        }, {
            "centroid": [-11.5724206143,
                7.32219946466
            ],
            "confirmed": 5,
            "country": "Sierra Leone",
            "district": "Pujehun",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 5
        }, {
            "centroid": null,
            "confirmed": 1,
            "country": "Liberia",
            "district": "River Gee",
            "hcw": 1,
            "probable": 0,
            "suspected": 1,
            "total_cases": 2
        }, {
            "centroid": null,
            "confirmed": 2,
            "country": "Liberia",
            "district": "Sinoe",
            "hcw": 0,
            "probable": 3,
            "suspected": 1,
            "total_cases": 6
        }, {
            "centroid": [-11.9021619466,
                8.6944297019
            ],
            "confirmed": 26,
            "country": "Sierra Leone",
            "district": "Tonkolili",
            "hcw": 0,
            "probable": 0,
            "suspected": 3,
            "total_cases": 29
        }],
        "epiweek": "2014-W40",
        "probable": 159,
        "suspected": 307,
        "total": 951
    }, {
        "confirmed": 575,
        "districts": [{
            "centroid": [-8.33509894591,
                8.89499658308
            ],
            "confirmed": 5,
            "country": "Guinea",
            "district": "Beyla",
            "hcw": 1,
            "probable": 0,
            "suspected": 1,
            "total_cases": 6
        }, {
            "centroid": [-11.750688035,
                7.9935946161
            ],
            "confirmed": 22,
            "country": "Sierra Leone",
            "district": "Bo",
            "hcw": 0,
            "probable": 0,
            "suspected": 10,
            "total_cases": 32
        }, {
            "centroid": [-14.3617687695,
                11.0893838793
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Boke",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-12.1955446453,
                9.32328913639
            ],
            "confirmed": 94,
            "country": "Sierra Leone",
            "district": "Bombali",
            "hcw": 0,
            "probable": 0,
            "suspected": 23,
            "total_cases": 117
        }, {
            "centroid": null,
            "confirmed": 2,
            "country": "Liberia",
            "district": "Bomi",
            "hcw": 0,
            "probable": 5,
            "suspected": 5,
            "total_cases": 12
        }, {
            "centroid": null,
            "confirmed": 4,
            "country": "Liberia",
            "district": "Bong",
            "hcw": 0,
            "probable": 16,
            "suspected": 55,
            "total_cases": 75
        }, {
            "centroid": null,
            "confirmed": 13,
            "country": "Guinea",
            "district": "Conakry",
            "hcw": 0,
            "probable": 0,
            "suspected": 24,
            "total_cases": 37
        }, {
            "centroid": [-13.3159837156,
                9.73536465349
            ],
            "confirmed": 25,
            "country": "Guinea",
            "district": "Coyah",
            "hcw": 0,
            "probable": 0,
            "suspected": 3,
            "total_cases": 28
        }, {
            "centroid": [-12.1402794081,
                10.9131793497
            ],
            "confirmed": 2,
            "country": "Guinea",
            "district": "Dalaba",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": [-13.4939931579,
                10.1206853671
            ],
            "confirmed": 0,
            "country": "Guinea",
            "district": "Dubreka",
            "hcw": 0,
            "probable": 0,
            "suspected": 1,
            "total_cases": 1
        }, {
            "centroid": [-13.0627260644,
                9.41630127096
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Forecariah",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-13.2516184791,
                8.46161143374
            ],
            "confirmed": 172,
            "country": "Sierra Leone",
            "district": "Freetown",
            "hcw": 0,
            "probable": 0,
            "suspected": 27,
            "total_cases": 199
        }, {
            "centroid": null,
            "confirmed": 1,
            "country": "Liberia",
            "district": "Gbarpolu",
            "hcw": 0,
            "probable": 2,
            "suspected": 1,
            "total_cases": 4
        }, {
            "centroid": null,
            "confirmed": 1,
            "country": "Liberia",
            "district": "Grand Bassa",
            "hcw": 0,
            "probable": 5,
            "suspected": 1,
            "total_cases": 7
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Grand Cape Mount",
            "hcw": 0,
            "probable": 2,
            "suspected": 7,
            "total_cases": 9
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Grand Kru",
            "hcw": 0,
            "probable": 3,
            "suspected": 3,
            "total_cases": 6
        }, {
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 0,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 0,
            "probable": 0,
            "suspected": 3,
            "total_cases": 3
        }, {
            "centroid": [-10.7177144281,
                8.09228705936
            ],
            "confirmed": 8,
            "country": "Sierra Leone",
            "district": "Kailahun",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 8
        }, {
            "centroid": [-12.8268555724,
                9.17121326335
            ],
            "confirmed": 4,
            "country": "Sierra Leone",
            "district": "Kambia",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 4
        }, {
            "centroid": [-11.2257628471,
                7.94214556432
            ],
            "confirmed": 16,
            "country": "Sierra Leone",
            "district": "Kenema",
            "hcw": 0,
            "probable": 0,
            "suspected": 5,
            "total_cases": 21
        }, {
            "centroid": [-9.10499016737,
                9.26366627328
            ],
            "confirmed": 14,
            "country": "Guinea",
            "district": "Kerouane",
            "hcw": 0,
            "probable": 0,
            "suspected": 6,
            "total_cases": 20
        }, {
            "centroid": [-10.0272901436,
                9.24280287002
            ],
            "confirmed": 2,
            "country": "Guinea",
            "district": "Kissidougo",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": [-10.9664252552,
                8.69471402857
            ],
            "confirmed": 6,
            "country": "Sierra Leone",
            "district": "Kono",
            "hcw": 0,
            "probable": 0,
            "suspected": 4,
            "total_cases": 10
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Lofa",
            "hcw": 0,
            "probable": 13,
            "suspected": 0,
            "total_cases": 13
        }, {
            "centroid": [-8.32663691342,
                7.99102302963
            ],
            "confirmed": 7,
            "country": "Guinea",
            "district": "Lola",
            "hcw": 0,
            "probable": 0,
            "suspected": 2,
            "total_cases": 9
        }, {
            "centroid": [-9.33932375244,
                8.45053527378
            ],
            "confirmed": 51,
            "country": "Guinea",
            "district": "Macenta",
            "hcw": 0,
            "probable": 0,
            "suspected": 18,
            "total_cases": 69
        }, {
            "centroid": [-11.8048918743,
                10.4930688004
            ],
            "confirmed": 1,
            "country": "Guinea",
            "district": "Mamou",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Margibi",
            "hcw": 1,
            "probable": 17,
            "suspected": 11,
            "total_cases": 28
        }, {
            "centroid": null,
            "confirmed": 1,
            "country": "Liberia",
            "district": "Monrovia",
            "hcw": 1,
            "probable": 47,
            "suspected": 90,
            "total_cases": 138
        }, {
            "centroid": [-12.4546600261,
                8.08506816093
            ],
            "confirmed": 9,
            "country": "Sierra Leone",
            "district": "Moyamba",
            "hcw": 0,
            "probable": 0,
            "suspected": 4,
            "total_cases": 13
        }, {
            "centroid": [-8.7967554244,
                7.9546695681
            ],
            "confirmed": 19,
            "country": "Guinea",
            "district": "N'Zerekore",
            "hcw": 0,
            "probable": 10,
            "suspected": 2,
            "total_cases": 31
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Nimba",
            "hcw": 0,
            "probable": 6,
            "suspected": 1,
            "total_cases": 7
        }, {
            "centroid": [-12.7583542486,
                8.73493804628
            ],
            "confirmed": 67,
            "country": "Sierra Leone",
            "district": "Port Loko",
            "hcw": 0,
            "probable": 0,
            "suspected": 3,
            "total_cases": 70
        }, {
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Sinoe",
            "hcw": 0,
            "probable": 0,
            "suspected": 2,
            "total_cases": 2
        }, {
            "centroid": [-11.9021619466,
                8.6944297019
            ],
            "confirmed": 27,
            "country": "Sierra Leone",
            "district": "Tonkolili",
            "hcw": 0,
            "probable": 0,
            "suspected": 10,
            "total_cases": 37
        }],
        "epiweek": "2014-W41",
        "probable": 126,
        "suspected": 322,
        "total": 1023
    }, {
        "confirmed": 10,
        "districts": [{
            "centroid": null,
            "confirmed": 0,
            "country": "Liberia",
            "district": "Bong",
            "hcw": 2,
            "probable": 0,
            "suspected": 4,
            "total_cases": 4
        }, {
            "centroid": null,
            "confirmed": 2,
            "country": "Liberia",
            "district": "Grand Bassa",
            "hcw": 0,
            "probable": 0,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": [-10.3048348255,
                8.69493972138
            ],
            "confirmed": 0,
            "country": "Guinea",
            "district": "Gueckedou",
            "hcw": 0,
            "probable": 1,
            "suspected": 0,
            "total_cases": 1
        }, {
            "centroid": [-10.7177144281,
                8.09228705936
            ],
            "confirmed": 2,
            "country": "Sierra Leone",
            "district": "Kailahun",
            "hcw": 1,
            "probable": 0,
            "suspected": 0,
            "total_cases": 2
        }, {
            "centroid": null,
            "confirmed": 4,
            "country": "Liberia",
            "district": "Lofa",
            "hcw": 0,
            "probable": 11,
            "suspected": 18,
            "total_cases": 33
        }, {
            "centroid": null,
            "confirmed": 2,
            "country": "Liberia",
            "district": "Margibi",
            "hcw": 1,
            "probable": 1,
            "suspected": 0,
            "total_cases": 3
        }],
        "epiweek": "NA",
        "probable": 13,
        "suspected": 22,
        "total": 45
    }];


    var probableArray = [];
    var suspectedArray = [];
    var confirmedArray = [];
    var weeksArray = [];

    $.each(globalData, function(index, value) {
        probableArray.push(value.probable);
        suspectedArray.push(value.suspected);
        confirmedArray.push(value.confirmed);
        weeksArray.push(value.epiweek.slice(-2));
    });


    $(function() {
        $('#global-epi').highcharts({
            chart: {
                type: 'column',
                backgroundColor: '#eee',
                marginTop: 20,
                marginRight: 0,
                marginLeft: 70,
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: weeksArray,
                tickInterval: 4,
                title: {
                    text: 'Epidemic week',
                    style: {
                        fontSize: '11px',
                        color: '#999'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Cases',
                    style: {
                        fontSize: '11px',
                        color: '#999'
                    }
                },
                stackLabels: {
                    enabled: false,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -800,
                verticalAlign: 'top',
                y: 0,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false,
                enabled: false
            },
            credits: {
                enabled: false
            },
            tooltip: {
                formatter: function() {
                    return '<b>Epidemic week ' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y + '<br/>' +
                        'Total: ' + this.point.stackTotal;
                }
            },
            plotOptions: {
                series: {
                    pointPadding: 0,
                    groupPadding: 0,
                    borderWidth: 0,
                    shadow: false
                },
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: false,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                        style: {
                            textShadow: '0 0 3px black, 0 0 3px black'
                        }
                    }
                }
            },
            series: [{
                name: 'Confirmed',
                data: confirmedArray,
                color: '#d86422'
            }, {
                name: 'Suspected',
                data: suspectedArray,
                color: '#E6925F',
            }, {
                name: 'Probable',
                data: probableArray,
                color: '#F0C1A5',
            }]
        });
    });

    L.mapbox.accessToken = 'pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q';
    var map = L.mapbox.map('map', 'examples.map-20v6611k').setView([8.57, -11.75], 7);
    var cases = L.mapbox.featureLayer();
    map.addLayer(cases);
    map.scrollWheelZoom.disable();


    var iconPath = {
        'iconUrl': /ebola-dashboard/ + 'img/case-marker-path-grad.png',
    };
    var iconFill = {
        'iconUrl': /ebola-dashboard/ + 'img/case-marker.png',
    };


    var epiweek;
    $.each(districtData, function(index, value) {
        //console.log(value);
        epiweek = value.epiweek;
        $.each(value.districts, function(index, value) {
            //console.log(value.centroid[1]);
            if (value.centroid != null) {

                var icon = {
                    'iconUrl': /ebola-dashboard/ + 'img/case-marker.png',
                    'iconSize': [value.total_cases, value.total_cases]
                };

                var markup = '<div class="inner"><b>' + value.total_cases + ' cases</b><br>' + value.district + ', ' + value.country + '</div>';

                var marker = L.marker([value.centroid[1], value.centroid[0]], {
                    'epiweek': epiweek,
                    'epiWeekId': index,
                    'opacity': 0.7
                });

                marker.setIcon(L.icon(icon));
                marker.bindPopup(markup, {
                    autoPan: true
                });
                cases.addLayer(marker);
                marker._icon.style.display = 'none';
            }

        });
    });

    // show the most recent week's cases
    //map.fitBounds(cases.getBounds());
    $('.week-label').empty().append(globalData[globalData.length - 1]['epiweek']);
    cases.eachLayer(function(marker) {
        if (marker.options.epiweek === globalData[globalData.length - 1]['epiweek']) {
            marker.setOpacity(0.7);
            marker._icon.style.display = '';
        } else {
            marker._icon.style.display = 'none';
            //marker.setIcon(L.icon(iconPath));
        }
    });

    var mapCounter = 0;
    var mapTimer;

    function mapLoop() {
        if (mapCounter == globalData.length - 1) {
            mapCounter = 0;
        }
        $('#slider').slider({
            value: mapCounter
        });
        $('.week-label').empty().append(globalData[mapCounter]['epiweek']);
        cases.eachLayer(function(marker) {
            if (marker.options.epiweek === globalData[mapCounter]['epiweek']) {
                marker.setOpacity(0.7);
                marker._icon.style.display = '';
            } else {
                marker._icon.style.display = 'none';
            }
        });
        mapCounter++;
    }

    //console.log(markerLayer);
    $("#slider").slider({
        max: globalData.length - 1,
        value: globalData.length - 1
    });

    var sliderValue;
    $("#slider").on("slide", function(event, ui) {
        sliderValue = ui.value;
        
        $('.week-label').empty().append(globalData[sliderValue]['epiweek']);
        cases.eachLayer(function(marker) {
            if (marker.options.epiweek === globalData[sliderValue]['epiweek']) {
                marker.setOpacity(0.7);
                marker._icon.style.display = '';
            } else {
                marker._icon.style.display = 'none';
                //marker.setIcon(L.icon(iconPath));
            }
        });
    });


    $("#play-btn").click(function(e) {
        e.preventDefault();
        if ($(this).hasClass('playing')) {
            clearInterval(mapTimer);
            $(this).removeClass('playing');
        } else {
            e.preventDefault();
            mapTimer = setInterval(mapLoop, 300);
            $(this).addClass('playing');
        }
    });

 	
 	
 	 // Update latest numbers
 	var casesTotal = 0;
 	$.each(globalData, function(index, value) {
 	 console.log(value.total);
 	  casesTotal = casesTotal + value.total;
 	});


	$('.summary-cases').empty().append(commaSeparateNumber(casesTotal));
	$('.summary-cases-recent').empty().append(commaSeparateNumber(globalData[globalData.length -1]['total']));
	
	
	function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
  }

});
