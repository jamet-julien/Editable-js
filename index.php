<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Untitled</title>
        <link rel="author" href="humans.txt">

        <style>
			.editable[contenteditable="true"]:hover {
				background-color: #FDFFB3;
			}

			.editable[contenteditable="true"]:focus {
				background-color: #FDFFB3;
			  	outline: none;
			  	border : none;
			}

			/*****/


			h1{
				color : red;
				text-transform: uppercase;
			}

			.addable{
				color : #0000FF;
			}

        </style>
    </head>
    <body>
        <h1 class='editable' data-name="titre">titre</h1>
        <p class='editable' data-name="text_1">petit paragraphe</p>

		<p class='editable' data-name="text_2" id="myDiv">paragraphe avec possibilité d'ajout de lien
		</p>

		<button id="save">Save</button>

		<button id="add_test">add lien google</button>

		<script type="text/javascript" src="editable.class.js"></script>
		<script type="text/javascript" src="storage.class.js"></script>
        <script>
		(function(){

			var oOption = {
				element : 'editable'
			}

			var oEdit    = new Editable( oOption);
			var oStorage = new Storage();

			if( oStorage.get('data') != null){

				var oData = oStorage.get('data');
				oEdit.setData( oData);

			}

			var oBtnSave = document.getElementById('save');
			var oAddSpan = document.getElementById('add_test');


			save = function(){
				var oData =  oEdit.getData();


				console.log( oData);

				oEdit.preview( 'on');
				oStorage.set('data', oData);
			}



			getRangeObject = function (selectionObject) {
				if (selectionObject.getRangeAt)
					return selectionObject.getRangeAt(0);
				else { // Safari!
					var range = document.createRange();
					range.setStart(selectionObject.anchorNode,selectionObject.anchorOffset);
					range.setEnd(selectionObject.focusNode,selectionObject.focusOffset);
					return range;
				}
			}

			addSpan = function(){

				var userSelection;
				if (window.getSelection) {
				    userSelection = window.getSelection();
				}
				else if (document.selection) { // should come last; Opera!
				    userSelection = document.selection.createRange();
				}

				var range = window.getSelection().getRangeAt(0);

				if(range.startContainer.parentNode.id==='myDiv') {

					var newElement       = document.createElement('a');
					newElement.setAttribute('class', 'addable');
					newElement.setAttribute('href', 'http://www.google.fr');
					newElement.innerText = getRangeObject( userSelection);

				   range.deleteContents();
				   range.insertNode(newElement);
				}
			}



			if (oBtnSave.addEventListener) {
			    oBtnSave.addEventListener("click", save, false);
			}
			else {
			    oBtnSave.attachEvent("onclick", save);
			}


			if (oAddSpan.addEventListener) {
			    oAddSpan.addEventListener("click", addSpan, false);
			}
			else {
			    oAddSpan.attachEvent("onclick", addSpan);
			}



       	})();
        </script>
    </body>
</html>







