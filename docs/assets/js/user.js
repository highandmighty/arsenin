// Custom user scripts
function linksTargetBlank() {
  // remove subdomain of current site's url and setup regex
  var internal = location.host.replace("www.", "");
      internal = new RegExp(internal, "i");

  var a = document.getElementsByTagName('a'); // then, grab every link on the page
  for (var i = 0; i < a.length; i++) {
    var href = a[i].host; // set the host of each link
    if( !internal.test(href) ) { // make sure the href doesn't contain current site's host
      a[i].setAttribute('target', '_blank'); // if it doesn't, set attributes
    }
  }
};

linksTargetBlank();

// Numerate text list
function numerateLinks() {
  var a = document.getElementsByClassName("list");
  var n = 1;
  for (var i = a.length - 1; i >= 0; i--) {
    var l = a[i].getElementsByTagName("a")[0];
    l.text = `${n} ・ ${l.text}`;
    n++;
  }
}

// numerateLinks() // Not needed
