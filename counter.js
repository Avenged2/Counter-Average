function Round(n, k)
{
    var factor = Math.pow(10, k);
    return Math.round(n*factor)/factor;
}

const oceny = [3, 3, 4, 3, 3, 5]; // oceny do sredniej arytmetycznej
const ocens = [ // oceny do sredniej wazonej
    {number: 2, waga: 2},
    {number: 3, waga: 1},
]

function countAverage(tbl)
{
    let score = 0;
    let average;
    for (let ocena of tbl){
        score = score + ocena;
    };

    average = score / oceny.length; 
    console.log("Twoja średnia arytmetyczna to: " + Round(average, 2));
}

function countAverageWeight(tbl) 
{
    let score = 0;
    let scoreWeight = 0;
    let average; 
    for (let ocena of tbl){
        score = score + (ocena.number * ocena.waga);
        scoreWeight = scoreWeight + ocena.waga;
    };

    average = (score / scoreWeight);
    console.log("Twoja średnia ważona to: " + Round(average, 2));
}

countAverage(oceny);
countAverageWeight(ocens);
