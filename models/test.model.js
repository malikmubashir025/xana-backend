const con = require('../config/mysql');
const testModel = {
  addNew: (testObj, userId) =>
    new Promise(async (resolve, reject) => {
      console.log('testObj ::>>', testObj);
      console.log('userId ::>>', userId);

      con.query(
        `INSERT INTO test_info (userId, test_name, test_manufacturer, test_description, test_performance, test_authorisation) VALUES ('${userId}', '${testObj.testName}','${testObj.Manufacturer}', '${testObj.Description}', '${testObj.Performance}', '${testObj.Authorisation}')`,
        (err, res) => {
          if (res) {
            if (res.affectedRows > 0) {
              return resolve(res);
            }
          } else {
            console.log('err', err);
            return reject(new Error('Something went wrong', err));
          }
        }
      );
    }),

  saveImage: (path, id) =>
    new Promise((resolve, reject) => {
      console.log('path', path);
      con.query(
        `UPDATE test_info set image_path = '${path}' where id=${id}`,
        (err, res) => {
          if (err) {
            console.log('error', err);
            return reject(new Error(err));
          } else {
            return resolve(res);
          }
        }
      );
    }),
};

module.exports = testModel;
