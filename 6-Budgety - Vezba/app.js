var BudgetContoller = (function(){

	var Expense = function(id, description, value){
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var Income = function(id, description, value){
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var data = {
		allItems: {
			exp: [],
			inc: [],
		},
		totals:{
			exp: 0,
			inc: 0
		}
	}

	return {
		addItem: function(type, des, val){
			var newItem, ID;

			// Create new ID
			if (data.allItems[type].length > 0) {
				ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
			}else {
				ID = 0;
			}
			

			// Crate new item base od inc or exp
			if (type === 'exp') {
				newItem = new Expense(ID, des, val);
			}else if (type === 'inc'){
				newItem = new Income(ID, des, val);
			}

			// push new item into the data structure
			data.allItems[type].push(newItem);

			// Return the new element
			return newItem;
		}
	}





}) ();


var UIControler = (function(){

	var DOMStrings ={
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value' ,
		inputBtn: '.add__btn'
	}


	return {
		getinput: function(){

			return {
			 type: document.querySelector(DOMStrings.inputType).value,
			 description: document.querySelector(DOMStrings.inputDescription).value,
			 value: document.querySelector(DOMStrings.inputValue).value
			};
		},

		getDOMstrings: function(){
			return DOMStrings;
			
	}
		}

}) ();


var controller = (function(budgetCtrl, UICtrl){

	var setupEventListeners = function(){
		var DOM = UICtrl.getDOMstrings();

		document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

		document.addEventListener('keypress', function(event){
		
			if(event.keyCode === 13 || event.which === 13){
			ctrlAddItem;
			}
		});
	};

	var ctrlAddItem = function(){
		var input, newItem;

		// 1. Get the field input data
		var input = UICtrl.getinput();

		// 2. Add the item to the budget controler
		var newItem = budgetCtrl.addItem(input.type, input.description, item.value)
	};

	return {
		init: function() {
			console.log('Start')
			setupEventListeners();
		}
	}

	

}) (BudgetContoller, UIControler);

controller.init();