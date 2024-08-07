package com.example.demo.Model;

import jakarta.persistence.Entity;

import jakarta.persistence.Id;

@Entity
public class Reach {
    public Reach(int userId, String firstname, String lastname, String email, Long phone_number, String message) {
        this.userId = userId;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phone_number = phone_number;
        this.message = message;
    }


    @Id
    int userId;
    String firstname;
    String lastname;
    String email;
    Long phone_number;
    String message;
   

    public Reach()
    {
        
    }


    public int getUserId() {
        return userId;
    }


    public void setUserId(int userId) {
        this.userId = userId;
    }


    public String getFirstname() {
        return firstname;
    }


    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }


    public String getLastname() {
        return lastname;
    }


    public void setLastname(String lastname) {
        this.lastname = lastname;
    }


    public String getEmail() {
        return email;
    }


    public void setEmail(String email) {
        this.email = email;
    }


    public Long getPhone_number() {
        return phone_number;
    }


    public void setPhone_number(Long phone_number) {
        this.phone_number = phone_number;
    }


    public String getMessage() {
        return message;
    }


    public void setMessage(String message) {
        this.message = message;
    }
}
