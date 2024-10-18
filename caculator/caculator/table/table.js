function myFunction() {
    var x = document.getElementById("myText").value;
    var z = document.getElementById("myText2").value;
    var t = document.getElementById("demon")
     
    for (let i = 1; i <= z; i++) {
            const row = document.createElement('tr')
            const multiplierCell = document.createElement('td');
            const resultCell = document.createElement('td');
            multiplierCell.textContent = `${x} x ${i} =`;
            resultCell.textContent = x * i; 
            row.appendChild(multiplierCell);
            row.appendChild(resultCell);
            t.appendChild(row);               

            
            
        }
   }