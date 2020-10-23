import mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/dt-app', {
            useNewUrlParser: true
        });
        console.log('>>> Database connected');
    }
    catch {
        console.log('Error');
    }
}
export default connect;
