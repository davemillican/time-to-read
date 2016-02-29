(function () {
    var count,tempStorage, readingTime;
    var readTime, container, topHeading;
    var article = document.getElementsByClassName('article');
    var  textCount = 0;
    var blocksToCount = document.getElementsByClassName('time-to-read');
    var display = document.getElementsByClassName('reading-time')

    count = 0;

    while ( count < blocksToCount.length) {
        tempStorage = blocksToCount[count].innerHTML.split(' ');
        textCount += tempStorage.length;
        count++;
    }
     
    readingTime = textCount / 230;

    display[0].innerHTML = "Article is a " + Math.ceil(readingTime) + " minute Read"







    topHeading = document.getElementById ('heading');

    readTime = document.querySelector('p');

    console.log (readTime.innerHTML);

    article[0].style.margin = " 0 20%";
    article[0].style.clear = "all";

    topHeading.style.fontSize = "350%";
    topHeading.style.textAlign = "center";

    readTime.style.backgroundColor = "rgb(210,240,240)";
    readTime.style.margin = '0 auto';
    readTime.style.float = "left";
    readTime.style.width = "200px"
    readTime.style.border = "2px solid black";
    readTime.style.borderRadius = '5%'

})();