Este projeto é parte de um teste prático para um processo seletivo referente à vaga de Analista de Desenvolvimento - Programador Back-end PHP. Este repositório consiste no Back-end da aplicação Imgger, para gerenciamento de um banco de imagens.
<br>
Desenvolvido em PHP com Framework Laravel<br >
<br>
<img src="https://www.cuby.com.br/cli/imgger/imgger.png">
<br>
<br>
Aplicação web para gerenciamento de imagens (banco de imagens), contendo dois perfis de acesso, com duas visões diferentes (administrador e usuário).<br>
<br>
### Bibliotecas mais importantes
<br>
<ul>
<li><a href="https://github.com/fruitcake/laravel-cors" target="_blank">fruitcake/laravel-cors</a> para autorizar conexão do cliente</li>
<li><a href="https://github.com/tymondesigns/jwt-auth" target="_blank">tymon/jwt-auth</a> para tokens de autenticação</li>
</ul>
<br>
*********

Utilização:

Front-end em ReactJS
https://github.com/CrisGiordani/imgger-frontend


1. $ git clone https://github.com/CrisGiordani/imgger-backend
2. $ cd imgger-backend  
3. $ composer install
4. $ php artisan storage:link
4. $ php artisan serve

Para testar sem front-end, uma alternativa é utilizar o <a href="https://insomnia.rest/" target="_blank">Insomnia</a>.
Configuração do Insomnia disponível na pasta _insomnia (importar)

<img src="https://www.cuby.com.br/cli/imgger/insomnia.png">

***********

<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

