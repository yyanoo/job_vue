const base_url = "https://localhost:7145/api/product/"

export async function getProduct() {
    const res = await fetch(`${base_url}get`)
    return res.json();
}

export async function createProduct(data) {
    const res = await fetch(`${base_url}create`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return res.json();
}

export async function findProduct(data) {
    const res = await fetch(`${base_url}find_product`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return res.json();
}

export async function updateProduct(data) {
    const res = await fetch(`${base_url}update`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return res.json();
}

export async function delProduct(data) {
    const res = await fetch(`${base_url}del`, {
        method: "Delete",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return res.json();
}