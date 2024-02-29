$.ajax ({
    url: 'https://github.com/ArnorBrekiEinarsson/MinRepo',
    headers: {
       "Accept": "application/json",
       //"Authorization": "Bearer <token>"  
    },
    success: function(response) {
        console.log(response)
    }
})