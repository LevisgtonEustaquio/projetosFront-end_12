const usuariosJson = `[
    {"id": 1, "nome": "Alice", "isActive": true},
    {"id": 2, "nome": "Bob", "isActive": false},
    {"id": 3, "nome": "Charlie", "isActive": true}
]`;

const usuarios = JSON.parse(usuariosJson);

const usuariosAtivos = usuarios.filter(usuarios => usuarios.isActive === true);

console.log(usuariosAtivos);
/* Resultado esperado:
[
    { id: 1, nome: 'Alice', isActive: true },
    { id: 3, nome: 'Charlie', isActive: true }
]
*/