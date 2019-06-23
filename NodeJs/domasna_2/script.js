// function countWords(){
  
//     // Select all the p elements in the page.
//     var paragraphs = document.getElementsByTagName("p");
  
//     // The counter.
//     var count = 0;
  
//     for(var i = 0; i < paragraphs.length; i++)
//     {
//         // Split the innerHtml of the current paragraph to count the words.
//         count += paragraphs[i].innerHTML.split(' ').length;
//     }
   
//     document.write("Number of words: "+count);
// }

// countWords();
// console.log(countWords);


function wordCount(elements) {
    var count = 0;
    for (var i = 0; i < elements.length; i++) {
        count += elements[i].textContent.split(/\s/).length;
    }
    return count;
    
}
var wordsInParagraphs = wordCount(document.getElementsByTagName("p"));
wordCount(elements);



function cnt(){
    var paragraphs = document.getElementsByTagName("p");
    var count = 0;
    for(var i = 0; i < paragraphs.length; i++)
    {
        count += paragraphs[i].innerHTML.split(' ').length;
    }
}
cnt();