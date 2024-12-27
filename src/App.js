import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';
import DropDown from './components/DropDown';

function App() {
  // Callback function for when an option is selected
  const handleSelect = (selectedItem) => {
  console.log('Selected item:', selectedItem);
  alert(`You selected: ${selectedItem}`); // Just for testing purposes
};

  return (
    <div>
      <h1>My First Component</h1>
      <MyButton initialCount={-10} />
      <DropDown
       options={['Option 1', 'More Options', 'Most Options']}
       placeholder = "select options"
       onSelect={handleSelect}   
      />
    </div>   
  );
}

export default App;
