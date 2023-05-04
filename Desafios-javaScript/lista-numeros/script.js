let lista = [1, 3, 5, 7, 0, 9]

lista.sort()
console.log(lista)

lista.shift()
console.log(lista)

lista.sort(function(a, b){
    if(a > b){
        return -1
    }else{
        return true
    }
})
console.log(lista)