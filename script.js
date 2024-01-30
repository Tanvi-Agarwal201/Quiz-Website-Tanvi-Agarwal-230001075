let c = 0;
let a=0;
let ques = ["Q1. How can we write comment along with CSS code ?", "Q2. Which CSS property is used to control the text size of an element ?", "Q3.  The default value of position attribute is " , "Q4. Which of the following is the root tag of the HTML document?", "Q5. Which of the following HTML tag is used to display the text with scrolling effect?", "Q6. Which of the following tag is used to define options in a drop-down selection list?","Q7. CSS stands for" , "Q8. Which one is not a Semantic Tag " , "Q9. Which one of the following keywords is used for defining the function in the JavaScript?","Q10. What does XML stands for?" , "Q11. _______ variables are destroyed when you exit the function" , "Q12. ______ returns a number between 0 and 1" , "Q13. What is the full form of AJAX?","Q14. Which of the technology is not used by AJAX?","Q15. How can you test the Ajax code?" , "Q16. How many types of triggers are present in update panel?","Q17. Which of the following function is used to get the value of the previous element in an array?" , "Q18. Which of the following is a single global function defined in the jQuery library?" , "Q19. Which is the method that operates on the return value of $()?","Q20. php is a _______ language"]
let ans = ["a /* a comment*/", "c font-size", "d relative" ,"b <html>" , "a <marquee>" , "c <option>" , "b cascading style sheet" , "d <title>" , "a function","b extensible markup language" , "c local", "b random()","a asynchronous javascript and XML","d flash","b JSU","a 2","c prev()","b jQuery()", "d css()","b server side scripting language"]
let options = ["a /* a comment*/" , "b //a comment //" , "c / a comment/" , "d <’a comment’>",
                "a font-style", "b text-size" , "c font-size" , "d text-style",
                "a fixed" , "b absolute","c inherit","d relative",
                "a <body>","b <html>","c <head>","d <title>",
                "a <marquee>" , "b <scroll>" , "c <div>" , "d none of the above",
                "a <select>","b <dropdownn>","c <option>" , "d <list>",
                "a cascading single sheet","b cascading style sheet","c cascading single style","d none of the above",
                "a <aside>" ,"b <footer>", "c <header>", "d <title>",
                "a function","b init","c void" , "d main",
                "a extra modern link","b extensible markup language","c example markup language" , "d X markup language",
                "a private","b global","c local","d external",
                "a round()","b random()","c max()","d min()",
                "a asynchronous javascript and XML","b another javascript and XML library","c abstract JSON and XML","d none of the above",
                "a javascript","b document object model","b XMLHttpRequest","d flash",
                "a JSUnit","b JSU","c AjaxJSU","d JSUnitAjax",
                "a 2","b 3","c 4","d 5",
                "a last()","b before()","c prev()","d previous()",
                "a $()","b jQuery()","c Queryanalysis()","d Onclick()",
                "a show()","b click()","c done()","d css()",
                "a scripting language","b server side scripting language","c machine language","d binary language",
            ]
let nameplayer
let points = 0


