function search(proId) {
    var id = proId;
    var html;
    product = data.find(product => product.proId == id);
    if (product) {
        html = "<p>" + product.proId + "</p>" +
            "<p>" + product.name + "</p>" +
            "<p>" + product.type + "</p>" +
            "<p>" + product.price + "</p>";
        var proType = product.type;
        searchSimilar(proType);
    } else {
        html = "Result Not Found";
    }
    return $('#search').html(html);
}

function searchSimilar(proType) {
    var html = '';

    var type = data.filter(item => {
        return checkType(item, proType)
    })
    console.log(type)

    type.forEach(product => {
        if (data) {
            html += "<tr>" +
                "<td>" + product.proId + "</td>" +
                "<td>" + product.name + "</td>" +
                "<td>" + product.type + "</td>" +
                "<td>" + product.price + "</td>" +
                "</tr>";
        } else {
            html = "Result Not Found";
        }
        return $('#similar').html(html);
    })
}

function checkType(item, type) {
    if (item.type == type) {
        return item
    }
    return false
}

function CreateTableFromJSON() {
    var col = [];
    for (var i = 0; i < data.length; i++) {
        for (var key in data[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }
    var table = document.createElement("table");
    var tr = table.insertRow(-1); // TABLE ROW.
    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th"); // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }
    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < data.length; i++) {
        tr = table.insertRow(-1);
        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = data[i][col[j]];
        }
    }
    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}