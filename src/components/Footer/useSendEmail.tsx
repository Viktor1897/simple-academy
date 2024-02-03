import { RefObject, useState } from "react";
import emailjs from "@emailjs/browser";


/**
 * The hook to send emails from the feedback form to the emailjs.com and later it will be redirrected to the admin's email;
 */
export const useSendEmail = () => {
    const [response, setResponse] = useState<string | undefined>();
    const [error, setError] = useState<string | undefined>();
    const [pending, setPending] = useState<boolean>(false);
  
    const putData = (form: RefObject<HTMLFormElement>) => {
        setPending(true);
        setError("");
        setResponse("");

        form.current && emailjs.sendForm("service_3z5ilpi", "template_b5tqopc", form.current, "d91Ioirjz-pzc7rin")
        .then((result) => {
            setResponse(result.text);
            form.current?.reset();
        }, (error) => {
            setError(error.text);
        }).finally(() => setPending(false));
    };
  
    return { putData, response, error, pending };
  };
