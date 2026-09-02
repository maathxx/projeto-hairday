import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"
const periods = document.querySelectorAll (".period")


// Gera evento de click para cada periodo (Manhã, Tarde e Noite)
periods.forEach((periods) => {
    // Captura o evento de click na lista
    periods.addEventListener("click", async (event) => {
        if (event.target.classList.contains("cancel-icon")) {
            // Obtém a li pai do elemento clicado
            const item = event.target.closest("li")

            // Pega p id do agendamento para remover
            const { id } = item.dataset
            
            // Confirma que o id foi selecionado
            if (id) {
                // Confirma se o usuario quer cancelar
                const isConfirm = confirm(
                    "Tem certeza que deseja cancelar o agendamento?"
                )

                if (isConfirm) {
                    // Faz a requisição na API para cancelar
                    await scheduleCancel ({ id })

                    // Recarrega os agendamentos
                    schedulesDay ()
                }
            }
        }
    })
})