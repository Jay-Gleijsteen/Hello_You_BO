let readlineSync = require('readline-sync');

let begin = readlineSync.question("wil je beginnen?");
let einde1 = "lui einde"
let einde2 = "vermoord einde"
let einde3 = "ontsnapt einde"
let einde4 = "goed einde"
let einde5 = "je kan niet verstoppen in de muren???"
let einde6 = "monster"
let einde7 = "slecht einde"
let text1 = "je bent alleen thuis in je bed savonds laat. je hoort de deurbel gaan.je....."
let text2 = "je gaat naar de deur. je kijkt door het raampje van de deur en ziet een man. de man screeuwt:DOE OPEN.hij heeft je gezien. je twijfelt of je de deur open wil doen. je besslist om...."
let text3 = "je blijft in bed liggen. ga naar einde 1"
let text4 = "je besslist de deur niet open te doen. de man word aggresiever: DOE DIE DEUR OPEN. NU!je word bang en gaat schuilen. je hoort even niks meer. nu hoor je de deurklink van je achterdeur open gaan. je was vergeten hem opslot te doen toen je ging slapen. de man zegt: ik weet dat je hier ben rot joch. je weet dat je niet goed genoeg verstopt zit. hij zal je vinden. je besslist om ergens anders te verstoppen. je "
let text5 = "je doet de deur open. de man zegt:dankje dat je de deur open deed. de man: nu heb ik je uiteindelijk te pakken. hij pakt een mes een steekt hem door je keel. je bloed dood. ga naar einde 2"
let text6 = "je gaat naar de kelder toe. je rent snel de kelder in en doet de kelder op slot.je hoort de man zeggen: ik zal je vinden. nu zit je vast in de kelder. het is een paar minuten geweest(voor jou gevoel).het lijkt nu bijna stil. je..."
let text7 = "je blijft wachten in de hoop dat de man weg gaat of dat er hulp komt. je begint honger te krijgen. er is niks in de kelder. je weet dat er eten boven is. je..."
let text8 = "je doet de kelder deur open. je ziet niemand. je bent veilig. of tenminsten. dat dacht je. de man komt van achter de kast vandaan en neemt je in een greep: ik wist dat ik je zou pakken rat. hij pakt zijn mes en snijd je keel door. ga naar einde 2"
let text9 = "je verstopt in de muren. ga naar einde 5"
let text10 = "je blijft in de keleder ondanks de enorme honger. je vraagt je af hoelang je je nog zal bevinden in deze kelder. plotseling hoor je een geluid. het is een rat. de rat snuffelt rustig rond terwijl jij hem aanstaart. vers eten."
let text11 = "je staart naar de rat terwijl hij steeds dichterbij komt. je wilt hem laten leven maar de honger neemt over. ga naar text 12"
let text12 = "zodra de rat dichtbij je is pak je je kans en eet je hem op. lekker. je honger neemt af. je kan nu langer in de kelder blijven. ineens begin je je raar te voelen. je maag brand. je armen schudden. en je ogen worden bloedrood. er was iets mis met die rat. de honger neemt snel toe. je wilt meer. MEER. je armen willen meer slachtoffers maken. maar er zijn geen ratten meer. zover jij weet is er nog 1 ander organisme in het huis. je.."
let text13 = "je gaat de kelder uit. je denkt niet aan de man die mogelijk nog je huis rond snuvelt. je loopt rechtstreeks naar de deur en loopt naar buiten. je gaat het bos in achter je huis. je ziet een hoge boom. bovenaan een nest. een nest met vogels. je..."
let text14 = "je gaat de kelder uit opzoek naar het grootste stuk vleeg in je omgeving. heel zachtjes sluip je rond het huis op ook maar een kleine zijn van de man. terwijl je rond sluipt kom je langs de keuken. je weet dat hier voedsel is maar het risico is dat je koelkast een enorm kraak geluid maakt waneer je hem open. je weet ook dat er een vlijm scherp mes in de la ligt. perfect voor je prooi zijn keel. je zult kiezen tussen een van de twee. je kiest?"
let text15 = "opzoek naar makkelijker prooi merk je dat je niet lang meer heb voordat de honger je lichaam zal laten begeven aan verhongering. je zoekt en zoekt. tot je iets ziet. een kat. JOUWA kat. ga je dit echt doen?"
let text16 = "je begint de boom te beklimmen. de vogels hebben niks door. de honger draait je gek. de vogels zijn bijna in je bereik. bijna eten. plotseling hoor je iets beneden. het klinkt als gebrom? het is de man met een kettingzaag. de man: je dacht echt dat je weg kon rennen of wat je ook probeert. helaas gaat dat niet lukken vriend. hij begint je boom door te zagen. je probeert snel omlaag te komen maar je bent niet snel genoeg. de boom valt om. je splat op de grond. hoe was je uberhaupt van plan om omlaag te komen? ga naar einde 2"
let text17 = "je pakt het mes uit de la. je sluipt verder door het huis. je hoorde iets boven. je sluipt de trap op en ziet de man in jouw kamer. je sluipt op de man af. pakt je mes en steekt het mes recht door de man zijn hart. hij bloed dood op de vloer van jouw kamer. je eet hem op nu je de kans heb. je ruimt het bloed op nadat je honger en moord lust weg is. huis schoon en geen bewijs van een incident. net alsof er niks gebeurd is. ga naar einde 7"
let text18 = "je kiest voor eten om je honger te helpen. je opent de koelkast. het kraakt door het hele huis. snel pak je zoveel eten als je kan en giet je het naar achter. nadat je klaar bent begin je rustiger te worden. je armen schudden niet meer, ogen niet meer rood, en geen zin meer in moord. je bedenkt je nu dat je zo snel mogelijk weg moet zijn voordat de man je vind. je bedenkt dat je twee opties heb. naar de voordeur rennen of naar de achterdeur. de achterdeur is verder maar wel open. de voordeur is dichterbij maar opslot. je kiest voor..."
let text19 = "je sluipt naar JOUW kat toe. je pakt hem vast. hij miauwt naar je terwijl je grip op hem versterkt. JOUW kat neemt zijn laatste adem. je begit met het eten van JOUW kat. tot je ineens mensen achter je hoort. er worden lichten op je gericht. het is de politie. je bent gered! dat dacht je tenminsten. tot je realiseerde dat je letterlijk je eigen kat in je mond heb. de politie ziet wat je heb gedaan en neemt je in handboeien terug naar het politie bureau waar ze later tot een conclusie komen dat je niet verdient te leven ondanks je heb verteld dat een man je probeerde te vermoorden. terecht. monster. ga naar einde 6"
let text20 = "hoe honger je ook bent besslis je niet je eigen kat op te eten. je verhongerd liever. niet veel langer daarna komt de politie. je bent gered! je legt je sitautie uit en nemen je mee naar het politie bureau. later vinden ze de man die nogsteeds in je huis rond zwerfde. hij is nu opgepakt en in de gevangenis gegooid. jij leeft nu rustig verder na dat je dorst voor bloed af is gelopen. of dat denk je..... ga naar einde 4"
let text21 = "je kiest voor de achterdeur. je maakt een sprint voor de open deur. je hoort de man vanaf boven naar beneden komen. de man:BLIJF HIER ROT JONG! je kijkt niet achter om terwijl je het huis uit sprint de straat op naar het eerste mens dat jou kan helpen. ga naar einde 3"
let text22 = "je kiest voor de voordeur. je sprint naar de voordeur. je weet dat de deur opslot zit maar waar zijn de sleutels heen. je zweert dat ze op de kast lagen. zoek je deze? vraagt de man met een glimlach. je kijkt in pure angst als je de man zie met de voordeur sleutel. je kan nergens heen. de man pakt zijn mes. ik denk dat je wel weet waar dit eindigt. ga naar einde 2"

