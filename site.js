---
---
$(document).ready(function() {

    var globalData = [{
        "confirmed": 0,
        "deaths": 2,
        "epiweek": "2014-W01",
        "probable": 2,
        "suspected": 0,
        "total": 2
    },
    {
        "confirmed": 8,
        "deaths": 6,
        "epiweek": "2014-W02",
        "probable": 0,
        "suspected": 1,
        "total": 9
    },
	{
	"confirmed": 10,
	"deaths": 30,
	"epiweek": "2014-W03",
	"probable": 13,
	"suspected": 22,
	"total": 45
	},
    {
        "confirmed": 0,
        "deaths": 5,
        "epiweek": "2014-W04",
        "probable": 5,
        "suspected": 0,
        "total": 5
    },
    {
        "confirmed": 0,
        "deaths": 3,
        "epiweek": "2014-W05",
        "probable": 3,
        "suspected": 0,
        "total": 3
    },
    {
        "confirmed": 8,
        "deaths": 12,
        "epiweek": "2014-W06",
        "probable": 7,
        "suspected": 0,
        "total": 15
    },
    {
        "confirmed": 0,
        "deaths": 3,
        "epiweek": "2014-W07",
        "probable": 3,
        "suspected": 0,
        "total": 3
    },
    {
        "confirmed": 0,
        "deaths": 5,
        "epiweek": "2014-W08",
        "probable": 5,
        "suspected": 0,
        "total": 5
    },
    {
        "confirmed": 1,
        "deaths": 7,
        "epiweek": "2014-W09",
        "probable": 6,
        "suspected": 0,
        "total": 7
    },
    {
        "confirmed": 11,
        "deaths": 13,
        "epiweek": "2014-W10",
        "probable": 5,
        "suspected": 0,
        "total": 16
    },
    {
        "confirmed": 11,
        "deaths": 22,
        "epiweek": "2014-W11",
        "probable": 16,
        "suspected": 0,
        "total": 27
    },
    {
        "confirmed": 11,
        "deaths": 16,
        "epiweek": "2014-W12",
        "probable": 7,
        "suspected": 2,
        "total": 20
    },
    {
        "confirmed": 23,
        "deaths": 19,
        "epiweek": "2014-W13",
        "probable": 5,
        "suspected": 0,
        "total": 28
    },
    {
        "confirmed": 23,
        "deaths": 22,
        "epiweek": "2014-W14",
        "probable": 7,
        "suspected": 0,
        "total": 30
    },
    {
        "confirmed": 37,
        "deaths": 30,
        "epiweek": "2014-W15",
        "probable": 6,
        "suspected": 2,
        "total": 45
    },
    {
        "confirmed": 16,
        "deaths": 9,
        "epiweek": "2014-W16",
        "probable": 0,
        "suspected": 0,
        "total": 16
    },
    {
        "confirmed": 10,
        "deaths": 6,
        "epiweek": "2014-W17",
        "probable": 0,
        "suspected": 0,
        "total": 10
    },
    {
        "confirmed": 3,
        "deaths": 11,
        "epiweek": "2014-W18",
        "probable": 8,
        "suspected": 0,
        "total": 11
    },
    {
        "confirmed": 19,
        "deaths": 21,
        "epiweek": "2014-W19",
        "probable": 4,
        "suspected": 1,
        "total": 24
    },
    {
        "confirmed": 6,
        "deaths": 5,
        "epiweek": "2014-W20",
        "probable": 2,
        "suspected": 0,
        "total": 8
    },
    {
        "confirmed": 22,
        "deaths": 17,
        "epiweek": "2014-W21",
        "probable": 4,
        "suspected": 0,
        "total": 26
    },
    {
        "confirmed": 39,
        "deaths": 35,
        "epiweek": "2014-W22",
        "probable": 12,
        "suspected": 1,
        "total": 52
    },
    {
        "confirmed": 32,
        "deaths": 22,
        "epiweek": "2014-W23",
        "probable": 3,
        "suspected": 2,
        "total": 37
    },
    {
        "confirmed": 91,
        "deaths": 96,
        "epiweek": "2014-W24",
        "probable": 25,
        "suspected": 6,
        "total": 122
    },
    {
        "confirmed": 111,
        "deaths": 68,
        "epiweek": "2014-W25",
        "probable": 1,
        "suspected": 7,
        "total": 119
    },
    {
        "confirmed": 69,
        "deaths": 52,
        "epiweek": "2014-W26",
        "probable": 6,
        "suspected": 2,
        "total": 77
    },
    {
        "confirmed": 91,
        "deaths": 41,
        "epiweek": "2014-W27",
        "probable": 6,
        "suspected": 5,
        "total": 102
    },
    {
        "confirmed": 132,
        "deaths": 62,
        "epiweek": "2014-W28",
        "probable": 10,
        "suspected": 10,
        "total": 152
    },
    {
        "confirmed": 83,
        "deaths": 104,
        "epiweek": "2014-W29",
        "probable": 49,
        "suspected": 24,
        "total": 156
    },
    {
        "confirmed": 169,
        "deaths": 140,
        "epiweek": "2014-W30",
        "probable": 76,
        "suspected": 27,
        "total": 272
    },
    {
        "confirmed": 136,
        "deaths": 232,
        "epiweek": "2014-W31",
        "probable": 132,
        "suspected": 55,
        "total": 323
    },
    {
        "confirmed": 113,
        "deaths": 89,
        "epiweek": "2014-W32",
        "probable": 62,
        "suspected": 7,
        "total": 182
    },
    {
        "confirmed": 206,
        "deaths": 299,
        "epiweek": "2014-W33",
        "probable": 155,
        "suspected": 35,
        "total": 396
    },
    {
        "confirmed": 342,
        "deaths": 586,
        "epiweek": "2014-W34",
        "probable": 195,
        "suspected": 128,
        "total": 665
    },
    {
        "confirmed": 330,
        "deaths": 370,
        "epiweek": "2014-W35",
        "probable": 163,
        "suspected": 43,
        "total": 536
    },
    {
        "confirmed": 508,
        "deaths": 541,
        "epiweek": "2014-W36",
        "probable": 160,
        "suspected": 81,
        "total": 749
    },
    {
        "confirmed": 424,
        "deaths": 487,
        "epiweek": "2014-W37",
        "probable": 268,
        "suspected": 186,
        "total": 878
    },
    {
        "confirmed": 443,
        "deaths": 202,
        "epiweek": "2014-W38",
        "probable": 233,
        "suspected": 329,
        "total": 1005
    },
    {
        "confirmed": 405,
        "deaths": 64,
        "epiweek": "2014-W39",
        "probable": 202,
        "suspected": 235,
        "total": 842
    },
    {
        "confirmed": 485,
        "deaths": 68,
        "epiweek": "2014-W40",
        "probable": 159,
        "suspected": 307,
        "total": 951
    },
    {
        "confirmed": 575,
        "deaths": 64,
        "epiweek": "2014-W41",
        "probable": 126,
        "suspected": 322,
        "total": 1023
    }];


    var districtData = [
    {
        "confirmed": 0,
        "deaths": 2,
        "districts": [
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 0,
                "country": "Guinea",
                "deaths": 2,
                "district": "Gueckedou",
                "hcw": 0,
                "probable": 2,
                "suspected": 0,
                "total_cases": 2
            }
        ],
        "epiweek": "2014-W01",
        "probable": 2,
        "suspected": 0,
        "total": 2
    },
    {
        "confirmed": 8,
        "deaths": 6,
        "districts": [
            {
                "centroid": [
                    -13.2516184791,
                    8.46161143374
                ],
                "confirmed": 5,
                "country": "Sierra Leone",
                "deaths": 5,
                "district": "Freetown",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 5
            },
            {
                "centroid": [
                    -10.7177144281,
                    8.09228705936
                ],
                "confirmed": 3,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Kailahun",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 3
            },
            {
                "centroid": [
                    -12.7583542486,
                    8.73493804628
                ],
                "confirmed": 0,
                "country": "Sierra Leone",
                "deaths": 1,
                "district": "Port Loko",
                "hcw": 0,
                "probable": 0,
                "suspected": 1,
                "total_cases": 1
            }
        ],
        "epiweek": "2014-W02",
        "probable": 0,
        "suspected": 1,
        "total": 9
    },
    {
        "confirmed": 0,
        "deaths": 5,
        "districts": [
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 0,
                "country": "Guinea",
                "deaths": 5,
                "district": "Gueckedou",
                "hcw": 1,
                "probable": 5,
                "suspected": 0,
                "total_cases": 5
            }
        ],
        "epiweek": "2014-W04",
        "probable": 5,
        "suspected": 0,
        "total": 5
    },
    {
        "confirmed": 0,
        "deaths": 3,
        "districts": [
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 0,
                "country": "Guinea",
                "deaths": 3,
                "district": "Gueckedou",
                "hcw": 1,
                "probable": 3,
                "suspected": 0,
                "total_cases": 3
            }
        ],
        "epiweek": "2014-W05",
        "probable": 3,
        "suspected": 0,
        "total": 3
    },
    {
        "confirmed": 8,
        "deaths": 12,
        "districts": [
            {
                "centroid": [
                    -13.2516184791,
                    8.46161143374
                ],
                "confirmed": 4,
                "country": "Sierra Leone",
                "deaths": 4,
                "district": "Freetown",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 4
            },
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 0,
                "country": "Guinea",
                "deaths": 5,
                "district": "Gueckedou",
                "hcw": 0,
                "probable": 5,
                "suspected": 0,
                "total_cases": 5
            },
            {
                "centroid": [
                    -10.7177144281,
                    8.09228705936
                ],
                "confirmed": 1,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Kailahun",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -10.7215195765,
                    6.3137163044
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 0,
                "district": "Monrovia",
                "hcw": 2,
                "probable": 2,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -12.7583542486,
                    8.73493804628
                ],
                "confirmed": 3,
                "country": "Sierra Leone",
                "deaths": 3,
                "district": "Port Loko",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 3
            }
        ],
        "epiweek": "2014-W06",
        "probable": 7,
        "suspected": 0,
        "total": 15
    },
    {
        "confirmed": 0,
        "deaths": 3,
        "districts": [
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 0,
                "country": "Guinea",
                "deaths": 2,
                "district": "Gueckedou",
                "hcw": 0,
                "probable": 2,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -9.33932375244,
                    8.45053527378
                ],
                "confirmed": 0,
                "country": "Guinea",
                "deaths": 1,
                "district": "Macenta",
                "hcw": 1,
                "probable": 1,
                "suspected": 0,
                "total_cases": 1
            }
        ],
        "epiweek": "2014-W07",
        "probable": 3,
        "suspected": 0,
        "total": 3
    },
    {
        "confirmed": 0,
        "deaths": 5,
        "districts": [
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 0,
                "country": "Guinea",
                "deaths": 3,
                "district": "Gueckedou",
                "hcw": 0,
                "probable": 3,
                "suspected": 0,
                "total_cases": 3
            },
            {
                "centroid": [
                    -9.33932375244,
                    8.45053527378
                ],
                "confirmed": 0,
                "country": "Guinea",
                "deaths": 2,
                "district": "Macenta",
                "hcw": 1,
                "probable": 2,
                "suspected": 0,
                "total_cases": 2
            }
        ],
        "epiweek": "2014-W08",
        "probable": 5,
        "suspected": 0,
        "total": 5
    },
    {
        "confirmed": 1,
        "deaths": 7,
        "districts": [
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 0,
                "country": "Guinea",
                "deaths": 5,
                "district": "Gueckedou",
                "hcw": 0,
                "probable": 5,
                "suspected": 0,
                "total_cases": 5
            },
            {
                "centroid": [
                    -9.33932375244,
                    8.45053527378
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 2,
                "district": "Macenta",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 2
            }
        ],
        "epiweek": "2014-W09",
        "probable": 6,
        "suspected": 0,
        "total": 7
    },
    {
        "confirmed": 11,
        "deaths": 13,
        "districts": [
            {
                "centroid": [
                    -13.2516184791,
                    8.46161143374
                ],
                "confirmed": 6,
                "country": "Sierra Leone",
                "deaths": 6,
                "district": "Freetown",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 6
            },
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 0,
                "country": "Guinea",
                "deaths": 3,
                "district": "Gueckedou",
                "hcw": 0,
                "probable": 3,
                "suspected": 0,
                "total_cases": 3
            },
            {
                "centroid": [
                    -10.7177144281,
                    8.09228705936
                ],
                "confirmed": 3,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Kailahun",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 3
            },
            {
                "centroid": [
                    -10.0272901436,
                    9.24280287002
                ],
                "confirmed": 0,
                "country": "Guinea",
                "deaths": 2,
                "district": "Kissidougo",
                "hcw": 0,
                "probable": 2,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -9.33932375244,
                    8.45053527378
                ],
                "confirmed": 2,
                "country": "Guinea",
                "deaths": 2,
                "district": "Macenta",
                "hcw": 1,
                "probable": 0,
                "suspected": 0,
                "total_cases": 2
            }
        ],
        "epiweek": "2014-W10",
        "probable": 5,
        "suspected": 0,
        "total": 16
    },
    {
        "confirmed": 11,
        "deaths": 22,
        "districts": [
            {
                "centroid": [
                    -13.5614691474,
                    9.62757357497
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 0,
                "district": "Conakry",
                "hcw": 1,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 7,
                "country": "Guinea",
                "deaths": 16,
                "district": "Gueckedou",
                "hcw": 0,
                "probable": 12,
                "suspected": 0,
                "total_cases": 19
            },
            {
                "centroid": [
                    -10.0272901436,
                    9.24280287002
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 2,
                "district": "Kissidougo",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -10.1012791495,
                    10.5819899535
                ],
                "confirmed": 0,
                "country": "Guinea",
                "deaths": 1,
                "district": "Kouroussa",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -9.33932375244,
                    8.45053527378
                ],
                "confirmed": 2,
                "country": "Guinea",
                "deaths": 3,
                "district": "Macenta",
                "hcw": 0,
                "probable": 2,
                "suspected": 0,
                "total_cases": 4
            }
        ],
        "epiweek": "2014-W11",
        "probable": 16,
        "suspected": 0,
        "total": 27
    },
    {
        "confirmed": 11,
        "deaths": 16,
        "districts": [
            {
                "centroid": [
                    -9.64366019073,
                    6.94376505628
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 0,
                "district": "Bong",
                "hcw": 0,
                "probable": 0,
                "suspected": 1,
                "total_cases": 1
            },
            {
                "centroid": [
                    -11.0627538709,
                    10.7299012426
                ],
                "confirmed": 0,
                "country": "Guinea",
                "deaths": 1,
                "district": "Dabola",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 10,
                "country": "Guinea",
                "deaths": 12,
                "district": "Gueckedou",
                "hcw": 2,
                "probable": 4,
                "suspected": 0,
                "total_cases": 14
            },
            {
                "centroid": [
                    -10.0272901436,
                    9.24280287002
                ],
                "confirmed": 0,
                "country": "Guinea",
                "deaths": 1,
                "district": "Kissidougo",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -9.85031000872,
                    7.9952352352
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 1,
                "district": "Lofa",
                "hcw": 0,
                "probable": 0,
                "suspected": 1,
                "total_cases": 1
            },
            {
                "centroid": [
                    -9.33932375244,
                    8.45053527378
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 1,
                "district": "Macenta",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -10.7215195765,
                    6.3137163044
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 0,
                "district": "Monrovia",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 1
            }
        ],
        "epiweek": "2014-W12",
        "probable": 7,
        "suspected": 2,
        "total": 20
    },
    {
        "confirmed": 23,
        "deaths": 19,
        "districts": [
            {
                "centroid": [
                    -13.5614691474,
                    9.62757357497
                ],
                "confirmed": 11,
                "country": "Guinea",
                "deaths": 5,
                "district": "Conakry",
                "hcw": 5,
                "probable": 0,
                "suspected": 0,
                "total_cases": 11
            },
            {
                "centroid": [
                    -11.0627538709,
                    10.7299012426
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 1,
                "district": "Dabola",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -10.7262027524,
                    11.6069674927
                ],
                "confirmed": 0,
                "country": "Guinea",
                "deaths": 1,
                "district": "Dinguiraye",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 7,
                "country": "Guinea",
                "deaths": 8,
                "district": "Gueckedou",
                "hcw": 2,
                "probable": 2,
                "suspected": 0,
                "total_cases": 9
            },
            {
                "centroid": [
                    -9.33932375244,
                    8.45053527378
                ],
                "confirmed": 4,
                "country": "Guinea",
                "deaths": 4,
                "district": "Macenta",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 5
            },
            {
                "centroid": [
                    -10.7215195765,
                    6.3137163044
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 0,
                "district": "Monrovia",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 1
            }
        ],
        "epiweek": "2014-W13",
        "probable": 5,
        "suspected": 0,
        "total": 28
    },
    {
        "confirmed": 23,
        "deaths": 22,
        "districts": [
            {
                "centroid": [
                    -13.5614691474,
                    9.62757357497
                ],
                "confirmed": 9,
                "country": "Guinea",
                "deaths": 8,
                "district": "Conakry",
                "hcw": 3,
                "probable": 2,
                "suspected": 0,
                "total_cases": 11
            },
            {
                "centroid": [
                    -11.0627538709,
                    10.7299012426
                ],
                "confirmed": 0,
                "country": "Guinea",
                "deaths": 1,
                "district": "Dabola",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 11,
                "country": "Guinea",
                "deaths": 10,
                "district": "Gueckedou",
                "hcw": 0,
                "probable": 2,
                "suspected": 0,
                "total_cases": 13
            },
            {
                "centroid": [
                    -10.0272901436,
                    9.24280287002
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 1,
                "district": "Kissidougo",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -9.85031000872,
                    7.9952352352
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 1,
                "district": "Lofa",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -9.33932375244,
                    8.45053527378
                ],
                "confirmed": 2,
                "country": "Guinea",
                "deaths": 1,
                "district": "Macenta",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -10.7215195765,
                    6.3137163044
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 0,
                "district": "Monrovia",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 1
            }
        ],
        "epiweek": "2014-W14",
        "probable": 7,
        "suspected": 0,
        "total": 30
    },
    {
        "confirmed": 37,
        "deaths": 30,
        "districts": [
            {
                "centroid": [
                    -13.5614691474,
                    9.62757357497
                ],
                "confirmed": 8,
                "country": "Guinea",
                "deaths": 5,
                "district": "Conakry",
                "hcw": 4,
                "probable": 0,
                "suspected": 0,
                "total_cases": 8
            },
            {
                "centroid": [
                    -13.2516184791,
                    8.46161143374
                ],
                "confirmed": 5,
                "country": "Sierra Leone",
                "deaths": 5,
                "district": "Freetown",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 5
            },
            {
                "centroid": [
                    -11.0499721228,
                    7.08098748329
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 1,
                "district": "Grand Cape Mount",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 19,
                "country": "Guinea",
                "deaths": 14,
                "district": "Gueckedou",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 19
            },
            {
                "centroid": [
                    -10.7177144281,
                    8.09228705936
                ],
                "confirmed": 3,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Kailahun",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 3
            },
            {
                "centroid": [
                    -9.85031000872,
                    7.9952352352
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 1,
                "district": "Lofa",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -10.2601725424,
                    6.52717365125
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 0,
                "district": "Margibi",
                "hcw": 0,
                "probable": 3,
                "suspected": 0,
                "total_cases": 3
            },
            {
                "centroid": [
                    -10.7215195765,
                    6.3137163044
                ],
                "confirmed": 2,
                "country": "Liberia",
                "deaths": 2,
                "district": "Monrovia",
                "hcw": 1,
                "probable": 1,
                "suspected": 0,
                "total_cases": 3
            },
            {
                "centroid": [
                    -12.7583542486,
                    8.73493804628
                ],
                "confirmed": 0,
                "country": "Sierra Leone",
                "deaths": 1,
                "district": "Port Loko",
                "hcw": 0,
                "probable": 0,
                "suspected": 1,
                "total_cases": 1
            },
            {
                "centroid": [
                    -11.5724206143,
                    7.32219946466
                ],
                "confirmed": 0,
                "country": "Sierra Leone",
                "deaths": 1,
                "district": "Pujehun",
                "hcw": 0,
                "probable": 0,
                "suspected": 1,
                "total_cases": 1
            }
        ],
        "epiweek": "2014-W15",
        "probable": 6,
        "suspected": 2,
        "total": 45
    },
    {
        "confirmed": 16,
        "deaths": 9,
        "districts": [
            {
                "centroid": [
                    -13.5614691474,
                    9.62757357497
                ],
                "confirmed": 9,
                "country": "Guinea",
                "deaths": 3,
                "district": "Conakry",
                "hcw": 2,
                "probable": 0,
                "suspected": 0,
                "total_cases": 9
            },
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 7,
                "country": "Guinea",
                "deaths": 6,
                "district": "Gueckedou",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 7
            }
        ],
        "epiweek": "2014-W16",
        "probable": 0,
        "suspected": 0,
        "total": 16
    },
    {
        "confirmed": 10,
        "deaths": 6,
        "districts": [
            {
                "centroid": [
                    -13.5614691474,
                    9.62757357497
                ],
                "confirmed": 2,
                "country": "Guinea",
                "deaths": 1,
                "district": "Conakry",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 8,
                "country": "Guinea",
                "deaths": 5,
                "district": "Gueckedou",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 8
            }
        ],
        "epiweek": "2014-W17",
        "probable": 0,
        "suspected": 0,
        "total": 10
    },
    {
        "confirmed": 3,
        "deaths": 11,
        "districts": [
            {
                "centroid": [
                    -13.5614691474,
                    9.62757357497
                ],
                "confirmed": 0,
                "country": "Guinea",
                "deaths": 1,
                "district": "Conakry",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 3,
                "country": "Guinea",
                "deaths": 9,
                "district": "Gueckedou",
                "hcw": 0,
                "probable": 6,
                "suspected": 0,
                "total_cases": 9
            },
            {
                "centroid": [
                    -13.3591246619,
                    10.9192552488
                ],
                "confirmed": 0,
                "country": "Guinea",
                "deaths": 1,
                "district": "Telimele",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 1
            }
        ],
        "epiweek": "2014-W18",
        "probable": 8,
        "suspected": 0,
        "total": 11
    },
    {
        "confirmed": 19,
        "deaths": 21,
        "districts": [
            {
                "centroid": [
                    -13.2516184791,
                    8.46161143374
                ],
                "confirmed": 8,
                "country": "Sierra Leone",
                "deaths": 8,
                "district": "Freetown",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 8
            },
            {
                "centroid": [
                    -11.0499721228,
                    7.08098748329
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 0,
                "district": "Grand Cape Mount",
                "hcw": 1,
                "probable": 1,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 9,
                "country": "Guinea",
                "deaths": 12,
                "district": "Gueckedou",
                "hcw": 0,
                "probable": 3,
                "suspected": 0,
                "total_cases": 12
            },
            {
                "centroid": [
                    -9.85031000872,
                    7.9952352352
                ],
                "confirmed": 1,
                "country": "Liberia",
                "deaths": 0,
                "district": "Lofa",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -10.7215195765,
                    6.3137163044
                ],
                "confirmed": 1,
                "country": "Liberia",
                "deaths": 0,
                "district": "Monrovia",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -11.5724206143,
                    7.32219946466
                ],
                "confirmed": 0,
                "country": "Sierra Leone",
                "deaths": 1,
                "district": "Pujehun",
                "hcw": 0,
                "probable": 0,
                "suspected": 1,
                "total_cases": 1
            }
        ],
        "epiweek": "2014-W19",
        "probable": 4,
        "suspected": 1,
        "total": 24
    },
    {
        "confirmed": 6,
        "deaths": 5,
        "districts": [
            {
                "centroid": [
                    -13.5614691474,
                    9.62757357497
                ],
                "confirmed": 0,
                "country": "Guinea",
                "deaths": 1,
                "district": "Conakry",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 6,
                "country": "Guinea",
                "deaths": 3,
                "district": "Gueckedou",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 6
            },
            {
                "centroid": [
                    -13.3591246619,
                    10.9192552488
                ],
                "confirmed": 0,
                "country": "Guinea",
                "deaths": 1,
                "district": "Telimele",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 1
            }
        ],
        "epiweek": "2014-W20",
        "probable": 2,
        "suspected": 0,
        "total": 8
    },
    {
        "confirmed": 22,
        "deaths": 17,
        "districts": [
            {
                "centroid": [
                    -14.0545378494,
                    10.3704523359
                ],
                "confirmed": 0,
                "country": "Guinea",
                "deaths": 1,
                "district": "Boffa",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -13.5614691474,
                    9.62757357497
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 2,
                "district": "Conakry",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 10,
                "country": "Guinea",
                "deaths": 9,
                "district": "Gueckedou",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 10
            },
            {
                "centroid": [
                    -10.1012791495,
                    10.5819899535
                ],
                "confirmed": 0,
                "country": "Guinea",
                "deaths": 1,
                "district": "Kouroussa",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -9.33932375244,
                    8.45053527378
                ],
                "confirmed": 7,
                "country": "Guinea",
                "deaths": 2,
                "district": "Macenta",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 7
            },
            {
                "centroid": [
                    -13.3591246619,
                    10.9192552488
                ],
                "confirmed": 4,
                "country": "Guinea",
                "deaths": 2,
                "district": "Telimele",
                "hcw": 2,
                "probable": 1,
                "suspected": 0,
                "total_cases": 5
            }
        ],
        "epiweek": "2014-W21",
        "probable": 4,
        "suspected": 0,
        "total": 26
    },
    {
        "confirmed": 39,
        "deaths": 35,
        "districts": [
            {
                "centroid": [
                    -14.0545378494,
                    10.3704523359
                ],
                "confirmed": 2,
                "country": "Guinea",
                "deaths": 4,
                "district": "Boffa",
                "hcw": 0,
                "probable": 2,
                "suspected": 0,
                "total_cases": 4
            },
            {
                "centroid": [
                    -13.5614691474,
                    9.62757357497
                ],
                "confirmed": 3,
                "country": "Guinea",
                "deaths": 1,
                "district": "Conakry",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 3
            },
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 7,
                "country": "Guinea",
                "deaths": 12,
                "district": "Gueckedou",
                "hcw": 0,
                "probable": 6,
                "suspected": 0,
                "total_cases": 13
            },
            {
                "centroid": [
                    -10.1012791495,
                    10.5819899535
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 1,
                "district": "Kouroussa",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -9.85031000872,
                    7.9952352352
                ],
                "confirmed": 4,
                "country": "Liberia",
                "deaths": 4,
                "district": "Lofa",
                "hcw": 3,
                "probable": 0,
                "suspected": 0,
                "total_cases": 4
            },
            {
                "centroid": [
                    -9.33932375244,
                    8.45053527378
                ],
                "confirmed": 6,
                "country": "Guinea",
                "deaths": 8,
                "district": "Macenta",
                "hcw": 0,
                "probable": 4,
                "suspected": 0,
                "total_cases": 10
            },
            {
                "centroid": [
                    -10.7215195765,
                    6.3137163044
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 1,
                "district": "Monrovia",
                "hcw": 0,
                "probable": 0,
                "suspected": 1,
                "total_cases": 1
            },
            {
                "centroid": [
                    -13.3591246619,
                    10.9192552488
                ],
                "confirmed": 16,
                "country": "Guinea",
                "deaths": 4,
                "district": "Telimele",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 16
            }
        ],
        "epiweek": "2014-W22",
        "probable": 12,
        "suspected": 1,
        "total": 52
    },
    {
        "confirmed": 32,
        "deaths": 22,
        "districts": [
            {
                "centroid": [
                    -14.0545378494,
                    10.3704523359
                ],
                "confirmed": 7,
                "country": "Guinea",
                "deaths": 5,
                "district": "Boffa",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 8
            },
            {
                "centroid": [
                    -13.5614691474,
                    9.62757357497
                ],
                "confirmed": 8,
                "country": "Guinea",
                "deaths": 2,
                "district": "Conakry",
                "hcw": 1,
                "probable": 0,
                "suspected": 0,
                "total_cases": 8
            },
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 6,
                "country": "Guinea",
                "deaths": 5,
                "district": "Gueckedou",
                "hcw": 1,
                "probable": 1,
                "suspected": 0,
                "total_cases": 7
            },
            {
                "centroid": [
                    -10.7177144281,
                    8.09228705936
                ],
                "confirmed": 5,
                "country": "Sierra Leone",
                "deaths": 4,
                "district": "Kailahun",
                "hcw": 1,
                "probable": 1,
                "suspected": 0,
                "total_cases": 6
            },
            {
                "centroid": [
                    -11.2257628471,
                    7.94214556432
                ],
                "confirmed": 1,
                "country": "Sierra Leone",
                "deaths": 1,
                "district": "Kenema",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -9.85031000872,
                    7.9952352352
                ],
                "confirmed": 1,
                "country": "Liberia",
                "deaths": 0,
                "district": "Lofa",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -9.33932375244,
                    8.45053527378
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 1,
                "district": "Macenta",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -10.7215195765,
                    6.3137163044
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 1,
                "district": "Monrovia",
                "hcw": 0,
                "probable": 0,
                "suspected": 2,
                "total_cases": 2
            },
            {
                "centroid": [
                    -12.7583542486,
                    8.73493804628
                ],
                "confirmed": 1,
                "country": "Sierra Leone",
                "deaths": 1,
                "district": "Port Loko",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -13.3591246619,
                    10.9192552488
                ],
                "confirmed": 2,
                "country": "Guinea",
                "deaths": 2,
                "district": "Telimele",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 2
            }
        ],
        "epiweek": "2014-W23",
        "probable": 3,
        "suspected": 2,
        "total": 37
    },
    {
        "confirmed": 91,
        "deaths": 96,
        "districts": [
            {
                "centroid": [
                    -14.0545378494,
                    10.3704523359
                ],
                "confirmed": 3,
                "country": "Guinea",
                "deaths": 1,
                "district": "Boffa",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 3
            },
            {
                "centroid": [
                    -13.5614691474,
                    9.62757357497
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 2,
                "district": "Conakry",
                "hcw": 1,
                "probable": 2,
                "suspected": 0,
                "total_cases": 3
            },
            {
                "centroid": [
                    -13.2516184791,
                    8.46161143374
                ],
                "confirmed": 7,
                "country": "Sierra Leone",
                "deaths": 8,
                "district": "Freetown",
                "hcw": 0,
                "probable": 0,
                "suspected": 1,
                "total_cases": 8
            },
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 24,
                "country": "Guinea",
                "deaths": 21,
                "district": "Gueckedou",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 25
            },
            {
                "centroid": [
                    -10.7177144281,
                    8.09228705936
                ],
                "confirmed": 36,
                "country": "Sierra Leone",
                "deaths": 44,
                "district": "Kailahun",
                "hcw": 7,
                "probable": 22,
                "suspected": 0,
                "total_cases": 58
            },
            {
                "centroid": [
                    -9.85031000872,
                    7.9952352352
                ],
                "confirmed": 15,
                "country": "Liberia",
                "deaths": 12,
                "district": "Lofa",
                "hcw": 5,
                "probable": 0,
                "suspected": 1,
                "total_cases": 16
            },
            {
                "centroid": [
                    -10.7215195765,
                    6.3137163044
                ],
                "confirmed": 4,
                "country": "Liberia",
                "deaths": 6,
                "district": "Monrovia",
                "hcw": 0,
                "probable": 0,
                "suspected": 2,
                "total_cases": 6
            },
            {
                "centroid": [
                    -12.7583542486,
                    8.73493804628
                ],
                "confirmed": 0,
                "country": "Sierra Leone",
                "deaths": 2,
                "district": "Port Loko",
                "hcw": 0,
                "probable": 0,
                "suspected": 2,
                "total_cases": 2
            },
            {
                "centroid": [
                    -13.3591246619,
                    10.9192552488
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 0,
                "district": "Telimele",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            }
        ],
        "epiweek": "2014-W24",
        "probable": 25,
        "suspected": 6,
        "total": 122
    },
    {
        "confirmed": 111,
        "deaths": 68,
        "districts": [
            {
                "centroid": [
                    -11.750688035,
                    7.9935946161
                ],
                "confirmed": 1,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Bo",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -14.0545378494,
                    10.3704523359
                ],
                "confirmed": 3,
                "country": "Guinea",
                "deaths": 2,
                "district": "Boffa",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 3
            },
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 15,
                "country": "Guinea",
                "deaths": 13,
                "district": "Gueckedou",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 15
            },
            {
                "centroid": [
                    -10.7177144281,
                    8.09228705936
                ],
                "confirmed": 54,
                "country": "Sierra Leone",
                "deaths": 28,
                "district": "Kailahun",
                "hcw": 5,
                "probable": 1,
                "suspected": 0,
                "total_cases": 55
            },
            {
                "centroid": [
                    -11.2257628471,
                    7.94214556432
                ],
                "confirmed": 21,
                "country": "Sierra Leone",
                "deaths": 11,
                "district": "Kenema",
                "hcw": 2,
                "probable": 0,
                "suspected": 0,
                "total_cases": 21
            },
            {
                "centroid": [
                    -9.85031000872,
                    7.9952352352
                ],
                "confirmed": 14,
                "country": "Liberia",
                "deaths": 10,
                "district": "Lofa",
                "hcw": 1,
                "probable": 0,
                "suspected": 4,
                "total_cases": 18
            },
            {
                "centroid": [
                    -10.7215195765,
                    6.3137163044
                ],
                "confirmed": 3,
                "country": "Liberia",
                "deaths": 4,
                "district": "Monrovia",
                "hcw": 1,
                "probable": 0,
                "suspected": 3,
                "total_cases": 6
            }
        ],
        "epiweek": "2014-W25",
        "probable": 1,
        "suspected": 7,
        "total": 119
    },
    {
        "confirmed": 69,
        "deaths": 52,
        "districts": [
            {
                "centroid": [
                    -14.0545378494,
                    10.3704523359
                ],
                "confirmed": 2,
                "country": "Guinea",
                "deaths": 1,
                "district": "Boffa",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -13.5614691474,
                    9.62757357497
                ],
                "confirmed": 4,
                "country": "Guinea",
                "deaths": 3,
                "district": "Conakry",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 5
            },
            {
                "centroid": [
                    -13.2516184791,
                    8.46161143374
                ],
                "confirmed": 1,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Freetown",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 16,
                "country": "Guinea",
                "deaths": 16,
                "district": "Gueckedou",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 17
            },
            {
                "centroid": [
                    -10.7177144281,
                    8.09228705936
                ],
                "confirmed": 18,
                "country": "Sierra Leone",
                "deaths": 10,
                "district": "Kailahun",
                "hcw": 0,
                "probable": 2,
                "suspected": 0,
                "total_cases": 20
            },
            {
                "centroid": [
                    -11.2257628471,
                    7.94214556432
                ],
                "confirmed": 16,
                "country": "Sierra Leone",
                "deaths": 10,
                "district": "Kenema",
                "hcw": 5,
                "probable": 0,
                "suspected": 0,
                "total_cases": 16
            },
            {
                "centroid": [
                    -9.85031000872,
                    7.9952352352
                ],
                "confirmed": 3,
                "country": "Liberia",
                "deaths": 4,
                "district": "Lofa",
                "hcw": 1,
                "probable": 0,
                "suspected": 2,
                "total_cases": 5
            },
            {
                "centroid": [
                    -10.2601725424,
                    6.52717365125
                ],
                "confirmed": 1,
                "country": "Liberia",
                "deaths": 1,
                "district": "Margibi",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -10.7215195765,
                    6.3137163044
                ],
                "confirmed": 8,
                "country": "Liberia",
                "deaths": 7,
                "district": "Monrovia",
                "hcw": 2,
                "probable": 2,
                "suspected": 0,
                "total_cases": 10
            }
        ],
        "epiweek": "2014-W26",
        "probable": 6,
        "suspected": 2,
        "total": 77
    },
    {
        "confirmed": 91,
        "deaths": 41,
        "districts": [
            {
                "centroid": [
                    -11.750688035,
                    7.9935946161
                ],
                "confirmed": 1,
                "country": "Sierra Leone",
                "deaths": 1,
                "district": "Bo",
                "hcw": 1,
                "probable": 0,
                "suspected": 1,
                "total_cases": 2
            },
            {
                "centroid": [
                    -12.1955446453,
                    9.32328913639
                ],
                "confirmed": 1,
                "country": "Sierra Leone",
                "deaths": 1,
                "district": "Bombali",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -13.5614691474,
                    9.62757357497
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 0,
                "district": "Conakry",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 3,
                "district": "Gueckedou",
                "hcw": 0,
                "probable": 2,
                "suspected": 0,
                "total_cases": 3
            },
            {
                "centroid": [
                    -10.7177144281,
                    8.09228705936
                ],
                "confirmed": 46,
                "country": "Sierra Leone",
                "deaths": 11,
                "district": "Kailahun",
                "hcw": 4,
                "probable": 0,
                "suspected": 0,
                "total_cases": 46
            },
            {
                "centroid": [
                    -12.8268555724,
                    9.17121326335
                ],
                "confirmed": 1,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Kambia",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -11.2257628471,
                    7.94214556432
                ],
                "confirmed": 34,
                "country": "Sierra Leone",
                "deaths": 16,
                "district": "Kenema",
                "hcw": 6,
                "probable": 0,
                "suspected": 0,
                "total_cases": 34
            },
            {
                "centroid": [
                    -9.85031000872,
                    7.9952352352
                ],
                "confirmed": 1,
                "country": "Liberia",
                "deaths": 2,
                "district": "Lofa",
                "hcw": 0,
                "probable": 1,
                "suspected": 1,
                "total_cases": 3
            },
            {
                "centroid": [
                    -10.7215195765,
                    6.3137163044
                ],
                "confirmed": 4,
                "country": "Liberia",
                "deaths": 7,
                "district": "Monrovia",
                "hcw": 1,
                "probable": 3,
                "suspected": 3,
                "total_cases": 10
            },
            {
                "centroid": [
                    -8.76982674319,
                    6.81673414074
                ],
                "confirmed": 1,
                "country": "Liberia",
                "deaths": 0,
                "district": "Nimba",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            }
        ],
        "epiweek": "2014-W27",
        "probable": 6,
        "suspected": 5,
        "total": 102
    },
    {
        "confirmed": 132,
        "deaths": 62,
        "districts": [
            {
                "centroid": [
                    -11.750688035,
                    7.9935946161
                ],
                "confirmed": 1,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Bo",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -14.0545378494,
                    10.3704523359
                ],
                "confirmed": 0,
                "country": "Guinea",
                "deaths": 1,
                "district": "Boffa",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -11.0627538709,
                    10.7299012426
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 1,
                "district": "Dabola",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -13.2516184791,
                    8.46161143374
                ],
                "confirmed": 2,
                "country": "Sierra Leone",
                "deaths": 1,
                "district": "Freetown",
                "hcw": 0,
                "probable": 0,
                "suspected": 1,
                "total_cases": 3
            },
            {
                "centroid": [
                    -10.3101521433,
                    7.41827028131
                ],
                "confirmed": 1,
                "country": "Liberia",
                "deaths": 1,
                "district": "Gbarpolu",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -9.81486443353,
                    6.22457715742
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 0,
                "district": "Grand Bassa",
                "hcw": 0,
                "probable": 0,
                "suspected": 1,
                "total_cases": 1
            },
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 5,
                "country": "Guinea",
                "deaths": 5,
                "district": "Gueckedou",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 5
            },
            {
                "centroid": [
                    -10.7177144281,
                    8.09228705936
                ],
                "confirmed": 83,
                "country": "Sierra Leone",
                "deaths": 21,
                "district": "Kailahun",
                "hcw": 5,
                "probable": 1,
                "suspected": 0,
                "total_cases": 84
            },
            {
                "centroid": [
                    -11.2257628471,
                    7.94214556432
                ],
                "confirmed": 18,
                "country": "Sierra Leone",
                "deaths": 9,
                "district": "Kenema",
                "hcw": 1,
                "probable": 0,
                "suspected": 0,
                "total_cases": 18
            },
            {
                "centroid": [
                    -9.85031000872,
                    7.9952352352
                ],
                "confirmed": 6,
                "country": "Liberia",
                "deaths": 10,
                "district": "Lofa",
                "hcw": 3,
                "probable": 4,
                "suspected": 0,
                "total_cases": 10
            },
            {
                "centroid": [
                    -10.7215195765,
                    6.3137163044
                ],
                "confirmed": 11,
                "country": "Liberia",
                "deaths": 8,
                "district": "Monrovia",
                "hcw": 2,
                "probable": 4,
                "suspected": 3,
                "total_cases": 18
            },
            {
                "centroid": [
                    -8.76982674319,
                    6.81673414074
                ],
                "confirmed": 1,
                "country": "Liberia",
                "deaths": 1,
                "district": "Nimba",
                "hcw": 0,
                "probable": 0,
                "suspected": 3,
                "total_cases": 4
            },
            {
                "centroid": [
                    -12.7583542486,
                    8.73493804628
                ],
                "confirmed": 2,
                "country": "Sierra Leone",
                "deaths": 2,
                "district": "Port Loko",
                "hcw": 1,
                "probable": 0,
                "suspected": 1,
                "total_cases": 3
            },
            {
                "centroid": [
                    -11.5724206143,
                    7.32219946466
                ],
                "confirmed": 1,
                "country": "Sierra Leone",
                "deaths": 2,
                "district": "Pujehun",
                "hcw": 0,
                "probable": 0,
                "suspected": 1,
                "total_cases": 2
            }
        ],
        "epiweek": "2014-W28",
        "probable": 10,
        "suspected": 10,
        "total": 152
    },
    {
        "confirmed": 83,
        "deaths": 104,
        "districts": [
            {
                "centroid": [
                    -11.750688035,
                    7.9935946161
                ],
                "confirmed": 1,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Bo",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -10.8109821157,
                    6.73275035018
                ],
                "confirmed": 3,
                "country": "Liberia",
                "deaths": 3,
                "district": "Bomi",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 3
            },
            {
                "centroid": [
                    -9.64366019073,
                    6.94376505628
                ],
                "confirmed": 5,
                "country": "Liberia",
                "deaths": 7,
                "district": "Bong",
                "hcw": 7,
                "probable": 5,
                "suspected": 4,
                "total_cases": 14
            },
            {
                "centroid": [
                    -12.2848428855,
                    7.50414610209
                ],
                "confirmed": 1,
                "country": "Sierra Leone",
                "deaths": 1,
                "district": "Bonthe",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -13.2516184791,
                    8.46161143374
                ],
                "confirmed": 2,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Freetown",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 4,
                "country": "Guinea",
                "deaths": 7,
                "district": "Gueckedou",
                "hcw": 0,
                "probable": 3,
                "suspected": 0,
                "total_cases": 7
            },
            {
                "centroid": [
                    -10.7177144281,
                    8.09228705936
                ],
                "confirmed": 35,
                "country": "Sierra Leone",
                "deaths": 20,
                "district": "Kailahun",
                "hcw": 3,
                "probable": 3,
                "suspected": 0,
                "total_cases": 38
            },
            {
                "centroid": [
                    -11.2257628471,
                    7.94214556432
                ],
                "confirmed": 27,
                "country": "Sierra Leone",
                "deaths": 14,
                "district": "Kenema",
                "hcw": 7,
                "probable": 0,
                "suspected": 0,
                "total_cases": 27
            },
            {
                "centroid": [
                    -10.9664252552,
                    8.69471402857
                ],
                "confirmed": 1,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Kono",
                "hcw": 1,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -9.85031000872,
                    7.9952352352
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 32,
                "district": "Lofa",
                "hcw": 0,
                "probable": 17,
                "suspected": 17,
                "total_cases": 34
            },
            {
                "centroid": [
                    -9.33932375244,
                    8.45053527378
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 1,
                "district": "Macenta",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -10.7215195765,
                    6.3137163044
                ],
                "confirmed": 2,
                "country": "Liberia",
                "deaths": 18,
                "district": "Monrovia",
                "hcw": 2,
                "probable": 21,
                "suspected": 3,
                "total_cases": 26
            },
            {
                "centroid": [
                    -8.76982674319,
                    6.81673414074
                ],
                "confirmed": 1,
                "country": "Liberia",
                "deaths": 1,
                "district": "Nimba",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            }
        ],
        "epiweek": "2014-W29",
        "probable": 49,
        "suspected": 24,
        "total": 156
    },
    {
        "confirmed": 169,
        "deaths": 140,
        "districts": [
            {
                "centroid": [
                    -11.750688035,
                    7.9935946161
                ],
                "confirmed": 6,
                "country": "Sierra Leone",
                "deaths": 2,
                "district": "Bo",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 6
            },
            {
                "centroid": [
                    -12.1955446453,
                    9.32328913639
                ],
                "confirmed": 3,
                "country": "Sierra Leone",
                "deaths": 2,
                "district": "Bombali",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 3
            },
            {
                "centroid": [
                    -10.8109821157,
                    6.73275035018
                ],
                "confirmed": 2,
                "country": "Liberia",
                "deaths": 10,
                "district": "Bomi",
                "hcw": 1,
                "probable": 9,
                "suspected": 0,
                "total_cases": 11
            },
            {
                "centroid": [
                    -9.64366019073,
                    6.94376505628
                ],
                "confirmed": 2,
                "country": "Liberia",
                "deaths": 16,
                "district": "Bong",
                "hcw": 7,
                "probable": 9,
                "suspected": 14,
                "total_cases": 25
            },
            {
                "centroid": [
                    -13.5614691474,
                    9.62757357497
                ],
                "confirmed": 18,
                "country": "Guinea",
                "deaths": 5,
                "district": "Conakry",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 18
            },
            {
                "centroid": [
                    -13.0627260644,
                    9.41630127096
                ],
                "confirmed": 0,
                "country": "Guinea",
                "deaths": 2,
                "district": "Forecariah",
                "hcw": 0,
                "probable": 2,
                "suspected": 1,
                "total_cases": 3
            },
            {
                "centroid": [
                    -13.2516184791,
                    8.46161143374
                ],
                "confirmed": 2,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Freetown",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -9.81486443353,
                    6.22457715742
                ],
                "confirmed": 1,
                "country": "Liberia",
                "deaths": 1,
                "district": "Grand Bassa",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 8,
                "country": "Guinea",
                "deaths": 18,
                "district": "Gueckedou",
                "hcw": 0,
                "probable": 11,
                "suspected": 0,
                "total_cases": 19
            },
            {
                "centroid": [
                    -10.7177144281,
                    8.09228705936
                ],
                "confirmed": 24,
                "country": "Sierra Leone",
                "deaths": 14,
                "district": "Kailahun",
                "hcw": 10,
                "probable": 0,
                "suspected": 0,
                "total_cases": 24
            },
            {
                "centroid": [
                    -11.2257628471,
                    7.94214556432
                ],
                "confirmed": 43,
                "country": "Sierra Leone",
                "deaths": 9,
                "district": "Kenema",
                "hcw": 1,
                "probable": 0,
                "suspected": 0,
                "total_cases": 43
            },
            {
                "centroid": [
                    -10.1012791495,
                    10.5819899535
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 1,
                "district": "Kouroussa",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -9.85031000872,
                    7.9952352352
                ],
                "confirmed": 5,
                "country": "Liberia",
                "deaths": 28,
                "district": "Lofa",
                "hcw": 2,
                "probable": 25,
                "suspected": 1,
                "total_cases": 31
            },
            {
                "centroid": [
                    -9.33932375244,
                    8.45053527378
                ],
                "confirmed": 42,
                "country": "Guinea",
                "deaths": 1,
                "district": "Macenta",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 42
            },
            {
                "centroid": [
                    -10.2601725424,
                    6.52717365125
                ],
                "confirmed": 1,
                "country": "Liberia",
                "deaths": 6,
                "district": "Margibi",
                "hcw": 3,
                "probable": 0,
                "suspected": 5,
                "total_cases": 6
            },
            {
                "centroid": [
                    -10.7215195765,
                    6.3137163044
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 15,
                "district": "Monrovia",
                "hcw": 5,
                "probable": 16,
                "suspected": 6,
                "total_cases": 22
            },
            {
                "centroid": [
                    -12.4546600261,
                    8.08506816093
                ],
                "confirmed": 1,
                "country": "Sierra Leone",
                "deaths": 1,
                "district": "Moyamba",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -8.7967554244,
                    7.9546695681
                ],
                "confirmed": 3,
                "country": "Guinea",
                "deaths": 7,
                "district": "N'Zerekore",
                "hcw": 0,
                "probable": 4,
                "suspected": 0,
                "total_cases": 7
            },
            {
                "centroid": [
                    -8.76982674319,
                    6.81673414074
                ],
                "confirmed": 1,
                "country": "Liberia",
                "deaths": 1,
                "district": "Nimba",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -12.7583542486,
                    8.73493804628
                ],
                "confirmed": 2,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Port Loko",
                "hcw": 2,
                "probable": 0,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -9.4666501767,
                    11.6823785627
                ],
                "confirmed": 3,
                "country": "Guinea",
                "deaths": 1,
                "district": "Siguiri",
                "hcw": 1,
                "probable": 0,
                "suspected": 0,
                "total_cases": 3
            },
            {
                "centroid": [
                    -11.9021619466,
                    8.6944297019
                ],
                "confirmed": 1,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Tonkolili",
                "hcw": 1,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            }
        ],
        "epiweek": "2014-W30",
        "probable": 76,
        "suspected": 27,
        "total": 272
    },
    {
        "confirmed": 136,
        "deaths": 232,
        "districts": [
            {
                "centroid": [
                    -11.750688035,
                    7.9935946161
                ],
                "confirmed": 3,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Bo",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 3
            },
            {
                "centroid": [
                    -12.1955446453,
                    9.32328913639
                ],
                "confirmed": 0,
                "country": "Sierra Leone",
                "deaths": 1,
                "district": "Bombali",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -10.8109821157,
                    6.73275035018
                ],
                "confirmed": 1,
                "country": "Liberia",
                "deaths": 4,
                "district": "Bomi",
                "hcw": 2,
                "probable": 3,
                "suspected": 0,
                "total_cases": 4
            },
            {
                "centroid": [
                    -9.64366019073,
                    6.94376505628
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 15,
                "district": "Bong",
                "hcw": 1,
                "probable": 3,
                "suspected": 14,
                "total_cases": 17
            },
            {
                "centroid": [
                    -13.5614691474,
                    9.62757357497
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 0,
                "district": "Conakry",
                "hcw": 0,
                "probable": 0,
                "suspected": 2,
                "total_cases": 3
            },
            {
                "centroid": [
                    -13.2516184791,
                    8.46161143374
                ],
                "confirmed": 0,
                "country": "Sierra Leone",
                "deaths": 1,
                "district": "Freetown",
                "hcw": 1,
                "probable": 1,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -9.81486443353,
                    6.22457715742
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 1,
                "district": "Grand Bassa",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -11.0499721228,
                    7.08098748329
                ],
                "confirmed": 3,
                "country": "Liberia",
                "deaths": 4,
                "district": "Grand Cape Mount",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 4
            },
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 3,
                "country": "Guinea",
                "deaths": 16,
                "district": "Gueckedou",
                "hcw": 0,
                "probable": 13,
                "suspected": 1,
                "total_cases": 17
            },
            {
                "centroid": [
                    -10.7177144281,
                    8.09228705936
                ],
                "confirmed": 40,
                "country": "Sierra Leone",
                "deaths": 38,
                "district": "Kailahun",
                "hcw": 10,
                "probable": 0,
                "suspected": 0,
                "total_cases": 40
            },
            {
                "centroid": [
                    -11.2257628471,
                    7.94214556432
                ],
                "confirmed": 44,
                "country": "Sierra Leone",
                "deaths": 13,
                "district": "Kenema",
                "hcw": 3,
                "probable": 0,
                "suspected": 0,
                "total_cases": 44
            },
            {
                "centroid": [
                    -10.9664252552,
                    8.69471402857
                ],
                "confirmed": 0,
                "country": "Sierra Leone",
                "deaths": 2,
                "district": "Kono",
                "hcw": 0,
                "probable": 1,
                "suspected": 31,
                "total_cases": 32
            },
            {
                "centroid": [
                    3.39823109352,
                    6.4615001567
                ],
                "confirmed": 5,
                "country": "Nigeria",
                "deaths": 2,
                "district": "Lagos Island",
                "hcw": 4,
                "probable": 0,
                "suspected": 0,
                "total_cases": 5
            },
            {
                "centroid": [
                    -9.85031000872,
                    7.9952352352
                ],
                "confirmed": 20,
                "country": "Liberia",
                "deaths": 94,
                "district": "Lofa",
                "hcw": 3,
                "probable": 71,
                "suspected": 3,
                "total_cases": 94
            },
            {
                "centroid": [
                    -9.33932375244,
                    8.45053527378
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 1,
                "district": "Macenta",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -10.2601725424,
                    6.52717365125
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 2,
                "district": "Margibi",
                "hcw": 0,
                "probable": 1,
                "suspected": 1,
                "total_cases": 2
            },
            {
                "centroid": [
                    -10.7215195765,
                    6.3137163044
                ],
                "confirmed": 1,
                "country": "Liberia",
                "deaths": 27,
                "district": "Monrovia",
                "hcw": 4,
                "probable": 31,
                "suspected": 1,
                "total_cases": 33
            },
            {
                "centroid": [
                    -12.4546600261,
                    8.08506816093
                ],
                "confirmed": 1,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Moyamba",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -8.7967554244,
                    7.9546695681
                ],
                "confirmed": 4,
                "country": "Guinea",
                "deaths": 2,
                "district": "N'Zerekore",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 4
            },
            {
                "centroid": [
                    -8.76982674319,
                    6.81673414074
                ],
                "confirmed": 1,
                "country": "Liberia",
                "deaths": 5,
                "district": "Nimba",
                "hcw": 1,
                "probable": 4,
                "suspected": 2,
                "total_cases": 7
            },
            {
                "centroid": [
                    -12.6356583491,
                    10.8964798332
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 2,
                "district": "Pita",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -12.7583542486,
                    8.73493804628
                ],
                "confirmed": 2,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Port Loko",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -11.5724206143,
                    7.32219946466
                ],
                "confirmed": 2,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Pujehun",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -9.375629418,
                    5.86101950752
                ],
                "confirmed": 1,
                "country": "Liberia",
                "deaths": 1,
                "district": "Rivercess",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -9.4666501767,
                    11.6823785627
                ],
                "confirmed": 2,
                "country": "Guinea",
                "deaths": 1,
                "district": "Siguiri",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 2
            }
        ],
        "epiweek": "2014-W31",
        "probable": 132,
        "suspected": 55,
        "total": 323
    },
    {
        "confirmed": 113,
        "deaths": 89,
        "districts": [
            {
                "centroid": [
                    -11.750688035,
                    7.9935946161
                ],
                "confirmed": 7,
                "country": "Sierra Leone",
                "deaths": 1,
                "district": "Bo",
                "hcw": 2,
                "probable": 0,
                "suspected": 0,
                "total_cases": 7
            },
            {
                "centroid": [
                    -12.1955446453,
                    9.32328913639
                ],
                "confirmed": 1,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Bombali",
                "hcw": 1,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -10.8109821157,
                    6.73275035018
                ],
                "confirmed": 1,
                "country": "Liberia",
                "deaths": 9,
                "district": "Bomi",
                "hcw": 0,
                "probable": 10,
                "suspected": 0,
                "total_cases": 11
            },
            {
                "centroid": [
                    -13.5614691474,
                    9.62757357497
                ],
                "confirmed": 3,
                "country": "Guinea",
                "deaths": 1,
                "district": "Conakry",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 3
            },
            {
                "centroid": [
                    -13.2516184791,
                    8.46161143374
                ],
                "confirmed": 10,
                "country": "Sierra Leone",
                "deaths": 10,
                "district": "Freetown",
                "hcw": 3,
                "probable": 0,
                "suspected": 0,
                "total_cases": 10
            },
            {
                "centroid": [
                    -9.81486443353,
                    6.22457715742
                ],
                "confirmed": 1,
                "country": "Liberia",
                "deaths": 1,
                "district": "Grand Bassa",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 10,
                "country": "Guinea",
                "deaths": 10,
                "district": "Gueckedou",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 10
            },
            {
                "centroid": [
                    -10.7177144281,
                    8.09228705936
                ],
                "confirmed": 19,
                "country": "Sierra Leone",
                "deaths": 16,
                "district": "Kailahun",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 19
            },
            {
                "centroid": [
                    -11.2257628471,
                    7.94214556432
                ],
                "confirmed": 36,
                "country": "Sierra Leone",
                "deaths": 6,
                "district": "Kenema",
                "hcw": 1,
                "probable": 0,
                "suspected": 0,
                "total_cases": 36
            },
            {
                "centroid": [
                    3.39823109352,
                    6.4615001567
                ],
                "confirmed": 5,
                "country": "Nigeria",
                "deaths": 3,
                "district": "Lagos Island",
                "hcw": 4,
                "probable": 0,
                "suspected": 0,
                "total_cases": 5
            },
            {
                "centroid": [
                    -9.85031000872,
                    7.9952352352
                ],
                "confirmed": 5,
                "country": "Liberia",
                "deaths": 26,
                "district": "Lofa",
                "hcw": 0,
                "probable": 41,
                "suspected": 4,
                "total_cases": 50
            },
            {
                "centroid": [
                    -9.33932375244,
                    8.45053527378
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 1,
                "district": "Macenta",
                "hcw": 1,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -10.2601725424,
                    6.52717365125
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 1,
                "district": "Margibi",
                "hcw": 3,
                "probable": 2,
                "suspected": 3,
                "total_cases": 5
            },
            {
                "centroid": [
                    -10.7215195765,
                    6.3137163044
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 1,
                "district": "Monrovia",
                "hcw": 6,
                "probable": 9,
                "suspected": 0,
                "total_cases": 9
            },
            {
                "centroid": [
                    -12.4546600261,
                    8.08506816093
                ],
                "confirmed": 3,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Moyamba",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 3
            },
            {
                "centroid": [
                    -8.7967554244,
                    7.9546695681
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 1,
                "district": "N'Zerekore",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -12.7583542486,
                    8.73493804628
                ],
                "confirmed": 8,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Port Loko",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 8
            },
            {
                "centroid": [
                    -11.5724206143,
                    7.32219946466
                ],
                "confirmed": 1,
                "country": "Sierra Leone",
                "deaths": 1,
                "district": "Pujehun",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -9.10432690304,
                    7.53675677824
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 1,
                "district": "Yomou",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            }
        ],
        "epiweek": "2014-W32",
        "probable": 62,
        "suspected": 7,
        "total": 182
    },
    {
        "confirmed": 206,
        "deaths": 299,
        "districts": [
            {
                "centroid": [
                    -11.750688035,
                    7.9935946161
                ],
                "confirmed": 3,
                "country": "Sierra Leone",
                "deaths": 4,
                "district": "Bo",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 4
            },
            {
                "centroid": [
                    -12.1955446453,
                    9.32328913639
                ],
                "confirmed": 2,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Bombali",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -10.8109821157,
                    6.73275035018
                ],
                "confirmed": 2,
                "country": "Liberia",
                "deaths": 2,
                "district": "Bomi",
                "hcw": 2,
                "probable": 0,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -9.64366019073,
                    6.94376505628
                ],
                "confirmed": 11,
                "country": "Liberia",
                "deaths": 25,
                "district": "Bong",
                "hcw": 8,
                "probable": 8,
                "suspected": 13,
                "total_cases": 32
            },
            {
                "centroid": [
                    -13.5614691474,
                    9.62757357497
                ],
                "confirmed": 3,
                "country": "Guinea",
                "deaths": 3,
                "district": "Conakry",
                "hcw": 2,
                "probable": 0,
                "suspected": 0,
                "total_cases": 3
            },
            {
                "centroid": [
                    -13.4939931579,
                    10.1206853671
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 1,
                "district": "Dubreka",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -13.2516184791,
                    8.46161143374
                ],
                "confirmed": 4,
                "country": "Sierra Leone",
                "deaths": 4,
                "district": "Freetown",
                "hcw": 4,
                "probable": 0,
                "suspected": 0,
                "total_cases": 4
            },
            {
                "centroid": [
                    -9.81486443353,
                    6.22457715742
                ],
                "confirmed": 4,
                "country": "Liberia",
                "deaths": 9,
                "district": "Grand Bassa",
                "hcw": 1,
                "probable": 1,
                "suspected": 4,
                "total_cases": 9
            },
            {
                "centroid": [
                    -11.0499721228,
                    7.08098748329
                ],
                "confirmed": 1,
                "country": "Liberia",
                "deaths": 2,
                "district": "Grand Cape Mount",
                "hcw": 1,
                "probable": 2,
                "suspected": 0,
                "total_cases": 3
            },
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 4,
                "country": "Guinea",
                "deaths": 9,
                "district": "Gueckedou",
                "hcw": 0,
                "probable": 5,
                "suspected": 0,
                "total_cases": 9
            },
            {
                "centroid": [
                    -10.7177144281,
                    8.09228705936
                ],
                "confirmed": 20,
                "country": "Sierra Leone",
                "deaths": 4,
                "district": "Kailahun",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 20
            },
            {
                "centroid": [
                    -11.2257628471,
                    7.94214556432
                ],
                "confirmed": 41,
                "country": "Sierra Leone",
                "deaths": 27,
                "district": "Kenema",
                "hcw": 13,
                "probable": 0,
                "suspected": 0,
                "total_cases": 41
            },
            {
                "centroid": [
                    3.39823109352,
                    6.4615001567
                ],
                "confirmed": 2,
                "country": "Nigeria",
                "deaths": 0,
                "district": "Lagos Island",
                "hcw": 1,
                "probable": 0,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -9.85031000872,
                    7.9952352352
                ],
                "confirmed": 42,
                "country": "Liberia",
                "deaths": 56,
                "district": "Lofa",
                "hcw": 1,
                "probable": 58,
                "suspected": 1,
                "total_cases": 101
            },
            {
                "centroid": [
                    -9.33932375244,
                    8.45053527378
                ],
                "confirmed": 12,
                "country": "Guinea",
                "deaths": 10,
                "district": "Macenta",
                "hcw": 5,
                "probable": 0,
                "suspected": 0,
                "total_cases": 12
            },
            {
                "centroid": [
                    -10.2601725424,
                    6.52717365125
                ],
                "confirmed": 24,
                "country": "Liberia",
                "deaths": 55,
                "district": "Margibi",
                "hcw": 19,
                "probable": 22,
                "suspected": 11,
                "total_cases": 57
            },
            {
                "centroid": [
                    -10.7215195765,
                    6.3137163044
                ],
                "confirmed": 8,
                "country": "Liberia",
                "deaths": 50,
                "district": "Monrovia",
                "hcw": 10,
                "probable": 42,
                "suspected": 0,
                "total_cases": 50
            },
            {
                "centroid": [
                    -12.4546600261,
                    8.08506816093
                ],
                "confirmed": 1,
                "country": "Sierra Leone",
                "deaths": 1,
                "district": "Moyamba",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -8.7967554244,
                    7.9546695681
                ],
                "confirmed": 3,
                "country": "Guinea",
                "deaths": 3,
                "district": "N'Zerekore",
                "hcw": 1,
                "probable": 0,
                "suspected": 0,
                "total_cases": 3
            },
            {
                "centroid": [
                    -8.76982674319,
                    6.81673414074
                ],
                "confirmed": 1,
                "country": "Liberia",
                "deaths": 22,
                "district": "Nimba",
                "hcw": 4,
                "probable": 16,
                "suspected": 6,
                "total_cases": 23
            },
            {
                "centroid": [
                    -12.6356583491,
                    10.8964798332
                ],
                "confirmed": 3,
                "country": "Guinea",
                "deaths": 1,
                "district": "Pita",
                "hcw": 1,
                "probable": 0,
                "suspected": 0,
                "total_cases": 3
            },
            {
                "centroid": [
                    -12.7583542486,
                    8.73493804628
                ],
                "confirmed": 8,
                "country": "Sierra Leone",
                "deaths": 6,
                "district": "Port Loko",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 8
            },
            {
                "centroid": [
                    -9.4666501767,
                    11.6823785627
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 1,
                "district": "Siguiri",
                "hcw": 1,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -11.9021619466,
                    8.6944297019
                ],
                "confirmed": 1,
                "country": "Sierra Leone",
                "deaths": 1,
                "district": "Tonkolili",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -9.10432690304,
                    7.53675677824
                ],
                "confirmed": 4,
                "country": "Guinea",
                "deaths": 3,
                "district": "Yomou",
                "hcw": 1,
                "probable": 0,
                "suspected": 0,
                "total_cases": 4
            }
        ],
        "epiweek": "2014-W33",
        "probable": 155,
        "suspected": 35,
        "total": 396
    },
    {
        "confirmed": 342,
        "deaths": 586,
        "districts": [
            {
                "centroid": [
                    -11.750688035,
                    7.9935946161
                ],
                "confirmed": 12,
                "country": "Sierra Leone",
                "deaths": 12,
                "district": "Bo",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 12
            },
            {
                "centroid": [
                    -14.0545378494,
                    10.3704523359
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 1,
                "district": "Boffa",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -12.1955446453,
                    9.32328913639
                ],
                "confirmed": 10,
                "country": "Sierra Leone",
                "deaths": 10,
                "district": "Bombali",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 10
            },
            {
                "centroid": [
                    -10.8109821157,
                    6.73275035018
                ],
                "confirmed": 12,
                "country": "Liberia",
                "deaths": 12,
                "district": "Bomi",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 12
            },
            {
                "centroid": [
                    -9.64366019073,
                    6.94376505628
                ],
                "confirmed": 2,
                "country": "Liberia",
                "deaths": 22,
                "district": "Bong",
                "hcw": 1,
                "probable": 5,
                "suspected": 18,
                "total_cases": 25
            },
            {
                "centroid": [
                    -13.5614691474,
                    9.62757357497
                ],
                "confirmed": 15,
                "country": "Guinea",
                "deaths": 9,
                "district": "Conakry",
                "hcw": 10,
                "probable": 0,
                "suspected": 0,
                "total_cases": 15
            },
            {
                "centroid": [
                    -13.4939931579,
                    10.1206853671
                ],
                "confirmed": 7,
                "country": "Guinea",
                "deaths": 3,
                "district": "Dubreka",
                "hcw": 3,
                "probable": 0,
                "suspected": 0,
                "total_cases": 7
            },
            {
                "centroid": [
                    -13.2516184791,
                    8.46161143374
                ],
                "confirmed": 20,
                "country": "Sierra Leone",
                "deaths": 20,
                "district": "Freetown",
                "hcw": 5,
                "probable": 0,
                "suspected": 0,
                "total_cases": 20
            },
            {
                "centroid": [
                    -8.21471032562,
                    5.93345828909
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 2,
                "district": "Grand Gedeh",
                "hcw": 0,
                "probable": 0,
                "suspected": 2,
                "total_cases": 2
            },
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 7,
                "country": "Guinea",
                "deaths": 7,
                "district": "Gueckedou",
                "hcw": 1,
                "probable": 0,
                "suspected": 0,
                "total_cases": 7
            },
            {
                "centroid": [
                    -10.7177144281,
                    8.09228705936
                ],
                "confirmed": 40,
                "country": "Sierra Leone",
                "deaths": 39,
                "district": "Kailahun",
                "hcw": 0,
                "probable": 2,
                "suspected": 14,
                "total_cases": 56
            },
            {
                "centroid": [
                    -11.2257628471,
                    7.94214556432
                ],
                "confirmed": 39,
                "country": "Sierra Leone",
                "deaths": 43,
                "district": "Kenema",
                "hcw": 15,
                "probable": 0,
                "suspected": 4,
                "total_cases": 43
            },
            {
                "centroid": [
                    -10.0272901436,
                    9.24280287002
                ],
                "confirmed": 0,
                "country": "Guinea",
                "deaths": 1,
                "district": "Kissidougo",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    3.39823109352,
                    6.4615001567
                ],
                "confirmed": 2,
                "country": "Nigeria",
                "deaths": 1,
                "district": "Lagos Island",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 3
            },
            {
                "centroid": [
                    -9.85031000872,
                    7.9952352352
                ],
                "confirmed": 55,
                "country": "Liberia",
                "deaths": 104,
                "district": "Lofa",
                "hcw": 2,
                "probable": 50,
                "suspected": 0,
                "total_cases": 105
            },
            {
                "centroid": [
                    -9.33932375244,
                    8.45053527378
                ],
                "confirmed": 54,
                "country": "Guinea",
                "deaths": 54,
                "district": "Macenta",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 54
            },
            {
                "centroid": [
                    -10.2601725424,
                    6.52717365125
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 80,
                "district": "Margibi",
                "hcw": 8,
                "probable": 24,
                "suspected": 65,
                "total_cases": 89
            },
            {
                "centroid": [
                    -10.7215195765,
                    6.3137163044
                ],
                "confirmed": 1,
                "country": "Liberia",
                "deaths": 73,
                "district": "Monrovia",
                "hcw": 26,
                "probable": 86,
                "suspected": 19,
                "total_cases": 106
            },
            {
                "centroid": [
                    -12.4546600261,
                    8.08506816093
                ],
                "confirmed": 3,
                "country": "Sierra Leone",
                "deaths": 3,
                "district": "Moyamba",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 3
            },
            {
                "centroid": [
                    -8.7967554244,
                    7.9546695681
                ],
                "confirmed": 2,
                "country": "Guinea",
                "deaths": 3,
                "district": "N'Zerekore",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 3
            },
            {
                "centroid": [
                    -8.76982674319,
                    6.81673414074
                ],
                "confirmed": 19,
                "country": "Liberia",
                "deaths": 45,
                "district": "Nimba",
                "hcw": 1,
                "probable": 24,
                "suspected": 3,
                "total_cases": 46
            },
            {
                "centroid": [
                    -12.6356583491,
                    10.8964798332
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 0,
                "district": "Pita",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -12.7583542486,
                    8.73493804628
                ],
                "confirmed": 25,
                "country": "Sierra Leone",
                "deaths": 27,
                "district": "Port Loko",
                "hcw": 0,
                "probable": 1,
                "suspected": 1,
                "total_cases": 27
            },
            {
                "centroid": [
                    -11.5724206143,
                    7.32219946466
                ],
                "confirmed": 2,
                "country": "Sierra Leone",
                "deaths": 2,
                "district": "Pujehun",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -7.80101899924,
                    5.27754359722
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 1,
                "district": "River Gee",
                "hcw": 1,
                "probable": 0,
                "suspected": 1,
                "total_cases": 1
            },
            {
                "centroid": [
                    -8.75941753954,
                    5.34595419259
                ],
                "confirmed": 1,
                "country": "Liberia",
                "deaths": 2,
                "district": "Sinoe",
                "hcw": 0,
                "probable": 0,
                "suspected": 1,
                "total_cases": 2
            },
            {
                "centroid": [
                    -11.9021619466,
                    8.6944297019
                ],
                "confirmed": 9,
                "country": "Sierra Leone",
                "deaths": 9,
                "district": "Tonkolili",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 9
            },
            {
                "centroid": [
                    -9.10432690304,
                    7.53675677824
                ],
                "confirmed": 3,
                "country": "Guinea",
                "deaths": 1,
                "district": "Yomou",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 3
            }
        ],
        "epiweek": "2014-W34",
        "probable": 195,
        "suspected": 128,
        "total": 665
    },
    {
        "confirmed": 330,
        "deaths": 370,
        "districts": [
            {
                "centroid": [
                    -11.750688035,
                    7.9935946161
                ],
                "confirmed": 15,
                "country": "Sierra Leone",
                "deaths": 15,
                "district": "Bo",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 15
            },
            {
                "centroid": [
                    -14.0545378494,
                    10.3704523359
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 0,
                "district": "Boffa",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -12.1955446453,
                    9.32328913639
                ],
                "confirmed": 27,
                "country": "Sierra Leone",
                "deaths": 27,
                "district": "Bombali",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 27
            },
            {
                "centroid": [
                    -10.8109821157,
                    6.73275035018
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 5,
                "district": "Bomi",
                "hcw": 1,
                "probable": 6,
                "suspected": 0,
                "total_cases": 6
            },
            {
                "centroid": [
                    -9.64366019073,
                    6.94376505628
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 12,
                "district": "Bong",
                "hcw": 0,
                "probable": 6,
                "suspected": 12,
                "total_cases": 18
            },
            {
                "centroid": [
                    -13.5614691474,
                    9.62757357497
                ],
                "confirmed": 12,
                "country": "Guinea",
                "deaths": 5,
                "district": "Conakry",
                "hcw": 7,
                "probable": 0,
                "suspected": 0,
                "total_cases": 12
            },
            {
                "centroid": [
                    17.4467,
                    14.6928
                ],
                "confirmed": 1,
                "country": "Senegal",
                "deaths": 0,
                "district": "Dakar",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -13.4939931579,
                    10.1206853671
                ],
                "confirmed": 11,
                "country": "Guinea",
                "deaths": 3,
                "district": "Dubreka",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 11
            },
            {
                "centroid": [
                    -13.0627260644,
                    9.41630127096
                ],
                "confirmed": 6,
                "country": "Guinea",
                "deaths": 6,
                "district": "Forecariah",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 6
            },
            {
                "centroid": [
                    -13.2516184791,
                    8.46161143374
                ],
                "confirmed": 38,
                "country": "Sierra Leone",
                "deaths": 39,
                "district": "Freetown",
                "hcw": 1,
                "probable": 0,
                "suspected": 1,
                "total_cases": 39
            },
            {
                "centroid": [
                    -10.3101521433,
                    7.41827028131
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 0,
                "district": "Gbarpolu",
                "hcw": 0,
                "probable": 0,
                "suspected": 1,
                "total_cases": 1
            },
            {
                "centroid": [
                    -9.81486443353,
                    6.22457715742
                ],
                "confirmed": 5,
                "country": "Liberia",
                "deaths": 14,
                "district": "Grand Bassa",
                "hcw": 2,
                "probable": 8,
                "suspected": 11,
                "total_cases": 24
            },
            {
                "centroid": [
                    -11.0499721228,
                    7.08098748329
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 1,
                "district": "Grand Cape Mount",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -8.21471032562,
                    5.93345828909
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 0,
                "district": "Grand Gedeh",
                "hcw": 0,
                "probable": 0,
                "suspected": 1,
                "total_cases": 1
            },
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 9,
                "country": "Guinea",
                "deaths": 15,
                "district": "Gueckedou",
                "hcw": 0,
                "probable": 8,
                "suspected": 0,
                "total_cases": 17
            },
            {
                "centroid": [
                    -10.7177144281,
                    8.09228705936
                ],
                "confirmed": 30,
                "country": "Sierra Leone",
                "deaths": 5,
                "district": "Kailahun",
                "hcw": 0,
                "probable": 0,
                "suspected": 1,
                "total_cases": 31
            },
            {
                "centroid": [
                    -11.2257628471,
                    7.94214556432
                ],
                "confirmed": 36,
                "country": "Sierra Leone",
                "deaths": 36,
                "district": "Kenema",
                "hcw": 0,
                "probable": 0,
                "suspected": 5,
                "total_cases": 41
            },
            {
                "centroid": [
                    -9.10499016737,
                    9.26366627328
                ],
                "confirmed": 9,
                "country": "Guinea",
                "deaths": 9,
                "district": "Kerouane",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 9
            },
            {
                "centroid": [
                    -10.9664252552,
                    8.69471402857
                ],
                "confirmed": 3,
                "country": "Sierra Leone",
                "deaths": 4,
                "district": "Kono",
                "hcw": 0,
                "probable": 0,
                "suspected": 1,
                "total_cases": 4
            },
            {
                "centroid": [
                    -9.85031000872,
                    7.9952352352
                ],
                "confirmed": 41,
                "country": "Liberia",
                "deaths": 27,
                "district": "Lofa",
                "hcw": 2,
                "probable": 47,
                "suspected": 0,
                "total_cases": 88
            },
            {
                "centroid": [
                    -9.33932375244,
                    8.45053527378
                ],
                "confirmed": 43,
                "country": "Guinea",
                "deaths": 43,
                "district": "Macenta",
                "hcw": 1,
                "probable": 0,
                "suspected": 0,
                "total_cases": 43
            },
            {
                "centroid": [
                    -10.2601725424,
                    6.52717365125
                ],
                "confirmed": 3,
                "country": "Liberia",
                "deaths": 26,
                "district": "Margibi",
                "hcw": 5,
                "probable": 28,
                "suspected": 1,
                "total_cases": 32
            },
            {
                "centroid": [
                    -10.7215195765,
                    6.3137163044
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 29,
                "district": "Monrovia",
                "hcw": 10,
                "probable": 55,
                "suspected": 0,
                "total_cases": 55
            },
            {
                "centroid": [
                    -8.76982674319,
                    6.81673414074
                ],
                "confirmed": 15,
                "country": "Liberia",
                "deaths": 20,
                "district": "Nimba",
                "hcw": 2,
                "probable": 4,
                "suspected": 2,
                "total_cases": 21
            },
            {
                "centroid": [
                    -12.6356583491,
                    10.8964798332
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 0,
                "district": "Pita",
                "hcw": 0,
                "probable": 0,
                "suspected": 1,
                "total_cases": 2
            },
            {
                "centroid": [
                    -12.7583542486,
                    8.73493804628
                ],
                "confirmed": 15,
                "country": "Sierra Leone",
                "deaths": 16,
                "district": "Port Loko",
                "hcw": 0,
                "probable": 0,
                "suspected": 1,
                "total_cases": 16
            },
            {
                "centroid": [
                    7.0216484586,
                    4.7776303994
                ],
                "confirmed": 2,
                "country": "Nigeria",
                "deaths": 2,
                "district": "Port-Harcourt",
                "hcw": 1,
                "probable": 0,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -11.5724206143,
                    7.32219946466
                ],
                "confirmed": 2,
                "country": "Sierra Leone",
                "deaths": 2,
                "district": "Pujehun",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -7.80101899924,
                    5.27754359722
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 4,
                "district": "River Gee",
                "hcw": 0,
                "probable": 0,
                "suspected": 4,
                "total_cases": 4
            },
            {
                "centroid": [
                    -11.9021619466,
                    8.6944297019
                ],
                "confirmed": 4,
                "country": "Sierra Leone",
                "deaths": 5,
                "district": "Tonkolili",
                "hcw": 0,
                "probable": 0,
                "suspected": 1,
                "total_cases": 5
            },
            {
                "centroid": [
                    -9.10432690304,
                    7.53675677824
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 0,
                "district": "Yomou",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            }
        ],
        "epiweek": "2014-W35",
        "probable": 163,
        "suspected": 43,
        "total": 536
    },
    {
        "confirmed": 508,
        "deaths": 541,
        "districts": [
            {
                "centroid": [
                    -11.750688035,
                    7.9935946161
                ],
                "confirmed": 15,
                "country": "Sierra Leone",
                "deaths": 17,
                "district": "Bo",
                "hcw": 0,
                "probable": 0,
                "suspected": 5,
                "total_cases": 20
            },
            {
                "centroid": [
                    -12.1955446453,
                    9.32328913639
                ],
                "confirmed": 23,
                "country": "Sierra Leone",
                "deaths": 23,
                "district": "Bombali",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 23
            },
            {
                "centroid": [
                    -10.8109821157,
                    6.73275035018
                ],
                "confirmed": 12,
                "country": "Liberia",
                "deaths": 10,
                "district": "Bomi",
                "hcw": 0,
                "probable": 1,
                "suspected": 1,
                "total_cases": 14
            },
            {
                "centroid": [
                    -9.64366019073,
                    6.94376505628
                ],
                "confirmed": 16,
                "country": "Liberia",
                "deaths": 17,
                "district": "Bong",
                "hcw": 0,
                "probable": 5,
                "suspected": 8,
                "total_cases": 29
            },
            {
                "centroid": [
                    -13.5614691474,
                    9.62757357497
                ],
                "confirmed": 3,
                "country": "Guinea",
                "deaths": 3,
                "district": "Conakry",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 3
            },
            {
                "centroid": [
                    -13.3159837156,
                    9.73536465349
                ],
                "confirmed": 5,
                "country": "Guinea",
                "deaths": 4,
                "district": "Coyah",
                "hcw": 2,
                "probable": 0,
                "suspected": 0,
                "total_cases": 5
            },
            {
                "centroid": [
                    -13.4939931579,
                    10.1206853671
                ],
                "confirmed": 2,
                "country": "Guinea",
                "deaths": 0,
                "district": "Dubreka",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -13.2516184791,
                    8.46161143374
                ],
                "confirmed": 4,
                "country": "Sierra Leone",
                "deaths": 2,
                "district": "Freetown",
                "hcw": 3,
                "probable": 0,
                "suspected": 0,
                "total_cases": 4
            },
            {
                "centroid": [
                    -9.81486443353,
                    6.22457715742
                ],
                "confirmed": 2,
                "country": "Liberia",
                "deaths": 4,
                "district": "Grand Bassa",
                "hcw": 0,
                "probable": 1,
                "suspected": 3,
                "total_cases": 6
            },
            {
                "centroid": [
                    -11.0499721228,
                    7.08098748329
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 2,
                "district": "Grand Cape Mount",
                "hcw": 1,
                "probable": 1,
                "suspected": 2,
                "total_cases": 3
            },
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 14,
                "country": "Guinea",
                "deaths": 8,
                "district": "Gueckedou",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 14
            },
            {
                "centroid": [
                    -10.7177144281,
                    8.09228705936
                ],
                "confirmed": 35,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Kailahun",
                "hcw": 0,
                "probable": 0,
                "suspected": 1,
                "total_cases": 36
            },
            {
                "centroid": [
                    -11.2257628471,
                    7.94214556432
                ],
                "confirmed": 28,
                "country": "Sierra Leone",
                "deaths": 28,
                "district": "Kenema",
                "hcw": 0,
                "probable": 0,
                "suspected": 9,
                "total_cases": 37
            },
            {
                "centroid": [
                    -9.10499016737,
                    9.26366627328
                ],
                "confirmed": 2,
                "country": "Guinea",
                "deaths": 1,
                "district": "Kerouane",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -10.9664252552,
                    8.69471402857
                ],
                "confirmed": 8,
                "country": "Sierra Leone",
                "deaths": 8,
                "district": "Kono",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 8
            },
            {
                "centroid": [
                    3.39823109352,
                    6.4615001567
                ],
                "confirmed": 1,
                "country": "Nigeria",
                "deaths": 0,
                "district": "Lagos Island",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -9.85031000872,
                    7.9952352352
                ],
                "confirmed": 34,
                "country": "Liberia",
                "deaths": 1,
                "district": "Lofa",
                "hcw": 0,
                "probable": 34,
                "suspected": 0,
                "total_cases": 68
            },
            {
                "centroid": [
                    -9.33932375244,
                    8.45053527378
                ],
                "confirmed": 69,
                "country": "Guinea",
                "deaths": 72,
                "district": "Macenta",
                "hcw": 0,
                "probable": 3,
                "suspected": 0,
                "total_cases": 72
            },
            {
                "centroid": [
                    -10.2601725424,
                    6.52717365125
                ],
                "confirmed": 3,
                "country": "Liberia",
                "deaths": 53,
                "district": "Margibi",
                "hcw": 3,
                "probable": 51,
                "suspected": 4,
                "total_cases": 58
            },
            {
                "centroid": [
                    -10.7215195765,
                    6.3137163044
                ],
                "confirmed": 181,
                "country": "Liberia",
                "deaths": 255,
                "district": "Monrovia",
                "hcw": 4,
                "probable": 51,
                "suspected": 41,
                "total_cases": 273
            },
            {
                "centroid": [
                    -12.4546600261,
                    8.08506816093
                ],
                "confirmed": 6,
                "country": "Sierra Leone",
                "deaths": 3,
                "district": "Moyamba",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 6
            },
            {
                "centroid": [
                    -8.7967554244,
                    7.9546695681
                ],
                "confirmed": 3,
                "country": "Guinea",
                "deaths": 2,
                "district": "N'Zerekore",
                "hcw": 1,
                "probable": 0,
                "suspected": 0,
                "total_cases": 3
            },
            {
                "centroid": [
                    -8.76982674319,
                    6.81673414074
                ],
                "confirmed": 7,
                "country": "Liberia",
                "deaths": 19,
                "district": "Nimba",
                "hcw": 0,
                "probable": 10,
                "suspected": 6,
                "total_cases": 23
            },
            {
                "centroid": [
                    -12.7583542486,
                    8.73493804628
                ],
                "confirmed": 25,
                "country": "Sierra Leone",
                "deaths": 1,
                "district": "Port Loko",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 25
            },
            {
                "centroid": [
                    7.0216484586,
                    4.7776303994
                ],
                "confirmed": 2,
                "country": "Nigeria",
                "deaths": 0,
                "district": "Port-Harcourt",
                "hcw": 1,
                "probable": 0,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -11.5724206143,
                    7.32219946466
                ],
                "confirmed": 2,
                "country": "Sierra Leone",
                "deaths": 2,
                "district": "Pujehun",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -7.80101899924,
                    5.27754359722
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 1,
                "district": "River Gee",
                "hcw": 0,
                "probable": 3,
                "suspected": 1,
                "total_cases": 4
            },
            {
                "centroid": [
                    -11.9021619466,
                    8.6944297019
                ],
                "confirmed": 5,
                "country": "Sierra Leone",
                "deaths": 5,
                "district": "Tonkolili",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 5
            },
            {
                "centroid": [
                    -9.10432690304,
                    7.53675677824
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 0,
                "district": "Yomou",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            }
        ],
        "epiweek": "2014-W36",
        "probable": 160,
        "suspected": 81,
        "total": 749
    },
    {
        "confirmed": 424,
        "deaths": 487,
        "districts": [
            {
                "centroid": [
                    -11.750688035,
                    7.9935946161
                ],
                "confirmed": 7,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Bo",
                "hcw": 0,
                "probable": 0,
                "suspected": 4,
                "total_cases": 11
            },
            {
                "centroid": [
                    -12.1955446453,
                    9.32328913639
                ],
                "confirmed": 46,
                "country": "Sierra Leone",
                "deaths": 47,
                "district": "Bombali",
                "hcw": 0,
                "probable": 0,
                "suspected": 1,
                "total_cases": 47
            },
            {
                "centroid": [
                    -10.8109821157,
                    6.73275035018
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 9,
                "district": "Bomi",
                "hcw": 0,
                "probable": 9,
                "suspected": 6,
                "total_cases": 15
            },
            {
                "centroid": [
                    -9.64366019073,
                    6.94376505628
                ],
                "confirmed": 14,
                "country": "Liberia",
                "deaths": 24,
                "district": "Bong",
                "hcw": 0,
                "probable": 7,
                "suspected": 23,
                "total_cases": 44
            },
            {
                "centroid": [
                    -13.5614691474,
                    9.62757357497
                ],
                "confirmed": 11,
                "country": "Guinea",
                "deaths": 11,
                "district": "Conakry",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 11
            },
            {
                "centroid": [
                    -13.3159837156,
                    9.73536465349
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 1,
                "district": "Coyah",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -12.1402794081,
                    10.9131793497
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 1,
                "district": "Dalaba",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -13.0627260644,
                    9.41630127096
                ],
                "confirmed": 2,
                "country": "Guinea",
                "deaths": 1,
                "district": "Forecariah",
                "hcw": 0,
                "probable": 0,
                "suspected": 1,
                "total_cases": 3
            },
            {
                "centroid": [
                    -13.2516184791,
                    8.46161143374
                ],
                "confirmed": 31,
                "country": "Sierra Leone",
                "deaths": 11,
                "district": "Freetown",
                "hcw": 2,
                "probable": 0,
                "suspected": 0,
                "total_cases": 31
            },
            {
                "centroid": [
                    -9.81486443353,
                    6.22457715742
                ],
                "confirmed": 5,
                "country": "Liberia",
                "deaths": 4,
                "district": "Grand Bassa",
                "hcw": 0,
                "probable": 5,
                "suspected": 0,
                "total_cases": 10
            },
            {
                "centroid": [
                    -11.0499721228,
                    7.08098748329
                ],
                "confirmed": 2,
                "country": "Liberia",
                "deaths": 4,
                "district": "Grand Cape Mount",
                "hcw": 0,
                "probable": 0,
                "suspected": 2,
                "total_cases": 4
            },
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 4,
                "country": "Guinea",
                "deaths": 0,
                "district": "Gueckedou",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 4
            },
            {
                "centroid": [
                    -10.7177144281,
                    8.09228705936
                ],
                "confirmed": 26,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Kailahun",
                "hcw": 0,
                "probable": 0,
                "suspected": 2,
                "total_cases": 28
            },
            {
                "centroid": [
                    -12.8268555724,
                    9.17121326335
                ],
                "confirmed": 2,
                "country": "Sierra Leone",
                "deaths": 2,
                "district": "Kambia",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -11.2257628471,
                    7.94214556432
                ],
                "confirmed": 24,
                "country": "Sierra Leone",
                "deaths": 18,
                "district": "Kenema",
                "hcw": 1,
                "probable": 0,
                "suspected": 5,
                "total_cases": 29
            },
            {
                "centroid": [
                    -9.10499016737,
                    9.26366627328
                ],
                "confirmed": 8,
                "country": "Guinea",
                "deaths": 1,
                "district": "Kerouane",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 8
            },
            {
                "centroid": [
                    -10.0272901436,
                    9.24280287002
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 1,
                "district": "Kissidougo",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -10.9664252552,
                    8.69471402857
                ],
                "confirmed": 3,
                "country": "Sierra Leone",
                "deaths": 3,
                "district": "Kono",
                "hcw": 0,
                "probable": 0,
                "suspected": 5,
                "total_cases": 8
            },
            {
                "centroid": [
                    -9.85031000872,
                    7.9952352352
                ],
                "confirmed": 10,
                "country": "Liberia",
                "deaths": 0,
                "district": "Lofa",
                "hcw": 0,
                "probable": 28,
                "suspected": 0,
                "total_cases": 38
            },
            {
                "centroid": [
                    -9.33932375244,
                    8.45053527378
                ],
                "confirmed": 37,
                "country": "Guinea",
                "deaths": 37,
                "district": "Macenta",
                "hcw": 0,
                "probable": 0,
                "suspected": 1,
                "total_cases": 38
            },
            {
                "centroid": [
                    -10.2601725424,
                    6.52717365125
                ],
                "confirmed": 1,
                "country": "Liberia",
                "deaths": 24,
                "district": "Margibi",
                "hcw": 0,
                "probable": 91,
                "suspected": 14,
                "total_cases": 106
            },
            {
                "centroid": [
                    -7.77007155359,
                    4.72127936981
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 6,
                "district": "Maryland",
                "hcw": 0,
                "probable": 4,
                "suspected": 2,
                "total_cases": 6
            },
            {
                "centroid": [
                    -10.7215195765,
                    6.3137163044
                ],
                "confirmed": 126,
                "country": "Liberia",
                "deaths": 241,
                "district": "Monrovia",
                "hcw": 0,
                "probable": 97,
                "suspected": 114,
                "total_cases": 337
            },
            {
                "centroid": [
                    -12.4546600261,
                    8.08506816093
                ],
                "confirmed": 2,
                "country": "Sierra Leone",
                "deaths": 2,
                "district": "Moyamba",
                "hcw": 0,
                "probable": 0,
                "suspected": 2,
                "total_cases": 4
            },
            {
                "centroid": [
                    -8.7967554244,
                    7.9546695681
                ],
                "confirmed": 4,
                "country": "Guinea",
                "deaths": 14,
                "district": "N'Zerekore",
                "hcw": 0,
                "probable": 10,
                "suspected": 0,
                "total_cases": 14
            },
            {
                "centroid": [
                    -8.76982674319,
                    6.81673414074
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 14,
                "district": "Nimba",
                "hcw": 0,
                "probable": 17,
                "suspected": 3,
                "total_cases": 20
            },
            {
                "centroid": [
                    -12.7583542486,
                    8.73493804628
                ],
                "confirmed": 45,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Port Loko",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 45
            },
            {
                "centroid": [
                    -8.75941753954,
                    5.34595419259
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 0,
                "district": "Sinoe",
                "hcw": 0,
                "probable": 0,
                "suspected": 1,
                "total_cases": 1
            },
            {
                "centroid": [
                    -11.9021619466,
                    8.6944297019
                ],
                "confirmed": 11,
                "country": "Sierra Leone",
                "deaths": 11,
                "district": "Tonkolili",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 11
            }
        ],
        "epiweek": "2014-W37",
        "probable": 268,
        "suspected": 186,
        "total": 878
    },
    {
        "confirmed": 443,
        "deaths": 202,
        "districts": [
            {
                "centroid": [
                    -11.750688035,
                    7.9935946161
                ],
                "confirmed": 7,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Bo",
                "hcw": 0,
                "probable": 0,
                "suspected": 8,
                "total_cases": 15
            },
            {
                "centroid": [
                    -12.1955446453,
                    9.32328913639
                ],
                "confirmed": 35,
                "country": "Sierra Leone",
                "deaths": 15,
                "district": "Bombali",
                "hcw": 0,
                "probable": 0,
                "suspected": 5,
                "total_cases": 40
            },
            {
                "centroid": [
                    -10.8109821157,
                    6.73275035018
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 0,
                "district": "Bomi",
                "hcw": 0,
                "probable": 2,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -9.64366019073,
                    6.94376505628
                ],
                "confirmed": 3,
                "country": "Liberia",
                "deaths": 5,
                "district": "Bong",
                "hcw": 0,
                "probable": 16,
                "suspected": 45,
                "total_cases": 64
            },
            {
                "centroid": [
                    -12.2848428855,
                    7.50414610209
                ],
                "confirmed": 0,
                "country": "Sierra Leone",
                "deaths": 1,
                "district": "Bonthe",
                "hcw": 0,
                "probable": 0,
                "suspected": 2,
                "total_cases": 2
            },
            {
                "centroid": [
                    -13.5614691474,
                    9.62757357497
                ],
                "confirmed": 14,
                "country": "Guinea",
                "deaths": 15,
                "district": "Conakry",
                "hcw": 2,
                "probable": 2,
                "suspected": 0,
                "total_cases": 16
            },
            {
                "centroid": [
                    -13.3159837156,
                    9.73536465349
                ],
                "confirmed": 2,
                "country": "Guinea",
                "deaths": 2,
                "district": "Coyah",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -11.0627538709,
                    10.7299012426
                ],
                "confirmed": 0,
                "country": "Guinea",
                "deaths": 1,
                "district": "Dabola",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -12.1402794081,
                    10.9131793497
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 1,
                "district": "Dalaba",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -13.0627260644,
                    9.41630127096
                ],
                "confirmed": 3,
                "country": "Guinea",
                "deaths": 0,
                "district": "Forecariah",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 3
            },
            {
                "centroid": [
                    -13.2516184791,
                    8.46161143374
                ],
                "confirmed": 101,
                "country": "Sierra Leone",
                "deaths": 1,
                "district": "Freetown",
                "hcw": 0,
                "probable": 0,
                "suspected": 12,
                "total_cases": 113
            },
            {
                "centroid": [
                    -9.81486443353,
                    6.22457715742
                ],
                "confirmed": 23,
                "country": "Liberia",
                "deaths": 5,
                "district": "Grand Bassa",
                "hcw": 0,
                "probable": 18,
                "suspected": 10,
                "total_cases": 51
            },
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 6,
                "country": "Guinea",
                "deaths": 2,
                "district": "Gueckedou",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 7
            },
            {
                "centroid": [
                    -10.7177144281,
                    8.09228705936
                ],
                "confirmed": 1,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Kailahun",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -12.8268555724,
                    9.17121326335
                ],
                "confirmed": 7,
                "country": "Sierra Leone",
                "deaths": 7,
                "district": "Kambia",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 7
            },
            {
                "centroid": [
                    -11.2257628471,
                    7.94214556432
                ],
                "confirmed": 8,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Kenema",
                "hcw": 0,
                "probable": 0,
                "suspected": 7,
                "total_cases": 15
            },
            {
                "centroid": [
                    -9.10499016737,
                    9.26366627328
                ],
                "confirmed": 3,
                "country": "Guinea",
                "deaths": 0,
                "district": "Kerouane",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 3
            },
            {
                "centroid": [
                    -12.7488142039,
                    10.0983904021
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 0,
                "district": "Kindia",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -10.9664252552,
                    8.69471402857
                ],
                "confirmed": 3,
                "country": "Sierra Leone",
                "deaths": 3,
                "district": "Kono",
                "hcw": 0,
                "probable": 0,
                "suspected": 2,
                "total_cases": 5
            },
            {
                "centroid": [
                    -9.85031000872,
                    7.9952352352
                ],
                "confirmed": 11,
                "country": "Liberia",
                "deaths": 2,
                "district": "Lofa",
                "hcw": 0,
                "probable": 29,
                "suspected": 0,
                "total_cases": 40
            },
            {
                "centroid": [
                    -9.33932375244,
                    8.45053527378
                ],
                "confirmed": 71,
                "country": "Guinea",
                "deaths": 37,
                "district": "Macenta",
                "hcw": 0,
                "probable": 0,
                "suspected": 2,
                "total_cases": 73
            },
            {
                "centroid": [
                    -10.2601725424,
                    6.52717365125
                ],
                "confirmed": 4,
                "country": "Liberia",
                "deaths": 4,
                "district": "Margibi",
                "hcw": 0,
                "probable": 47,
                "suspected": 29,
                "total_cases": 80
            },
            {
                "centroid": [
                    -7.77007155359,
                    4.72127936981
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 2,
                "district": "Maryland",
                "hcw": 0,
                "probable": 1,
                "suspected": 1,
                "total_cases": 2
            },
            {
                "centroid": [
                    -10.7215195765,
                    6.3137163044
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 49,
                "district": "Monrovia",
                "hcw": 0,
                "probable": 73,
                "suspected": 186,
                "total_cases": 259
            },
            {
                "centroid": [
                    -12.4546600261,
                    8.08506816093
                ],
                "confirmed": 25,
                "country": "Sierra Leone",
                "deaths": 22,
                "district": "Moyamba",
                "hcw": 0,
                "probable": 0,
                "suspected": 3,
                "total_cases": 28
            },
            {
                "centroid": [
                    -8.7967554244,
                    7.9546695681
                ],
                "confirmed": 3,
                "country": "Guinea",
                "deaths": 3,
                "district": "N'Zerekore",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 3
            },
            {
                "centroid": [
                    -8.76982674319,
                    6.81673414074
                ],
                "confirmed": 30,
                "country": "Liberia",
                "deaths": 9,
                "district": "Nimba",
                "hcw": 1,
                "probable": 40,
                "suspected": 6,
                "total_cases": 76
            },
            {
                "centroid": [
                    -12.7583542486,
                    8.73493804628
                ],
                "confirmed": 44,
                "country": "Sierra Leone",
                "deaths": 1,
                "district": "Port Loko",
                "hcw": 0,
                "probable": 0,
                "suspected": 1,
                "total_cases": 45
            },
            {
                "centroid": [
                    -11.5724206143,
                    7.32219946466
                ],
                "confirmed": 3,
                "country": "Sierra Leone",
                "deaths": 2,
                "district": "Pujehun",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 3
            },
            {
                "centroid": [
                    -7.80101899924,
                    5.27754359722
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 0,
                "district": "River Gee",
                "hcw": 0,
                "probable": 0,
                "suspected": 3,
                "total_cases": 3
            },
            {
                "centroid": [
                    -9.375629418,
                    5.86101950752
                ],
                "confirmed": 3,
                "country": "Liberia",
                "deaths": 7,
                "district": "Rivercess",
                "hcw": 0,
                "probable": 3,
                "suspected": 3,
                "total_cases": 9
            },
            {
                "centroid": [
                    -8.75941753954,
                    5.34595419259
                ],
                "confirmed": 3,
                "country": "Liberia",
                "deaths": 1,
                "district": "Sinoe",
                "hcw": 0,
                "probable": 0,
                "suspected": 3,
                "total_cases": 6
            },
            {
                "centroid": [
                    -11.9021619466,
                    8.6944297019
                ],
                "confirmed": 27,
                "country": "Sierra Leone",
                "deaths": 5,
                "district": "Tonkolili",
                "hcw": 0,
                "probable": 0,
                "suspected": 1,
                "total_cases": 28
            },
            {
                "centroid": [
                    -9.10432690304,
                    7.53675677824
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 0,
                "district": "Yomou",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            }
        ],
        "epiweek": "2014-W38",
        "probable": 233,
        "suspected": 329,
        "total": 1005
    },
    {
        "confirmed": 405,
        "deaths": 64,
        "districts": [
            {
                "centroid": [
                    -8.33509894591,
                    8.89499658308
                ],
                "confirmed": 2,
                "country": "Guinea",
                "deaths": 2,
                "district": "Beyla",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -11.750688035,
                    7.9935946161
                ],
                "confirmed": 8,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Bo",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 8
            },
            {
                "centroid": [
                    -12.1955446453,
                    9.32328913639
                ],
                "confirmed": 79,
                "country": "Sierra Leone",
                "deaths": 5,
                "district": "Bombali",
                "hcw": 0,
                "probable": 0,
                "suspected": 4,
                "total_cases": 83
            },
            {
                "centroid": [
                    -9.64366019073,
                    6.94376505628
                ],
                "confirmed": 13,
                "country": "Liberia",
                "deaths": 1,
                "district": "Bong",
                "hcw": 0,
                "probable": 4,
                "suspected": 28,
                "total_cases": 45
            },
            {
                "centroid": [
                    -13.5614691474,
                    9.62757357497
                ],
                "confirmed": 27,
                "country": "Guinea",
                "deaths": 0,
                "district": "Conakry",
                "hcw": 1,
                "probable": 0,
                "suspected": 0,
                "total_cases": 27
            },
            {
                "centroid": [
                    -13.3159837156,
                    9.73536465349
                ],
                "confirmed": 2,
                "country": "Guinea",
                "deaths": 2,
                "district": "Coyah",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -12.1402794081,
                    10.9131793497
                ],
                "confirmed": 4,
                "country": "Guinea",
                "deaths": 0,
                "district": "Dalaba",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 4
            },
            {
                "centroid": [
                    -13.0627260644,
                    9.41630127096
                ],
                "confirmed": 0,
                "country": "Guinea",
                "deaths": 0,
                "district": "Forecariah",
                "hcw": 0,
                "probable": 0,
                "suspected": 1,
                "total_cases": 1
            },
            {
                "centroid": [
                    -13.2516184791,
                    8.46161143374
                ],
                "confirmed": 88,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Freetown",
                "hcw": 0,
                "probable": 0,
                "suspected": 9,
                "total_cases": 97
            },
            {
                "centroid": [
                    -9.81486443353,
                    6.22457715742
                ],
                "confirmed": 4,
                "country": "Liberia",
                "deaths": 0,
                "district": "Grand Bassa",
                "hcw": 0,
                "probable": 7,
                "suspected": 2,
                "total_cases": 13
            },
            {
                "centroid": [
                    -8.19794186898,
                    4.79929196355
                ],
                "confirmed": 6,
                "country": "Liberia",
                "deaths": 13,
                "district": "Grand Kru",
                "hcw": 0,
                "probable": 7,
                "suspected": 3,
                "total_cases": 16
            },
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 4,
                "country": "Guinea",
                "deaths": 1,
                "district": "Gueckedou",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 5
            },
            {
                "centroid": [
                    -12.8268555724,
                    9.17121326335
                ],
                "confirmed": 4,
                "country": "Sierra Leone",
                "deaths": 1,
                "district": "Kambia",
                "hcw": 0,
                "probable": 0,
                "suspected": 1,
                "total_cases": 5
            },
            {
                "centroid": [
                    -11.2257628471,
                    7.94214556432
                ],
                "confirmed": 10,
                "country": "Sierra Leone",
                "deaths": 1,
                "district": "Kenema",
                "hcw": 0,
                "probable": 0,
                "suspected": 3,
                "total_cases": 13
            },
            {
                "centroid": [
                    -9.10499016737,
                    9.26366627328
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 0,
                "district": "Kerouane",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -10.9664252552,
                    8.69471402857
                ],
                "confirmed": 0,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Kono",
                "hcw": 0,
                "probable": 0,
                "suspected": 1,
                "total_cases": 1
            },
            {
                "centroid": [
                    -9.85031000872,
                    7.9952352352
                ],
                "confirmed": 13,
                "country": "Liberia",
                "deaths": 6,
                "district": "Lofa",
                "hcw": 1,
                "probable": 26,
                "suspected": 4,
                "total_cases": 43
            },
            {
                "centroid": [
                    -9.33932375244,
                    8.45053527378
                ],
                "confirmed": 13,
                "country": "Guinea",
                "deaths": 4,
                "district": "Macenta",
                "hcw": 0,
                "probable": 2,
                "suspected": 1,
                "total_cases": 16
            },
            {
                "centroid": [
                    -10.2601725424,
                    6.52717365125
                ],
                "confirmed": 2,
                "country": "Liberia",
                "deaths": 11,
                "district": "Margibi",
                "hcw": 2,
                "probable": 39,
                "suspected": 46,
                "total_cases": 87
            },
            {
                "centroid": [
                    -10.7215195765,
                    6.3137163044
                ],
                "confirmed": 5,
                "country": "Liberia",
                "deaths": 6,
                "district": "Monrovia",
                "hcw": 3,
                "probable": 97,
                "suspected": 105,
                "total_cases": 207
            },
            {
                "centroid": [
                    -12.4546600261,
                    8.08506816093
                ],
                "confirmed": 13,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Moyamba",
                "hcw": 0,
                "probable": 0,
                "suspected": 7,
                "total_cases": 20
            },
            {
                "centroid": [
                    -8.7967554244,
                    7.9546695681
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 1,
                "district": "N'Zerekore",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -8.76982674319,
                    6.81673414074
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 0,
                "district": "Nimba",
                "hcw": 0,
                "probable": 18,
                "suspected": 2,
                "total_cases": 20
            },
            {
                "centroid": [
                    -12.7583542486,
                    8.73493804628
                ],
                "confirmed": 82,
                "country": "Sierra Leone",
                "deaths": 7,
                "district": "Port Loko",
                "hcw": 0,
                "probable": 0,
                "suspected": 7,
                "total_cases": 89
            },
            {
                "centroid": [
                    -11.5724206143,
                    7.32219946466
                ],
                "confirmed": 6,
                "country": "Sierra Leone",
                "deaths": 2,
                "district": "Pujehun",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 6
            },
            {
                "centroid": [
                    -7.80101899924,
                    5.27754359722
                ],
                "confirmed": 2,
                "country": "Liberia",
                "deaths": 0,
                "district": "River Gee",
                "hcw": 0,
                "probable": 1,
                "suspected": 2,
                "total_cases": 5
            },
            {
                "centroid": [
                    -8.75941753954,
                    5.34595419259
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 0,
                "district": "Sinoe",
                "hcw": 0,
                "probable": 0,
                "suspected": 1,
                "total_cases": 1
            },
            {
                "centroid": [
                    -11.9021619466,
                    8.6944297019
                ],
                "confirmed": 16,
                "country": "Sierra Leone",
                "deaths": 1,
                "district": "Tonkolili",
                "hcw": 0,
                "probable": 0,
                "suspected": 8,
                "total_cases": 24
            }
        ],
        "epiweek": "2014-W39",
        "probable": 202,
        "suspected": 235,
        "total": 842
    },
    {
        "confirmed": 485,
        "deaths": 68,
        "districts": [
            {
                "centroid": [
                    -11.750688035,
                    7.9935946161
                ],
                "confirmed": 16,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Bo",
                "hcw": 0,
                "probable": 0,
                "suspected": 6,
                "total_cases": 22
            },
            {
                "centroid": [
                    -12.1955446453,
                    9.32328913639
                ],
                "confirmed": 67,
                "country": "Sierra Leone",
                "deaths": 3,
                "district": "Bombali",
                "hcw": 0,
                "probable": 0,
                "suspected": 24,
                "total_cases": 91
            },
            {
                "centroid": [
                    -10.8109821157,
                    6.73275035018
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 0,
                "district": "Bomi",
                "hcw": 0,
                "probable": 2,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -9.64366019073,
                    6.94376505628
                ],
                "confirmed": 4,
                "country": "Liberia",
                "deaths": 14,
                "district": "Bong",
                "hcw": 0,
                "probable": 5,
                "suspected": 42,
                "total_cases": 51
            },
            {
                "centroid": [
                    -13.5614691474,
                    9.62757357497
                ],
                "confirmed": 15,
                "country": "Guinea",
                "deaths": 1,
                "district": "Conakry",
                "hcw": 4,
                "probable": 0,
                "suspected": 0,
                "total_cases": 15
            },
            {
                "centroid": [
                    -13.3159837156,
                    9.73536465349
                ],
                "confirmed": 2,
                "country": "Guinea",
                "deaths": 2,
                "district": "Coyah",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -12.1402794081,
                    10.9131793497
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 0,
                "district": "Dalaba",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -13.2516184791,
                    8.46161143374
                ],
                "confirmed": 154,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Freetown",
                "hcw": 0,
                "probable": 0,
                "suspected": 32,
                "total_cases": 186
            },
            {
                "centroid": [
                    -9.81486443353,
                    6.22457715742
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 1,
                "district": "Grand Bassa",
                "hcw": 0,
                "probable": 4,
                "suspected": 7,
                "total_cases": 11
            },
            {
                "centroid": [
                    -11.0499721228,
                    7.08098748329
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 4,
                "district": "Grand Cape Mount",
                "hcw": 0,
                "probable": 2,
                "suspected": 2,
                "total_cases": 4
            },
            {
                "centroid": [
                    -8.19794186898,
                    4.79929196355
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 3,
                "district": "Grand Kru",
                "hcw": 0,
                "probable": 1,
                "suspected": 3,
                "total_cases": 4
            },
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 5,
                "country": "Guinea",
                "deaths": 1,
                "district": "Gueckedou",
                "hcw": 1,
                "probable": 1,
                "suspected": 2,
                "total_cases": 8
            },
            {
                "centroid": [
                    -10.7177144281,
                    8.09228705936
                ],
                "confirmed": 3,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Kailahun",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 3
            },
            {
                "centroid": [
                    -12.8268555724,
                    9.17121326335
                ],
                "confirmed": 7,
                "country": "Sierra Leone",
                "deaths": 2,
                "district": "Kambia",
                "hcw": 0,
                "probable": 0,
                "suspected": 2,
                "total_cases": 9
            },
            {
                "centroid": [
                    -11.2257628471,
                    7.94214556432
                ],
                "confirmed": 5,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Kenema",
                "hcw": 0,
                "probable": 0,
                "suspected": 10,
                "total_cases": 15
            },
            {
                "centroid": [
                    -9.10499016737,
                    9.26366627328
                ],
                "confirmed": 2,
                "country": "Guinea",
                "deaths": 0,
                "district": "Kerouane",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -10.9664252552,
                    8.69471402857
                ],
                "confirmed": 7,
                "country": "Sierra Leone",
                "deaths": 1,
                "district": "Kono",
                "hcw": 0,
                "probable": 0,
                "suspected": 8,
                "total_cases": 15
            },
            {
                "centroid": [
                    -9.85031000872,
                    7.9952352352
                ],
                "confirmed": 4,
                "country": "Liberia",
                "deaths": 0,
                "district": "Lofa",
                "hcw": 1,
                "probable": 11,
                "suspected": 0,
                "total_cases": 15
            },
            {
                "centroid": [
                    -8.32663691342,
                    7.99102302963
                ],
                "confirmed": 2,
                "country": "Guinea",
                "deaths": 2,
                "district": "Lola",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -9.33932375244,
                    8.45053527378
                ],
                "confirmed": 48,
                "country": "Guinea",
                "deaths": 7,
                "district": "Macenta",
                "hcw": 0,
                "probable": 3,
                "suspected": 23,
                "total_cases": 74
            },
            {
                "centroid": [
                    -10.2601725424,
                    6.52717365125
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 3,
                "district": "Margibi",
                "hcw": 0,
                "probable": 37,
                "suspected": 8,
                "total_cases": 45
            },
            {
                "centroid": [
                    -10.7215195765,
                    6.3137163044
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 14,
                "district": "Monrovia",
                "hcw": 9,
                "probable": 87,
                "suspected": 121,
                "total_cases": 208
            },
            {
                "centroid": [
                    -12.4546600261,
                    8.08506816093
                ],
                "confirmed": 13,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Moyamba",
                "hcw": 0,
                "probable": 0,
                "suspected": 6,
                "total_cases": 19
            },
            {
                "centroid": [
                    -8.7967554244,
                    7.9546695681
                ],
                "confirmed": 18,
                "country": "Guinea",
                "deaths": 7,
                "district": "N'Zerekore",
                "hcw": 0,
                "probable": 2,
                "suspected": 2,
                "total_cases": 22
            },
            {
                "centroid": [
                    -8.76982674319,
                    6.81673414074
                ],
                "confirmed": 1,
                "country": "Liberia",
                "deaths": 0,
                "district": "Nimba",
                "hcw": 1,
                "probable": 1,
                "suspected": 1,
                "total_cases": 3
            },
            {
                "centroid": [
                    -12.6356583491,
                    10.8964798332
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 0,
                "district": "Pita",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -12.7583542486,
                    8.73493804628
                ],
                "confirmed": 76,
                "country": "Sierra Leone",
                "deaths": 3,
                "district": "Port Loko",
                "hcw": 0,
                "probable": 0,
                "suspected": 3,
                "total_cases": 79
            },
            {
                "centroid": [
                    -11.5724206143,
                    7.32219946466
                ],
                "confirmed": 5,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Pujehun",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 5
            },
            {
                "centroid": [
                    -7.80101899924,
                    5.27754359722
                ],
                "confirmed": 1,
                "country": "Liberia",
                "deaths": 0,
                "district": "River Gee",
                "hcw": 1,
                "probable": 0,
                "suspected": 1,
                "total_cases": 2
            },
            {
                "centroid": [
                    -8.75941753954,
                    5.34595419259
                ],
                "confirmed": 2,
                "country": "Liberia",
                "deaths": 0,
                "district": "Sinoe",
                "hcw": 0,
                "probable": 3,
                "suspected": 1,
                "total_cases": 6
            },
            {
                "centroid": [
                    -11.9021619466,
                    8.6944297019
                ],
                "confirmed": 26,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Tonkolili",
                "hcw": 0,
                "probable": 0,
                "suspected": 3,
                "total_cases": 29
            }
        ],
        "epiweek": "2014-W40",
        "probable": 159,
        "suspected": 307,
        "total": 951
    },
    {
        "confirmed": 575,
        "deaths": 64,
        "districts": [
            {
                "centroid": [
                    -8.33509894591,
                    8.89499658308
                ],
                "confirmed": 5,
                "country": "Guinea",
                "deaths": 1,
                "district": "Beyla",
                "hcw": 1,
                "probable": 0,
                "suspected": 1,
                "total_cases": 6
            },
            {
                "centroid": [
                    -11.750688035,
                    7.9935946161
                ],
                "confirmed": 22,
                "country": "Sierra Leone",
                "deaths": 4,
                "district": "Bo",
                "hcw": 0,
                "probable": 0,
                "suspected": 10,
                "total_cases": 32
            },
            {
                "centroid": [
                    -14.3617687695,
                    11.0893838793
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 0,
                "district": "Boke",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -12.1955446453,
                    9.32328913639
                ],
                "confirmed": 94,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Bombali",
                "hcw": 0,
                "probable": 0,
                "suspected": 23,
                "total_cases": 117
            },
            {
                "centroid": [
                    -10.8109821157,
                    6.73275035018
                ],
                "confirmed": 2,
                "country": "Liberia",
                "deaths": 5,
                "district": "Bomi",
                "hcw": 0,
                "probable": 5,
                "suspected": 5,
                "total_cases": 12
            },
            {
                "centroid": [
                    -9.64366019073,
                    6.94376505628
                ],
                "confirmed": 4,
                "country": "Liberia",
                "deaths": 0,
                "district": "Bong",
                "hcw": 0,
                "probable": 16,
                "suspected": 55,
                "total_cases": 75
            },
            {
                "centroid": [
                    -13.5614691474,
                    9.62757357497
                ],
                "confirmed": 13,
                "country": "Guinea",
                "deaths": 1,
                "district": "Conakry",
                "hcw": 0,
                "probable": 0,
                "suspected": 24,
                "total_cases": 37
            },
            {
                "centroid": [
                    -13.3159837156,
                    9.73536465349
                ],
                "confirmed": 25,
                "country": "Guinea",
                "deaths": 2,
                "district": "Coyah",
                "hcw": 0,
                "probable": 0,
                "suspected": 3,
                "total_cases": 28
            },
            {
                "centroid": [
                    -12.1402794081,
                    10.9131793497
                ],
                "confirmed": 2,
                "country": "Guinea",
                "deaths": 0,
                "district": "Dalaba",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -13.4939931579,
                    10.1206853671
                ],
                "confirmed": 0,
                "country": "Guinea",
                "deaths": 0,
                "district": "Dubreka",
                "hcw": 0,
                "probable": 0,
                "suspected": 1,
                "total_cases": 1
            },
            {
                "centroid": [
                    -13.0627260644,
                    9.41630127096
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 0,
                "district": "Forecariah",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -13.2516184791,
                    8.46161143374
                ],
                "confirmed": 172,
                "country": "Sierra Leone",
                "deaths": 22,
                "district": "Freetown",
                "hcw": 0,
                "probable": 0,
                "suspected": 27,
                "total_cases": 199
            },
            {
                "centroid": [
                    -10.3101521433,
                    7.41827028131
                ],
                "confirmed": 1,
                "country": "Liberia",
                "deaths": 1,
                "district": "Gbarpolu",
                "hcw": 0,
                "probable": 2,
                "suspected": 1,
                "total_cases": 4
            },
            {
                "centroid": [
                    -9.81486443353,
                    6.22457715742
                ],
                "confirmed": 1,
                "country": "Liberia",
                "deaths": 0,
                "district": "Grand Bassa",
                "hcw": 0,
                "probable": 5,
                "suspected": 1,
                "total_cases": 7
            },
            {
                "centroid": [
                    -11.0499721228,
                    7.08098748329
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 4,
                "district": "Grand Cape Mount",
                "hcw": 0,
                "probable": 2,
                "suspected": 7,
                "total_cases": 9
            },
            {
                "centroid": [
                    -8.19794186898,
                    4.79929196355
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 1,
                "district": "Grand Kru",
                "hcw": 0,
                "probable": 3,
                "suspected": 3,
                "total_cases": 6
            },
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 0,
                "country": "Guinea",
                "deaths": 0,
                "district": "Gueckedou",
                "hcw": 0,
                "probable": 0,
                "suspected": 3,
                "total_cases": 3
            },
            {
                "centroid": [
                    -10.7177144281,
                    8.09228705936
                ],
                "confirmed": 8,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Kailahun",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 8
            },
            {
                "centroid": [
                    -12.8268555724,
                    9.17121326335
                ],
                "confirmed": 4,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Kambia",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 4
            },
            {
                "centroid": [
                    -11.2257628471,
                    7.94214556432
                ],
                "confirmed": 16,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Kenema",
                "hcw": 0,
                "probable": 0,
                "suspected": 5,
                "total_cases": 21
            },
            {
                "centroid": [
                    -9.10499016737,
                    9.26366627328
                ],
                "confirmed": 14,
                "country": "Guinea",
                "deaths": 0,
                "district": "Kerouane",
                "hcw": 0,
                "probable": 0,
                "suspected": 6,
                "total_cases": 20
            },
            {
                "centroid": [
                    -10.0272901436,
                    9.24280287002
                ],
                "confirmed": 2,
                "country": "Guinea",
                "deaths": 1,
                "district": "Kissidougo",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -10.9664252552,
                    8.69471402857
                ],
                "confirmed": 6,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Kono",
                "hcw": 0,
                "probable": 0,
                "suspected": 4,
                "total_cases": 10
            },
            {
                "centroid": [
                    -9.85031000872,
                    7.9952352352
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 1,
                "district": "Lofa",
                "hcw": 0,
                "probable": 13,
                "suspected": 0,
                "total_cases": 13
            },
            {
                "centroid": [
                    -8.32663691342,
                    7.99102302963
                ],
                "confirmed": 7,
                "country": "Guinea",
                "deaths": 1,
                "district": "Lola",
                "hcw": 0,
                "probable": 0,
                "suspected": 2,
                "total_cases": 9
            },
            {
                "centroid": [
                    -9.33932375244,
                    8.45053527378
                ],
                "confirmed": 51,
                "country": "Guinea",
                "deaths": 0,
                "district": "Macenta",
                "hcw": 0,
                "probable": 0,
                "suspected": 18,
                "total_cases": 69
            },
            {
                "centroid": [
                    -11.8048918743,
                    10.4930688004
                ],
                "confirmed": 1,
                "country": "Guinea",
                "deaths": 0,
                "district": "Mamou",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -10.2601725424,
                    6.52717365125
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 0,
                "district": "Margibi",
                "hcw": 1,
                "probable": 17,
                "suspected": 11,
                "total_cases": 28
            },
            {
                "centroid": [
                    -10.7215195765,
                    6.3137163044
                ],
                "confirmed": 1,
                "country": "Liberia",
                "deaths": 1,
                "district": "Monrovia",
                "hcw": 1,
                "probable": 47,
                "suspected": 90,
                "total_cases": 138
            },
            {
                "centroid": [
                    -12.4546600261,
                    8.08506816093
                ],
                "confirmed": 9,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Moyamba",
                "hcw": 0,
                "probable": 0,
                "suspected": 4,
                "total_cases": 13
            },
            {
                "centroid": [
                    -8.7967554244,
                    7.9546695681
                ],
                "confirmed": 19,
                "country": "Guinea",
                "deaths": 11,
                "district": "N'Zerekore",
                "hcw": 0,
                "probable": 10,
                "suspected": 2,
                "total_cases": 31
            },
            {
                "centroid": [
                    -8.76982674319,
                    6.81673414074
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 0,
                "district": "Nimba",
                "hcw": 0,
                "probable": 6,
                "suspected": 1,
                "total_cases": 7
            },
            {
                "centroid": [
                    -12.7583542486,
                    8.73493804628
                ],
                "confirmed": 67,
                "country": "Sierra Leone",
                "deaths": 8,
                "district": "Port Loko",
                "hcw": 0,
                "probable": 0,
                "suspected": 3,
                "total_cases": 70
            },
            {
                "centroid": [
                    -8.75941753954,
                    5.34595419259
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 0,
                "district": "Sinoe",
                "hcw": 0,
                "probable": 0,
                "suspected": 2,
                "total_cases": 2
            },
            {
                "centroid": [
                    -11.9021619466,
                    8.6944297019
                ],
                "confirmed": 27,
                "country": "Sierra Leone",
                "deaths": 0,
                "district": "Tonkolili",
                "hcw": 0,
                "probable": 0,
                "suspected": 10,
                "total_cases": 37
            }
        ],
        "epiweek": "2014-W41",
        "probable": 126,
        "suspected": 322,
        "total": 1023
    },
    {
        "confirmed": 10,
        "deaths": 30,
        "districts": [
            {
                "centroid": [
                    -9.64366019073,
                    6.94376505628
                ],
                "confirmed": 0,
                "country": "Liberia",
                "deaths": 0,
                "district": "Bong",
                "hcw": 2,
                "probable": 0,
                "suspected": 4,
                "total_cases": 4
            },
            {
                "centroid": [
                    -9.81486443353,
                    6.22457715742
                ],
                "confirmed": 2,
                "country": "Liberia",
                "deaths": 0,
                "district": "Grand Bassa",
                "hcw": 0,
                "probable": 0,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -10.3048348255,
                    8.69493972138
                ],
                "confirmed": 0,
                "country": "Guinea",
                "deaths": 1,
                "district": "Gueckedou",
                "hcw": 0,
                "probable": 1,
                "suspected": 0,
                "total_cases": 1
            },
            {
                "centroid": [
                    -10.7177144281,
                    8.09228705936
                ],
                "confirmed": 2,
                "country": "Sierra Leone",
                "deaths": 1,
                "district": "Kailahun",
                "hcw": 1,
                "probable": 0,
                "suspected": 0,
                "total_cases": 2
            },
            {
                "centroid": [
                    -9.85031000872,
                    7.9952352352
                ],
                "confirmed": 4,
                "country": "Liberia",
                "deaths": 26,
                "district": "Lofa",
                "hcw": 0,
                "probable": 11,
                "suspected": 18,
                "total_cases": 33
            },
            {
                "centroid": [
                    -10.2601725424,
                    6.52717365125
                ],
                "confirmed": 2,
                "country": "Liberia",
                "deaths": 2,
                "district": "Margibi",
                "hcw": 1,
                "probable": 1,
                "suspected": 0,
                "total_cases": 3
            }
        ],
        "epiweek": "2014-W03",
        "probable": 13,
        "suspected": 22,
        "total": 45
    }
];


var districtTotals = [{
    "centroid": [-10.3048348255, 8.69493972138],
    "district": "Gueckedou",
    "country": "Guinea",
    "total": 367,
    "recent": 12
}, {
    "centroid": [-12.7583542486, 8.73493804628],
    "district": "Port Loko",
    "country": "Sierra Leone",
    "total": 427,
    "recent": 149
}, {
    "centroid": [-13.2516184791, 8.46161143374],
    "district": "Freetown",
    "country": "Sierra Leone",
    "total": 748,
    "recent": 385
}, {
    "centroid": [-10.7177144281, 8.09228705936],
    "district": "Kailahun",
    "country": "Sierra Leone",
    "total": 585,
    "recent": 13
}, {
    "centroid": [-10.7215195765, 6.3137163044],
    "district": "Monrovia",
    "country": "Liberia",
    "total": 1785,
    "recent": 346
}, {
    "centroid": [-9.33932375244, 8.45053527378],
    "district": "Macenta",
    "country": "Guinea",
    "total": 533,
    "recent": 143
}, {
    "centroid": [-10.0272901436, 9.24280287002],
    "district": "Kissidougo",
    "country": "Liberia",
    "total": 10,
    "recent": 2
}, {
    "centroid": [-13.5614691474, 9.62757357497],
    "district": "Conakry",
    "country": "Guinea",
    "total": 229,
    "recent": 52
}, {
    "centroid": [-10.1012791495, 10.5819899535],
    "district": "Kouroussa",
    "country": "Liberia",
    "total": 4,
    "recent": 0
}, {
    "centroid": [-11.0627538709, 10.7299012426],
    "district": "Dabola",
    "country": "Guinea",
    "total": 5,
    "recent": 0
}, {
    "centroid": [-9.85031000872, 7.9952352352],
    "district": "Lofa",
    "country": "Liberia",
    "total": 814,
    "recent": 61
}, {
    "centroid": [-9.64366019073, 6.94376505628],
    "district": "Bong",
    "country": "Liberia",
    "total": 444,
    "recent": 130
}, {
    "centroid": [-10.7262027524, 11.6069674927],
    "district": "Dinguiraye",
    "country": "Guinea",
    "total": 1,
    "recent": 0
}, {
    "centroid": [-11.0499721228, 7.08098748329],
    "district": "Grand Cape Mount",
    "country": "Guinea",
    "total": 30,
    "recent": 13
}, {
    "centroid": [-10.2601725424, 6.52717365125],
    "district": "Margibi",
    "country": "Liberia",
    "total": 602,
    "recent": 76
}, {
    "centroid": [-11.5724206143, 7.32219946466],
    "district": "Pujehun",
    "country": "Liberia",
    "total": 27,
    "recent": 5
}, {
    "centroid": [-13.3591246619, 10.9192552488],
    "district": "Telimele",
    "country": "Liberia",
    "total": 26,
    "recent": 0
}, {
    "centroid": [-14.0545378494, 10.3704523359],
    "district": "Boffa",
    "country": "Guinea",
    "total": 24,
    "recent": 0
}, {
    "centroid": [-11.2257628471, 7.94214556432],
    "district": "Kenema",
    "country": "Sierra Leone",
    "total": 495,
    "recent": 36
}, {
    "centroid": [-11.750688035, 7.9935946161],
    "district": "Bo",
    "country": "Sierra Leone",
    "total": 160,
    "recent": 54
}, {
    "centroid": [-12.8268555724, 9.17121326335],
    "district": "Kambia",
    "country": "Liberia",
    "total": 28,
    "recent": 13
}, {
    "centroid": [-12.1955446453, 9.32328913639],
    "district": "Bombali",
    "country": "Sierra Leone",
    "total": 446,
    "recent": 208
}, {
    "centroid": [-8.76982674319, 6.81673414074],
    "district": "Nimba",
    "country": "Liberia",
    "total": 253,
    "recent": 10
}, {
    "centroid": [-9.81486443353, 6.22457715742],
    "district": "Grand Bassa",
    "country": "Liberia",
    "total": 137,
    "recent": 20
}, {
    "centroid": [-10.3101521433, 7.41827028131],
    "district": "Gbarpolu",
    "country": "Guinea",
    "total": 6,
    "recent": 4
}, {
    "centroid": [-10.8109821157, 6.73275035018],
    "district": "Bomi",
    "country": "Liberia",
    "total": 94,
    "recent": 14
}, {
    "centroid": [-10.9664252552, 8.69471402857],
    "district": "Kono",
    "country": "Sierra Leone",
    "total": 84,
    "recent": 25
}, {
    "centroid": [-12.2848428855, 7.50414610209],
    "district": "Bonthe",
    "country": "Sierra Leone",
    "total": 3,
    "recent": 0
}, {
    "centroid": [-12.4546600261, 8.08506816093],
    "district": "Moyamba",
    "country": "Sierra Leone",
    "total": 99,
    "recent": 32
}, {
    "centroid": [-9.4666501767, 11.6823785627],
    "district": "Siguiri",
    "country": "Liberia",
    "total": 6,
    "recent": 0
}, {
    "centroid": [-11.9021619466, 8.6944297019],
    "district": "Tonkolili",
    "country": "Sierra Leone",
    "total": 150,
    "recent": 66
}, {
    "centroid": [-13.0627260644, 9.41630127096],
    "district": "Forecariah",
    "country": "Guinea",
    "total": 17,
    "recent": 1
}, {
    "centroid": [-8.7967554244, 7.9546695681],
    "district": "N'Zerekore",
    "country": "Guniea",
    "total": 92,
    "recent": 53
}, {
    "centroid": [-9.375629418, 5.86101950752],
    "district": "Rivercess",
    "country": "Liberia",
    "total": 10,
    "recent": 0
}, {
    "centroid": [3.39823109352, 6.4615001567],
    "district": "Lagos Island",
    "country": "Liberia",
    "total": 16,
    "recent": 0
}, {
    "centroid": [-12.6356583491, 10.8964798332],
    "district": "Pita",
    "country": "Liberia",
    "total": 9,
    "recent": 1
}, {
    "centroid": [-9.10432690304, 7.53675677824],
    "district": "Yomou",
    "country": "Liberia",
    "total": 11,
    "recent": 0
}, {
    "centroid": [-13.4939931579, 10.1206853671],
    "district": "Dubreka",
    "country": "Guinea",
    "total": 22,
    "recent": 1
}, {
    "centroid": [-8.21471032562, 5.93345828909],
    "district": "Grand Gedeh",
    "country": "Guinea",
    "total": 3,
    "recent": 0
}, {
    "centroid": [-8.75941753954, 5.34595419259],
    "district": "Sinoe",
    "country": "Liberia",
    "total": 18,
    "recent": 8
}, {
    "centroid": [-7.80101899924, 5.27754359722],
    "district": "River Gee",
    "country": "Liberia",
    "total": 19,
    "recent": 2
}, {
    "centroid": [7.0216484586, 4.7776303994],
    "district": "Port-Harcourt",
    "country": "Liberia",
    "total": 4,
    "recent": 0
}, {
    "centroid": [17.4467, 14.6928],
    "district": "Dakar",
    "country": "Guinea",
    "total": 1,
    "recent": 0
}, {
    "centroid": [-9.10499016737, 9.26366627328],
    "district": "Kerouane",
    "country": "Liberia",
    "total": 45,
    "recent": 22
}, {
    "centroid": [-13.3159837156, 9.73536465349],
    "district": "Coyah",
    "country": "Guinea",
    "total": 40,
    "recent": 30
}, {
    "centroid": [-7.77007155359, 4.72127936981],
    "district": "Maryland",
    "country": "Guinea",
    "total": 8,
    "recent": 0
}, {
    "centroid": [-12.1402794081, 10.9131793497],
    "district": "Dalaba",
    "country": "Guinea",
    "total": 9,
    "recent": 3
}, {
    "centroid": [-12.7488142039, 10.0983904021],
    "district": "Kindia",
    "country": "Liberia",
    "total": 1,
    "recent": 0
}, {
    "centroid": [-8.19794186898, 4.79929196355],
    "district": "Grand Kru",
    "country": "Guinea",
    "total": 26,
    "recent": 10
}, {
    "centroid": [-8.33509894591, 8.89499658308],
    "district": "Beyla",
    "country": "Guinea",
    "total": 8,
    "recent": 6
}, {
    "centroid": [-8.32663691342, 7.99102302963],
    "district": "Lola",
    "country": "Liberia",
    "total": 11,
    "recent": 11
}, {
    "centroid": [-14.3617687695, 11.0893838793],
    "district": "Boke",
    "country": "Guinea",
    "total": 1,
    "recent": 1
}, {
    "centroid": [-11.8048918743, 10.4930688004],
    "district": "Mamou",
    "country": "Guinea",
    "total": 1,
    "recent": 1
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

   
function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
  }


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

    if (window.location.href.search('funds') < 0 ) { 
        L.mapbox.accessToken = 'pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q';
        var map = L.mapbox.map('map', 'examples.map-20v6611k').setView([8.57, -11.75], 6);
        var cases = L.mapbox.featureLayer();
        map.addLayer(cases);
        map.scrollWheelZoom.disable();


        var iconPath = {
            'iconUrl': {{ site.baseurl }} + 'img/case-marker-path-grad.png',
        };
        var iconFill = {
            'iconUrl': {{ site.baseurl }} + 'img/case-marker.png',
        };


        var epiweek;
        $.each(districtData, function(index, value) {
            //console.log(value);
            epiweek = value.epiweek;
            $.each(value.districts, function(index, value) {
                //console.log(value.centroid[1]);
                if (value.centroid != null) {

                    var icon = {
                        'iconUrl': {{ site.baseurl }} + 'img/case-marker.png',
                        'iconSize': [Math.sqrt(value.total_cases / Math.PI)*2, Math.sqrt(value.total_cases / Math.PI)*2]
                    };

                    var markup = '<div class="inner"><b>' + value.total_cases + ' cases</b><br>' + value.district + ', ' + value.country + '</div>';

                    var marker = L.marker([value.centroid[1], value.centroid[0]], {
                        'epiweek': epiweek,
                        'epiWeekId': index,
                        'opacity': 0.4
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
        $('.week-label').empty().append('Week ' + globalData[globalData.length - 1]['epiweek'].slice(-2));
        cases.eachLayer(function(marker) {
            if (marker.options.epiweek === globalData[globalData.length - 1]['epiweek']) {
                marker.setOpacity(0.4);
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
            $('.week-label').empty().append('Week ' + globalData[mapCounter]['epiweek'].slice(-2));
            cases.eachLayer(function(marker) {
                if (marker.options.epiweek === globalData[mapCounter]['epiweek']) {
                    marker.setOpacity(0.4);
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
            
            $('.week-label').empty().append('Week ' + globalData[sliderValue]['epiweek'].slice(-2));
            cases.eachLayer(function(marker) {
                if (marker.options.epiweek === globalData[sliderValue]['epiweek']) {
                    marker.setOpacity(0.4);
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
                mapTimer = setInterval(mapLoop, 150);
                $(this).addClass('playing');
            }
        });


 	}
 	
 	
 	
 	var map = L.mapbox.map('cases-map', 'examples.map-20v6611k').setView([8.57, -11.75], 6);
 	map.scrollWheelZoom.disable();
 	var caseTotals = L.mapbox.featureLayer();
 	var recentTotals = L.mapbox.featureLayer();
 	caseTotals.addTo(map);
 
 	 
 	$.each(districtTotals, function(index, value) {
 	
 	      var icon = {
            'iconUrl': {{ site.baseurl }} + 'img/case-marker.png',
            'iconSize': [Math.sqrt(value.total / Math.PI)*2, Math.sqrt(value.total / Math.PI)*2]
            };

        var markup = '<div class="inner"><b>' + value.total + ' total cases</b><br>' + value.district + ', ' + value.country + '</div>';

        var marker = L.marker([value.centroid[1], value.centroid[0]], {
            'opacity': 0.4
        });
        
         marker.setIcon(L.icon(icon));
                    marker.bindPopup(markup, {
                        autoPan: true
                    });
        caseTotals.addLayer(marker);

 	});
 	
 	$.each(districtTotals, function(index, value) {
 	
 	      var icon = {
            'iconUrl': {{ site.baseurl }} + 'img/case-marker.png',
            'iconSize': [Math.sqrt(value.recent / Math.PI)*2, Math.sqrt(value.recent / Math.PI)*2]
            };

        var markup = '<div class="inner"><b>' + value.recent + ' recent cases</b><br>' + value.district + ', ' + value.country + '</div>';

        var marker = L.marker([value.centroid[1], value.centroid[0]], {
            'opacity': 0.8
        });
        
         marker.setIcon(L.icon(icon));
                    marker.bindPopup(markup, {
                        autoPan: true
                    });
        recentTotals.addLayer(marker);

 	});
 	
 	
 	 // Update latest numbers
 	var casesTotal = 0;
 	var deathsTotal = 0;
 	$.each(globalData, function(index, value) {
 	  casesTotal = casesTotal + value.total;
 	  deathsTotal = deathsTotal + value.deaths;
 	});
 	


	$('.summary-cases').empty().append(commaSeparateNumber(casesTotal));
	$('.summary-deaths').empty().append(commaSeparateNumber(deathsTotal));
	$('.summary-cases-recent').empty().append(commaSeparateNumber(globalData[globalData.length -1]['total']));
	
	
	

});
