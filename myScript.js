
import {db} from './dataBase.js';

const dataBaseCopy =[...db];
//dataBaseCopy.sort(() => Math.random() - 0.5);

const sceneEl = document.querySelector('a-scene');
sceneEl.setAttribute('background', {color: 'red'});
let positionx= -10

for(let i=0;i<=dataBaseCopy.length-1;i++){
const newEntity = document.createElement('a-entity');

newEntity.setAttribute('gltf-model', `./assets/${dataBaseCopy[i].location}.gltf`);
newEntity.setAttribute('scale', '0.3 0.3 0.3');
newEntity.setAttribute('position', `${positionx} 0 -3`);
newEntity.setAttribute('navigate-on-click', `url:${dataBaseCopy[i].url}`);
sceneEl.appendChild(newEntity);
positionx+= 4;
} 



/*var cubeEl = document.createElement('a-entity');
cubeEl.setAttribute('gltf-model', `./assets/${dataBase[0].location}`);
cubeEl.setAttribute('scale', '0.3 0.3 0.3');
cubeEl.setAttribute('position', '4 0 -3');
cubeEl.setAttribute('navigate-on-click', `url:${dataBase[0].url}`);
sceneEl.appendChild(cubeEl)*/