const produtos = {
	"produto1": {
			"produto": "Notebook", "preco": 3500,
			"estoque": true,
			"cliente": "João",
			"id": 1
	},
	"produto2": {
			"produto": "Fone",
			"preco": 200,
			"estoque": true,
			"cliente": "Maria",
			"id": 2
	},
	"produto3": {
			"produto": "Monitor", "preco": 1000,
			"estoque": true,
			"cliente": "Clara",
			"id": 3
	}
}

const jsonString = JSON.stringify(produtos); // converte objeto em string JSON
const objeto = JSON.parse(jsonString);       // agora sim, parse da string para objeto
console.log(objeto);
