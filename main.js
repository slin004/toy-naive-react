var render = function(){
    return `
        <p>rendering an component</p>
    `;
};

var initState = function(){
    return {};
};

var emptyAndRenderTo = function (component, selector) {
    $( selector ).empty().append(renderHTML(component));
};

var renderHTML = function (component){
    // TODO: need to implemente black magic
    //  to support the methods like computeOnMounted,
    //  and parsing
    //  and attribute handling, state handling
    //  and recursion
    
    // nodes = parseHTML(component)
    // return nodes.map(node => renderHTML(node) )
    //  .reduce((accu, curr) => accu + curr);
    return component
};

var state = initState();
$( document ).ready(function () {
    console.log("loaded js");
    let html = render(state);
    $("#root").append(html);

    // TODO
    //let baseComponent = `<App>Base App starts here</App>`;
    //emptyAndRenderTo(baseComponent, "#root");
});

