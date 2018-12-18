var listOfDivs = document.getElementsByTagName("div");
console.log(`There are ${listOfDivs.length} <div> tags in the HTML document of this webpage.`);
// for (let i in listOfDivs) {
//    console.log(`This <div> element includes:\n\n----------\n${listOfDivs[i].innerText}`)
//};
var navigationLinks = ['About Me', 'Contact Me', 'References', 'Brand1'];

// // create a new element
// var newParElement = document.createElement("h4");
// // give the new element attribute
// newParElement.setAttribute('class', 'practice');
// // create a new text node
// var newText = document.createTextNode("This is text for a new paragraph created using JavaScript.");
// // add the new text node to the created element
// newParElement.appendChild(newText);
// // target a node
// var targetParent = document.getElementsByClassName('content')[0];
// // add the created element to the target element
// targetParent.appendChild(newParElement);

console.log(`${window.innerWidth}px x ${window.innerHeight}px`)
console.log(`${window.outerWidth}px x ${window.outerHeight}px`)

const listOfIds = ['focus', 'intro', 'intro-title', 'navigation', 'content', 'content-title',
    'content-material'
]

let n = 0
let z = 0
let clicks = 0
const contentDiv = document.querySelector(".content");

contentDiv.onclick = () => {
    clicks++
    swal({
        icon: "success",
        title: "Congrats!!!",
        text: `You clicked a <div>\nwith a class called content"\n${clicks} times.`,
        button: false
    })
}

// random number generator
const randomNum = (number) => {
    return Math.floor(Math.random() * number)
}
// Welcome the user to the portfolio
const portfolioWelcome = () => {
    swal({
        // timer: 10000,
        button: false,
        title: "WELCOME",
        text: "Welcome and Thank you for coming\nto the Portfolio site of:\n\nGARY LEMON JR\n\nEnjoy looking around and finding out more about me."
    })
}
const materialToHTML = (str) => {
    materialArr = str.split(`\n\n`)
    for (let i in materialArr) {
        materialArr[i] = `<p>${materialArr[i]}</p>`
        if (i < (materialArr.length)) {
            materialArr[i] = `${materialArr[i]}<br>`
        }
    }
    return materialArr.join('')
}

const aboutMe = {
    title: 'About Me',
    material: `A bit about myself: I'm a dreamer. But for far too long, that's all that I was. Recently, I've decided that I want to change things for myself. To do that, I'd began making alterations to my life that will get me closer to turning my dreams into my reality.
    \n\n
    I've decided to embark on this plan of action by challenging myself to apply maximum effort to every pursuit in life I have ever simply "just thought about." In doing so, I've chosen embrace my passion for problem solving and and love of technology into a dive into the career field of software development.
    \n\n
    I love seeking and obtaining an understanding about how things work. The world is made up of and endless amount of knowledge about things. Things each with their own level of sophistication that require just enough intrigue and a lot of studying to understand.
    \n\n
    Couple that with my willingness to solve such mysteries and an affinity for technology and the reaches the the digital age has allowed us to envision and that's led me hear: becoming a Full Stack Web Developer.`
}
const contactMe = {
    title: 'Contact Me',
    material: `
    <strong>email:</strong> glemonjr68@gmail.com
    \n\n
    <strong>phone:</strong> (404)914-7067
    \n\n
    <strong>linkedIn:</strong><a href="https://www.linkedin.com/in/garylemonjr/">  ../garylemonjr</a>
    `
}
const projects = {
    title: 'Projects',
    material: `...coming soon...
    \n\n
    check out my <a href='https://github.com/LeGa14'>Github</a>.`
}
const brandStatement = {
    title: 'My Brand',
    material: `There isn't anything you can't learn.
    \n\n
    My mind approaches problems with a creative intricacy that induce a level of unmatched devotion. I'm attracted to any opportunity that has the potential for self-improvement and an opportunity to learn and grow.`
}

$(document).ready(portfolioWelcome())

// Fade IN the Content section
const introDiv = document.querySelector("h1")
const imgOfMe = document.querySelector("img")

const $introPic = $('.intro img')
$introPic.on('click', function () {
    $('.navigation h4:even').css('color', `rgb(${randomNum(255)}, ${randomNum(255)}, ${randomNum(255)})`)
    $('.navigation h4:odd').css('color', `rgb(${randomNum(255)}, ${randomNum(255)}, ${randomNum(255)})`)
    console.log(`The color of even navigation's <h4> tags are now ${$('.navigation h4:even').css('color')}\nThe color of odd navigation's <h4> tags are now ${$('.navigation h4:odd').css('color')}`)
})

$(".navigation").click(function (event) {
    const clicked = event.target.innerHTML
    // console.log(`clicked: ${clicked}`)
    $('.content-title').html(clicked)
    // $('.content-material').html("clicked")
    switch (clicked) {
        case 'About Me':
            $('.content-material').html(`${materialToHTML(aboutMe.material)}`)
            break
        case 'Contact Me':
            $('.content-material').html(`${materialToHTML(contactMe.material)}`)
            break
        case 'Brand':
            $('.content-material').html(`${materialToHTML(brandStatement.material)}`)
            break
        case 'Projects':
            $('.content-material').html(`${materialToHTML(projects.material)}`)
            break
    }
})

// changing CONTENT
// click H4 in Navigation div
// read H4 text
//