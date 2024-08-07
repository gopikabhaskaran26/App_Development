package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Register;

@Repository
public interface registerRepository extends CrudRepository<Register, Long> {
}