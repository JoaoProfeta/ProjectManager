import * as yup from "yup";


export const signInFormSchema = yup.object().shape({
	email: yup
		.string()
		.required("E-mail obrigatório")
		.email("E-mail inválido"),
	password: yup
		.string()
		.required("Senha obrigatória")
		.min(3, "Máximio de 6 caracteres")
});
