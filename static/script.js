
// Linear Search
function search() {
    // Declare variables
    var input, filter, table, tr, td, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementsByClassName("dataframe data");
    tr = document.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td1 = tr[i].getElementsByTagName("td")[0];
        td2 = tr[i].getElementsByTagName("td")[1];
        td3 = tr[i].getElementsByTagName("td")[2];
        if (td1) {
            if (td1.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            }
            else {
              if (td2) {
                  if (td2.innerHTML.toUpperCase().indexOf(filter) > -1) {
                      tr[i].style.display = "";
                    } else {
                      if (td3) {
                        if (td3.innerHTML.toUpperCase().indexOf(filter) > -1) {
                            tr[i].style.display = "";
                        } else {
                            tr[i].style.display = "none";
                        }
                    }
                }
            }
        }
    }
}
}






var all_td = document.getElementsByTagName('td');
var all_th = document.getElementsByTagName('th');
var all_tr = document.getElementsByTagName('tr');

for (var i = 0; i < all_tr.length; i++) {
  var row = document.getElementsByTagName('tr')[0];
  var div = document.createElement('div');
  div.innerHTML = row.innerHTML;
  row.parentNode.insertBefore(div,row);
}

for (i=0; i<all_tr.length;i++){
  var tr = document.getElementsByTagName('tr')[0];
  var parent = tr.parentNode;
  parent.removeChild(tr);
}

/*
for (i=0; i<all_th.length;i++) {
  var th = document.getElementsByTagName('th')[0];
  var parent = th.parentNode;
  parent.removeChild(th);
}

*/
/*
for (var i = 1; i < all_td.length; i++) {
  var row = document.getElementsByTagName('td')[i-1];
  var div = document.createElement('div');
  div.innerHTML = row.innerHTML;
  row.parentNode.insertBefore(div,row);
}

for (i=0; i<all_td.length;i++){
  var td = document.getElementsByTagName('td')[0];
  var parent = td.parentNode;
  parent.removeChild(td);
}

*/










// Create column classes


/*for ( var i = 0; i <td.length-3; i+=3) {
  td[i].className = 'riding_column';
  td[i+1].className = 'candidate_column';
  td[i+2].className = 'party_column';
}
*/



/*
// creating the 'row classs
var rows = document.getElementsByTagName('tr');
for (var i = 0; i<rows.length; i++) {
  rows[i].className = 'row';
}

*/



/*
for (var i = 0; i<td.length; i++) {
  var removeEls = document.getElementsByTagName('td')[i];
  var containerEL = removeEls.parentNode;
  containerEL.removeChild(removeEls);
}

/*var e = document.getElementsByTagName('td')[0];
var d = document.createElement('div');
d.innerHTML = e.innerHTML;
e.parentNode.insertBefore(d, e);
e.parentNode.removeChild(e);*/
