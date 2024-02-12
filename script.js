function jokeGenerator() {
    let jokes = ['Jaki jest ulubiony owoc programisty? <br>Borówka, bo lubi być w tym samym "loopie"!', 'Jak zmusić programistę do wyjścia z domu? <br>Zamknij mu terminal',
'-Dzień dobry! Do czego służą okulary? <br>-Do widzenia!', 'Idzie jasiu do bacy i mówi:<br>– Powiedzcie „Chrząszcz brzmi w trzcinie”<br>a baca na to: chrobok burcy w trowie.',
'Dlaczego nie da się zjeść zegarka?<br>Bo to zbyt czasochłonne', 'Jak się nazywa lekarz, który leczy pandy? <br>Pandoktor',
'Jak się nazywa pszczoła bez czoła? Psz', 'Jasio mówi do kolegi: <br>Kiedyś byłem bardzo niezdecydowany. Teraz w sumie sam nie wiem', 'Zofia po 2 tygodniach diety zrzuciła wagę... <br>z ósmego piętra',
'Co robi dziadek na dyskotece? <br>Tańczy z laską', 'Dlaczego długopisy nie chodzą do szkoły? <br>Bo się wypisały', 'Co robi skejter w toalecie? <br>Szaleje na desce',
'Co robi mały kościotrup na plaży? <br>Bawi się łopatką', 'Co mówi nauczycielka geografii gdy wybiera kolor butów? <br>Morze czerwone',
'Jaki piją wódkę konduktorzy? <br>Po kolei', 'Co mówi piłkarz, gdy przychodzi do fryzjera? <br>Gol!', 'Co robi sprzątaczka na scenie? <br>Wymiata', 
'W jaki sposób chodzi elektryk? <br>Napięcie', 'Jak stolarze czytają książki? <br>Od deski do deski', 'Jak nazywa się bąk króla? <br>Gaz szlachetny',
'Jakie drewno ma głupie pomysły? <br>Porąbane', 'Dlaczego wulkan dostał 5 na lekcji? <br>Bo był aktywny', 'Co robi informatyk u lekarza? <br>Pobiera krew',
'Co mówi informatyk gdy dostanie na urodziny pendrive\'a? <br>Dzięki za pamięć!', 'Co mówi terrorysta do dziecka? <br>Wysadzę cię pod szkołą',
'W co grają węgrzy? <br>Węgrybirds', 'Jaka jest ulubiona zemsta cukiernika? <br>Słodka', 'Jak zapytać Felka jak ma na imię? <br>Pan-to-felek?',
'W jakim stanie USA nie pije się alkoholu? <br>W stanie trzezwym', 'Jak informatyk chroni się przed koronawirusem? <br>Antywirusem',
'Jak wita się mleko? <br>Mlekovita', 'Dlaczego woda nie zdała egzaminu? <br>Bo oblała', 'Gdzie bociany chodzą na zakupy? <br>Do żabki',
'Ile zarabia mechanik samochodowy? <br>Cztery koła', 'Co mówi elektryk do przyjaciela? <br>Będziemy w kontakcie', 
'Jak piją matematycy? <br>Na potęgę', 'Czego najbardziej nie lubi bramkarz na matmie? <br>Słupków', 'Co robi strażak na siłowni? <br>Spala kalorie',
'Jaka jest ulubiona ryba matematyka? <br>Suma', 'Co robi rycerz, kiedy zapina kurtkę? <br>Męczy się z zamkiem', 'Jaki jest ulubiony owoc żołnierza? <br>Granat',
'Jak się nazywa związek orangutana i żaby? <br>Oranżada', 'Co mówi ksiądz po ślubie informatyka? <br>Pobieranie zakończone',
'Co robi grabarz? <br>Częstochowa', 'Co robią dwie herbaty na ringu? <br>Naparzają się', 'Co mówi ogrodnik do kumpla? <br>Przesadziłeś',
'Dlaczego choinka nie jest głodna? <br>Bo jodła', 'Ulubiony baton informatyka? <br>3 bit', 'Co robi piłkarz na autostradzie? <br>Stoi w korkach',
'Co robi 9 złotych w portfelu? <br>Ledwo dycha', 'Czemu Napoleon zjechał windą w dół? <br>Bo Naparter',
'Co mówi matematyk do przyjaciela? <br>Liczę na ciebie', 'Jak Staś żegna Nel? <br>Panel', 'Ulubiony ocet prokuratora? <br>Winny',
'W co gra śmieciarz? <br>W kosza'
];
let randomJoke = Math.floor(Math.random() * jokes.length);
    let gptAnswer = document.querySelector('.answer').innerHTML = jokes[randomJoke];
}
function colorPickerApp() {
    let mainContainer = document.querySelector('.answer');
    mainContainer.innerHTML = '';

    let container = document.createElement('div');
    container.style.border = '1px solid #000';
    container.style.borderRadius = '20px';
    container.style.height = '250px';
    container.style.padding = '20px';
    container.style.textAlign = 'center';
    container.style.marginTop = '50px';

    let colorPickerSelector = document.createElement('input');
    colorPickerSelector.type = 'color';
    colorPickerSelector.name = 'colorPicker';
    colorPickerSelector.id = 'colorPicker';
    colorPickerSelector.value = '#3366cc';

    let label = document.createElement('label');
    label.htmlFor = 'colorPicker';
    label.textContent = 'Wybierz kolor: ';

    let heading = document.createElement('h1');
    heading.textContent = 'Color Picker App';

    let answer2Container = document.createElement('div');
    answer2Container.className = 'answer2';
    answer2Container.style.border = '1px solid #000';
    answer2Container.style.borderRadius = '8px';
    answer2Container.style.marginTop = '20px';
    answer2Container.style.padding = '10px';

    container.appendChild(heading);
    container.appendChild(label);
    container.appendChild(colorPickerSelector);
    container.appendChild(answer2Container);
    mainContainer.appendChild(container);

    colorPickerSelector.addEventListener('input', function () {
        let valueOfColor = colorPickerSelector.value;

        answer2Container.innerHTML = `<p><span style="background-color: ${valueOfColor}; color: ${invertColor(valueOfColor)}">${valueOfColor}</span> to twój wybrany kolor.</p>`;
    });
}

