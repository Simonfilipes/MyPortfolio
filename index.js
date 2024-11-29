var cont = 1
var cont_trad = 1
var img_3 = document.querySelector(".img_3")

img_3.style.display = "none";
img_3.style.visibility = "hidden";

ScrollReveal().reveal('.especialidades', { delay: 200 });
ScrollReveal().reveal('.sobre', { delay: 200 });

var body = document.body;
var h1 = document.querySelector("#h1");
var p_1 = document.querySelector("#p_1");
var p_2 = document.querySelector("#p_2");
var p_3 = document.querySelector("#p_3");
var p_4 = document.querySelector("#p_4");
var p_5 = document.querySelector("#p_5");
var p_6 = document.querySelector("#p_6");
var p_7 = document.querySelector("#p_7");
var p_8 = document.querySelector("#p_8");
var p_9 = document.querySelector("#p_9");
var p_10 = document.querySelector("#p_10");
var python = document.querySelector("#python");
var js = document.querySelector("#js");
var php = document.querySelector("#php");
var up = document.querySelector("#up");
var down = document.querySelector("#down");
var favorite = document.querySelector("#favorite");
var img_1 = document.querySelector("#img_1");
var h2 = document.querySelector("#h2");
var h2_1 = document.querySelector("#h2_1");
var h2_2 = document.querySelector("#h2_2");
var h3_1 = document.querySelector("#h3_1")
var h3_2 = document.querySelector("#h3_2")
var h3_3 = document.querySelector("#h3_3")
var h3_4 = document.querySelector("#h3_4")
var h3_5 = document.querySelector("#h3_5")
var h3_6 = document.querySelector("#h3_6")
var sobre_box = document.querySelector("#sobre_box");
var img_2 = document.querySelector("#img_2");
var frieren = document.querySelector("#frieren");
var toradora = document.querySelector("#toradora");
var vagabond = document.querySelector("#vagabond");
var li_1 = document.querySelector("#li_1");
var li_2 = document.querySelector("#li_2");
var li_3 = document.querySelector("#li_3");
var a_1 = document.querySelector("#a_1")

function verificarIndiomaCliente() {
    const idioma = navigator.language || navigator.userLanguage;

    if (idioma.startsWith('pt')) {
        pt();
        cont_trad = 2;
    } else {
    }

}

verificarIndiomaCliente();

function traduzir() {
    if (cont_trad == 1) {
        pt();
        cont_trad = 0

    } else {
        ingles();
        cont_trad = 1
    }
}

function ingles() {
    // TROCA DE TEXTO INGLÊS =============================================
    h1.innerHTML = 'MY NAME IS <span id="span-h1">SIMON</span>, A FULL STACK <span id="span-h1">DEVELOPER</span>, NICE TO MEET YOU.';
    h2.innerHTML = 'Program <span>Skills</span>';
    h2_1.innerHTML = 'Great pleasure, <span>Simon</span>';
    h2_2.innerHTML = 'My <span>Projects</span>';
    h3_5.innerHTML = 'My Portfolio';

    p_1.innerHTML = '<span id="span-p-topo-do-site">Programmers</span> and <span id="span-p-topo-do-site">artists</span> are the only professionals <br> who have their own profession as a <span id="span-p-topo-do-site">hobby</span>.';
    p_2.innerHTML = 'My name is Simon Filipe, a developer with a solid background in programming and currently studying Systems Development Technician. From an early age, I developed a strong interest in the area and have been building practical skills over the years.';

    p_3.innerHTML = "My experience includes working on independent and team projects, in which I have used languages such as Python, PHP, Java, JavaScript, HTML5 and CSS3. I have a solid understanding of programming logic, as well as a good knowledge of hardware and software, which gives me a complete grasp of the digital environment.";

    p_4.innerHTML = 'I have advanced English and am an adaptable professional, with an ease of communication and a love of collaborative work.';

    p_5.innerHTML = "Experience with Python 3.x, data manipulation, task automation, creation and consumption of RESTful APIs also is my first lenguage";

    p_6.innerHTML = 'Experience with JavaScript (ES6+), semantic HTML5, CSS3 (Flexbox, Grid). Knowledge of responsive design practices and user interactivity';

    p_7.innerHTML = "Experience with Java 8+ and a bit of frameworks like Spring Boot. Solid programming logic, the language I'm studying at the moment.";

    p_8.innerHTML = 'A website that I made as a team on the Systems Development Course, the website is a One Page about the game Hollow Knight, where we use HTML, CSS and JavaScript';
    p_9.innerHTML = 'A presentation page as a Portfolio of my skills, knowledge and projects in the area of ​​programming, with a lot of interactivity, I made every detail of this page with greatcare';
    p_10.innerHTML = 'A game made in Python using the Pygame library, I made it with a partner in two weeks ofwork, I really like the result we had with the game, since we were still beginners';

    li_1.innerHTML = '<a href="#sm">About Me</a>';
    li_2.innerHTML = '<a href="#ml">Skills</a>';
    li_3.innerHTML = '<a href="#af">Projects</a>';

    a_1.innerHTML = '<button>Contact</button>';
    // TROCA DE TEXTO INGLÊS =============================================
}

