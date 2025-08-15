const API_URL = "http://localhost:8080/api/category";

export async function getCategories(){
    const res = await fetch(`${API_URL}/getDataCategories`)
    return res.json();
}

export async function createCategory(dataCategory) {
    const res = await fetch(`${API_URL}/newCategory`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dataCategory)
    })
}

export async function updateCategory(idCategory, dataCategory) {
    const res = await fetch(`${API_URL}/updateCategory/${idCategory}`, {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dataCategory)
    })
}

export async function deleteCategory(idCategory) {
    await fetch(`${API_URL}/deleteCategory/${idCategory}`, {
        method: "DELETE",
    })
}