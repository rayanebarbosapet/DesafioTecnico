package com.desafiot.desafio.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.desafiot.desafio.DTO.LoginRequestDTO;
import com.desafiot.desafio.entities.Usuario;
import com.desafiot.desafio.repositories.UsuarioRepository;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository repository;

    public Usuario findByLoginSenha(String login, String senha) {
        return repository.findByLoginAndSenha(login, senha);
    }

    public Usuario cadastro(String login, String senha, String confirmeSenha){
        return repository.save( login, senha);
    }
}
