//Variables

var name = 'Mark Blizzard';
var upper = name.toUpperCase()
    console.log(upper)

var field = 'Student at IABHam';
    console.log(field)

var aboutMe = 'I am a 24 year old male whom recently took interest into coding';
    console.log(aboutMe)

//Arrays    

var jobs = [
    {title:  'Front Service Clerk',
    comp: 'Publix',
    desc: 'Assist customers, Bag groceries, Clean, Gather carts'
},
    {title: 'Game Advisor',
    comp: 'Gamestop',
    desc: 'Recommend and Sell games to customers, Stock games alphabetically, Operate register, Clean'
},
    {title: 'Assembly Worker',
    comp: 'Merck',
    desc: 'Pack product, Maintain quality, Stack boxes for shipping'
},
    {title: 'Kennel Tech',
    comp: 'AVAC',
    desc: 'Feed and Water animals, Walk and Play with animals, Clean after animals and Bathe them, Setup for boarding and retrieve animals for customers'
},
    {title: 'Machine Operator',
    comp: 'King Nut',
    desc: 'Operate Machine, Pack product, Stack product for shipping, Maintain paperwork for Quality Assurance, Assemble and Dissasemble for thourough cleaning and product change'
}
];
    console.log(jobs)

var interests = [
    {interest: 'Gaming'
},
    {interest: 'Coding'
},
    {interest: 'Anime'
},
    {interest: 'Music'
},
    {interest: 'Movies'
},
    {interest: 'Food'
}
];
    console.log(interests)

var skills = [
    {skill: 'Piano'
},
    {skill: 'HTML'
},
    {skill: 'CSS'
},
    {skill: 'JavaScript'
},
    {skill: 'Gaming'
}
];
    console.log(skills)

//Functions and Loops
function displayPosition(jobs) {
    console.log(' * ' + title + ' at ' + comp + ' : ' + desc);
    
    for (let i = 0; i < jobs.length; i++) {
        let job = jobs[i]
        console.log(job)

    displayPosition(job)
    }
}
function displaySkill(skills, BAM) {
    console.log(' * ' + skills)
    if (BAM = true) {
        console.log(' * ' + 'BAM:' + skills)
        for(let i = 0; i < skills.length; i++) {
            let skill = skills[i]
            console.log(skill)

        displaySkill(skill, BAM)
        }
    }
}
