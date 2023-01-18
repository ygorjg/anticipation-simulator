import { Main } from "./styles";

const Form = () => {
  return (
    <Main>
      <form>
        <h1>Simule sua antecipação:</h1>
        <label htmlFor="amount">Informe o valor da venda:</label>
        <input type="number" placeholder="R$" />

        <label htmlFor="installments">Em quantas parcelas:</label>
        <input type="number" />
        <p>Máximo de 12 parcelas</p>

        <label htmlFor="mdr">Informe o percentual de MDR:</label>
        <input type="number" />

        <button type="submit">Calcular</button>
      </form>

      <div className="results">
        <h2>VOCÊ RECEBERÁ:</h2>
        <h4>Amanhã: R$ 0,00</h4>
        <h4>Em 15 dias: R$ 0,00</h4>
        <h4>Em 30 dias: R$ 0,00</h4>
        <h4>Em 90 dias: R$ 0,00</h4>
      </div>
    </Main>
  );
};

export default Form;
