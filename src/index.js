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
    let code=expr;
    let result='';
    code.split('');
    let arr10=[];
    let arrCode=[];
    for(let i=0,j=0;i<expr.length; i+=10){
        arr10.push(code.slice(i,i+10));
    }
    for(let i=0; i<arr10.length; i++){
        arrCode.push([]);
        for(let j=0; j<arr10[i].length; j++){            
            if(arr10[i][j]=='0'){
                j++;
                continue;
            }
            if(arr10[i][j]=='1'){
                if(arr10[i][j+1]=='0'){
                    arrCode[i].push('.');
                    j++
                } else {
                    arrCode[i].push('-');
                    j++;
                }
            }
            if(arr10[i][j]=='*'){
                arrCode[i].push(' ');
                j+=10;
            }
        }
        arrCode[i] = arrCode[i].join('');
    }
    for(let i=0; i<arrCode.length; i++){
        for(let key in MORSE_TABLE){
            if(arrCode[i]==[key]){
                result+=MORSE_TABLE[key];
            }          
        }
        if(arrCode[i]==' '){
                result+=' ';
        }
    }
    return result;
}

module.exports = {
    decode
}