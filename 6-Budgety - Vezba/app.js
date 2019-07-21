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


var controller = (function(BudgetCtrl, UICtrl){

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

		var input = UICtrl.getinput();
	};

	return {
		init: function() {
			console.log('Start')
			setupEventListeners();
		}
	}

	

}) (BudgetContoller, UIControler);

controller.init();