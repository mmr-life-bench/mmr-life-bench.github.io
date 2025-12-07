function generateTable() {
    var data = score_table; // The variable from model_scores.js
  
    var table = '<table class="js-sort-table" id="results">';
    table += `<tr>
            <td class="js-sort-number"><strong>#</strong></td>
            <td class="js-sort"><strong>Model</strong></td>
            <td class="js-sort-number"><strong><u>Overall</u></strong></td>
            <td class="js-sort-number"><strong>Abductive</strong></td>
            <td class="js-sort-number"><strong>Analogical</strong></td>
            <td class="js-sort-number"><strong>Causal</strong></td>
            <td class="js-sort-number"><strong>Deductive</strong></td>
            <td class="js-sort-number"><strong>Inductive</strong></td>
            <td class="js-sort-number"><strong>Spatial</strong></td>
            <td class="js-sort-number"><strong>Temporal</strong></td>
        </tr>`;
  
        // sort data to make sure the best model is on top
        first_row = '-' // "Human Performance*"
        console.log(data);
  
        // get all keys in data
        var keys = Object.keys(data);
  
        // remove "Human Performance*" from keys
        var index = keys.indexOf(first_row);
        if (index > -1) {
          keys.splice(index, 1);
        }
  
        // add "Human Performance*" to the top of keys
        keys.unshift(first_row);
  
        console.log(keys);
  
        // for (var key in data) {
        for (var i=0; i<keys.length; i++) {
          var key = keys[i];
          console.log(key);
          var entry = data[key];
  
          table += '<tr>';
          table += `<td>${key}</td>`
  
          // for key = "1", "2", "3"
          top_ranks = ["1", "2", "3"]
          if (top_ranks.includes(key)) {
            table += `<td><b class="best-score-text"><a href="${entry.Source}" class="ext-link">${entry.Model}</a></b></td>`;
            table += `<td><b class="best-score-text">${entry.Overall.toFixed(1).toString()}</b></td>`; // .toFixed(1): round to 1 decimal place
          }
          else {
            table += `<td><b><a href="${entry.Source}" class="ext-link">${entry.Model}</a></b></td>`;
            table += `<td><b>${entry.Overall.toFixed(1).toString()}</b></td>`; // .toFixed(1): round to 1 decimal place
          }          
  
          table += `<td>${entry.Abductive.toFixed(1).toString()}</td>`;
          table += `<td>${entry.Analogical.toFixed(1).toString()}</td>`;
          table += `<td>${entry.Causal.toFixed(1).toString()}</td>`;
          table += `<td>${entry.Deductive.toFixed(1).toString()}</td>`;
          table += `<td>${entry.Inductive.toFixed(1).toString()}</td>`;
          table += `<td>${entry.Spatial.toFixed(1).toString()}</td>`;
          table += `<td>${entry.Temporal.toFixed(1).toString()}</td>`;
          table += '</tr>';
      }
  
    table += '</table>';
    document.getElementById('leaderboard').innerHTML = table; // Assuming you have a div with id 'container' where the table will be placed
  }
  
  // Call the function when the window loads
  window.onload = generateTable;
  