function invertColor(hex) {
    hex = hex.slice(1);
    return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase();
}

function mathFunc() {
    let num1 = parseFloat(prompt("Podaj liczbę pierwszą: "));
    let operator = prompt("Jakie działanie chcesz wykonać? \n+ dodawanie \n- odejmowanie \n* mnożenie \n/ dzielenie \n^do potęgi \np pierwiastek");
    let num2 = parseFloat(prompt("Podaj liczbę drugą: "));
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                document.querySelector('.answer').innerHTML = "Pamiętaj cholero, nie dziel przez 0!";
                return;
            }
            break;
        case '^':
            result = Math.pow(num1, num2);
            break;
        case 'p':
            result = Math.pow(num1, 1 / num2);
            break;
        default:
            document.querySelector('.answer').innerHTML = "400 Bad Request.";
            return;
    }

    document.querySelector('.answer').innerHTML = "Wynik to: " + result.toFixed(2);
}

function rockPaperScissors() {
    const validMoves = ["k", "p", "n"];
    const yourMove = prompt('Witaj w grze kamień papier nożyce! ✊ ✋ ✌️\nWybierz swoją rolę:\nk = kamień \np = papier \nn = nożyce\n').toLowerCase();

    if (!validMoves.includes(yourMove)) {
        alert("Błąd! Nieprawidłowa wartość, spróbuj ponownie!");
        return;
    }

    const botChoose = ["k", "p", "n"];
    const randomBotChoose = Math.floor(Math.random() * botChoose.length);
    const botMove = botChoose[randomBotChoose];

    const botName = "bot" + "#" + Math.round(Math.random() * 2000);

    if (yourMove === botMove) {
        alert(`Dałeś/aś ${getMoveName(yourMove)}\n${botName} dał ${getMoveName(botMove)}!\nRemis!`);
    } else if ((yourMove === "k" && botMove === "n") || (yourMove === "p" && botMove === "k") || (yourMove === "n" && botMove === "p")) {
        alert(`Dałeś/aś ${getMoveName(yourMove)}\n${botName} dał ${getMoveName(botMove)}!\nWygrywasz!`);
    } else {
        alert(`Dałeś/aś ${getMoveName(yourMove)}\n${botName} dał ${getMoveName(botMove)}!\nPrzegrywasz!`);
    }
}

