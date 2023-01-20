import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

import { Main } from "./styles";
import api from "../../services/api";

interface IData {
  amount: number;
  installments: number;
  mdr: number;
}

const Form = () => {
  const [valueTomorrow, setValueTomorrow] = useState<Number>(0);
  const [value15Days, setValue15Days] = useState<Number>(0);
  const [value30Days, setValue30Days] = useState<Number>(0);
  const [value90Days, setValue90Days] = useState<Number>(0);

  const formSchema = yup.object().shape({
    amount: yup.number().required("Você deve inserir um valor!"),
    installments: yup
      .number()
      .required("Você deve inserir um número de parcelas!"),
    mdr: yup.number().required("Você deve inserir o percentual de MDR!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IData>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: IData) => {
    api
      .post("/", data)
      .then((response) => {
        let inputData = response.data;
        let values: Number[] = Object.values(inputData);
        setValueTomorrow(values[0]);
        setValue15Days(values[1]);
        setValue30Days(values[2]);
        setValue90Days(values[3]);
      })
      .catch((error) => toast.error("Houve um problema!"));
  };

  return (
    <Main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Simule sua antecipação:</h1>
        <label htmlFor="amount">Informe o valor da venda:</label>
        <input
          type="number"
          placeholder="R$"
          id="amount"
          {...register("amount")}
        />
        <p>{errors.amount?.message}</p>

        <label htmlFor="installments">Em quantas parcelas:</label>
        <input type="number" id="installments" {...register("installments")} />
        <p>Máximo de 12 parcelas</p>

        <label htmlFor="mdr">Informe o percentual de MDR:</label>
        <input type="number" id="mdr" {...register("mdr")} />

        <button type="submit">CALCULAR</button>
      </form>

      <div className="results">
        <h2>VOCÊ RECEBERÁ:</h2>
        <h4>
          <>Amanhã: R$ {valueTomorrow}</>
        </h4>
        <h4>
          <>Em 15 dias: R$ {value15Days}</>
        </h4>
        <h4>
          <>Em 30 dias: R$ {value30Days}</>
        </h4>
        <h4>
          <>Em 90 dias: R$ {value90Days}</>
        </h4>
      </div>
    </Main>
  );
};

export default Form;
