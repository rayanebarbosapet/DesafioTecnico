package com.desafiot.desafio.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.desafiot.desafio.entities.Skill;

@Repository
public interface SkillRepository extends JpaRepository<Skill, Long> {

}
