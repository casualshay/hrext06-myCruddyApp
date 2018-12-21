var selectedRow = null;

function onListSubmit() {
   var itemsInWishList = includedItems();
   if (selectedRow === null) {
   insertNewItem(itemsInWishList);
   } else {
   updateList(itemsInWishList);
   }
   resetList();
}

function includedItems() {
   var itemsInWishList = {};
   itemsInWishList["productName"] = document.getElementById("productName").value;
   itemsInWishList["colorOfItem"] = document.getElementById("colorOfItem").value;
   itemsInWishList["sizeOfItem"] = document.getElementById("sizeOfItem").value;
   itemsInWishList["priceOfItem"] = document.getElementById("priceOfItem").value;
   return itemsInWishList;
}

function insertNewItem(data) {
   var table = document.getElementById("wishList").getElementsByTagName('tbody')[0];
   var newRow = table.insertRow(table.length);
   newRow.id='item-' + table.children.length;
   cell1 = newRow.insertCell(0);
   cell1.innerHTML = data.productName;
   cell2 = newRow.insertCell(1);
   cell2.innerHTML = data.colorOfItem;
   cell3 = newRow.insertCell(2);
   cell3.innerHTML = data.sizeOfItem;
   cell4 = newRow.insertCell(3);
   cell4.innerHTML = data.priceOfItem;
   cell4 = newRow.insertCell(4);
   cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                     <a onClick="onDelete(this)">Delete</a>`;
}

function resetList() {
   document.getElementById("productName").value = "";
   document.getElementById("colorOfItem").value = "";
   document.getElementById("sizeOfItem").value = "";
   document.getElementById("priceOfItem").value = "";
   selectedRow = null;
}

function onEdit(td) {
   selectedRow = td.parentElement.parentElement;
   document.getElementById("productName").value = selectedRow.cells[0].innerHTML;
   document.getElementById("colorOfItem").value = selectedRow.cells[1].innerHTML;
   document.getElementById("sizeOfItem").value = selectedRow.cells[2].innerHTML;
   document.getElementById("priceOfItem").value = selectedRow.cells[3].innerHTML;
}

function updateList(itemsInWishList) {
   selectedRow.cells[0].innerHTML = itemsInWishList.productName;
   selectedRow.cells[1].innerHTML = itemsInWishList.colorOfItem;
   selectedRow.cells[2].innerHTML = itemsInWishList.sizeOfItem;
   selectedRow.cells[3].innerHTML = itemsInWishList.priceOfItem;
}

function onDelete(td) {
   if (alert('Are you sure you want to remove item from wishlist?')) {
      row = td.parentElement.parentElement
      document.getElementById("productName").deleteRow(row.rowIndex);
      resetList();
   }
}


