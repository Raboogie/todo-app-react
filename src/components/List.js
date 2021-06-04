import {IoClose} from "react-icons/io5";

const List = (props) => {
    const itemsChangHandler = (event) => {
        event.preventDefault();
        props.setItems([]);
    }

  return (
      <>
      <article>
          <ul className="bg-gray-700 mx-5 rounded-lg mt-10 sm:max-w-xl sm:mx-auto">
              {props.items.map(({id, title}) => (
                  <ul className="flex items-center justify-between p-5 border-b border-gray-600">
                      <li key={id} className="todo-list text-white py-3 tracking-wider">{title}</li>
                      <button className="text-xl" onClick={() => props.deleteItem(id)}><IoClose className="text-red-400" /></button>
                  </ul>
                  ))}
              <ul className="flex items-center justify-between px-5 py-3">
                  <li> <p className="text-sm text-gray-400">{props.items.length} Items left</p></li>
                  <li><button className="text-sm text-gray-400" onClick={itemsChangHandler}>Clear list</button></li>
              </ul>
          </ul>
      </article>
      </>
  )
}

export default List;