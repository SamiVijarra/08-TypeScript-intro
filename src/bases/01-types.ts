export const name: string = 'TypeScript'; 
export const age: number = 35;
export const isValid: boolean = true;

export const templateString: string = 
`Esto es un string
multilinea 
que puede tener 
" dobles
' simples 
inyectar valores ${name}
expresiones ${ 1 + 1}
numeros ${age}
booleanos ${isValid}
`;

console.log(templateString);