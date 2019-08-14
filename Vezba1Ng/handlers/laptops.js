var GetLaptops = (req, res) => {
    res.render('laptops');
}

var GetMackBook = (req, res) => {
    res.render('mackbook');
}



module.exports = {
    GetLaptops,
    GetMackBook
}