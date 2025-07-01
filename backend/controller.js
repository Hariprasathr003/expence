const db = require("./mysqlconnect");

const getAll = (req, res) => {
  db.query("select * from expencetable", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ data: result, msg: "All Data Showed" });
  });
};

const createData = (req, res) => {
  const { amount, description, category, date } = req.body;
  const sql =
    "insert into expencetable (amount,description,category,date)  values (?,?,?,?)";
  db.query(sql, [amount, description, category, date], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ data: result, msg: "Data created successfully" });
  });
};

const updateData = (req, res) => {
  const { amount, description, category, date } = req.body;
  const { id } = req.params;
  const sql =
    "update expencetable set  amount=?, description=?, category=?, date=? where id=? ";
  db.query(sql, [amount, description, category, date, id], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ data: result, msg: "Update successfully" });
  });
};

const deleteData = (req, res) => {
  const { id } = req.params;
  const sql = "delete from expencetable where id=?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ data: result, msg: "Data Deleted successfully" });
  });
};

module.exports = { getAll, createData, deleteData ,updateData};
