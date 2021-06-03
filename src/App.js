import {useState} from "react";
import "tailwindcss/tailwind.css"
import Logo from "./components/Logo";
import Hero from "./components/Hero";
import List from "./components/List";

import {v4 as uuidv4} from "uuid";

const App = () => {
    const [text, setText] = useState("");
    const [items, setItems] = useState([]);

    const textChangHandler = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newItems = {
            id: uuidv4(),
            title: text,
        };

        setItems([newItems, ...items]);
        setText("");
    };

    const deleteItem = (id) => {
        // filter over every item in the array and check for the item.id that does not match and return those
        setItems(items.filter((item) => item.id !== id));
    };

  return (
    <>
      <main>
        <Logo/>
        <Hero/>

          <form className="flex items-center justify-center mt-10" onSubmit={handleSubmit}>
              <input text="text" name="text" placeholder="Enter your todo item" className="py-2 px-5 rounded-lg bg-gray-700 text-white tracking-wide"
                     autoComplete="off"
              value={text} onChange={textChangHandler}/>
          </form>

          <List items={items} setItems={setItems} deleteItem={deleteItem}/>
      </main>
    </>
  );
};

export default App;
