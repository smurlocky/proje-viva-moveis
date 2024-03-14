import { useState } from 'react'
import './Form.css'
function Forms() {

  const [formData, setFormData] = useState({
    identificador: '',
    nomeCliente: '',
    descricaoNecessidade: '',
    dataHora: '',
    estadoBriefing: 'negociacao'
  });

  // Esta função é responsavel por atualizar o estado do componente com o valor do input. 
  // O valor do input é atualizado no estado do componente com o setFormData. 
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

  // Esta função é responsavel por capturar o evento de submit do formulário e imprimir o valor do estado do componente.
  // O valor do estado do componente é imprimido com o console.log, futuramente pode ser usada para enviar os dados do form para o servidor ou banco.
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }
    

    return (
      <div className="container">
        <h1>Cadastra Briefing</h1>
        <p>Insira os dados do briefing abaixo:</p>
        <form className='form-container' onSubmit={handleSubmit}>
          <div>
            <label>
              Identificador:
              <input
                type="number"
                name="identificador"
                value={formData.identificador}
                onChange={handleChange}
                min="0"
              />
            </label>
          </div>
          <div>
            <label>
              Nome do Cliente:
              <input
                type="text"
                name="nomeCliente"
                value={formData.nomeCliente}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Descrição da Necessidade do Cliente:
              <textarea
                name="descricaoNecessidade"
                value={formData.descricaoNecessidade}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Data/Hora:
              <input
                type="datetime-local"
                name="dataHora"
                value={formData.dataHora}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Estado do Briefing:
              <select
                name="estadoBriefing"
                value={formData.estadoBriefing}
                onChange={handleChange}
              >
                <option value="negociacao">Negociação</option>
                <option value="finalizado">Finalizado</option>
                <option value="aprovado">Aprovado</option>
              </select>
            </label>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    )
}

export default Forms