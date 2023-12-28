const wordCategories = {
    colors: [
        'red',
        'blue',
        'green',
        'yellow',
        'orange',
        'purple',
        'pink',
        'brown',
        'black',
        'white',
        'gray',
        'silver',
        'gold',
        'teal',
        'cyan',
        'magenta',
        'maroon',
        'navy',
        'olive',
        'beige'
    ],
    cities: [
        'New York',
        'Paris',
        'Tokyo',
        'London',
        'Sydney',
        'Dubai',
        'Mumbai',
        'Rome',
        'Moscow',
        'Beijing',
        'Berlin',
        'Toronto',
        'Barcelona',
        'Cairo',
        'Seoul',
        'Rio de Janeiro',
        'Amsterdam',
        'Bangkok',
        'Istanbul',
        'Vienna'
    ],
    animals: [
        'dog',
        'cat',
        'elephant',
        'lion',
        'tiger',
        'zebra',
        'giraffe',
        'hippopotamus',
        'kangaroo',
        'koala',
        'panda',
        'bear',
        'fox',
        'wolf',
        'rabbit',
        'monkey',
        'rhinoceros',
        'deer',
        'buffalo',
        'camel'
    ],
    fruits: [
        'apple',
        'banana',
        'orange',
        'grapes',
        'strawberry',
        'watermelon',
        'pineapple',
        'kiwi',
        'mango',
        'papaya',
        'peach',
        'pear',
        'plum',
        'raspberry',
        'blueberry',
        'blackberry',
        'cherry',
        'coconut',
        'fig',
        'lemon'
    ],
    countries: [
        'USA',
        'Canada',
        'Brazil',
        'China',
        'India',
        'Russia',
        'Australia',
        'South Africa',
        'Germany',
        'France',
        'Italy',
        'Spain',
        'Mexico',
        'Argentina',
        'Egypt',
        'Japan',
        'South Korea',
        'Thailand',
        'Turkey',
        'Greece'
    ],
    professions: [
        'doctor',
        'teacher',
        'engineer',
        'chef',
        'artist',
        'lawyer',
        'scientist',
        'musician',
        'writer',
        'firefighter',
        'pilot',
        'athlete',
        'plumber',
        'dentist',
        'architect',
        'police officer',
        'veterinarian',
        'electrician',
        'mechanic',
        'psychologist'
    ],
    emotions: [
        'happy',
        'sad',
        'angry',
        'surprised',
        'excited',
        'afraid',
        'confused',
        'proud',
        'embarrassed',
        'disgusted',
        'jealous',
        'hopeful',
        'content',
        'nervous',
        'guilty',
        'lonely',
        'grateful',
        'nostalgic',
        'relieved',
        'amused'
    ],
    languages: [
        'English',
        'Spanish',
        'French',
        'Mandarin',
        'Arabic',
        'Hindi',
        'Bengali',
        'Portuguese',
        'Russian',
        'Japanese',
        'German',
        'Korean',
        'Turkish',
        'Italian',
        'Dutch',
        'Polish',
        'Vietnamese',
        'Thai',
        'Indonesian',
        'Greek'
    ],
    flowers: [
        'rose',
        'sunflower',
        'tulip',
        'daisy',
        'lily',
        'orchid',
        'carnation',
        'daffodil',
        'peonies',
        'hydrangea',
        'chrysanthemum',
        'hibiscus',
        'bluebell',
        'cosmos',
        'lavender',
        'marigold',
        'snapdragon',
        'aster',
        'freesia',
        'poppy'
    ],
    movies: [
        'The Shawshank Redemption',
        'The Godfather',
        'The Dark Knight',
        'Pulp Fiction',
        'Forrest Gump',
        'The Matrix',
        'Goodfellas',
        'Schindler\'s List',
        'Fight Club',
        'Inception',
        'The Lord of the Rings',
        'The Silence of the Lambs',
        'The Lion King',
        'Gladiator',
        'Braveheart',
        'The Green Mile',
        'The Avengers',
        'The Departed',
        'Interstellar',
        'The Prestige'
    ],
    books: [
        'To Kill a Mockingbird',
        '1984',
        'The Great Gatsby',
        'The Catcher in the Rye',
        'Harry Potter and the Philosopher\'s Stone',
        'Pride and Prejudice',
        'The Hobbit',
        'The Da Vinci Code',
        'The Alchemist',
        'The Lord of the Rings',
        'Animal Farm',
        'The Hunger Games',
        'The Little Prince',
        'Brave New World',
        'The Notebook',
        'Gone with the Wind',
        'The Kite Runner',
        'The Shining',
        'Wuthering Heights',
        'Dracula'
    ],
    landmarks: [
        'Eiffel Tower',
        'Statue of Liberty',
        'Great Wall of China',
        'Taj Mahal',
        'Pyramids of Giza',
        'Stonehenge',
        'Colosseum',
        'Machu Picchu',
        'Petra',
        'Sydney Opera House',
        'Santorini',
        'Mount Rushmore',
        'Niagara Falls',
        'Victoria Falls',
        'Mount Everest',
        'Grand Canyon',
        'Angkor Wat',
        'The Parthenon',
        'Mount Fuji',
        'Golden Gate Bridge'
    ],
    desserts: [
        'cake',
        'ice cream',
        'chocolate',
        'cookies',
        'pie',
        'pudding',
        'macarons',
        'brownies',
        'cheesecake',
        'donuts',
        'candy',
        'pastries',
        'tiramisu',
        'frozen yogurt',
        'pancakes',
        'muffins',
        'caramel',
        'jelly',
        'sorbet',
        'trifle'
    ],
    bodyParts: [
        'head',
        'eyes',
        'nose',
        'mouth',
        'ears',
        'hair',
        'face',
        'neck',
        'shoulders',
        'arms',
        'elbows',
        'wrists',
        'hands',
        'fingers',
        'chest',
        'back',
        'waist',
        'hips',
        'legs',
        'knees'
    ],
    vegetables: [
        'carrot',
        'broccoli',
        'tomato',
        'cucumber',
        'potato',
        'onion',
        'garlic',
        'lettuce',
        'spinach',
        'pepper',
        'cabbage',
        'pumpkin',
        'zucchini',
        'celery',
        'beetroot',
        'radish',
        'eggplant',
        'corn',
        'asparagus',
        'green beans'
    ],
    oceans: [
        'Pacific',
        'Atlantic',
        'Indian',
        'Southern',
        'Arctic',
        'Antarctic',
        'Caribbean',
        'Mediterranean',
        'Gulf of Mexico',
        'Bering',
        'Andaman',
        'Timor',
        'Coral Sea',
        'Baltic',
        'North Sea',
        'Red Sea',
        'Black Sea',
        'Adriatic',
        'Sargasso',
        'Tyrrhenian'
    ],
    drinks: [
        'coffee',
        'tea',
        'water',
        'juice',
        'soda',
        'wine',
        'beer',
        'cocktail',
        'vodka',
        'whiskey',
        'rum',
        'gin',
        'tequila',
        'champagne',
        'smoothie',
        'lemonade',
        'milkshake',
        'cider',
        'iced tea',
        'hot chocolate'
    ],
    hobbies: [
        'painting',
        'photography',
        'cooking',
        'gardening',
        'writing',
        'reading',
        'dancing',
        'singing',
        'knitting',
        'crocheting',
        'sculpting',
        'woodworking',
        'drawing',
        'sewing',
        'fishing',
        'hiking',
        'camping',
        'surfing',
        'birdwatching',
        'yoga'
    ],
    tools: [
        'hammer',
        'screwdriver',
        'pliers',
        'wrench',
        'saw',
        'drill',
        'tape measure',
        'level',
        'chisel',
        'hacksaw',
        'file',
        'sander',
        'ladder',
        'axe',
        'sickle',
        'trowel',
        'wheelbarrow',
        'pliers',
        'crowbar',
        'clamp'
    ],
    jobs: [
        'doctor',
        'teacher',
        'engineer',
        'chef',
        'artist',
        'lawyer',
        'scientist',
        'musician',
        'writer',
        'firefighter',
        'pilot',
        'athlete',
        'plumber',
        'dentist',
        'architect',
        'police officer',
        'veterinarian',
        'electrician',
        'mechanic',
        'psychologist'
    ],
    elements: [
        'hydrogen',
        'oxygen',
        'carbon',
        'nitrogen',
        'helium',
        'sodium',
        'chlorine',
        'magnesium',
        'potassium',
        'calcium',
        'iron',
        'zinc',
        'copper',
        'gold',
        'silver',
        'platinum',
        'tin',
        'lead',
        'mercury',
        'uranium'
    ],
    shapes: [
        'circle',
        'square',
        'triangle',
        'rectangle',
        'pentagon',
        'hexagon',
        'octagon',
        'sphere',
        'cube',
        'cylinder',
        'cone',
        'pyramid',
        'dodecahedron',
        'torus',
        'ellipse',
        'parallelogram',
        'trapezoid',
        'rhombus',
        'arrow',
        'heart'
    ],
    sports: [
        'football',
        'basketball',
        'tennis',
        'soccer',
        'baseball',
        'volleyball',
        'golf',
        'cricket',
        'rugby',
        'hockey',
        'swimming',
        'cycling',
        'boxing',
        'skiing',
        'snowboarding',
        'surfing',
        'wrestling',
        'gymnastics',
        'badminton',
        'table tennis'
    ],
    vehicles: [
        'car',
        'bus',
        'truck',
        'motorcycle',
        'bicycle',
        'train',
        'boat',
        'airplane',
        'helicopter',
        'subway',
        'tractor',
        'scooter',
        'van',
        'ferry',
        'jet',
        'yacht',
        'cruise ship',
        'spaceship',
        'segway',
        'skateboard'
    ],
    insects: [
        'ant',
        'bee',
        'butterfly',
        'mosquito',
        'dragonfly',
        'beetle',
        'grasshopper',
        'moth',
        'ladybug',
        'caterpillar',
        'wasp',
        'fly',
        'spider',
        'termite',
        'cricket',
        'cockroach',
        'firefly',
        'flea',
        'aphid',
        'mantid'
    ]
};

