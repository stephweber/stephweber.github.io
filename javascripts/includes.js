
function load_content(contentname) {
  $("#included-content").load(contentname + ".html");
}

function section_names() {
  return ['home', 'research', 'publications', 'cv', 'contact'];
}

function deactivate() {
  var sections = section_names();
  for (var i = 0; i < sections.length; i++) {
    $("#" + sections[i]).removeClass("active");
  }
}

function do_section(name) {
  deactivate();
  $("#" + name).addClass("active");
  $("#" + name + "-link").blur();
  load_content(name);
}

function create_click_function(name) {
  return function() {
    if (window.location.href.search("index\\.html") == -1) {
      window.history.pushState("", "", "/index.html");
    }
    window.location.search = "?" + name;
    do_section(name);
  }
}

function onLoad() {
  var section = window.location.search.substring(1); // strip leading ?
  if (section == "") {
    do_section("home");
  } else {
    do_section(section);
  }
}

$(function() {
  var sections = section_names();
  for (var i = 0; i < sections.length; i++) {
    $("#" + sections[i] + "-link").click(create_click_function(sections[i]));
  }
  onLoad();
})


window.onpopstate = onLoad;

