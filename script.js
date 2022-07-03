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