// alert('how are you');



const showAlert = () => {
    
    alert('dost taka dhar de');
}


const lendMoeny = () => {
    


    const result = confirm('dost taka dhar dibi kina bol');
    
    console.log(result);

    if (result===true) {
        
        alert('tui amr janer dosto');


    }
    else {
        
        alert('DGM tore ajk block maira dimu');
    }
}


const getInfo = () => {
    const name = prompt('tell me your name');

    console.log(name);

    if (name===null) {
        
        alert('naam na dile kam nai ja vag');


    }

    else {
        
        console.log('welcome to this world',name);
    }

}