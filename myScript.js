
import {db} from './dataBase.js';

const dataBaseCopy =[...db];
dataBaseCopy.sort(() => Math.random() - 0.5);

const sceneEl = document.querySelector('a-scene');
sceneEl.setAttribute('background', {color: 'red'});

let positiony= 0;
let lenDB = dataBaseCopy.length;
let count = 0;

for(let i=1;i<= lenDB/40 ;i++){
    let positionx= -150;
    for(let j=1;j<=40;j++){
        const newEntity = document.createElement('a-entity');
    

        newEntity.setAttribute('gltf-model', `./assets/${dataBaseCopy[count].location}.gltf`);
        newEntity.setAttribute('scale', '0.3 0.3 0.3');
        newEntity.setAttribute('position', `${positionx} 0 ${positiony}`);
        newEntity.setAttribute('navigate-on-click', `url:${dataBaseCopy[count].url}`);
        
    

        sceneEl.appendChild(newEntity);
        positionx+= 10
        count++;
    }
    positiony+= -4;
} 

console.log(count)


/*var cubeEl = document.createElement('a-entity');
cubeEl.setAttribute('gltf-model', `./assets/${dataBase[0].location}`);
cubeEl.setAttribute('scale', '0.3 0.3 0.3');
cubeEl.setAttribute('position', '4 0 -3');
cubeEl.setAttribute('navigate-on-click', `url:${dataBase[0].url}`);
sceneEl.appendChild(cubeEl)*/