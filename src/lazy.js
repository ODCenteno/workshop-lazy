
const isIntersecting = (entry) => {
    return entry.isIntersecting;
}

const action = (entry) => {
    const node = entry.target;
    console.log('holis');

    // Dejar de observar el nodo especificado
    observer.unobserve(node)
}

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(action);
});

export const registerImage = (image) => {
    // IntersectionObserver => Observar imagen
    observer.observe(image);
};