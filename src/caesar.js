const ENGLISH_FREQS = [
    0.08167, 0.01492, 0.02782, 0.04253, 0.12702, 0.02228, 0.02015, 0.06094, 0.06966, 0.00153, 0.00772, 0.04025, 0.02406,
    0.06749, 0.07507, 0.01929, 0.00095, 0.05987, 0.06327, 0.09056, 0.02758, 0.00978, 0.02360, 0.00150, 0.01974, 0.00074,
];

function getAllEntropies(str) {
    var _result = [];
    for (var i = 0; i < 26; i++)
        _result.push([i, getEntropy(decrypt(str, i))]);

    const result = _result.sort((a, b) => a[1]-b[1]);
    return result;
}

// Returns the cross-entropy of the given string with respect to the English unigram frequencies, which is a positive floating-point number.
function getEntropy(str) {
    var sum = 0;
    var ignored = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if      (65 <= c && c <=  90) sum += Math.log(ENGLISH_FREQS[c - 65]);  // Uppercase
        else if (97 <= c && c <= 122) sum += Math.log(ENGLISH_FREQS[c - 97]);  // Lowercase
        else ignored++;
    }

    return -sum / Math.log(2) / (str.length - ignored);
}

function decrypt(str, key) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if      (65 <= c && c <=  90) result += String.fromCharCode(mod(c - 65 - key, 26) + 65);  // Uppercase
        else if (97 <= c && c <= 122) result += String.fromCharCode(mod(c - 97 - key, 26) + 97);  // Lowercase
        else result += str.charAt(i);  // Copy
    }
    return result;
}

function mod(x, y) {
    return (x % y + y) % y;
}

module.exports = (toDecrypt) => {

    if (typeof toDecrypt != 'string') throw new TypeError('Argument must be a valid string to decrypt'); 
    const entropy = getAllEntropies(toDecrypt);
    return decrypt(toDecrypt, entropy[0][0]);
};
