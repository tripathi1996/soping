const handleAddButtonClick = () => {
	const newItem = {
		itemName: inputValue,
		quantity: 1,
		isSelected: false,
	};

	const newItems = [...items, newItem];

	setItems(newItems);
	setInputValue('');
};
const toggleComplete = (index) => {
	const newItems = [...items];

	newItems[index].isSelected = !newItems[index].isSelected;

	setItems(newItems);
};
 <div className='item-name' onClick={() => toggleComplete(index)}>
	// ...other code
</div>
 const handleQuantityIncrease = (index) => {
	const newItems = [...items];

	newItems[index].quantity++;

	setItems(newItems);
};
 <button>
	<FontAwesomeIcon icon={faChevronRight} onClick={() => handleQuantityIncrease(index)} />
</button>
 const handleQuantityDecrease = (index) => {
	const newItems = [...items];

	newItems[index].quantity--;

	setItems(newItems);
};
 const calculateTotal = () => {
	const totalItemCount = items.reduce((total, item) => {
		return total + item.quantity;
	}, 0);

	setTotalItemCount(totalItemCount);
};
 const handleAddButtonClick = () => {
    // ...other code
		calculateTotal();
	};

	const handleQuantityIncrease = (index) => {
    // ...other code
		calculateTotal();
	};

	const handleQuantityDecrease = (index) => {
    // ...other code
		calculateTotal();
	};