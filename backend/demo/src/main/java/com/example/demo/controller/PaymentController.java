package com.example.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Model.Payment;
import com.example.demo.service.PaymentService;

import java.util.List;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/submit")
    public Payment submitPayment(@RequestBody Payment paymentModel) {
        return paymentService.savePayment(paymentModel);
    }

    @GetMapping("/all")
    public List<Payment> getAllPayments() {

        return paymentService.getAllPayments();
    }

    @PutMapping("/all/{id}")
    public Payment updatePayment(@PathVariable Long id, @RequestBody Payment paymentModel) {
        return paymentService.updatePayment(id, paymentModel);
    }

    @DeleteMapping("/delete/{id}")
    public void deletePayment(@PathVariable Long id) {
        paymentService.deletePayment(id);
    }
}
