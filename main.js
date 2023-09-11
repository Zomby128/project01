import './style.css';
import Header from './components/Header';
import Card from './components/Card';
import {info} from './helper/data-page';
import { api } from './helper/data-api';

document.body.appendChild(Header(info));

    const container = document.createElement('div');
    container.id = 'Container';
    document.body.appendChild(container);

api.forEach(item =>{
    container.appendChild(Card(item))
 });