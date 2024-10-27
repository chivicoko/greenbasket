'use server';

export const addProduct = async (formData) => {
    const {name, category, description, price, image} = Object.fromEntries(formData);

    console.log(name, category, description, price, image);
}
