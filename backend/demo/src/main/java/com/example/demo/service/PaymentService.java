package com.example.demo.service;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Payment;
import com.example.demo.repository.PaymentRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public Payment  savePayment(Payment  paymentModel) {
        return paymentRepository.save(paymentModel);
    }

    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    public Payment getPaymentById(Long id) {
        return paymentRepository.findById(id).orElse(null);
    }
    public Payment updatePayment(Long id, Payment paymentModel) {
        Optional<Payment> existingPaymentOpt = paymentRepository.findById(id);
        if (existingPaymentOpt.isPresent()) {
            Payment existingPayment = existingPaymentOpt.get();
            existingPayment.setCardNumber(paymentModel.getcardNumber());
            existingPayment.setCardName(paymentModel.getcardName());
            existingPayment.setCvv(paymentModel.getcvv());
            existingPayment.setExpiryDate(paymentModel.getexpiryDate());
            existingPayment.setPhone(paymentModel.getphone());
            return paymentRepository.save(existingPayment);
        } else {
            return null;
        }
    }

    public void deletePayment(Long id) {
        paymentRepository.deleteById(id);
    }
    
}
