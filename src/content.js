const content = document.querySelector('.main__content');
const title = document.querySelector('.main__header h1');

export const renderProfileContent = (data) => {

    title.textContent = data.name;

    content.innerHTML = '';
    content.innerHTML = `
        <div class="main__content-img">
          <img src="${data.img}" alt=""/>
          <p class="text text-just">${data.description}</p>
        </div>
        `;
};

const knowledgeContentHtml = (name, percent) => {
    return name === ""
        ? `<li><br></li>` 
        : `
                <li>
                <span>${name}</span>
                <span class="percent">
                    <div style="width: ${percent}%"></div>
                </span>
                </li>
            `;
}

export const renderKnowledgeContent = (data, name) => {
    title.textContent = name;
    content.innerHTML = '';

    const div = document.createElement('div');
    div.classList.add('skills');
    const ul = document.createElement('ul');

    data.forEach((element) => {
        ul.innerHTML += knowledgeContentHtml(element.name, element.percent);
    });

    div.appendChild(ul);
    content.appendChild(div);

}

export const renderEducationContent = (data, name) => {

    console.log(data);

    content.innerHTML = '';
    title.textContent = name;

    data.forEach((element) => {
        content.innerHTML += `
            <p class="name text">${element.name}</P>
            <P class="date text">${element.start} - ${element.end}</p>
            <p class="text">${element.description}</p>`
    });
};

export const renderExperienceContent = (data, name) => {
    title.textContent = name;
    content.innerHTML = '';

    data.forEach((element) => {
        content.innerHTML += `
            <p class="name text">${element.company}</p>
            <p class="date text">als ${element.name} von: ${element.date}</p>
            <p class="text">${element.description}</p>`
    });
};


export const renderBlogContent = (data, name) => {
    title.textContent = name;
    content.innerHTML = '';

    data.forEach((element) => {

        content.innerHTML += 
        `<article>
            <p class="name text">${element.title}</p>
            <p class="date text"> ${element.date}</p>
            <p class="text">${element.description}</p>
            <img src="${element.link}" alt="">
        </article>`;
    });
};