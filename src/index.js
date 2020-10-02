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
    const arrOfCharCodes = []; 

    while(true){
        let charCode = expr.slice(0, 10);
        arrOfCharCodes.push(charCode);        
        expr = expr.replace(charCode, '');
        if ( expr.length === 0 ) break;
    }
   
    const arrOfDecodeChars = arrOfCharCodes.map(item =>{

        if (item === '**********') return ' ';

        let dotsAndDashes = '';
        while(true){
            if (item.slice(-2) === '10') dotsAndDashes = `.${dotsAndDashes}`;
            
            if (item.slice(-2) === '11') dotsAndDashes = `-${dotsAndDashes}`;             
                        
            item = item.slice(0, -2);

            if (item.length === 0 || item.slice(-2) === '00') break;     
        }    
        return MORSE_TABLE[dotsAndDashes];
    })

    return arrOfDecodeChars.join('');
}

module.exports = {
    decode
}