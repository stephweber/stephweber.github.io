function loadContent(contentname) {
    $("#included-content").load(contentname + ".html");
}

function sectionNames() {
    return ['home', 'research', 'teaching', 'publications',
            'cv', 'contact', 'join-us'];
}

function deactivate() {
    var sections = sectionNames();
    for (var i = 0; i < sections.length; i++) {
        $("#" + sections[i]).removeClass("active");
    }
}

function doSection(name) {
    deactivate();
    $("#" + name).addClass("active");
    $("#" + name + "-link").blur();
    loadContent(name);
}

function createClickFunction(name) {
    return function() {
        if (window.location.href.search("index\\.html") === -1) {
            window.history.pushState("", "", "/index.html");
        }
        window.location.search = "?" + name;
        doSection(name);
    };
}

function onLoad() {
    var section = window.location.search.substring(1); // strip leading ?
    if (section === "") {
        doSection("home");
    } else {
        doSection(section);
    }
}

$(function() {
    var sections = sectionNames();
    for (var i = 0; i < sections.length; i++) {
        $("#" + sections[i] + "-link").click(
            createClickFunction(sections[i]));
    }
    onLoad();
});

window.onpopstate = onLoad;
