import { renderProfileContent, renderEducationContent, renderExperienceContent, renderKnowledgeContent, renderBlogContent } from './content.js';

const PATH = './data/data.json';
const buttons = document.querySelectorAll('.menu__nav a');


const switchContent = (data, index, title) => {

    switch (index) {
        case 0:
            renderProfileContent(data[index]);
            break;
        case 1:
            renderKnowledgeContent(data[index], title);
            break;
        case 2:
            renderEducationContent(data[index], title);
            break;
        case 3:
            renderExperienceContent(data[index], title);
            break;
        case 4:
            renderBlogContent(data[index], title);
            break;
        default:
            break;
    }
}

const resetActiveButtons = (index) => {
    buttons.forEach(button => {
        //button.className.remove("active");
        console.log(button.classList);
    });

    //buttons[index].classList.add("active");
}

const renderContentPage = (data) => {
    renderProfileContent(data[0]);

    buttons.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            resetActiveButtons();
            switchContent(data, index, e.target.textContent);
            e.currentTarget.className = "active";
        });
    });

}

(async () => {
    try {
        await fetch(PATH)
            .then((response) => response.json())
            .then((data) => renderContentPage(data));
    } catch (error) {
        console.log('something goes wrong!', error);
    }
})()