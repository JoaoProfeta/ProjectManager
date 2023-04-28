import * as yup from "yup";


export const signUpFormSchema = yup.object().shape({
	email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
	password: yup
		.string()
		.required("Senha obrigatória")
		.min(6, "Máximio de 6 caracteres"),
	repeatPassword: yup
		.string()
		.oneOf([ yup.ref("password"), null ], "Senhas não coincidem"),
	userName: yup
		.string()
		.required("user name obrigatório")
});
