package com.desafiot.desafio.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.desafiot.desafio.repositories.SkillRepository;

@Service
public class SkillService {

    @Autowired
    private SkillRepository skillRepository;
}
