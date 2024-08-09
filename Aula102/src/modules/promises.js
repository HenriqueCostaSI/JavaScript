function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Resolvendo promise...');
            resolve();
        }, 3000);
    });
}

export default async function () {
    await promise();
    console.log('Promise resolvida!');
}

