import './static/styles.css';
import { projectLibrary} from './todo.js';
import { updateDisplay} from './display.js';
import { pageInteractivity} from './events';


const todo = projectLibrary()
const currentDate = new Date().toJSON().slice(0, 10);;
todo.add();
pageInteractivity(todo);


todo.getProject(0).add("Wash Dishes", "Need soap", currentDate, "Medium");
updateDisplay(todo.getProject(0));


