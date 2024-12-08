function countVowels(vogais){
    cont = 0;
    for(i = 0; i < vogais.length; i++)
        if(vogais.charAt(i) == 'a' || vogais.charAt(i) == 'A' || vogais.charAt(i) == 'e' || vogais.charAt(i) == 'E' || vogais.charAt(i) == 'i'|| vogais.charAt(i) == 'I' || vogais.charAt(i) == 'o' || vogais.charAt(i) == 'O' || vogais.charAt(i) == 'u' || vogais.charAt(i) == 'U' ){
            cont ++;
            
        }
        console.log(`sua palavra tem ${cont} vogais`)
}

countVowels('aeiou')