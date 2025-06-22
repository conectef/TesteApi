*** Settings ***
Library    RequestsLibrary

*** Variables ***
${BASE_URL}    http://localhost:3000

*** Test Cases ***
Deve obter lista de tarefas
    Create Session    minha_api    ${BASE_URL}
    ${resp}=    GET    ${BASE_URL}/tarefas
    Should Be Equal As Integers    ${resp.status_code}    200