function pt() {
    // TROCA DE TEXTO PORTUGUÊS =============================================
    h1.innerHTML = 'MEU NOME É <span id="span-h1">SIMON</span>, UM <span id="span-h1">DESENVOLVEDOR</span> FULL STACK, PRAZER EM TE CONHECER.';
    h2.innerHTML = 'Habilidades de <span>Programação</span>';
    h2_1.innerHTML = 'Muito prazer, <span>Simon</span>';
    h2_2.innerHTML = 'Meus <span>Projetos</span>';
    h3_5.innerHTML = 'Meu Portfolio';

    p_1.innerHTML = '<span id="span-p-topo-do-site">Programadores</span> e <span id="span-p-topo-do-site">artistas</span> são os unicos profissionais <br> quem tem como sua própria profissão, o seu <span id="span-p-topo-do-site">hobby</span>.';
    p_2.innerHTML = 'Meu nome é Simon Filipe, desenvolvedor com sólida formação em programação e atualmente cursando Técnico em Desenvolvimento de Sistemas. Desde cedo, desenvolvi um forte interesse pela área e fui construindo habilidades práticas ao longo dos anos.';

    p_3.innerHTML = "Minha experiência inclui atuação em projetos independentes e em equipe, nos quais utilizei linguagens como Python, PHP, Java, JavaScript, HTML5 e CSS3. Tenho um sólido entendimento da lógica de programação, além de um bom conhecimento em hardware e software, o que me proporciona um domínio completo sobre o ambiente digital.";

    p_4.innerHTML = 'Possuo inglês avançado e sou um profissional adaptável, com facilidade de comunicação e gosto por trabalho colaborativo.';

    p_5.innerHTML = 'Experiência com Python 3.x, manipulação de dados, automação de tarefas, criação e consumo de APIs RESTful também é minha primeira língua';

    p_6.innerHTML = 'Experiência com JavaScript (ES6+), HTML5 semântico, CSS3 (Flexbox, Grid). Conhecimento de práticas de design responsivo e interatividade do usuário';

    p_7.innerHTML = "Experiência com Java 8+ e um pouco de frameworks como Spring Boot. Lógica de programação sólida, a linguagem que estou estudando no momento.";

    p_8.innerHTML = 'Site que fiz em equipe no Curso de Desenvolvimento de Sistemas, o site é um One Page sobre o jogo Hollow Knight, onde usamos HTML, CSS e JavaScript';
    p_9.innerHTML = 'Uma página de apresentação como Portfólio das minhas habilidades, conhecimentos e projetos na área de programação, com muita interatividade, fiz cada detalhe dessa página com muito carinho';
    p_10.innerHTML = 'Um jogo feito em Python utilizando a biblioteca Pygame, fiz com um parceiro em duas semanas de trabalho, gostei muito do resultado que tivemos com o jogo, pois ainda éramos iniciantes';

    li_1.innerHTML = '<a href="#sm">Sobre Mim</a>';
    li_2.innerHTML = '<a href="#ml">Habilidades</a>';
    li_3.innerHTML = '<a href="#af">Projetos</a>';

    a_1.innerHTML = '<button>Contato</button>';
    // TROCA DE TEXTO PORTUGUÊS =============================================
}

function mudar_cor_up() { // CARINHA FELIZ
    var up = document.querySelector("#up")
    var down = document.querySelector("#down")
    var favorite = document.querySelector("#favorite")

    if (cont == 1) {
        up.style.backgroundColor = "#00ca07";

        down.style.backgroundColor = "rgb(255, 255, 255)";
        favorite.style.backgroundColor = "rgb(255, 255, 255)";
    } else {
        up.style.backgroundColor = "#00ca07";

        down.style.backgroundColor = "#000000";
        favorite.style.backgroundColor = "#000000";
    }
}

function mudar_cor_down() { // CARINHA MÉDIA
    var up = document.querySelector("#up")
    var down = document.querySelector("#down")
    var favorite = document.querySelector("#favorite")

    if (cont == 1) {
        up.style.backgroundColor = "rgb(255, 255, 255)";

        down.style.backgroundColor = "#ff8100";

        favorite.style.backgroundColor = "rgb(255, 255, 255)";
    } else {
        up.style.backgroundColor = "#000000";

        down.style.backgroundColor = "#ff8100";

        favorite.style.backgroundColor = "#000000";
    }
}

