var bookNames = ["Jadi mladoga Vertera", "Ana Karenjina", "Mrtve duše", "Evgenije Onjegin", "Proces", "Slika Dorijana Greja"];
var bookDescriptionElement = document.getElementById("bookDescription");
var bookImageElement = document.getElementById("bookImage");
var searchInput = document.createElement("input");
searchInput.setAttribute("type", "text");
searchInput.setAttribute("placeholder", "Pretraga knjiga");
document.body.appendChild(searchInput);

var searchButton = document.createElement("button");
searchButton.textContent = "Pretraga";
searchButton.addEventListener("click", function() {
    var searchTerm = searchInput.value.toLowerCase();
    var found = false;
    bookImageElement.src = "";
    bookImageElement.alt = "";
    bookDescriptionElement.innerHTML = "";
    bookNames.forEach(function(bookName) {
        if (bookName.toLowerCase() === searchTerm) {
            found = true;
            switch (bookName.toLowerCase()) {
                case "jadi mladoga vertera":
                    bookImageElement.src = "fotografije/jadimladogavertera.jpg.jpg";
                    bookDescriptionElement.innerHTML = "Univerzalan i uvek aktuelan roman Jadi mladoga Vertera priča je o nesrećnoj ljubavi mladog čoveka, njegovom begu od skučenosti svoje sredine i o osećanju izgubljenosti – temama koje kroz vekove opsedaju pisce i umetnike. Uprkos zabranama i kritikama, roman je postao nemački bestseler, odjeknuo je evropskom literarnom scenom i uveo Getea u svetsku književnost.Osetljivog i strastvenog temperamenta, Verter je odraz jednog doba, generacije koja je u njegovom liku pronašla sebe i silu talasa svojih osećanja. Gete je imao samo dvadeset i četiri godine kada je napisao ovaj roman. Delimično autobiografski, izuzetne lirske snage i osobenog stila, Jadi mladoga Vertera prikazuju uzlaznu i silaznu putanju Verterove ljubavi i njegove duše.Odjek njegove sudbine proneo se celom Evropom toga doba, a mladi ljudi su oponašali verterovski govor, ponašanje, pa čak i način odevanja, prepoznavši svoja uzburkana osećanja u njegovoj ispovesti.";
                    break;
                case "ana karenjina":
                    bookImageElement.src = "fotografije/karenjina.jpg.jpg";
                    bookImageElement.alt = "Ana Karenjina - Slika iz romana o ljubavi i društvu";
                    bookDescriptionElement.innerHTML = "<i>Sve srećne porodice liče jedna na drugu, svaka nesrećna porodica nesrećna je na svoj način.</i> Roman koji je Fjodor Dostojevski smatrao besprekornim, a Vilijam Fokner nazvao najboljim romanom koji je ikada napisan, Ana Karenjina je monumentalno delo Lava Tolstoja koji daje sveobuhvatan prikaz ruskog društva devetnaestog veka, od aristokratskih salona do seoskih gazdinstava. Uvodeći dva narativna toka, prvi koji prati ljubavnu priču između Ane i Vronskog i drugi koji prati odnos između Kiti i Ljevina, Lav Tolstoj ispisuje svevremene stranice o porodici, gubitku, ljubavi, izdaji, veri i prijateljstvu.";
                    break;
                case "mrtve duše":
                    bookImageElement.src = "fotografije/mrtveduse.jpg.jpg";
                    bookDescriptionElement.innerHTML = "U neimenovani grad ruske provincije stiže činovnik, „ni lep ni ružan, ni suviše debeo ni suviše tanak, ni star ni mlad“. Odmah po dolasku glavni junak Pavle Ivanovič Čičikov kreće da se upoznaje sa znamenitim stanovnicima, gubernijskom upravom i lokalnim zemljoposednicima, da bi zatim redom posetio njihova imanja kupujući „mrtve duše“. U feudalnoj Rusiji prve polovine XIX veka posednici su plaćali porez na svu svoju pokretnu i nepokretnu imovinu, uključujući tu i kmetove, tj. duše. Kako se popis imovine obavljao svakih pet godina, vlastelin je plaćao porez i na one seljake koji su u međuvremenu umrli. Tu rupu u zakonu koristi Čičikov, „otkupljujući“ preminule seljake, ili bolje reći njihova imena, koje potom namerava da stavi pod hipoteku kao svoju imovinu i tako podigne veliki novac iz državne kase.";
                    break;
                case "evgenije onjegin":
                    bookImageElement.src = "fotografije/onjegin.jpg.jpg";
                    bookDescriptionElement.innerHTML = "Aleksandar Puškin je u Evgeniju Onjeginu dao umetnički presek ruskog drušva u jednom od najzanimljivijih perioda njegovog razvoja. U ovom remek-delu ruske književnosti zahvaćen je čitav ruski život dvadesetih godina XIX veka: od najviših plemićkih krugova do seljačkog staleža, od visokoobrazovanog intelektualca do čestite dadilje. Onjegin i Lenski predstavljaju dva tipa mladih obrazovanih plemića čija je tragična sudbina posledica raskoraka između njihovih želja i sposobnosti i života koji vode. Kod Lenskog je uzrok razočaranja i nesreće idealizovanje stvarnosti koja nikad nije bila onakva kakvom ju je pesnik zamišljao dok je kod Onjegina taj sukob zasnovan na dubokim unutrašnjim protivrečnostima.Lik Onjegina poslužio je kao uzor čitavoj galeriji tipova, takozvanih „suvišnih ljudi“, kao što su Ljermontovljev Pečorin ili Turgenjevljev Ruđin. S druge strane, jedina koja je u Puškinovom romanu svoju nesreću primila dostojanstveno, ne gubeći ni u jednom trenutku ravnotežu i dodir sa običnim narodom, bila je Tatjana, prva u nizu nezaboravnih junakinja moderne ruske književnosti.Tragična priča o ljubavi, nevinosti i prijateljstvu, roman u stihovima Evgenije Onjegin u neprevaziđenom prevodu Milorada Pavića nezaobilazno je delo svetske literature. „Najveći pesnik svog vremena.“ Vladimir Nabokov";
                    break;
                case "proces":
                    bookImageElement.src = "fotografije/proces.jpg.jpg";
                    bookDescriptionElement.innerHTML = "<i>Neko mora da je oklevetao Jozefa K., jer je, iako nije učinio nikakvo zlo, jednog jutra bio uhapšen.</i>Jozef K., perspektivni prokurista jedne velike banke, uhapšen je na svoj 30. rođendan, rano ujutro, čim je otvorio oči. Optužba nije poznata, baš kao ni to pred kojim se sudom vodi postupak i kakav će biti njegov tok. Jozefu K. saopštavaju da sud ne želi da remeti njegov uobičajeni način života, te da se on, u skladu s tim, slobodno može vratiti svakodnevnim aktivnostima. Međutim, K. se narednih dana i meseci sve više zapliće u nevidljivu mrežu svog procesa i nedokučivog suda koji ga je pokrenuo. Korak po korak, Jozef K. saznaje da „sve pripada sudu“.";
                    break;
                case "slika dorijana greja":
                    bookImageElement.src = "fotografije/slikadorijanagreja.jpg.jpg";
                    bookDescriptionElement.innerHTML = "<i>Ali slika? Šta na to da kaže? Ona je krila tajnu njegova života i pričala njegovu istoriju. Ona ga je naučila da voli sopstvenu lepotu. Da ga neće sada naučiti da se gadi sopstvene duše? Da li će je moći ikada više gledati?</i> Pišući o grehu i savesti, širini velegrada i teskobi duše, Oskar Vajld u romanu Slika Dorijana Greja uspostavlja klaustrofobični ambijent koji odiše fatalističkim duhom vremena. Faustovski pakt kojim Dorijan Grej prodaje dušu za mladolikost i njegova narcisoidna zagledanost u portret kao refleksiju lepote svog tela, a potom i kao hroniku propasti svoje duše, predstavljaju mitski okvir u koji Vajld smešta svoju sliku o autodestruktivnom porivu viktorijanske kulture.";
                    break;
                default:
                    bookDescriptionElement.innerHTML = "Knjiga nije pronađena.";
                    break;
            }
        }
    });
    if (!found) {
        bookDescriptionElement.innerHTML = "Knjiga nije pronađena.";
    }
});
document.body.appendChild(searchButton);