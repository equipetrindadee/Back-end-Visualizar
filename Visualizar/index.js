import React, { useState, useEffect } from 'react';
import api from "../../config/configApi.js"
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'



export const Visualizar = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [showPopover, setShowPopover] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/users');
                setData(Array.isArray(response.data.users) ? response.data.users : []);
            } catch (error) {
                console.error('Erro ao obter os usuários:', error);
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <header>

                <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
                    <div className="container-fluid">
                        <div className="dashboard-logo">
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link select" aria-current="page" href="#"><i
                                        className="bi bi-speedometer2"></i></a>
                                    <a href="#">
                                        <p className="nav-text select">Dashboard</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="listar"><i className="bi bi-table"></i></a>
                                    <a href="./listar">
                                        <p className="nav-text">Listar</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="./formulario"><i className="bi bi-door-open-fill"></i></a>
                                    <a href="./formulario">
                                        <p className="nav-text">Formulário</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="./visualizar"><i className="bi bi-house"></i></a>
                                    <a href="./visualizar">
                                        <p className="nav-text ">Visualizar</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./alert"><i className="bi bi-exclamation-octagon-fill "></i></a>
                                    <a href="./alert">
                                        <p className="nav-text">Alerta</p>
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link d" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <i className="bi bi-person-circle"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        <li className="d-flex">
                                            <a className="dropdown-item login" href="#">Login</a>
                                            <a className="dropdown-item cadastrar" href="#">Cadastrar</a>
                                        </li>
                                    </ul>
                                    <a href="#">
                                        <p className="nav-text">Custumers</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </header>
            <section>
                <div className="card-view parent">
                    <div className="head-card div1">
                        {error && <p>{error}</p>}
                        {data.length === 0 ? (
                            <p>Nenhum usuário encontrado.</p>
                        ) : (
                            <div className="users-list">
                                {data.map(user => (
                                    <ul key={user.id} className='users'>
                                        <li> <p>ID: {user.id}</p></li>
                                        <li> <p>Nome: {user.name}</p></li>
                                        <li> <p>Email: {user.email}</p></li>
                                        <button onClick={() => setShowPopover(user.id)}>Mostrar Popover</button> {/* Alterado para passar o ID do usuário */}
                                        {showPopover === user.id && ( // Alterado para verificar se o ID do usuário é igual ao showPopover
                                            <div className="popover">
                                                <div className="popover-content">
                                                    {/* Conteúdo do popover aqui */}
                                                    <div class="parent">
                                                        <div class="popdiv1"><p>ID: {user.id}</p></div>
                                                        <div class="popdiv2"> <p>Nome: {user.name}</p></div>
                                                        <div class="popdiv3"><p>Email: {user.email}</p> </div>
                                                        <div class="popdiv4"> <p>Password: {user.password}</p></div>
                                                        <div class="popdiv5"><p>CPF: {user.cpf}</p> </div>
                                                        <div class="popdiv6"> <p>Cep: {user.cep}</p></div>
                                                        <div class="popdiv7"><p>Estado: {user.estado}</p> </div>
                                                        <div class="popdiv8"> <p>Cidade: {user.cidade}</p></div>
                                                        <div class="popdiv9"><p>Rua: {user.rua}</p> </div>
                                                        <div class="popdiv10"> <button onClick={() => setShowPopover(null)}>Fechar</button> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </ul>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};



export default Visualizar;
