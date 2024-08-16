function maior(n1,n2,n3){
    if(n1 > n2 && n1 > n3){
        console.log(`o maior valor é ${n1}`)
    }else if (n2 > n1 && n2 > n3){
        console.log(`o maior valor é ${n2}`)

    }else if (n3 > n1 && n3 > n2){
        console.log(`maior valor é ${n3}`)
    }
}

maior(4,0,3)