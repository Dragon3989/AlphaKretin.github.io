var words = ["able", "about", "above", "accept", "across", "act", "actually", "add", "admit", "afraid", "after", "afternoon", "again", "against", "age", "ago", "agree", "ahead", "air", "all", "allow", "almost", "alone", "along", "already", "alright", "also", "although", "always", "amaze", "and", "anger", "angry", "animal", "annoy", "another", "answer", "any", "anymore", "anyone", "anything", "anyway", "apartment", "apparently", "appear", "approach", "are", "area", "aren't", "arm", "around", "arrive", "ask", "asleep", "ass", "attack", "attempt", "attention", "aunt", "avoid", "away", "baby", "back", "bad", "bag", "ball", "band", "bar", "barely", "bathroom", "beat", "beautiful", "became", "because", "become", "bed", "bedroom", "been", "before", "began", "begin", "behind", "believe", "bell", "beside", "besides", "best", "better", "between", "big", "bit", "bite", "black", "blink", "block", "blonde", "blood", "blue", "blush", "body", "book", "bore", "both", "bother", "bottle", "bottom", "box", "boy", "boyfriend", "brain", "break", "breakfast", "breath", "breathe", "bright", "bring", "broke", "broken", "brother", "brought", "brown", "brush", "build", "burn", "burst", "bus", "business", "busy", "but", "buy", "call", "calm", "came", "can", "can't", "car", "card", "care", "carefully", "carry", "case", "cat", "catch", "caught", "cause", "cell", "chair", "chance", "change", "chase", "check", "cheek", "chest", "child", "children", "chuckle", "city", "class", "clean", "clear", "climb", "close", "clothes", "coffee", "cold", "college", "color", "come", "comment", "complete", "completely", "computer", "concern", "confuse", "consider", "continue", "control", "conversation", "cool", "corner", "couch", "could", "couldn't", "counter", "couple", "course", "cover", "crack", "crazy", "cross", "crowd", "cry", "cup", "cut", "cute", "dad", "damn", "dance", "dark", "date", "daughter", "day", "dead", "deal", "dear", "death", "decide", "deep", "definitely", "desk", "did", "didn't", "die", "different", "dinner", "direction", "disappear", "doctor", "does", "doesn't", "dog", "don't", "done", "door", "doubt", "down", "drag", "draw", "dream", "dress", "drink", "drive", "drop", "drove", "dry", "during", "each", "ear", "early", "easily", "easy", "eat", "edge", "either", "else", "empty", "end", "enjoy", "enough", "enter", "entire", "escape", "especially", "even", "evening", "eventually", "ever", "every", "everyone", "everything", "exactly", "except", "excite", "exclaim", "excuse", "expect", "explain", "expression", "eye", "eyebrow", "face", "fact", "fall", "family", "far", "fast", "father", "fault", "favorite", "fear", "feel", "feet", "fell", "felt", "few", "field", "fight", "figure", "fill", "finally", "find", "fine", "finger", "finish", "fire", "first", "fit", "five", "fix", "flash", "flip", "floor", "fly", "focus", "follow", "food", "foot", "for", "force", "forget", "form", "forward", "found", "four", "free", "friend", "from", "front", "frown", "fuck", "full", "fun", "funny", "further", "game", "gasp", "gave", "gaze", "gently", "get", "giggle", "girl", "girlfriend", "give", "given", "glad", "glance", "glare", "glass", "God", "gone", "gonna", "good", "got", "gotten", "grab", "great", "green", "greet", "grey", "grin", "grip", "groan", "ground", "group", "grow", "guard", "guess", "gun", "guy", "had", "hadn't", "hair", "half", "hall", "hallway", "hand", "handle", "hang", "happen", "happy", "hard", "has", "hate", "have", "haven't", "he'd", "he's", "head", "hear", "heard", "heart", "heavy", "held", "hell", "hello", "help", "her", "here", "herself", "hey", "hide", "high", "him", "himself", "his", "hit", "hold", "home", "hope", "horse", "hospital", "hot", "hour", "house", "how", "however", "hug", "huge", "huh", "human", "hundred", "hung", "hurry", "hurt", "ice", "idea", "ignore", "imagine", "immediately", "important", "inside", "instead", "interest", "interrupt", "into", "isn't", "it's", "its", "jacket", "jeans", "jerk", "job", "join", "joke", "jump", "just", "keep", "kept", "key", "kick", "kid", "kill", "kind", "kiss", "kitchen", "knee", "knew", "knock", "know", "known", "lady", "land", "large", "last", "late", "laugh", "lay", "lead", "lean", "learn", "least", "leave", "led", "left", "leg", "less", "let", "letter", "lie", "life", "lift", "light", "like", "line", "lip", "listen", "little", "live", "lock", "locker", "long", "look", "lose", "lost", "lot", "loud", "love", "low", "lunch", "mad", "made", "make", "man", "manage", "many", "mark", "marry", "match", "matter", "may", "maybe", "mean", "meant", "meet", "memory", "men", "mention", "met", "middle", "might", "mind", "mine", "minute", "mirror", "miss", "mom", "moment", "money", "month", "mood", "more", "morning", "most", "mother", "mouth", "move", "movie", "Mr.", "Mrs.", "much", "mum", "mumble", "music", "must", "mutter", "myself", "name", "near", "nearly", "neck", "need", "nervous", "never", "new", "next", "nice", "night", "nod", "noise", "none", "normal", "nose", "not", "note", "nothing", "notice", "now", "number", "obviously", "off", "offer", "office", "often", "okay", "old", "once", "one", "only", "onto", "open", "order", "other", "our", "out", "outside", "over", "own", "pack", "pain", "paint", "pair", "pants", "paper", "parents", "park", "part", "party", "pass", "past", "pause", "pay", "people", "perfect", "perhaps", "person", "phone", "pick", "picture", "piece", "pink", "piss", "place", "plan", "play", "please", "pocket", "point", "police", "pop", "position", "possible", "power", "practically", "present", "press", "pretend", "pretty", "probably", "problem", "promise", "pull", "punch", "push", "put", "question", "quick", "quickly", "quiet", "quietly", "quite", "race", "rain", "raise", "ran", "rang", "rather", "reach", "read", "ready", "real", "realize", "really", "reason", "recognize", "red", "relationship", "relax", "remain", "remember", "remind", "repeat", "reply", "respond", "rest", "return", "ride", "right", "ring", "road", "rock", "roll", "room", "rose", "round", "rub", "run", "rush", "sad", "safe", "said", "same", "sat", "save", "saw", "say", "scare", "school", "scream", "search", "seat", "second", "see", "seem", "seen", "self", "send", "sense", "sent", "serious", "seriously", "set", "settle", "seven", "several", "shadow", "shake", "share", "she", "she'd", "she's", "shift", "shirt", "shit", "shock", "shoe", "shook", "shop", "short", "shot", "should", "shoulder", "shouldn't", "shout", "shove", "show", "shower", "shrug", "shut", "sick", "side", "sigh", "sight", "sign", "silence", "silent", "simply", "since", "single", "sir", "sister", "sit", "situation", "six", "skin", "sky", "slam", "sleep", "slightly", "slip", "slow", "slowly", "small", "smell", "smile", "smirk", "smoke", "snap", "soft", "softly", "some", "somehow", "someone", "something", "sometimes", "somewhere", "son", "song", "soon", "sorry", "sort", "sound", "space", "speak", "spend", "spent", "spoke", "spot", "stair", "stand", "star", "stare", "start", "state", "stay", "step", "stick", "still", "stomach", "stood", "stop", "store", "story", "straight", "strange", "street", "strong", "struggle", "stuck", "student", "study", "stuff", "stupid", "such", "suck", "sudden", "suddenly", "suggest", "summer", "sun", "suppose", "sure", "surprise", "surround", "sweet", "table", "take", "taken", "talk", "tall", "teacher", "team", "tear", "teeth", "tell", "ten", "than", "thank", "that", "that's", "the", "their", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they're", "thick", "thing", "think", "third", "this", "those", "though", "thought", "three", "threw", "throat", "through", "throw", "tie", "tight", "time", "tiny", "tire", "today", "together", "told", "tomorrow", "tone", "tongue", "tonight", "too", "took", "top", "totally", "touch", "toward", "town", "track", "trail", "train", "tree", "trip", "trouble", "trust", "truth", "try", "turn", "twenty", "two", "type", "uncle", "under", "understand", "until", "upon", "use", "usual", "usually", "very", "visit", "voice", "wait", "wake", "walk", "wall", "want", "warm", "warn", "was", "wasn't", "watch", "water", "wave", "way", "we'll", "we're", "we've", "wear", "week", "weird", "well", "went", "were", "weren't", "wet", "what", "what's", "whatever", "when", "where", "whether", "which", "while", "whisper", "white", "who", "whole", "why", "wide", "wife", "will", "wind", "window", "wipe", "wish", "with", "within", "without", "woke", "woman", "women", "won't", "wonder", "wood", "word", "wore", "work", "world", "worry", "worse", "would", "wouldn't", "wow", "wrap", "write", "wrong", "yeah", "year", "yell", "yes", "yet", "you", "you'd", "you'll", "you're", "you've", "young", "your", "yourself"];
var wordStem;
var wordsFound = ["blep"];
var numFound = 0;

function randomLetter() {
	console.log("random letter called");
	var randNum = Math.floor((Math.random() * 26) + 1); //random no between 1 and 26
	switch (randNum) {
	case 1: return "A";
	case 2: return "B";
	case 3: return "C";
	case 4: return "D";
	case 5: return "E";
	case 6: return "F";
	case 7: return "G";
	case 8: return "H";
	case 9: return "I";
	case 10: return "J";
	case 11: return "K";
	case 12: return "L";
	case 13: return "M";
	case 14: return "N";
	case 15: return "O";
	case 16: return "P";
	case 17: return "Q";
	case 18: return "R";
	case 19: return "S";
	case 20: return "T";
	case 21: return "U";
	case 22: return "V";
	case 23: return "W";
	case 24: return "X";
	case 25: return "Y";
	case 26: return "Z";
	}
}

function generateStem() { //called onclick of a dedicated button
	console.log("generate stem called");
	var stemGeneratedYet = false;
	do {
		wordStem = randomLetter().toLowerCase() + randomLetter().toLowerCase();
		if (validateString(wordStem) === true){ //calls function below
			stemGeneratedYet = true;
		} 
	} while (stemGeneratedYet === false);
	document.getElementById("wordStem").innerHTML = wordStem;
}

function validateString(stem) {
	console.log("validate string called");
	var isValid = false;
	for (var i = 0; i < words.length; i++) { //checks each word...
		if (words[i].indexOf(stem) === 0) {//...to see if wordStem is at the start of it
			isValid = true; //it's never set back to false so if it ever happens, it stays true
		}
	}
	console.log("survived the for loop"); //gotta make sure, since the words array can potentially be huge af
	return isValid;
}

function submit(){ //called onclick of a button
	console.log("submit called");
	var userWord = document.getElementById("gameText").value;
	var isAWord = false;
  var isWordNew = true;
	for (var i = 0; i < words.length; i++) {
		if (words[i] === userWord) {
			isAWord = true; //if word is in array, good start...
		}
	}
	if (userWord.indexOf(wordStem) !== 0) { //...but it's got to start with the right letters too
		isAWord = false;
	}
	if (isAWord === true) {
		document.getElementById("results").innerHTML = "You found a word!";
    for (var i = 0; i < wordsFound.length; i++){
      if (userWord === words[i]){
        isWordNew = false;
      }
    }
    if (isWordNew) {
      numFound++;
      document.getElementById("found").innerHTML = numFound;
    }
	}
	else {
		document.getElementById("results").innerHTML = "Sorry, that's not in my word list.";
	}
}

document.getElementById("gameText").addEventListener("keyup", function(event) { //makes pressing enter in the textbox click submit
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("checkButton").click();
    }
});
