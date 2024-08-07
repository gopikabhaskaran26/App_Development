package com.example.demo.controller;

import com.example.demo.Model.Register;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<Register> createRegister(@RequestBody Register register) {
        try {
            Register newRegister = userService.createRegister(register);
            return ResponseEntity.ok(newRegister);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @GetMapping
    public ResponseEntity<List<Register>> getAllRegisters() {
        List<Register> registers = userService.getAllRegisters();
        return ResponseEntity.ok(registers);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Register> getRegisterById(@PathVariable Long id) {
        Optional<Register> register = userService.getRegisterById(id);
        return register.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Register> updateRegister(@PathVariable Long id, @RequestBody Register updatedRegister) {
        Optional<Register> updated = userService.updateRegister(id, updatedRegister);
        return updated.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteAllRegisters() {
        userService.deleteAllRegisters();
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRegisterById(@PathVariable Long id) {
        try {
            userService.deleteRegisterById(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/logins/{id}")
    public ResponseEntity<Void> deleteLoginById(@PathVariable Long id) {
        try {
            userService.deleteLoginById(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}