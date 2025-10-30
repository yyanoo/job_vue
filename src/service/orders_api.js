const base_url = "https://localhost:7145/api/order/"

export async function getOrder() {
    const res = await fetch(`${base_url}get`)
    return res.json();
}

export async function getOrder_pageNum() {
    const res = await fetch(`${base_url}get_pageNum`)
    return res.json();
}

export async function getOrder_page(page, page_size) {
    const res = await fetch(`${base_url}page/${page}/${page_size}`)
    return res.json();
}

export async function createOrder(data) {
    const res = await fetch(`${base_url}create`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return res.json();
}

export async function updateOrder(data) {
    const res = await fetch(`${base_url}update`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return res.json();
}

export async function delOrder(data) {
    const res = await fetch(`${base_url}del`, {
        method: "Delete",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return res.json();
}