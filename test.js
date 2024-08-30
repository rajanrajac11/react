

function RenderElement(reactElement, container){
    let newElement = document.createElement(reactElement.type)
    newElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        newElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(newElement)
}

const reactElement = {
    type:'a',
    props:{
        href:'https://youtube.com',
        title:'Youtube'
    },
    children:'Helo YouTube'
}
const container = document.getElementById('root')

RenderElement(reactElement,container)