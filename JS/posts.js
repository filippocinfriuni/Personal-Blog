//var website = "http://www.curiositynottherover.com" //Hosting website
const postDirectory = "Posts" // Directory of Posts


// Post to Publish 'Milestoning', 'Prepare in Advance'
const postToP = [   
];
// Date when I will pubblish them
const datesToP = [   
];

// Post Published
const post = [  'A Brief Note on Curiosity',
                'An Antilibrary',
                'Which Are My Core Values?',
                'Passion From Jony Ive',
                'How Writing Helps Me Think'
];
// Array of Posts Teaser
const postTeasers = [
                'Some of my notes on the desire of learning',
                'Having an antilibrary is a daily reminder that you still have to learn, you’re not finished and you have not learned everything',
                'The first question was: “Which are my core values?”. I feel like I have some values but it is curious to see how you are perceived from the outside',
                'Jony Ive does quite a few interesting things to express his passion, I analyze the ones I find most interesting',
                'writing down ideas helps me with the thinking process'
];
// Link of each post.
const linkToPosts = [
                'briefNoteOnCuriosity.html',
                'antilibraryArticle.html',
                'whichAreMyCoreValues.html',
                'passionFromJonyIve.html',
                'howWritingHelpsMeThink.html'
];

// Constructing the cards
var text = '';
var j = 0
for (j = 0; j < postToP.length; j++) {
    text += 
    '<div class="card"><h4><b>' + postToP[j] + '</b></h4><p>' +
    '</p><a class="read-link"> Coming ' + datesToP + '</a></div> '
}
for (j = 0; j < post.length; j++) {
    text += 
    '<div class="card"><h4><b>' + post[j] + '</b></h4><p>' +
    postTeasers[j] + "<br>" + '</p><a class="read-link" href=' + website + "/" + postDirectory + "/" + linkToPosts[j] + ' target="_blank">read <i class="bi bi-arrow-right-short" fill="currentColor"></i></a></div>'
}
document.getElementById("postscards").innerHTML = text;