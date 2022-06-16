function createBox(props) {
    const div = document.createElement('div')
    div.className = props.className
    props.container.appendChild(div)

    div.onclick = function() {
        alert('privet');
    }
    return div
}

function createParagraph(props) {
    const p = document.createElement('p')
    p.className = props.className
    p.innerText = props.content
    props.container.appendChild(p)

    return p
}

function createSpan(props) {
    const span = document.createElement('span')
    span.className = props.className
    span.innerText = props.content
    props.container.appendChild(span)

    return span;
}

const karobka = createBox({
    className: 'karobka',
    container: document.body
})

const text = createParagraph({
    className: 'sirun-text',
    content: 'Barev Dzez vonc eq?',
    container: karobka,
})

const smallText = createSpan({
    className: 'small-text',
    content: 'poqr text',
    container: text
})
