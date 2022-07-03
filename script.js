import fs from 'fs';
const q1 = () =>{
    fs.readFile('./santa.txt',(err,data)=>{
        console.time('santa-time');
        const directions = data.toString();
        const directionsArray = directions.split('');
        const answer = directionsArray.reduce((acc,currentValue)=>{
            if (currentValue==='(') {
                return acc+=1;
            } else {
                return acc-=1;
            }
        },0)
        console.timeEnd('santa-time');
        console.log('floor:',answer);
    })
}

q1();

const q2 = () =>{
    fs.readFile('./santa.txt',(err,data)=>{
        console.time('santa-time');
        const directions = data.toString();
        const directionsArray = directions.split('');
        let acc = 0;
        let counter = 0;
        const answer = directionsArray.some((currentItem)=>{
            if (currentItem==='(') {
                acc+=1;
            } else {
                acc-=1;
            }
            counter ++;
            return acc<0;
        })
        console.timeEnd('santa-time');
        console.log('basement enter:',counter);
    })
}

q2();