const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const cardCreator = (data) => {
    const containerEl = cE ("div");
    const containerTextEl = cE ("div");
    const firstNameEl = cE ("h1");
    const lastNameEl = cE ("h3");
    const ageEl = cE ("span");
    const phoneEl = cE ("span");
    const userNameEl = cE ("h3");


    containerEl.className = "users"
    firstNameEl.className = "firstName"
    firstNameEl.textContent = data.firstName;
    lastNameEl.classname = "lastName"
    lastNameEl.textContent = data.lastName;
    ageEl.textContent = "Anni" + data.age;
    phoneEl.textContent = " N.Cellulare--> " + data.phone;
    userNameEl.className = "userName"
    userNameEl.textContent = data.username;



    containerTextEl.append(firstNameEl, lastNameEl, ageEl, phoneEl, userNameEl,)
    containerEl.appendChild(containerTextEl);
    return containerEl;
}



export {cE, qS, cardCreator}