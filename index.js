// 1
const heading = document.querySelector(".heading");
heading.closest("header").style.border = "5px solid grey";

// 2
const infoSection = document.querySelector(".info");
// mein erster ansatz
// for (let i = 0; i < infoSection.children.length; i++) {
//     let infoSecChildChildren = infoSection.children;
//     let infoSecChildChildrenCheck = infoSecChildChildren[i].children[i];
//     console.log(infoSecChildChildren[i]);
//     // console.log(
//     //     infoSecChildChildren[i].children[i].classList.contains("package-title")
//     // );
//     if (infoSecChildChildrenCheck.classList.contains("package-title")) {
//         // console.log(infoSecChildChildrenCheck);
//         infoSecChildChildrenCheck.previousElementSibling.style.border =
//             "5px solid black";
//     }
// }

// verbesserung/final
for (let i = 0; i < infoSection.children.length; i++) {
    let infoSecChildChildren = infoSection.children[i].children;
    for (let j = 0; j < infoSecChildChildren.length; j++) {
        let child = infoSecChildChildren[j];
        if (child.classList.contains("package-title")) {
            child.previousElementSibling.style.border = "2px solid #072F5F";
        }
    }
}

// 3
for (let i = 0; i < infoSection.children.length; i++) {
    let infoSecChildChildren = infoSection.children[i].children;
    for (let j = 0; j < infoSecChildChildren.length; j++) {
        let child = infoSecChildChildren[j];
        // console.log(child);
        if (child.classList.contains("mild")) {
            child.style.borderBottom = "3px solid yellow";
        }
        if (child.classList.contains("intense")) {
            child.style.borderBottom = "3px solid orange";
        }
        // if (child.classList.contains("extreme")) {
        //     child.style.borderBottom = "3px solid red";
        // }
        if (
            child.localName === "label" &&
            !child.classList.contains("mild") &&
            !child.classList.contains("intense")
        ) {
            child.style.borderBottom = "3px solid red";
        }
    }
}

// 4
const nav = document.querySelector("nav");
const footer = document.querySelector(".footer .site-map");

const appendNavChildrenToFooter = () => {
    // const navChildren = nav.children;

    // let navChildrenCopy = [];

    // for (let i = 0; i < navChildren.length; i++) {
    //     navChildrenCopy.push(navChildren[i]);
    // }

    // return footer.appendChild(navChildrenCopy[0]);
    const navChildren = nav.children;

    for (let i = 0; i < navChildren.length; i++) {
        let navChildCopy = document.createElement(navChildren[i].tagName);
        navChildCopy.innerHTML = navChildren[i].innerHTML;
        for (let j = 0; j < navChildren[i].attributes.length; j++) {
            let attr = navChildren[i].attributes[j];
            navChildCopy.setAttribute(attr.name, attr.value);
        }
        footer.appendChild(navChildCopy);
    }
};
appendNavChildrenToFooter();
