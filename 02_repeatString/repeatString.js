const repeatString = function(string, num) {
    
    var newString = '';

    for (let i = 0; i < num; i++)
        newString = newString + string

    if (num < 0) {
        return 'ERROR';
    }   
    
    return(newString);
};

// Do not edit below this line
module.exports = repeatString;
