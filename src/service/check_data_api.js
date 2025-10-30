const base_url = "https://localhost:7145/api/orderproduct/"

export async function Check_order(id) {
    const res = await fetch(`${base_url}order/${id}`)
    return res.json();
}

export async function Check_product(id) {
    const res = await fetch(`${base_url}product/${id}`)
    return res.json();
}
