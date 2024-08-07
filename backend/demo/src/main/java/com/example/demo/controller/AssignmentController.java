package com.example.demo.controller;

import com.example.demo.Model.Assignment;
import com.example.demo.service.AssignmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/assignments")
public class AssignmentController {

    @Autowired
    private AssignmentService assignmentService;

    @GetMapping
    public List<Assignment> getAllAssignments() {
        return assignmentService.getAllAssignments();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Assignment> getAssignmentById(@PathVariable Long id) {
        Optional<Assignment> assignment = assignmentService.getAssignmentById(id);
        return assignment.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Assignment createAssignment(@RequestBody Assignment assignment) {
        return assignmentService.saveAssignment(assignment);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Assignment> updateAssignment(@PathVariable Long id, @RequestBody Assignment assignment) {
        if (!assignmentService.getAssignmentById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        assignment.setAssignmentId(id);
        return ResponseEntity.ok(assignmentService.saveAssignment(assignment));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAssignment(@PathVariable Long id) {
        if (!assignmentService.getAssignmentById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        assignmentService.deleteAssignment(id);
        return ResponseEntity.noContent().build();
    }
}