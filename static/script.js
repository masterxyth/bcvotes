
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

// Create column classes
var td = document.getElementsByTagName('td');
for ( var i = 0; i <td.length-3; i+=3) {
  td[i].className = 'riding_column';
  td[i+1].className = 'candidate_column';
  td[i+2].className = 'party_column';
}

// creating the 'row class'

var rows = document.getElementsByTagName('tr');
for (var i = 0; i<rows.length; i++) {
  rows[i].className = 'row';
}