function getRandomCategory() {
    const categories = Object.keys(wordCategories);
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
}

function getRandomWordFromCategory(category) {
    const items = wordCategories[category];
    if (items && items.length > 0) {
        const randomIndex = Math.floor(Math.random() * items.length);
        return items[randomIndex];
    } else {
        return 'No items found in this category';
    }
}

var randomCategory = getRandomCategory()
var ranWordFromCategory = getRandomWordFromCategory(randomCategory)
var ranWord = ranWordFromCategory.toUpperCase()
var highScore
var wordLength = ranWord.length
let letterNum = 1
var lineIDS = "Letter" + letterNum
var lives = 6
var letterFound = false
var underlinesChanged = 0
var buttonLetter
var image = document.getElementById("image")
var score = 0

if (localStorage.getItem('HighScore') === null) {
    highScore = 0
    localStorage.setItem('HighScore', highScore)
} else {
    highScore = localStorage.getItem('HighScore')
    document.getElementById('highScore').innerHTML = 'Highscore: ' + highScore
}


console.log(localStorage)

document.getElementById("catagory").innerHTML = "Catagory: " + randomCategory

console.log(randomCategory)
console.log(ranWord)

let i = 0;
while (i < wordLength) {
    var underlineTag = document.createElement("label")
    var underlines = document.createTextNode("_ ")
    underlineTag.appendChild(underlines)

    underlineTag.setAttribute("id", lineIDS)
    letterNum = letterNum + 1
    lineIDS = "Letter" + letterNum

    const element = document.getElementById("lineContainer")
    element.appendChild(underlineTag)

    i++
}

