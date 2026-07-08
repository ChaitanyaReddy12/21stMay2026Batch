

import { Given, Then } from "@cucumber/cucumber";

import { expect, request } from "playwright/test";

let response : any

Given('I send a delete request',async function(){

    const baseURL = 'https://reqres.in/api/users/2'

    const apiRequestContext = await request.newContext({

        baseURL : baseURL

    })

    response = await apiRequestContext.delete(baseURL, {

        headers:{

            "x-api-key": "reqres_123a63cda1f448c1883661b9a94ead0c"
        }
    })

})


Then('The response status code of delete should be {int}',async function(expectedStatusCode){

    expect(response.status()).toBe(expectedStatusCode)

})

Given('I send a get request',async function(){

    const baseURL = 'https://reqres.in/api/users?page=2'

    const apiRequestContext = await request.newContext({

        baseURL : baseURL

    })

    response = await apiRequestContext.get(baseURL, {

        headers:{

            "x-api-key": "reqres_123a63cda1f448c1883661b9a94ead0c"
        }
    })

})


Then('The response status code of get should be {int}',async function(expectedStatusCode){

    expect(response.status()).toBe(expectedStatusCode)

    const responseBody = await response.json()

    console.log(responseBody)

    console.log(responseBody.data[0].email) //michael.lawson@reqres.in

    console.log(responseBody.data[1].id)  //8

    expect(responseBody.data[0].email).toBe('michael.lawson@reqres.in')

})

Given('I send a post request with body', async function (requestBody) {
  
     const baseURL = 'https://reqres.in/api/users'

    const apiRequestContext = await request.newContext({

        baseURL : baseURL

    })

    response = await apiRequestContext.post(baseURL, {

        headers:{

            "x-api-key": "reqres_123a63cda1f448c1883661b9a94ead0c"
        },

        data : JSON.parse(requestBody)
    })

});

Then('The response status code of post should be {int}', async function (expectedStatusCode) {

   expect(response.status()).toBe(expectedStatusCode)

});

Given('I send a put request with body', async function (requestBody) {
  
     const baseURL = 'https://reqres.in/api/users/2'

    const apiRequestContext = await request.newContext({

        baseURL : baseURL

    })

    response = await apiRequestContext.put(baseURL, {

        headers:{

            "x-api-key": "reqres_123a63cda1f448c1883661b9a94ead0c"
        },

        data : JSON.parse(requestBody)
    })

});

Then('The response status code of put should be {int}', async function (expectedStatusCode) {

   expect(response.status()).toBe(expectedStatusCode)

});

Given('I send a patch request with body', async function (requestBody) {
  
     const baseURL = 'https://reqres.in/api/users/2'

    const apiRequestContext = await request.newContext({

        baseURL : baseURL

    })

    response = await apiRequestContext.patch(baseURL, {

        headers:{

            "x-api-key": "reqres_123a63cda1f448c1883661b9a94ead0c"
        },

        data : JSON.parse(requestBody)
    })

});

Then('The response status code of patch should be {int}', async function (expectedStatusCode) {

   expect(response.status()).toBe(expectedStatusCode)

});