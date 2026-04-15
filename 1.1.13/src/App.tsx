function App() {
  return (
    <div className="todoapp">
      <h1>Задачи</h1>
      <section>
        <input className="todo-input" placeholder="Что должно быть сделано?" />
        <Menu/> 
        <Footer/>
      </section>
    </div>
  );
}

function Footer(){
  return(
        <footer className="footer">
          <span className="todo-count">Осталось: 3</span>
          <MenuButton />
        </footer>
  );
}

function Menu(){
   return (
         <ul className="todo-list">
          <li>
            <input className="toggle" type="checkbox" />
            <label>
              <span className="description">Учить React 4 часа</span>
              <span className="created">создана 3 дня назад</span>
            </label>
            <div className="buttons">
              <button className="icon icon-edit">&#9998;</button>
              <button className="icon icon-destroy">&#10006;</button>
            </div>
          </li>
          <li>
            <input className="toggle" type="checkbox" />
            <label>
              <span className="description">Учить React 4 часа</span>
              <span className="created">создана 3 дня назад</span>
            </label>
            <div className="buttons">
              <button className="icon icon-edit">&#9998;</button>
              <button className="icon icon-destroy">&#10006;</button>
            </div>
          </li>
          <li>
            <input className="toggle" type="checkbox" />
            <label>
              <span className="description">Учить React 4 часа</span>
              <span className="created">создана 3 дня назад</span>
            </label>
            <div className="buttons">
              <button className="icon icon-edit">&#9998;</button>
              <button className="icon icon-destroy">&#10006;</button>
            </div>
          </li>
        </ul>   
   );
}

function MenuButton(){
  return(
      <>
          <ul className="filters">
            <li>
              <button className="selected">Все</button>
            </li>
            <li>
              <button>Активные</button>
            </li>
            <li>
              <button>Готовые</button>
            </li>
          </ul>
          <button className="clear-completed">Удалить готовые</button>
         </> 
  );
}


export default App;
