const base_url = "https://localhost:7145/api/"

export async function getOrder() {
    const res = await fetch(`${base_url}order`)
    return res.json();
}

export async function createOrder(data) {
    const res = await fetch(`${base_url}create_order`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return res.json();
}

export async function updateOrder(data) {
    const res = await fetch(`${base_url}update_order`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return res.json();
}

export async function delOrder(data) {
    const res = await fetch(`${base_url}del_order`, {
        method: "Delete",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return res.json();
}