function questions() {

    let start = document.querySelector(".start")

    if (c == 0)
        nameplayer = document.getElementById("inp").value
    if (start)
        start.remove()
    let entry = document.querySelector(".entry")
    if (entry)
        entry.remove()
    let q = document.querySelector(".ques")
    if (q)
        q.remove()
    let question = document.createElement("div")
    question.setAttribute("class", "ques")
    let cont = document.querySelector(".questionbox")

    question.innerText = ques[c]
    question.style.width = "50vw"
    question.style.height = "45vh"
    question.style.border = "2px solid black"
    question.style.borderRadius = "20px"
    question.style.padding = "10px"
    question.style.margin = "auto"
    question.style.marginTop = "30px"
    cont.appendChild(question)
    question.style.backgroundImage = "url('output-onlinepngtools.png')"
    question.style.backgroundPosition = "center"
    question.style.backgroundSize = "800px"
    let optionbox = document.createElement("div")
    question.appendChild(optionbox)
    let option1 = document.createElement("input")
    let option2 = document.createElement("input")
    let option3 = document.createElement("input")
    let option4 = document.createElement("input")
   
    
    optionbox.appendChild(option1)
    optionbox.appendChild(option2)
    optionbox.appendChild(option3)
    optionbox.appendChild(option4)
    optionbox.setAttribute("class","grid optionbox")
    
    option1.setAttribute("type","button")
    option2.setAttribute("type","button")
    option3.setAttribute("type","button")
    option4.setAttribute("type","button")

    option1.setAttribute("id","userInput1")
    option2.setAttribute("id","userInput2")
    option3.setAttribute("id","userInput3")
    option4.setAttribute("id","userInput4")

    option1.setAttribute("value",options[a])
    a++;
    option2.setAttribute("value",options[a])
    a++;
    option3.setAttribute("value",options[a])
    a++;
    option4.setAttribute("value",options[a])
    a++;
    option1.setAttribute("onclick", "processInput1(); questions()")
    option2.setAttribute("onclick", "processInput2(); questions()")
    option3.setAttribute("onclick", "processInput3(); questions()")
    option4.setAttribute("onclick", "processInput4(); questions()")
    c++;
    if (c == 21) {
        cont.remove()
        let main = document.querySelector(".main")
        main.remove()
        scorecard()
    }
}
function scorecard() {
    let card = document.createElement("div")
    card.style.width = "50vw"
    card.style.height = "60vh"
    card.style.border = "2px solid black"
    card.style.borderRadius = "20px"
    card.style.padding = "10px"
    card.style.margin = "auto"
    card.style.marginTop = "50px"
    let text1 = document.createElement("div")
    text1.setAttribute("class", "txt1")
    let text2 = document.createElement("div")
    text2.setAttribute("class", "txt2")
    let text3 = document.createElement("div")
    text3.setAttribute("class", "txt3")
    let text4 = document.createElement("div")
    text4.setAttribute("class", "txt4")
    text1.innerText = "QUIZ COMPLETED"
    text4.innerText = "Thanks for taking the quiz"
    card.appendChild(text1)
    card.appendChild(text2)
    card.appendChild(text3)
    card.appendChild(text4)
    // card.appendChild(text3)
    text1.style.textAlign = "center"
    text2.style.textAlign = "center"
    text3.style.textAlign = "center"
    text4.style.textAlign = "center"
    card.style.backgroundColor = "#e8cee8"
    // text2.innerText = nameplayer + " 's score is " + points
    if(points > 15 )
    {
        text2.innerText = nameplayer+"'s score is "+points
        text3.innerText = "Congratulations! You did excellent"

    }
    else if(points > 10)
    {
        text2.innerText = nameplayer+"'s score is "+points
        text3.innerText = "Average"
    }
    else if(points >7 )
    {
        text2.innerText = nameplayer+"'s score is "+points
        text3.innerText = "You can do better!"
    }
    else{
        text2.innerText = nameplayer+"'s score is "+points
        text3.innerText = "Need to work hard"
    }
    let score = document.querySelector(".score")
    score.appendChild(card)
}



function processInput1() {
    let inputValue = document.getElementById("userInput1").value.trim();
    console.log(inputValue);

   let answer = ans[c-1].trim()
   console.log(answer);
   
    if (inputValue === answer) {
        points++
    }
 
    console.log(points);

    let outputDiv = document.getElementById("output")
    outputDiv.innerText = "Score: "+points

}
function processInput2() {
    var inputValue = document.getElementById("userInput2").value.trim();
    console.log(inputValue);

    let answer = ans[c-1].trim()
    console.log(answer);

    if (inputValue === answer) {
        points++
    }
    
    console.log(points);
    let outputDiv = document.getElementById("output")
    outputDiv.innerText = "Score: "+points
    
}
function processInput3() {
    var inputValue = document.getElementById("userInput3").value.trim();
    console.log(inputValue);

    let answer = ans[c-1].trim()
    console.log(answer);

    if (inputValue === answer) {
        points++
    }
    
    console.log(points);
    let outputDiv = document.getElementById("output")
    outputDiv.innerText = "Score: "+points

}
function processInput4() {
    var inputValue = document.getElementById("userInput4").value.trim();
    console.log(inputValue);

    let answer = ans[c-1].trim()
    console.log(answer);

    if (inputValue === answer) {
        points++
    }
    
    console.log(points);
    let outputDiv = document.getElementById("output")
    outputDiv.innerText = "Score: "+points
    
}