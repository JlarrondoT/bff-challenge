const express = require('express');
require('dotenv').config();

const apiV1 = require('./v1/routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api/v1', apiV1);

app.listen(PORT, (error) => {
    if (!error) {
        console.log(
            'Server is Successfully Running, and App is listening on port ' +
                PORT
        );
    } else console.log("Error occurred, server can't start", error);
});
