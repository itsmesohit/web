

let str = "DalaDdfjsdfhjsdfiugsdfhgsvdfgvsfhgsvdgfvsfhgsr";

let arr = [];
 
for(let j=0; j<str.length; j++){

    for(let i=0; i<26; i++){
        arr[str[j].charCodeAt-65]++;
    }
}
 
for(let i=0; i<26; i++){
console.log(arr[i]);
}
