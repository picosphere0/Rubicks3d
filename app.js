const blob = document.getElementsById("blob");

document.body.onpointermove = event => {
    const { clientX, clientY} = event;
}

blob.style.left = `${clientX}px`;
blobl.style.top = `${clientY}px`;