function getMoveName(move) {
    switch (move) {
        case "k":
            return "kamień";
        case "p":
            return "papier";
        case "n":
            return "nożyce";
        default:
            return "";
    }
}

function sendMsg() {

    let welcomeInput = {
        elo: "elo",
        czesc: "czesc",
        czesc2: "cześć",
        witam: "witam",
        witaj: "witaj",
        jol: "joł",
        siema: "siema",
        yoo: "yoo"
    };

    let jokes = ['Jaki jest ulubiony owoc programisty? <br>Borówka, bo lubi być w tym samym "loopie"!', 'Jak zmusić programistę do wyjścia z domu? <br>Zamknij mu terminal',
'-Dzień dobry! Do czego służą okulary? <br>-Do widzenia!', 'Idzie jasiu do bacy i mówi:<br>– Powiedzcie „Chrząszcz brzmi w trzcinie”<br>a baca na to: chrobok burcy w trowie.',
'Dlaczego nie da się zjeść zegarka?<br>Bo to zbyt czasochłonne', 'Jak się nazywa lekarz, który leczy pandy? <br>Pandoktor',
'Jak się nazywa pszczoła bez czoła? Psz', 'Jasio mówi do kolegi: <br>Kiedyś byłem bardzo niezdecydowany. Teraz w sumie sam nie wiem', 'Zofia po 2 tygodniach diety zrzuciła wagę... <br>z ósmego piętra',
'Co robi dziadek na dyskotece? <br>Tańczy z laską', 'Dlaczego długopisy nie chodzą do szkoły? <br>Bo się wypisały', 'Co robi skejter w toalecie? <br>Szaleje na desce',
'Co robi mały kościotrup na plaży? <br>Bawi się łopatką', 'Co mówi nauczycielka geografii gdy wybiera kolor butów? <br>Morze czerwone',
'Jaki piją wódkę konduktorzy? <br>Po kolei', 'Co mówi piłkarz, gdy przychodzi do fryzjera? <br>Gol!', 'Co robi sprzątaczka na scenie? <br>Wymiata', 
'W jaki sposób chodzi elektryk? <br>Napięcie', 'Jak stolarze czytają książki? <br>Od deski do deski', 'Jak nazywa się bąk króla? <br>Gaz szlachetny',
'Jakie drewno ma głupie pomysły? <br>Porąbane', 'Dlaczego wulkan dostał 5 na lekcji? <br>Bo był aktywny', 'Co robi informatyk u lekarza? <br>Pobiera krew',
'Co mówi informatyk gdy dostanie na urodziny pendrive\'a? <br>Dzięki za pamięć!', 'Co mówi terrorysta do dziecka? <br>Wysadzę cię pod szkołą',
'W co grają węgrzy? <br>Węgrybirds', 'Jaka jest ulubiona zemsta cukiernika? <br>Słodka', 'Jak zapytać Felka jak ma na imię? <br>Pan-to-felek?',
'W jakim stanie USA nie pije się alkoholu? <br>W stanie trzezwym', 'Jak informatyk chroni się przed koronawirusem? <br>Antywirusem',
'Jak wita się mleko? <br>Mlekovita', 'Dlaczego woda nie zdała egzaminu? <br>Bo oblała', 'Gdzie bociany chodzą na zakupy? <br>Do żabki',
'Ile zarabia mechanik samochodowy? <br>Cztery koła', 'Co mówi elektryk do przyjaciela? <br>Będziemy w kontakcie', 
'Jak piją matematycy? <br>Na potęgę', 'Czego najbardziej nie lubi bramkarz na matmie? <br>Słupków', 'Co robi strażak na siłowni? <br>Spala kalorie',
'Jaka jest ulubiona ryba matematyka? <br>Suma', 'Co robi rycerz, kiedy zapina kurtkę? <br>Męczy się z zamkiem', 'Jaki jest ulubiony owoc żołnierza? <br>Granat',
'Jak się nazywa związek orangutana i żaby? <br>Oranżada', 'Co mówi ksiądz po ślubie informatyka? <br>Pobieranie zakończone',
'Co robi grabarz? <br>Częstochowa', 'Co robią dwie herbaty na ringu? <br>Naparzają się', 'Co mówi ogrodnik do kumpla? <br>Przesadziłeś',
'Dlaczego choinka nie jest głodna? <br>Bo jodła', 'Ulubiony baton informatyka? <br>3 bit', 'Co robi piłkarz na autostradzie? <br>Stoi w korkach',
'Co robi 9 złotych w portfelu? <br>Ledwo dycha', 'Czemu Napoleon zjechał windą w dół? <br>Bo Naparter',
'Co mówi matematyk do przyjaciela? <br>Liczę na ciebie', 'Jak Staś żegna Nel? <br>Panel', 'Ulubiony ocet prokuratora? <br>Winny',
'W co gra śmieciarz? <br>W kosza'
];
let randomJoke = Math.floor(Math.random() * jokes.length);
let txtArea = document.getElementsByClassName("askgpt")[0];

    if ((txtArea.value.includes("zart") || txtArea.value.includes("żart")) && (txtArea.value.endsWith("?") || txtArea.value.endsWith(""))) {

        let gptAnswer = document.querySelector('.answer').innerHTML = jokes[randomJoke];
    }
    else if ((txtArea.value.includes("dzialanie")) || (txtArea.value.includes("działanie")) && (txtArea.value.endsWith("?") || txtArea.value.endsWith(""))) {
        mathFunc();
    }
    else if ((txtArea.value.includes("color picker")) || (txtArea.value.includes("colorpicker")) && (txtArea.value.endsWith("?") || txtArea.value.endsWith(""))) {
        colorPickerApp();
    }   
    else if ((txtArea.value.includes("kpn")) || (txtArea.value.includes("pkn") || (txtArea.value.includes("papier kamien nozyce")) ||
     (txtArea.value.includes("papier kamień nożyce")) || (txtArea.value.includes("kamien papier nozyce") || (txtArea.value.includes("kamień papier nożyce"))))
     && (txtArea.value.endsWith("?") || txtArea.value.endsWith(""))) {
        rockPaperScissors();
    } else if (txtArea.value.includes(welcomeInput.elo) || txtArea.value.includes(welcomeInput.czesc) || txtArea.value.includes(welcomeInput.czesc2) ||
     txtArea.value.includes(welcomeInput.witam) || txtArea.value.includes(welcomeInput.witaj) || txtArea.value.includes(welcomeInput.jol) ||
     txtArea.value.includes(welcomeInput.siema) || txtArea.value.includes(welcomeInput.yoo)) {
        let gptAnswer = document.querySelector('.answer').innerHTML = 'Witam! w czym mogę ci dzisiaj pomóc?';
        /* TODO: Dodawaj tutaj pytania z góry! */
        if ((txtArea.value.includes("zart") || txtArea.value.includes("żart")) && (txtArea.value.endsWith("?") || txtArea.value.endsWith(""))) {

            let gptAnswer = document.querySelector('.answer').innerHTML = jokes[randomJoke];
        }
        else if ((txtArea.value.includes("dzialanie")) || (txtArea.value.includes("działanie")) && (txtArea.value.endsWith("?") || txtArea.value.endsWith(""))) {
            mathFunc();
        }
        else if ((txtArea.value.includes("color picker")) || (txtArea.value.includes("colorpicker")) && (txtArea.value.endsWith("?") || txtArea.value.endsWith(""))) {
            colorPickerApp();
        }   
        else if ((txtArea.value.includes("kpn")) || (txtArea.value.includes("pkn") || (txtArea.value.includes("papier kamien nozyce")) ||
         (txtArea.value.includes("papier kamień nożyce")) || (txtArea.value.includes("kamien papier nozyce") || (txtArea.value.includes("kamień papier nożyce"))))
         && (txtArea.value.endsWith("?") || txtArea.value.endsWith(""))) {
            rockPaperScissors();
        }
    }   
    else {
        document.getElementsByClassName("answer")[0].innerHTML = "400 Bad Request.";
    }
}
function onPremiumButtonClick() {
   let gptPremium = window.open('orzechgptPremium.html', '_blank', 'width=1102, height=838');
}
function onSettingsButtonClick() {
   let gptSettings = window.open('settings.html', '_parent');
}


