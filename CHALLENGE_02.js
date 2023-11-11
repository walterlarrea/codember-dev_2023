const TEXT = '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&'

const CHAR_CODES = {
    'incrementOne': '#',
    'decrementOne': '@',
    'multiplySelf': '*',
    'print': '&',
}

function  decompile (compiledText) {
    const characters = compiledText.split('')
    // console.log(characters)
    
    const result = characters.reduce((total, char) => {
        switch (char) {
            case CHAR_CODES.incrementOne:
                return [total[0] + 1, total[1]]
                break;
            case CHAR_CODES.decrementOne:
                return [total[0] - 1, total[1]]
                break;
            case CHAR_CODES.multiplySelf:
                return [total[0] * total[0], total[1]]
                break;
            case CHAR_CODES.print:
                return [total[0], total[1] + total[0]]
                break;
            default:
                return total
                break;
        }
    }, [0, ''])

    return result
}

console.log(decompile(TEXT))
