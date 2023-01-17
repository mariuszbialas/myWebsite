import { renderProfileContent, renderEducationContent, renderExperienceContent, renderKnowledgeContent, renderBlogContent } from './content.js';

const PATH = './data/data.json';
const buttons = document.querySelectorAll('.menu__nav a');


const switchContent = (data, index, title) => {

    switch (index) {
        case 0:
            renderProfileContent(data.aboutMe[0]);
            break;
        case 1:
            renderKnowledgeContent(data.knowglegde, title);
            break;
        case 2:
            renderEducationContent(data.education, title);
            break;
        case 3:
            renderExperienceContent(data.experience, title);
            break;
        case 4:
            renderBlogContent(data.blog, title);
            break;
        default:
            break;
    }
}

const renderContentPage = (data) => {
    
    renderProfileContent(data.aboutMe[0]);

    buttons.forEach((btn, index) => btn.addEventListener('click', (e) => {

        // console.log(data, index, e.target.textContent)

        switchContent(data, index, e.target.textContent);

    }))
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