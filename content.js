var keyCode2Letter = [];
keyCode2Letter[ 65] = '\u0561'; keyCode2Letter[ 66] = '\u0562';
keyCode2Letter[ 67] = '\u0581'; keyCode2Letter[ 68] = '\u0564';
keyCode2Letter[ 69] = '\u0565'; keyCode2Letter[ 70] = '\u0586';
keyCode2Letter[ 71] = '\u0563'; keyCode2Letter[ 72] = '\u0570';
keyCode2Letter[ 73] = '\u056B'; keyCode2Letter[ 74] = '\u0575';
keyCode2Letter[ 75] = '\u056F'; keyCode2Letter[ 76] = '\u056C';
keyCode2Letter[ 77] = '\u0574'; keyCode2Letter[ 78] = '\u0576';
keyCode2Letter[ 79] = '\u0578'; keyCode2Letter[ 80] = '\u057A';
keyCode2Letter[ 81] = '\u0584'; keyCode2Letter[ 82] = '\u057C';
keyCode2Letter[ 83] = '\u057D'; keyCode2Letter[ 84] = '\u057F';
keyCode2Letter[ 85] = '\u0582'; keyCode2Letter[ 86] = '\u057E';
keyCode2Letter[ 87] = '\u0578'; keyCode2Letter[ 88] = '\u0572';
keyCode2Letter[ 89] = '\u0568'; keyCode2Letter[ 90] = '\u0566';
keyCode2Letter[ 49] = '\u0567'; keyCode2Letter[ 50] = '\u0569';
keyCode2Letter[ 51] = '\u0583'; keyCode2Letter[ 52] = '\u0571';
keyCode2Letter[ 53] = '\u057B'; keyCode2Letter[ 54] = '\u0582';
keyCode2Letter[ 55] = '\u0587'; keyCode2Letter[ 56] = '\u0580';
keyCode2Letter[ 57] = '\u0579'; keyCode2Letter[ 48] = '\u0573';
keyCode2Letter[187] = '\u056A'; keyCode2Letter[219] = '\u056D';
keyCode2Letter[221] = '\u056E'; keyCode2Letter[220] = '\u0577';

var lang2KeyboardLayout = { "hy" : keyCode2Letter };

function getSourceLanguage() {
    return (document.getElementById("gt-sl-sugg").
        getElementsByClassName("jfk-button-checked"))[0].
        getAttribute("value");
}

function convertLastTypedSymbol(source, event) {
    var srcLang = getSourceLanguage();
    var mapping = lang2KeyboardLayout[srcLang];
    if (mapping === undefined) return source;
    var lastCharMapped = mapping[event.keyCode];
    if (lastCharMapped == undefined) return source;
    event.preventDefault();
    return source + lastCharMapped;
}

function sourceOnKeyDownEventHandler(event) {
    var source = document.getElementById("source");
    var currentSourceValue = source.value;
    source.value = convertLastTypedSymbol(currentSourceValue, event);
}

function registerSourceOnKeyDownEventHandler() {
    var source = document.getElementById("source");
    source.onkeydown=sourceOnKeyDownEventHandler;
}

document.addEventListener("DOMContentLoaded", registerSourceOnKeyDownEventHandler);
