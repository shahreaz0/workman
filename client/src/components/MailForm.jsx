import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
	subject: yup.string().required(),
	body: yup.string().required(),
});

const MailForm = (props) => {
	const onSubmitForm = async (data) => {
		console.log("dada", data);
		// try {
		// 	await axios.post("http://localhost:3001/api/employees", {
		// 		firstName: data.firstName,
		// 		lastName: data.lastName,
		// 		email: data.email,
		// 	});
		// 	alert("successful");
		// } catch (e) {
		// 	console.log(e);
		// }
	};

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		resolver: yupResolver(schema),
	});

	return (
		<div className="my-5">
			<form onSubmit={handleSubmit(onSubmitForm)} className="mx-auto">
				<div className="col-md-12">
					<label htmlFor="subject" className="form-label">
						Subject
					</label>
					<input
						type="subject"
						className="form-control"
						id="subject"
						{...register("subject")}
					/>
					<div className="my-2">
						<p className="error-msg">{errors["subject"]?.message}</p>
					</div>
				</div>

				<div className="col-md-12">
					<label htmlFor="subject" className="form-label">
						Body
					</label>
					<textarea
						className="form-control"
						id="body"
						{...register("body")}
					></textarea>
					<div className="my-2">
						<p className="error-msg">{errors["body"]?.message}</p>
					</div>
				</div>

				<input type="submit" className="btn btn-dark" />
			</form>
		</div>
	);
};

export default MailForm;