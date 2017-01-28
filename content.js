var en2hy = {
  a : '\u0561', 
  b : '\u0562',
  c : '\u0581',
  d : '\u0564',
  e : '\u0567',
  f : '\u0586',
  g : '\u0563',
  h : '\u0570',
  i : '\u056B',
  j : '\u057B',
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
  u : '\u0578\u0582',
  v : '\u057E',
  w : '\u0578',
  x : '\u056D',
  y : '\u0575',
  z : '\u0566'
};

function translateEnglish2ArmenianPhonetically(englishText) {
    var ret = "";
    for (var i = 0; i < englishText.length; ++i) {
        var temp = englishText[i];
        if (temp >= 'a' && temp <= 'z') {
            ret += en2hy[temp];
        } else {
            ret += temp;
        }
    }
    return ret;
}

function googleTranslateEn2Hy() {
    var source = document.getElementById("source");
    var temp = source.value;
    source.value = translateEnglish2ArmenianPhonetically(temp); 
}

function sourceOnInput() {
    var source = document.getElementById("source");
    source.oninput = googleTranslateEn2Hy;
}

document.addEventListener("DOMContentLoaded", sourceOnInput);
