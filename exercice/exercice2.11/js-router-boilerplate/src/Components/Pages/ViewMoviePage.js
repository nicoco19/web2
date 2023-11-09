import { clearPage } from '../../utils/render';
import { films } from '../../utils/movies';

const ViewMoviePage  = () => {
  clearPage();
  view();
};

const main = document.querySelector('main');



function view(){

const tableVue = document.createElement('table');
tableVue.className = 'table';

const treadVue = document.createElement('thead');
tableVue.appendChild(treadVue);

const trVue = document.createElement('tr');

const thVue1 = document.createElement('th');
thVue1.scope = "col"
thVue1.innerHTML = "#";

const thVue2 = document.createElement('th');
thVue2.scope = "col";
thVue2.innerHTML = "Title";

const thVue3 = document.createElement('th');
thVue3.scope = "col";
thVue3.innerHTML = "Duration";

const thVue4 = document.createElement('th');
thVue4.scope = "col";
thVue4.innerHTML = "Budget (million)";

trVue.appendChild(thVue1);
trVue.appendChild(thVue2);
trVue.appendChild(thVue3);
trVue.appendChild(thVue4);
treadVue.appendChild(trVue);
main.appendChild(tableVue);

const tbody = document.createElement('tbody');
  main.appendChild(tableVue);
  tableVue.appendChild(tbody);

   films.forEach(film => {
    const trVueNew = document.createElement('tr');
    const thVueNew = document.createElement('th');
    thVueNew.innerHTML = " ";
    thVueNew.scope = "row";
    

    trVueNew.appendChild(thVueNew);

    const titleNew = document.createElement('td');
    const linkTitel = document.createElement('a');
    linkTitel.href = film.link;
    linkTitel.innerHTML = film.title;
    
    titleNew.appendChild(linkTitel);

    const newDuaration = document.createElement('td');
    const newBudget = document.createElement('td');
    newDuaration.innerHTML = film.duration;
    newBudget.innerHTML = film.budget;

    trVueNew.appendChild(titleNew);
    trVueNew.appendChild(newDuaration);
    trVueNew.appendChild(newBudget);
    tbody.appendChild(trVueNew);
     
  });

}

export default ViewMoviePage ;
