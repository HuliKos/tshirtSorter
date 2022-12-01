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