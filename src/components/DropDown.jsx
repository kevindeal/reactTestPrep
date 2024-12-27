import React, {useState, useRef} from 'react';

// Objective
// Build a reusable dropdown component in React. This component should allow users to select an item from a list. The dropdown should:

// Display a placeholder when no item is selected.
// Allow the user to click on the dropdown to see a list of options.
// Close the dropdown when an item is selected or the user clicks outside of it.
// Call a callback function when an item is selected, passing the selected item as an argument.
// Be accessible, including keyboard navigation (e.g., use Tab and Enter).

// Requirements
// Props for the Component:

// options: An array of strings representing the dropdown options.
// onSelect: A callback function that is triggered when an option is selected.
// placeholder: A string for the placeholder text.
// Functionalities:

// Open/close the dropdown when clicked.
// Highlight options using arrow keys and select using Enter.
// Close the dropdown when clicking outside or pressing Escape.
// Accessibility Features:

// Use proper ARIA roles (e.g., role="listbox" for the dropdown, role="option" for items).
// Ensure keyboard accessibility.


function DropDown({ options = [], onSelect, placeholder = 'Select an Option' }) {
  const [isOpen, setIsOpen] = useState(false) // tracks if open 
  const [selectedOption, setSelectedOption] = useState(null); // Tracks the selected option
  const dropdownRef = useRef(null); // Reference for the dropdown container

  // Toggle Dropdown open/close
  const toggleDropDown = () => setIsOpen(!isOpen);
  
  // Close dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Handle selection of an option
  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option); // Trigger callback
    setIsOpen(false);
  };

  // clicks outside eventlisteners
  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef}>
      <h1>Dropdown Menu</h1>
      {/* dropdown button */}
      <button
        className="dropdown-toggle"
        onClick={toggleDropDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selectedOption || placeholder}
      </button>

      {isOpen && (
        <ul
          className="dropdown-menu"
          role="listbox">
            {Array.isArray(options) && options.length === 0 ? (
              <li>
                No options Available
              </li>
            ) : (
              Array.isArray(options) && options.map((option, index) => (
                <li
                  key={option}
                  className="dropdown-item"
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </li>
              ))
            )}
        </ul>
      )}
    </div>
  );
}

export default DropDown;