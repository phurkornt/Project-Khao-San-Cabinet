const model_machine = require('../models/model_machine');

exports.getDashboard  = async (req, res) => {
    let machine = await model_machine.getMachine();
    console.log(machine);
    res.render('main_page',{
        page:"page_dashboard",
        machine:machine
    });
};