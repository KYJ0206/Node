// /* GET home page. */
function basicAPI (req, res) {
    res.status(200).json(
        {
            "success": true
        }
    );
}

function testAPI (req, res) {
    res.status(200).json(
        {
            "message": 'test'
        }
    );
}

// /* POST home page. */
function postTestAPI (req, res) {
    const user_message = "Hi";
    res.status(200).json(
        {
        'message': user_message
        }
      );
}


module.exports = {
    basicAPI: basicAPI,
    testAPI: testAPI,
    postTestAPI: postTestAPI,
};