function go() {
  let rand1 = Math.floor(Math.random() * books.length);
  console.log(rand1)
  document.getElementById('bookDisplay').innerHTML = books[rand1];

 	let randNums = Math.floor(Math.random() * beer.length);
  document.getElementById('beerDisplay').innerHTML = beer[randNums];
}





//quote array
var books = ["A Random walk down wallstreet by Burton G. Malkiel","12 Rules to Life by Jordan Peterson","A clockwork Orange by Anthony Burgess","Air Traffic by Gregory Pardlo","At the Existentialist Cafe by Sarah Bakewell", "Can't Hurt Me by David Goggins","Capital Gaines by Chip Gaines","Chronicles vol. 1 by Bob Dylan","Crime and Punishment by Fydor Dostoevsky","Exile and the Kingdom by Albert Camus","Extreme Ownership by Jocko Wilink & leif Babin","Flow by Mihaly Csikszentmihalyi","Leaders Eat last by Simon Sinek","Man's search for meaning by Viktor E. Frankl","Mere Christianity By C.S Lewis","Naked Economics by Charles Wheelan","Resilience by Eric Greitens","Siddhartha by Herman Hesse","Slaughterhouse Five by Kurt Vonnegut","The Alchemist by Paulo Coelho","The Common Good by Robert B. Reich", "The Defining Decade by Meg Jay","The Fall by Albert Camus","The Godfather by Mario Puzo","The Liberator by Alex Kershaw","The Longest Winter by Alex Kershaw","The Myth Of Sisyphus by Albert Camus","The Road to Character by David Brooks","The Stranger by Albert Camus","The Sun Also Rises by Ernest Hemmingway","Theodore Roosevelt for the Defense by Dan Abrams","Why Bob Dylan Matters by Richard F. Thomas","Wild at Heart by John Eldredge","Church of Spies by Mark Reibling", "Siren of Titans by Kurt Vonnegut","Young Washington by Peter Stark","Turning Pro by Steven Pressdfield","Discipline Equals Freedom by Jocko Wilink","The Magnolia Story by Joanna and Chip Gaines","I Love Capitalism by Ken Langone","The River of Doubt by Candice Milliard","Silence by Shusaku Endo", "Chasing Ali by Johnathan Eig","Outliers by Malcom Gladwell","Grant by Ron Chernow","Born To Run by Christopher Mcdougall","Natural Born Heroes by Christopher Mcdougall"];

var beer = ["sapparo","asahi","miller lite","yuengling","coors light", "miller-hi life","budweiser","pabst blue ribbon","busch","heineken","corona","coors banquet","modelo negra","bud light","tecate","guinness","blue moon","stella artois","modelo especial","orion","sam adams"];

