package com.desafiot.desafio.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.desafiot.desafio.CadastroRequestDTO;
import com.desafiot.desafio.DTO.LoginRequestDTO;
import com.desafiot.desafio.DTO.ResponseDTO;
import com.desafiot.desafio.config.TokenService;
import com.desafiot.desafio.entities.Usuario;
import com.desafiot.desafio.repositories.UsuarioRepository;
import com.desafiot.desafio.services.UsuarioService;

@RestController
@RequestMapping("/")
public class UsuarioController {

    @Autowired
    private UsuarioService service;

    @Autowired
    private UsuarioRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private TokenService tokenService;

    @GetMapping("/login")
    public ResponseEntity<Usuario> login(@RequestBody LoginRequestDTO body) {
        Usuario usuario = service.findByLoginSenha(body.login(), body.senha());
        if (usuario != null) {
            return ResponseEntity.ok(usuario);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/Cadastro")
    public ResponseEntity<Usuario> Cadastro(@RequestBody CadastroRequestDTO body){
        Usuario usuario = service.cadastro(body);
        if(body.senha().equals(usuario.getSenha())){ 
        return ResponseEntity.ok(usuario);

        } return ResponseEntity.badRequest().build();
    }
}
