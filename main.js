let body = document.getElementsByTagName('body')[0]
let h1r = document.getElementsByTagName('h1')[0]
body.removeChild(h1r)
let header = document.createElement('h1')
header.innerText = 'Lab7 Assignment'
header.style.color = 'blue'
body.appendChild(header)
body.appendChild(document.createElement('hr'))
let task = document.createElement('h2')
task.innerText = 'Task'
task.style.color = 'red'
body.appendChild(task)
let p1 = document.createElement('p')
p1.innerHTML = 'In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:'
body.appendChild(p1)
let ul1 = document.createElement('ul')
let li1 = document.createElement('li')
li1.innerHTML = 'find elements in the DOM (<b>5 points</b>);'
li1.setAttribute('class','odd')
li1.style.color = 'green'
ul1.appendChild(li1)
let li2 = document.createElement('li')
li2.innerHTML = 'create/add/remove elements (<b>5 points</b>);'
li2.setAttribute('class','even')
li2.style.color = 'purple'
ul1.appendChild(li2)
let li3 = document.createElement('li')
li3.innerHTML = ' change content of the elements (<b>5 points</b>);'
li3.setAttribute('class','odd')
li3.style.color = 'green'
ul1.appendChild(li3)
let li4 = document.createElement('li')
li4.innerHTML = 'change styles of the elements (<b>5 points</b>);'
li4.setAttribute('class','even')
li4.style.color = 'purple'
ul1.appendChild(li4)
let li5 = document.createElement('li')
li5.innerHTML = 'change attributes of the elements (<b>5 points</b>);'
li5.setAttribute('class','odd')
li5.style.color = 'green'
ul1.appendChild(li5)
let li6 = document.createElement('li')
li6.innerHTML = 'change classes of the elements (<b>5 points</b>).'
li6.setAttribute('class','even')
li6.style.color = 'purple'
ul1.appendChild(li6)
body.appendChild(ul1)
body.appendChild(document.createElement('hr'))
let submit = document.createElement('h2')
submit.innerText = 'Submission'
submit.style.color = 'red'
body.appendChild(submit)
let p2 = document.createElement('p')
p2.innerHTML = 'To submit your work, follow these instructions:'
body.appendChild(p2)
let ul2 = document.createElement('ul')
let li21 = document.createElement('li')
li21.innerHTML = 'Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>).'
li21.setAttribute('class','even')
li21.style.color = 'green'
ul2.appendChild(li21)
let li22 = document.createElement('li')
li22.innerHTML = 'Clone this repository to your local machine and work inside it.'
li22.setAttribute('class','odd')
li22.style.color = 'purple'
ul2.appendChild(li22)
let li23 = document.createElement('li')
li23.innerHTML = 'Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with "Hello, World!" message (<b>1 point</b>).'
li23.setAttribute('class','even')
li23.style.color = 'green'
ul2.appendChild(li23)
let li24 = document.createElement('li')
li24.innerHTML = 'Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).'
li24.setAttribute('class','odd')
li24.style.color = 'purple'
ul2.appendChild(li24)
let li25 = document.createElement('li')
li25.innerHTML = 'Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).'
li25.setAttribute('class','even')
li25.style.color = 'green'
ul2.appendChild(li25)
let li26 = document.createElement('li')
li26.innerHTML = 'Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).'
li26.setAttribute('class','odd')
li26.style.color = 'purple'
ul2.appendChild(li26)
let li27 = document.createElement('li')
li27.innerHTML = 'After you finish your work, submit it to the Github (<b>2 points</b>).'
li27.setAttribute('class','even')
li27.style.color = 'green'
ul2.appendChild(li27)
body.appendChild(ul2)
body.appendChild(document.createElement('hr'))