let charNum = 0
i = 0;
while (i < wordLength) {

    if (ranWord.charAt(charNum) === ' ') {
        document.getElementById("Letter" + (charNum + 1)).innerHTML = ' '
        underlinesChanged = underlinesChanged + 1
    }

    charNum = charNum + 1

    i++
}

document.querySelectorAll("button").forEach(item => {
    item.addEventListener('click', event => {

        buttonLetter = event.target.innerHTML

        let charNum = 0
        let i = 0;
        while (i < wordLength) {

            if (ranWord.charAt(charNum) === buttonLetter) {
                document.getElementById("Letter" + (charNum + 1)).innerHTML = buttonLetter
                letterFound = true
                underlinesChanged = underlinesChanged + 1
            }

            charNum = charNum + 1

            i++
        }

        if (letterFound === false) {
            lives = lives - 1

            if (lives === 5) {
                image.src = "Images/Head.png"
            }
            else if (lives === 4) {
                image.src = "Images/Body.png"
            }
            else if (lives === 3) {
                image.src = "Images/leftLeg.png"
            }
            else if (lives === 2) {
                image.src = "Images/rightLeg.png"
            }
            else if (lives === 1) {
                image.src = "Images/leftArm.png"
            }
            else if (lives === 0) {
                image.src = "Images/rightArm.png"

                charNum = 0
                score = 0
                document.getElementById("score").innerHTML = "Score: " + score

                let i = 0;
                while (i < wordLength) {

                    document.getElementById("Letter" + (charNum + 1)).innerHTML = ranWord.charAt(charNum)
                    charNum = charNum + 1

                    i++
                }

                document.getElementById("title").innerHTML = "Wrong"

                setTimeout(() => { restart(); }, 2000)

            }
        }

        if (underlinesChanged === wordLength) {
            document.getElementById("title").innerHTML = "Correct"
            score = score + 1
            document.getElementById("score").innerHTML = "Score: " + score
            setTimeout(() => { restart(); }, 2000)

            if (score > highScore) {
                document.getElementById('highScore').innerHTML = 'Highscore: ' + score
                highScore = score
                localStorage.setItem('HighScore', highScore)
            }
        }

        document.getElementById(buttonLetter + "btns").style.visibility = 'hidden'

        letterFound = false


    })
})