for(let doorgaan; doorgaan != true; doorgaan = false){
    console.log(text1)
    console.log("|                 ")
    console.log("|                 ")
    console.log("|                 ")
    console.log("|                | ")
    console.log("|________________| ")
    console.log("|                | ")
    console.log("|                | ")
    console.log("|                | ")
    question = ["A" , "B"]
    index = readlineSync.keyInSelect(question , "welke kies je")
    console.log ("jouw antwoord was" + question[index]  );
    if (question[index] == "A"){
        console.log(text2)
    } else if(question[index] == "B"){
        console.log(text3)
        break;
    }


    question = ["A" , "B"]
    index = readlineSync.keyInSelect(question , "welke kies je")
    console.log ("jouw antwoord was" + question[index]  );
    if (question[index] == "A"){
        console.log(text4)
    } else if(question[index] == "B"){
        console.log(text5)
        break;
    }

    question = ["A" , "B"]
    index = readlineSync.keyInSelect(question , "welke kies je")
    console.log ("jouw antwoord was " + question[index]  );
    if (question[index] == "A"){
        console.log(text6)
    } else if(question[index] == "B"){
        console.log(text9)
        break;
    }

    question = ["A" , "B"]
    index = readlineSync.keyInSelect(question , "welke kies je")
    console.log ("jouw antwoord was" + question[index]  );
    if (question[index] == "A"){
        console.log(text8)
        break;
    } else if(question[index] == "B") {
        console.log(text7)
    }








    

    question = ["A" , "B"]
    index = readlineSync.keyInSelect(question , "welke kies je")
    console.log ("jouw antwoord was" + question[index]  );
    if (question[index] == "A"){
        console.log(text10)
    } else if(question[index] == "B"){
        console.log(text8)
        break;
    }

    function vraag11() {
        question = ["A" , "B"]
        index = readlineSync.keyInSelect(question , "welke kies je")
        console.log ("jouw antwoord was" + question[index]  );
        if (question[index] == "A"){
            console.log(text11)
        } else if(question[index] == "B"){
            console.log(text12)
        }
    }

    question = ["A" , "B"]
    index = readlineSync.keyInSelect(question , "welke kies je")
    console.log ("jouw antwoord was" + question[index]  );
    if (question[index] == "A"){
        console.log(text14)
    } else if(question[index] == "B"){
        console.log(text13)
    }

    question = ["A" , "B"]
    index = readlineSync.keyInSelect(question , "welke kies je")
    console.log ("jouw antwoord was" + question[index]  );
    if (question[index] == "A"){
        console.log(text16)
        break;
    } else if(question[index] == "B"){
        console.log(text15)
    }

    question = ["A" , "B"]
    index = readlineSync.keyInSelect(question , "welke kies je")
    console.log ("jouw antwoord was" + question[index]  );
    if (question[index] == "A"){
        console.log(text19)
        break;
    } else if(question[index] == "B"){
        console.log(text20)
        break;
    }

    question = ["A" , "B"]
    index = readlineSync.keyInSelect(question , "welke kies je")
    console.log ("jouw antwoord was" + question[index]  );
    if (question[index] == "A"){
        console.log(text18)
    } else if(question[index] == "B"){
        console.log(text17)
        break;
    }

    question = ["A" , "B"]
    index = readlineSync.keyInSelect(question , "welke kies je")
    console.log ("jouw antwoord was" + question[index]  );
    if (question[index] == "A"){
        console.log(text22)
        break;
    } else if(question[index] == "B"){
        console.log(text21)
        break;
    }
}