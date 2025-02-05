const AsciiTable = require('ascii-table')


function render(headings, enteries) {
    let table = new AsciiTable()

    table.setHeading(headings)
    enteries.forEach(elem => {
        table = table.addRow(...elem);
    });

    console.log(table.toString());
}

export default { render };





