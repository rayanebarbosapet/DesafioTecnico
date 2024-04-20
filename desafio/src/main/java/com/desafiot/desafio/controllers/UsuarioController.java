package com.desafiot.desafio.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.desafiot.desafio.services.UsuarioService;

@RestController
@RequestMapping
public class UsuarioController {

    @Autowired
    private UsuarioService userServices;

}
