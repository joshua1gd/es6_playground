
export default function (tagName, text){
    const newTag = document.createElement(tagName);
    newTag.innerText = text;

    document.getElementById('root').appendChild(newTag);
}

