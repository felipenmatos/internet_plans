# Internet Plans

![project2](https://user-images.githubusercontent.com/82072640/206578402-8b52a2a9-684e-4f91-8c63-b8ea95015652.jpg)

O projeto consiste em uma resolução de desafio técnico onde é necessário em 1 dia desenvolver 2 telas de um sistema que já está no ar, são as telas Home e de Ofertas. Na tela Home é possível informar seu CEP para consultar localidade e planos disponíveis para contratação. Ao consultar você é redirecionado para a tela de Ofertas com algumas possíveis ofertas para sua localidade, fica a sua disponsição do interesse da contratação ou não. Clicando em Contratar você deve informar seu e-mail no modal para que alguma unidade técnica próxima possa fazer o contato. 

## Como foi desenvolvido o Projeto 

O desenvolvimento das telas teve como principais tecnologias: Javascript, React, Typescript, Styled-Components, Hooks, React Router, Context Api, Api externa (Via Cep), LocalStorage, Jest, Figma. É possível notar que o projeto foi desenvolvido com design system pessoal, criado no Figma com base nas informações iniciais. Logo em seguinda foi desenvolvido em React, com componentes reutilizáveis com Typescript passando suas devidas tipagem estáticas. O projeto conta com um sistema de Rotas autenticadas onde é possível acessar a rota privada somente com a autenticação da mesma pelo localStorage. A api consumida disponibiliza o endereço para consulta, no qual seu objeto foi armazenado em uma variável global no Context, para ser populada na página de Ofertas. Foi utilizada o Fetch para fazer a requisição do Client Side para obter informações. O sistema conta com responsividade mobile desenvolvida no styled-components seguindo padrões de flex-box para renderização que agrade a usabilidade. 

## Tecnologias: 
### Javascript
### React
### Typescript
### Styled-components
### Hooks 
### React Router
### Jest
### Context Api
### LocalStorage
### Figma

# Protótipo no Figma 

![image](https://user-images.githubusercontent.com/82072640/195184362-48838b8a-4282-4621-a725-084d6cda6ee7.png)

# Vídeo de usabilidade 

https://user-images.githubusercontent.com/82072640/195184544-5d6a1e92-bca7-49da-849f-d5d8b84a32fb.mp4

# Imagens das Telas 


![HomeWeb](https://user-images.githubusercontent.com/82072640/195184820-6bc233b8-2145-405f-a7fd-8d841e63f532.jpg)

![ValidationCep](https://user-images.githubusercontent.com/82072640/195184865-4d628bde-9d10-441a-8d1e-c5b4b93903d8.jpg)

![OffersWeb](https://user-images.githubusercontent.com/82072640/195184899-acedbb53-8689-47a5-b73d-363ee5246bb4.jpg)

![ContactOffers](https://user-images.githubusercontent.com/82072640/195184944-25b13cc2-e26d-4a3c-a3bc-036def02f43f.jpg)

![HomeMobile](https://user-images.githubusercontent.com/82072640/195184971-0cbc8012-da64-47b5-b448-e37a54d45005.jpg)

![MobileValidation](https://user-images.githubusercontent.com/82072640/195184999-9c5785bd-afe0-4525-ad37-122a1e6f1641.jpg)

![OffersMobile](https://user-images.githubusercontent.com/82072640/195185016-904a2f90-2f43-4e1d-9315-7a5015b7a8ea.jpg)

![ContactOffersMobile](https://user-images.githubusercontent.com/82072640/195185041-084cb36a-534a-47a3-815d-2d9ce4e9983b.jpg)






