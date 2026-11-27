import { test, expect } from '@playwright/test';

const url: string = 'https://api.restful-api.dev/objects';
let response: any;
let id: string;

const cpuModel = 'CPU model';
const hardDisk = 'Hard disk size';

const postPayload = {
    "name": "Apple MacBook 2026",
    "data": {
        "year": 2026,
        "price": 2026.99,
        "CPU model": "Intel Core i9 2026",
        "Hard disk size": "256 TB"
    }
};

const putPayload = {
    "name": "Apple MacBook 2026 Put Request",
    "data": {
        "year": 2050,
        "price": 2050.99,
        "CPU model": "Intel Core i9 2050",
        "Hard disk size": "2050 TB"
    }
};

const expHeaders = {
    "Content-Type": "application/json"
}

const patchPayload = {
    "name": "Apple MacBook 2026 Patch update"
};

test('Post Request', async ({ request }) => {

    const postResponse = await request.post(url, {
        data: postPayload,
        headers: expHeaders
    }
    );
    console.log(postResponse.status());
    console.log(postResponse.statusText());

    response = await postResponse.json();
    // console.log(response);
    id = response.id;
    // console.log(id);
    // console.log(response.name);
    // console.log(response.createdAt);
    // console.log(response.data.year);
    // console.log(response.data.price);
    // console.log(response.data[cpuModel]);
    // console.log(response.data[hardDisk]);

});

test('Get Request', async ({ request }) => {

    const getResponse = await request.get(`${url}/${id}`);

    console.log(getResponse.status());
    console.log(getResponse.statusText());
    response = await getResponse.json();
    // console.log(id);
    // console.log(response.name);
    // console.log(response.data.year);
    // console.log(response.data.price);
    // console.log(response.data[cpuModel]);
    // console.log(response.data[hardDisk]);

    expect.soft(response.name).toBe(postPayload.name);
    expect.soft(response.data.year).toBe(postPayload.data.year);
    expect.soft(response.data.price).toBe(postPayload.data.price);
    expect.soft(response.data[cpuModel]).toBe(postPayload.data[cpuModel]);
    expect.soft(response.data[hardDisk]).toBe(postPayload.data[hardDisk]);

    console.log("=============================");

});

test('Put Request', async ({ request }) => {

    const putResponse = await request.put(`${url}/${id}`, {
        data: putPayload,
        headers: expHeaders
    }
    );
    console.log(putResponse.status());
    console.log(putResponse.statusText());

    response = await putResponse.json();
    // console.log(response);
    // id = response.id;
    // console.log(id);
    // console.log(response.name);
    // console.log(response.updatedAt);
    // console.log(response.data.year);
    // console.log(response.data.price);
    // console.log(response.data[cpuModel]);
    // console.log(response.data[hardDisk]);

    expect.soft(response.name).toBe(putPayload.name);
    expect.soft(response.data.year).toBe(putPayload.data.year);
    expect.soft(response.data.price).toBe(putPayload.data.price);
    expect.soft(response.data[cpuModel]).toBe(putPayload.data[cpuModel]);
    expect.soft(response.data[hardDisk]).toBe(putPayload.data[hardDisk]);

});

test('Patch Request', async ({ request }) => {

    const patchResponse = await request.patch(`${url}/${id}`, {
        data: patchPayload,
        headers: expHeaders
    }
    );
    console.log(patchResponse.status());
    console.log(patchResponse.statusText());

    response = await patchResponse.json();
    // console.log(response);
    // id = response.id;
    console.log(id);
    // console.log(response.name);
    // console.log(response.updatedAt);
    // console.log(response.data.year);
    // console.log(response.data.price);
    // console.log(response.data[cpuModel]);
    // console.log(response.data[hardDisk]);

    expect.soft(response.name).toBe(patchPayload.name);

});

test('Delete Request', async ({ request }) => {

    const deleteResponse = await request.delete(`${url}/${id}`);
    console.log(deleteResponse.status());
    console.log(deleteResponse.statusText());

    const headers = deleteResponse.headers();
    console.log(headers);
    expect(headers).toBe(expHeaders);

    response = await deleteResponse.json();
    console.log(response.message);

    expect(response.message).toBe(`Object with id = ${id} has been deleted.`);

});

test('Get Deleted object', async ({ request }) => {

    const getResponse = await request.get(`${url}/${id}`);
    console.log(getResponse.status()); // 404
    expect(getResponse.status()).toBe(404);
    console.log(getResponse.statusText()); // Not Found
    expect(getResponse.statusText()).toBe('Not Found');

    response = await getResponse.json();
    console.log(response.error);

    expect(response.error).toBe(`Object with id=${id} was not found.`);

});





