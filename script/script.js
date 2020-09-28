// STATE
let section = 0;
let nextSection = document.getElementById('next_section');
let previousSection = document.getElementById('previous_section');
let responsive = false;

// SELECTEURS DE CHAQUE ELEMENT
let browser = document.getElementById('outer-wrapper');
let introductionVanillaContainer = document.getElementById('introduction_vanilla_container');
let vanilla = document.getElementById('introduction_vanilla');
let maincontent = document.getElementById('sections');
let scrollSections = document.getElementsByClassName('section_fullpage');
let firstSVG = document.getElementsByClassName('st0');

function section_two() {
        if(responsive == false) {
                svgDelay();
                browser.style.marginLeft = '300vw';
                introductionVanillaContainer.style.transform = "none";
                vanilla.style.top = '20px';
                vanilla.style.left = '100px';
                vanilla.style.fontSize = '2em';
                vanilla.style.color = 'white';
                scrollSections[1].style.top = '100vh';
                document.querySelectorAll('.st0').forEach( Layer => {
                Layer.style.animationPlayState = "running";
                });
        } else {
                // VERSION MOBILE
                svgDelay();
                browser.style.marginLeft = '300vw';
                introductionVanillaContainer.style.transform = "none";
                vanilla.style.top = '20px';
                vanilla.style.left = '50px';
                vanilla.style.fontSize = '2em';
                vanilla.style.color = 'white';
                scrollSections[1].style.top = '100vh';
                document.querySelectorAll('.st0').forEach( Layer => {
                Layer.style.animationPlayState = "running";
                });
        };
}

function section_one() {
        if(responsive == false) {
                browser.style.marginLeft = '0';
                introductionVanillaContainer.style.transform = `rotateY(40deg) rotateZ(10deg) rotateX(10deg) scale(0.5)`;
                vanilla.style.top = '250px';
                vanilla.style.left = '150px';
                vanilla.style.fontSize = '5em';
                vanilla.style.color = 'black';
                scrollSections[1].style.top = '0';
                document.querySelectorAll('.st0').forEach( Layer => {
                Layer.style.animationPlayState = "pause";
                });
        } else {
                // VERSION MOBILE
                browser.style.marginLeft = '0';
                introductionVanillaContainer.style.transform = `rotateY(40deg) rotateZ(10deg) rotateX(10deg) scale(0.5)`;
                vanilla.style.top = '180px';
                vanilla.style.left = '10px';
                vanilla.style.fontSize = '3em';
                vanilla.style.color = 'black';
                scrollSections[1].style.top = '0';
                document.querySelectorAll('.st0').forEach( Layer => {
                Layer.style.animationPlayState = "pause";
                });
        };
}

nextSection.addEventListener("click", function(){
        if(section == 0) {
                getResponsive();
                section_two();
                section = 1;
        }
});

previousSection.addEventListener("click", function(){
        if(section == 1) {
                getResponsive();
                section_one();
                section = 0;
        }
});

function svgDelay() {
        let i = 0;
        document.querySelectorAll('.st0').forEach( Layer => {
                Layer.style.animationDelay = i + "s";
                i = i + 0.05;
        });
}

function getResponsive(change) {
        if(window.innerWidth < 1300) {
                responsive = true;
        } else {
                responsive = false;
        }
        if(change == 'true') {
                if(section == 0) {
                        section_one();
                } else if(section == 1) {
                        section_two();
                };
        };
}

window.addEventListener('resize', function() {
        getResponsive('true');
});