function restart() {
    document.getElementById("title").innerHTML = "Hangman"

    charNum = 0
    let i = 0;
    while (i < wordLength) {

        document.getElementById("Letter" + (charNum + 1)).remove()
        charNum = charNum + 1

        i++
    }

    randomCategory = getRandomCategory()
    ranWordFromCategory = getRandomWordFromCategory(randomCategory)
    ranWord = ranWordFromCategory.toUpperCase()
    wordLength = ranWord.length
    lives = 6
    underlinesChanged = 0
    image.src = "Images/Stickman.png"
    charNum = 0
    document.getElementById("catagory").innerHTML = "Catagory: " + randomCategory

    console.log(randomCategory)
    console.log(ranWord)

    i = 0;
    while (i < wordLength) {
        var underlineTag = document.createElement("label")
        var underlines = document.createTextNode("_ ")
        underlineTag.appendChild(underlines)

        charNum = charNum + 1
        lineIDS = "Letter" + charNum
        underlineTag.setAttribute("id", lineIDS)

        const element = document.getElementById("lineContainer")
        element.appendChild(underlineTag)

        i++
    }

    charNum = 0
    i = 0;
    while (i < wordLength) {

        if (ranWord.charAt(charNum) === ' ') {
            document.getElementById("Letter" + (charNum + 1)).innerHTML = ' '
            underlinesChanged = underlinesChanged + 1
        }

        charNum = charNum + 1

        i++
    }


    document.getElementById('Abtns').style.visibility = 'visible'
    document.getElementById('Bbtns').style.visibility = 'visible'
    document.getElementById('Cbtns').style.visibility = 'visible'
    document.getElementById('Dbtns').style.visibility = 'visible'
    document.getElementById('Ebtns').style.visibility = 'visible'
    document.getElementById('Fbtns').style.visibility = 'visible'
    document.getElementById('Gbtns').style.visibility = 'visible'
    document.getElementById('Hbtns').style.visibility = 'visible'
    document.getElementById('Ibtns').style.visibility = 'visible'
    document.getElementById('Jbtns').style.visibility = 'visible'
    document.getElementById('Kbtns').style.visibility = 'visible'
    document.getElementById('Lbtns').style.visibility = 'visible'
    document.getElementById('Mbtns').style.visibility = 'visible'
    document.getElementById('Nbtns').style.visibility = 'visible'
    document.getElementById('Obtns').style.visibility = 'visible'
    document.getElementById('Pbtns').style.visibility = 'visible'
    document.getElementById('Qbtns').style.visibility = 'visible'
    document.getElementById('Rbtns').style.visibility = 'visible'
    document.getElementById('Sbtns').style.visibility = 'visible'
    document.getElementById('Tbtns').style.visibility = 'visible'
    document.getElementById('Ubtns').style.visibility = 'visible'
    document.getElementById('Vbtns').style.visibility = 'visible'
    document.getElementById('Wbtns').style.visibility = 'visible'
    document.getElementById('Xbtns').style.visibility = 'visible'
    document.getElementById('Ybtns').style.visibility = 'visible'
    document.getElementById('Zbtns').style.visibility = 'visible'

}

