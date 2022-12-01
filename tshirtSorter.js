// Write your solution below:
function tShirtSorter (input){
    let output = []

    for(i=0; i<input.length; i++){
        if(input[i] === 's'){
            output.push(input[i])
    }}
    for(i=0; i<input.length; i++){
        if(input[i] === 'm'){
            output.push(input[i])
    }}
    for(i=0; i<input.length; i++){
      if(input[i] === 'l'){
            output.push(input[i])
    }}

    output = output.join("")
    console.log(output)

}

tShirtSorter('lsmslmslsmsmsslm')


const tshirtSorter = (str) => {
    let charCount = {
        's': 0,
        'm': 0,
        'l': 0,
    };

    for (let i = 0; i < str.length; i++) {
        charCount[str[i]]++;
    }

    return 's'.repeat(charCount['s'])+'l'.repeat(charCount['l'])+'l'.repeat(charCount['l'])
};