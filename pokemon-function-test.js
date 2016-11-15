var mons = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate", "spearow", "fearow", "ekans", "arbok", "pikachu", "raichu", "sandshrew", "sandslash", "nidoran♀", "nidorina", "nidoqueen", "nidoran♂", "nidorino", "nidoking", "clefairy", "clefable", "vulpix", "ninetales", "jigglypuff", "wigglytuff", "zubat", "golbat", "oddish", "gloom", "vileplume", "paras", "parasect", "venonat", "venomoth", "diglett", "dugtrio", "meowth", "persian", "psyduck", "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag", "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop", "machoke", "machamp", "bellsprout", "weepinbell", "victreebel", "tentacool", "tentacruel", "geodude", "graveler", "golem", "ponyta", "rapidash", "slowpoke", "slowbro", "magnemite", "magneton", "farfetch'd", "doduo", "dodrio", "seel", "dewgong", "grimer", "muk", "shellder", "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee", "hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute", "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan", "lickitung", "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan", "horsea", "seadra", "goldeen", "seaking", "staryu", "starmie", "mr. mime", "scyther", "jynx", "electabuzz", "magmar", "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto", "eevee", "vaporeon", "jolteon", "flareon", "porygon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax", "articuno", "zapdos", "moltres", "dratini", "dragonair", "dragonite", "mewtwo", "mew", "chikorita", "bayleef", "meganium", "cyndaquil", "quilava", "typhlosion", "totodile", "croconaw", "feraligatr", "sentret", "furret", "hoothoot", "noctowl", "ledyba", "ledian", "spinarak", "ariados", "crobat", "chinchou", "lanturn", "pichu", "cleffa", "igglybuff", "togepi", "togetic", "natu", "xatu", "mareep", "flaaffy", "ampharos", "bellossom", "marill", "azumarill", "sudowoodo", "politoed", "hoppip", "skiploom", "jumpluff", "aipom", "sunkern", "sunflora", "yanma", "wooper", "quagsire", "espeon", "umbreon", "murkrow", "slowking", "misdreavus", "unown", "wobbuffet", "girafarig", "pineco", "forretress", "dunsparce", "gligar", "steelix", "snubbull", "granbull", "qwilfish", "scizor", "shuckle", "heracross", "sneasel", "teddiursa", "ursaring", "slugma", "magcargo", "swinub", "piloswine", "corsola", "remoraid", "octillery", "delibird", "mantine", "skarmory", "houndour", "houndoom", "kingdra", "phanpy", "donphan", "porygon2", "stantler", "smeargle", "tyrogue", "hitmontop", "smoochum", "elekid", "magby", "miltank", "blissey", "raikou", "entei", "suicune", "larvitar", "pupitar", "tyranitar", "lugia", "ho-oh", "celebi", "treecko", "grovyle", "sceptile", "torchic", "combusken", "blaziken", "mudkip", "marshtomp", "swampert", "poochyena", "mightyena", "zigzagoon", "linoone", "wurmple", "silcoon", "beautifly", "cascoon", "dustox", "lotad", "lombre", "ludicolo", "seedot", "nuzleaf", "shiftry", "taillow", "swellow", "wingull", "pelipper", "ralts", "kirlia", "gardevoir", "surskit", "masquerain", "shroomish", "breloom", "slakoth", "vigoroth", "slaking", "nincada", "ninjask", "shedinja", "whismur", "loudred", "exploud", "makuhita", "hariyama", "azurill", "nosepass", "skitty", "delcatty", "sableye", "mawile", "aron", "lairon", "aggron", "meditite", "medicham", "electrike", "manectric", "plusle", "minun", "volbeat", "illumise", "roselia", "gulpin", "swalot", "carvanha", "sharpedo", "wailmer", "wailord", "numel", "camerupt", "torkoal", "spoink", "grumpig", "spinda", "trapinch", "vibrava", "flygon", "cacnea", "cacturne", "swablu", "altaria", "zangoose", "seviper", "lunatone", "solrock", "barboach", "whiscash", "corphish", "crawdaunt", "baltoy", "claydol", "lileep", "cradily", "anorith", "armaldo", "feebas", "milotic", "castform", "kecleon", "shuppet", "banette", "duskull", "dusclops", "tropius", "chimecho", "absol", "wynaut", "snorunt", "glalie", "spheal", "sealeo", "walrein", "clamperl", "huntail", "gorebyss", "relicanth", "luvdisc", "bagon", "shelgon", "salamence", "beldum", "metang", "metagross", "regirock", "regice", "registeel", "latias", "latios", "kyogre", "groudon", "rayquaza", "jirachi", "deoxys", "turtwig", "grotle", "torterra", "chimchar", "monferno", "infernape", "piplup", "prinplup", "empoleon", "starly", "staravia", "staraptor", "bidoof", "bibarel", "kricketot", "kricketune", "shinx", "luxio", "luxray", "budew", "roserade", "cranidos", "rampardos", "shieldon", "bastiodon", "burmy", "wormadam", "mothim", "combee", "vespiquen", "pachirisu", "buizel", "floatzel", "cherubi", "cherrim", "shellos", "gastrodon", "ambipom", "drifloon", "drifblim", "buneary", "lopunny", "mismagius", "honchkrow", "glameow", "purugly", "chingling", "stunky", "skuntank", "bronzor", "bronzong", "bonsly", "mime jr.", "happiny", "chatot", "spiritomb", "gible", "gabite", "garchomp", "munchlax", "riolu", "lucario", "hippopotas", "hippowdon", "skorupi", "drapion", "croagunk", "toxicroak", "carnivine", "finneon", "lumineon", "mantyke", "snover", "abomasnow", "weavile", "magnezone", "lickilicky", "rhyperior", "tangrowth", "electivire", "magmortar", "togekiss", "yanmega", "leafeon", "glaceon", "gliscor", "mamoswine", "porygon-z", "gallade", "probopass", "dusknoir", "froslass", "rotom", "uxie", "mesprit", "azelf", "dialga", "palkia", "heatran", "regigigas", "giratina", "cresselia", "phione", "manaphy", "darkrai", "shaymin", "arceus", "victini", "snivy", "servine", "serperior", "tepig", "pignite", "emboar", "oshawott", "dewott", "samurott", "patrat", "watchog", "lillipup", "herdier", "stoutland", "purrloin", "liepard", "pansage", "simisage", "pansear", "simisear", "panpour", "simipour", "munna", "musharna", "pidove", "tranquill", "unfezant", "blitzle", "zebstrika", "roggenrola", "boldore", "gigalith", "woobat", "swoobat", "drilbur", "excadrill", "audino", "timburr", "gurdurr", "conkeldurr", "tympole", "palpitoad", "seismitoad", "throh", "sawk", "sewaddle", "swadloon", "leavanny", "venipede", "whirlipede", "scolipede", "cottonee", "whimsicott", "petilil", "lilligant", "basculin", "sandile", "krokorok", "krookodile", "darumaka", "darmanitan", "maractus", "dwebble", "crustle", "scraggy", "scrafty", "sigilyph", "yamask", "cofagrigus", "tirtouga", "carracosta", "archen", "archeops", "trubbish", "garbodor", "zorua", "zoroark", "minccino", "cinccino", "gothita", "gothorita", "gothitelle", "solosis", "duosion", "reuniclus", "ducklett", "swanna", "vanillite", "vanillish", "vanilluxe", "deerling", "sawsbuck", "emolga", "karrablast", "escavalier", "foongus", "amoonguss", "frillish", "jellicent", "alomomola", "joltik", "galvantula", "ferroseed", "ferrothorn", "klink", "klang", "klinklang", "tynamo", "eelektrik", "eelektross", "elgyem", "beheeyem", "litwick", "lampent", "chandelure", "axew", "fraxure", "haxorus", "cubchoo", "beartic", "cryogonal", "shelmet", "accelgor", "stunfisk", "mienfoo", "mienshao", "druddigon", "golett", "golurk", "pawniard", "bisharp", "bouffalant", "rufflet", "braviary", "vullaby", "mandibuzz", "heatmor", "durant", "deino", "zweilous", "hydreigon", "larvesta", "volcarona", "cobalion", "terrakion", "virizion", "tornadus", "thundurus", "reshiram", "zekrom", "landorus", "kyurem", "keldeo", "meloetta", "genesect", "chespin", "quilladin", "chesnaught", "fennekin", "braixen", "delphox", "froakie", "frogadier", "greninja", "bunnelby", "diggersby", "fletchling", "fletchinder", "talonflame", "scatterbug", "spewpa", "vivillon", "litleo", "pyroar", "flabébé", "floette", "florges", "skiddo", "gogoat", "pancham", "pangoro", "furfrou", "espurr", "meowstic", "honedge", "doublade", "aegislash", "spritzee", "aromatisse", "swirlix", "slurpuff", "inkay", "malamar", "binacle", "barbaracle", "skrelp", "dragalge", "clauncher", "clawitzer", "helioptile", "heliolisk", "tyrunt", "tyrantrum", "amaura", "aurorus", "sylveon", "hawlucha", "dedenne", "carbink", "goomy", "sliggoo", "goodra", "klefki", "phantump", "trevenant", "pumpkaboo", "gourgeist", "bergmite", "avalugg", "noibat", "noivern", "xerneas", "yveltal", "zygarde", "diancie"];
var moves = ["pound", "karate-chop", "double-slap", "comet-punch", "mega-punch", "pay-day", "fire-punch", "ice-punch", "thunder-punch", "scratch", "vice-grip", "guillotine", "razor-wind", "swords-dance", "cut", "gust", "wing-attack", "whirlwind", "fly", "bind", "slam", "vine-whip", "stomp", "double-kick", "mega-kick", "jump-kick", "rolling-kick", "sand-attack", "headbutt", "horn-attack", "fury-attack", "horn-drill", "tackle", "body-slam", "wrap", "take-down", "thrash", "double-edge", "tail-whip", "poison-sting", "twineedle", "pin-missile", "leer", "bite", "growl", "roar", "sing", "supersonic", "sonic-boom", "disable", "acid", "ember", "flamethrower", "mist", "water-gun", "hydro-pump", "surf", "ice-beam", "blizzard", "psybeam", "bubble-beam", "aurora-beam", "hyper-beam", "peck", "drill-peck", "submission", "low-kick", "counter", "seismic-toss", "strength", "absorb", "mega-drain", "leech-seed", "growth", "razor-leaf", "solar-beam", "poison-powder", "stun-spore", "sleep-powder", "petal-dance", "string-shot", "dragon-rage", "fire-spin", "thunder-shock", "thunderbolt", "thunder-wave", "thunder", "rock-throw", "earthquake", "fissure", "dig", "toxic", "confusion", "psychic", "hypnosis", "meditate", "agility", "quick-attack", "rage", "teleport", "night-shade", "mimic", "screech", "double-team", "recover", "harden", "minimize", "smokescreen", "confuse-ray", "withdraw", "defense-curl", "barrier", "light-screen", "haze", "reflect", "focus-energy", "bide", "metronome", "mirror-move", "self-destruct", "egg-bomb", "lick", "smog", "sludge", "bone-club", "fire-blast", "waterfall", "clamp", "swift", "skull-bash", "spike-cannon", "constrict", "amnesia", "kinesis", "soft-boiled", "high-jump-kick", "glare", "dream-eater", "poison-gas", "barrage", "leech-life", "lovely-kiss", "sky-attack", "transform", "bubble", "dizzy-punch", "spore", "flash", "psywave", "splash", "acid-armor", "crabhammer", "explosion", "fury-swipes", "bonemerang", "rest", "rock-slide", "hyper-fang", "sharpen", "conversion", "tri-attack", "super-fang", "slash", "substitute", "struggle", "sketch", "triple-kick", "thief", "spider-web", "mind-reader", "nightmare", "flame-wheel", "snore", "curse", "flail", "conversion-2", "aeroblast", "cotton-spore", "reversal", "spite", "powder-snow", "protect", "mach-punch", "scary-face", "feint-attack", "sweet-kiss", "belly-drum", "sludge-bomb", "mud-slap", "octazooka", "spikes", "zap-cannon", "foresight", "destiny-bond", "perish-song", "icy-wind", "detect", "bone-rush", "lock-on", "outrage", "sandstorm", "giga-drain", "endure", "charm", "rollout", "false-swipe", "swagger", "milk-drink", "spark", "fury-cutter", "steel-wing", "mean-look", "attract", "sleep-talk", "heal-bell", "return", "present", "frustration", "safeguard", "pain-split", "sacred-fire", "magnitude", "dynamic-punch", "megahorn", "dragon-breath", "baton-pass", "encore", "pursuit", "rapid-spin", "sweet-scent", "iron-tail", "metal-claw", "vital-throw", "morning-sun", "synthesis", "moonlight", "hidden-power", "cross-chop", "twister", "rain-dance", "sunny-day", "crunch", "mirror-coat", "psych-up", "extreme-speed", "ancient-power", "shadow-ball", "future-sight", "rock-smash", "whirlpool", "beat-up", "fake-out", "uproar", "stockpile", "spit-up", "swallow", "heat-wave", "hail", "torment", "flatter", "will-o-wisp", "memento", "facade", "focus-punch", "smelling-salts", "follow-me", "nature-power", "charge", "taunt", "helping-hand", "trick", "role-play", "wish", "assist", "ingrain", "superpower", "magic-coat", "recycle", "revenge", "brick-break", "yawn", "knock-off", "endeavor", "eruption", "skill-swap", "imprison", "refresh", "grudge", "snatch", "secret-power", "dive", "arm-thrust", "camouflage", "tail-glow", "luster-purge", "mist-ball", "feather-dance", "teeter-dance", "blaze-kick", "mud-sport", "ice-ball", "needle-arm", "slack-off", "hyper-voice", "poison-fang", "crush-claw", "blast-burn", "hydro-cannon", "meteor-mash", "astonish", "weather-ball", "aromatherapy", "fake-tears", "air-cutter", "overheat", "odor-sleuth", "rock-tomb", "silver-wind", "metal-sound", "grass-whistle", "tickle", "cosmic-power", "water-spout", "signal-beam", "shadow-punch", "extrasensory", "sky-uppercut", "sand-tomb", "sheer-cold", "muddy-water", "bullet-seed", "aerial-ace", "icicle-spear", "iron-defense", "block", "howl", "dragon-claw", "frenzy-plant", "bulk-up", "bounce", "mud-shot", "poison-tail", "covet", "volt-tackle", "magical-leaf", "water-sport", "calm-mind", "leaf-blade", "dragon-dance", "rock-blast", "shock-wave", "water-pulse", "doom-desire", "psycho-boost", "roost", "gravity", "miracle-eye", "wake-up-slap", "hammer-arm", "gyro-ball", "healing-wish", "brine", "natural-gift", "feint", "pluck", "tailwind", "acupressure", "metal-burst", "u-turn", "close-combat", "payback", "assurance", "embargo", "fling", "psycho-shift", "trump-card", "heal-block", "wring-out", "power-trick", "gastro-acid", "lucky-chant", "me-first", "copycat", "power-swap", "guard-swap", "punishment", "last-resort", "worry-seed", "sucker-punch", "toxic-spikes", "heart-swap", "aqua-ring", "magnet-rise", "flare-blitz", "force-palm", "aura-sphere", "rock-polish", "poison-jab", "dark-pulse", "night-slash", "aqua-tail", "seed-bomb", "air-slash", "x-scissor", "bug-buzz", "dragon-pulse", "dragon-rush", "power-gem", "drain-punch", "vacuum-wave", "focus-blast", "energy-ball", "brave-bird", "earth-power", "switcheroo", "giga-impact", "nasty-plot", "bullet-punch", "avalanche", "ice-shard", "shadow-claw", "thunder-fang", "ice-fang", "fire-fang", "shadow-sneak", "mud-bomb", "psycho-cut", "zen-headbutt", "mirror-shot", "flash-cannon", "rock-climb", "defog", "trick-room", "draco-meteor", "discharge", "lava-plume", "leaf-storm", "power-whip", "rock-wrecker", "cross-poison", "gunk-shot", "iron-head", "magnet-bomb", "stone-edge", "captivate", "stealth-rock", "grass-knot", "chatter", "judgment", "bug-bite", "charge-beam", "wood-hammer", "aqua-jet", "attack-order", "defend-order", "heal-order", "head-smash", "double-hit", "roar-of-time", "spacial-rend", "lunar-dance", "crush-grip", "magma-storm", "dark-void", "seed-flare", "ominous-wind", "shadow-force", "hone-claws", "wide-guard", "guard-split", "power-split", "wonder-room", "psyshock", "venoshock", "autotomize", "rage-powder", "telekinesis", "magic-room", "smack-down", "storm-throw", "flame-burst", "sludge-wave", "quiver-dance", "heavy-slam", "synchronoise", "electro-ball", "soak", "flame-charge", "coil", "low-sweep", "acid-spray", "foul-play", "simple-beam", "entrainment", "after-you", "round", "echoed-voice", "chip-away", "clear-smog", "stored-power", "quick-guard", "ally-switch", "scald", "shell-smash", "heal-pulse", "hex", "sky-drop", "shift-gear", "circle-throw", "incinerate", "quash", "acrobatics", "reflect-type", "retaliate", "final-gambit", "bestow", "inferno", "water-pledge", "fire-pledge", "grass-pledge", "volt-switch", "struggle-bug", "bulldoze", "frost-breath", "dragon-tail", "work-up", "electroweb", "wild-charge", "drill-run", "dual-chop", "heart-stamp", "horn-leech", "sacred-sword", "razor-shell", "heat-crash", "leaf-tornado", "steamroller", "cotton-guard", "night-daze", "psystrike", "tail-slap", "hurricane", "head-charge", "gear-grind", "searing-shot", "techno-blast", "relic-song", "secret-sword", "glaciate", "bolt-strike", "blue-flare", "fiery-dance", "freeze-shock", "ice-burn", "snarl", "icicle-crash", "v-create", "fusion-flare", "fusion-bolt", "flying-press", "mat-block", "belch", "rototiller", "sticky-web", "fell-stinger", "phantom-force", "trick-or-treat", "noble-roar", "ion-deluge", "parabolic-charge", "forest's-curse", "petal-blizzard", "freeze-dry", "disarming-voice", "parting-shot", "topsy-turvy", "draining-kiss", "crafty-shield", "flower-shield", "grassy-terrain", "misty-terrain", "electrify", "play-rough", "fairy-wind", "moonblast", "boomburst", "fairy-lock", "king's-shield", "play-nice", "confide", "diamond-storm", "steam-eruption", "hyperspace-hole", "water-shuriken", "mystical-fire", "spiky-shield", "aromatic-mist", "eerie-impulse", "venom-drench", "powder", "geomancy", "magnetic-flux", "happy-hour", "electric-terrain", "dazzling-gleam", "celebrate", "hold-hands", "baby-doll-eyes", "nuzzle", "hold-back", "infestation", "power-up-punch", "oblivion-wing", "thousand-arrows", "thousand-waves", "land's-wrath", "light-of-ruin", "origin-pulse", "precipice-blades", "dragon-ascent", "hyperspace-fury"];

function clicked(){
	for (var i = 0; i < moves.length; i++){
		document.getElementById("myDiv").innerHTML += "var " + moves[i] + " = {<br />&nbsp;&nbsp;&nbsp;&nbsp;name: \"" + c(moves[i]) + "\",<br />&nbsp;&nbsp;&nbsp;&nbsp;type: \"Normal\",<br />&nbsp;&nbsp;&nbsp;&nbsp;cat: \"Physical\",<br />&nbsp;&nbsp;&nbsp;&nbsp;power: 40,<br />&nbsp;&nbsp;&nbsp;&nbsp;pp: 35,<br />&nbsp;&nbsp;&nbsp;&nbsp;acc: 100,<br />&nbsp;&nbsp;&nbsp;&nbsp;effect: \"N\/A\",<br />&nbsp;&nbsp;&nbsp;&nbsp;wiki: \"http:\/\/bulbapedia.bulbagarden.net\/wiki\/" + c(moves[i]) + "_(Move)\"<br />};<br /><br />"
	}
}

function c(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
