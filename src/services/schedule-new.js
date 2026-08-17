import { apiConfig } from "./api-config.js"

export async function scheduleNew ({ id, name, when }) {
    try {
        // Faz a requisição para enviar os dados do agendamento.
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id, name, when })
        })

        // Exibe a mensagem do agendamento realizado.
        alert ("Agendamento realizado com sucesso!")
    } catch (error) {
        console.log(error)
        alert("Não foi possivel realizar o agendamento, tente novamente mais tarde")
    }
}