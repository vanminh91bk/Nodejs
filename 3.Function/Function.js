function say(word){
	console.log(word);
}

function execute(f, word){
	f(word);
}

execute(say, "Hello");