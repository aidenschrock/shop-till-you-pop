export async function fetchProducts() {
  return await (await fetch("api/products")).json();
}

export async function fetchProductsByCategory(category) {
  return await (await fetch(`api/products?filter.category=${category}`)).json();
}
