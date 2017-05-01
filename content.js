var en2hy = {
  a : '\u0561', 
  b : '\u0562',
  c : '\u0581',
  d : '\u0564',
  e : '\u0565',
  f : '\u0586',
  g : '\u0563',
  h : '\u0570',
  i : '\u056B',
  j : '\u0575',
  k : '\u056F',
  l : '\u056C',
  m : '\u0574',
  n : '\u0576',
  o : '\u0578',
  p : '\u057A',
  q : '\u0584',
  r : '\u057C',
  s : '\u057D',
  t : '\u057F',
  u : '\u0582',
  v : '\u057E',
  w : '\u0578',
  x : '\u0572',
  y : '\u0568',
  z : '\u0566',
  1 : '\u0567',
  2 : '\u0569',
  3 : '\u0583',
  4 : '\u0571',
  5 : '\u057B',
  6 : '\u0582',
  7 : '\u0587',
  8 : '\u0580',
  9 : '\u0579',
  0 : '\u0573',
  '=' : '\u056A',
  '[' : '\u056D',
  ']' : '\u056E',
  '\\' : '\u0577'
};

var sourceTarget2Mapping  = {
  en : { hy : en2hy }
};

function getSourceLanguage() {
    return (document.getElementById("gt-sl-sugg").getElementsByClassName("jfk-button-checked"))[0].getAttribute("value");
}

function translate(source) {
    var ret = "";
    var srcLang = getSourceLanguage();
    var mapping = sourceTarget2Mapping["en"][srcLang];
    if (mapping === undefined) return source;
    for (var i = 0; i < source.length; ++i) {
        var temp = source[i];
        var temp1 = mapping[temp];
        if (!(temp1 === undefined)) {
            ret += temp1;
        } else {
            ret += temp;
        }
    }
    return ret;
}

function googleTranslate() {
    var source = document.getElementById("source");
    var temp = source.value;
    source.value = translate(temp); 
}

function sourceOnInput() {
    var source = document.getElementById("source");
    source.oninput = googleTranslate;
}

document.addEventListener("DOMContentLoaded", sourceOnInput);
