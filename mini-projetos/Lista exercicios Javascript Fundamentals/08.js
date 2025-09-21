const usuariosJson = `[
    {"id": 1, "nome": "Alice", "isActive": true},
    {"id": 2, "nome": "Bob", "isActive": false},
    {"id": 3, "nome": "Charlie", "isActive": true}
]`;

const usuarios = JSON.parse(usuariosJson);

const infoUsuarios = usuarios.map( usuarios => `ID: ${usuarios.id}, Nome: ${usuarios.nome}`);

console.log(infoUsuarios);