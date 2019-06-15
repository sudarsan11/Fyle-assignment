const express = require('express');
const router  = express.Router();
const pool = require('../connection');


// For handling routes to get branch details based on IFSC
router.get('/get-branch/:ifsc', (req,res,next) => {

    // If the parameters are null
    if (!(req.params.ifsc)) {
        res.status(400).json({message: 'Invalid parameters'});
    }

    // Query the table
    const query = 'select * from branches where ifsc = $1' ;
    pool.query(query, [req.params.ifsc.toUpperCase()])

        .then(branch => {

            // If no such record exists
            if (branch.rowCount <= 0) {
                res.status(400).json({message: 'Invalid IFSC code'});
            }

            // Respond with the branch details
            else {
                res.status(200).json({branch_details: branch.rows});
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({err: 'Something went wrong'});
        })


});


// For handling routes to get branch details based on cityname and bank name
router.get('/list-branches/', (req,res,next) => {

    // If the parameters are null
    if (!(req.query.city && req.query.bank_name)) {
        res.status(400).json({message: 'Invalid parameters'});
    }

    const query = 'select * from branches where city = $1 and bank_name = $2';
    pool.query(query, [req.query.city.toUpperCase(), req.query.bank_name.toUpperCase()])

        .then(branch => {
            
            // If no such record exists
            if (branch.rowCount <= 0) {
                res.status(400).json({message: 'Invalid city or bank name'});
            }

            // Respond with the branch details
            else {
                res.status(200).json({branch_details: branch.rows});
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({err: 'Something went wrong'});

        })

});



module.exports = router;