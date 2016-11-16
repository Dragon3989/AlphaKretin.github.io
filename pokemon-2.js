var items = ["Normalium Z ", "Firium Z ", "Waterium Z ", "Electrium Z ", "Grassium Z ", "Icium Z ", "Fightinium Z ", "Poisonium Z ", "Groundium Z ", "Flyinium Z ", "Psychium Z ", "Buginium Z ", "Rockium Z ", "Ghostium Z ", "Dragonium Z ", "Darkinium Z ", "Steelium Z ", "Fairium Z ", "Pikanium Z ", "Bottle Cap ", "Gold Bottle Cap ", "Z-Ring ", "Decidium Z ", "Incinium Z ", "Primarium Z ", "Tapunium Z ", "Marshadium Z ", "Aloraichium Z ", "Snorlium Z ", "Eevium Z ", "Mewnium Z ", "Normalium Z ", "Firium Z ", "Waterium Z ", "Electrium Z ", "Grassium Z ", "Icium Z ", "Fightinium Z ", "Poisonium Z ", "Groundium Z ", "Flyinium Z ", "Psychium Z ", "Buginium Z ", "Rockium Z ", "Ghostium Z ", "Dragonium Z ", "Darkinium Z ", "Steelium Z ", "Fairium Z ", "Pikanium Z ", "Decidium Z ", "Incinium Z ", "Primarium Z ", "Tapunium Z ", "Marshadium Z ", "Aloraichium Z ", "Snorlium Z ", "Eevium Z ", "Mewnium Z ", "Pikashunium Z ", "Forage Bag ", "Fishing Rod ", "Professor’s Mask ", "Festival Ticket ", "Sparkling Stone ", "Adrenaline Orb ", "Zygarde Cube ", "Ice Stone ", "Ride Pager ", "Beast Ball ", "Big Malasada ", "Red Nectar ", "Yellow Nectar ", "Pink Nectar ", "Purple Nectar ", "Sun Flute ", "Moon Flute ", "Enigmatic Card ", "Terrain Extender ", "Protective Pads ", "Electric Seed ", "Psychic Seed ", "Misty Seed ", "Grassy Seed ", "Fighting Memory ", "Flying Memory ", "Poison Memory ", "Ground Memory ", "Rock Memory ", "Bug Memory ", "Ghost Memory ", "Steel Memory ", "Fire Memory ", "Water Memory ", "Grass Memory ", "Electric Memory ", "Psychic Memory ", "Ice Memory ", "Dragon Memory ", "Dark Memory ", "Fairy Memory"];
var descs = ["This is a crystallized form of Z-Power. It upgrades Normal-type moves to Z-Moves.", "This is a crystallized form of Z-Power. It upgrades Fire-type moves to Z-Moves.", "This is a crystallized form of Z-Power. It upgrades Water-type moves to Z-Moves.", "This is a crystallized form of Z-Power. It upgrades Electric-type moves to Z-Moves.", "This is a crystallized form of Z-Power. It upgrades Grass-type moves to Z-Moves.", "This is a crystallized form of Z-Power. It upgrades Ice-type moves to Z-Moves.", "This is a crystallized form of Z-Power. It upgrades Fighting-type moves to Z-Moves.", "This is a crystallized form of Z-Power. It upgrades Poison-type moves to Z-Moves.", "This is a crystallized form of Z-Power. It upgrades Ground-type moves to Z-Moves.", "This is a crystallized form of Z-Power. It upgrades Flying-type moves to Z-Moves.", "This is a crystallized form of Z-Power. It upgrades Psychic-type moves to Z-Moves.", "This is a crystallized form of Z-Power. It upgrades Bug-type moves to Z-Moves.", "This is a crystallized form of Z-Power. It upgrades Rock-type moves to Z-Moves.", "This is a crystallized form of Z-Power. It upgrades Ghost-type moves to Z-Moves.", "This is a crystallized form of Z-Power. It upgrades Dragon-type moves to Z-Moves.", "This is a crystallized form of Z-Power. It upgrades Dark-type moves to Z-Moves.", "This is a crystallized form of Z-Power. It upgrades Steel-type moves to Z-Moves.", "This is a crystallized form of Z-Power. It upgrades Fairy-type moves to Z-Moves.", "This is a crystallized form of Z-Power. It upgrades Pikachu’s Volt Tackle to a Z-Move.", "A beautiful bottle cap that gives off a silver gleam. Some people are happy to receive one.", "A beautiful bottle cap that gives off a golden gleam. Some people are happy to receive one.", "A mysterious ring that enables Pokémon to use Z-Power. It requires both the willpower and the physical power of the Trainer wearing it.", "This is a crystallized form of Z-Power. It upgrades Decidueye’s Spirit Shackle to a Z-Move.", "This is a crystallized form of Z-Power. It upgrades Incineroar’s Darkest Lariat to a Z-Move.", "This is a crystallized form of Z-Power. It upgrades Primarina’s Sparkling Aria to a Z-Move.", "This is a crystallized form of Z-Power. It upgrades the tapu’s Nature’s Madness to a Z-Move.", "This is a crystallized form of Z-Power. It upgrades Marshadow’s Spectral Thief to a Z-Move.", "This is a crystallized form of Z-Power. It upgrades Alolan Raichu’s Thunderbolt to a Z-Move.", "This is a crystallized form of Z-Power. It upgrades Snorlax’s Giga Impact to a Z-Move.", "This is a crystallized form of Z-Power. It upgrades Eevee’s Last Resort to a Z-Move.", "This is a crystallized form of Z-Power. It upgrades Mew’s Psychic to a Z-Move.", "It converts Z-Power into crystals that upgrade Normal-type moves to Normal-type Z-Moves.", "It converts Z-Power into crystals that upgrade Fire-type moves to Fire-type Z-Moves.", "It converts Z-Power into crystals that upgrade Water-type moves to Water-type Z-Moves.", "It converts Z-Power into crystals that upgrade Electric-type moves to Electric-type Z-Moves.", "It converts Z-Power into crystals that upgrade Grass-type moves to Grass-type Z-Moves.", "It converts Z-Power into crystals that upgrade Ice-type moves to Ice-type Z-Moves.", "It converts Z-Power into crystals that upgrade Fighting-type moves to Fighting-type Z-Moves.", "It converts Z-Power into crystals that upgrade Poison-type moves to Poison-type Z-Moves.", "It converts Z-Power into crystals that upgrade Ground-type moves to Ground-type Z-Moves.", "It converts Z-Power into crystals that upgrade Flying-type moves to Flying-type Z-Moves.", "It converts Z-Power into crystals that upgrade Psychic-type moves to Psychic-type Z-Moves.", "It converts Z-Power into crystals that upgrade Bug-type moves to Bug-type Z-Moves.", "It converts Z-Power into crystals that upgrade Rock-type moves to Rock-type Z-Moves.", "It converts Z-Power into crystals that upgrade Ghost-type moves to Ghost-type Z-Moves.", "It converts Z-Power into crystals that upgrade Dragon-type moves to Dragon-type Z-Moves.", "It converts Z-Power into crystals that upgrade Dark-type moves to Dark-type Z-Moves.", "It converts Z-Power into crystals that upgrade Steel-type moves to Steel-type Z-Moves.", "It converts Z-Power into crystals that upgrade Fairy-type moves to Fairy-type Z-Moves.", "It converts Z-Power into crystals that upgrade Pikachu’s Volt Tackle to an exclusive Z-Move.", "It converts Z-Power into crystals that upgrade Decidueye’s Spirit Shackle to an exclusive Z-Move.", "It converts Z-Power into crystals that upgrade Incineroar’s Darkest Lariat to an exclusive Z-Move.", "It converts Z-Power into crystals that upgrade Primarina’s Sparkling Aria to an exclusive Z-Move.", "It converts Z-Power into crystals that upgrade the tapu’s Nature’s Madness to an exclusive Z-Move.", "It converts Z-Power into crystals that upgrade Marshadow’s Spectral Thief to an exclusive Z-Move.", "It converts Z-Power into crystals that upgrade Alolan Raichu’s Thunderbolt to an exclusive Z-Move.", "It converts Z-Power into crystals that upgrade Snorlax’s Giga Impact to an exclusive Z-Move.", "It converts Z-Power into crystals that upgrade Eevee’s Last Resort to an exclusive Z-Move.", "It converts Z-Power into crystals that upgrade Mew’s Psychic to an exclusive Z-Move.", "It converts Z-Power into crystals that upgrade a Thunderbolt by Pikachu in a cap to an exclusive Z-Move.", "A bag to carry ingredients gathered during Mallow’s trial in the jungle.", "A Fishing Rod made by Captain Lana. Cast a line over piles of underwater rocks to fish for wild aquatic Pokémon.", "The mask that belongs to The Masked Royal.  This pro wrestler apparently sews his mask on a machine himself.", "A ticket that allows you to host a mission in Festival Plaza.", "A stone entrusted by a Pokémon that has been venerated as a guardian deity in the Alola region. There is said to be some secret in how it sparkles.", "Using it makes wild Pokémon more likely to call for help. If held by a Pokémon, it boosts Speed when intimidated. It can be used only once.", "An item to store Zygarde Cores and Cells. You can also use it to teach Zygarde moves.", "A peculiar stone that can make certain species of Pokémon evolve. It has an unmistakable snowflake pattern.", "By entering certain numbers on this pager, you can summon Ride Pokémon in an instant.", "A special Poké Ball designed to catch Ultra Beasts. It has a low success rate for catching others.", "The Alola region’s local specialty—fried bread. It can be used once to heal all the status conditions of a Pokémon.", "A flower nectar obtained at Ula’ula Meadow. It changes the form of certain species of Pokémon.", "A flower nectar obtained at Melemele Meadow. It changes the form of certain species of Pokémon.", "The flower nectar obtained at the flowering shrubs on Royal Avenue. It changes the form of certain species of Pokémon.", "A flower nectar obtained at Poni Meadow. It changes the form of certain species of Pokémon.", "It is said that the tones it produces were offered up as an expression of gratitude to the Legendary Pokémon of the sun.", "It is said that the tones it produces were offered up as an expression of gratitude to the Legendary Pokémon of the moon.", "A mysterious card. Written on it is a request for you to go to a guest room in an Akala motel on Route 8.", "An item to be held by a Pokémon. It extends the duration of the terrain caused by the holder’s move or Ability.", "An item to be held by a Pokémon. These pads protect the holder from effects caused by making direct contact with the target.", "An item to be held by a Pokémon. It boosts Defense on Electric Terrain. It can only be used once.", "An item to be held by a Pokémon. It boosts Sp. Def on Psychic Terrain. It can only be used once.", "An item to be held by a Pokémon. It boosts Sp. Def on Misty Terrain. It can only be used once.", "An item to be held by a Pokémon. It boosts Defense on Grassy Terrain. It can only be used once.", "A memory disc that contains Fighting-type data. It changes the type of the holder if held by a certain species of Pokémon.", "A memory disc that contains Flying-type data. It changes the type of the holder if held by a certain species of Pokémon.", "A memory disc that contains Poison-type data. It changes the type of the holder if held by a certain species of Pokémon.", "A memory disc that contains Ground-type data. It changes the type of the holder if held by a certain species of Pokémon.", "A memory disc that contains Rock-type data. It changes the type of the holder if held by a certain species of Pokémon.", "A memory disc that contains Bug-type data. It changes the type of the holder if held by a certain species of Pokémon.", "A memory disc that contains Ghost-type data. It changes the type of the holder if held by a certain species of Pokémon.", "A memory disc that contains Steel-type data. It changes the type of the holder if held by a certain species of Pokémon.", "A memory disc that contains Fire-type data. It changes the type of the holder if held by a certain species of Pokémon.", "A memory disc that contains Water-type data. It changes the type of the holder if held by a certain species of Pokémon.", "A memory disc that contains Grass-type data. It changes the type of the holder if held by a certain species of Pokémon.", "A memory disc that contains Electric-type data. It changes the type of the holder if held by a certain species of Pokémon.", "A memory disc that contains Psychic-type data. It changes the type of the holder if held by a certain species of Pokémon.", "A memory disc that contains Ice-type data. It changes the type of the holder if held by a certain species of Pokémon.", "A memory disc that contains Dragon-type data. It changes the type of the holder if held by a certain species of Pokémon.", "A memory disc that contains Dark-type data. It changes the type of the holder if held by a certain species of Pokémon.", "A memory disc that contains Fairy-type data. It changes the type of the holder if held by a certain species of Pokémon."];

function clicked(){
	for (var i = 0; i < items.length; i++){
		document.getElementById("myDiv").innerHTML += "var " + items[i].replace(/ /g,"_") + " = {<br />&nbsp;&nbsp;&nbsp;&nbsp;name: \"" + c(items[i]) + "\",<br />&nbsp;&nbsp;&nbsp;&nbsp;desc: \"" + descs[i] + "\",<br />&nbsp;&nbsp;&nbsp;&nbsp;wiki: \"http:\/\/www.serebii.net\/itemdex\/" + u(items[i]) + ".shtml\"<br />};<br /><br />"
	}
}

function c(str)
{
	var s = str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    return s;	
}

function u(str)
{
 	var s = str.replace(/ /g,"");
    return s;	
}
