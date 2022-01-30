const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let subexpr = []
    for (let i = 0; i < expr.length/10; i++){
        subexpr[i] = expr.slice(i*10,i*10+10)
    }
subexpr = subexpr.map(el => String(+el))
let arr = []
    for (let key in subexpr){
    let res = ""
        if (subexpr[key] !== "NaN"){
            for (let i = 0; i < subexpr[key].length; i=i+2){
                (subexpr[key][i]+subexpr[key][i+1] === "10")? res += "." : res += "-"
            }
            arr.push(MORSE_TABLE[res])
        } else {arr.push(" ")}
    }

return arr.join("")
}

module.exports = {
    decode
}