function mudar_cor_favorite() { // CARINHA IRRITADA
    var up = document.querySelector("#up")
    var down = document.querySelector("#down")
    var favorite = document.querySelector("#favorite")

    if (cont == 1) {
        up.style.backgroundColor = "rgb(255, 255, 255)";
        down.style.backgroundColor = "rgb(255, 255, 255)";

        favorite.style.backgroundColor = "#ff0000";
    } else {
        up.style.backgroundColor = "#000000";
        down.style.backgroundColor = "#000000";

        favorite.style.backgroundColor = "#ff0000";
    }
}

function mudar_cor_site() {

    var img_3 = document.querySelector(".img_3")
    var img_1 = document.querySelector("#img_1")

    if (cont == 1) {
        black();
        cont = 0;
        img_3.style.transition = "1.5s ease";
        img_3.style.display = "flex";
        img_3.style.visibility = "visible";

        img_1.style.transition = "1.5s ease";
        img_1.style.display = "none";
        img_1.style.visibility = "hidden";
        img_1.style.animation = "flutuar 3s";
        img_1.style.animation = "flutuar 5s";
    } else {
        white();
        cont = 1;
        img_3.style.transition = "1.5s ease";
        img_3.style.display = "none";
        img_3.style.visibility = "hidden";

        img_1.style.transition = "1.5s ease";
        img_1.style.display = "flex";
        img_1.style.visibility = "visible";
    }

}

function black() {

    // TRANSITION
    body.style.transition = "background-color 1.5s ease";

    up.style.transition = ".5s ease";
    down.style.transition = ".5s ease";
    favorite.style.transition = ".5s ease";

    h1.style.transition = "2s ease";
    h2.style.transition = "2s ease";
    h2_1.style.transition = "2s ease";
    h2_2.style.transition = "2s ease";
    p_1.style.transition = "2s ease";
    p_2.style.transition = "2s ease";
    p_3.style.transition = "2s ease";
    p_4.style.transition = "2s ease";

    sobre_box.style.transition = "1.5s ease";

    // TRANSITION

    // COLOR
    body.style.backgroundColor = "White";

    up.style.backgroundColor = "#000000";
    down.style.backgroundColor = "#000000";
    favorite.style.backgroundColor = "#000000";

    up.style.color = "White";
    down.style.color = "White";
    favorite.style.color = "White";

    h1.style.color = "#000000";
    h2.style.color = "#000000";
    h2_1.style.color = "#000000";
    h2_2.style.color = "#000000";
    p_1.style.color = "#000000";
    p_2.style.color = "#000000";
    p_3.style.color = "#000000";
    p_4.style.color = "#000000";
    // COLOR

    // BOX-SHADOW
    img_1.style.boxShadow = "0px 0px 8px #000000"

    python.style.boxShadow = "0px 0px 8px #000000"
    js.style.boxShadow = "0px 0px 8px #000000"
    php.style.boxShadow = "0px 0px 8px #000000"

    frieren.style.boxShadow = "0px 0px 8px #000000"
    toradora.style.boxShadow = "0px 0px 8px #000000"
    vagabond.style.boxShadow = "0px 0px 8px #000000"

    sobre_box.style.boxShadow = "0px 0px 8px #000000"
    img_2.style.boxShadow = "0px 0px 8px #000000"
    img_3.style.boxShadow = "0px 0px 15px #000000"
}

function white() {
    // TRANSITION
    body.style.transition = "background-color 1.5s ease";

    up.style.transition = ".5s ease";
    down.style.transition = ".5s ease";
    favorite.style.transition = ".5s ease";

    h1.style.transition = "2s ease";
    h2.style.transition = "2s ease";
    h2_1.style.transition = "2s ease";
    h2_2.style.transition = "2s ease";
    p_1.style.transition = "2s ease";
    p_2.style.transition = "2s ease";
    p_3.style.transition = "2s ease";
    p_4.style.transition = "2s ease";

    sobre_box.style.transition = "1.5s ease";

    // TRANSITION

    // COLOR
    body.style.backgroundColor = "#000000";

    up.style.backgroundColor = "White";
    down.style.backgroundColor = "White";
    favorite.style.backgroundColor = "White";

    up.style.color = "#000000";
    down.style.color = "#000000";
    favorite.style.color = "#000000";

    h1.style.color = "White";
    h2.style.color = "White";
    h2_1.style.color = "White";
    h2_2.style.color = "White";
    p_1.style.color = "White";
    p_2.style.color = "White";
    p_3.style.color = "White";
    p_4.style.color = "White";
    // COLOR

    // BOX SHADOW
    python.style.boxShadow = "0px 0px 5px White"
    js.style.boxShadow = "0px 0px 5px White"
    php.style.boxShadow = "0px 0px 5px White"

    frieren.style.boxShadow = "0px 0px 5px White"
    toradora.style.boxShadow = "0px 0px 5px White"
    vagabond.style.boxShadow = "0px 0px 5px White"

    sobre_box.style.boxShadow = "0px 0px 4px White"
}